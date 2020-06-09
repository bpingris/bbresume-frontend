<script>
  import { onMount } from "svelte";
  import { user } from "../../store/user";
  import IoLogoGithub from "svelte-icons/io/IoLogoGithub.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import IoMdMail from "svelte-icons/io/IoMdMail.svelte";
  import FaPhoneAlt from "svelte-icons/fa/FaPhoneAlt.svelte";

  export let name;

  function isURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return pattern.test(str);
  }

  $: icon = {
    github: IoLogoGithub,
    linkedin: FaLinkedin,
    email: IoMdMail,
    phone: FaPhoneAlt
  }[name];

  $: contact = $user.contact[name];
</script>

{#if contact}
  <div class="flex text-gray-300 p-2">
    <div class="w-6 h-6 block">
      <svelte:component this={icon} />
    </div>

    {#if contact.alt}
      <a class="ml-2" href={contact.link}>{contact.alt}</a>
    {:else}
      <div class="ml-2">{contact}</div>
    {/if}
  </div>
{/if}
