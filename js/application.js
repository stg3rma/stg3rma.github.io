<script>
   $(document).ready(function(){
      console.log("Document loaded!"); //for debugging
      $('aside').fadeOut(2000).fadeIn(500); //chained functions
      $('header').slideUp(2000).slideDown(1000);   
      $('#carousel-home').css({
	border: "1px solid red",
	fontSize: "24px"
      }); //end #menu css
      $('p:even').css({
	color: "white",
	backgroundColor: "green"
       }); //end p css
       $('footer ul li:last, nav ul li:first, aside ul li:last').fadeOut(500).fadeIn(1000);
   }); //end ready
</script>