/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { Leva } from "leva";
import { calculateSizes } from "../constants";
import { useMediaQuery } from "react-responsive";

import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Button from "../components/Button.jsx";
import Target from "../components/Target.jsx";
import HeroCamera from "../components/HeroCamera.jsx";

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
			<a
				href="https://pmnd.rs/"
				style={{ position: "absolute", bottom: 40, left: 90, fontSize: "13px" }}
			>
				pmnd.rs
				<br />
				dev collective
			</a>
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate3d(-50%,-50%,0)",
					color: "white",
				}}
			>
				<div className="w-full mx-auto flex flex-col mt-28 c-space gap-3  ">
					<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
						Hi, I am Federico <span className="waving-hand">👋</span>
					</p>
					<p className="hero_tag text-gray_gradient">
						Building Software Products
					</p>
				</div>
			</div>
			<div
				style={{ position: "absolute", top: 40, left: 40, fontSize: "13px" }}
			>
				pretty bad —
			</div>
			<div
				style={{
					position: "absolute",
					bottom: 40,
					right: 40,
					fontSize: "13px",
				}}
			>
				25/02/2022
			</div>
		</div>
	);
}

const Hero = () => {
	// Use media queries to determine screen size
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			<div className="w-full h-full absolute inset-0">
				<Overlay />
			</div>
		</section>
	);
};

export default Hero;
