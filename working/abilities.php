<?php 
if (!isset($_SESSION['username'])) { session_start(); }
$char_info=get_character_info($_SESSION['char']);
if ($_SESSION['ab_points']<=0) { header("Location: http://localhost/rpg"); exit; }
?>
<style> #rightbar {display: none;} </style>
<script>
ab="<?php echo $char_info['abpoints']; ?>";
$(document).ready(function() {
	$('#abList>ul>li').each(function() {	
		if ($(this).find('ul').size() > 0) {
			if ($(this).children('input').attr('checked') == undefined){
				$(this).children().children().children('input').each(function() {
					if($(this).parent().siblings('input').attr('disabled') == undefined) { // work here
						$(this).attr('disabled','disabled');
						$(this).siblings('a').css('color','gray');
						}
					});
				}
			if ($(this).children('ul').find('input').attr('checked')==undefined) {
				if ($(this).children('ul').find('input').siblings('ul').size() > 0) {
					$(this).children('ul').find('input').siblings('ul').find('input').attr('disabled','disabled');
					$(this).children('ul').find('input').siblings('ul').find('input').siblings('a').css('color','gray');
					}
				}
			}
		});

	$("a").hover(
		function() { $(this).siblings('span').show(); }, 
		function() { $(this).siblings('span').hide(); }
		);
	$("input[type=checkbox][checked]").each(
		function() {
			$(this).siblings('a').css('color','gray');
			$(this).parent().parent().siblings('input').attr('disabled','disabled').attr('checked','checked');
			$(this).parent().parent().siblings('a').css('color','gray');
			$(this).parent().parent().parent().parent().siblings('input').attr('disabled','disabled').attr('checked','checked');
			$(this).parent().parent().parent().parent().siblings('a').css('color','gray');
			});
	$('input').change(function(){
		if ('input:checked') {
			$(this).attr('checked','checked');
			$(this).parent().parent().siblings('input').attr('disabled','disabled');
			if($(this).siblings('a').css('color') == 'rgb(255, 0, 0)') {
				$(this).siblings('a').css('color','gray');
				ab--;
				$('#title').html('Points to spend: '+ab);
				if ($(this).siblings('ul').size()!=0) { 
					if (ab!=0) {
						$(this).siblings('ul').find('input').removeAttr('disabled');
						$(this).siblings('ul').children().children('input').siblings('a').css('color','rgb(255, 0, 0)');
						}
					}
				if(ab==0) {
					$('#abList').find('input').each(function() {
						if ($(this).attr('checked') != 'checked') {
							$(this).attr('disabled','disabled');
							}
						});
					}
				}
		else {
			$(this).removeAttr('checked');
			$(this).siblings('a').css('color','rgb(255, 0, 0)');
			ab++;
			$('#title').html('Points to spend: '+ab);
			$('#abList').find('input').each(function() {
				if ($(this).siblings('a').css('color')=='rgb(255, 0, 0)') {
					$(this).removeAttr('disabled');
					}

				if ($(this).attr('checked')=='checked' && $(this).attr('disabled')==undefined) {
					$(this).siblings('ul').children().children('a').css('color','rgb(255, 0, 0)');
					$(this).siblings('ul').children().children('input').removeAttr('disabled');
					}
				});
			if ($(this).siblings('ul').size()!=0) {
				$(this).siblings('ul').find('input').attr('disabled','disabled');
				$(this).siblings('ul').children().children('input').siblings('a').css('color','gray');
				}
			if ($(this).parent().parent().siblings('input').attr('alt')==undefined) {
				$(this).parent().parent().siblings('input').removeAttr('disabled');
				}
			}
		//jquery has trouble seeing the attribute "action" so it muct be written like this:
		$('#abilitiesMenu').children('form').get(0).setAttribute('action', 'working/save_char.php?ab='+ab);
	}});});
</script>

<div id="abilitiesMenu">
<?php 
$output  = '<form action="working/save_char.php?crit='.$char_info['crit'].'"&ab='.$char_info['abpoints'].'" name="abilities" method="post">';
$output .= '<input id="submit" onclick="javascript: player[\'abpoints\']=ab;" type="submit" value="Save and Play">';
$output .= '<div id="title">Points to spend: '.$char_info['abpoints'].'</div>';
$output .= '<div id="abList"><ul>';

