'use client';

// === === === === === === == Imports == === === === === === ===//

// NextJS
import {usePathname} from 'next/navigation';

// Styling
import '@/lib/blerdCorps.scss';

// React
import {useEffect, useRef} from 'react';

// Smooth Scroll
import Lenis from '@studio-freight/lenis';
import Script from 'next/script';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == MetaData == === === === === === ===//

// === === === === === === == MetaData == === === === === === ===//

//

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
			<link
				rel='icon'
				href='/icons/favicon.svg'
				sizes='any'
			/>
			<body>
				{children}
				<Script src='/scripts/overlays.js' />
			</body>
		</html>
	);
}

// === === === === === === == Render == === === === === === ===//
