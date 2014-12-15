
   $(document).ready(function(){
$('#banner_home').removeClass().addClass('papercraft'); 
//assignment 3 start
 $('#banner').bind('swiperight', function(event) {
    $('#banner_home').removeClass().addClass('painting');           
 });
 $('#banner').bind('taphold', function(event) {
      $('#banner_home').removeClass().addClass('papercraft');         
 });
 $('#banner').bind('swipeleft', function(event) {
     $('#banner_home').removeClass().addClass('furniture');
 });
 $( window ).on( 'orientationchange', function() {
  if(window.orientation == 0) {
       $('#banner_home').removeClass().addClass('puppy');
  } else {
        $('#banner_home').removeClass().addClass('three');
  }
  }); //taphold swiperight
//assignment 3 end

      console.log("Document loaded!"); //for debugging
      $('#page-setup').hide(); //start out hidden
      $('nav').fadeOut(1000).fadeIn(500); //chained functions
      
      $('#carousel-home').css({
	border: "1px solid red",
	fontSize: "24px"
      }); //end #menu css
      $('p:even').css({
	 fontWeight: "800"
	//backgroundColor: "green"
       }); //end p css
       $('footer ul li:last, nav ul li:first, aside ul li:last').fadeOut(500).fadeIn(1000);
  
   //about page education tab under Harvard Extension
      $('#current').addClass( "text-uppercase" );

   $('#btn-furniture').click(function(){
      console.log('The furniture button was clicked!');
      //alert('Nice furniture!');
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
         backgroundColor: '#5bc0de',
         borderColor: '#46b8da'
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
         'class': 'media-object img-responsive img-rounded' 
      }); //end attr
   }); //end desk image hover

 $('#table-img').hover(function(){
   //on hover
      $('#table-img').attr({
         'src': 'images/demilune_table_150w.png',
         'class': 'media-object img-responsive img-circle' 
      }); //end attr
   }, // end mouse over
  function(){
   //off hover images/demilune_table_150w.png
      $('#table-img').attr({
         'src': 'images/demilune_table_150w.png',
         'class': 'media-object img-responsive img-rounded' 
      }); //end attr
   }); //end desk image hover

  $('#armchair-img').hover(function(){
   //on hover
      $('#armchair-img').attr({
         'src': 'images/armchair_150w.png',
         'class': 'media-object img-responsive img-circle' //does not add to existing so reset everything associate with classes on the image
      }); //end attr
   }, // end mouse over
  function(){
   //off hover
      $('#armchair-img').attr({
         'src': 'images/armchair_150w.png',
         'class': 'media-object img-responsive img-rounded' //does not add to existing so reset everything associate with classes on the image
      }); //end attr
   }); //end desk image hover

   //popover on hover on about page interests tab
 /*  $(function (){ 
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

*/
   //if else based on time of day on contact page
      $(function (){
       var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning! ";
    } else if (time < 20) {
        greeting = "Good day! ";
    } else {
        greeting ="Good evening! ";
    }
    $('#contact-msg').prepend(greeting);
   });//end if/else

   
    
     //show/hide menu panel
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
    $('body').css("font-family", $(this).val());
    $('.change-font').css("font-family", $(this).val());
    
    });
    $("#fs").change(function() {
        $('body').css("font-size", $(this).val() + "px");
        $('.change-font').css("font-size", $(this).val() + "px"); 
    });

    $('.img-dimension').click(function() {
               $('#thumb-img3').css("width", $(this).val() + "px"); 
        $('#thumb-img').css("width", $(this).val() + "px"); 
        $('#thumb-img2').css("width", $(this).val() + "px"); 
    }); 
    
        //contact form
        var sub;
        $( "#subscribe" ).change(function() {
            sub = $(this).val();
            console.log("sub is: " + sub);
            if (sub == "yes") {
              $('.subscribe-group .help-block').text('Thanks for subscribing!');
              //  alert("Thanks for subscribing");
            }
             if (sub =="no") {
              $('.subscribe-group .help-block').text('Perhaps another time!');
              //  alert("Thanks for subscribing");
            }
          });//checkbox
             $( "#no-subscribe" ).change(function() {
            sub = $(this).val();
            console.log("sub is: " + sub);
            if (sub == "no") {
               $('.subscribe-group .help-block').text('Perhaps another time!');
              //alert("are you sure?");
            }            if (sub =="yes") {
               $('.subscribe-group .help-block').text('Thanks for subscribing!');
              //alert("are you sure?");
            }

     });//checkbox
              $('#subscribe').focusout(function(){
                sub = $(this).val();
            console.log("sub is: " + sub);
            if (sub == "yes") {
                        $('.subscribe-group .help-block').text('');
                        $('.name-group').attr({
                                class: 'col-md-6 form-group subcribe-group has-error'
                        }); // end attr
                } if (sub == "no")  {
                        $('.subscribe-group .help-block').text('');
                        $('.subscribe-group').attr({
                                class: 'col-md-6 form-group subscribe-group'
                        }); //end attr
                }
        }); //end focus out

           $('#project').change(function(){
                if ($('#project').val() == 'furniture') {
                                $('.project-group .help-block').text('Thanks for your interest in my furniture');
                        } else if ($('#project').val() == 'painting') 
                        {
                                $('.project-group .help-block').text('Thanks for your interest in my paintings');
                        } else ($('#project').val() == 'papercraft') 
                        {
                                $('.project-group .help-block').text('Thanks for your interest in my papercraft');
                        } 

        }); //end change

        $('#name').focusout(function(){
                if($('#name').val().length == 0) {
                        $('.name-group .help-block').text('Please enter your name.');
                        $('.name-group').attr({
                                class: 'col-md-6 form-group name-group has-error'
                        }); // end attr
                } else {
                        $('.name-group .help-block').text('');
                        $('.name-group').attr({
                                class: 'col-md-6 form-group name-group'
                        }); //end attr
                }
        }); //end focus out
        $('#email').focusout(function(){
                if($('#email').val().length == 0) {
                        $('.email-group .help-block').text('Please enter your email.');
                        $('.email-group').attr({
                                class: 'col-md-6 form-group email-group has-error'
                        }); // end attr
                } else {
                        $('.email-group .help-block').text('');
                        $('.email-group').attr({
                                class: 'col-md-6 form-group email-group'
                        }); //end attr
                }
        }); //end focus out
        $('#message').focusout(function(){
                if($('#message').val().length == 0) {
                        $('.message-group .help-block').text('Please enter a message.');
                        $('.message-group').attr({
                                class: 'col-md-6 form-group message-group has-error'
                        }); // end attr
                } else {
                        $('.message-group .help-block').text('');
                        $('.message-group').attr({
                                class: 'col-md-6 form-group message-group'
                        }); //end attr
                }
        }); //end focus out


        $('button').click(function(submit){
                //email message subscribe
                //regex from http://regexlib.com/Search.aspx?k=email&AspxAutoDetectCookieSupport=1

                var addr = $('#email').val();
                var emailreg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/; 
                console.log("if value is" + emailreg.test(addr));

                if($('#name').val().length == 0) {
                        $('.name-group .help-block').text('Please enter your name.');
                        $('.name-group').attr({
                                class: 'col-md-6 form-group name-group has-error'
                        }); // end attr
                        submit.preventDefault();
                }
                else if($('#email').val().length == 0) {
                        $('.email-group .help-block').text('Please enter your email.');
                        $('.email-group').attr({
                                class: 'col-md-6 form-group email-group has-error'
                        }); // end attr

                        submit.preventDefault();
                }  
                  else   if (!emailreg.test(addr)) {
                           $('.email-group .help-block').text('Please enter a valid email address.');
                                    $('.email-group').attr({
                                            class: 'col-md-6 form-group email-group has-error'
                                    }); // end attr
                                    submit.preventDefault();
                          console.log("Please enter a valid email address");
                        }    
                else if($('#message').val().length == 0) {
                        $('.message-group .help-block').text('Please enter a message.');
                        $('.message-group').attr({
                                class: 'col-md-6 form-group message-group has-error'
                        }); // end attr
                        submit.preventDefault();

                }
                
                 else {
                           $('#envelope').animate({ 
                               left: '400px' ,   
                               opacity:'0.3',
                               height:'250px',
                               width:'250px'});
               
                        $('#confirmationModal').modal();
                        submit.preventDefault();
                 }

        }); //end click
    


        //panel swipe open example from jquery mobile
        $(document).on("pagecreate", "#home", function(){
          $(document).on("swipeleft swiperight", "#home",
            function(e){
              if($(".ui-page-active").jqmData("panel")!= "open")
            {
              if(e.type === "swipeleft"){
                $("#right-panel").panel("open");
              } else if (e.type === "swiperight"){
                $("#left-panel").panel("open");
              }
            }



        });//end page created
   }); //end ready


}); //end ready

