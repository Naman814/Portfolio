
$(document).ready(function(){
    $('.slider').slick({
      arrows:false,
      dots:true,
      appendDots:('.slider-dots'),
      dotsClass:'dots'
    });

    let menuIcon= document.querySelector('.menu-icon');
    let closeButton= document.querySelector('.close-button');
    let mobileNav= document.querySelector('.mobile-nav');

    menuIcon.addEventListener('click' , function(){
      mobileNav.classList.add('open');
    })

    closeButton.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    })

  });

  // setting email 

  function sendMail(params){
    alert("Form submitted Successfully !");
    var tempParams ={
      from_name : document.getElementById("from_name").value,
      message: document.getElementById("msg").value,
      from_email: document.getElementById("from_email").value,
      subject:document.getElementById("subject").value
    };

    emailjs.send('service_mrwpknz','template_7xr8k5v',tempParams)
    .then(function(res){
      console.log("successful",res.status);
    })
  }
