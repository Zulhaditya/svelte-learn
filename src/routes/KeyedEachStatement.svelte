<script lang="ts">
  import Thing from "./Thing.svelte";

  let things = $state([
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "carrot" },
    { id: 4, name: "doughnut" },
    { id: 5, name: "egg" },
  ]);
</script>

<br />
<button onclick={() => things.shift()}> Hapus emoji pertama </button>

{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}
