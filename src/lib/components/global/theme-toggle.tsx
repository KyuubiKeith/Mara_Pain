// === === === === === === == Imports == === === === === === ===//

// Store
import {useMenu, useTheme} from '@/lib/components/global/state';

// React
import useMediaQuery from './viewport';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function ThemeToggle() {
	const {theme, toggleTheme}: any = useTheme();
	const {menu}: any = useMenu();
	const themeIcon = menu ? 'shape sun' : 'shape sun moss';
	const isMobile = useMediaQuery('(max-width: 768px)');

	return (
		<>
			{/* <button
			type='button'
			aria-label='Toggle Theme'
			onClick={toggleTheme}>
			<p>{theme ? '🌑' : '☀️'}</p>
		</button> */}
			<button
				type='button'
				className='logo mobileMenu theme-toggle--button'
				aria-label='Toggle Theme'
				onClick={toggleTheme}>
				<span className={theme ? themeIcon : 'shape moon'}></span>
				<span className='rays--container'>
					<span className='ray'></span>
					<span className='ray'></span>
					<span className='ray'></span>
					<span className='ray'></span>
				</span>
			</button>
		</>
	);
}

// === === === === === === == Render == === === === === === ===//
