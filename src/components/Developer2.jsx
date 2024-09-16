/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 developer.glb -T 
Files: developer.glb [981.62KB] > /Users/hsuwinlat/Desktop/jsm pj/threejscc-portfolio/public/models/developer-transformed.glb [395.08KB] (60%)
*/

import React, { useEffect, useRef } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

export default function Developer2({ animationName = "idle", ...props }) {
	const group = useRef();

	const { scene } = useGLTF("/models/animations/developer.glb");
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
	const { nodes, materials } = useGraph(clone);

	// const { nodes, materials } = useGLTF("/66e82e1768ee213aa436db86.glb");

	const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
	const { animations: saluteAnimation } = useFBX(
		"/models/animations/salute.fbx"
	);
	const { animations: clappingAnimation } = useFBX(
		"/models/animations/clapping.fbx"
	);
	const { animations: victoryAnimation } = useFBX(
		"/models/animations/victory.fbx"
	);

	idleAnimation[0].name = "idle";
	saluteAnimation[0].name = "salute";
	clappingAnimation[0].name = "clapping";
	victoryAnimation[0].name = "victory";

	const { actions } = useAnimations(
		[
			idleAnimation[0],
			saluteAnimation[0],
			clappingAnimation[0],
			victoryAnimation[0],
		],
		group
	);

	useEffect(() => {
		actions[animationName].reset().fadeIn(0.5).play();
		return () => actions[animationName].fadeOut(0.5);
	}, [animationName]);

	return (
		<group {...props} dispose={null}>
			<primitive object={nodes.Hips} />
			<skinnedMesh
				name="EyeLeft"
				geometry={nodes.EyeLeft.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeLeft.skeleton}
				morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
			/>
			<skinnedMesh
				name="EyeRight"
				geometry={nodes.EyeRight.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeRight.skeleton}
				morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
			/>
			<skinnedMesh
				name="Wolf3D_Head"
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials.Wolf3D_Skin}
				skeleton={nodes.Wolf3D_Head.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
			/>
			<skinnedMesh
				name="Wolf3D_Teeth"
				geometry={nodes.Wolf3D_Teeth.geometry}
				material={materials.Wolf3D_Teeth}
				skeleton={nodes.Wolf3D_Teeth.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			<skinnedMesh
				name="Wolf3D_Beard"
				geometry={nodes.Wolf3D_Beard.geometry}
				material={materials.Wolf3D_Beard}
				skeleton={nodes.Wolf3D_Beard.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Glasses.geometry}
				material={materials.Wolf3D_Glasses}
				skeleton={nodes.Wolf3D_Glasses.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials.Wolf3D_Outfit_Top}
				skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
				material={materials.Wolf3D_Outfit_Bottom}
				skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
				material={materials.Wolf3D_Outfit_Footwear}
				skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Body.geometry}
				material={materials.Wolf3D_Body}
				skeleton={nodes.Wolf3D_Body.skeleton}
			/>
		</group>
	);
}

useGLTF.preload("/66e82e1768ee213aa436db86.glb");
