<script lang="ts">
  import { roll } from "./utils";

  let promise = $state(roll());
</script>

<button onclick={() => (promise = roll())}> roll dadu </button>

{#await promise}
  <p>...loading</p>
{:then number}
  <p>kamu mendapatkan angka {number}!</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
