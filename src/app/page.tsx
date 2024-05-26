// === === === === === === == Imports == === === === === === ===//

// NextJS
import type {Metadata} from 'next';

// Contentful - Data Library
import {client} from '@/lib/components/route';
import ImageGallery from '@/lib/components/imageGallery';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == MetaData == === === === === === ===//

export const metadata: Metadata = {
	title: 'Welcome | Mara Pain',
	description: "It's All About Pain",
};

// === === === === === === == MetaData == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default async function Landing(children: any) {
	//

	// ==================== Request =====================//

	// Fetch all blog data from Contentful
	const authorData = await client.getEntries({content_type: 'author'});

	//Assign a variable to hold all the returned json data
	const authorGallery = authorData.items.map((post: any) => post.fields); // console.log(authorGallery)

	// ==================== Request =====================//

	return (
		<>
			{authorGallery.map((author: {name: string; instagramAssets: any[]}) => (
				<div key={author.name}>
					<ImageGallery
						instagramAssets={author.instagramAssets}
						author={author}
					/>
				</div>
			))}
		</>
	);
}

// === === === === === === == Render == === === === === === ===//
