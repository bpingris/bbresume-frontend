<script>
  import { user } from "../../store/user";
  import { Input, Expand } from "../UI";
  let count = $user.formations ? $user.formations.length : 0;

  function addFormation() {
    const f = {
      diploma: "Diploma",
      name: "Name",
      period: "02/2019 - 05/2019",
      description: "Description",
    };
    if (Array.isArray($user.formations)) {
      $user.formations = [...$user.formations, f];
    } else {
      $user.formations = [f];
    }
    count += 1;
  }

  function removeFormation(i) {
    $user.formations.splice(i, 1);
    $user.formations = $user.formations;
    count -= 1;
  }
</script>

<Expand title="Formations">
  {#each Array(count) as _, i}
    <div class="flex items-center justify-center p-1 border border-gray-300">
      <div>
        <Input bind:value={$user.formations[i].diploma} />
        <Input bind:value={$user.formations[i].name} />
        <Input bind:value={$user.formations[i].description} />
        <Input bind:value={$user.formations[i].period} />
      </div>
      <button
        on:click={() => removeFormation(i)}
        class="cursor-pointer text-center rounded ml-1 text-xs h-5 w-5
        bg-red-600 text-white">
        X
      </button>
    </div>
  {/each}

  <button
    class="my-3 mx-auto bg-green-900 rounded block py-1 px-2 text-white"
    on:click={addFormation}>
    Add a formation
  </button>

</Expand>
