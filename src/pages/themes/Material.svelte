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
.roboto {
  font-family: "Roboto", sans-serif;
}
</style>

<div bind:this={$content} class="h-full roboto">
  <div class="bg-gray-300 flex h-full">
    {#if user}
      <section class="w-1/3 bg-gray-900 h-full shadow-lg">
        <div class="py-8">
          <img
            src={$user.photo}
            class="rounded-full w-40 h-40 mx-auto border-2 border-white"
            alt="" />
        </div>
        <div class="mb-4">
          <div
            class="text-white text-xl font-light uppercase text-right pr-5 mt-5
            w-full text-gray-300">
            {$_('contact')}
          </div>
          <div class="w-4/5 h-1 bg-gray-300 ml-auto" />
        </div>
        <div class="ml-5">
          <Contact name="email" />
          <Contact name="phone" />
          <Contact name="github" />
          <Contact name="linkedin" />
        </div>
        <div class="mb-4">
          <div
            class="text-white text-xl font-light uppercase text-right pr-5 mt-5
            w-full text-gray-300">
            {$_('skills')}
          </div>
          <div class="w-4/5 h-1 bg-gray-300 ml-auto" />
        </div>
        <div class="capitalize text-gray-300 font-light text-lg ml-5 ">
          {#each skills as s}
            <div class="flex items-center my-2">
              <div>{s}</div>
              <div class="w-full ml-10 bg-gray-700" style="height: 1px;" />
            </div>
          {/each}
        </div>

        <div class="mb-4">
          <div
            class="text-white text-xl font-light uppercase text-right pr-5 mt-5
            w-full text-gray-300">
            {$_('hobbies')}
          </div>
          <div class="w-4/5 h-1 bg-gray-300 ml-auto" />
        </div>
        <div class="capitalize ml-5 text-lg font-light text-gray-300">
          {#each hobbies as h}
            <div class="my-2">{h}</div>
          {/each}
        </div>

      </section>
      <section class="w-2/3 text-gray-900">
        {#if $user.name}
          <p class="text-5xl text-center mt-6 font-thin">{$user.name}</p>
        {/if}
        {#if $user.position}
          <p class="text-center font-light text-2xl mb-4">{$user.position}</p>
        {/if}
        {#if $user.description}
          <p class="text-justify px-10 text-lg">{$user.description}</p>
        {/if}
        <div class="mb-4 px-4">
          <div class="text-3xl font-light uppercase pr-5 mt-5 w-full">
            {$_('experiences')}
          </div>
          <div>
            {#each experiences as e}
              <div class="w-full p-8 bg-white rounded shadow my-2">
                <div>
                  <span>{e.job}</span>
                  | {e.name}
                </div>
                <div class="text-gray-700 text-sm">{e.period}</div>
                <div>
                  {#each e.description as d}
                    <div>{d}</div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
          {#if formations}
            <div class="text-3xl font-light uppercase pr-5 mt-5 w-full">
              {$_('formation')}
            </div>
            <div>
              {#each formations as f}
                <div class="w-full p-8 bg-white rounded shadow my-2">
                  <div>{f.diploma}</div>
                  <div>{f.period} - {f.name}</div>
                  <div>{f.description}</div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      </section>
    {/if}
  </div>
</div>
