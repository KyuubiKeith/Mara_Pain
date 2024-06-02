'use client';

// === === === === === === == Imports == === === === === === ===//

// NextJS
import {usePathname} from 'next/navigation';
import {Metadata} from 'next';

// Framer Motion
import {motion, AnimatePresence} from 'framer-motion';

// Components
// import Footer from "@/lib/components/global/footer/footer";
import Header from '@/lib/organisms/header';
// import Menu from '@/lib/components/organisms/menu';

// Store
import {useTheme} from '@/lib/templates/global/state';
import Overlays from '@/lib/organisms/menu/menuOverlays';
import MenuContent from '@/lib/organisms/menu/menuContent';

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
	const key = usePathname();
	const {theme}: any = useTheme();
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
			initial={false}
			mode='popLayout'>
			<motion.main
				id='📦'
				key={key}
				initial='hidden'
				animate='enter'
				exit='exit'
				variants={variants}
				transition={{ease: 'easeInOut', duration: 0.75}}
				className={theme ? '🌑' : '☀️'}>
				<Overlays />
				<MenuContent />
				<Header />
				<article id='📖'>{children}</article>
				{/* <Menu /> */}
			</motion.main>
		</AnimatePresence>
	);
}

// === === === === === === == Render == === === === === === ===//
