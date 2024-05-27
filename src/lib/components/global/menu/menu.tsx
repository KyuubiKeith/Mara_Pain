// === === === === === === == Imports == === === === === === ===//

// Store
import {useMenu} from '@/lib/components/state';

// === === === === === === == Imports == === === === === === ===//

export default function Menu() {
	const {menu, toggleMenu}: any = useMenu();
	return (
		<button
			className='menu-toggle--button'
			aria-label='Toggle Menu'
			onClick={toggleMenu}>
			<p>{menu ? '📖' : '📔'}</p>
		</button>
	);
}
