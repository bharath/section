export const IMAGE_BACKGROUND_TYPE = 'image';
export const VIDEO_BACKGROUND_TYPE = 'video';
export function backgroundImageStyles( url ) {
	return url ? { backgroundImage: `url(${ url })` } : {};
}

export const CSS_UNITS = [
	{ value: 'px', label: 'px', default: 20 },
	{ value: '%', label: '%', default: 5 },
	{ value: 'em', label: 'em', default: 1 },
	{ value: 'rem', label: 'rem', default: 1 },
	{ value: 'vw', label: 'vw', default: 1 },
	{ value: 'vh', label: 'vh', default: 1 },
];

export function attributesFromMedia( setAttributes ) {
	return ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { url: undefined, id: undefined } );
			return;
		}
		let mediaType;
		// for media selections originated from a file upload.
		if ( media.media_type ) {
			if ( media.media_type === IMAGE_BACKGROUND_TYPE ) {
				mediaType = IMAGE_BACKGROUND_TYPE;
			} else {
				// only images and videos are accepted so if the media_type is not an image we can assume it is a video.
				// Videos contain the media type of 'file' in the object returned from the rest api.
				mediaType = VIDEO_BACKGROUND_TYPE;
			}
		} else {
			// for media selections originated from existing files in the media library.
			if (
				media.type !== IMAGE_BACKGROUND_TYPE &&
				media.type !== VIDEO_BACKGROUND_TYPE
			) {
				return;
			}
			mediaType = media.type;
		}

		setAttributes( {
			url: media.url,
			id: media.id,
			backgroundType: mediaType,
			...( mediaType === VIDEO_BACKGROUND_TYPE
				? { focalPoint: undefined, hasParallax: undefined }
				: {} ),
		} );
	};
}
