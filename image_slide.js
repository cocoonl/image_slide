/*global $:true*/

var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n,n);
}

function showDivs(n,dir) {
  var i;
  var x = document.getElementsByClassName("image_slides");
  if (n > x.length) {slideIndex = 1}
  
  if (n < 1) {slideIndex = x.length};
  
  if(dir == 1){
      for (i = 0; i < x.length; i++) {
         $(".image_slides:eq("+i+")").hide();  
      }
      $(".image_slides").eq(slideIndex-1).show();
      
  }
  else{
      for (i = 0; i < x.length; i++) {
         $(".image_slides:eq("+i+")").hide();  
      }
      $(".image_slides").eq(slideIndex-1).show();
      
  }
  
}


function carousel() {
    var i;
    var x = document.getElementsByClassName("image_slides");
    for (i = 0; i < x.length; i++) {
      //x[i].style.display = "none";
      $(".image_slides:eq("+i+")").hide();
      
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    
    $(".image_slides").eq(slideIndex-1).show();
    // x[slideIndex-1].style.display = "block"; 
    //$(".image_slides:eq("+slideIndex-1+")").show('slide', { direction: 'left' });
    setTimeout(carousel, 10000); // Change image every 2 seconds
}