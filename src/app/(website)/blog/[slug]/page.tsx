// === === === === === === == Imports == === === === === === ===//

// Next JS
import Image from 'next/image';
import {notFound} from 'next/navigation';

//Contentful
import {client} from '@/lib/components/route';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import {BLOCKS, Document} from '@contentful/rich-text-types';

//

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == MataData == === === === === === ===//

// === === === === === === == MetaData == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default async function Post({params}: any) {
	//

	// ==================== Query =====================//

	// Fetch all blog data from Contentful
	const blogPost = await client.getEntries({
		content_type: 'blogPosts',
		'fields.slug': params.slug,
	});

	//Assign a variable to hold all the returned json data and filter out based on provided params
	const post = {...blogPost.items[0].fields};

	// ==================== Query =====================//

	//

	// ==================== Functions =====================//

	if (!blogPost) {
		// If a blog post can't be found,
		// tell Next.js to render a 404 page.
		return notFound();
	}

	//Data Testing
	// const searchParams = request.nextUrl.searchParams;
	// const query = URLSearchParams.get('query');
	// console.log(searchParams);
	// console.log(post.title);

	const richTextOptions = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: any, children: any) => {
				return <p>{children}</p>;
			},
		},
	};

	// ==================== Functions =====================//

	//

	// ==================== Content =====================//

	return (
		<article>
			<h1>Blog Post Title: {post.title}</h1>
			<p>Blog Post Slug: {post.slug}</p>
			<p>Blog Post Summary: {post.summary}</p>
			{post.articleImage ? (
				<Image
					src={'https:' + post.articleImage.fields.file.url}
					height={post.articleImage.fields.file.details.image?.height / 2}
					width={post.articleImage.fields.file.details.image?.width / 2}
					alt={post.articleImage.fields.title}
				/>
			) : (
				<p>
					<b>No featured Image.</b>
				</p>
			)}
			{documentToReactComponents(post.details as Document, richTextOptions)}
			<p>Blog Post Author {post.author?.fields.name}</p>
			<p>Blog Post Publish Date {post.date}</p>
			<p>Blog Post Category {post.category}</p>
		</article>
	);

	// ==================== Content =====================//
}
// === === === === === === == Render == === === === === === ===//
