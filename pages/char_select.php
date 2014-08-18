<?php
	if (!isset($_SESSION['username'])) { session_start(); }
	if (isset($_SESSION['char'])) { // this is for when the user logs out a character from the game
		$_SESSION['ab_points'] = null;
		$_SESSION['char'] = null;
		header("Location: http://localhost/rpg");
		}
	if (isset($_GET['id'])) {
		$_SESSION['char'] = $_GET['id'];
		header("Location: http://localhost/rpg");
		}
?>

<div id="mainWindow">
	<div id="charOptions">
		<div><a href="?page=create_Char">Create New Character</a></div>
		<?php
			$charCheck = character_list($_SESSION['id']);
			if ($charCheck != '<ul></ul>') { echo  $charCheck; }
		?>
	</div>
</div>