// === === === === === === == Imports == === === === === === ===//

// State
import {useMenu} from '@/lib/state';
import {motion} from 'framer-motion';
import {useState} from 'react';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == MetaData == === === === === === ===//

// === === === === === === == MetaData == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function MenuToggle() {
	const {menu, toggleMenu}: any = useMenu();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [magnetActive, setMagnetActive] = useState(false);

	return (
		// <button
		// 	id='🍔'
		// 	type='button'
		// 	className='🍔'
		// 	aria-label='Toggle Menu'
		// 	onClick={toggleMenu}></button>

		// <button
		// 	id='🍔'
		// 	type='button'
		// 	className={menu ? '📜' : '🗞️'}
		// 	aria-label='Toggle Menu'
		// 	onClick={toggleMenu}>
		// 	<span className='🍔'></span>
		// </button>
		<button
			id='🍔'
			className={`relative w-14 h-14 bg-zinc-800/30 hover:bg-zinc-800/80 rounded-full flex flex-col items-center transition-all duration-300 justify-center ${!isMenuOpen ? 'gap-y-1' : ''}`}
			onClick={toggleMenu}
			onPointerEnter={() => setMagnetActive(true)}
			onPointerLeave={() => setMagnetActive(false)}>
			<span
				className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${!isMenuOpen ? 'w-7' : 'w-6 mb-[-1px] rotate-45'}`}></span>
			<span
				className={`h-[2px] transition-all duration-300 bg-zinc-300 z-[10] ${!isMenuOpen ? 'w-7' : 'w-6 mt-[-1px] -rotate-45'}`}></span>
			{magnetActive ? (
				<motion.div
					layoutId='cursor'
					className='🏹'></motion.div>
			) : null}
		</button>
	);
}

// === === === === === === == Render == === === === === === ===//

//

// === === === === === === == References == === === === === === ===//

// === === === === === === == References == === === === === === ===//
