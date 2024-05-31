'use client';

// === === === === === === == Imports == === === === === === ===//

// NextJS
import {usePathname} from 'next/navigation';
import {Metadata} from 'next';

// Framer Motion
import {motion, AnimatePresence} from 'framer-motion';

// Components
// import Footer from "@/lib/components/global/footer/footer";
import Header from '@/lib/components/organisms/header';
import Menu from '@/lib/components/organisms/menu';

// Store
import {useTheme} from '@/lib/state';

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

	return (
		<AnimatePresence
			// initial={false}
			mode='popLayout'>
			<motion.main
				key={key}
				initial='hidden'
				animate='enter'
				exit='exit'
				id='📦'
				className={theme ? '🌑 overflow-hidden' : '☀️ overflow-hidden'}
				variants={variants}
				// transition={{type: 'linear'}}
				transition={{ease: 'easeInOut', duration: 0.75}}>
				<Header />
				<article id='📖'>{children}</article>
				<Menu />
			</motion.main>
		</AnimatePresence>
	);
}

// === === === === === === == Render == === === === === === ===//
