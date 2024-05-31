// === === === === === === == Imports == === === === === === ===//

// Store
import {useMenu, useTheme} from '@/lib/state';

// React
import useMediaQuery from '@/lib/viewport';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function MenuToggle() {
	const {menu, toggleMenu}: any = useMenu();
	return (
		<button
			id='🌓'
			type='button'
			className='🍔'
			aria-label='Toggle Menu'
			onClick={toggleMenu}>
			<span className='🍔'>
				{
					//             {menu ? {
					// 		if (overlay: any.isAnimating) {
					// 		return false;
					// 	}
					// 	overlay.toggle();
					// 	if (overlay.isOpened === true) {
					// 		elmHamburger.classList.add('is-opened-navi');
					// 		for (var i = 0; i < gNavItems.length; i++) {
					// 			gNavItems[i].classList.add('is-opened');
					// 		}
					// 	} else {
					// 		elmHamburger.classList.remove('is-opened-navi');
					// 		for (var i = 0; i < gNavItems.length; i++) {
					// 			gNavItems[i].classList.remove('is-opened');
					// 		}
					// 	}}}
					// elmHamburger.addEventListener('click', () => {
					// });
				}
			</span>
		</button>
	);
}

// === === === === === === == Render == === === === === === ===//
