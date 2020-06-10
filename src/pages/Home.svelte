<script>
  import { fly } from "svelte/transition";
  import { themes } from "./themes";
  import Controls from "../components/Controls.svelte";

  let selectedTemplate = themes[1].cmp;
  let open = true;

  function setTemplate(t) {
    selectedTemplate = t;
    open = true;
  }
</script>

<style>
  .resume {
    position: absolute;
    width: 21cm;
    height: 29.68cm;
    page-break-after: auto;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 10;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>

<div class="min-h-screen flex justify-center items-center flex-col space-y-4">
  <div class="text-5xl font-thin px-4 text-center">Chose a template, then modify it, finally download your resume !</div>
  <div>
    {#each themes as theme}
      <div
        class="hover:shadow-xl transition-shadow duration-150 cursor-pointer
        h-full"
        on:click={() => setTemplate(theme.cmp)}>
        <img class="w-48" src="/assets/{theme.preview}" alt="" />
      </div>
    {/each}
  </div>
</div>

{#if open}
  <Controls on:close={() => (open = false)} />
  <div class="overlay" />
  <div transition:fly={{ y: -50 }} class="resume">
    <svelte:component this={selectedTemplate} class="h-full" />
  </div>
{/if}
