<?php

$buy = "Order Placed!";

$not_buy = "Order Cancelled!";

$thanks = "Thank you! Your purchase has been completed successfully!
if your email was provided, you will recieve confirmation in your inbox shortly!";

$sorry = "Your order has been successfully canceled. We hope to see you back again, soon!";

$order = $_POST['submit'];

?>
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Recieved</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="css/lesson11php.css">
    <meta name="description" content="Confirmation of choice to submit or cancel order">  
  </head>
  <body>
    <header>
      <h1 id="title-heading">
        <?php 
        if($order == 0) {
          print $buy;
        }
        elseif ($order == 1) {
          print $not_buy;
        }
       ?></h1>
    </header>

    <main>
        <p id="complete">
          <?php 
            if($order == 0) {
              print $thanks;
            }
            elseif($order == 1) {
              print $sorry;
            }
          ?>
        </p>
    </main>      
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    <script>WebFont.load({google: {families: ['Raleway: 400,600,800', 'Cantarell:ital,wght@0,400;0,700;1,400']}});</script>
  </body>
</html>