<html>
	<head>
		<meta http-equiv="content-type" content="text/html;charset=utf-8"/>
    	<link type="text/css" rel="stylesheet" href="design/styles.css">
		<script type="text/javascript" src="design/jquery.js"></script>
		<script type="text/javascript" src="design/plugins.js"></script>
		<script type="text/javascript" src="design/javascript.js"></script>
		<script type="text/javascript" src="design/monsterjs.js"></script>
      <?php if (isset($_SESSION['char'])) { create_head(); } ?>
    </head>
    <?php
    	if (isset($_SESSION['char'])) { echo '<body onkeydown="char_move(event)"><span id="fadePage"></span>'; }
	 	else { echo '<body>'; }
	 ?>

	<div id="navigation">
		<img src="backgrounds/symbol_small.jpg" />
<?php 
if (isLoggedIn()) { echo '		<div onClick="window.open(\'working/check_login.php\',\'_self\');">Log out</div>'; }

if (isset($_SESSION['char'])) {
echo'
		<ul>
			<li><a href="javascript:change_leftbar(\'main\')">Main</a></li>
			<li><a href="javascript:change_leftbar(\'equipped\')">Equipped</a></li>
			<li><a href="javascript:change_leftbar(\'inventory\')">Inventory</a></li>
			<li><a href="javascript:change_leftbar(\'potions\')">Potions</a></li>
			<li><a href="javascript:change_leftbar(\'abilities\')">Abilities</a></li>
			<li><a href="javascript:change_leftbar(\'gear\')">Gear & Materials</a></li>
			<li><a href="javascript:change_leftbar(\'quests\')">Quests</a></li>
			<li class="rightNav"><a onclick="javascript: save_character()" href="pages/char_select.php/">Play Different Character</a></li>
		</ul>
';}
?>
	</div>