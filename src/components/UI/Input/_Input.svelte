<script>
  export let type = 'text';
  export let value;
  export let placeholder = null;
  function handleInput(e) {
    value = e.target.value;
  }

  $: classes = `w-full rounded border border-gray-400 px-2 py-1`
</script>

{#if type === 'textarea'}
  <textarea class={classes} on:input={handleInput}>{value}</textarea>
{:else}
  <input class={classes} {type} {value} on:input={handleInput} {placeholder}/>
{/if}