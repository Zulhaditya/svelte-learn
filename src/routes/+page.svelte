<!-- script tag untuk javascript/typescript-->
<script lang="ts">
  import Counter from "./Counter.svelte";
  import DeepState from "./DeepState.svelte";
  import Effects from "./Effects.svelte";
  import Nested from "./Nested.svelte";
  import State from "./State.svelte";

  let name = "Svelte";
  // let src = "/static/favicon.png";
</script>

<!-- gunakan {} untuk menampilkan variabel dan menjalankan javascript -->
<div>
  <h1>Belajar {name.toUpperCase()}!</h1>
  <p>
    Kunjungi <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> untuk
    lihat dokumentasi lengkapnya
  </p>
  <!-- <img {src} alt={name} /> -->
</div>

<State />
<DeepState />
<Effects />
<Counter />
<Nested jawaban={"secret"} />
<Nested />

<!-- style tag digunakan untuk styling dengan css atau tailwind -->
<style>
  p {
    color: goldenrod;
    font-family: "Comic Sans MS", cursive;
    font-size: 2em;
  }
</style>
