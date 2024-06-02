'use client';

// === === === === === === == Imports == === === === === === ===//

// NextJS
import {usePathname} from 'next/navigation';
import {Metadata} from 'next';

// Framer Motion
import {
	motion,
	AnimatePresence,
	useMotionValue,
	useSpring,
} from 'framer-motion';

// Components
// import Footer from "@/lib/components/global/footer/footer";
// import Header from '@/lib/components/organisms/header';
// import Menu from '@/lib/components/organisms/menu';

// Store
import {useMenu, useTheme} from '@/lib/state';
import Menu from '@/lib/organisms/menu';
import Header from '@/lib/organisms/header';
import Footer from '@/lib/organisms/footer';
import {Children, useEffect, useState} from 'react';

// === === === === === === == Imports == === === === === === ===//

//

//

// === === === === === === == MetaData == === === === === === ===//

export const metadata: Metadata = {
	icons: {
		icon: '/icons/Logo/Quill.svg',
		shortcut: '/icons/Logo/Quill.svg',
		apple: '/icons/Logo/Quill.svg',
		other: {
			rel: '/icons/Logo/Quill.svg',
			url: '/icons/Logo/Quill.svg',
		},
	},
};

// === === === === === === == MetaData == === === === === === ===//

//

//

// === === === === === === == Render == === === === === === ===//

const Cursor = (props: {hideCursor: any}) => {
	const cursorX = useMotionValue(-100);
	const cursorY = useMotionValue(-100);

	const springConfig = {
		damping: 35,
		stiffness: 700,
		mass: 1,
	};
	const cursorXSpring = useSpring(cursorX, springConfig);
	const cursorYSpring = useSpring(cursorY, springConfig);

	useEffect(() => {
		const moveCursor = (e: {clientX: number; clientY: number}) => {
			cursorX.set(e.clientX);
			cursorY.set(e.clientY);
		};

		window.addEventListener('mousemove', moveCursor);

		return () => {
			window.removeEventListener('mousemove', moveCursor);
		};
	}, []);

	return (
		<motion.div
			style={{
				translateX: cursorXSpring,
				translateY: cursorYSpring,
			}}
			className='🏹'>
			{!props.hideCursor == true ? (
				<motion.div
					layoutId='cursor'
					className='🏹'></motion.div>
			) : null}
		</motion.div>
	);
};

export default function Template({children}: {children: React.ReactNode}) {
	//
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
	const key = usePathname();
	const {theme}: any = useTheme();
	const {menu}: any = useMenu();

	return (
		<AnimatePresence
			initial={false}
			mode='sync'>
			<Cursor hideCursor={useMenu} />
			<motion.main
				key={key}
				initial='hidden'
				animate='enter'
				exit='exit'
				id={theme ? '🌑' : '☀️'}
				className={menu ? '📜' : '🗞️'}
				variants={variants}
				// transition={{type: 'linear'}}
				transition={{ease: 'easeInOut', duration: 0.75}}>
				<Header />
				<motion.nav
					transition={{
						type: 'spring',
						damping: 100,
						stiffness: 500,
					}}
					initial={{
						y: '-100%',
					}}
					animate={{
						y: useMenu() ? '-100%' : '0%',
					}}
					className='fixed inset-0 bg-zinc-900/80 backdrop-blur z-[-1]'>
					<Menu />
				</motion.nav>
				<article id='📖'>{children}</article>
				<Footer />
			</motion.main>
		</AnimatePresence>
	);
}

// === === === === === === == Render == === === === === === ===//
