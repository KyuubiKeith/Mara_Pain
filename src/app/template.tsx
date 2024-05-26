'use client';

// === === === === === === == Imports == === === === === === ===//

// NextJS
import {usePathname} from 'next/navigation';

// React
import {useEffect, useRef} from 'react';

// Smooth Scroll
import Lenis from '@studio-freight/lenis';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == MetaData == === === === === === ===//

// === === === === === === == MetaData == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function Template({children}: {children: React.ReactNode}) {
	//

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

	//
	return <>{children}</>;
}

// === === === === === === == Render == === === === === === ===//
