// === === === === === === == Imports == === === === === === ===//

// NextJS

// Store
import {useMenu, useTheme} from '@/lib/state';

// React

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == MetaData == === === === === === ===//

// === === === === === === == MetaData == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

//

// ==================== Ease ====================//

// ==================== Ease ====================//

//

// ==================== Overlays ====================//

// ==================== Overlays ====================//

//

// ==================== Main Render =====================//

// const elmOverlay = document.querySelector('.shape-overlays');
// const overlay = new ShapeOverlays(elmOverlay);

export default function Menu({children}: any) {
	const {menu, toggleMenu}: any = useMenu();

	return (
		<>
			<button
				id='🍔'
				type='button'
				className='hamburger'
				aria-label='Toggle Menu'
				onClick={toggleMenu}></button>
			{/* <button
				id='🍔'
				type='button'
				aria-label='Toggle Menu'
				onClick={toggleMenu}></button>
			<menu className={menu ? '📜' : '🗞️'}>
				<h1>Menu Content</h1>
				<a
					id='🍖'
					className={menu ? '📜' : '🗞️'}
					href='#'>
					Menu Item
				</a>
				<a
					id='🍖'
					className={menu ? '📜' : '🗞️'}
					href='#'>
					Menu Item
				</a>
				<a
					id='🍖'
					className={menu ? '📜' : '🗞️'}
					href='#'>
					Menu Item
				</a>
				<a
					id='🍖'
					className={menu ? '📜' : '🗞️'}
					href='#'>
					Menu Item
				</a>
				{children}
				<a
					id='🍖'
					className={menu ? '📜' : '🗞️'}
					href='#'>
					Menu Item
				</a>
			</menu>
			<section id='🧣'></section>
			<svg
				id='🧣'
				className={menu ? '📜' : '🗞️'}
				viewBox='0 0 100 100'
				preserveAspectRatio='none'>
				<defs>
					<linearGradient></linearGradient>
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
				<path className='📔'></path>
				<path className='📔'></path>
				<path className='📔'></path>
				<path className='📔'></path>
			</svg>
			<svg
				className='shape-overlays'
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
			</svg> */}

			<div className='content content--demo-6'>
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

				<div className='demo-title demo-title--demo-6'>Visualize</div>
				<div className='global-menu'>
					<div className='global-menu__wrap'>
						<a
							className='global-menu__item global-menu__item--demo-6'
							href='#'>
							Data Science
						</a>
						<a
							className='global-menu__item global-menu__item--demo-6'
							href='#'>
							Research
						</a>
						<a
							className='global-menu__item global-menu__item--demo-6'
							href='#'>
							Case Studies
						</a>
						<a
							className='global-menu__item global-menu__item--demo-6'
							href='#'>
							Contact
						</a>
					</div>
				</div>
				<svg
					className='shape-overlays'
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
			</div>
		</>
	);
}
// ==================== Main Render =====================//

// === === === === === === ==  Render == === === === === === ===//

//

// ==================== References =====================//

// <menu className={menu ? '📜' : '🗞️'}>
// 	<div className='global-menu__wrap'>
// 		<a
// 			className={menu ? '🍖 📜' : '🍖 🗞️'}
// 			href='#'>
// 			Data Science
// 		</a>
// 		<a
// 			className={menu ? '🍖 📜' : '🍖 🗞️'}
// 			href='#'>
// 			Research
// 		</a>
// 		<a
// 			className={menu ? '🍖 📜' : '🍖 🗞️'}
// 			href='#'>
// 			Case Studies
// 		</a>
// 		<a
// 			className='global-menu__item global-menu__item--demo-6'
// 			href='#'>
// 			Contact
// 		</a>
// 	</div>
// </menu>
// <section className={menu ? '📜' : '🗞️'}></section>
// <svg
// 	id={menu ? '🗞️' : '📜'}
// 	className={menu ? '🔦' : '🌩️'}
// 	viewBox='0 0 100 100'
// 	preserveAspectRatio='none'>
// 	<defs>
// 		<linearGradient
// 			id='gradient1'
// 			x1='0%'
// 			y1='0%'
// 			x2='0%'
// 			y2='100%'>
// 			<stop
// 				offset='0%'
// 				stopColor='#00c99b'
// 			/>
// 			<stop
// 				offset='100%'
// 				stopColor='#ff0ea1'
// 			/>
// 		</linearGradient>
// 		<linearGradient
// 			id='gradient2'
// 			x1='0%'
// 			y1='0%'
// 			x2='0%'
// 			y2='100%'>
// 			<stop
// 				offset='0%'
// 				stopColor='#ffd392'
// 			/>
// 			<stop
// 				offset='100%'
// 				stopColor='#ff3898'
// 			/>
// 		</linearGradient>
// 		<linearGradient
// 			id='gradient3'
// 			x1='0%'
// 			y1='0%'
// 			x2='0%'
// 			y2='100%'>
// 			<stop
// 				offset='0%'
// 				stopColor='#110046'
// 			/>
// 			<stop
// 				offset='100%'
// 				stopColor='#32004a'
// 			/>
// 		</linearGradient>
// 	</defs>
// 	<path className='shape-overlays__path'></path>
// 	<path className='shape-overlays__path'></path>
// 	<path className='shape-overlays__path'></path>
// </svg>

