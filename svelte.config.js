import adapter from '@sveltejs/adapter-static';
import { mdsvex} from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback:  undefined,
      precompress: false,
      strict: true
		})
	},
  extensions: ['.svelte', '.md', '.svx'],
  preprocess: [mdsvex({ extensions: ['.md', '.svx'] })]
};

export default config;
