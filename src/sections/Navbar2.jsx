import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = ({ onClick = () => {} }) => (
	<ul className="nav-ul flex items-center space-x-6">
		{navLinks.map((item, index) => (
			<li key={item.id} className="nav-li flex items-center">
				<span className="text-neutral-400">
					{index + 1 < 10 ? `0${index + 1}` : index + 1}
				</span>
				<span className="text-neutral-400 px-2">//</span>
				<a
					href={item.href}
					className="nav-li_a text-white hover:text-neutral-400"
					onClick={onClick}
				>
					{item.name}
				</a>
			</li>
		))}
	</ul>
);

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center py-5 mx-auto c-space">
					<a
						href="/"
						className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors relative"
					>
						Federico
					</a>

					<button
						onClick={toggleMenu}
						className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
						aria-label="Toggle menu"
					>
						<img
							src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
							alt="toggle"
							className="w-6 h-6"
						/>
					</button>

					{/* The navigation menu will be hidden on small screens and shown on medium and larger screens */}
					<nav className="sm:flex hidden">
						<NavItems />
					</nav>
				</div>
			</div>

			{/* Sidebar menu for mobile */}
			<div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
				<nav className="p-5">
					<NavItems onClick={closeMenu} />
				</nav>
			</div>
		</header>
	);
}
