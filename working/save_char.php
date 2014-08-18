<?php
session_start();
require("functions.php");

$ab_array = array('0'); // set the first item in the array to 0 to help the for loop below easier
$char     = get_character_info($_SESSION['char']);
$id       = $char['id'];

/******** Add abilities to database ************/
if (isset($_GET['ab'])) {
	$newCrit=$charCrit=$_GET['ab'];
	$abPoints = $_GET['ab'];
	$update = "UPDATE characters SET abpoints  ='".$abPoints."' WHERE id ='".$id."'";
	if   (mysql_query($update, $connection)) { /* do nothing */ }
	else {echo "<p>Table creation failed.</p>"; echo "<p>" . mysql_error() . "</p>";}
	$_SESSION['ab_points']=$abPoints;
	
	if ($char['ab1'])  { array_push($ab_array, $char['ab1']); }
	if ($char['ab2'])  { array_push($ab_array, $char['ab2']); }
	if ($char['ab3'])  { array_push($ab_array, $char['ab3']); }
	if ($char['ab4'])  { array_push($ab_array, $char['ab4']); }
	if ($char['ab5'])  { array_push($ab_array, $char['ab5']); }
	if ($char['ab6'])  { array_push($ab_array, $char['ab6']); }
	if ($char['ab7'])  { array_push($ab_array, $char['ab7']); }
	if ($char['ab8'])  { array_push($ab_array, $char['ab8']); }
	if ($char['ab9'])  { array_push($ab_array, $char['ab9']); }
	if ($char['ab10']) { array_push($ab_array, $char['ab10']); }

	/***** Knight *****/
	if ($char['class']=='Knight') {
		if (isset($_POST['Pound']))       { if (!in_array('Pound', $ab_array))       { array_push($ab_array,'Pound'); } }
		if (isset($_POST['Leap']))        { if (!in_array('Leap', $ab_array))        { array_push($ab_array,'Leap'); } }
		if (isset($_POST['Jump']))        { if (!in_array('Jump', $ab_array))        { array_push($ab_array,'Jump'); } }
		if (isset($_POST['Pounce']))      { if (!in_array('Pounce', $ab_array))      { array_push($ab_array,'Pounce'); } }
		if (isset($_POST['Cyclone']))     { if (!in_array('Cyclone', $ab_array))     { array_push($ab_array,'Cyclone'); } }
		if (isset($_POST['Bash']))        { if (!in_array('Bash', $ab_array))        { array_push($ab_array,'Bash'); } }
		if (isset($_POST['Frenzy']))  	 { if (!in_array('Frenzy', $ab_array))      { array_push($ab_array,'Frenzy'); } }
		if (isset($_POST['Manic']))     	 { if (!in_array('Manic', $ab_array))       { array_push($ab_array,'Manic'); } }
		if (isset($_POST['Berserk']))     { if (!in_array('Berserk', $ab_array))     { array_push($ab_array,'Berserk'); } }
		if (isset($_POST['Hunker']))    	 { if (!in_array('Hunker Down', $ab_array)) { array_push($ab_array,'Hunker'); } }
		if (isset($_POST['Defensive']))   { if (!in_array('Defensive', $ab_array))   { array_push($ab_array,'Defensive'); } }
		if (isset($_POST['Precision'])) 	 { if (!in_array('Precision', $ab_array))   { $newCrit=10; array_push($ab_array,'Precision'); } }
		if (isset($_POST['Rigor']))     	 { if (!in_array('Rigor', $ab_array))       { $newCrit=15; array_push($ab_array,'Rigor'); } }
		if (isset($_POST['Affliction']))  { if (!in_array('Affliction', $ab_array))  { $newCrit=20; array_push($ab_array,'Affliction'); } }
		if (isset($_POST['Speachcraft'])) { if (!in_array('Speachcraft', $ab_array)) { array_push($ab_array,'Speachcraft'); } }

		// now remove any item in the array that have been upgraded and are now inferior
		if (in_array('Jump', $ab_array))       { $ab_array = array_diff($ab_array, array("Leap")); }
		if (in_array('Pounce', $ab_array))     { $ab_array = array_diff($ab_array, array("Jump")); }
		if (in_array('Defensive', $ab_array))  { $ab_array = array_diff($ab_array, array("Hunker down")); }
		if (in_array('Manic', $ab_array))      { $ab_array = array_diff($ab_array, array("Frenzy")); }
		if (in_array('Berserk', $ab_array))    { $ab_array = array_diff($ab_array, array("Manic")); }
		if (in_array('Rigor', $ab_array))      { $ab_array = array_diff($ab_array, array("Precision")); }
		if (in_array('Affliction', $ab_array)) { $ab_array = array_diff($ab_array, array("Rigor")); }
		}

	/***** Mage *****/
	elseif ($char['class']=='Mage') {
		if (isset($_POST['Teleport']))    { if (!in_array('Teleport', $ab_array))    { array_push($ab_array,'Teleport'); } }
		if (isset($_POST['Singe']))       { if (!in_array('Singe', $ab_array))       { array_push($ab_array,'Singe'); } }
		if (isset($_POST['Fireball']))    { if (!in_array('Fireball', $ab_array))    { array_push($ab_array,'Fireball'); } }
		if (isset($_POST['Firestorm']))   { if (!in_array('Firestorm', $ab_array))   { array_push($ab_array,'Firestorm'); } }
		if (isset($_POST['Incinerate']))  { if (!in_array('Incinerate', $ab_array))  { array_push($ab_array,'Incinerate'); } }
		if (isset($_POST['Peak']))        { if (!in_array('Peak', $ab_array))        { array_push($ab_array,'Peak'); } }
		if (isset($_POST['Uncover']))     { if (!in_array('Uncover', $ab_array))     { array_push($ab_array,'Uncover'); } }
		if (isset($_POST['Reveal']))      { if (!in_array('Reveal', $ab_array))      { array_push($ab_array,'Reveal'); } }
		if (isset($_POST['Bubble']))  	 { if (!in_array('Bubble', $ab_array))      { array_push($ab_array,'Bubble'); } }
		if (isset($_POST['Shield']))      { if (!in_array('Shield', $ab_array))      { array_push($ab_array,'Shield'); } }
		if (isset($_POST['Wall']))        { if (!in_array('Wall', $ab_array))        { array_push($ab_array,'Wall'); } }
		if (isset($_POST['Blister'])) 	 { if (!in_array('Blister', $ab_array))     { array_push($ab_array,'Blister'); } }
		if (isset($_POST['Boil']))     	 { if (!in_array('Boil', $ab_array))        { array_push($ab_array,'Boil'); } }
		if (isset($_POST['Freeze']))    	 { if (!in_array('Freeze', $ab_array))      { array_push($ab_array,'Freeze'); } }
		if (isset($_POST['Speachcraft'])) { if (!in_array('Speachcraft', $ab_array)) { array_push($ab_array,'Speachcraft'); } }
	
		// now remove any item in the array that have been upgraded and are now inferior
		if (in_array('Singe', $ab_array))    { $ab_array = array_diff($ab_array, array("Fireball")); }
		if (in_array('Fireball', $ab_array)) { $ab_array = array_diff($ab_array, array("Firestorm")); }
		if (in_array('Peak', $ab_array))     { $ab_array = array_diff($ab_array, array("Uncover")); }
		if (in_array('Uncover', $ab_array))  { $ab_array = array_diff($ab_array, array("Reveal")); }
		if (in_array('Bubble', $ab_array))   { $ab_array = array_diff($ab_array, array("Shield")); }
		if (in_array('Shield', $ab_array))   { $ab_array = array_diff($ab_array, array("Wall")); }
		if (in_array('Blister', $ab_array))  { $ab_array = array_diff($ab_array, array("Boil")); }
		}

	sort($ab_array);
	for ($i=1;$i<sizeof($ab_array);$i++) {
		$update = "UPDATE characters SET ab".$i."  ='".$ab_array[$i]."' WHERE id ='".$id."'";
		if   (mysql_query($update, $connection)) { /* do nothing */ }
		else {echo "<p>Table creation failed.</p>"; echo "<p>" . mysql_error() . "</p>";}
		}
	if ($newCrit!=$charCrit) {
		$update = "UPDATE characters SET crit = ".$newCrit." WHERE id = '".$id."'";
		if   (mysql_query($update, $connection)) { /* do nothing */ }
		else {echo "<p>Update failed.</p>"; echo "<p>" . mysql_error() . "</p>";}
		}
	if (isset($_SESSION['castle'])) { $castle = "?castle"; unset($_SESSION['castle']); }
	else { $castle = ""; }
	header("Location: http://localhost/rpg".$castle); exit;
	}
