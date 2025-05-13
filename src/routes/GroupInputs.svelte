<script lang="ts">
  let cups = $state(1);
  let rasa = $state([]);

  const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });
</script>

<h2>Ukuran</h2>

{#each [1, 2, 3] as number}
  <label>
    <input type="radio" name="cups" value={number} />
    {number}
    {number === 1 ? "cup" : "cups"}
  </label>
{/each}

<h2>Rasa</h2>

<select multiple bind:value={rasa}>
  {#each ["taro", "cokelat", "durian", "strawberry"] as listRasa}
    <option>{listRasa}</option>
  {/each}
</select>

{#if rasa.length === 0}
  <p>Pilih setidaknya 1 varian rasa</p>
{:else if rasa.length > cups}
  <p>Tidak bisa pesan rasa yang lebih bro!</p>
{:else}
  <p>
    Kamu pesan {cups}
    {cups === 1 ? "cup" : "cups"}
    {formatter.format(rasa)}
  </p>
{/if}
