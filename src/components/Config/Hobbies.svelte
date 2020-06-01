<script>
  import { user } from "../../store/user";
  import { Input } from "../UI";
  let count = $user.hobbies ? $user.hobbies.length : 0;

  function addHobby() {
    if (Array.isArray($user.hobbies)) {
      $user.hobbies = [...$user.hobbies, "New hobby"];
    } else {
      $user.hobbies = ["New hobby"];
    }
    count += 1;
  }

  function removeHobby(i) {
    $user.hobbies.splice(i, 1);
    $user.hobbies = $user.hobbies;
    count -= 1;
  }
</script>

<div class="text-3xl font-thin mb-1 mt-5">Hobbies:</div>

{#each Array(count) as _, i}
  <div class="flex items-center justify-center">
    <Input bind:value={$user.hobbies[i]} />
    <button
      on:click={() => removeHobby(i)}
      class="cursor-pointer text-center rounded ml-1 text-xs h-5 w-5 bg-red-600
      text-white">
      X
    </button>
  </div>
{/each}
<button class="my-3 mx-auto bg-green-900 rounded block py-1 px-2 text-white" on:click={addHobby}>Add a hobby</button>
