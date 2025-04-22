import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Projects",
};

export default function ProjectsPage() {
	return (
		<div className="space-y-20 pb-8 w-full">
			{/* Hero Section */}
			<section className="flex items-center flex-col lg:flex-row px-4 py-6 sm:px-6 lg:px-12 pt-28">
				<section className="lg:w-1/2 lg:pr-16">
					<h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4 max-lg:text-center">
						Our Featured 
						<br />
						Projects
					</h1>
					<p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-500">
						Explore our portfolio of successful electrical installations, safety assessments,
						and system upgrades. We showcase our commitment to excellence through every project
						we undertake.
					</p>
				</section>
				<section className="lg:w-1/2 mt-12 lg:mt-0">
					<div className="aspect-w-16 aspect-h-9 rounded-lg">
						<Image
							src="/electrical-installation.jpg"
							alt="Featured Electrical Projects"
							width={800}
							height={800}
							className="rounded-lg object-cover"
						/>
					</div>
				</section>
			</section>

			{/* <InfiniteMovingCards direction="left" speed="very-slow" className="px-4 py-6 sm:px-6 lg:px-12">
        {[...companies, ...companies].map((item, index) => (
          <li key={item.title + ' ' + index} className="size-24 flex items-center justify-center">
            <Image placeholder="blur"
        blurDataURL="/placeholder.jpg"
              src={item.thumbnail}
              alt={item.title}
              width={100}
              height={100}
              className="object-cover"
            />
          </li>
        ))}
      </InfiniteMovingCards> */}

			{/* <LogosCarousel speed={2}>
				{[...companies, ...companies].map((item, index) => (
					<CarouselItem
						key={item.title + " " + index}
						className="basis-1/3 md:basis-1/5 lg:basis-1/6 xl:basis-[12.5%]">
						<Image
							placeholder="blur"
							blurDataURL="/placeholder.jpg"
							src={item.thumbnail}
							alt={item.title}
							width={120}
							height={120}
							className="object-cover"
						/>
					</CarouselItem>
				))}
			</LogosCarousel> */}

			<section className="w-full py-12 md:py-24 bg-white">
				<div className="px-4 py-6 sm:px-6 lg:px-12">
					<div className="space-y-2 w-full md:w-1/2 mx-auto mb-12">
						<h3 className="text-h3 text-center">Featured Projects</h3>
						<p className="text-para text-center">
							Discover our exemplary electrical projects showcasing our expertise in installations,
							safety assessments, and system upgrades across residential and commercial properties.
						</p>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{projects.map((project) => (
							<ProjectCard project={project} key={project.slug} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
