<script>
  import axios from "axios";
  import { createEventDispatcher } from "svelte";
  import GoGear from "svelte-icons/go/GoGear.svelte";
  import FaFileExport from "svelte-icons/fa/FaFileExport.svelte";
  import FaCircleNotch from "svelte-icons/fa/FaCircleNotch.svelte";
  import Config from "./Config/Config.svelte";
  import Language from "./Config/Language.svelte";
  import { content } from "../store/content";
  import IoIosCloseCircle from "svelte-icons/io/IoIosCloseCircle.svelte";

  let show = false;
  let loading = false;
  const dispatch = createEventDispatcher();

  function openConfig() {
    show = true;
  }

  function save(response) {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "bbresume.pdf"); //or any other extension
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  async function download() {
    if (loading) return;
    loading = true;
    console.log(process.env.API_ENDPOINT)
    try {
      const svelteCSS = await axios.get("/build/bundle.css");
      const o = await axios.post(
        process.env.API_ENDPOINT,
        {
          content: $content.innerHTML,
          css: svelteCSS.data,
        },
        {
          headers: { Accept: "application/pdf" },
          responseType: "arraybuffer",
        }
      );
      save(o);
    } catch (error) {
      console.log(error)
      alert("Oopsi!");
    } finally {
      loading = false;
    }
  }

  let btnClass = `w-16 h-16 p-4 rounded hover:shadow hover:text-white transition-colors duration-100`;
</script>

<style>
  .spin {
    animation: spin infinite 2s;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  :global(.tile-btn) {
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    color: black;
    transition-duration: 0.1s;
    transition-property: background-color, border-color, color, fill, stroke;
  }
  :global(.tile-btn:hover) {
    --text-opacity: 1;
    color: rgba(255, 255, 255, var(--text-opacity));
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    color: white;
  }
</style>

<Config bind:show />

<div class="fixed z-10 bottom-0 right-0 flex flex-col mb-4 mr-4 z-40">
  <button
    title="Close the resume"
    class="tile-btn bg-red-500 hover:bg-red-600"
    on:click={() => dispatch('close')}>
    <IoIosCloseCircle />
  </button>
  <Language />
  <button
    title="Export to PDF"
    class="tile-btn bg-blue-400 hover:bg-blue-500"
    on:click={download}>
    {#if loading}
      <div class="spin">
        <FaCircleNotch />
      </div>
    {:else}
      <FaFileExport />
    {/if}
  </button>
  <button
    title="Open configuration"
    class="tile-btn bg-green-400 hover:bg-green-500"
    on:click={openConfig}>
    <GoGear />
  </button>
</div>
