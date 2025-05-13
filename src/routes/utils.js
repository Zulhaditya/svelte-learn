export async function roll() {
  // generate random number dari 1 - 6
  // (simulasikan delay)

  return new Promise((fulfil, reject) => {
    setTimeout(() => {
      // simulasi jaringan tidak stabil
      if (Math.random() < 0.3) {
        reject(new Error('Request gagal!'));
        return;
      }

      fulfil(Math.ceil(Math.random() * 6));
    }, 1000);
  });
}
