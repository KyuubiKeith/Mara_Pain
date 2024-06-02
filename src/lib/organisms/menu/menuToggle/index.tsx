// === === === === === === == Imports == === === === === === ===//

// Store
import {useMenu} from '@/lib/templates/global/state';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function MenuToggle() {
	const {menu, toggleMenu}: any = useMenu();
	return (
		<>
			{/* <button
				className='menuIcon'
				type='button'
				aria-label='Toggle Menu'
				onClick={toggleMenu}>
				<p>{menu ? '📖' : '📔'}</p>
			</button> */}
			<div className='hamburger hamburger--demo-6 js-hover'>
				<div className='hamburger__line hamburger__line--01'>
					<div className='hamburger__line-in hamburger__line-in--01 hamburger__line-in--demo-5'></div>
				</div>
				<div className='hamburger__line hamburger__line--02'>
					<div className='hamburger__line-in hamburger__line-in--02 hamburger__line-in--demo-5'></div>
				</div>
				<div className='hamburger__line hamburger__line--03'>
					<div className='hamburger__line-in hamburger__line-in--03 hamburger__line-in--demo-5'></div>
				</div>
				<div className='hamburger__line hamburger__line--cross01'>
					<div className='hamburger__line-in hamburger__line-in--cross01 hamburger__line-in--demo-5'></div>
				</div>
				<div className='hamburger__line hamburger__line--cross02'>
					<div className='hamburger__line-in hamburger__line-in--cross02 hamburger__line-in--demo-5'></div>
				</div>
			</div>
			<label
				className='logo menuIcon'
				// onChange={toggleMenu}
			>
				<input
					title='open'
					type='checkbox'
					defaultChecked></input>
				<div>
					<span></span>
					<span></span>
				</div>
			</label>
		</>
	);
}

// === === === === === === == Render == === === === === === ===//
