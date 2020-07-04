


<?php

/*
Review / Confirmation page.
The purchase confirmation page must include the following.
- a title
- a heading
- the first and last name
- the address
- the phone #
- a list of the items selected for purchase and their respective costs.
- the total cost of the items being purchased
- the credit card type selected for use
- the credit card expiration date
- a <form> element with an "action" attribute that references a 2nd PHP program (assign11_a.php) and with two "submit" buttons.
- a confirm purchase button - which submits this new form
- a cancel purchase button - which also submits this new form
*/

$first = $_POST["first-name"];
$last = $_POST["last-name"];
$address = $_POST["address"];
$phone = $_POST["phone"];


$item1 = $_POST["quantity1"];
$qty1 = $item1 / 80;
$item2 = $_POST["quantity2"];
$qty2 = $item2 / 100;
$item3 = $_POST["quantity3"];
$qty3 = $item3 / 120;
$item4 = $_POST["quantity4"];
$qty4 = $item4 / 150;

$items = array(
  array("iphone 6",$item1,$qty1),
  array("iphone 6s",$item2,$qty2),
  array("iphone 7",$item3,$qty3),
  array("iphone 7s",$item4,$qty4)
);

$selected = array();


$cost = $item1 + $item2 + $item3 + $item4;

$card = $_POST["card"];
$exp = $_POST["exp-date"];

?>

<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset = "utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Purchase Confirmation page</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="css/lesson11php.css">
    <meta name="description" content="Confirmation page for the Week 11 assignment form | PHP handling">
  </head>
  <body>
    <header>
      <h1 id="title-heading"><u>Order Summary</u></h1>
    </header>
    <main id="confirm-main">
      <div id="order-summary">
        <h3>Personal Info:</h3>
        <div class="info">  
          <p><?php print "$first $last" ?></p><br>
          <p><?php print "$address" ?></p><br>
          <p><?php print "$phone" ?></p><br>
        </div>
        <h3>Cart:</h3>
        <div id="purchases">
          <?php 
            foreach($items as $item){
              if($item[1] != 0) {
                print "<p>$item[0] (x$item[2]) - $$item[1] <br></p>";
              }
            }
          ?>
          <p id="total"><b>Total: </b><?php print "$$cost.00" ?></p>
        </div><br>
        <h3>Payment:</h3>
        <div class="info">
          <p>Card Info:</p>
          <p><?php print "<b>$card</b> card - expiring on $exp"?></p><br>
          </div>
      </div>
      <br><p id="message">If order summary is correct, press submit to proceed to purchase.</p><br>
      <form action="assign11_a.php" method="POST">
      <button type="submit" name="submit" value="0">Submit Order</button>
      <button type="submit" name="submit" value="1">Cancel Order</button>
      </form>
    </main>
    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
    <script>WebFont.load({google: {families: ['Raleway: 400,600,800', 'Cantarell:ital,wght@0,400;0,700;1,400']}});</script>
  </body>
<html>

