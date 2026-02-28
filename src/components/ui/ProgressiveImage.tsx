"use client";
import { useState, useEffect } from "react";

export function useProgressiveImage(lowSrc: string, highSrc?: string) {
  const [src, setSrc] = useState(lowSrc || "/245.jpg");
  // Only blur if highSrc is provided AND different from lowSrc
  const [isBlurred, setIsBlurred] = useState(!!highSrc && highSrc !== lowSrc);

  useEffect(() => {
    if (!highSrc || highSrc === lowSrc) {
      if (highSrc === lowSrc) setIsBlurred(false);
      return;
    }

    const img = new Image();
    img.src = highSrc;

    img.onload = () => {
      setSrc(highSrc);
      setIsBlurred(false);
    };

    img.onerror = () => {
      if (src !== "/245.jpg") {
        setSrc("/245.jpg");
        setIsBlurred(false);
      }
    };
  }, [lowSrc, highSrc, src]);

  return { src, isBlurred };
}

export default function ProgressiveImage({
  lowSrc,
  highSrc,
  alt,
  width,
  height,
  rounded = "",
  className = "",
}: {
  lowSrc: string;
  highSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  rounded?: string;
  className?: string;
}) {
  const { src, isBlurred } = useProgressiveImage(lowSrc, highSrc);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${rounded} ${className || ""} transition-all duration-500 ease-out ${
        isBlurred ? "blur-md scale-105" : "blur-0 scale-100"
      }`}
      loading="lazy"

      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement;
        if (target.src !== "/245.jpg") {
          target.src = "/245.jpg";
        }
      }}
    />
  );
}

