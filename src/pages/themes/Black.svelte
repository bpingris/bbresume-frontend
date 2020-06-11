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
  .bg-color {
    background-color: #2d2d2d;
  }
  .text-dark {
    color: #2d2d2d;
  }
  .yellow {
    color: #fce19e;
  }
  .bg-yellow {
    background-color: #fce19e;
  }
  .oswald {
    font-family: "Oswald", sans-serif;
  }
  .text-white {
    color: #dfdfdf;
  }
</style>

<div bind:this={$content} class="h-full ">
  <div class="bg-color oswald px-5 h-full">
    <div class="pt-10 text-center uppercase text-5xl yellow">
      <span class="font-thin">{$user.firstname}</span>
      <span class="font-medium">{$user.lastname}</span>
    </div>
    <div class="w-full my-4" style="height: 4px; background-color: #242424" />
    <div class="flex">
      <div class="w-3/12 yellow uppercase text-3xl">Profile</div>
      <div class="w-9/12 text-white font-sans">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sint
        corrupti itaque exercitationem temporibus doloremque reiciendis ipsam
        excepturi similique labore quis soluta, aspernatur unde a! Quibusdam,
        saepe. Labore, laboriosam repellat!
      </div>
    </div>
    <div class="text-dark bg-yellow p-2 flex justify-around my-5">
      {#if contact.phone}
        <span>{contact.phone}</span>
      {/if}
      {#if contact.email}
        <span>{contact.email}</span>
      {/if}
      {#if contact.linkedin.alt}
        <span>{contact.linkedin.alt}</span>
      {/if}
    </div>
    <div class="yellow uppercase text-3xl">{$_('experiences')}</div>
    {#each experiences as e}
      <div class="my-2 font-sans text-xl text-white">
        <div>
          <span>{e.job}</span>
          <span class="font-black">/</span>
          {e.name} ({e.period})
        </div>
        <div class="font-thin">
          {#each e.description as d}
            <div>{d}</div>
          {/each}
        </div>
      </div>
    {/each}
    <div class="yellow uppercase text-3xl mt-5">{$_('formation')}</div>
    {#each formations as f}
      <div class="my-2 font-sans text-xl text-white">
        <div>
          <span>{f.diploma}</span>
          <span class="font-black">/</span>
          {f.name} ({f.period})
        </div>
        <div class="font-thin">{f.description}</div>
      </div>
    {/each}
    <div class="flex space-x-5">
      <div class="w-1/2">
        <div class="yellow uppercase text-3xl mt-5">{$_('skills')}</div>
        {#each skills as s}
          <div class="my-2 font-sans text-xl text-white">
            <span>{s}</span>
          </div>
        {/each}
      </div>
      <div class="w-1/2">
        <div class="yellow uppercase text-3xl mt-5">{$_('hobbies')}</div>
        {#each hobbies as h}
          <div class="my-2 font-sans text-xl text-white">
            <span>{h}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>

</div>
