<script lang="ts">
  let m = $state({ x: 0, y: 0 });
  function onpointermove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<div {onpointermove}>
  Pointer berada di {Math.round(m.x)} x {Math.round(m.y)}
</div>

<style>
  div {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
</style>
