'use client';

import Link from 'next/link';
import {useSearchParams} from 'next/navigation';

export default function BlogNavigation({params}: any) {
	const searchParams = useSearchParams();
	const search = searchParams.get('query');
	console.log(params);
	return (
		<nav>
			<Link href={'/blog'}>Prev Blog</Link>
			<Link href={'/blog'}>Next Blog</Link>
		</nav>
	);
}

// 'use client'

// import { useSearchParams } from 'next/navigation'

// export default function SearchBar() {
//   const searchParams = useSearchParams()

//   const search = searchParams.get('search')

//   // URL -> `/dashboard?search=my-project`
//   // `search` -> 'my-project'
//   return <>Search: {search}</>
// }
