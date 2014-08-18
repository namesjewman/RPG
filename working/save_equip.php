<?php
require("functions.php");

if (isset($_POST['delete'])) {
	$query = "DELETE FROM equipment WHERE charID = \"".$_SESSION['id']."\" AND id = \"".$_POST['delete']."\"";
	
	if   (mysql_query($query, $connection)) { /* do nothing */ }
	else {echo "<p>Table creation failed.</p>"; echo "<p>" . mysql_error() . "</p>";}
	}

// Read all the id's in the database and create one that is not currently being used
$result   = mysql_query("SELECT * FROM equipment") or die(mysql_error());
$id_array = array();
while($row=mysql_fetch_array($result)) { array_push($id_array, $row['id']); }
$search = sizeof($id_array)+1;
for ($i=0;$i<$search;$i++) {
	if (!in_array($i, $id_array)) { $eqId=$i; }
	}

if (isset($_POST['attr1'])) {
	$pId   	   = mysql_prep($_POST['pId']);
	$name   	   = mysql_prep($_POST['name']);
	$slot 	   = mysql_prep($_POST['slot']);
	$quality	   = mysql_prep($_POST['quality']);
	$durability = mysql_prep($_POST['durability']);
	$modifier   = mysql_prep($_POST['modifier']);
	$type 	   = mysql_prep($_POST['type']);
	$image 	   = mysql_prep($_POST['image']);
	$title      = mysql_prep($_POST['title']);
	$attr1 	   = mysql_prep($_POST['attr1']);
	$attr2 	   = mysql_prep($_POST['attr2']);
	$attr3 	   = mysql_prep($_POST['attr3']);
	$stat1 	   = mysql_prep($_POST['stat1']);
	$stat2 	   = mysql_prep($_POST['stat2']);
	$stat3 	   = mysql_prep($_POST['stat3']);
	$value 	   = mysql_prep($_POST['value']);
	
	$update = "INSERT INTO equipment (id, charID, name, slot, quality, durability, modifier, type, image, title, attr1, attr2, attr3, stat1, stat2, stat3, value)
			 	  VALUES ('$eqId', '$pId', '$name', '$slot', '$quality', '$durability', '$modifier', '$type', '$image', '$title', '$attr1', '$attr2', '$attr3', '$stat1', '$stat2', '$stat3', '$value');";
	
	if   (mysql_query($update, $connection)) { echo $eqId; }
	else {echo "<p>Table creation failed.</p>"; echo "<p>" . mysql_error() . "</p>";}
	}

else {
	$id   = mysql_prep($_POST['id']);
	$slot = mysql_prep($_POST['slot']);
	
	$update = "UPDATE equipment
			  	  SET slot ='".$slot."'
			  	  WHERE id ='".$id."'";
	
	if   (mysql_query($update, $connection)) { echo 'id: '.$id.' *** slot: '.$slot; }
	else {echo "<p>Table creation failed.</p>"; echo "<p>" . mysql_error() . "</p>";}
	}

?>