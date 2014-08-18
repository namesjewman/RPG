<?php
require_once("connection.php");

/**********************
*        Begin        *
*   Login Functions   *
**********************/

function validateUser() {session_regenerate_id (); $_SESSION['valid']=1; $_SESSION['userid']=$userid;}
function isLoggedIn()   {if(isset($_SESSION['username'])&&$_SESSION['username']) {return true;} else {return false;}}
function logout()	      {$_SESSION = array(); session_destroy();}

/**********************
*         End         *
*   Login Functions   *
**********************/

/**********************
*        Begin        *
*  account Functions  *
**********************/

function get_all_users() {
	global $connection;
	$query = "SELECT * FROM accounts ORDER BY username";
	$set   = mysql_query($query, $connection);
	confirm_query($set);
	return $set;
	}

function hasCharacters($id) {
	global $connection;
	$query = "SELECT * FROM characters WHERE account = \"{$id}\" ORDER BY name";
	$set   = mysql_query($query, $connection);
	confirm_query($set);
	
	$output = '<ul>';
	while ($char = mysql_fetch_array($set)) {
		$cName = $char["name"];
		$cId = $char["id"];
		$output .= '<li>'.$char["name"].'</li>';
		}
	$output .= '</ul>';
	return $output;
	}

/**********************
*         End         *
*  account Functions  *
**********************/

function mysql_prep($value) {
// Look for characters that will break mysql and fix them
	$magic_quotes_active = get_magic_quotes_gpc();
	$new_enough_php = function_exists("mysql_real_escape_string");
	if($new_enough_php) {
		if($magic_quotes_active) {$value = stripslashes($value);}
		}
	else {
		if (!magic_quotes_active) {$value = addslashes($value);}
	}
return $value;
}

function confirm_query($result_set)    {if (!$result_set) {die("Database query failed: " . mysql_error());}}
function redirect_to($location = NULL) {if ($location != NULL) {header("Location: {$location}"); exit;}}

function populate_stats($class) {
	switch ($class) {
		case "Archer":  $hp=20; $maxhp=20; $mana=20; $max_mana=20; $intel=10; $str=5;  $dex=10; $photo="characters/archer";  $image="32px -0px";   break; // Primary stat: dex  Sec: str
		case "Cleric":  $hp=15; $maxhp=15; $mana=40; $max_mana=40; $intel=10; $str=10; $dex=5;  $photo="characters/cleric";  $image="32px -20px";  break; // Primary stat: int  Sec: mana
		case "Knight":  $hp=30; $maxhp=30; $mana=12; $max_mana=12; $intel=5;  $str=10; $dex=8;  $photo="characters/knight";  $image="32px -40px";  break; // Primary stat: str  Sec: dex
		case "Mage":    $hp=15; $maxhp=15; $mana=40; $max_mana=40; $intel=10; $str=5;  $dex=5;  $photo="characters/mage";    $image="32px -60px";  break; // Primary stat: int  Sec: mana
		case "Necro":   $hp=15; $maxhp=15; $mana=40; $max_mana=40; $intel=10; $str=5;  $dex=5;  $photo="characters/necro";   $image="32px -80px";  break; // Primary stat: int  Sec: mana
		case "Paladin": $hp=25; $maxhp=25; $mana=30; $max_mana=30; $intel=10; $str=10; $dex=5;  $photo="characters/paladin"; $image="32px -100px"; break; // Primary stat: str  Sec: mana
		case "Rogue":   $hp=20; $maxhp=20; $mana=20; $max_mana=20; $intel=5;  $str=5;  $dex=10; $photo="characters/rogue";   $image="32px -120px"; break; // Primary stat: dex  Sec: str
		}
	$stats_array = array($hp, $maxhp, $mana, $max_mana ,$intel, $str, $dex, $photo, $image);
	return $stats_array;
	}

function get_char_info($id) {
	global $connection;
	$query = "SELECT * FROM characters WHERE account = \"{$id}\" ORDER BY name";
	$character_set = mysql_query($query, $connection);
	confirm_query($character_set);
	return $character_set;
	}

function character_list($id) {
	$left_output   = "<ul class=\"chars_left\">";
	$right_output  = "<ul class=\"chars_right\">";
	$character_set = get_char_info($id);
	while ($characters = mysql_fetch_array($character_set)) {
		$left_output .= "
		<li><input name=\"del{$characters["name"]}\" type=\"image\" src=\"backgrounds/delete.png\" value=\"Delete\" onClick=\"confirm_box('{$characters["id"]}');\">
			<a href=\"working/load_char.php?id={$characters["id"]}\">{$characters["name"]}</a>
		</li>";
		$right_output .= "<li>Level {$characters["level"]}  {$characters["class"]}</li>";
		}
	$left_output  .= "</ul>";
	$right_output .= "</ul>";
	$output = $left_output.$right_output;
	return $output;
	}

function get_abpoints($id) {
	global $connection;
	$query = "SELECT abpoints FROM characters WHERE id = \"{$id}\"";
	$result = mysql_query($query, $connection);
	confirm_query($result);
	if ($abpoints = mysql_fetch_array($result))
		{return $abpoints;}
	}

function get_character_info($charId) {
	global $connection;
	$query = "SELECT * FROM characters WHERE id = \"{$charId}\"";
	$result = mysql_query($query, $connection);
	confirm_query($result);
	if ($char_info = mysql_fetch_array($result))
		{return $char_info;}
	}

function create_loc() {
	$numb = 23;
	$numb2 = $numb*2;
	
	$output1 = rand(1, $numb-1);
	$output2 = rand(1, $numb2);
	$loc = $output1."_".$output2;
	$result= array("var1" => $output1, "var2" => $output2, "loc" => $loc,);
	return $result;
	}

