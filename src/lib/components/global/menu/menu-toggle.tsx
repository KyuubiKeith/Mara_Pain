// === === === === === === == Imports == === === === === === ===//

// Store
import {useMenu} from '@/lib/components/global/state';

// === === === === === === == Imports == === === === === === ===//

export default function MenuToggle() {
	const {menu, toggleMenu}: any = useMenu();
	return (
		// <button
		// 	className='menuIcon'
		// 	type='button'
		// 	aria-label='Toggle Menu'
		// 	onClick={toggleMenu}>
		// 	<p>{menu ? '📖' : '📔'}</p>
		// </button>
		<label
			className='logo menuIcon'
			onChange={toggleMenu}>
			<input
				title='open'
				type='checkbox'
				defaultChecked></input>
			<div>
				<span></span>
				<span></span>
			</div>
		</label>
	);
}
