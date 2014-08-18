<?php
require_once("functions.php");

if (!isset($_SESSION['username'])) { session_start(); }
if (isset($_GET['id'])) {
	$_SESSION['char'] = $_GET['id'];
	$abpoints = get_abpoints($_GET['id']);
	if ($abpoints[0]>0) { $_SESSION['ab_points'] = $abpoints[0]; }
	header("Location: http://localhost/rpg");
	}
?>