import About from "./sections/About";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const App = () => {
	return (
		<main className="max-w-7xl mx-auto relative">
			<Navbar />
			<Hero />
			<About />
			<Footer />
		</main>
	);
};

export default App;
