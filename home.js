// prevent "Confirm Form Resubmission" dialog box 
if ( window.history.replaceState ) {
window.history.replaceState( null, null, window.location.href );
  }
///////////////////////////////////////////////////////



// Disable button whenever a text field is empty dynamically 
function textinput() {
    if(document.getElementById("buzz_post").value==="") { 
           document.getElementById('submit_buzz_button').disabled = true; 
       } else { 
           document.getElementById('submit_buzz_button').disabled = false;
       }
    }
////////////////////////////////////////////////////////////////////

// output show or image 
var loadFile = function(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
      URL.revokeObjectURL(output.src) // free memory
    }

    var fileName = document.getElementById("file-input").value;
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
        //TO DO
    }else{
        alert("Only jpg/jpeg and png files are allowed!");
    }   
}


  



