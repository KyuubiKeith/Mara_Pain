// ==================== Imports ====================//

//React

// State
import ThemeToggle from '../theme-toggle';

// React
import useMediaQuery from '../viewport';

// Components

// ==================== Imports ====================//

// ==================== Render ====================//

export default function MenuItems() {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<div className='global-menu'>
			<div className='global-menu__wrap'>
				<a
					className='global-menu__item global-menu__item--demo-6'
					href='#'>
					Data Science
				</a>
				<a
					className='global-menu__item global-menu__item--demo-6'
					href='#'>
					Research
				</a>
				<a
					className='global-menu__item global-menu__item--demo-6'
					href='#'>
					Case Studies
				</a>
				<a
					className='global-menu__item global-menu__item--demo-6'
					href='#'>
					Contact
				</a>
				<a
					className='global-menu__item global-menu__item--demo-6'
					href='#'>
					<ThemeToggle />
					{isMobile ? <ThemeToggle className='mobileMenu' /> : null}
				</a>
			</div>
		</div>
	);
}

// ==================== Render ====================//
