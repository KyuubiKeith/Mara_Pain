'use client';
// === === === === === === == Imports == === === === === === ===//

// Store
import {useTheme} from '@/lib/components/state';

// Components
import Footer from '@/lib/components/global/footer/footer';
import Header from '@/lib/components/global/header/header';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function RootLayout({children}: {children: React.ReactNode}) {
	const {theme}: any = useTheme();
	// console.log(theme);

	return (
		<html lang='en'>
			<body
				id='📦'
				className={theme ? '🌑' : '☀️'}>
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
