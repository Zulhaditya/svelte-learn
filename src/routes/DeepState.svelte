<script lang="ts">
  let angka = $state([1, 2, 3, 4]);
  let total = $derived(angka.reduce((t, n) => t + n, 0));

  function tambahAngka() {
    angka[angka.length] = angka.length + 1;
  }
</script>

<p>{angka.join(" + ")} = {total}</p>

<button onclick={tambahAngka}> Tambah angka </button>
