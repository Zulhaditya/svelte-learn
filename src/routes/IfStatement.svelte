<script lang="ts">
  let hitung = $state(0);

  function penjumlahan() {
    hitung += 1;
  }
</script>

<button onclick={penjumlahan}>
  Sudah di klik-{hitung}
</button>

{#if hitung > 10}
  <p>{hitung} lebih besar dari 10.</p>
{:else if hitung < 5}
  <p>{hitung} kurang dari 5.</p>
{:else}
  <p>{hitung} diantara 5 dan 10.</p>
{/if}
