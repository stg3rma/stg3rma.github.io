
   $(document).ready(function(){
      console.log("Document loaded!"); //for debugging
              $('#page-setup').hide(); //start out hidden
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

   //show/hide


      $('a#showhidepagesetup').click(function() {
        $('#page-setup').toggle('slow', function(){
        });
    }); //end show/hide

    $('.color-choice').click(function() {
    
        // Find out what color was clicked
        var color_selection = $(this).attr('id');
        console.log("color selected is:" + color_selection); //for debugging
        // Set the page to be that color

 
       //$('html').css({'background', color_selection });
        if(color_selection == 'green'){
          console.log("inside green if");
          $('body').css({
            
         backgroundColor: "#7A7D45"
          }); //end css
        }
        if(color_selection == 'blue'){
          console.log("inside blue if");
          $('body').css({
           
         backgroundColor: "#A1AFAE"
          }); //end css
        }
        if(color_selection == 'tan'){
          console.log("inside tan if");
          $('body').css({
           
         backgroundColor: "#B99B64"
          }); //end css
        }
         if(color_selection == 'gray'){
          console.log("inside gray if");
          $('body').css({
            
         backgroundColor: "#D5D6DD"
          }); //end css
        }
                 if(color_selection == 'white'){
          console.log("inside white if");
          $('body').css({
            
         backgroundColor: "#FFF"
          }); //end css
        }
            
    });



    
   $("#fc").change(function() {
  
    $('.change-font').css("font-family", $(this).val());
    
    });
    $("p").change(function() {

        $('.change-font').css("font-size", $(this).val() + "px"); 
    });
    $("#fs").change(function() {

        $('.change-font').css("font-size", $(this).val() + "px"); 
    });
    $('.img-dimension').click(function() {
               
        $('#thumb-img').css("width", $(this).val() + "px"); 
       

    }); 
    //email message subscribe
    //regex from http://regexlib.com/Search.aspx?k=email&AspxAutoDetectCookieSupport=1
    $( "#email" ).blur(function() {
    
            var addr = $(this).val();
            var emailreg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/; 
            
            console.log("if value is" + emailreg.test(addr));

            if (!emailreg.test(addr)) {
               
               $('#emailmsg').replaceWith('<p><span class="label label-warning ">Please enter a valid email address</span></p>');
              console.log("Please enter a valid email address");
            }
            if(emailreg.test(addr)){
                 $('#emailmsg').replaceWith('<p></p>');
              console.log("valid email, thanks");
            }

     });//email field focus 
        var sub;
        $( "#subscribe" ).change(function() {
            sub = $(this).val();
            console.log("sub is: " + sub);
            if (sub == "yes") {
              $('#subscribe-label').replaceWith('<p><span class="label label-warning ">Thanks for subscribing!</span></p>');
              //  alert("Thanks for subscribing");
            }
             if (sub =="no") {
              $('#subscribe-label').replaceWith('<p><span class="label label-warning ">Thanks for subscribing!</span></p>');
              //  alert("Thanks for subscribing");
            }
          });//checkbox
             $( "#no-subscribe" ).change(function() {
            sub = $(this).val();
            console.log("sub is: " + sub);
            if (sub == "no") {
              $('#subscribe-label').replaceWith('<p>nbsp&;</p>');
              //alert("are you sure?");
            }            if (sub =="yes") {
              $('#subscribe-label').replaceWith('<p>nbsp&;</p>');
              //alert("are you sure?");
            }

     });//checkbox

  
   }); //end ready


