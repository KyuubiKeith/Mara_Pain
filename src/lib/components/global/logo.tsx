// === === === === === === == Imports == === === === === === ===//

//Nextjs
import Image from 'next/image';
import Link from 'next/link';

// React
import useMediaQuery from './viewport';

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
				className={isMobile ? 'logo mobile' : 'logo desktop'}
				alt={'Mara Pain Brand Logo'}
				src={
					isMobile
						? '/brand_identity/iconography/Logo/Quill.svg'
						: '/brand_identity/iconography/Logo/Bloody Quill.svg'
				}
				width={isMobile ? 70 : 100}
				height={isMobile ? 30 : 100}
				priority
			/>
		</Link>
	);
}

// === === === === === === == Render == === === === === === ===//