function get_eq_data($playerId,$itemId) {
	global $connection;
	$query = "SELECT * FROM equipment WHERE id = \"{$itemId}\" AND charID = \"{$playerId}\"";
	$result = mysql_query($query, $connection);
	confirm_query($result);
	
	if ($equip_info = mysql_fetch_array($result)) {
		$pos = strpos($equip_info['slot'], 'item');
		if($pos === 0) { // if equipment is in inventory
			$output  = '<li id=\\"'.$equip_info['id'].'inv\\" class=\\"'.$equip_info['quality'].'\\" title=\\"('.$equip_info['type'].')   '.$equip_info['title'].'\\" onmouseout=\\"hide_li_buttons(\''.$equip_info['id'].'inv\')\\" onmouseover=\\"show_li_buttons(\''.$equip_info['id'].'inv\')\\">'.$equip_info['name'];
			$output .= '<a class=\\"itemequip\\" title=\\"Equip item\\" href=\\"javascript:item_manip(\'inv_eq\',\''.$equip_info['name'].'\',\''.$equip_info['attr1'].':'.$equip_info['stat1'].','.$equip_info['attr2'].':'.$equip_info['stat2'].','.$equip_info['attr3'].':'.$equip_info['stat3'].','.$equip_info['durability'].':'.$equip_info['modifier'].'\',\''.$equip_info['id'].'inv\',\''.$equip_info['type'].'\',\''.$equip_info['quality'].'\',\''.$equip_info['image'].'\',\''.$equip_info['title'].'\',\''.$equip_info['slot'].'\',\''.$equip_info['value'].'\')\\">Eq</a>';
			$output .= '<a class=\\"itemdelete\\" title=\\"Delete Item\\" href=\\"javascript:item_manip(\'del\',\''.$equip_info['id'].'inv\',\''.$equip_info['attr1'].':'.$equip_info['stat1'].','.$equip_info['attr2'].':'.$equip_info['stat2'].','.$equip_info['attr3'].':'.$equip_info['stat3'].','.$equip_info['durability'].':'.$equip_info['modifier'].'\', \''.$equip_info['slot'].'\')\\">X</a>';
			$output .= '<span class=\\"sellItem\\" onclick=\\"javascript:item_manip(\'sell\',\''.$equip_info['name'].'\',\''.$equip_info['title'].'\',\''.$equip_info['id'].'inv\',\''.$equip_info['type'].'\',\''.$equip_info['quality'].'\',\''.$equip_info['image'].'\',\''.$equip_info['title'].'\',\''.$equip_info['slot'].'\','.$equip_info['value'].')\\">SELL</span>';
			$output .= '</li>';
			}
		else { // if equipment is equipped
			$output  = '<li id=\\"'.$equip_info['id'].'equip\\" class=\\"'.$equip_info['quality'].'\\" onmouseout=\\"hide_li_buttons(\''.$equip_info['id'].'equip\')\\" onmouseover=\\"show_li_buttons(\''.$equip_info['id'].'equip\')\\">';
			$output .= '<a class=\\"iteminv\\" title=\\"Put in inventory\\" href=\\"javascript:item_manip(\'eq_inv\',\''.$equip_info['name'].'\',\''.$equip_info['attr1'].':'.$equip_info['stat1'].','.$equip_info['attr2'].':'.$equip_info['stat2'].','.$equip_info['attr3'].':'.$equip_info['stat3'].','.$equip_info['durability'].':'.$equip_info['modifier'].'\',\''.$equip_info['id'].'equip\',\''.$equip_info['type'].'\',\''.$equip_info['quality'].'\',\''.$equip_info['image'].'\',\''.$equip_info['title'].'\',\''.$equip_info['slot'].'\',\''.$equip_info['value'].'\')\\">Inv</a>';
			$output .= '<a class=\\"itemdelete\\" title=\\"Delete Item\\" href=\\"javascript:item_manip(\'del_eq\',\''.$equip_info['id'].'equip\',\''.$equip_info['attr1'].':'.$equip_info['stat1'].','.$equip_info['attr2'].':'.$equip_info['stat2'].','.$equip_info['attr3'].':'.$equip_info['stat3'].','.$equip_info['durability'].':'.$equip_info['modifier'].'\', \''.$equip_info['slot'].'\')\\" style=\\"display: none;\\">X</a>';
			$output .= '<img title=\\"'.$equip_info['title'].'\\" src=\\"'.$equip_info['image'].'\\">';
			$output .= '</li>';
			}
		return $output;
		}
	}