//class ShapeOverlays {
// 	constructor(elm) {
// 		this.elm = elm;
// 		this.path = elm.querySelectorAll('path');
// 		this.numPoints = 10;
// 		this.duration = 900;
// 		this.delayPointsArray = [];
// 		this.delayPointsMax = 300;
// 		this.delayPerPath = 250;
// 		this.timeStart = Date.now();
// 		this.isOpened = false;
// 		this.isAnimating = false;
// 	}
// 	toggle() {
// 		this.isAnimating = true;
// 		for (var i = 0; i < this.numPoints; i++) {
// 			this.delayPointsArray[i] = Math.random() * this.delayPointsMax;
// 		}
// 		if (this.isOpened === false) {
// 			this.open();
// 		} else {
// 			this.close();
// 		}
// 	}
// 	open() {
// 		this.isOpened = true;
// 		this.elm.classList.add('is-opened');
// 		this.timeStart = Date.now();
// 		this.renderLoop();
// 	}
// 	close() {
// 		this.isOpened = false;
// 		this.elm.classList.remove('is-opened');
// 		this.timeStart = Date.now();
// 		this.renderLoop();
// 	}
// 	updatePath(time) {
// 		const points = [];
// 		for (var i = 0; i < this.numPoints; i++) {
// 			points[i] =
// 				(1 -
// 					ease.cubicInOut(
// 						Math.min(
// 							Math.max(time - this.delayPointsArray[i], 0) / this.duration,
// 							1,
// 						),
// 					)) *
// 				100;
// 		}

// 		let str = '';
// 		str += this.isOpened ? `M 0 0 V ${points[0]}` : `M 0 ${points[0]}`;
// 		for (var i = 0; i < this.numPoints - 1; i++) {
// 			const p = ((i + 1) / (this.numPoints - 1)) * 100;
// 			const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
// 			str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${points[i + 1]} `;
// 		}
// 		str += this.isOpened ? `V 100 H 0` : `V 0 H 0`;
// 		return str;
// 	}
// 	render() {
// 		if (this.isOpened) {
// 			for (var i = 0; i < this.path.length; i++) {
// 				this.path[i].setAttribute(
// 					'd',
// 					this.updatePath(
// 						Date.now() - (this.timeStart + this.delayPerPath * i),
// 					),
// 				);
// 			}
// 		} else {
// 			for (var i = 0; i < this.path.length; i++) {
// 				this.path[i].setAttribute(
// 					'd',
// 					this.updatePath(
// 						Date.now() -
// 							(this.timeStart + this.delayPerPath * (this.path.length - i - 1)),
// 					),
// 				);
// 			}
// 		}
// 	}
// 	renderLoop() {
// 		this.render();
// 		if (
// 			Date.now() - this.timeStart <
// 			this.duration +
// 				this.delayPerPath * (this.path.length - 1) +
// 				this.delayPointsMax
// 		) {
// 			requestAnimationFrame(() => {
// 				this.renderLoop();
// 			});
// 		} else {
// 			this.isAnimating = false;
// 		}
// 	}
// }

// 	(function () {
// 		const elmHamburger = document.querySelector('.hamburger');
// 		const gNavItems = document.querySelectorAll('.global-menu__item');
// 		const elmOverlay = document.querySelector('.shape-overlays');
// 		const overlay = new ShapeOverlays(elmOverlay);

// 		elmHamburger.addEventListener('click', () => {
// 			if (overlay.isAnimating) {
// 				return false;
// 			}
// 			overlay.toggle();
// 			if (overlay.isOpened === true) {
// 				elmHamburger.classList.add('is-opened-navi');
// 				for (var i = 0; i < gNavItems.length; i++) {
// 					gNavItems[i].classList.add('is-opened');
// 				}
// 			} else {
// 				elmHamburger.classList.remove('is-opened-navi');
// 				for (var i = 0; i < gNavItems.length; i++) {
// 					gNavItems[i].classList.remove('is-opened');
// 				}
// 			}
// 		});
// 	})();

// 	useEffect(() => {
// 		if (document) {
// 			/*
//          To avoid potential crashes of null/undefined selections, you may want
//          to save the selection as a variable and check if the selection exists
//          before attempting to add a style. For example, type guarding the
//          selection to make sure its defined before attempting to access
//          Element properties:

//          const node = document.getElementById("container");
//          if (node) node.style = "...";
//       */
// 		}
// 	}, []);

// 	const elmHamburger = useRef < HTMLButtonElement > null;
// 	const gNavItems = document.querySelectorAll('.global-menu__item');
// 	const elmOverlay = createRef();
// 	const overlay = new ShapeOverlays(elmOverlay);

// 	elmHamburger.current?.addEventListener('click', () => {
// 		overlay.toggle();
// 	});

// ==================== References =====================//
