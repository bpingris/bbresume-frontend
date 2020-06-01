<script>
  import Portal from "svelte-portal";
  import { fade, fly } from "svelte/transition";
  export let show = false;

  function handleBgClick() {
    show = false;
  }
</script>

<style>
  .modal {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #00000033;
    z-index: 100;
  }
  .content {
    position: relative;
    z-index: 101;
    max-height: 100vh;
    overflow-y: auto;
  }
</style>

{#if show}
  <Portal target={document.body}>
    <div transition:fade={{ duration: 150 }} class="modal">
      <div class="background" on:click={handleBgClick} />
      <div transition:fly={{ y: 50 }} class="content">
        <slot />
      </div>
    </div>
  </Portal>
{/if}
