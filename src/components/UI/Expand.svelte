<script>
  export let title = "";
  let expanded = false;
</script>

<div class="flex cursor-pointer p-2 bg-gray-100 hover:bg-gray-300 justify-between" on:click={() => (expanded = !expanded)}>
  <span class="text-3xl">{title}</span>
  <svg class="w-10 transform" class:rotate-180={expanded} fill="currentColor" viewBox="0 0 20 20">
    <path
      fill-rule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414
      1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clip-rule="evenodd" />
  </svg>
</div>
{#if expanded}
  <slot />
{/if}
