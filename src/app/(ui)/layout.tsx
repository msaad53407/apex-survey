import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectModal from "@/components/ProjectModal";
import type React from "react";

const UILayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<ProjectModal />
		</>
	);
};

export default UILayout;
