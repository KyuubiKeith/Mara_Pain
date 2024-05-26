// === === === === === === == Render == === === === === === ===//

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body>
				<>
					<header>
						<h4>Main Header!</h4>
					</header>
					<p>
						<i>Tip</i> Abstract all the things! <br />
						<i>Tip</i> Never forget to save! <br />
					</p>

					<main>{children}</main>

					<footer>
						<h4>Main Footer</h4>
					</footer>
				</>
			</body>
		</html>
	);
}

// === === === === === === == Render == === === === === === ===//
