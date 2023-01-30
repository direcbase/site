import preprocess from 'svelte-preprocess';
//import adapter from '@sveltejs/adapter-auto';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: static_adapter()
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
