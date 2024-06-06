// === === === === === === == Imports == === === === === === ===//

// Store
import {useMenu} from '@/lib/templates/global/state';
import {useRef} from 'react';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function MenuToggle() {
	const {menu, toggleMenu}: any = useMenu();
	const toggleRef = useRef(null);
	return (
		<label
			className='logo menuIcon'
			// onClick={toggleMenu}
		>
			<input
				id='🍔'
				ref={toggleRef}
				title={menu ? 'open' : 'close'}
				type='checkbox'
				aria-label='Toggle Menu'
				defaultChecked
				onChange={toggleMenu}></input>
			<div>
				<span></span>
				<span></span>
			</div>
		</label>
	);
}

// === === === === === === == Render == === === === === === ===//
