/* eslint-disable react/no-unknown-property */

export function Overlay() {
	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				pointerEvents: "none",
				width: "100%",
				height: "100%",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate3d(-50%,-50%,0)",
					color: "white",
				}}
			>
				<div className="w-full mx-auto flex flex-col mt-28 c-space gap-3 ">
					<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
						Hi, I am Federico <span className="waving-hand">👋</span>
					</p>
					<p className="hero_tag bg-gradient-to-r from-[#c850c0] to-[#ffcc70] bg-clip-text text-transparent">
						Building Software Products with Next.js and React.js
					</p>
				</div>
			</div>
		</div>
	);
}

const Hero = () => {
	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			<div className="w-full h-full absolute inset-0">
				<Overlay />
			</div>

			<div className="absolute bottom-[10px] left-0 right-0 w-full z-10 c-space">
				<a href="#about" className="w-fit ">
					<Button
						name="Let's work together"
						isBeam
						containerClass="sm:w-fit w-full sm:min-w-96"
					/>
				</a>
			</div>
		</section>
	);
};

export default Hero;
