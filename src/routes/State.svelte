<script lang="ts">
  let hitung = $state(0);

  function penjumlahan() {
    hitung += 1;
  }
</script>

<button onclick={penjumlahan}>
  Total klik: {hitung}
  {hitung % 2 == 0 ? "genap" : "ganjil"}
</button>
