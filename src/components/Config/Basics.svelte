<script>
  import { Input, Expand } from "../UI";
  import { user } from "../../store/user";
  let photo;

  function readURL(files) {
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $user.photo = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    }
  }

  $: readURL(photo);
</script>

<Expand title="Basic:">
  <div>
    Photo:
    <input type="file" bind:files={photo} />
  </div>
  <Input label="Firstname" bind:value={$user.firstname} />
  <Input label="Lastname" bind:value={$user.lastname} />
  <Input label="Position" bind:value={$user.position} />
  <Input label="Description" type="textarea" bind:value={$user.description} />

  <Input label="Email" bind:value={$user.contact.email} />
  <Input label="Phone" bind:value={$user.contact.phone} />

  <Input label="Github alt" bind:value={$user.contact.github.alt} />
  <Input label="Github link" bind:value={$user.contact.github.link} />

  <Input label="Linkedin alt" bind:value={$user.contact.linkedin.alt} />
  <Input label="Linkedin link" bind:value={$user.contact.linkedin.link} />

</Expand>
