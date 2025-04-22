"use client";

import Image from "next/image";
import { useActiveProject } from "@/hooks/useActiveProject";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";

export const ProjectCard = ({
	project,
	className,
}: {
	project: Project;
	className?: string;
}) => {
	const { setActiveProject } = useActiveProject();

	const setActiveProjectHandler = () => {
		setActiveProject(project);
	};

	return (
		<Card className={cn("flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow", className)}>
			<CardHeader className="p-0">
				<div className={cn("relative overflow-hidden aspect-video")}>
					<Image
						src={project.thumbnail}
						alt={project.title}
						placeholder="blur"
						blurDataURL="/placeholder.jpg"
						fill
						className="object-cover transition-transform hover:scale-105 overflow-hidden rounded-t-xl"
					/>
					<div className="absolute bottom-2 right-2 bg-apex-blue text-white px-2 py-1 rounded text-sm capitalize">
						{project.type}
					</div>
				</div>
			</CardHeader>
			<CardContent className="flex-1 p-6">
				<h3 className="text-2xl text-apex-blue font-semibold tracking-tight mb-3">
					{project.title}
				</h3>
				<p className="text-muted-foreground mb-4 line-clamp-2">
					{project.description}
				</p>
				<div className="space-y-2">
					<h4 className="text-sm font-semibold text-apex-dark">Key Features:</h4>
					<ul className="grid grid-cols-1 gap-2">
						{project.features.slice(0, 3).map((feature, index) => (
							<li key={index} className="flex items-center gap-2">
								<Image
									src="/icons/check-icon.svg"
									alt="check"
									width={16}
									height={16}
									className="flex-shrink-0"
								/>
								<span className="text-sm text-muted-foreground">{feature}</span>
							</li>
						))}
					</ul>
				</div>
			</CardContent>
			<CardFooter className="p-6 pt-0">
				<Button
					className="w-fit px-5 py-2 bg-apex-blue text-white hover:bg-blue-600 transition-colors"
					onClick={setActiveProjectHandler}>
					View Details
				</Button>
			</CardFooter>
		</Card>
	);
};
