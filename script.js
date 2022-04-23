var canvas = document.getElementById("MyPaintScreen");
var ctx = canvas.getContext("2d");
let $posX = 0;
let $posY = 0;
let $arr_color = ["00", "33", "66", "99", 'CC', 'FF'];
let count = 0
for (a=0;a<=5;a++){
  for (b=0;b<=5;b++){
    for (c=0;c<=5;c++){
      count++
      let hex = "#" + $arr_color[a] + $arr_color[b] + $arr_color[c]
//      for ($posX;$posX<=480;$posX+=20){
//        for ($posY;$posY<=480;$posY+=20){
//          ctx.fillStyle = hex;
//          ctx.fillRect($posX, $posY, 20, 20);
//        };
//      };
        console.log('color ' + count + ":        #" + $arr_color[a] + $arr_color[b] + $arr_color[c]);
        //DrawBox($posX, $posY, hex);
    };
  };
};


function DrawBox($posX, $posY, $color){
  for ($posX;$posX<=480;$posX+=20){
      if ($posY<=480){
        $posY+=20
      console.log("positionX " + $posX + " posY " + $posY + " & Color = " + $color);
      }; 
      console.log("positionX " + $posX + " posY " + $posY + " & Color = " + $color);
      ctx.fillStyle = $color;
      ctx.fillRect($posX, $posY, 20, 20);
  };
};
