function nameFunction() {
    var formDisplay
    var a,b
    
    a = document.getElementById("name1").value;
    b = document.getElementById("name2").value;
    
    document.getElementById("demoNames").innerText = a + " & " + b ;

}

function dateFunction() {

  let weddingDate = document.getElementById("weddingDate").value;

  const d = new Date(weddingDate);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);


  let newDateVal = `${da} ${mo} ${ye}`;

  document.getElementById("demoDate").innerHTML = "on " + newDateVal;
    
}

function locationFunction() {
  var formDisplay
  var e

  e = document.getElementById("location").value;

  document.getElementById("demoLocation").innerText = e ;
    
}


function rsvpFunction() {
  var formDisplay
  var f

  f = document.getElementById("rsvp").value;

  document.getElementById("demoRsvp").innerText = "RSVP to " + f ;
    
}

    


  /*  if(typeof d !== "undefined") {
        var date_split_array = d.split("-");
        document.getElementById("demoDate").innerText = date_split_array[2] + '-' + date_split_array[1] + '-' + date_split_array[0];
      }
*/


  function myFunction2() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/drinks_new.jpg")';
  }

  function myFunction3() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/palm.jpg")';
  }

  function myFunction4() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/flamingo.jpg")';
  }



  function changeDrinkFont() {

    let classNames = document.getElementsByClassName("flex-item-left");  
  
    for (let i = 0; i < classNames.length; i++) {
      classNames[i].style.fontFamily= "cursive";
      classNames[i].style.fontSize= "28px";
    }
  }


  function changePalmFont() {

    let classNames = document.getElementsByClassName("flex-item-left");  
  
    for (let i = 0; i < classNames.length; i++) {
      classNames[i].style.fontFamily= "arial";
      classNames[i].style.fontSize= "32px";
    }
  }


  function changeFlamingoFont() {

    let classNames = document.getElementsByClassName("flex-item-left");  
  
    for (let i = 0; i < classNames.length; i++) {
      classNames[i].style.fontFamily= "garamond";
      classNames[i].style.fontSize= "42px";
    }
  }



  
 /*  

   d = document.getElementById("weddingDate").value;

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

 /*document.getElementById("demoDate").innerText = date_split_array[2] + '-' + date_split_array[1] + '-' + date_split_array[0];*/
