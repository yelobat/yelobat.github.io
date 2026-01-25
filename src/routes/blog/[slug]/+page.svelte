<script lang="ts">
 let { data } = $props();
</script>

<style>
 .blog-content :global(h1) {
     font-size: 3rem;
     font-weight: 900;
     text-transform: uppercase;
     letter-spacing: -0.05em;
     margin-bottom: 2rem;
     color: #1A1A1A;
     line-height: 1.1;
 }

 .blog-content :global(h1::first-letter) {
     background-color: #FF5C4D;
     color: #FFFFFF;
     padding: 0 10px;
     margin-right: 5px;
     border: 4px solid #1A1A1A;
 }

 .blog-content :global(h2) {
     background: #F3E991;
     color: #1A1A1A;
     position: relative;
     display: inline-block;
     padding: 0.5rem 2rem 0.5rem 1rem;
     text-transform: uppercase;
     font-size: 2.0rem;
     font-weight: 900;
     font-style: italic;
     transform: skewX(-10deg);
     margin-top: 2rem;
     margin-bottom: 1rem;
 }

 .blog-content :global(h2)::after {
     content: "";
     position: absolute;
     top: 0;
     right: -40px;
     width: 40px;
     height: 100%;
     background: repeating-linear-gradient(
         90deg,
         #FF5C4D,
         #FF5C4D 4px,
         transparent 4px,
         transparent 8px
     )
 }

 .blog-content :global(h3) {
     font-size: 1.5rem;
     font-weight: 900;
     text-transform: uppercase;
     margin-top: 2rem;
     margin-bottom: 0.75rem;
     border-bottom: 4px solid #1A1A1A;
 }

 .blog-content :global(a) {
     color: #FF5C4D;
     text-decoration: none;
     font-weight: 800;
     border-bottom: 2px solid transparent;
     transition: border-color 0.2s;
 }

 .blog-content :global(a:hover) {
     border-color: #FF5C4D;
 }

 .blog-content :global(a[href^="http"]::after) {
     content: "↗";
     font-size: 0.8em;
     margin-left: 4px;
     font-weight: 900;
 }

 .blog-content :global(p) {
     font-size: 1.125em;
     line-height: 1.5;
     font-weight: 450;
     letter-spacing: -0.01em;
 }

 .blog-content :global(blockquote) {
     background: #FCFCFC;
     border: none;
     border-left: 6px solid #FF5C4D;
     margin: 2.5rem 0;
     padding: 1rem 2rem;
     position: relative;
     background-image: radial-gradient(#E5E5E5 1px, transparent 1px);
     background-size: 20px 20px;
 }

 .blog-content :global(blockquote)::before {
     content: "";
     position: absolute;
     top: 0;
     left: -6px;
     width: 12px;
     height: 12px;
     background: #FF5C4D;
     clip-path: polygon(0 0, 0 100%, 100% 0);
 }

 .blog-content :global(blockquote p) {
     color: #444;
     font-style: italic;
     font-size: 1.1rem;
     line-height: 1.6;
     margin: 0;
 }

 .blog-content :global(img) {
     border: 4px solid #1A1A1A;
     border-radius: 0.5rem;
     margin: 2.5rem 0;
 }

 .blog-content :global(pre) {
     background-color: #1A1A1A !important;
     border: 4px solid #1A1A1A;
     padding: 1.5rem;
     border-radius: 0.75rem;
     overflow-x: auto;
     margin: 2rem 0;
     background-image: radial-gradient(#333 1px, transparent 1px);
     background-size: 20px 20px;
 }

 .blog-content :global(p code) {
     background: transparent;
     border-bottom: 2px solid #FF5C4D;
     font-weight: 800;
     padding: 0 2px;
 }

 .blog-content :global(p code::before) {
     content: "[";
     color: #FF5C4D;
     margin-right: 2px;
 }

 .blog-content :global(p code::after) {
     content: "]";
     color: #FF5C4D;
     margin-left: 2px;
 }

 .blog-content :global(.shiki) {
     background-color: #0d1117 !important;
     padding: 1.5rem;
     border: 4px solid #1A1A1A;
     margin: 2rem 0;
     box-shadow: 8px 8px 0px #F3E991;
     font-family: "JetBrains Mono", monospace;
     font-size: 0.9rem;
     line-height: 1.5;
     position: relative;
     overflow-x: auto;
 }

 .blog-content :global(.shiki)::after {
     content: "";
     position: absolute;
     bottom: 0;
     right: 0;
     width: 20px;
     height: 20px;
     background: #1A1A1A;
     clip-path: polygon(100% 0, 0 100%, 100% 100%);
 }

 .blog-content :global(.katex-mathml) {
     display: none;
 }

 .blog-content :global(.katex-display) {
     display: block;
     text-align: left;
     margin: 2.5rem 0;
     padding: 2rem 1.5rem;
     background: #F9F7F2;
     border: 4px solid #1A1A1A;
     box-shadow: 10px 10px 0px #FF5C4D;
     position: relative;
     overflow-x: auto;
 }

 .blog-content :global(.katex-display)::before {
     content: "MATH";
     position: absolute;
     top: 0;
     left: 0;
     background: #FF5C4D;
     color: #F9F7F2;
     font-size: 10px;
     padding: 2px 8px;
     text-transform: uppercase;
 }

 .blog-content :global(hr) {
     border: none;
     height: 6px;
     background-color: #1A1A1A;

     width: 100vw;
     position: relative;
     left: 50%;
     right: 50%;
     margin-left: -50vw;
     margin-right: -50vw;
     margin-top: 1rem;
     margin-bottom: 4rem;
 }

 :not(pre) > :global(code) {
     background: #F3E991;
     color: #1A1A1A;
     padding: 0.2rem 0.4rem;
     font-weight: 800;
     border: 2px solid #1A1A1A;
 }
</style>

{#if data.Content}
    <article class="max-w-3xl">
        <header class="pb-12 broder-b-8 border-[#1A1A1A]">
            <div class="flex items-center gap-4 mb-6">
                <time class="bg-[#FF5C4D] text-white px-3 py-1 text-sm font-black tabular-nums">
                    {data.meta.date.split("-").reverse().join(".")}
                </time>
                <span class="text-[#FF5C4D] font-black uppercase tracking-widest text-xs">
                    // {data.meta.type}
                </span>
            </div>

            <h1 class="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-6">
                {data.meta.title}
            </h1>

            <p class="text-xl font-bold opacity-70 leading-tight">
                {data.meta.description}
            </p>
        </header>
        <div class="blog-content">
            <data.Content/>
        </div>
    </article>
{:else}
    <div class="h-96 flex items-center justify-center">
        <span class="text-4xl font-black italic uppercase animate-pulse">
            LOADING LOADING LOADING ...
        </span>
    </div>
{/if}
