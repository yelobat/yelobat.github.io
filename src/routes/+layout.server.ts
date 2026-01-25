export async function load() {
  const paths = import.meta.glob("/src/lib/content/blog/*.svx", { eager: true });
  const items = Object.entries(paths).map(([path, file]: [string, any]) => {
    return {
      slug: path.split("/").at(-1)?.replace(".svx", ""),
      ...file.metadata,
      date: new Date(file.metadata.date)
    };
  }).sort((a, b) => b.date.getTime() - a.date.getTime());

  return { items };
}

export const prerender = true;
export const trailingSlash = "always";
