/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { Color } from "three";
import { useRef } from "react";

const RotatingCube = () => {
	const meshRef = useRef();

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
			meshRef.current.rotation.z += 0.01;
		}
	});
	return (
		<group>
			<mesh ref={meshRef}>
				<cylinderGeometry args={[1, 1, 1]} />
				<meshLambertMaterial color="#468585" emissive="#468585" />
				<Sparkles
					count={100}
					size={20}
					scale={[1]}
					speed={0.002}
					noise={0.2}
					color="orange"
				/>
			</mesh>
		</group>
	);
};

function App() {
	return (
		<Canvas
			style={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<OrbitControls enableZoom enablePan enableRotate />
			<directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
			{/* <Color attach="background" args={["#F0F0F0"]} /> */}
			<RotatingCube />
		</Canvas>
	);
}

export default App;
