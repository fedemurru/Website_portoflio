export const navLinks = [
	{
		id: 1,
		name: "Home",
		href: "#",
	},
	{
		id: 2,
		name: "About",
		href: "#about",
	},
	{
		id: 3,
		name: "Work",
		href: "#work",
	},
	{
		id: 4,
		name: "Contact",
		href: "#contact",
	},
	{
		id: 4,
		name: "Download my Cv",
		href: "https://drive.google.com/file/d/1HN3yAA-SK2pjsFPC0i6vP_NtNttxo_3D/view?usp=sharing",
	},
];

export const clientReviews = [
	{
		id: 1,
		name: "Emily Johnson",
		position: "Marketing Director at GreenLeaf",
		img: "assets/review1.png",
		review:
			"Working with Federico was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
	},
	{
		id: 2,
		name: "Mark Rogers",
		position: "Founder of TechGear Shop",
		img: "assets/review2.png",
		review:
			"Federico’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
	},
	{
		id: 3,
		name: "John Dohsas",
		position: "Project Manager at UrbanTech ",
		img: "assets/review3.png",
		review:
			"I can’t say enough good things about Federico. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
	},
	{
		id: 4,
		name: "Ether Smith",
		position: "CEO of BrightStar Enterprises",
		img: "assets/review4.png",
		review:
			"Federico was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
	},
];

export const myProjects = [
	{
		title: "CarePulse - Health Management System",
		desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
		subdesc:
			"With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
		href: "https://healthcare-app-pi.vercel.app/",
		href2: "https://github.com/fedemurru/Healthcare-app",
		spotlight: "/assets/carepulse.png",
	},
	{
		title: "Health Solution System",
		desc: "Built with Next.js and styled with Tailwind, Health Solution System ensures fast load times and mobile responsiveness. Designed for healthcare professionals, this user-friendly platform helps establish a strong online presence. The 5-page website includes a functional Contact Form for easy patient engagement.",
		subdesc: "",
		href: "https://vercel.com/fedemurrus-projects/health-bronze",
		href2: "https://github.com/fedemurru/HealthBronze",
		spotlight: "/assets/healthbronze.png",
	},
	{
		title: "Health Software Solution website",
		desc: "I developed the Health Software Solution website, a platform that showcases custom software services for healthcare professionals. Built using Next.js for fast, scalable architecture and Tailwind CSS for a modern, responsive design, the site is optimised for performance and user experience. ",
		subdesc: "",
		href: "https://health-software-solution-i8nu.vercel.app/",
		href2: "https://github.com/fedemurru/healthSoftwareSolution",
		spotlight: "/assets/hss.png",
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall
			? [4, -5, 0]
			: isMobile
				? [5, -5, 0]
				: isTablet
					? [6, -5, 0]
					: [9, -5.5, 0],
		reactLogoPosition: isSmall
			? [3, 4, 0]
			: isMobile
				? [5, 4, 0]
				: isTablet
					? [5, 4, 0]
					: [12, 3, 0],
		ringPosition: isSmall
			? [-5, 7, 0]
			: isMobile
				? [-10, 10, 0]
				: isTablet
					? [-12, 10, 0]
					: [-24, 10, 0],
		targetPosition: isSmall
			? [-5, -10, -10]
			: isMobile
				? [-12, -10, -22]
				: isTablet
					? [-16, -7, -22]
					: [-13, -13, -14],
	};
};

export const workExperiences = [
	{
		id: 1,
		name: "Health Software Solution",
		pos: "Software Developer",
		duration: "2024 - Present",
		title:
			"As a Software Developer at Health Software Solution, I design and implement innovative health tech solutions with Next.js. My role involves developing robust applications that enhance patient care and streamline healthcare operations. I am dedicated to leveraging my skills to advance the company’s mission in improving health outcomes through technology.",
		icon: "/assets/logo.webp",
		animation: "victory",
	},
	{
		id: 2,
		name: "Concentrix",
		pos: "Social Media Specialist",
		duration: "2022 - Present",
		title:
			"As a Social Media Specialist at Concentrix, I monitor agent performance and conduct quality reviews while promoting products and services online. I manage tasks across platforms like Salestorce, Zendesk, and Sprinklr, and engage with customers on Facebook, Twitter, and Instagram. I also stay updated on social media trends and best practices.",
		icon: "/assets/concentrix.png",
		animation: "clapping",
	},
	{
		id: 3,
		name: "JP Media Agency",
		pos: "Junior Web Developer",
		duration: "2023",
		title:
			"At JP Media Agency, where I interned from January to June 2023, I developed websites using HTML, CSS, and JavaScript, assisted with WordPress site creation and maintenance, and managed social media accounts to boost engagement. I also utilized Google Analytics for performance analysis, handled SEO optimizations, and collaborated with cross-functional teams to enhance digital marketing efforts.",
		icon: "/assets/jp.webp",
		animation: "salute",
	},
];