function create_head() {
	// select random location for the player
	$player_loc=create_loc(); $player=array(); $player["var1"]=$player_loc["var1"]; $player["var2"]=$player_loc["var2"]; $player["loc"]=$player_loc["loc"]; $playloc=$player_loc["loc"];
	// add all creature locations to $locked
	$locked[0] = $player_loc["loc"];
	// get the character information to create the js character array
	$char_info = get_character_info($_SESSION['char']);
	
	// get all the equipment information for inventory and currently equipped items
	$head_slot 		  = get_eq_data($char_info['id'],$char_info['head']);
	$chest_slot		  = get_eq_data($char_info['id'],$char_info['chest']);
	$arms_slot		  = get_eq_data($char_info['id'],$char_info['arms']);
	$legs_slot		  = get_eq_data($char_info['id'],$char_info['legs']);
	$feet_slot       = get_eq_data($char_info['id'],$char_info['feet']);
	$right_hand_slot = get_eq_data($char_info['id'],$char_info['right_hand']);
	$left_hand_slot  = get_eq_data($char_info['id'],$char_info['left_hand']);
	$item1_slot      = get_eq_data($char_info['id'],$char_info['item1']);
	$item2_slot		  = get_eq_data($char_info['id'],$char_info['item2']);
	$item3_slot		  = get_eq_data($char_info['id'],$char_info['item3']);
	$item4_slot		  = get_eq_data($char_info['id'],$char_info['item4']);
	$item5_slot	     = get_eq_data($char_info['id'],$char_info['item5']);
	$item6_slot		  = get_eq_data($char_info['id'],$char_info['item6']);
	$item7_slot 	  = get_eq_data($char_info['id'],$char_info['item7']);
	$item8_slot		  = get_eq_data($char_info['id'],$char_info['item8']);
	$item9_slot		  = get_eq_data($char_info['id'],$char_info['item9']);
	$item10_slot	  = get_eq_data($char_info['id'],$char_info['item10']);

	// Get and modify quest info
	$q1=$q2=$q3=$q4=$q5=$q6=$q7=$q8=$q9=$q10 = array();
	$q1  = get_quest_data($char_info['q1']);  $qTest1 = explode(",", $char_info['q1_prog']);   if (count($qTest1)>1)  { $char_info['q1_prog'] = $qTest1;  }
	$q2  = get_quest_data($char_info['q2']);  $qTest2 = explode(",", $char_info['q2_prog']);   if (count($qTest2)>1)  { $char_info['q2_prog'] = $qTest2; }
	$q3  = get_quest_data($char_info['q3']);  $qTest3 = explode(",", $char_info['q3_prog']);   if (count($qTest3)>1)  { $char_info['q3_prog'] = $qTest3; }
	$q4  = get_quest_data($char_info['q4']);  $qTest4 = explode(",", $char_info['q4_prog']);   if (count($qTest4)>1)  { $char_info['q4_prog'] = $qTest4; }
	$q5  = get_quest_data($char_info['q5']);  $qTest5 = explode(",", $char_info['q5_prog']);   if (count($qTest5)>1)  { $char_info['q5_prog'] = $qTest5; }
	$q6  = get_quest_data($char_info['q6']);  $qTest6 = explode(",", $char_info['q6_prog']);   if (count($qTest6)>1)  { $char_info['q6_prog'] = $qTest6; }
	$q7  = get_quest_data($char_info['q7']);  $qTest7 = explode(",", $char_info['q7_prog']);   if (count($qTest7)>1)  { $char_info['q7_prog'] = $qTest7; }
	$q8  = get_quest_data($char_info['q8']);  $qTest8 = explode(",", $char_info['q8_prog']);   if (count($qTest8)>1)  { $char_info['q8_prog'] = $qTest8; }
	$q9  = get_quest_data($char_info['q9']);  $qTest9 = explode(",", $char_info['q9_prog']);   if (count($qTest9)>1)  { $char_info['q9_prog'] = $qTest9; }
	$q10 = get_quest_data($char_info['q10']); $qTest10 = explode(",", $char_info['q10_prog']); if (count($qTest10)>1) { $char_info['q10_prog'] = $qTest10; }

	// adjust for arrays in quest data
	if ($q1!='') {
		$q1['id']=$q1[0]; $q1['name']=$q1[1]; $q1['description']=$q1[2];
		if (is_array($q1[3])) { $q1['track']=array(); $q1['track']=$q1[3]; $q1['progress']=array(); $q1['progress']=$char_info['q1_prog']; $q1['complete']=array(); $q1['complete']=$q1[4]; }
		else { $q1['track']=$q1[3]; if ($q1[4]=='complete') { $q1['complete']='complete'; } else { $q1['complete']=$q1[4]; } } unset($q1[0], $q1[1], $q1[2], $q1[3], $q1[4], $q1[5], $q1[6], $q1[7]);
		}
	if ($q2!='') {
		$q2['id']=$q2[0]; $q2['name']=$q2[1]; $q2['description']=$q2[2];
		if (is_array($q2[3])) { $q2['track']=array(); $q2['track']=$q2[3]; $q2['progress']=array(); $q2['progress']=$char_info['q2_prog']; $q2['complete']=array(); $q2['complete']=$q2[4]; }
		else { $q2['track']=$q2[3]; if ($q2[4]=='complete') { $q2['complete']='"'.$q2[5].'"'; } else { $q2['complete']=$q2[4]; } } unset($q2[0], $q2[1], $q2[2], $q2[3], $q2[4], $q2[5], $q2[6], $q2[7]);
		}
	if ($q3!='') {
		$q3['id']=$q3[0]; $q3['name']=$q3[1]; $q3['description']=$q3[2];
		if (is_array($q3[3])) { $q3['track']=array(); $q3['track']=$q3[3]; $q3['progress']=array(); $q3['progress']=$char_info['q3_prog']; $q3['complete']=array(); $q3['complete']=$q3[4]; }
		else { $q3['track']=$q3[3]; if ($q3[4]=='complete') { $q3['complete']='complete'; } else { $q3['complete']=$q3[4]; } }	unset($q3[0], $q3[1], $q3[2], $q3[3], $q3[4], $q3[5], $q3[6], $q3[7]);
		}
	if ($q4!='') {
		$q4['id']=$q4[0]; $q4['name']=$q4[1]; $q4['description']=$q4[2];
		if (is_array($q4[3])) { $q4['track']=array(); $q4['track']=$q4[3]; $q4['progress']=array(); $q4['progress']=$char_info['q4_prog']; $q4['complete']=array(); $q4['complete']=$q4[4]; }
		else { $q4['track']=$q4[3]; if ($q4[4]=='complete') { $q4['complete']='complete'; } else { $q4['complete']=$q4[4]; } }	unset($q4[0], $q4[1], $q4[2], $q4[3], $q4[4], $q4[5], $q4[6], $q4[7]);
		}
	if ($q5!='') {
		$q5['id']=$q5[0]; $q5['name']=$q5[1]; $q5['description']=$q5[2];
		if (is_array($q5[3])) { $q5['track']=array(); $q5['track']=$q5[3]; $q5['progress']=array(); $q5['progress']=$char_info['q5_prog']; $q5['complete']=array(); $q5['complete']=$q5[4]; }
		else { $q5['track']=$q5[3]; if ($q5[4]=='complete') { $q5['complete']='complete'; } else { $q5['complete']=$q5[4]; } }	unset($q5[0], $q5[1], $q5[2], $q5[3], $q5[4], $q5[5], $q5[6], $q5[7]);
		}
	if ($q6!='') {
		$q6['id']=$q6[0]; $q6['name']=$q6[1]; $q6['description']=$q6[2];
		if (is_array($q6[3])) { $q6['track']=array(); $q6['track']=$q6[3]; $q6['progress']=array(); $q6['progress']=$char_info['q6_prog']; $q6['complete']=array(); $q6['complete']=$q6[4]; }
		else { $q6['track']=$q6[3]; if ($q6[4]=='complete') { $q6['complete']='complete'; } else { $q6['complete']=$q6[4]; } }	unset($q6[0], $q6[1], $q6[2], $q6[3], $q6[4], $q6[5], $q6[6], $q6[7]);
		}
	if ($q7!='') {
		$q7['id']=$q7[0]; $q7['name']=$q7[1]; $q7['description']=$q7[2];
		if (is_array($q7[3])) { $q7['track']=array(); $q7['track']=$q7[3]; $q7['progress']=array(); $q7['progress']=$char_info['q7_prog']; $q7['complete']=array(); $q7['complete']=$q7[4]; }
		else { $q7['track']=$q7[3]; if ($q7[4]=='complete') { $q7['complete']='complete'; } else { $q7['complete']=$q7[4]; } }	unset($q7[0], $q7[1], $q7[2], $q7[3], $q7[4], $q7[5], $q7[6], $q7[7]);
		}
	if ($q8!='') {
		$q8['id']=$q8[0]; $q8['name']=$q8[1]; $q8['description']=$q8[2];
		if (is_array($q8[3])) { $q8['track']=array(); $q8['track']=$q8[3]; $q8['progress']=array(); $q8['progress']=$char_info['q8_prog']; $q8['complete']=array(); $q8['complete']=$q8[4]; }
		else { $q8['track']=$q8[3]; if ($q8[4]=='complete') { $q8['complete']='complete'; } else { $q8['complete']=$q8[4]; } }	unset($q8[0], $q8[1], $q8[2], $q8[3], $q8[4], $q8[5], $q8[6], $q8[7]);
		}
	if ($q9!='') {
		$q9['id']=$q9[0]; $q9['name']=$q9[1]; $q9['description']=$q9[2];
		if (is_array($q9[3])) { $q9['track']=array(); $q9['track']=$q9[3]; $q9['progress']=array(); $q9['progress']=$char_info['q9_prog']; $q9['complete']=array(); $q9['complete']=$q9[4]; }
		else { $q9['track']=$q9[3]; if ($q9[4]=='complete') { $q9['complete']='complete'; } else { $q9['complete']=$q9[4]; } }	unset($q9[0], $q9[1], $q9[2], $q9[3], $q9[4], $q9[5], $q9[6], $q9[7]);
		}
	if ($q10!='') {
		$q10['id']=$q10[0]; $q10['name']=$q10[1]; $q10['description']=$q10[2];
		if (is_array($q10[3])) { $q10['track']=array(); $q10['track']=$q10[3]; $q10['progress']=array(); $q10['progress']=$char_info['q0_prog']; $q10['complete']=array(); $q10['complete']=$q10[4]; }
		else { $q10['track']=$q10[3]; if ($q10[4]=='complete') { $q10['complete']='complete'; } else { $q10['complete']=$q10[4]; } } unset($q10[0], $q10[1], $q10[2], $q10[3], $q10[4], $q10[5], $q10[6], $q10[7]);
		}

	echo "
	<script>
	 var player=[];
	 player[\"id\"]=\"".$char_info['id']."\"; player[\"var1\"]=\"".$player["var1"]."\"; player[\"oldvar1\"]=\"".$player["var1"]."\"; player[\"var2\"]=\"".$player["var2"]."\"; player[\"oldvar2\"]=\"".$player["var2"]."\"; player[\"loc\"]=\"".$player["loc"]."\"; player[\"backup_loc\"]=\"".$player["loc"]."\"; player[\"oldloc\"]=\"".$player["loc"]."\"; player[\"castle\"]=\"".$char_info["castle"]."\"; player[\"image\"]=\"".$char_info["image"]."\"; player[\"oldimage\"]=\"".$char_info["image"]."\"; player[\"backup_image\"]=\"".$char_info["image"]."\"; player[\"photo\"]=\"".$char_info["photo"]."\"; 
	 player[\"name\"]=\"".$char_info['name']."\"; player[\"class\"]=\"".$char_info['class']."\"; player[\"level\"]=".$char_info['level']."; player[\"charexp\"]=".$char_info["charexp"]."; player[\"next_level\"]=".$char_info["next_level"]."; player[\"attack\"]=0; player[\"mattack\"]=0; player[\"defense\"]=0; player[\"mdefense\"]=0; player[\"crit\"]=".$char_info['crit']."; player[\"gold\"]=".$char_info['gold']."; player[\"armor\"]=".$char_info['armor']."; player[\"ward\"]=".$char_info['ward'].";
	 player[\"rockcnt\"]=1; player[\"treecnt\"]=1; player[\"watercnt\"]=1; player[\"hp\"]=".$char_info['hp']."; player[\"max_hp\"]=".$char_info['max_hp']."; player[\"intel\"]=".$char_info['intel']."; player[\"mana\"]=".$char_info['mana']."; player[\"max_mana\"]=".$char_info['max_mana']."; player[\"str\"]=".$char_info['str']."; player[\"dex\"]=".$char_info['dex']."; player[\"abpoints\"]=".$char_info['abpoints'].";
	 player[\"item1\"]=\"".$char_info['item1']."\"; player[\"item2\"]=\"".$char_info['item2']."\"; player[\"item3\"]=\"".$char_info['item3']."\"; player[\"item4\"]=\"".$char_info['item4']."\"; player[\"item5\"]=\"".$char_info['item5']."\"; player[\"item6\"]=\"".$char_info['item6']."\"; player[\"item7\"]=\"".$char_info['item7']."\"; player[\"item8\"]=\"".$char_info['item8']."\"; player[\"item9\"]=\"".$char_info['item9']."\"; player[\"item10\"]=\"".$char_info['item10']."\";
	 player[\"gear1\"]=\"".$char_info['gear1']."\"; player[\"gear2\"]=\"".$char_info['gear2']."\"; player[\"gear3\"]=\"".$char_info['gear3']."\"; player[\"gear4\"]=\"".$char_info['gear4']."\"; player[\"gear5\"]=\"".$char_info['gear5']."\"; player[\"gear6\"]=\"".$char_info['gear6']."\"; player[\"gear7\"]=\"".$char_info['gear7']."\"; player[\"gear8\"]=\"".$char_info['gear8']."\"; player[\"gear9\"]=\"".$char_info['gear9']."\"; player[\"gear10\"]=\"".$char_info['gear10']."\";
	 player[\"g1\"]=\"".$char_info['g1']."\"; player[\"g2\"]=\"".$char_info['g2']."\"; player[\"g3\"]=\"".$char_info['g3']."\"; player[\"g4\"]=\"".$char_info['g4']."\"; player[\"g5\"]=\"".$char_info['g5']."\"; player[\"g6\"]=\"".$char_info['g6']."\"; player[\"g7\"]=\"".$char_info['g7']."\"; player[\"g8\"]=\"".$char_info['g8']."\"; player[\"g9\"]=\"".$char_info['g9']."\"; player[\"g10\"]=\"".$char_info['g10']."\";
	 player[\"pot1\"]=\"".$char_info['pot1']."\"; player[\"pot2\"]=\"".$char_info['pot2']."\"; player[\"pot3\"]=\"".$char_info['pot3']."\"; player[\"pot4\"]=\"".$char_info['pot4']."\"; player[\"pot5\"]=\"".$char_info['pot5']."\"; player[\"pot6\"]=\"".$char_info['pot6']."\"; player[\"pot7\"]=\"".$char_info['pot7']."\"; player[\"pot8\"]=\"".$char_info['pot8']."\"; player[\"pot9\"]=\"".$char_info['pot9']."\"; player[\"pot10\"]=\"".$char_info['pot10']."\";
	 player[\"ab1\"]=\"".$char_info['ab1']."\"; player[\"ab2\"]=\"".$char_info['ab2']."\"; player[\"ab3\"]=\"".$char_info['ab3']."\"; player[\"ab4\"]=\"".$char_info['ab4']."\"; player[\"ab5\"]=\"".$char_info['ab5']."\"; player[\"ab6\"]=\"".$char_info['ab6']."\"; player[\"ab7\"]=\"".$char_info['ab7']."\"; player[\"ab8\"]=\"".$char_info['ab8']."\"; player[\"ab9\"]=\"".$char_info['ab9']."\"; player[\"ab10\"]=\"".$char_info['ab10']."\";
	 player[\"head\"]=\"".$char_info['head']."\"; player[\"chest\"]=\"".$char_info['chest']."\"; player[\"arms\"]=\"".$char_info['arms']."\"; player[\"legs\"]=\"".$char_info['legs']."\"; player[\"feet\"]=\"".$char_info['feet']."\"; player[\"right_hand\"]=\"".$char_info['right_hand']."\"; player[\"left_hand\"]=\"".$char_info['left_hand']."\"; player[\"zombie_kills\"]=".$char_info['zombie_kills']."; player[\"orc_kills\"]=".$char_info['orc_kills']."; player[\"blob_kills\"]=".$char_info['blob_kills']."; player[\"beholder_kills\"]=".$char_info['beholder_kills']."; player[\"spider_kills\"]=".$char_info['spider_kills'].";
 	 
	 player[\"q1\"]=\"".$q1['name']."\"; player[\"q2\"]=\"".$q2['name']."\"; player[\"q3\"]=\"".$q3['name']."\"; player[\"q4\"]=\"".$q4['name']."\"; player[\"q5\"]=\"".$q5['name']."\"; player[\"q6\"]=\"".$q6['name']."\"; player[\"q7\"]=\"".$q7['name']."\"; player[\"q8\"]=\"".$q8['name']."\"; player[\"q9\"]=\"".$q9['name']."\"; player[\"q10\"]=\"".$q10['name']."\";
	 player[\"q1_id\"]=\"".$q1['id']."\"; player[\"q2_id\"]=\"".$q2['id']."\"; player[\"q3_id\"]=\"".$q3['id']."\"; player[\"q4_id\"]=\"".$q4['id']."\"; player[\"q5_id\"]=\"".$q5['id']."\"; player[\"q6_id\"]=\"".$q6['id']."\"; player[\"q7_id\"]=\"".$q7['id']."\"; player[\"q8_id\"]=\"".$q8['id']."\"; player[\"q9_id\"]=\"".$q9['id']."\"; player[\"q10_id\"]=\"".$q10['id']."\"; 
	 player[\"q1_desc\"]=\"".$q1['description']."\"; player[\"q2_desc\"]=\"".$q2['description']."\"; player[\"q3_desc\"]=\"".$q3['description']."\"; player[\"q4_desc\"]=\"".$q4['description']."\"; player[\"q5_desc\"]=\"".$q5['description']."\"; player[\"q6_desc\"]=\"".$q6['description']."\"; player[\"q7_desc\"]=\"".$q7['description']."\"; player[\"q8_desc\"]=\"".$q8['description']."\"; player[\"q9_desc\"]=\"".$q9['description']."\"; player[\"q10_desc\"]=\"".$q10['description']."\"; 
	 player[\"q1_exp\"]=\"".$q1['exp']."\"; player[\"q2_exp\"]=\"".$q2['exp']."\"; player[\"q3_exp\"]=\"".$q3['exp']."\"; player[\"q4_exp\"]=\"".$q4['exp']."\"; player[\"q5_exp\"]=\"".$q5['exp']."\"; player[\"q6_exp\"]=\"".$q6['exp']."\"; player[\"q7_exp\"]=\"".$q7['exp']."\"; player[\"q8_exp\"]=\"".$q8['exp']."\"; player[\"q9_exp\"]=\"".$q9['exp']."\"; player[\"q10_exp\"]=\"".$q10['exp']."\";
	 player[\"q1_gold\"]=\"".$q1['gold']."\"; player[\"q2_gold\"]=\"".$q2['gold']."\"; player[\"q3_gold\"]=\"".$q3['gold']."\"; player[\"q4_gold\"]=\"".$q4['gold']."\"; player[\"q5_gold\"]=\"".$q5['gold']."\"; player[\"q6_gold\"]=\"".$q6['gold']."\"; player[\"q7_gold\"]=\"".$q7['gold']."\"; player[\"q8_gold\"]=\"".$q8['gold']."\"; player[\"q9_gold\"]=\"".$q9['gold']."\"; player[\"q10_gold\"]=\"".$q10['gold']."\";
	 player[\"q1_orig\"]=\"".$q1['origin']."\"; player[\"q2_orig\"]=\"".$q2['origin']."\"; player[\"q3_orig\"]=\"".$q3['origin']."\"; player[\"q4_orig\"]=\"".$q4['origin']."\"; player[\"q5_orig\"]=\"".$q5['origin']."\"; player[\"q6_orig\"]=\"".$q6['origin']."\"; player[\"q7_orig\"]=\"".$q7['origin']."\"; player[\"q8_orig\"]=\"".$q8['origin']."\"; player[\"q9_orig\"]=\"".$q9['origin']."\"; player[\"q10_orig\"]=\"".$q10['origin']."\"; 
	 ";

	 $q1output=$q2output=$q3output=$q4output=$q5output=$q6output=$q7output=$q8output=$q9output=$q10output='';
	 if (is_array($q1['track']))  { echo "player['q1_track']=[]; player['q1_prog']=[]; player['q1_comp']=[]; "; for ($x=0;$x<count($q1['track']);$x++)  { echo "player['q1_track'][".$x."]=\"".$q1['track'][$x]."\"; player['q1_prog'][".$x."]=".$char_info['q1_prog'][$x]."; player['q1_comp'][".$x."]=".$q1['complete'][$x].";"; } }
	 else { echo "player['q1_track']=\"".$q1['track']."\";"; if ($char_info['q1_prog']!='undefined') { if (is_int($char_info['q1_prog'])) { echo "player['q1_prog']=".$char_info['q1_prog']."; player['q1_comp']=".$q1['complete']."; "; } else { echo "player['q1_prog']=\"".$char_info['q1_prog']."\"; player['q1_comp']=\"".$q1['complete']."\"; "; } } }
	 if (is_array($q2['track']))  { echo "player['q2_track']=[]; player['q2_prog']=[]; player['q2_comp']=[]; "; for ($x=0;$x<count($q2['track']);$x++)  { echo "player['q2_track'][".$x."]=\"".$q2['track'][$x]."\"; player['q2_prog'][".$x."]=".$char_info['q2_prog'][$x]."; player['q2_comp'][".$x."]=".$q2['complete'][$x].";"; } }
	 else { echo "player['q2_track']=\"".$q2['track']."\";"; if ($char_info['q2_prog']!='undefined') { if (is_int($char_info['q2_prog'])) { echo "player['q2_prog']=".$char_info['q2_prog']."; player['q2_comp']=".$q2['complete']."; "; } else { echo "player['q2_prog']=\"".$char_info['q2_prog']."\"; player['q2_comp']=\"".$q2['complete']."\"; "; } } }
	 if (is_array($q3['track']))  { echo "player['q3_track']=[]; player['q3_prog']=[]; player['q3_comp']=[]; "; for ($x=0;$x<count($q3['track']);$x++)  { echo "player['q3_track'][".$x."]=\"".$q3['track'][$x]."\"; player['q3_prog'][".$x."]=".$char_info['q3_prog'][$x]."; player['q3_comp'][".$x."]=".$q3['complete'][$x].";"; } }
	 else { echo "player['q3_track']=\"".$q3['track']."\";"; if ($char_info['q3_prog']!='undefined') { if (is_int($char_info['q3_prog'])) { echo "player['q3_prog']=".$char_info['q3_prog']."; player['q3_comp']=".$q3['complete']."; "; } else { echo "player['q3_prog']=\"".$char_info['q3_prog']."\"; player['q3_comp']=\"".$q3['complete']."\"; "; } } }
	 if (is_array($q4['track']))  { echo "player['q4_track']=[]; player['q4_prog']=[]; player['q4_comp']=[]; "; for ($x=0;$x<count($q4['track']);$x++)  { echo "player['q4_track'][".$x."]=\"".$q4['track'][$x]."\"; player['q4_prog'][".$x."]=".$char_info['q4_prog'][$x]."; player['q4_comp'][".$x."]=".$q4['complete'][$x].";"; } }
	 else { echo "player['q4_track']=\"".$q4['track']."\";"; if ($char_info['q4_prog']!='undefined') { if (is_int($char_info['q4_prog'])) { echo "player['q4_prog']=".$char_info['q4_prog']."; player['q4_comp']=".$q4['complete']."; "; } else { echo "player['q4_prog']=\"".$char_info['q4_prog']."\"; player['q4_comp']=\"".$q4['complete']."\"; "; } } }
	 if (is_array($q5['track']))  { echo "player['q5_track']=[]; player['q5_prog']=[]; player['q5_comp']=[]; "; for ($x=0;$x<count($q5['track']);$x++)  { echo "player['q5_track'][".$x."]=\"".$q5['track'][$x]."\"; player['q5_prog'][".$x."]=".$char_info['q5_prog'][$x]."; player['q5_comp'][".$x."]=".$q5['complete'][$x].";"; } }
	 else { echo "player['q5_track']=\"".$q5['track']."\";"; if ($char_info['q5_prog']!='undefined') { if (is_int($char_info['q5_prog'])) { echo "player['q5_prog']=".$char_info['q5_prog']."; player['q5_comp']=".$q5['complete']."; "; } else { echo "player['q5_prog']=\"".$char_info['q5_prog']."\"; player['q5_comp']=\"".$q5['complete']."\"; "; } } }
	 if (is_array($q6['track']))  { echo "player['q6_track']=[]; player['q6_prog']=[]; player['q6_comp']=[]; "; for ($x=0;$x<count($q6['track']);$x++)  { echo "player['q6_track'][".$x."]=\"".$q6['track'][$x]."\"; player['q6_prog'][".$x."]=".$char_info['q6_prog'][$x]."; player['q6_comp'][".$x."]=".$q6['complete'][$x].";"; } }
	 else { echo "player['q6_track']=\"".$q6['track']."\";"; if ($char_info['q6_prog']!='undefined') { if (is_int($char_info['q6_prog'])) { echo "player['q6_prog']=".$char_info['q6_prog']."; player['q6_comp']=".$q6['complete']."; "; } else { echo "player['q6_prog']=\"".$char_info['q6_prog']."\"; player['q6_comp']=\"".$q6['complete']."\"; "; } } }
	 if (is_array($q7['track']))  { echo "player['q7_track']=[]; player['q7_prog']=[]; player['q7_comp']=[]; "; for ($x=0;$x<count($q7['track']);$x++)  { echo "player['q7_track'][".$x."]=\"".$q7['track'][$x]."\"; player['q7_prog'][".$x."]=".$char_info['q7_prog'][$x]."; player['q7_comp'][".$x."]=".$q7['complete'][$x].";"; } }
	 else { echo "player['q7_track']=\"".$q7['track']."\";"; if ($char_info['q7_prog']!='undefined') { if (is_int($char_info['q7_prog'])) { echo "player['q7_prog']=".$char_info['q7_prog']."; player['q7_comp']=".$q7['complete']."; "; } else { echo "player['q7_prog']=\"".$char_info['q7_prog']."\"; player['q7_comp']=\"".$q7['complete']."\"; "; } } }
	 if (is_array($q8['track']))  { echo "player['q8_track']=[]; player['q8_prog']=[]; player['q8_comp']=[]; "; for ($x=0;$x<count($q8['track']);$x++)  { echo "player['q8_track'][".$x."]=\"".$q8['track'][$x]."\"; player['q8_prog'][".$x."]=".$char_info['q8_prog'][$x]."; player['q8_comp'][".$x."]=".$q8['complete'][$x].";"; } }
	 else { echo "player['q8_track']=\"".$q8['track']."\";"; if ($char_info['q8_prog']!='undefined') { if (is_int($char_info['q8_prog'])) { echo "player['q8_prog']=".$char_info['q8_prog']."; player['q8_comp']=".$q8['complete']."; "; } else { echo "player['q8_prog']=\"".$char_info['q8_prog']."\"; player['q8_comp']=\"".$q8['complete']."\"; "; } } }
	 if (is_array($q9['track']))  { echo "player['q9_track']=[]; player['q9_prog']=[]; player['q9_comp']=[]; "; for ($x=0;$x<count($q9['track']);$x++)  { echo "player['q9_track'][".$x."]=\"".$q9['track'][$x]."\"; player['q9_prog'][".$x."]=".$char_info['q9_prog'][$x]."; player['q9_comp'][".$x."]=".$q9['complete'][$x].";"; } }
	 else { echo "player['q9_track']=\"".$q9['track']."\";"; if ($char_info['q9_prog']!='undefined') { if (is_int($char_info['q9_prog'])) { echo "player['q9_prog']=".$char_info['q9_prog']."; player['q9_comp']=".$q9['complete']."; "; } else { echo "player['q9_prog']=\"".$char_info['q9_prog']."\"; player['q9_comp']=\"".$q9['complete']."\"; "; } } }
	 if (is_array($q10['track'])) { echo "player['q10_track']=[]; player['q10_prog']=[]; player['q10_comp']=[]; "; for ($x=0;$x<count($q10['track']);$x++) { echo "player['q10_track'][".$x."]=\"".$q10['track'][$x]."\"; player['q10_prog'][".$x."]=".$char_info['q10_prog'][$x]."; player['q10_comp'][".$x."]=".$q10['complete'][$x].";"; } }
	 else { echo "player['q10_track']=\"".$q10['track']."\";"; if ($char_info['q10_prog']!='undefined') { if (is_int($char_info['q10_prog'])) { echo "player['q10_prog']=".$char_info['q10_prog']."; player['q10_comp']=".$q10['complete']."; "; } else { echo "player['q10_prog']=\"".$char_info['q10_prog']."\"; player['q10_comp']=\"".$q10['complete']."\"; "; } } }

	 /* look for speachcraft */
	 $speach='no';
	 switch('Speachcraft') { case $char_info['ab1']: $speach='yes'; break; case $char_info['ab2']: $speach='yes'; break; case $char_info['ab3']: $speach='yes'; break; case $char_info['ab4']: $speach='yes'; break; case $char_info['ab5']: $speach='yes'; break; case $char_info['ab6']: $speach='yes'; break; case $char_info['ab7']: $speach='yes'; break; case $char_info['ab8']: $speach='yes'; break; case $char_info['ab9']: $speach='yes'; break; case $char_info['ab10']: $speach='yes'; break; }

	 echo "
	 var head_slot=\"".$head_slot."\"; var chest_slot=\"".$chest_slot."\"; var arms_slot=\"".$arms_slot."\"; var legs_slot=\"".$legs_slot."\"; var feet_slot=\"".$feet_slot."\"; var right_hand_slot=\"".$right_hand_slot."\"; var left_hand_slot=\"".$left_hand_slot."\";
	 var item1_slot=\"".$item1_slot."\"; var item2_slot=\"".$item2_slot."\"; var item3_slot=\"".$item3_slot."\"; var item4_slot=\"".$item4_slot."\"; var item5_slot=\"".$item5_slot."\"; var item6_slot=\"".$item6_slot."\"; var item7_slot=\"".$item7_slot."\"; var item8_slot=\"".$item8_slot."\"; var item9_slot=\"".$item9_slot."\"; var item10_slot=\"".$item10_slot."\";
	 var start_count=\"1\"; var left_menu=\"main\"; var Speachcraft=\"".$speach."\"; var hover_array=[]; var fire_array=[]; var loot_array=[]; var treasure_array=[]; var locked=[]; var changeVar=[]; var temp_monster=[]; var range1=[]; var range1and2=[]; var range2=[]; var range3=[]; var spell_range=[]; var melee_range=[];
	 var active_ability=active_AoE=Pound=Leap=Jump=Pounce=Cyclone=Bash=Hunker=Defensive=Frenzy=Manic=Berserk=Precision=Rigor=Affliction=Incinerate=Bubble=Shield=Wall=Singe=Fireball=Firestorm=Peak=Uncover=Reveal=Teleport=Jump=active_cancel=\"no\";\n
	 var tempVar=movement=portal=mapQuest=shop=\"\";";

	 if (!isset($_SESSION['castle'])) {
		 echo "var temp_monster=[];\n";
		 $cL = $char_info['level'];
		 if ($cL>10) { $cL=10; }
		 $number_of_monsters = $cL * 5;
		 create_monsters($number_of_monsters,$player_loc["loc"], $cL);
		 }
	 echo "</script>";
	}

function modStat($n,$cL) {	if($cL!=1){$o=(ceil($n/6)*$cL)+$n; return $o;} else {return $n;} }

function create_monsters($number_of_monsters,$player_loc, $cL) {

	$locked    = array();
	$locked[0] = $player_loc;
	$m_array   = array('zombie','zombie','zombie','orc','orc','orc','blob','blob','blob','spider','spider','spider','spider','beholder');

	for ($i=1;$i<$number_of_monsters+1;$i++) {
		$x=rand(0, count($m_array)-1);
		$m_type=$m_array[$x];
		switch ($m_type) {        /* If these ever change the javascript function create_monster() also needs to change */
			case "zombie":   $type="zombie";   $attack=modStat(7,$cL); $mattack=modStat(3,$cL); $defense=modStat(4,$cL); $mdefense=modStat(3,$cL); $hp=modStat(12,$cL); $image="16px -80px"; $exp_gain='"'+modStat(2,$cL/2)+'"'; break;
			case "orc":      $type="orc";      $attack=modStat(7,$cL); $mattack=modStat(4,$cL); $defense=modStat(4,$cL); $mdefense=modStat(3,$cL); $hp=modStat(15,$cL); $image="16px -40px"; $exp_gain='"'+modStat(4,$cL/2)+'"'; break;
			case "blob":     $type="blob";     $attack=modStat(6,$cL); $mattack=modStat(5,$cL); $defense=modStat(3,$cL); $mdefense=modStat(2,$cL); $hp=modStat(12,$cL); $image="16px -20px"; $exp_gain='"'+modStat(2,$cL/2)+'"'; break;
			case "spider":   $type="spider";   $attack=modStat(5,$cL); $mattack=modStat(4,$cL); $defense=modStat(3,$cL); $mdefense=modStat(2,$cL); $hp=modStat(10,$cL); $image="16px -60px"; $exp_gain='"'+modStat(3,$cL/2)+'"'; break;
			case "beholder": $type="beholder"; $attack=modStat(9,$cL); $mattack=modStat(7,$cL); $defense=modStat(4,$cL); $mdefense=modStat(6,$cL); $hp=modStat(18,$cL); $image="16px 0px";   $exp_gain='"'+modStat(7,$cL/2)+'"'; break;
			}
		$m_loc=create_loc();

		if(is_array($locked)) { //make sure all locs are different
			if (in_array($m_loc["loc"], $locked)) {
				while (in_array($m_loc["loc"], $locked)) {$m_loc=create_loc();}
				}
				array_push($locked, $m_loc["loc"]);
			}

	 	// create the new monster
		echo "var monster".$i."=new Array();\n";
		echo 'monster'.$i.'[0]="'.$type.'";';          // 0:  monster type
		echo 'monster'.$i.'[1]="'.$m_loc["var1"].'";'; // 1:  var1
		echo 'monster'.$i.'[2]="'.$m_loc["var2"].'";'; // 2:  var2
		echo 'monster'.$i.'[3]="'.$m_loc["loc"].'";';  // 3:  loc        current location of the monster
		echo 'monster'.$i.'[4]="'.$m_loc["loc"].'";';  // 4:  oldloc     the last location of the monster
		echo 'monster'.$i.'[5]="'.$attack.'";';        // 5:  attack power (ranged and melee)
		echo 'monster'.$i.'[6]="'.$mattack.'";';       // 6:  magical attack power
		echo 'monster'.$i.'[7]="'.$defense.'";';       // 7:  defense against physical attacks
		echo 'monster'.$i.'[8]="'.$mdefense.'";';      // 8:  defense against magical attacks
		echo 'monster'.$i.'[9]="'.$hp.'";';            // 9:  hit points
		echo 'monster'.$i.'[10]=1;';                   // 10: rockcnt
		echo 'monster'.$i.'[11]=1;';                   // 11: treecnt
		echo 'monster'.$i.'[12]=1;';                   // 12: watercnt
		echo 'monster'.$i.'[13]="'.$image.'";';        // 13: image       the background location needed for the monster
		echo 'monster'.$i.'[14]="";';                  // 14: oldimage
		echo 'monster'.$i.'[15]=0;';                   // 15: hold        a number that represents how long the monster will be stunned
		echo 'monster'.$i.'[16]="no";';                // 16: found       whether or not the creature has been found by the player, this is set to "yes" or "no"
		echo 'monster'.$i.'[17]="";';                  // 17: oldvar1
		echo 'monster'.$i.'[18]="";';                  // 18: oldvar2
		echo 'monster'.$i.'[19]="";';                  // 19: backup_loc
		echo 'monster'.$i.'[20]="'.$exp_gain.'";';     // 20: exp_gain
		echo "monster".$i."[21]='';\n";                // 21: effect      poison
		}
	}

function getCastleQuests($char_info) {
	$pQuests = ',,'.$char_info['q1'].','.$char_info['q2'].','.$char_info['q3'].','.$char_info['q4'].','.$char_info['q5'].','.$char_info['q6'].','.$char_info['q7'].','.$char_info['q8'].','.$char_info['q9'].','.$char_info['q10'].',';
	$KillQuests = array('mt',',1,',',2,',',3,',',4,','mt',',5,',',6,',',7,',',8,','mt',',9,',',10,',',11,',',12,','mt',',13,',',14,',',15,',',16,','mt',',17,',',18,',',19,',',20,');
	$newJobs=$prevJobs=array();
	for ($i=0;$i<count($KillQuests);$i++) { // mark all quests that are done
		$result = strpos($char_info['q_comp'], $KillQuests[$i]); if ($result!='') { $KillQuests[$i]='done'; }
		}
	for ($i=0;$i<count($KillQuests);$i++) { // find quests that are currently active and grab the next one in line
		$result = strpos($pQuests, $KillQuests[$i]);
		if ($result!='') {
			$rep = str_replace(',', '', $KillQuests[$i+1]);
			if ($KillQuests[$i+1]!='mt') {
				$KillQuests[$i+1] = intval($rep);
				$prev = str_replace(',', '', $KillQuests[$i]);
				array_push($prevJobs, $prev);
				array_push($newJobs, $KillQuests[$i+1]);
				$KillQuests[$i] = 'active';
				}
			}
		}
	if (count($newJobs)<5) {
		for ($i=0;$i<count($KillQuests);$i++) { // find any quest chains that have not yet begun
			$result = strpos($KillQuests[$i], 'mt');
			if ($result===0) {
				$x=$i; $x++;
				if ($KillQuests[$x]==1) { array_push($prevJobs, 'new'); array_push($newJobs, $KillQuests[$x]); }
				else if (($KillQuests[$x]!='active')&&($KillQuests[$x]!='done')) {
					array_push($prevJobs, 'new');
					$rep = str_replace(',', '', $KillQuests[$x]);
					array_push($newJobs, intval($rep));
					}
				}
			}
		}

	$nextQuest1=$nextQuest2=$nextQuest3=$nextQuest4=$nextQuest5= array();
	echo "\n<script>\n";
	if (isset($newJobs[0])) {if ($prevJobs[0]=='new') {$nextQuest1=get_quest_data($newJobs[0]); print_Castle_Quests($nextQuest1,1,'');} else {$nextQuest1=get_quest_data($newJobs[0]); $prevQuest1=get_quest_data($prevJobs[0]); print_Castle_Quests($nextQuest1,1,$prevQuest1);}}
	if (isset($newJobs[1])) {if ($prevJobs[1]=='new') {$nextQuest2=get_quest_data($newJobs[1]); print_Castle_Quests($nextQuest2,2,'');} else {$nextQuest2=get_quest_data($newJobs[1]); $prevQuest2=get_quest_data($prevJobs[1]); print_Castle_Quests($nextQuest2,2,$prevQuest2);}}
	if (isset($newJobs[2])) {if ($prevJobs[2]=='new') {$nextQuest3=get_quest_data($newJobs[2]); print_Castle_Quests($nextQuest3,3,'');} else {$nextQuest3=get_quest_data($newJobs[2]); $prevQuest3=get_quest_data($prevJobs[2]); print_Castle_Quests($nextQuest3,3,$prevQuest3);}}
	if (isset($newJobs[3])) {if ($prevJobs[3]=='new') {$nextQuest4=get_quest_data($newJobs[3]); print_Castle_Quests($nextQuest4,4,'');} else {$nextQuest4=get_quest_data($newJobs[3]); $prevQuest4=get_quest_data($prevJobs[3]); print_Castle_Quests($nextQuest4,4,$prevQuest4);}}
	if (isset($newJobs[4])) {if ($prevJobs[4]=='new') {$nextQuest5=get_quest_data($newJobs[4]); print_Castle_Quests($nextQuest5,5,'');} else {$nextQuest5=get_quest_data($newJobs[4]); $prevQuest5=get_quest_data($prevJobs[4]); print_Castle_Quests($nextQuest5,5,$prevQuest5);}}
	echo "</script>\n";
	}

function print_Castle_Quests($quest, $numb, $prevQuest) {
	echo "var castleQuest".$numb."=[];";
	echo " castleQuest".$numb."['id']=".$quest['id'].";";
	echo " castleQuest".$numb."['name']='".$quest['name']."';";

	if (is_array($quest['track']))  {
		echo "castleQuest".$numb."['track']=[]; castleQuest".$numb."['progress']=[]; castleQuest".$numb."['complete']=[];";
		for ($i=0;$i<count($q1['track']);$i++) {
			echo " castleQuest".$numb."['track'][$i]=\"".$quest['track'][$x]."\";";
			echo " castleQuest".$numb."['prog'][$i]=\"".$quest['progress'][$x]."\";";
			echo " castleQuest".$numb."['comp'][$i]=\"".$quest['complete'][$x]."\";";
			}
		}
	else {
		echo " castleQuest".$numb."['track']='".$quest['track']."';";
		echo " castleQuest".$numb."['prog']=0;";
		echo " castleQuest".$numb."['comp']=".$quest['complete'].";";
		}

	echo " castleQuest".$numb."['desc']='".$quest['description']."';";
	echo " castleQuest".$numb."['origin']='".$quest['origin']."';";
	if ($prevQuest!='') {
		echo " castleQuest".$numb."['prevQuest']='".$prevQuest['name']."';";
		echo " castleQuest".$numb."['prevQuestID']='".$prevQuest['id']."';";
		}
	echo " castleQuest".$numb."['exp']='".$quest['exp']."';";
	echo " castleQuest".$numb."['gold']=".$quest['gold'].";\n";
	}

function get_quest_data($id) {
	global $connection;
	$query = "SELECT * FROM quests WHERE id = '{$id}'";
	$result = mysql_query($query, $connection);
	if ($quest = mysql_fetch_array($result)) {
		$qTemp  = explode(",", $quest[3]); if (count($qTemp)>1)  { $tempArray1 = $qTemp;  $quest[3]=$tempArray1; } /* Track */
		$qTemp2 = explode(",", $quest[5]); if (count($qTemp2)>1) { $tempArray2 = $qTemp2; $quest[5]=$tempArray2; } /* Complete */
		}
	return $quest;
	}

function get_house_items($playerId) {
	$query = "SELECT * FROM equipment WHERE slot like '%house%' AND accountID='{$_SESSION['userid']}'";
	$result = mysql_query($query, $connection);
	confirm_query($result);
	$eqCount=1;
	if ($eq = mysql_fetch_array($result)) {
		$pos = strpos($eq['slot'], 'item');
		$output  = '<li id=\\"'.$eq['id'].'\\" class=\\"'.$eq['quality'].'\\">';
		$output .= '<div onclick=item_manip(\'house_inv\',\''.$eq['name'].'\',\''.$eq['attr1'].':'.$eq['stat1'].','.$eq['attr2'].':'.$eq['stat2'].','.$eq['attr3'].':'.$eq['stat3'].','.$eq['durability'].':'.$eq['modifier'].'\',\''.$eq['id'].'equip\',\''.$eq['type'].'\',\''.$eq['quality'].'\',\''.$eq['image'].'\',\''.$eq['title'].'\',\''.$eq['slot'].'\',\''.$eq['value'].'\')\\">Take</div>';
		$output .= '<a class=\\"itemdelete\\" title=\\"Delete Item\\" href=\\"javascript:item_manip(\'del_eq\',\''.$eq['id'].'equip\',\''.$eq['attr1'].':'.$eq['stat1'].','.$eq['attr2'].':'.$eq['stat2'].','.$eq['attr3'].':'.$eq['stat3'].','.$eq['durability'].':'.$eq['modifier'].'\', \''.$eq['slot'].'\')\\" style=\\"display: none;\\">X</a>';
		$output .= '<img title=\\"'.$eq['title'].'\\" src=\\"'.$eq['image'].'\\">';
		$output .= '</li>';
		}
	}

function create_grid($playerId,$charId) {
	if (isset($_SESSION['castle'])) {
		$char_info = get_character_info($charId);
		getCastleQuests($char_info);
		if(stristr($char_info['map'], 'class="house"')!=false) {}
		echo '<div id="map">'.$char_info['map'].'</div><script>PlayerToPortal(); var castleHome=""; $("td").hovereffect(); player["s_timer"]='.$char_info['s_timer'].'; player["s_income"]='.$char_info['s_income'].';</script><div id="shoppage"></div><div id="floater"></div>';
		unset($_SESSION['castle']);
		}
	else {
		$numb = 23;
		$char_info = get_character_info($charId);
		$_SESSION['ab_points'] = $char_info['abpoints'];
		// Select random location for the portal
		 $portlocation = create_loc();
		 $portvar1     = $portlocation["var1"];
		 $portvar2     = $portlocation["var2"];
		 $portloc      = $portlocation["loc"];
		// Select random location for the store
		 $shoplocation = create_loc();
		 $shopvar1     = $shoplocation["var1"];
		 $shopvar2     = $shoplocation["var2"];
		 $shoploc      = $shoplocation["loc"];
		// See if castle is in map and if it is, select a random location
		 $castlevar1  = -1;
		 $castlevar2  = -1;
		 $castlenumb1 = rand(0, 3);
		 $castlenumb2 = rand(0, 3);
		 if ($castlenumb1 == $castlenumb2) {
			$castlelocation = create_loc();
			$castlevar1     = $castlelocation["var1"];
			$castlevar2     = $castlelocation["var2"];
			$castleloc      = $castlelocation["loc"];
			}
		// See if player has an open quest slot for a random quest
			if (($char_info['q1_prog']!='undefined')||($char_info['q2_prog']!='undefined')||($char_info['q3_prog']!='undefined')||($char_info['q4_prog']!='undefined')||($char_info['q5_prog']!='undefined')||($char_info['q6_prog']!='undefined')||($char_info['q7_prog']!='undefined')||($char_info['q8_prog']!='undefined')||($char_info['q9_prog']!='undefined')||($char_info['q10_prog']!='undefined')) {
				$superMonVar1  = -1;
			 	$superMonVar2  = -1;
			 	$superMonNumb1 = rand(0, 5);
			 	$superMonNumb2 = rand(0, 5);
				if ($superMonNumb1 == $superMonNumb2) {
					$superMonLoc = create_loc();
					$superMon1   = $superMonLoc["var1"];
					$superMon2   = $superMonLoc["var2"];
					$superMonloc = $superMonLoc["loc"];
					}
				}
		
		$x=1;
		$numb2=$numb*2;
		$background = array('rock','water','tree','grass','grass','grass','grass');
		if (($castlenumb1==$castlenumb2)&&($char_info['castle']=='')) { getCastleQuests($char_info); }
		$output = "<div id=\"map\">\n<table id=\"mainbody\">\n<tr>\n";
		for($i=1;$i<$numb2+1;$i++) {
			$randnumb=rand(0, 6);
			if(($x==$portvar1)&&($i==$portvar2)) { // create the portal
				if ($char_info['castle']=='') { $output.= "<td><table><td id=\"".$x."_".$i."\" class=\"portal dark\"></td></table></td>\n"; }
				else                          { $output.= "<td><table><td id=\"".$x."_".$i."\" onclick=\"activate_portal_options()\" class=\"portal dark\"></td></table></td>\n"; }
				}
			else if(($x==$shopvar1)&&($i==$shopvar2)) { $output.= "<td><table><td id=\"".$x."_".$i."\" class=\"shop dark\"></td></table></td>\n"; } // create the store
			else if(($x==$superMonVar1)&&($i==$superMonVar2)) {  }
			else if(($x==$castlevar1)&&($i==$castlevar2)&&($char_info['castle']=='')) { $output.= "<td><table><td id=\"".$x."_".$i."\" class=\"castle dark\"></td></table></td>\n"; }
			else            { $output.= "<td><table><td id=\"".$x."_".$i."\" class=\"".$background[$randnumb]." dark\" onclick=\"clicked('".$x."_".$i."')\"></td></table></td>\n"; } // create the rest of the map
			if ($i==$numb2) { $output.= "</tr>"; $x++; $i=0; if ($x==$numb) { $output.= "\n</table>\n</div>\n<div id=\"lootpage\"></div>\n<div id=\"floater\"></div>\n<div id=\"shoppage\"></div>\n<script>var portloc=\"".$portloc."\"; $('td').hovereffect();</script>"; break; } $output.= "<tr>\n"; } // end the table
			}
		return $output;
		}
	}

function check_player_ab($ability,$playerID,$charID) {
	$x = get_character_info($charID);
	switch($ability) {
		case $x[63]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[64]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[65]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[66]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[67]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[68]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[69]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[70]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[71]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		case $x[72]: return 'checked="checked" disabled="disabled" alt="'.$ability.'"'; break;
		}
	}

?>