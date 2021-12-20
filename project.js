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

  document.getElementById("demoRsvp").innerText = "RSVP: " + f ;
    
}

    


  /*  if(typeof d !== "undefined") {
        var date_split_array = d.split("-");
        document.getElementById("demoDate").innerText = date_split_array[2] + '-' + date_split_array[1] + '-' + date_split_array[0];
      }
*/


  function drinkImage() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/drinks.jpg")';
  }

  function palmImage() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/Couple.jpg")';
  }

  function flamingoImage() {
    document.getElementById("flex-item-left").style.backgroundImage = 'url("images/flamingopink.jpg")';
  }



  function changeDrinkFont() {

    let classNames = document.getElementsByClassName("flex-item-left");  
  
    for (let i = 0; i < classNames.length; i++) {
      classNames[i].style.fontFamily= "Architects Daughter";
      classNames[i].style.fontSize= "40px";
      classNames[i].style.color= "black";
    }
  }


  function changePalmFont() {

    let classNames = document.getElementsByClassName("flex-item-left");  
  
    for (let i = 0; i < classNames.length; i++) {
      classNames[i].style.fontFamily= "raleway";
      classNames[i].style.fontSize= "34px";
      classNames[i].style.color= "yellow";
    }
  }


  function changeFlamingoFont() {

    let classNames = document.getElementsByClassName("flex-item-left");  
  
    for (let i = 0; i < classNames.length; i++) {
      classNames[i].style.fontFamily= "Comfortaa";
      classNames[i].style.fontSize= "38px";
      classNames[i].style.color= "pink";
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
