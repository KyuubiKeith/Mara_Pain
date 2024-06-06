// ==================== Imports ====================//

//React

// State
import {useMenu} from '@/lib/templates/global/state';

// Components

// ==================== Imports ====================//

// ==================== Render ====================//

export default function MenuOverlays() {
	const {menu}: any = useMenu();
	return (
		<svg
			id='🧣'
			className={menu ? '📜' : '📓'}
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
						stopColor='#00c99b'
					/>
					<stop
						offset='100%'
						stopColor='#ff0ea1'
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
						stopColor='#ffd392'
					/>
					<stop
						offset='100%'
						stopColor='#ff3898'
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
						stopColor='#110046'
					/>
					<stop
						offset='100%'
						stopColor='#32004a'
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
