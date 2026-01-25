<script lang="ts">
 import './layout.css';
 import logo from '$lib/assets/logo.png';
 import { resolve } from '$app/paths';

 let { children } = $props();
 let isNavOpen = $state(false);

</script>

<svelte:head>
    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossorigin="anonymous">
</svelte:head>

<div class="min-h-screen flex flex-col md:flex-row">
    <div class="md:hidden flex items-center justify-between p-4 bg-[#F3E991] border-b-4 border-[#1A1A1A] sticky top-0 z-30">
        <span class="font-black uppercase tracking-tighter">
            Yelobat's Blog
        </span>
        <button onclick={() => isNavOpen = !isNavOpen}
            class="bg-[#1A1A1A] text-white px-4 py-1 font-black uppercase text-xs">
            { isNavOpen ? "Close" : "Menu" }
        </button>
    </div>
    <aside class="{isNavOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 w-full
                  md:w-80 h-screen fixed left-0 top-0 border-r-4 border-[#1A1A1A] bg-[#F3E991] p-8 flex flex-col justify-between z-20">
        <div class="pt-16 md:pt-0">
            <div class="w-full aspect-square max-w-[240px] bg-white border-4 border-[#1A1A1A] rounded-xl overflow-hidden mb-8 shadow-none transition-transform hover:scale-105">
                <img src={logo} alt="Logo" class="w-full h-full object-cover"/>
            </div>
            <h1 class="text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                Yelobat's Blog
            </h1>
            <p class="text-sm font-bold uppercase opacity-60 tracking-widest">
                Bevy, Rust, Graphics, Music, and everything Tech related
            </p>
        </div>

        <nav class="mt-8">
            <ul class="space-y-4 md:space-y-2 font-black uppercase text-2xl md:text-sm italic">
                <li><a href={resolve("/")} onclick={() => isNavOpen = false } class="hover:text-[#FF5C4D]">Index</a></li>
                <li><a href={resolve("/about")} onclick={() => isNavOpen = false } class="hover:text-[#FF5C4D]">About</a></li>
            </ul>
        </nav>
    </aside>

    <main class="flex-1 md:ml-80 p-6 md:p-20">
        <div class="max-w-4xl mx-auto">
            {@render children()}
        </div>
    </main>
</div>
