<script lang="ts">
 let { data } = $props();
 import { resolve } from "$app/paths";
</script>

<div class="divide-y-4 divide-[#1A1A1A]">
    {#each data.items as item}
        <article class="group py-10 md:py-16 first:pt-0 last:pb-0">
            <div class="flex flex-col md:grid md:grid-cols-1 gap-4 md:gap-8">
                <div class="md:col-span-3">
                    <div class="md:sticky md:top-8 flex flex-row md:flex-col items-baseline md:items-start gap-3">
                        <time class="block text-4xl font-black leading-none mb-2 tabular-nums">
                            { new Date(item.date).toLocaleDateString("default", { day: "2-digit", month: "short", year: "numeric" }) }
                        </time>
                        <span class="inline-block px-2 py-0.5 bg-[#FF5C4D] text-white text-[10px] font-black uppercase tracking-widest">
                            { item.type || "POST" }
                        </span>
                    </div>
                </div>

                <div class="md:col-span-9">
                    <a href={resolve(`/blog/${item.slug}`)} class="block mb-4">
                        <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:bg-[#FF5C4D] group-hover:text-white transition-all inline-block px-1 -ml-1">
                            {item.title}
                        </h2>
                    </a>
                    <p class="text-lg font-medium text-[#1A1A1A]/70 mb-8 max-w-2xl leading-snug">
                        {item.description}
                    </p>

                    {#if item.tech}
                        <div class="flex flex-wrap gap-2">
                            {#each item.tech as tech}
                                <span class="bg-[#FF5C4D] text-white px-3 py-1 text-[10px] font-black uppercase">
                                    { tech }
                                </span>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>
        </article>
    {/each}
</div>
