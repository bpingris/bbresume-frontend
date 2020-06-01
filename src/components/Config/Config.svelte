<script>
  import Skills from "./Skills.svelte";
  import Basics from './Basics.svelte'
  import Hobbies from './Hobbies.svelte'
  import Formations from './Formations.svelte'
  import Experiences from './Experiences.svelte'

import { user } from "../../store/user";
  import { Modal, Input } from "../UI";
  export let show = true;

  let photo = null;
  let name = "Jon Doe";
</script>

<Modal bind:show>
  <div class="bg-white rounded shadow p-5">
    <Basics />
    <Skills />
    <Hobbies />
    <Formations />
    <Experiences />
    <button
      class="rounded bg-blue-600 text-white shadow px-4 py-2 mx-auto block"
      on:click={() => (show = false)}>
      Close
    </button>
  </div>
</Modal>
