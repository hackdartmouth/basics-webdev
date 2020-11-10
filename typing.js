document.addEventListener('DOMContentLoaded', async () => {
  const text = 'Hi there, I\'m Jai!';
  let i = 0;

  while (true) {
    document.getElementById('title').innerText = `${text.substring(0, i)}_`;
    i++;

    let delay;
    if (i === text.length + 1) {
      delay = 1000;
      i = 0;
    } else delay = 100;

    await new Promise((resolve) => setTimeout(() => resolve(), delay));
  }
});