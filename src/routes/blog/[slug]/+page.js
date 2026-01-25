import { error } from "@sveltejs/kit";

// @ts-ignore
export async function load({ params }) {
    try {
        const post = await import(`../../../lib/content/blog/${params.slug}.svx`);
        return {
            Content: post.default,
            meta: post.metadata
        };
    } catch (e) {
        throw error(404, `Could not find the documenet: ${params.slug}`);
    }
}
