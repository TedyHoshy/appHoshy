const btn = document.getElementById('btn');
const nameInput = document.getElementById('name')
const msg = document.getElementById('msg')
btn.addEventListener('click', async () => {
    const name = nameInput.Value;
    const res = await fetch('http://localhost:30007user', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ name })
    });
    const data = await res.json();
    msg.textContent = data.message;
});