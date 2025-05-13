<script lang="ts">
  const emojis = {
    apple: "🍎",
    banana: "🍌",
    carrot: "🥕",
    doughnut: "🍩",
    egg: "🥚",
  };

  // nama akan selalu di update jika props diubah
  let { name } = $props();

  // emojis nilainya fix atau konstan
  const emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
