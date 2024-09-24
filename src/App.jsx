import About from "./sections/About";
import About2 from "./sections/About2";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import Projects from "./sections/Projects";

function Stars(props) {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 1.5 })
	);
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});
	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled={false}
				{...props}
			>
				<PointMaterial
					transparent
					color="#ffa0e0"
					size={0.005}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
}

const App = () => {
	return (
		<main className="max-w-7xl mx-auto relative">
			<Navbar />
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Stars />
			</Canvas>
			{/* <Hero /> */}
			<About2 />
			{/* <About /> */}

			<Projects />
			<Clients />
			<WorkExperience />
			<Contact />
			<Footer />
		</main>
	);
};

export default App;
