<script lang="ts">
  let yes = $state(false);
</script>

<label for="checkbox">
  <input type="checkbox" bind:checked={yes} />
  Ya! saya menerima segala konsekuensi-nya.
</label>

{#if yes}
  <p>Terimakasih. anda akan segara saya hubungi</p>
{:else}
  <p>Kamu harus setuju terhadap perjanjian ini.</p>
{/if}

<button disabled={!yes}>Setuju</button>
