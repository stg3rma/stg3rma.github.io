
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

//tree decorator
//trunk  
 $('#create3').click(function(){
$('#canvas3').drawRect({
  fillStyle: 'brown',
  layer: 'true',
  draggable: 'true',
  x: 150, y: 245,
  width: 30,
  height: 30
});
//tree
$('#canvas3').drawSlice({
  fillStyle: 'green',
  draggable: 'true',
  x: 150, y: 30,
  radius: 200,
  // start and end angles in degrees
  start: 150, end: 210
});
 
$('#canvas3')
// Draw a circle
.drawArc({
  layer: true,
   draggable: 'true',
  groups: ['circles'],
  fillStyle: 'red',
  x: 220, y: 100,
  radius: 10
})
.drawArc({
  layer: true,
   draggable: 'true',
  groups: ['circles'],
  fillStyle: 'red',
  x: 220, y: 100,
  radius: 7
})
// Draw another circle
.drawArc({
  layer: true,
   draggable: 'true',
  groups: ['circles'],
  fillStyle: 'yellow',
  x: 250, y: 100,
  radius: 5
})
// Draw another circle
.drawArc({
  layer: true,
  groups: ['circles'],
   draggable: 'true',
  fillStyle: 'blue',
  x: 70, y: 100,
  radius: 10
})
$('#canvas3')
// Draw a circle
.drawArc({
  layer: true,
   draggable: 'true',
  groups: ['circles'],
  fillStyle: 'red',
  x: 100, y: 100,
  radius: 11
})
// Draw another circle
.drawArc({
  layer: true,
   draggable: 'true',
  groups: ['circles'],
  fillStyle: 'yellow',
  x: 150, y: 100,
  radius: 5
})
// Draw another circle
.drawArc({
  layer: true,
  groups: ['circles'],
   draggable: 'true',
  fillStyle: 'blue',
  x: 270, y: 100,
  radius: 10
})
// Draw a star
$('#canvas3').drawPolygon({
  groups: ['circles'],
  layer: 'true',
  draggable: 'true',
  fillStyle: 'yellow',
  x: 100, y: 100,
  radius: 25,
  sides: 5,
  concavity: 0.5
})
// Animate all layers in the group 'circles'
.animateLayerGroup('circles', {
  y: 290
}, 280);
}); //end click3

//function to clear the canvas
$('#clear3').click(function(){
$('#canvas3').removeLayerGroup('circles').drawLayers();

 $('#canvas3').clearCanvas();
})
.drawLayers();

}); //end ready


