// === === === === === === == Imports == === === === === === ===//

// NextJS
import Link from 'next/link';

// Components
import Menu from '../menu/menu';
import ThemeToggle from '../theme/themeToggle';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function Header({children}: any) {
	return (
		<header id='🎩'>
			<section id='🧣'>
				<Link href={'/'}>Landing</Link>
				<Link href={'/home'}>Home</Link>

				<Link href={'/blog'}>Blog</Link>

				<Link href={'/about'}>About</Link>
				<Link href={'/contact'}>Contact</Link>

				<Menu />
				<ThemeToggle />
			</section>

			<section id='🚧'>
				<h1> Mara Pain Blog / Gallery. </h1>

				<h2> The Mara Pain Blog Website Is Currently Under Construction. </h2>
				<p>
					<i>Tip</i> Abstract all the things! <br />
					<i>Tip</i> Never forget to save! <br />
				</p>
				<p>
					Please check back with us again soon for updated content and
					functionality...
				</p>
			</section>

			<section>
				<h1>A Visual Type Scale</h1>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<h2>A Visual Type Scale</h2>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<h3>A Visual Type Scale</h3>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<h4>A Visual Type Scale</h4>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<h5>A Visual Type Scale</h5>

				<p>
					What looked like a small patch of purple grass, above five feet
					square, was moving across the sand in their direction.
				</p>

				<p>
					When it came near enough he perceived that it was not grass; there
					were no blades, but only purple roots. The roots were revolving, for
					each small plant in the whole patch, like the spokes of a rimless
					wheel.
				</p>

				<a>— Excerpt from A Voyage to Arcturus, by David Lindsay.</a>
			</section>
		</header>
	);
}

// === === === === === === == Render == === === === === === ===//
