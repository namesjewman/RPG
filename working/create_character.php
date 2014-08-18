<?php
require_once("connection.php");
require_once("functions.php");
if (!isset($_SESSION['username'])) { session_start(); }

// form validation
$errors = array();
$required_fields = array('name','class');
foreach ($required_fields as $fieldname) {
	if (!isset($_POST[$fieldname]) || empty($_POST[$fieldname])) { $errors[] = $fieldname; }
	if (!empty($errors)) { echo mysql_error(); }
	}

$name    = mysql_prep($_POST['name']);
$class   = mysql_prep($_POST['class']);
$charId  = "";
$account = mysql_prep($_POST['player']);

// Read all the id's in the database and create one that is not currently being used
$result   = mysql_query("SELECT * FROM characters") or die(mysql_error());
$id_array = array();
while($row=mysql_fetch_array($result)) {array_push($id_array, $row['id']);}
$search = sizeof($id_array)+1;
for ($i=0;$i<$search;$i++) {
	if (!in_array($i, $id_array)) {$charId=$i;}
	}

$newstats = populate_stats($class);
$level    = 1;
$hp       = $newstats[0];
$max_hp   = $newstats[1];
$mana     = $newstats[2];
$max_mana = $newstats[3];
$intel    = $newstats[4];
$str      = $newstats[5];
$dex      = $newstats[6];
$photo    = $newstats[7];
$image    = $newstats[8];

$query = "INSERT INTO characters (id, account, name, class, level, charexp, next_level, hp, max_hp, mana, max_mana, intel, str, dex, photo, image, abpoints, crit) 
			VALUES ('{$charId}','{$account}','{$name}','{$class}','{$level}',0,100,'{$hp}','{$max_hp}','{$mana}','{$max_mana}','{$intel}','{$str}','{$dex}','{$photo}','{$image}',1,5)";

$_SESSION['ab_points'] =1;
$_SESSION['char']      =$charId;

if (mysql_query($query, $connection)) { // Success
	header("Location: /rpg/?id=".$charId);
	exit;
	}
else {
	echo "<p>Character creation failed.</p>";
	echo "<p>" . mysql_error() . "</p>";
}

?>