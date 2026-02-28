"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { useActiveProject } from "@/hooks/useActiveProject";
import Image from "next/image";
import Link from "next/link";
import ProgressiveImage from "./ui/ProgressiveImage";

const ProjectModal = () => {
	const { setActiveProject, activeProject } = useActiveProject();
    console.log("activeProject", activeProject);
	if (!activeProject) return null;

	return (
		<Dialog
			defaultOpen={true}
			open={activeProject !== null}
			onOpenChange={() => {
				setActiveProject(null);
			}}>
			{activeProject && (
				<DialogContent
					className={
						"h-[calc(100vh-100px)] mx-auto w-[98%] rounded-lg md:w-[50%] max-w-[90%] overflow-y-scroll"
					}>
					<DialogHeader>
						<DialogTitle className="sr-only">View Project Details</DialogTitle>
						<DialogDescription className="sr-only">
							This dialog is for viewing the details of an electrical project.
						</DialogDescription>
					</DialogHeader>
					<div className="space-y-8">
						<div className="space-y-4">
							<ProgressiveImage
								lowSrc="/243.jpg"
								highSrc={activeProject.thumbnail}
								alt={activeProject.title}
								width={1000}
								height={1000}
								className="object-cover w-full rounded-xl aspect-video min-h-[300px]"
							/>
							<div className="flex gap-4 items-center justify-between">
								<h3 className="text-2xl font-medium text-apex-blue">
									{activeProject.title}
								</h3>
								<div className="flex items-center gap-2">
									<span
										className={`px-3 py-1 rounded-full text-sm ${
											activeProject.type === "commercial"
												? "bg-blue-100 text-blue-800"
												: "bg-green-100 text-green-800"
										}`}>
										{activeProject.type === "commercial"
											? "Commercial"
											: "Residential"}
									</span>
								</div>
							</div>
						</div>

						<p className="text-gray-600 leading-relaxed">
							{activeProject.description}
						</p>

						<div>
							<h4 className="text-xl font-medium mb-4 text-apex-blue">
								Project Features
							</h4>
							<ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
								{activeProject.features.map((feature, index) => (
									<li key={index} className="flex items-start gap-2">
										<span className="mt-1">
											<ProgressiveImage
												lowSrc="/243.jpg"
												highSrc="/icons/check-icon.svg"
												alt="Check"
												width={16}
												height={16}
												className="size-4 object-contain text-apex-blue"
											/>
										</span>
										<span className="text-gray-600">{feature}</span>
									</li>
								))}
							</ul>
						</div>

						{activeProject.images && activeProject.images.length > 0 && (
							<div>
								<h4 className="text-xl font-medium mb-4 text-apex-blue">
									Project Gallery
								</h4>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									{activeProject.images.map((image, index) => (
										<div key={index} className="relative aspect-video">
											<ProgressiveImage
												lowSrc="/243.jpg"
												highSrc={image.src}
												alt={image.alt}
												className="object-cover rounded-lg"
											/>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</DialogContent>
			)}
		</Dialog>
	);
};

export default ProjectModal;

