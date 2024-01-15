const allImages = import.meta.glob<{ default: ImageMetadata }>(
	"/src/content/posts/_images/**/*.{png,jpg,jpeg,webp}",
)

export async function resolvepostsImage(url: string | undefined) {
	if (!url) return

	if (!(url in allImages)) {
		throw new Error(`[posts] Image "${url}" not found! Is there a typo?`)
	}

	const { default: image } = await allImages[url]()

	return image
}

export async function resolveCoverImage(entry: {
	data: { title: string; coverImage?: string | undefined }
}) {
	if (!entry.data.coverImage) {
		return undefined
	}

	if (!(entry.data.coverImage in allImages)) {
		throw new Error(
			`[posts] Cover image for "${entry.data.title}" not found! Provided: "${entry.data.coverImage}", is there a typo?`,
		)
	}

	const { default: image } = await allImages[entry.data.coverImage]()

	return image
}

export async function resolveSocialImage(entry: {
	data: { title: string; socialImage?: string | undefined }
}) {
	if (!entry.data.socialImage) {
		return undefined
	}

	if (!(entry.data.socialImage in allImages)) {
		throw new Error(
			`[posts] Social image for "${entry.data.title}" not found! Provided: "${entry.data.socialImage}", is there a typo?`,
		)
	}

	const { default: image } = await allImages[entry.data.socialImage]()

	return image
}
