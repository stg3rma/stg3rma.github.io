
   $(document).ready(function(){


    

  $('#create2').click(function(){
      var points = $('#points').val();
      var color = $('#colors').val();
      var rows = $('#rows').val();
      var columns = $('#columns').val();


   // variation on cascading stars from docs
      for (var i=0; i< rows; i+=1) {
      for (var j = 0; j < columns; j+=1) {
        $('#canvas2').drawPolygon({
          layer: true,
          fillStyle: color,
          x: 35+(i*60), y: 30+(j*50),
          radius: 35,
          sides: points,
          concavity: 0.6,
          click: function(layer) {
            // Click a star to spin it
            $(this).animateLayer(layer, {
              rotate: '+=144'
            });
          }
        });
      }
      }
      }); //end click
  
      $('#create').click(function(){
        var imgsrc = $('#image').val();
        switch(imgsrc){
          case 'blue':
            imgsrc = "images/blue_300x300.png";
            break;
          case 'kidney':
            imgsrc = "images/kidney_300x300.png";
            break;
          case 'leaves':
            imgsrc = "images/leaves_300x300.png";
            break;
          default: 
            imgsrc = "images/blue_300x300.png";
        } //end switch

        function writeCanvasText(){
          var line1 = $('#line1').val().toUpperCase();
          var line2 = $('#line2').val().toUpperCase();

          $('#canvas1').drawText({
            fillStyle: '#fff',
            strokeStyle: '#000',
            strokeWidth: 3,
            x: 150,
            y: 50,
            fontSize: '5em',
            fontFamily: 'Impact, sans-serif',
            text: line1
          })
          .drawText({
            fillStyle: '#fff',
            strokeStyle: '#000',
            strokeWidth: 3,
            x: 200,
            y: 470,
            fontSize: '5em',
            fontFamily: 'Impact, sans-serif',
            text: line2
          }); //end draw text
        } // end memetext

        //write to web page!
        $('#canvas1').drawImage({
          source: imgsrc,
          x: 150,
          y: 150,
          load: writeCanvasText
        }); //end draw image

      }); //end click

//function to clear the canvas
$('#clear').click(function(){
  $('#canvas1').clearCanvas();
});

//function to clear the canvas
$('#clear2').click(function(){
  $('#canvas2').clearCanvas();
});
   }); //end ready


