<script>
  import Input2 from "./_Input.svelte";
  export let label = null;
  export let placeholder = null;
  export let value = "";
  export let type = "text";
  function handleInput(e) {
    value = e.target.value;
  }
</script>

{#if label}
  <label class="flex items-center">
    <span class="w-1/4">{label}:</span>
    <span class="w-3/4">
      <Input2 bind:value {type} {placeholder} />
    </span>
  </label>
{:else}
  <Input2 bind:value {type} {placeholder} />
{/if}
