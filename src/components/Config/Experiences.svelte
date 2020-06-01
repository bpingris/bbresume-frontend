<script>
  import { user } from "../../store/user";
  import { Input } from "../UI";
  let count = $user.experiences ? $user.experiences.length : 0;

  function addExperience() {
    const f = {
      job: "Job",
      name: "Name",
      period: "02/2019 - 05/2019",
      description: ["Description"]
    };
    if (Array.isArray($user.experiences)) {
      $user.experiences = [...$user.experiences, f];
    } else {
      $user.experiences = [f];
    }
    count += 1;
  }

  function removeExperience(i) {
    $user.experiences.splice(i, 1);
    $user.experiences = $user.experiences;
    count -= 1;
  }

  function addDesc(i) {
    $user.experiences[i].description = [
      ...$user.experiences[i].description,
      "New description"
    ];
  }

  function removeDesc(i, j) {
    console.log(i,j);
    
    $user.experiences[i].description.splice(j,1)
    $user.experiences[i].description = $user.experiences[i].description
  }
</script>

<div class="text-3xl font-thin mb-1 mt-5">Experiences:</div>
{#each Array(count) as _, i}
  <div class="flex items-center justify-center p-1 border border-gray-300">
    <div>
      <Input bind:value={$user.experiences[i].name} />
      <Input bind:value={$user.experiences[i].job} />
      <Input bind:value={$user.experiences[i].period} />
      {#each $user.experiences[i].description as d, j}
      <div class="flex">
        <Input type="textarea" bind:value={d} />
        <button class="bg-red-600 p-1" on:click={() => removeDesc(i,j)}>X</button>
      </div>
      {/each}
      <button on:click={() => addDesc(i)}>Add</button>
    </div>
    <button
      on:click={() => removeExperience(i)}
      class="cursor-pointer text-center rounded ml-1 text-xs h-5 w-5 bg-red-600
      text-white">
      X
    </button>
  </div>
{/each}

<button
  class="my-3 mx-auto bg-green-900 rounded block py-1 px-2 text-white"
  on:click={addExperience}>
  Add an experience
</button>
