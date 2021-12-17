function myFunction() {
    var formDisplay
    var a,b,d,e,f
    a = document.getElementById("name1").value;
    b = document.getElementById("name2").value;
    d = document.getElementById("weddingDate").value;
    e = document.getElementById("location").value;
    f = document.getElementById("rsvp").value;
    document.getElementById("demoNames").innerText = a + " & " + b ;
    document.getElementById("demoDate").innerText = d  ;
    document.getElementById("demoLocation").innerText = e ;
    document.getElementById("demoRsvp").innerText = "RSVP to " + f ;
  }


  function myFunction2() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/drinks_new.jpg")';
  }

  function myFunction3() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/palm.jpg")';
  }

  function myFunction4() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/flamingo.jpg")';
  }


/* 
function changeFontPalm() {
    document.getElementById("demoNames").style.fontFamily = 'arial';
    document.getElementById("demoDate").style.fontFamily = 'arial';
    document.getElementById("demoLocation").style.fontFamily = 'arial';
    document.getElementById("demoRsvp").style.fontFamily = 'arial';
}

function changeFontFlamingo() {
  document.getElementById("demoNames").style.fontFamily = 'garamond';
  document.getElementById("demoDate").style.fontFamily = 'garamond';
  document.getElementById("demoLocation").style.fontFamily = 'garamond';
  document.getElementById("demoRsvp").style.fontFamily = 'garamond';
}
*/