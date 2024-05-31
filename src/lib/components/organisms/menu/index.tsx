// === === === === === === == Imports == === === === === === ===//

// Store
import {useMenu, useTheme} from '@/lib/state';

// React
import useMediaQuery from '@/lib/viewport';
import ThemeToggle from '../../molecules/themeToggle';

// === === === === === === == Imports == === === === === === ===//

//

class ShapeOverlays {
	delayPointsArray: number[] = [];
	elm: any;
	path: any;
	numPoints: number;
	duration: number;
	// delayPointsArray: string[];
	delayPointsMax: number;
	delayPerPath: number;
	timeStart: number;
	isOpened: boolean;
	isAnimating: boolean;
	constructor(elm: any) {
		this.elm = elm;
		this.path = '.🗞️';
		this.numPoints = 10;
		this.duration = 900;
		this.delayPointsArray = [];
		this.delayPointsMax = 300;
		this.delayPerPath = 250;
		this.timeStart = Date.now();
		this.isOpened = false;
		this.isAnimating = false;
	}
	toggle() {
		this.isAnimating = true;
		for (var i = 0; i < this.numPoints; i++) {
			this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
		}
		if (this.isOpened === false) {
			this.open();
		} else {
			this.close();
		}
	}
	open() {
		this.isOpened = true;
		this.elm.classList.add('is-opened');
		this.timeStart = Date.now();
		this.renderLoop();
	}
	close() {
		this.isOpened = false;
		this.elm.classList.remove('is-opened');
		this.timeStart = Date.now();
		this.renderLoop();
	}
	updatePath(time: number) {
		const points = [];
		for (var i = 0; i < this.numPoints; i++) {
			points[i] =
				(1 -
					ease.cubicInOut(
						Math.min(
							Math.max(time - this.delayPointsArray[i], 0) / this.duration,
							1,
						),
					)) *
				100;
		}

		let str = '';
		str += this.isOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
		for (var i = 0; i < this.numPoints - 1; i++) {
			const p = ((i + 1) / (this.numPoints - 1)) * 100;
			const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
		}
		str += this.isOpened ? `V 100 H 0` : `V 0 H 0`;
		return str;
	}
	render() {
		if (this.isOpened) {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute(
					'd',
					this.updatePath(
						Date.now() - (this.timeStart + this.delayPerPath * i),
					),
				);
			}
		} else {
			for (var i = 0; i < this.path.length; i++) {
				this.path[i].setAttribute(
					'd',
					this.updatePath(
						Date.now() -
							(this.timeStart + this.delayPerPath * (this.path.length - i - 1)),
					),
				);
			}
		}
	}
	renderLoop() {
		this.render();
		if (
			Date.now() - this.timeStart <
			this.duration +
				this.delayPerPath * (this.path.length - 1) +
				this.delayPointsMax
		) {
			requestAnimationFrame(() => {
				this.renderLoop();
			});
		} else {
			this.isAnimating = false;
		}
	}
}

// === === === === === === == Render == === === === === === ===//

export default function Menu({children}: any) {
	const {menu, toggleMenu}: any = useMenu();

	const ease = {
		exponentialIn: (t: number) => {
			return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
		},
		exponentialOut: (t: number) => {
			return t == 1.0 ? t : 1.0 - Math.pow(2.0, -10.0 * t);
		},
		exponentialInOut: (t: number) => {
			return t == 0.0 || t == 1.0
				? t
				: t < 0.5
					? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
					: -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
		},
		sineOut: (t: number) => {
			const HALF_PI = 1.5707963267948966;
			return Math.sin(t * HALF_PI);
		},
		circularInOut: (t: number) => {
			return t < 0.5
				? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
				: 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
		},
		cubicIn: (t: number) => {
			return t * t * t;
		},
		cubicOut: (t: number) => {
			const f = t - 1.0;
			return f * f * f + 1.0;
		},
		cubicInOut: (t: number) => {
			return t < 0.5
				? 4.0 * t * t * t
				: 0.5 * Math.pow(2.0 * t - 2.0, 3.0) + 1.0;
		},
		quadraticOut: (t: number) => {
			return -t * (t - 2.0);
		},
		quarticOut: (t: number) => {
			return Math.pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;
		},
	};
	// ==================== Ease ====================//
	//

	const isMobile = useMediaQuery('(max-width: 768px)');

	// const elmHamburger = document.querySelector('.📂');
	// const gNavItems = document.querySelectorAll('.🔖');
	const overlay = new ShapeOverlays('.🗞️');

	// elmHamburger.addEventListener('click', () => {
	// 	if (overlay.isAnimating) {
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
	// 	}
	// });

	return (
		<section className={menu ? '📜' : '🗞️'}>
			<div className='📕'>
				<a
					className={menu ? '🔖 🌠 📜' : '🔖 🌠 '}
					href='#'>
					Data Science
				</a>
				<a
					className={menu ? '🔖 🌠 📜' : '🔖 🌠 '}
					href='#'>
					Data Science
				</a>
				<a
					className={menu ? '🔖 🌠 📜' : '🔖 🌠 '}
					href='#'>
					Data Science
				</a>
				<a
					className={menu ? '🔖 🌠 📜' : '🔖 🌠 '}
					href='#'>
					Data Science
				</a>
				<a
					className={menu ? '🔖 🌠 📜' : '🔖 🌠 '}
					href='#'>
					{isMobile ? <ThemeToggle /> : null}
				</a>
			</div>
			<svg
				className={menu ? '📜' : '🗞️'}
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
				<path className='📜'></path>
				<path className='📜'></path>
				<path className='📜'></path>
			</svg>
			{children}
		</section>
	);
}

// === === === === === === == Render == === === === === === ===//
