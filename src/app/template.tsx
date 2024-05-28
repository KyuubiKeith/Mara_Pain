'use client';

// === === === === === === == Imports == === === === === === ===//

// NextJS
import {usePathname} from 'next/navigation';

// Styling
import '@/lib/styles/blerdCorps.scss';

// React
import {useEffect, useRef} from 'react';

// Smooth Scroll
import Lenis from '@studio-freight/lenis';

// Framer Motion
import {motion, AnimatePresence} from 'framer-motion';

// Components
import Footer from '@/lib/components/global/footer/footer';
import Header from '@/lib/components/global/header/header';

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

	const key = usePathname();
	const variants = {
		hidden: {
			y: 20,
			opacity: 0,
		},
		enter: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				duration: 0.75,
			},
		},
		exit: {
			opacity: 0,
			x: 0,
			y: 20,
			transition: {
				duration: 0.75,
			},
		},
	};

	return (
		<AnimatePresence
			// initial={false}
			mode='popLayout'>
			<motion.main
				key={key}
				initial='hidden'
				animate='enter'
				exit='exit'
				variants={variants}
				// transition={{type: 'linear'}}
				transition={{ease: 'easeInOut', duration: 0.75}}
				className='overflow-hidden'>
				<Header />
				<article id='📖'>{children}</article>
				<Footer />
			</motion.main>
		</AnimatePresence>
	);
}

// === === === === === === == Render == === === === === === ===//
