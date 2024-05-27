// ==================== Imports ====================//

// ViewPort Hook
import useMediaQuery from '../viewPort';

// State

// Components
// import StarmaxLogo from '../../../atoms/abstracts/iconography/Logo/Logo';
// import MenuToggle from '../../../molecules/toggles/menuToggle';
// import ThemeToggle from "../../Molecules/Toggles/themeToggle";
// import Menu from "../Menu";
// import MenuItems from "../Menu/components/menuItemsList";

// ==================== Imports ====================//

// ==================== Render ====================//

export default function Footer() {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<footer className={isMobile ? 'mobileView' : 'desktopView'}>
			{isMobile ? (
				<>
					<div className='home'></div>
					<div className='search'></div>
					<div className='library'></div>
					<div className='premium'></div>
				</>
			) : (
				<>
					<div className='home'></div>
					<div className='search'></div>
					<div className='library'></div>
					<div className='premium'></div>
				</>
			)}
		</footer>
	);
}

// ==================== Render ====================//
