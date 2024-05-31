// === === === === === === == Imports == === === === === === ===//

// React
import useMediaQuery from '@/lib/viewport';

// NextJS
import Link from 'next/link';

// Components
import MaraPainLogo from '../../molecules/icons/logo/';
import ThemeToggle from '../../molecules/themeToggle';
import MenuToggle from '../menu/menuToggle';
// import Menu from '../menu';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function Header({children}: any) {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<header
			id='🎩'
			className={isMobile ? 'mobileView' : 'desktopView'}>
			{isMobile ? (
				<>
					<MaraPainLogo />
					<MenuToggle />
				</>
			) : (
				<>
					<MaraPainLogo />
					<MenuToggle />
					<div className='Utility'>
						<ThemeToggle />
					</div>
				</>
			)}
			{/* <Menu /> */}
		</header>
	);
}

// === === === === === === == Render == === === === === === ===//