/******** End Add abilities to database ************/

/******** Save map that contains the Castle ************/

else if (isset($_POST['map'])) {
	$map = $_POST['map'];
	$link = mysqli_connect(DB_SERVER,DB_USER,DB_PASS,'rpg');
	$map = mysqli_real_escape_string($link, $map);
	$update = "UPDATE characters SET map ='".$map."', castle ='yes' WHERE id ='".$id."'";
	if   (mysql_query($update, $connection)) { /* do nothing */ }
	else {echo "<p>Table creation failed.</p>"; echo "<p>" . mysql_error() . "</p>";}
	}

/******** Save character ************/

else {
	$id   		 = mysql_prep($_POST['id']);
	$gold 		 = mysql_prep($_POST['gold']);
	$max_hp 		 = mysql_prep($_POST['max_hp']);
	$hp   		 = mysql_prep($_POST['hp']);
	$level 		 = mysql_prep($_POST['level']);
	$charexp 	 = mysql_prep($_POST['charexp']);
	$next_level  = mysql_prep($_POST['next_level']);
	$abpoints    = mysql_prep($_POST['abpoints']);
	$intel 		 = mysql_prep($_POST['intel']);
	$mana 		 = mysql_prep($_POST['mana']);
	$max_mana 	 = mysql_prep($_POST['max_mana']);
	$str 			 = mysql_prep($_POST['str']);
	$dex 			 = mysql_prep($_POST['dex']);
	$armor		 = mysql_prep($_POST['armor']);
	$ward		    = mysql_prep($_POST['ward']);
	$s_income    = mysql_prep($_POST['s_income']);
	$s_timer     = mysql_prep($_POST['s_timer']);
	$item1 		 = mysql_prep($_POST['item1']); $item2 = mysql_prep($_POST['item2']); $item3 = mysql_prep($_POST['item3']); $item4 = mysql_prep($_POST['item4']); $item5 = mysql_prep($_POST['item5']); $item6 = mysql_prep($_POST['item6']); $item7 = mysql_prep($_POST['item7']); $item8 = mysql_prep($_POST['item8']); $item9 = mysql_prep($_POST['item9']); $item10	= mysql_prep($_POST['item10']);
	$gear1 		 = mysql_prep($_POST['gear1']); $gear2 = mysql_prep($_POST['gear2']); $gear3 = mysql_prep($_POST['gear3']); $gear4 = mysql_prep($_POST['gear4']); $gear5 = mysql_prep($_POST['gear5']); $gear6 = mysql_prep($_POST['gear6']); $gear7 = mysql_prep($_POST['gear7']); $gear8 = mysql_prep($_POST['gear8']); $gear9 = mysql_prep($_POST['gear9']); $gear10	= mysql_prep($_POST['gear10']);
	$g1 		    = mysql_prep($_POST['g1']); $g2 = mysql_prep($_POST['g2']); $g3 = mysql_prep($_POST['g3']); $g4 = mysql_prep($_POST['g4']); $g5 = mysql_prep($_POST['g5']); $g6 = mysql_prep($_POST['g6']); $g7 = mysql_prep($_POST['g7']); $g8 = mysql_prep($_POST['g8']); $g9 = mysql_prep($_POST['g9']); $g10	= mysql_prep($_POST['g10']);
	$pot1 		 = mysql_prep($_POST['pot1']); $pot2 = mysql_prep($_POST['pot2']); $pot3 = mysql_prep($_POST['pot3']); $pot4 = mysql_prep($_POST['pot4']); $pot5 = mysql_prep($_POST['pot5']); $pot6 = mysql_prep($_POST['pot6']); $pot7 = mysql_prep($_POST['pot7']); $pot8 = mysql_prep($_POST['pot8']); $pot9 = mysql_prep($_POST['pot9']); $pot10 = mysql_prep($_POST['pot10']); 
	$q1	       = mysql_prep($_POST['q1']); $q2 = mysql_prep($_POST['q2']); $q3 = mysql_prep($_POST['q3']); $q4 = mysql_prep($_POST['q4']); $q5 = mysql_prep($_POST['q5']); $q6 = mysql_prep($_POST['q6']); $q7 = mysql_prep($_POST['q7']); $q8 = mysql_prep($_POST['q8']); $q9 = mysql_prep($_POST['q9']); $q10 = mysql_prep($_POST['q10']);
	$q1_prog     = mysql_prep($_POST['q1_prog']); $q2_prog = mysql_prep($_POST['q2_prog']); $q3_prog = mysql_prep($_POST['q3_prog']); $q4_prog = mysql_prep($_POST['q4_prog']); $q5_prog = mysql_prep($_POST['q5_prog']); $q6_prog = mysql_prep($_POST['q6_prog']); $q7_prog = mysql_prep($_POST['q7_prog']); $q8_prog = mysql_prep($_POST['q8_prog']); $q9_prog = mysql_prep($_POST['q9_prog']); $q10_prog = mysql_prep($_POST['q10_prog']);
	$blob_kills  = mysql_prep($_POST['blob_kills']); $orc_kills = mysql_prep($_POST['orc_kills']); $zombie_kills = mysql_prep($_POST['zombie_kills']); $beholder_kills = mysql_prep($_POST['beholder_kills']); $spider_kills = mysql_prep($_POST['spider_kills']);
	$head 		 = mysql_prep($_POST['head']);
	$chest 		 = mysql_prep($_POST['chest']);
	$arms 		 = mysql_prep($_POST['arms']);
	$legs 		 = mysql_prep($_POST['legs']);
	$feet 		 = mysql_prep($_POST['feet']);
	$right_hand  = mysql_prep($_POST['right_hand']);
	$left_hand 	 = mysql_prep($_POST['left_hand']);

	$update = "UPDATE characters
				  SET gold       = '".$gold."',
						hp         = '".$hp."',
						max_hp     = '".$max_hp."',
						level      = '".$level."',
						charexp    = '".$charexp."',
						next_level = '".$next_level."',
						abpoints   = '".$abpoints."',
						intel      = '".$intel."',
						mana    	  = '".$mana."',
						max_mana	  = '".$max_mana."',
						str    	  = '".$str."',
						dex  		  = '".$dex."',
						armor		  = '".$armor."',
						s_income   = '".$s_income."',
						s_timer    = '".$s_timer."',
						item1      = '".$item1."', item2='".$item2."', item3='".$item3."', item4='".$item4."', item5='".$item5."', item6='".$item6."', item7='".$item7."', item8='".$item8."', item9='".$item9."', item10='".$item10."',
						gear1      = '".$gear1."', gear2='".$gear2."', gear3='".$gear3."', gear4='".$gear4."', gear5='".$gear5."', gear6='".$gear6."', gear7='".$gear7."', gear8='".$gear8."', gear9='".$gear9."', gear10='".$gear10."',
						g1         = '".$g1."', g2='".$g2."', g3='".$g3."', g4='".$g4."', g5='".$g5."', g6='".$g6."', g7='".$g7."', g8='".$g8."', g9='".$g9."', g10='".$g10."',
						pot1       = '".$pot1."', pot2='".$pot2."', pot3='".$pot3."', pot4='".$pot4."', pot5='".$pot5."', pot6='".$pot6."', pot7='".$pot7."', pot8='".$pot8."', pot9='".$pot9."', pot10='".$pot10."',
						orc_kills  = '".$orc_kills."', spider_kills='".$spider_kills."', zombie_kills='".$zombie_kills."', blob_kills='".$blob_kills."', beholder_kills='".$beholder_kills."', 
						q1    	  = '".$q1."', q2='".$q2."', q3='".$q3."', q4='".$q4."', q5='".$q5."', q6='".$q6."', q7='".$q7."', q8='".$q8."', q9='".$q9."', q10='".$q10."', 
						q1_prog 	  = '".$q1_prog."', q2_prog='".$q2_prog."', q3_prog='".$q3_prog."', q4_prog='".$q4_prog."', q5_prog='".$q5_prog."', q6_prog='".$q6_prog."', q7_prog='".$q7_prog."', q8_prog='".$q8_prog."', q9_prog='".$q9_prog."', q10_prog='".$q10_prog."',
						head    	  = '".$head."',
						chest   	  = '".$chest."',
						arms    	  = '".$arms."',
						legs    	  = '".$legs."',
						feet    	  = '".$feet."',
						right_hand = '".$right_hand."',
						left_hand  = '".$left_hand."'
				  WHERE id = '".$id."'"
				  ;

	if   (mysql_query($update, $connection)) { /* do nothing */ }
	else {echo "<p>Update failed.</p>"; echo "<p>" . mysql_error() . "</p>";}

	} // end else
?>