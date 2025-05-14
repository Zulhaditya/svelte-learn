<script lang="ts">
  import { fade, fly } from "svelte/transition";

  let visible = $state(true);
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p transition:fade>Fade in and out</p>
  <p transition:fly={{ y: 200, duration: 2000 }}>Fly in and out</p>
  <p in:fly={{ y: 200, duration: 2000 }} out:fade>Gabungan</p>
{/if}
