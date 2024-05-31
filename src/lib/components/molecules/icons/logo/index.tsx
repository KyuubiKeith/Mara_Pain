// === === === === === === == Imports == === === === === === ===//

//Nextjs
import Image from 'next/image';
import Link from 'next/link';

// React
import useMediaQuery from '../../../../viewport';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function MaraPainLogo() {
	const isMobile = useMediaQuery('(max-width: 768px)');
	return (
		<Link
			href='https://marapain.vercel.app'
			passHref>
			<Image
				className={isMobile ? '©️ 📱' : '©️ 💻'}
				alt={'Mara Pain Brand Logo'}
				src={
					isMobile ? '/icons/Logo/Quill.svg' : '/icons/Logo/Bloody Quill.svg'
				}
				width={isMobile ? 100 : 100}
				height={isMobile ? 40 : 100}
				priority
			/>
		</Link>
	);
}

// === === === === === === == Render == === === === === === ===//
