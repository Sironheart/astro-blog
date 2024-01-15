import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
		hero: z.object({
			url: z.string(),
			alt: z.string(),
		}).optional(),
	}),
})

export const collection = {
	posts: postsCollection,
}
