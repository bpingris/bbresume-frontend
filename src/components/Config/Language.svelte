<script>
  import FaLanguage from "svelte-icons/fa/FaLanguage.svelte";
  import { user } from "../../store/user";
  import { Modal, Button } from "../UI";

  let show = false;
  let btnClass = `w-16 h-16 p-4 hover:shadow hover:text-white transition-colors duration-100`;

  let locales = [
    { code: "fr", text: "Francais" },
    { code: "en", text: "English" }
  ];
</script>

<button
  title="Change the language"
  class="tile-btn bg-gray-500 hover:bg-gray-600"
  on:click={() => (show = true)}>
  <FaLanguage />
</button>

<Modal bind:show>
  <div class="bg-white rounded-lg shadow p-4">
    <div class="text-3xl mb-2 font-light">Change language</div>
    <div>
      <select bind:value={$user.language}>
        {#each locales as locale}
          <option value={locale.code}>{locale.text}</option>
        {/each}
      </select>
    </div>
    <Button class="block mx-auto mt-4" on:click={() => (show = false)}>Close</Button>
  </div>
</Modal>
