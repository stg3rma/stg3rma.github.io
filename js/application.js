
   $(document).ready(function(){
      console.log("Document loaded!"); //for debugging
      $('nav').fadeOut(2000).fadeIn(500); //chained functions
      $('footer').slideUp(2000).slideDown(1000);   
      $('#carousel-home').css({
	border: "1px solid red",
	fontSize: "24px"
      }); //end #menu css
      $('p:even').css({
	color: "white",
	backgroundColor: "green"
       }); //end p css
       $('footer ul li:last, nav ul li:first, aside ul li:last').fadeOut(500).fadeIn(1000);
  
   $('#btn-furniture').click(function(){
      console.log('The furniture button was clicked!');
      alert('Nice furniture!');
   });  //end furniture click
 
   //hover 2 parts: what happens when mouse is over and what happens when goes out  
   $('#btn-papercraft').hover(function(){
      console.log('The papercraft button was hovered over');
      $('#btn-papercraft').css({
         backgroundColor: 'green'
      }); //end css
   }, function(){
      console.log('The papercraft button was left behind');
      $('#btn-papercraft').css({
         backgroundColor: 'blue'
      }); //end css
   });  //end papercraft button
   $('#desk-closed-img').hover(function(){
   //on hover
      $('#desk-closed-img').attr({
         'src': 'images/desk_closed_150w.png',
         'class': 'img-responsive img-circle' //does not add to existing so reset everything associate with classes on the image
      }); //end attr
   }, // end mouse over
  function(){
   //off hover
      $('#desk-closed-img').attr({
         'src': 'images/desk_open_150w.png',
         'class': 'img-responsive' //does not add to existing so reset everything associate with classes on the image
      }); //end attr
   
   }); //end desk image hover

   }); //end ready
