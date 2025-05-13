<script lang="ts">
  const colors = ["red", "yellow", "green", "yellow"];
  let selected = $state(colors[0]);
</script>

{#if selected == "red"}
  <h1>STOP!</h1>
{:else if selected == "yellow"}
  <h1>WARNING</h1>
{:else}
  <h1 style="color: {selected}">GO</h1>
{/if}

<div>
  <button
    style="background: red"
    aria-label="red"
    aria-current={selected === "red"}
    onclick={() => (selected = "red")}
  >
  </button>

  <button
    style="background: yellow"
    aria-label="yellow"
    aria-current={selected === "yellow"}
    onclick={() => (selected = "yellow")}
  >
  </button>

  <button
    style="background: green"
    aria-label="green"
    aria-current={selected === "green"}
    onclick={() => (selected = "green")}
  >
  </button>
</div>

<style>
  h1 {
    font-size: 2rem;
    font-weight: 700;
    transition: color 0.2s;
  }

  div {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    max-width: 400px;
  }

  button {
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--color, #fff);
    transform: translate(-2px, -2px);
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2));
    transition: all 0.1s;
    color: black;
    font-weight: 700;
    font-size: 2rem;
  }

  button[aria-current="true"] {
    transform: none;
    filter: none;
    box-shadow: inset 3px 3px 4px rgba(0, 0, 0, 0.2);
  }
</style>
