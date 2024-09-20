import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Logo } from "@pmndrs/branding";
import { Overlay } from "./sections/Hero.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<>
			<App /> <Overlay />
			<Logo style={{ position: "absolute", bottom: 40, left: 40, width: 30 }} />
		</>
		,
	</StrictMode>
);
