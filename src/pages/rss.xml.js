import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const aiPosts = (await getCollection("ai-experiments")).filter(
    (post) => !post.data.draft,
  );

  const d2cPosts = (await getCollection("disconnect-to-connect")).filter(
    (post) => !post.data.draft,
  );

  const items = [...aiPosts, ...d2cPosts].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
