import { ProjectContext } from "@/context/ActiveProjectContext";
import { useContext } from "react";

export const useActiveProject = () => {
	const context = useContext(ProjectContext);
	if (context === undefined) {
		throw new Error("useProject must be used within a ProjectProvider");
	}
	return context;
};
