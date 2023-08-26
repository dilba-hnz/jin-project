// ###################
//   form validation
// ###################
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        alert("اطلاعات شما با موفقیت ثبت شد.");
      }

      form.classList.add('was-validated')
    }, false)
  })
})()





// #############
//   countdown
// #############

// Set the date we're counting down to
var countDownDate = new Date("Aug 24, 2023 15:37:25").getTime();
        
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days < "10") { days = "0" + days; }
  if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }
  
  if (days >= 1) {
    document.getElementById("left_time").innerHTML = Num2persian(days)+' روز';
  } else {
    document.getElementById("left_time").innerHTML = Num2persian(hours)+ ' ساعت';
  }
  

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "فرصت تمام شد!";
  }
}, 1000);



