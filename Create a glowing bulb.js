//Create a glowing bulb effect using classlist toggle method in javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Favourate websites</title>

  <style>
    html,body{
      height: 100%;
      width: 100%;
    }
    .bulb{
      background :yellow;
      
    }

    .bulbcontainer{
      height: 341px;
      width:341px;
    }
  </style>
</head>

<body> 
  <div id="bulb" class="bulbcontainer bulb"></div>

  <script>
    setInterval(async function(){
      document.querySelector("#bulb").classList.toggle("bulb")
    },500)
  </script>
  
</body> 
</html>
