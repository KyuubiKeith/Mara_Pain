// === === === === === === == Imports == === === === === === ===//

// NextJS
import Link from 'next/link';

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

				<Link href={'/menu'}>Menu</Link>
			</section>

			<section id='🚧'>
				<h1> Welcome to Mara Pain. </h1>

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
		</header>
	);
}

// === === === === === === == Render == === === === === === ===//
