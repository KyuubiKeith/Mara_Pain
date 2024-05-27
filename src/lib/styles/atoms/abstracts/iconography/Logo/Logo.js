// ==================== Imports ====================//

//Nextjs
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { ViewContext } from "../../../../organisms/vendors/context/viewPort";

// ==================== Imports ====================//

// ==================== Query ====================//
// ==================== Query ====================//

// ==================== Render ====================//

// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const Logo = React.forwardRef(({ onClick, href }, ref) => {
	const viewPort = useContext(ViewContext);

	return (
		<a
			href={href}
			onClick={onClick}
			ref={ref}
			className='Logo'
			target='_blank'
			rel='noopener noreferrer'>
			<Image
				className={viewPort ? "mobileLogo" : "desktopLogo"}
				alt='Starmax Recordz Logo'
				src={
					viewPort
						? "/Icons/Logo/Starmax.svg"
						: "/Icons/Logo/Starmax_Recordz.svg"
				}
				width={viewPort ? 30 : 130}
				height={viewPort ? 30 : 30}
			/>
		</a>
	);
});

export default function StarmaxLogo() {
	return (
		<Link href='https://starmax.vercel.app' passHref>
			<Logo />
		</Link>
	);
}

Logo.displayName = "brandLogo";

// ==================== Render ====================//
