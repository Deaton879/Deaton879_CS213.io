<?php

//  This function reads the form "query string"
//  
// This function handles both an http "get".
$field1 = $_GET['apr']; 
$field2 = $_GET['term'];
$field3 = $_GET['amount'];
$P = $field3;
$I = $field1 / 100 / 12;
$N = $field2 * 12;
$M = round($P * $I / (1 - (1 + $I)**(-1 * $N)), 2);
echo "<br />";
 
?>

<!DOCTYPE html>
<html lang = "en">
<meta charset = "utf-8" />
<title>Read Form!</title>
<style>
  body {
    font-family:'PT Sans', Arial, sans-serif;
    margin: auto;
    text-align: center;
  }
  div {
    margin: auto;
    width: fit-content;
  }
  h1 {
    color: purple;
  }
  h3 {
    text-align: left;
  }
  b {
    color: red;
  }
  u {
    color: blue;
  }
</style>
<body>
 <div>
  <h1>Mortgage Information: </h1>
  <h3>
    <?php
        print "APR: <u>$field1%</u><br>";
        print "Term: <u>$field2 years</u><br>";
        print "Amount: <u>$$field3</u><br>";
    ?>  
  </h3>
</div>
<h2><br>
  <?php
     echo "Calculated Monthly Payment: <b>$$M</b>"
  ?>
</h2>

</body>
</html>