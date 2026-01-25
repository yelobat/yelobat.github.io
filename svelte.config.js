import { mdsvex } from 'mdsvex';
import rehypeKatexSvelte from 'rehype-katex-svelte';
import remarkMath from 'remark-math';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
    themes: ["github-dark", "monokai"],
    langs: ["rust", "javascript", "typescript", "bash"]
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
        paths: {
            base: process.env.NODE_ENV === "production" ? "/yelobat.github.io": "",
        }
	},

    preprocess: [vitePreprocess(), mdsvex({
        extensions: [".svx"],
        highlight: {
            highlighter: async (code, lang) => {
                const html = highlighter.codeToHtml(code, {
                    lang: lang,
                    theme: "github-dark",
                });
                return `{@html \`${html}\`}`;
            }
        },
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatexSvelte],
    })],
	extensions: ['.svelte', '.svx']
};

export default config;
