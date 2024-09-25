import { myProjects } from "../constants/index.js";

const Projects = () => {
	return (
		<section className="c-space my-20">
			<p className="head-text">My Selected Work</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
				{myProjects.map((project, index) => (
					<div
						key={index}
						className="relative p-5 bg-black-200 rounded-lg shadow-lg"
					>
						<img
							src={project.spotlight}
							alt="spotlight"
							className="w-full h-48 object-cover rounded-t-lg"
						/>
						<div className="p-3">
							<div
								className="backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
								style={project.logoStyle}
							></div>
							<h3 className="text-white text-xl mb-3 font-semibold mt-2">
								{project.title}
							</h3>
							<p className="text-white">{project.desc}</p>
							<div className="flex gap-8">
								<a
									className="flex items-center gap-2 mt-4 text-white-600"
									href={project.href2}
									target="_blank"
									rel="noreferrer"
								>
									<p>Check Code</p>
									<img
										src="/assets/arrow-up.png"
										alt="arrow"
										className="w-3 h-3"
									/>
								</a>
								<a
									className="flex items-center gap-2 mt-4 text-white-600"
									href={project.href}
									target="_blank"
									rel="noreferrer"
								>
									<p>Check Live Site</p>
									<img
										src="/assets/arrow-up.png"
										alt="arrow"
										className="w-3 h-3"
									/>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
