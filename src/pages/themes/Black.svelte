<script>
  import { _ } from "svelte-i18n";
  import { user } from "../../store/user";
  import { content } from "../../store/content";
  import Contact from "../../components/material/Contact.svelte";

  $: contact = $user.contact;
  $: skills = $user.skills;
  $: hobbies = $user.hobbies;
  $: experiences = $user.experiences;
  $: formations = $user.formations;
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");
  .nunito {
    font-family: "Nunito", sans-serif;
  }

  .bg-blue-black {
    background-color: #010101;
  }
</style>

<div bind:this={$content} class="h-full nunito">
  <div class="h-full text-white bg-blue-black flex">
    <div class="w-1/3">
      <div class="text-right text-xl mt-10 font-light pr-4">{$user.position}</div>
    </div>
    <div class="w-2/3">
      <div
        class="text-6xl mt-10"
        style="word-spacing: 100vw; letter-spacing: 2px; line-height:1em">
        {$user.name}
      </div>
      <div class="bg-white w-11/12 my-4" style="height: 3px;" />
    </div>
  </div>
</div>
