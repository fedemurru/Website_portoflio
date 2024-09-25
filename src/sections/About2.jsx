import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
	const [hasCopied, setHasCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("federico.murru87@gmail.com");
		setHasCopied(true);

		setTimeout(() => {
			setHasCopied(false);
		}, 2500);
	};

	return (
		<section className="c-space my-20" id="about">
			<div className="grid xl:grid-cols-2 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-9 h-full">
				{/* First Column */}
				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container transform transition rounded-full duration-300 hover:scale-105 flex items-center justify-center">
						<img
							src="assets/profile2.png"
							alt="grid-1"
							className="w-56 h-56 overflow-hidden relative object-cover rounded-full" // Apply rounded-full or rounded-lg
						/>
						<div className="p-4">
							<p className="grid-headtext">Hi, I’m Federico Murru</p>
							<p className="grid-subtext">
								With over 1 year of experience, I have honed my skills in both
								frontend and backend dev, creating dynamic and responsive
								websites.
							</p>
						</div>
					</div>
				</div>

				{/* Second Column */}
				<div className="col-span-1 xl:row-span-4">
					<div className="grid-container transform transition duration-300 hover:scale-105">
						<img
							src="assets/grid2.png"
							alt="grid-2"
							className="w-full sm:h-[276px] h-fit object-contain"
						/>
						<div className="p-4">
							<p className="grid-headtext">Tech Stack</p>
							<p className="grid-subtext">
								I specialise in JavaScript/Typescript with a focus on React, and
								Next.js.
							</p>
						</div>
					</div>
				</div>

				{/* Globe Section */}
				<div className="col-span-1 xl:row-span-1 xl:col-span-2">
					<div className="grid-container flex flex-col items-center p-6 transform transition duration-300 hover:scale-105">
						<Globe
							height={400}
							width={400}
							backgroundColor="rgba(0, 0, 0, 0)"
							backgroundImageOpacity={0.5}
							showAtmosphere
							showGraticules
							globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
							bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
							labelsData={[
								{
									lat: 53.483959,
									lng: -2.244644,
									text: "Hello I'm here",
									color: "white",
									size: 15,
								},
							]}
						/>
						<p className="grid-headtext mt-4 text-center">
							I’m flexible with time zone communications
						</p>
						<p className="grid-subtext text-center">Based in Manchester, UK</p>
						<Button name="Contact Me" isBeam containerClass="w-full mt-10" />
					</div>
				</div>

				{/* Passion for Coding Section */}
				<div className="col-span-1 xl:row-span-2">
					<div className="grid-container transform transition duration-300 hover:scale-105">
						<img
							src="assets/grid5.webp"
							alt="grid-3"
							className="w-full sm:h-[266px] h-fit object-contain"
						/>
						<div className="p-4">
							<p className="grid-headtext">My Passion for Coding</p>
							<p className="grid-subtext">
								I love solving problems and building things through code.
								Programming isn&apos;t just my profession—it&apos;s my passion.
							</p>
						</div>
					</div>
				</div>

				{/* Contact Section */}
				<div className="col-span-1 xl:row-span-2">
					<div className="grid-container transform transition duration-300 hover:scale-105">
						<img
							src="assets/grid4.png"
							alt="grid-4"
							className="w-full md:h-[226px] sm:h-[276px] h-fit object-cover sm:object-top"
						/>
						<div className="space-y-1 text-center p-8">
							<p className="grid-subtext">Contact me</p>
							<div
								className="copy-container flex justify-center items-center"
								onClick={handleCopy}
							>
								<img
									src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
									alt="copy"
									className="mr-2"
								/>
								<p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
									federico.murru87@gmail.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
