import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	console.log(context.site)
	return rss({
		title: 'Home',
		description: 'foo bar',
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>en-us</language>`
	});
}
