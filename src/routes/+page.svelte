<!-- script tag untuk javascript/typescript-->
<script lang="ts">
  import DomEvents from "./DOMEvents.svelte";
  import AwaitBlock from "./AwaitBlock.svelte";
  import Capturing from "./Capturing.svelte";
  import Counter from "./Counter.svelte";
  import DeepState from "./DeepState.svelte";
  import EachStatement from "./EachStatement.svelte";
  import Effects from "./Effects.svelte";
  import IfStatement from "./IfStatement.svelte";
  import KeyedEachStatement from "./KeyedEachStatement.svelte";
  import Nested from "./Nested.svelte";
  import State from "./State.svelte";
  import ComponentEvents from "./ComponentEvents.svelte";
  import NumericInputs from "./NumericInputs.svelte";
  import CheckboxInputs from "./CheckboxInputs.svelte";
  import SelectBindings from "./SelectBindings.svelte";
  import GroupInputs from "./GroupInputs.svelte";
  import TextAreaInputs from "./TextAreaInputs.svelte";
  import Transition from "./Transition.svelte";

  let name = "Svelte";
  // let src = "/static/favicon.png";
</script>

<!-- gunakan {} untuk menampilkan variabel dan menjalankan javascript -->
<div>
  <h1>Basic {name}</h1>
  <p>
    Kunjungi <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> untuk
    lihat dokumentasi lengkapnya
  </p>

  <!-- <img {src} alt={name} /> -->
  <!-- <DomEvents /> -->
  <State />
  <DeepState />
  <Effects />
  <Counter />
  <Nested jawaban={"secret"} />
  <Nested />
  <IfStatement />
  <EachStatement />
  <KeyedEachStatement />
  <AwaitBlock />
  <Capturing />
  <ComponentEvents />
  <NumericInputs />
  <CheckboxInputs />
  <SelectBindings />
  <GroupInputs />
  <TextAreaInputs />
  <Transition />
</div>

<!-- style tag digunakan untuk styling dengan css atau tailwind -->
<style>
  div {
    max-width: fit-content;
    margin-inline: auto;
  }
  p {
    color: gray;
  }
</style>
