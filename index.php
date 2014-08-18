<?php
if (isset($_SERVER['HTTP_USER_AGENT'])&&(strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE'))) { echo '<div style="text-align: center; font: 2em bold arial;"> You are using Internet Explorer.<br> STOP IT!<br> I made this game for fun and troubleshooting IE is NOT fun.<br> This game will not work in IE.<br> Use any other browser if you want to play.<br> </div>'; }
else { // Not IE
	session_start();
	require("working/functions.php");

	$connection = mysql_connect(DB_SERVER,DB_USER,DB_PASS) or die("database connection failed: " . mysql_error());
	$db_select = mysql_select_db(DB_NAME,$connection) or die("database selection failed: " . mysql_error());

	$ability_Points = 0;
	if (isset($_SESSION['ab_points'])) { $ability_Points = $_SESSION['ab_points']; }
	if (isset($_GET['abpoints']))      { $ability_Points = $_SESSION['ab_points'] = $_GET['abpoints']; if (isset($_GET['castle'])){ $_SESSION['castle'] = "yes"; } }
	if (isset($_GET['page']))          { if ($_GET['page']=='char_select') { $main_page = "pages/char_select.php"; } else { $main_page = "working/".$_GET['page'].".php"; } }

	elseif (!isLoggedIn())             { $main_page = "working/login_page.php"; }
	elseif ($ability_Points!=0)        { $main_page = "working/abilities.php"; }
	elseif (!isset($_SESSION['char'])) { $main_page = "pages/char_select.php"; }
	elseif (isset($_GET['castle']))    { $_SESSION['castle']='yes'; header("Location: /rpg"); }
	else                               { $main_page = "pages/map.php"; }

	include("pages/navigation.php");
	include("pages/leftbar.php");
	include($main_page);
	include("pages/rightbar.php");
	}
?>