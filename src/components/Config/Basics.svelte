<script>
  import { Input } from "../UI";
  import { user } from "../../store/user";
  let photo;

  function readURL(files) {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        $user.photo = e.target.result
      };
      reader.readAsDataURL(files[0]);
    }
  }

  $: readURL(photo)
</script>

<div class="text-3xl mb-1 font-thin">Basic:</div>
<div>
  Photo:
  <input type="file" bind:files={photo} />
</div>
<Input label="Name" bind:value={$user.name} />
<Input label="Position" bind:value={$user.position} />
<Input label="Description" type="textarea" bind:value={$user.description} />

<Input label="Email" bind:value={$user.contact.email} />
<Input label="Phone" bind:value={$user.contact.phone} />

<Input label="Github alt" bind:value={$user.contact.github.alt} />
<Input label="Github link" bind:value={$user.contact.github.link} />

<Input label="Linkedin alt" bind:value={$user.contact.linkedin.alt} />
<Input label="Linkedin link" bind:value={$user.contact.linkedin.link} />
