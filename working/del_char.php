<?php

$id = mysql_prep($_GET['delchar']);

$delEquip = "DELETE FROM equipment WHERE charID = \"{$id}\"";
if   (mysql_query($delEquip, $connection)) { /* do nothing */ }
else {echo "<p>Delete failed.</p>"; echo "<p>" . mysql_error() . "</p>";}

$query = "DELETE FROM characters WHERE id = \"{$id}\" LIMIT 1";
$result = mysql_query($query, $connection);
	if (mysql_affected_rows() == 1) {
		header("Location: http://localhost/rpg?page=char_select");
		}
	else {
		echo "<p>Character deletion failed</p>";
		echo "<p>" . mysql_error() . "</p>";
		echo "<a href=\"/rpg/?page=load_Char\">Return to main page</a>";
		}
?>