document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            alert('Message sent!');
        }, function(error) {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});
