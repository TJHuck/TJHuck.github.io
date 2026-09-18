const BLOG_POSTS = [
	{
		slug: "revisit-old-projects",
		title: "Revisit Old Projects.",
		date: "2026-09-17",
		readTime: "5 min read",
		excerpt: "Why revisiting old projects helps you become a better developer.",
		tags: ["PROCESS"],
		body: [
			"A lot of junior or beginner developers I know start projects and repos, make the first iteration, and then leave the code to age in their GitHub.",
			"Which don't get me wrong. Doing a lot of projects to expand your knowledge is great. It broadens your horizons so much to all of the different applications for coding.",
			"In doing so many different projects, you lose out on the knowlege you gain from returning to old projects and improving them.",
			"I recently returned to my Albion College Navigation tool, which I haven't worked on in a year from time of writing. I know so much more about python and algorithms, why would I not return to debug my old code? Why would I not learn from my past mistakes?",
			"continue writing here",
		]
	},
	{
		slug: "my-experience-with-linux-a-retrospective",
		title: "My Experience with Linux, A Retrospective.",
		date: "2026-09-19",
		readTime: "8 min read",
		excerpt: "Making the jump.",
		tags: ["OPERATING SYSTEMS", "CULTURE"],
		body: [
			"The biggest opening remark about moving to linux.",
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
