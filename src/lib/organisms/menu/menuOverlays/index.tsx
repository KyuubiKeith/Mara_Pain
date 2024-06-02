// ==================== Imports ====================//

//React

// State
import {useMenu} from '@/lib/templates/global/state';

// Components

// ==================== Imports ====================//

// ==================== Render ====================//

export default function Overlays() {
	const {menu, toggleMenu}: any = useMenu();
	return (
		<svg
			className={`${menu ? 'shape-overlays is-opened' : 'shape-overlays'}`}
			viewBox='0 0 100 100'
			preserveAspectRatio='none'>
			<defs>
				<linearGradient
					id='gradient1'
					x1='0%'
					y1='0%'
					x2='0%'
					y2='100%'>
					<stop
						offset='0%'
						stopColor='#ef5934'
					/>
					<stop
						offset='100%'
						stopColor='#ef5934'
					/>
				</linearGradient>
				<linearGradient
					id='gradient2'
					x1='0%'
					y1='0%'
					x2='0%'
					y2='100%'>
					<stop
						offset='0%'
						stopColor='#f8a220'
					/>
					<stop
						offset='100%'
						stopColor='#ef5934'
					/>
				</linearGradient>
				<linearGradient
					id='gradient3'
					x1='0%'
					y1='0%'
					x2='0%'
					y2='100%'>
					<stop
						offset='0%'
						stopColor='#215e4a'
					/>
					<stop
						offset='100%'
						stopColor='#215e4a'
					/>
				</linearGradient>
			</defs>
			<path className='shape-overlays__path'></path>
			<path className='shape-overlays__path'></path>
			<path className='shape-overlays__path'></path>
		</svg>
	);
}

// ==================== Render ====================//
