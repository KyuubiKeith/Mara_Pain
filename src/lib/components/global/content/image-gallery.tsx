// === === === === === === == Imports == === === === === === ===//

// NextJS
import Image from 'next/image';
import {Key} from 'react';

// === === === === === === == Imports == === === === === === ===//

//

// === === === === === === == Render == === === === === === ===//

export default function imageGallery({instagramAssets, author}: any) {
	return (
		<div id='imageGallery'>
			<h3>{author.name} Image Gallery Background</h3>
			<p>
				Courtesy of <sub>Instagram Project version 1.0</sub>
			</p>
			{instagramAssets.map(
				(
					photo: {
						fields: {
							file: {
								url: string;
								details: {image: {height: number; width: number}};
							};
						};
						filename: string;
					},
					i: Key,
				): any => (
					<Image
						key={i}
						src={'https:' + photo.fields.file.url}
						height={photo.fields.file.details.image.height}
						width={photo.fields.file.details.image.width}
						alt={photo.fields.file.url}
						priority
					/>
				),
			)}
		</div>
	);
}
// === === === === === === == Render == === === === === === ===//
