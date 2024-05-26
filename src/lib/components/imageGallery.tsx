import Image from 'next/image';
import {Key} from 'react';

export default function imageGallery({instagramAssets, author}: any) {
	// console.log(instagramAssets[0].fields);
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
					i: Key | null | undefined,
				): any => (
					<Image
						key={i}
						src={'https:' + photo.fields.file.url}
						height={photo.fields.file.details.image.height / 4}
						width={photo.fields.file.details.image.width / 4}
						alt={photo.filename}
					/>
				),
			)}
		</div>
	);
}