function validation(){
    var username=document.getElementById("uname").value;
    var password=document.getElementById("pswd").value;
    if((username=="admin" &&password=="1234")==true)
        {
        
            setTimeout(() => { 
                var url = window.location.host+'list.html'    ;
                console.log('http://'+window.location.host+'list.html' );

                // window.location.href= 'http://'+window.location.host+'/list.html' ;  
                
                document.location.href = 'list.html'
                
                return false;
                
            }, 300);        
        }           
    
    else{
        alert("Wrong Credentials..!!");
        
    }
 }
//  function callback(){
//     var url = window.location.host+'/index.html'    ;
//     console.log('http://'+window.location.host+'/index.html' );

//     window.location.href= 'http://'+window.location.host+'/index.html' ;   
//     return false;
//  }



// document.addEventListener("DOMContentLoaded", function (event) {
//    console.log("hello")
//     var checkboxes = document.querySelectorAll("input[type=checkbox]");

//     checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener('change', function(eve) {console.table(eve)})
// })});



// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );
  

// function sucess(){
//     alert("fine");
// }