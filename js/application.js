
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
  
   //about page education tab under Harvard Extension
      $('#current').addClass( "text-uppercase" );

#collapseThree > div > div > table > tbody > tr:nth-child(1) > td:nth-child(1)

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
         'src': 'images/desk_open_150.fw.png',
         'class': 'media-object img-responsive img-circle' //does not add to existing so reset everything associate with classes on the image
      }); //end attr
   }, // end mouse over
  function(){
   //off hover
      $('#desk-closed-img').attr({
         'src': 'images/desk_closed_150w.png',
         'class': 'media-object img-responsive img-rounded' //does not add to existing so reset everything associate with classes on the image
      }); //end attr
   }); //end desk image hover

   //popover on hover on about page interests tab
   $(function (){ 
      $("#d3").popover({trigger: "hover",
      content: "D3!"});      
   }); 
      $(function (){ 
      $("#northren").popover({trigger: "hover",
      content: "Northern Renaissance"});      
   });  
      $(function (){ 
      $("#processing").popover({trigger: "hover",
      content: "processing"});      
   });  
      $(function (){ 
      $("#origami").popover({trigger: "hover",
      content: "origami"});      
   });  
      $(function (){ 
      $("#rhino").popover({trigger: "hover",
      content: "Rhino3d"});      
   }); //end popover


   //if else based on time of day
      $(function (){
       var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting ="Good evening";
    }

   });//end if/else
   }); //end ready


