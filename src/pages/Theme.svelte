<script>
  // import { user } from "../store/user";
  //  import { dictionary, locale, _ } from "svelte-i18n";
  import { Route } from "svelte-router-spa";
  import Config from "../components/Config/Config.svelte";
  import Controls from "../components/Controls.svelte";

  export let currentRoute;
  export let params;
  currentRoute;
  params;

  // $: locale.set($user.language || "en");
</script>


<div class="resume">
  <Controls />
  <Route />
</div>
