'use client';

// ==================== Imports ====================//

//React

// State
// import ThemeToggle from '../theme-toggle';

// React
import {useMenu} from '@/lib/templates/global/state';
import useMediaQuery from '@/lib/templates/global/viewport';
import MenuOverlays from '../menuOverlays';
import {motion} from 'framer-motion';
import Link from 'next/link';

// Components

// ==================== Imports ====================//

// ==================== Render ====================//

export default function MenuContent() {
	const isMobile = useMediaQuery('(max-width: 768px)');
	const {menu, toggleMenu}: any = useMenu();

	return (
		<menu>
			<MenuOverlays />
			<motion.nav className={menu ? '📜' : '🗞️'}>
				<Link
					className={menu ? '🍖 📜' : '🍖'}
					href={'/contact'}
					onClick={toggleMenu}>
					Contact
				</Link>
				<Link
					className={menu ? '🍖 📜' : '🍖'}
					href={'/gallery'}
					onClick={toggleMenu}>
					Gallery
				</Link>
				<Link
					className={menu ? '🍖 📜' : '🍖'}
					href={'/about'}>
					next menu item
				</Link>

				<a
					className='🍖'
					href='/'>
					{/* <ThemeToggle /> */}
					{/* {isMobile ? <ThemeToggle className='mobileMenu' /> : null} */}
					current home
				</a>
			</motion.nav>
		</menu>
	);
}

// ==================== Render ====================//
