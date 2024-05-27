'use client';
// === === === === === === == Imports == === === === === === ===//

// Store
import {useTheme} from '@/lib/components/state';

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
