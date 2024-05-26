// === === === === === === == MetaData == === === === === === ===//

//

import Link from 'next/link';
import type {Metadata} from 'next';

// Contentful
import {client} from '@/lib/components/route';

//

// === === === === === === == MetaData == === === === === === ===//

//

// === === === === === === == MetaData == === === === === === ===//

// export const metadata: Metadata = {
// 	title: 'Blog | Mara Pain',
// 	description: "It's All About Pain",
// };

// === === === === === === == MetaData == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default async function BlogList() {
	//

	// ==================== Query =====================//

	// Fetch all blog data from Contentful
	const blogPostData = await client.getEntries({content_type: 'blogPosts'});

	//Assign a variable to hold all the returned json data
	const postData = blogPostData.items.map((post: any) => post.fields);

	// ==================== Query =====================//

	//
	return (
		<>
			<h2>Blog Page Header</h2>
			<ul>
				{postData.map((post: any, i: number) => (
					<li key={i}>
						<Link
							href={{
								pathname: `/blog/${post.slug}`,
								query: {i},
							}}
							as={`/blog/${post.slug}`}>
							{post.title}
							{i}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

// === === === === === === == Render == === === === === === ===//
