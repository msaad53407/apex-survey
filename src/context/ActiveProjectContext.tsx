"use client";
import { Project } from "@/types";
import { createContext, ReactNode, useState } from "react";

// Define the shape of the context state
type ProjectContextType = {
	activeProject: Project | null;
	setActiveProject: (project: Project | null) => void;
};

// Create the context with default values
export const ProjectContext = createContext<ProjectContextType | undefined>(
	undefined
);

// Create a provider component
export const ProjectProvider = ({ children }: { children: ReactNode }) => {
	const [activeProject, setActiveProject] = useState<Project | null>(null);

	return (
		<ProjectContext.Provider value={{ activeProject, setActiveProject }}>
			{children}
		</ProjectContext.Provider>
	);
};
