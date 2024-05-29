// === === === === === === == Imports == === === === === === ===//

// React
import useMediaQuery from '../viewport';

// NextJS
import Link from 'next/link';

// Components
import MaraPainLogo from '../logo';
import MenuToggle from '../menu/menu-toggle';
import ThemeToggle from '../theme-toggle';

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
					<ThemeToggle />
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
		</header>
	);
}

// === === === === === === == Render == === === === === === ===//
