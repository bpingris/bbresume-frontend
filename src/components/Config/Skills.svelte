<script>
  import { user } from "../../store/user";
  import { Input } from "../UI";
  let count = $user.skills.length;

  function addSkill() {
    if (Array.isArray($user.skills)) {
      $user.skills = [...$user.skills, "New skill"];
    } else {
      $user.skills = ["New skill"];
    }
    count += 1;
  }

  function removeSkill(i) {
    $user.skills.splice(i, 1);
    $user.skills = $user.skills;
    count -= 1;
  }
</script>

<div class="text-3xl font-thin mb-1 mt-5">Skills:</div>

{#each Array(count) as _, i}
  <div class="flex items-center justify-center">
    <Input bind:value={$user.skills[i]} />
    <button
      on:click={() => removeSkill(i)}
      class="cursor-pointer text-center rounded ml-1 text-xs h-5 w-5 bg-red-600
      text-white">
      X
    </button>
  </div>
{/each}
<button
  class="my-3 mx-auto bg-green-900 rounded block py-1 px-2 text-white"
  on:click={addSkill}>
  Add a skill
</button>
