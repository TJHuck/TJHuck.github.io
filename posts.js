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
			"",
		]
	},
	{
		slug: "my-experience-with-linux-a-retrospective",
		title: "My Experience with Linux, A Retrospective.",
		date: "2026-09-12",
		readTime: "8 min read",
		excerpt: "Making the jump.",
		tags: ["OPERATING SYSTEMS", "CULTURE"],
		body: [
			"The biggest opening remark about moving to linux, that I think everyone can agree with, is that it is not for everyone. But those who grow tired with Window's resource heavy design, bloatware, and constant overbearing AI integration into the roots of the Operating System. I would certainly reccomend it.",
            "For some background information, I have some previous experience with Linux. I knew what I was getting into before I switched over on my main work machine. I've been dualbooting distros like Ubuntu and Mint on old computers and chromebooks before I really even understood the point of Linux.",
            "The distro I chose to switch over too is CachyOS. Which doesn't make much sense for a work machine as CachyOS is marketed as a gaming distro, but the main reason is that it is built on Arch. CachyOS provides the packaged stability with the bleeding edge software and access to the AUR of Arch.",
            "My experience thus far has been great. I haven't lost much of any windows specific functionality, as the things I need are compatible with the proton and wine compatability layers, and switching to a lighter operating system that is packaged with optimizations has significantly improved my battery life. My system runs faster, boots sooner, and is in general more responsive. I also have an appreciation for the fish shell, though I am much more used to bash which I use activley on my Ubuntu server, but have used previously on other distros. I also have found out about tools like auto-cpufreq, which essentially helps the kernel use the CPU in a more optimized manner.",
            "Overall, my experience daily driving Linux for general use and development has been amazing. Maybe the year of Linux truly is upon us."
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
