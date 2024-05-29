// ==================== Imports ====================//

//React

// State
import useMediaQuery from '@/lib/components/global/viewport';
import {useTheme} from '@/lib/components/global/state';
import ThemeToggle from '@/lib/components/global/theme-toggle';

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
					{isMobile ? <ThemeToggle className='mobileMenu' /> : null}
				</a>
			</div>
		</div>
	);
}

// ==================== Render ====================//
