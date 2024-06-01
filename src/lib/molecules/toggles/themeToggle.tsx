'use client';
// === === === === === === == Imports == === === === === === ===//

// Store
import {useMenu, useTheme} from '@/lib/state';

// React
import useMediaQuery from '@/lib/viewport';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function ThemeToggle() {
	const {theme, toggleTheme}: any = useTheme();
	const {menu}: any = useMenu();
	const themeIcon = menu ? '🌗 🌞' : '🌗 🌞 🕶️';
	return (
		<button
			id='🌓'
			type='button'
			className='🌓'
			aria-label='Toggle Theme'
			onClick={toggleTheme}>
			<span className={theme ? themeIcon : '🌗 🌚'}> Theme Toggle</span>
			<span className='😎'>
				<span className='👓'></span>
				<span className='👓'></span>
				<span className='👓'></span>
				<span className='👓'></span>
			</span>
		</button>
	);
}

// === === === === === === == Render == === === === === === ===//
