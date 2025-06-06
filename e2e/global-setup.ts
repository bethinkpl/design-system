async function globalSetup() {
	process.env.STORIES_DATA = await fetch('http://localhost:6006/index.json').then((r) =>
		r.text(),
	);
}

export default globalSetup;
