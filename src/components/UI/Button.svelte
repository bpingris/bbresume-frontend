<script>
  let className = "";

  export { className as class };
</script>

<button
  class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-100 {className}"
  on:click>
  <slot />
</button>
