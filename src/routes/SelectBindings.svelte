<script lang="ts">
  let pertanyaan = $state([
    {
      id: 1,
      text: "Siapa pacar pertama kamu?",
    },
    {
      id: 2,
      text: "Siapa mantan pertama kamu?",
    },
    {
      id: 3,
      text: "Dimana pertama kali kamu ciuman?",
    },
  ]);

  let selected = $state();
  let answer = $state("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(
      `pertanyaan ${selected.id} (${selected.text}) jawabannya "${answer}"`,
    );
  }
</script>

<h2>Pertanyaan Private</h2>

<form onsubmit={handleSubmit}>
  <select bind:value={selected} onchange={() => (answer = "")}>
    {#each pertanyaan as listPertanyaan}
      <option value={listPertanyaan}>
        {listPertanyaan.text}
      </option>
    {/each}
  </select>

  <input bind:value={answer} />

  <button disabled={!answer} type="submit">Submit</button>
</form>

<p>Pilih pertanyaan {selected ? selected.id : "[tunggu...]"}</p>