switch($char_info['class']) {
	case "Knight":
		$output .= '<li>     <input type="checkbox" name="Pound"       '. check_player_ab("Pound",$_SESSION['id'],$_SESSION['char']).'       value="Pound" />       <a>Pound</a>       <span>Melee attack that stuns the target for 1 to 3 turns</span></li>';
		$output .= '<li>     <input type="checkbox" name="Leap"        '. check_player_ab("Leap",$_SESSION['id'],$_SESSION['char']).'        value="Leap" />        <a>Leap</a>        <span>Instantly move 2 squares away, regardless of terrain</span>';
		$output .= '<ul><li> <input type="checkbox" name="Jump"        '. check_player_ab("Jump",$_SESSION['id'],$_SESSION['char']).'        value="Jump" />        <a>Jump</a>        <span>{REQUIRES LEAP}<br>Move up to 3 squares away, regardless of terrain</span>';
		$output .= '<ul><li> <input type="checkbox" name="Pounce"      '. check_player_ab("Pounce",$_SESSION['id'],$_SESSION['char']).'      value="Pounce" />      <a>Pounce</a>      <span>{REQUIRES JUMP}<br>Move up to 3 squares away, regardless of terrain hurting any monsters within 1 square</span></li></ul></li></ul></li>';
		$output .= '<li>     <input type="checkbox" name="Cyclone"     '. check_player_ab("Cyclone",$_SESSION['id'],$_SESSION['char']).'     value="Cyclone" />     <a>Cyclone</a>     <span>Melee attack that does damage to all monsters surrounding player</span></li>';
		$output .= '<li>     <input type="checkbox" name="Bash"        '. check_player_ab("Bash",$_SESSION['id'],$_SESSION['char']).'        value="Bash" />        <a>Bash</a>        <span>{REQUIRES EQUIPPED SHIELD}<br>Pushes enemy two spaces back and does minor damage</span></li>';
		$output .= '<li>     <input type="checkbox" name="Hunker"      '. check_player_ab("Hunker",$_SESSION['id'],$_SESSION['char']).'      value="Hunker" />      <a>Hunker Down</a> <span>Increased defense taking half damage, this goes away when player moves<br>Costs one turn to activate</span>';
		$output .= '<ul><li> <input type="checkbox" name="Defensive"   '. check_player_ab("Defensive",$_SESSION['id'],$_SESSION['char']).'   value="Defensive" />   <a>Defensive</a>   <span>{REQUIRES HUNKER DOWN}<br>Increased defense taking half damage, this goes away when player moves<br>DOES NOT costs one turn to activate</span></li></ul></li>';
		$output .= '<li>     <input type="checkbox" name="Frenzy"      '. check_player_ab("Frenzy",$_SESSION['id'],$_SESSION['char']).'      value="Frenzy" />      <a>Frenzy</a>      <span>Hit target twice per attack, lasts for 5 turns</span>';
		$output .= '<ul><li> <input type="checkbox" name="Manic"       '. check_player_ab("Manic",$_SESSION['id'],$_SESSION['char']).'       value="Manic" />       <a>Manic</a>       <span>{REQUIRES FRENZY}<br>Hit target three times per attack, lasts for 5 turns</span>';
		$output .= '<ul><li> <input type="checkbox" name="Berserk"     '. check_player_ab("Berserk",$_SESSION['id'],$_SESSION['char']).'     value="Berserk" />     <a>Berserk</a>     <span>{REQUIRES MANIC}<br>Hit target three times per attack, lasts for 10 turns</span></li></ul></li></ul></li>';
		$output .= '<li>     <input type="checkbox" name="Precision"   '. check_player_ab("Precision",$_SESSION['id'],$_SESSION['char']).'   value="Precision" />   <a>Precision</a>   <span>Raises crit chance by 5%<br>(For a total of 10%)</span>';
		$output .= '<ul><li> <input type="checkbox" name="Rigor"       '. check_player_ab("Rigor",$_SESSION['id'],$_SESSION['char']).'       value="Rigor" />       <a>Rigor</a>       <span>{REQUIRES PRECISION}<br>Raises crit chance by 10%<br>(For a total of 15%)</span>';
		$output .= '<ul><li> <input type="checkbox" name="Affliction"  '. check_player_ab("Affliction",$_SESSION['id'],$_SESSION['char']).'  value="Affliction" />  <a>Affliction</a>  <span>{REQUIRES RIGOR}<br>Raises crit chance by 15%<br>(For a total of 20%)</span></li></ul></li></ul></li>';
		$output .= '<li>     <input type="checkbox" name="Speachcraft" '. check_player_ab("Speachcraft",$_SESSION['id'],$_SESSION['char']).' value="Speachcraft" /> <a>Speachcraft</a> <span>10% better prices on all items in shop<br>(buying and selling)</span></li>';
		break;
	case "Mage":
		$output .= '<li>     <input type="checkbox" name="Teleport"    '. check_player_ab("Teleport",$_SESSION['id'],$_SESSION['char']).'    value="Teleport" />    <a>Teleport</a>    <span>Instantly move to an already discovered location</span></li>';
		$output .= '<li>     <input type="checkbox" name="Singe"       '. check_player_ab("Singe",$_SESSION['id'],$_SESSION['char']).'       value="Singe" />       <a>Singe</a>       <span>Ignite a 2x2 area with fire that burns anything inside it</span>';
		$output .= '<ul><li> <input type="checkbox" name="Fireball"    '. check_player_ab("Fireball",$_SESSION['id'],$_SESSION['char']).'    value="Fireball" />    <a>Fireball</a>    <span>{REQUIRES SINGE}<br>Ignite a 3x3 area with fire that burns anything inside it</span>';
		$output .= '<ul><li> <input type="checkbox" name="Firestorm"   '. check_player_ab("Firestorm",$_SESSION['id'],$_SESSION['char']).'   value="Firestorm" />   <a>Firestorm</a>   <span>{REQUIRES FIREBALL}<br>Ignite a 4x4 area with fire that burns anything inside it</span></li></ul></li></ul></li>';
		$output .= '<li>     <input type="checkbox" name="Incinerate"  '. check_player_ab("Incinerate",$_SESSION['id'],$_SESSION['char']).'  value="Incinerate" />  <a>Incinerate</a>  <span>A pumpable offensive spell targeting a single monster</span></li>';
		$output .= '<li>     <input type="checkbox" name="Freeze"      '. check_player_ab("Freeze",$_SESSION['id'],$_SESSION['char']).'      value="Freeze" />      <a>Freeze</a>      <span>Freezes target for 3 to 6 turns<br>Frozen targets can neither move nor attack</span></li>';
		$output .= '<li>     <input type="checkbox" name="Peak"        '. check_player_ab("Peak",$_SESSION['id'],$_SESSION['char']).'        value="Peak" />        <a>Peak</a>        <span>Look into an undiscovered 3x3 area of the map, revealing what is underneath</span>';
		$output .= '<ul><li> <input type="checkbox" name="Uncover"     '. check_player_ab("Uncover",$_SESSION['id'],$_SESSION['char']).'     value="Uncover" />     <a>Uncover</a>     <span>{REQUIRES PEAK}<br>Look into an undiscovered 4x4 area of the map, revealing what is underneath</span>';
		$output .= '<ul><li> <input type="checkbox" name="Reveal"      '. check_player_ab("Reveal",$_SESSION['id'],$_SESSION['char']).'      value="Reveal" />      <a>Reveal</a>      <span>{REQUIRES UNCOVER}<br>Look into an undiscovered 5x5 area of the map, revealing what is underneath</span></li></ul></li></ul></li>';
		$output .= '<li>     <input type="checkbox" name="Bubble"      '. check_player_ab("Bubble",$_SESSION['id'],$_SESSION['char']).'      value="Bubble" />      <a>Bubble</a>      <span>A light force field that prevents 25% damage to the caster, drains mana each turn to keep active</span>';
		$output .= '<ul><li> <input type="checkbox" name="Shield"      '. check_player_ab("Shield",$_SESSION['id'],$_SESSION['char']).'      value="Shield" />      <a>Shield</a>      <span>{REQUIRES BUBBLE}<br>A medium force field that prevents 50% damage to the caster, drains mana each turn to keep active</span>';
		$output .= '<ul><li> <input type="checkbox" name="Wall"        '. check_player_ab("Wall",$_SESSION['id'],$_SESSION['char']).'        value="Wall" />        <a>Wall</a>        <span>{REQUIRES SHIELD}<br>A strong force field that prevents 75% damage to the caster, drains mana each turn to keep active</span></li></ul></li></ul></li>';
		$output .= '<li>     <input type="checkbox" name="Blister"     '. check_player_ab("Blister",$_SESSION['id'],$_SESSION['char']).'     value="Blister" />     <a>Blister</a>     <span>Poisons the monster causing damage over time</span>';
		$output .= '<ul><li> <input type="checkbox" name="Boil"        '. check_player_ab("Boil",$_SESSION['id'],$_SESSION['char']).'        value="Boil" />        <a>Boil</a>        <span>{REQUIRES BLISTER}<br>Poisons the monster causing more damage over time</span></li></ul></li>';
		$output .= '<li>     <input type="checkbox" name="Speachcraft" '. check_player_ab("Speachcraft",$_SESSION['id'],$_SESSION['char']).' value="Speachcraft" /> <a>Speachcraft</a> <span>10% better prices on all items in shop<br>(buying and selling)</span></li>';
		break;
	}

$output .= '</ul></div>';
$output .= '</form>';

echo $output;

?>
</div>