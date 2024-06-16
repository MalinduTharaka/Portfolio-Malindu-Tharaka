 // Initialize EmailJS with your public API key
 emailjs.init('EltKC_joj7KDpy1bu');

 // Function to send email
 function sendEmail(e) {
     e.preventDefault(); // Prevent default form submission

     // Get form values
     var name = document.getElementById('name').value;
     var email = document.getElementById('email').value;
     var message = document.getElementById('message').value;

     // Send email
     emailjs.send('service_k4owx5a', 'template_vd78jbf', {
         from_name: name,
         from_email: email,
         message: message,
     }).then(function(response) {
         alert('Your message has been sent successfully!');
         document.getElementById('contactForm').reset(); // Reset form
     }, function(error) {
         console.log('FAILED...', error);
     });
 }

 // Attach submit event listener to the form
 document.getElementById('contactForm').addEventListener('submit', sendEmail);