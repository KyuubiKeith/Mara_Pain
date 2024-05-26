// === === === === === === == Imports == === === === === === ===//

// // Components
// import Footer from '@/lib/components/global/footer/footer';
// import Header from '@/lib/components/global/header/header';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body>
				<>
					{/* <Header /> */}
					{children}
					{/* <Footer /> */}
				</>
			</body>
		</html>
	);
}

// === === === === === === == Render == === === === === === ===//
