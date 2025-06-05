const scriptURL = 'https://script.google.com/macros/s/AKfycbw5yjrqcs9cQJFL-9lYX9u6QrtjOTL6MikdGTrvbeZub7qWwGbuD-y6KrfihS_lbnnB/exec';
const form = document.forms['submit-to-google-sheet'];
const status = document.getElementById('form-status');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            status.innerHTML = 'Message sent successfully!';
            form.reset();
        })
        .catch(error => {
            status.innerHTML = 'Something went wrong!';
            console.error('Error!', error.message);
        });
});