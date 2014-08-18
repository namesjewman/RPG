<?php
session_start();
require("functions.php");
if (isLoggedIn()) { logout(); header("Location: http://localhost/rpg"); exit; }

$username = $_POST['username'];
$password = $_POST['password'];

$username = mysql_real_escape_string($username);

$query = "SELECT *
			 FROM accounts
        	 WHERE username = '$username';";
$result = mysql_query($query);

if (mysql_num_rows($result) < 1) { //no such user exists
	 header('Location: http://localhost/rpg?err=user');
	 die;
	 }

$user = mysql_fetch_array($result, MYSQL_ASSOC);
$hash = hash('sha256', $user['salt'] . hash('sha256', $password) );

if ($hash != $user['password']) { //incorrect password
	 header('Location: http://localhost/rpg?err=pass');
	 die;
	 }

$_SESSION['username'] = $username;
$_SESSION['id']       = $user['id'];

header("Location: http://localhost/rpg"); exit;
?>