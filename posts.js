const BLOG_POSTS = [
	{
		slug: "revisit-old-projects",
		title: "Revisit Old Projects",
		date: "2026-09-17",
		readTime: "5 min read",
		excerpt: "Why revisiting old projects helps you become a better developer.",
		tags: ["PROCESS"],
		body: [
			"The unfinished idea is usually the one with the most energy. It still has room to surprise you, change shape, and become something better than the version you first imagined.",
			"Sharing work in progress creates useful pressure without requiring a final answer. It invites better questions, clearer feedback, and a record of how the work actually came together."
		]
	},
	{
		slug: "a-small-case-for-smaller-websites",
		title: "A small case for smaller websites",
		date: "2024-04-02",
		readTime: "8 min read",
		excerpt: "Notes on making the web a little more human, intentional, and fun to visit.",
		tags: ["WEB", "CULTURE"],
		body: [
			"A website does not need to be large to be useful. A focused collection of pages can be easier to maintain, easier to understand, and more pleasant to return to.",
			"Small websites also leave room for personality. They can be direct, fast, and specific instead of trying to serve every audience at once."
		]
	}
];

function formatPostDate(date) {
	return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
		month: "long",
		day: "2-digit",
		year: "numeric"
	});
}

function postMeta(post) {
	return `${formatPostDate(post.date)} · ${post.readTime}`;
}

function postTags(post) {
	return post.tags.join(" · ");
}

function renderPostCard(post) {
	return `
		<a class="post-card" href="post.html?slug=${post.slug}">
		<article class="post">
			<small>${postMeta(post)}</small>
			<h3>${post.title}</h3>
			<p>${post.excerpt}</p>
			<div class="tags">${postTags(post)}</div>
		</article>
		</a>`;
}

function renderFullPost(post) {
	return `
		<article class="full-post">
			<a class="back-link" href="writing.html">← All posts</a>
			<small>${postMeta(post)}</small>
			<h2>${post.title}</h2>
			<div class="tags">${postTags(post)}</div>
			${post.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
		</article>`;
}
