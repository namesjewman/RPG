
<div id="leftBar">
<?php
if (isset($_SESSION['char'])) {
	$char_info=get_character_info($_SESSION['id'],$_SESSION['char']);
	echo "	<div id=\"form_content\"> <script>save_bar(); update_exp_bar();</script> </div>
	<div id=\"left_main\"> <script>left_main();</script> </div>";
	}
?>

</div>
