'use client';

// === === === === === === == Imports == === === === === === ===//

// NextJS
import {usePathname} from 'next/navigation';
import Script from 'next/script';

// Styling
import '@/lib/styles/blerdCorps.scss';

// React
import {useEffect, useRef} from 'react';

// Smooth Scroll
import Lenis from '@studio-freight/lenis';

// === === === === === === == Imports == === === === === === ===//

// === === === === === === == Render == === === === === === ===//

export default function RootLayout({children}: {children: React.ReactNode}) {
	// ==================== Lenis Smooth Scroll =====================//

	const lenisRef = useRef<Lenis | null>(null);
	const pathname = usePathname();

	useEffect(() => {
		if (lenisRef.current) lenisRef.current?.scrollTo(0, {immediate: true});
	}, [pathname]);

	useEffect(() => {
		const lenis = new Lenis();
		lenisRef.current = lenis;

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	// ==================== Lenis Smooth Scroll =====================//

	return (
		<html lang='en'>
			<Script src='/Scripts/menuOverlays.js' />

			<link
				rel='icon'
				href='/brand_identity/iconography/favicon.svg'
				sizes='any'
			/>
			<body>{children}</body>
			{/* <Script
				type='module'
				src='/Scripts/menuOverlays.jsx'></Script>
			<Script
				type='module'
				src='/Scripts/sliders.jsx'></Script> */}
			{/* <Script
				type='module'
				src='/Scripts/sliders.js'
			/> */}
		</html>
	);
}

// === === === === === === == Render == === === === === === ===//
