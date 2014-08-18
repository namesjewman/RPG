<?php
require("functions.php");

// form validation
$errors = array();
$required_fields = array('username','pass1','pass2');
foreach ($required_fields as $fieldname) {
	if (!isset($_POST[$fieldname]) || empty($_POST[$fieldname])) { $errors[] = $fieldname;	}
	if (!empty($errors)) { echo mysql_error(); }
	}

//retrieve our data from POST
$username = $_POST['username'];
$pass1    = $_POST['pass1'];
$pass2    = $_POST['pass2'];

$user_set = get_all_users();
while ($row = mysql_fetch_row($user_set)) { // check to see if username has already been used
	if ($username == $row[1]) { header('Location: create_new_account.php?err=user2'); }
	}

if ( $pass1 != $pass2 )       { header('Location: create_new_account.php?err=pass'); }
if ( strlen($username) > 30 ) { header('Location: create_new_account.php?err=user'); }

$hash = hash('sha256', $pass1);

function createSalt() {
	$string = md5(uniqid(rand(), true));
   return substr($string, 0, 3);
	}

$salt = createSalt();
$hash = hash('sha256', $salt . $hash);

// Read all the id's in the database and create one that is not currently being used
$charId  = "";
$result   = mysql_query("SELECT * FROM accounts") or die(mysql_error());
$id_array = array();
while($row=mysql_fetch_array($result)) {array_push($id_array, $row['id']);}
$search = sizeof($id_array)+1;
for ($i=0;$i<$search;$i++) {
	if (!in_array($i, $id_array)) {$charId=$i;}
	}

$username = mysql_real_escape_string($username);
$query = "INSERT INTO accounts (username, password, salt, id)
			 VALUES ('$username', '$hash', '$salt', '$charId');";

$getuser = "SELECT *
			 FROM accounts
        	 WHERE username = '$username';";
$result = mysql_query($getuser);

if   (mysql_query($query, $connection)) {
	session_start();
	$_SESSION['username'] = $username;
	$_SESSION['id']       = $charId;
	header("Location: http://localhost/rpg");
	}
else {echo "<p>Table creation failed.</p>"; echo "<p>" . mysql_error() . "</p>";}

?>