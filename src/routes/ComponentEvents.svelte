<script lang="ts">
  import Stepper from "./Stepper.svelte";

  let value = $state(0);
</script>

<p>Nilai angka sekarang: {value}</p>

<Stepper increment={() => (value += 1)} decrement={() => (value -= 1)} />
