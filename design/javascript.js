//*********************  *1*  Random!            ***********************//
//*********************  *2*  Abilities!         ***********************//
//*********************  *3*  Player movement!   ***********************//
//*********************  *4*  Monster moving!    ***********************//
//*********************  *5*  Combat!            ***********************//
//*********************  *6*  Treasure!          ***********************//
//*********************  *7*  Item Manipulation! ***********************//
//*********************  *8*  Castle!            ***********************//
//*********************  *9*  Buildings and materials!  ****************//
//*********************  *10* Quests!            ***********************//

//**********************************************************************//
//**********************  *1*  Random    *******************************//
//**********************************************************************//

function startPage(){if ($('.castle').html()!=null) {createCastle();} updateloc(); update_locked()}
function change_Pic(newImage){image=document.getElementById('charpic'), image.src="characters/"+newImage+"_display.jpg"}
function confirm_box(charID){answer=confirm("Are you sure you want to delete this character?"); if(answer){window.location='/rpg/?page=del_Char&delchar='+charID;}}
function change_leftbar(subject){if(subject=="main"){left_main()} if(subject=="inventory"){left_inventory()} if(subject=="equipped") {left_equipped()} if(subject=="potions") {left_potions();} if(subject=="abilities") {left_abilities();} if(subject=="quests") {left_quests();} if(subject=='gear') {left_gear();}}
function check_sellAll(data,i){if(movement=='shop'){closeFloaterDiv(); if (data=='inventory'){open_sellAll();}} if(i!=undefined){$('#left_main').html(i);} left_menu=data;}
function aJaxError(er,ex){switch(er){case 0:alert('Not connected.\n Verify Network.'); break; case 404:alert('Requested page not found. [404]'); break; case 500:alert('Internal Server Error [500].'); break;} switch(ex) {case 'parsererror': alert('Requested JSON parse failed.'); break; case 'timeout': alert('Time out error.'); break; case 'abort': alert('Ajax request aborted.'); break;} alert('Uncaught Error.\n' + XHR.responseText);}
function validate_form(){var x=document.forms["createChar"]["name"].value; var y=document.forms["createChar"]["class"].value; if(x==null||x==""){alert("Name your character"); return false;} if (y==null||y==""||y=="Symbol") {alert("Give your character a class"); return false;}}
function PlayerToPortal(){$('#'+$(".portal").attr("id")).removeClass('portal').addClass('none').css({'background-image':'url(backgrounds/sprite.jpg)','background-position':player['image']}); player['loc']=player['oldloc']=player["backup_loc"]=$(".none").attr("id"); var getPortalId=$(".none").attr("id").split('_'); player['var1']=player['oldvar1']=getPortalId[0]; player['var2']=player['oldvar2']=getPortalId[1];}
function get_vis_array(){var o=new Array();for(i=0;i<range1.length;i++){o.push(range1[i])}for(i=0;i<range3.length;i++){o.push(range3[i])}return o;}

function clicked(loc,effect){
	if(movement=='build')     {finishBuilding(tempVar,loc); return}
	if(active_ability=="yes") {ability_action(loc)}
	}

function find_attack_defense(){
	switch(player['class']){
		case 'Archer': break;
		case 'Cleric': break;
		case 'Knight':
			player['attack']   = Math.round((parseInt(player['str'])/4)+(parseInt(player['dex'])/4));
			player['defense']  = Math.round((parseInt(player['max_hp'])/6)+(parseInt(player['str']))/6);
			player['mattack']  = 0;
			player['mdefense'] = Math.round(((parseInt(player['intel'])/4)+parseInt(player['max_mana']))/4);
			break;
		case 'Mage':
			player['attack']   = Math.round((parseInt(player['str'])/5)+(parseInt(player['dex'])/5));
			player['defense']  = Math.round((parseInt(player['max_hp'])/6)+(parseInt(player['str']))/5);
			player['mattack']  = Math.round((parseInt(player['intel'])/5)+(parseInt(player['max_mana'])/5));
			player['mdefense'] = Math.round(((parseInt(player['intel'])/3)+parseInt(player['max_mana']))/3);
			break;
		case 'Necro':   break;
		case 'Paladin': break;
		case 'Rogue':   break;
		}
	}

function upDateGearOrder(){$('#left_main_gear').children('li').each(function (){  });}

// need to set "left_menu" to what is currently displaying so when something happens during the game and that menu is showing we can update it dynamically
function str_cont(s,c){o=s.indexOf(c)>=0;return o}
function save_bar(){var i=charinfo_html();$('#form_content').html(i); update_exp_bar()}
function left_main(){find_attack_defense();$('#left_main').html("<div id=\"left_main_main\"><li>Int: "+player["intel"]+"</li><li>Str: "+player["str"]+"</li><li>Dex: "+player["dex"]+"</li><div><li>Attack: "+player['attack']+"</li><li>Defense: "+player['defense']+"</li><li>Armor: "+player['armor']+"</li></div><div><li>Magic Attack: "+player['mattack']+"</li><li>Magic Defense: "+player['mdefense']+"</li><li>Ward: "+player['ward']+"</li></div></div>");check_sellAll('main')}
function left_equipped(){$('#left_main').html("<div id=\"equipment\" style=\"background-image: url(backgrounds/equipment/"+player["class"]+"Equipment.jpg)\"><div id=\"wrap_equipped\"><div id=\"head_equipped\">"+head_slot+"</div><div id=\"chest_equipped\">"+chest_slot+"</div><div id=\"legs_equipped\">"+legs_slot+"</div><div id=\"feet_equipped\">"+feet_slot+"</div><div id=\"righthand_equipped\">"+right_hand_slot+"</div><div id=\"lefthand_equipped\">"+left_hand_slot+"</div></div></div>");check_sellAll('equipped')}
function left_potions(){var i=potions_info();check_sellAll("potions",i)}
function left_abilities(){var i=ability_info();check_sellAll("abilities",i);check_active_ab(); activate_ability_hover()}
function left_quests(){var i=quest_info();check_sellAll("quests",i)}
function left_gear(){var i=gear_info();check_sellAll("gear",i);if(active_cancel!='no'){$('#'+active_cancel).addcancel(active_cancel)}}
function left_inventory(){
	var i1=str_cont(item1_slot,'purple');if(i1==true){item1_slot='<ul><li>'+item1_slot+'</li></ul>'}
	var i2=str_cont(item2_slot,'purple');if(i2==true){item2_slot='<ul><li>'+item2_slot+'</li></ul>'}
	var i3=str_cont(item3_slot,'purple');if(i3==true){item3_slot='<ul><li>'+item3_slot+'</li></ul>'}
	var i4=str_cont(item4_slot,'purple');if(i4==true){item4_slot='<ul><li>'+item4_slot+'</li></ul>'}
	var i5=str_cont(item5_slot,'purple');if(i5==true){item5_slot='<ul><li>'+item5_slot+'</li></ul>'}
	var i6=str_cont(item6_slot,'purple');if(i6==true){item6_slot='<ul><li>'+item6_slot+'</li></ul>'}
	var i7=str_cont(item7_slot,'purple');if(i7==true){item7_slot='<ul><li>'+item7_slot+'</li></ul>'}
	var i8=str_cont(item8_slot,'purple');if(i8==true){item8_slot='<ul><li>'+item8_slot+'</li></ul>'}
	var i9=str_cont(item9_slot,'purple');if(i9==true){item9_slot='<ul><li>'+item9_slot+'</li></ul>'}
	var i10=str_cont(item10_slot,'purple');if(i10==true){item10_slot='<ul><li>'+item10_slot+'</li></ul>'}
	$('#left_main').html("<div id=\"left_main_inv\"><li>"+item1_slot+"</li>"+ "<li>"+item2_slot+"</li>"+ "<li>"+item3_slot+"</li>"+ "<li>"+item4_slot+"</li>"+ "<li>"+item5_slot+"</li>"+ "<li>"+item6_slot+"</li>"+ "<li>"+item7_slot+"</li>"+ "<li>"+item8_slot+"</li>"+ "<li>"+item9_slot+"</li>"+ "<li>"+item10_slot+"</li></div>"); if(movement=="shop"){$('#left_main li').addClass('width275');} check_sellAll('inventory');}

function potions_info(){var o="<div id=\"left_main_pots\">"; for(i=1;i<11;i++){switch(i){case 1:p=player["pot1"];break;case 2:p=player["pot2"];break;case 3:p=player["pot3"];break;case 4:p=player["pot4"];break;case 5:p=player["pot5"];break;case 6:p=player["pot6"];break;case 7:p=player["pot7"];break;case 8:p=player["pot8"];break;case 9:p=player["pot9"];break;case 10:p=player["pot10"];break;}if(p!=''){o+="<li id=\""+i+p+"\" class=\"pot"+i+"\" onmouseout=\"hide_li_buttons('"+i+p+"')\" onmouseover=\"show_li_buttons('"+i+p+"')\">"+p+"<a title=\"Drink Potion\" class=\"drinkPotion\" href=\"javascript: activate_potion('"+i+p+"')\">Use</a><a class=\"itemdelete\" title=\"Delete Potion\" href=\"javascript:item_manip('del','pot','','"+i+p+"')\">X</a></li>";}}o+="</div>";return o}
function quest_info(){
	var o="<div id=\"left_main_quests\">";
	for (y=1;y<11;y++){
		switch(y){
			case 1:q=player["q1"];qd=player['q1_desc'];qp=player['q1_prog'];qt=player['q1_track'];qc=player['q1_comp'];break;
			case 2:q=player["q2"];qd=player['q2_desc'];qp=player['q2_prog'];qt=player['q2_track'];qc=player['q2_comp'];break;
			case 3:q=player["q3"];qd=player['q3_desc'];qp=player['q3_prog'];qt=player['q3_track'];qc=player['q3_comp'];break;
			case 4:q=player["q4"];qd=player['q4_desc'];qp=player['q4_prog'];qt=player['q4_track'];qc=player['q4_comp'];break;
			case 5:q=player["q5"];qd=player['q5_desc'];qp=player['q5_prog'];qt=player['q5_track'];qc=player['q5_comp'];break;
			case 6:q=player["q6"];qd=player['q6_desc'];qp=player['q6_prog'];qt=player['q6_track'];qc=player['q6_comp'];break;
			case 7:q=player["q7"];qd=player['q7_desc'];qp=player['q7_prog'];qt=player['q7_track'];qc=player['q7_comp'];break;
			case 8:q=player["q8"];qd=player['q8_desc'];qp=player['q8_prog'];qt=player['q8_track'];qc=player['q8_comp'];break;
			case 9:q=player["q9"];qd=player['q9_desc'];qp=player['q9_prog'];qt=player['q9_track'];qc=player['q9_comp'];break;
			case 10:q=player["q10"];qd=player['q10_desc'];qp=player['q10_prog'];qt=player['q10_track'];qc=player['q10_comp'];break;
			}
		var i=y;
		if(q!=''){o+="<li id=\""+q+"_quest\" href=\"javascript: quest_details('"+q+"')\">"+q+"<span onClick=\"abandonQuest('q"+i+"')\" id=\"abandonQuest\">Abandon Quest</span><span>"+qd+"<span class='questProg'>Your progress:<br />"; if(qp!='complete'){o+=divide_quest_vars(qt,qp,qc);}else{o+="COMPLETE";}o+="</span></span></li>"}
		}
	o+="</div>";
	return o;
	}

function gear_info(){
	function mt(d){
		switch(d){
			case player['gear1']:player['gear1']='';break;
			case player['gear2']:player['gear2']='';break;
			case player['gear3']:player['gear3']='';break;
			case player['gear4']:player['gear4']='';break;
			case player['gear5']:player['gear5']='';break;
			case player['gear6']:player['gear6']='';break;
			case player['gear7']:player['gear7']='';break;
			case player['gear8']:player['gear8']='';break;
			case player['gear9']:player['gear9']='';break;
			case player['gear10']:player['gear10']='';break;
}}
	var o='<div id="left_main_gear">';
	for(i=1;i<11;i++){
		switch(i){case 1:g=player['gear1'];g2=player["g1"];break;case 2:g=player['gear2'];g2=player["g2"];break;case 3:g=player['gear3'];g2=player["g3"];break;case 4:g=player['gear4'];g2=player["g4"];break;case 5:g=player['gear5'];g2=player["g5"];break;case 6:g=player['gear6'];g2=player["g6"];break;case 7:g=player['gear7'];g2=player["g7"];break;case 8:g=player['gear8'];g2=player["g8"];break;case 9:g=player['gear9'];g2=player["g9"];break;case 10:g=player['gear10'];g2=player["g10"];break}
		gns=g.toString().replace(" ", "");
		t=g.split(' ');
		if((g=='wood')||(g=='stone')||(g=='dirt')){
			if(g2>=1){o+='<li id="'+g+'_mat" onmouseover="show_li_buttons(\''+g+'_mat\')" onmouseout="hide_li_buttons(\''+g+'_mat\')">'+g+'<a class="mat_to_house" href="javascript:item_manip(\'mat_house\',\''+g+'\',\'\',\''+g+'_mat\',\'\',\'\',\'\',\'\',\'gear'+i+'\',\'\')" title="Move Material to House" class=\'itemequip\'>Move to House</a><a class="use_mat" href="javascript:buildSomething()" title="Build!" class=\'itemequip\'>Build!</a><a href="javascript:item_manip(\'del\',\''+g+'_mat\',\'\',\'gear'+i+'\')" title="Delete Material" class=\'itemdelete\'>X</a><div id="'+g+'numb" class="matNumb">'+g2+'</div></li>';}
			else{mt(g)}
			}
		else{o+='<li id="'+gns+'_gear'+i+'" onmouseover="show_li_buttons(\''+gns+'_gear'+i+'\')" onmouseout="hide_li_buttons(\''+gns+'_gear'+i+'\')">'+g+'<a class="Gear_to_house" href="javascript:item_manip(\'gear_house\',\''+g+'\',\'\',\''+gns+'_gear'+i+'\',\'\',\'\',\'\',\'\',\'\',\'\')" title="Move tool to House" class=\'itemequip\'>Move to House</a><a class="useGear" href="javascript:activateGear(\''+g+'\',\''+gns+'_gear'+i+'\')" class=\'itemequip\'>Use '+t[1]+'</a><a href="javascript:item_manip(\'del\',\''+g+'\',\'\',\''+gns+'_gear'+i+'\')" title="Delete item" class=\'itemdelete\'>X</a></li>';}
		}
		o+='</div>';
	return o;
	}

function ability_info(){
	var o="<div id=\"left_main_ab\">";
		o+="<li name='"+ability_details(check_for_hunker(player["ab1"]))+"'><a id=\""+player["ab1"]+"_ab\" href=\"javascript: activate_ability('"+player["ab1"]+"')\">"+check_for_hunker(player["ab1"])+"</a></li>";
	   o+="<li name='"+ability_details(check_for_hunker(player["ab2"]))+"'><a id=\""+player["ab2"]+"_ab\" href=\"javascript: activate_ability('"+player["ab2"]+"')\">"+check_for_hunker(player["ab2"])+"</a></li>";
	   o+="<li name='"+ability_details(check_for_hunker(player["ab3"]))+"'><a id=\""+player["ab3"]+"_ab\" href=\"javascript: activate_ability('"+player["ab3"]+"')\">"+check_for_hunker(player["ab3"])+"</a></li>";
		o+="<li name='"+ability_details(check_for_hunker(player["ab4"]))+"'><a id=\""+player["ab4"]+"_ab\" href=\"javascript: activate_ability('"+player["ab4"]+"')\">"+check_for_hunker(player["ab4"])+"</a></li>";
		o+="<li name='"+ability_details(check_for_hunker(player["ab5"]))+"'><a id=\""+player["ab5"]+"_ab\" href=\"javascript: activate_ability('"+player["ab5"]+"')\">"+check_for_hunker(player["ab5"])+"</a></li>";
		o+="<li name='"+ability_details(check_for_hunker(player["ab6"]))+"'><a id=\""+player["ab6"]+"_ab\" href=\"javascript: activate_ability('"+player["ab6"]+"')\">"+check_for_hunker(player["ab6"])+"</a></li>";
		o+="<li name='"+ability_details(check_for_hunker(player["ab7"]))+"'><a id=\""+player["ab7"]+"_ab\" href=\"javascript: activate_ability('"+player["ab7"]+"')\">"+check_for_hunker(player["ab7"])+"</a></li>";
		o+="<li name='"+ability_details(check_for_hunker(player["ab8"]))+"'><a id=\""+player["ab8"]+"_ab\" href=\"javascript: activate_ability('"+player["ab8"]+"')\">"+check_for_hunker(player["ab8"])+"</a></li>";
		o+="<li name='"+ability_details(check_for_hunker(player["ab9"]))+"'><a id=\""+player["ab9"]+"_ab\" href=\"javascript: activate_ability('"+player["ab9"]+"')\">"+check_for_hunker(player["ab9"])+"</a></li>";
		o+="<li name='"+ability_details(check_for_hunker(player["ab10"]))+"'><a id=\""+player["ab10"]+"_ab\" href=\"javascript: activate_ability('"+player["ab10"]+"')\">"+check_for_hunker(player["ab10"])+"</a></li>";
		o+="</div>";
	return o;
	}

function activate_potion(potID){
	var pot_type=potID.replace(/[0-9]/g, '');
	switch(pot_type){
		case'Heal':
			if (parseInt(player['hp'])<parseInt(player['max_hp'])){
				base    =parseInt(player['max_hp'])*.15; // 15%
				base_max=parseInt(player['max_hp'])*.15; // 15%
				heals   =parseInt(base) + Math.floor(Math.random()*base_max); /* heal from a minimum of 15% to a maximum of 30% */
				player['hp']=parseInt(player['hp'])+parseInt(heals);
				if(player['hp']>player['max_hp']){player['hp']=player['max_hp']}
				save_bar();
				$('#'+potID).remove();
				potNumb=parseInt(potID);
				switch(potNumb){case 1:player['pot1']="";break;case 2:player['pot2']="";break;case 3:player['pot3']="";break;case 4:player['pot4']="";break;case 5:player['pot5']="";break;case 6:player['pot6']="";break;case 7:player['pot7']="";break;case 8:player['pot8']="";break;case 9:player['pot9']="";break;case 10:player['pot10']="";break}
				}
			else {alert("You are at full health")}
			break;

		case'Mana':
			if(player['mana']<player['max_mana']){
				base    =parseInt(player['max_mana'])*.15; // 15%
				base_max=parseInt(player['max_mana'])*.15; // 15%
				heals   =parseInt(base) + Math.floor(Math.random()*base_max); /* heal from a minimum of 15% to a maximum of 30% */
				player['mana']=parseInt(player['mana'])+parseInt(heals);
				if(player['mana']>player['max_mana']){player['mana']=player['max_mana']}
				save_bar();
				$('#'+potID).remove();
				potNumb=parseInt(potID);
				switch(potNumb){case 1:player['pot1']="";break;case 2:player['pot2']="";break;case 3:player['pot3']="";break;case 4:player['pot4']="";break;case 5:player['pot5']="";break;case 6:player['pot6']="";break;case 7:player['pot7']="";break;case 8:player['pot8']="";break;case 9:player['pot9']="";break;case 10:player['pot10']="";break}
				}
			else {alert("Your Mana is full")}
			break;

		case 'Reveal':   activate_ability("Reveal",potID);   break;
		case 'Teleport': activate_ability("Teleport",potID); break;
		}
	}

function activate_portal_options(){$('#floater').css({'left':450,'top':250,'width':200}).html('<div id="portalOptions"><div onclick="portal=\'\'; closeFloaterDiv();">Lock Portal to a Random map</div><div onclick="portal=\'castle\'; closeFloaterDiv();">Lock portal to the castle</div></div>').show()}
function fadeThePage(data){if(data=='fade'){$('#fadePage').show().animate({opacity:0.7}, 1000);}else{$('#fadePage').animate({opacity:0}, 700, function(){$('#fadePage').hide()});}}
function check_for_hunker(data){if(data=='Hunker'){return 'Hunker down';}else if(data=='Hunker down'){return 'Hunker';}else{return data}}
function show_li_buttons(lootID){if((left_menu=='gear')&&(active_cancel=='no')){show_tabs();}else if(left_menu!='gear'){show_tabs();}function show_tabs(){$("#"+lootID+" a").show();if(movement=="shop"){$('#left_main li').addClass('width275');$("#"+lootID+" span").show()}}}
function hide_li_buttons(lootID){$("#"+lootID+" a").hide();$("#"+lootID+" span").hide();$('#left_main li').removeClass('width275')}
function update_exp_bar(){expbar=(((player["charexp"]/player["next_level"])*100)*2);$('#exp2').css({"width":expbar})}
function gain_exp(expgain){player["charexp"]=parseInt(player["charexp"])+parseInt(expgain);if(player['charexp']>=player['next_level']){player['charexp']=player['charexp']-player['next_level'];player['max_hp']=parseInt(player['max_hp'])+1;player['max_mana']=parseInt(player['max_mana'])+1;player['intel']=parseInt(player['intel'])+1;player['str']=parseInt(player['str'])+1;player['dex']=parseInt(player['dex'])+1;player['abpoints']++;$('#ab_button').show();player['hp']=player["max_hp"];player['level']++;player["next_level"]=parseInt(player["next_level"])+25;if(left_menu=="main"){left_main()}}save_bar();update_exp_bar()}
function charinfo_html(){var o="<img src=\""+player["photo"]+"_leftbar.jpg\" />\n<h1>"+player["name"]+"</h1>\n<h2>Level "+player["level"]+" "+player["class"]+"</h2>\n<h3>HP "+player["hp"]+"/"+player["max_hp"]+"</h3>\n<h3>Mana "+player["mana"]+"/"+player["max_mana"]+"</h3>\n<h3 class='golden'>Gold: "+player["gold"]+"</h3><form name=\"saveChar\" action=\"javascript: save_character()\" method=\"post\">\n<input type=\"image\" src=\"backgrounds/SaveButton.png\" id=\"submit\" value=\"Save\">\n</form>\n<div id=\"exp1\"></div>\n<div id=\"exptext\"></div>\n<div id=\"exp2\"></div>\n"; return o}
function scroll_it(add_text,add_class){var new_content="";if(add_class!=undefined){new_content="<li class=\""+add_class+"\">"+add_text+"</li>";}else{new_content="<li>"+add_text+"</li>";}$("#rightbar ul").append(new_content);$("#rightbar ul li:last").css('margin-top',500);$('#rightbar ul li:last').animate({marginTop: 0}, 700);remove_top_items()}

function save_character() {
	var tCompQ1=player["q1_comp"];var tCompQ2=player["q2_comp"];var tCompQ3=player["q3_comp"];var tCompQ4=player["q4_comp"];var tCompQ5=player["q5_comp"];var tCompQ6=player["q6_comp"];var tCompQ7=player["q7_comp"];var tCompQ8=player["q8_comp"];var tCompQ9=player["q9_comp"];var tCompQ10=player["q10_comp"];
	var tProgQ1=player["q1_prog"];var tProgQ2=player["q2_prog"];var tProgQ3=player["q3_prog"];var tProgQ4=player["q4_prog"];var tProgQ5=player["q5_prog"];var tProgQ6=player["q6_prog"];var tProgQ7=player["q7_prog"];var tProgQ8=player["q8_prog"];var tProgQ9=player["q9_prog"];var tProgQ10=player["q10_prog"];

	if(player["q1_track"][0]!=undefined)  {if(player["q1_track"][0].length>1)  {tProgQ1.join(',');  tCompQ1.join(',')}}
	if(player["q2_track"][0]!=undefined)  {if(player["q2_track"][0].length>1)  {tProgQ2.join(',');  tCompQ2.join(',')}}
	if(player["q3_track"][0]!=undefined)  {if(player["q3_track"][0].length>1)  {tProgQ3.join(',');  tCompQ3.join(',')}}
	if(player["q4_track"][0]!=undefined)  {if(player["q4_track"][0].length>1)  {tProgQ4.join(',');  tCompQ4.join(',')}}
	if(player["q5_track"][0]!=undefined)  {if(player["q5_track"][0].length>1)  {tProgQ5.join(',');  tCompQ5.join(',')}}
	if(player["q6_track"][0]!=undefined)  {if(player["q6_track"][0].length>1)  {tProgQ6.join(',');  tCompQ6.join(',')}}
	if(player["q7_track"][0]!=undefined)  {if(player["q7_track"][0].length>1)  {tProgQ7.join(',');  tCompQ7.join(',')}}
	if(player["q8_track"][0]!=undefined)  {if(player["q8_track"][0].length>1)  {tProgQ8.join(',');  tCompQ8.join(',')}}
	if(player["q9_track"][0]!=undefined)  {if(player["q9_track"][0].length>1)  {tProgQ9.join(',');  tCompQ9.join(',')}}
	if(player["q10_track"][0]!=undefined) {if(player["q10_track"][0].length>1) {tProgQ10.join(','); tCompQ10.join(',')}}

	$.ajax({
		async: false,
		type: "POST",
		url:  "working/save_char.php",
		data: "id="+player["id"]
				+"&gold="+player["gold"]+"&level="+player["level"]+"&charexp="+player["charexp"]+"&next_level="+player["next_level"]+"&abpoints="+player["abpoints"]+"&hp="+player["hp"]+"&max_hp="+player["max_hp"]+"&intel="+player["intel"]+"&mana="+player["mana"]+"&max_mana="+player["max_mana"]+"&str="+player["str"]+"&dex="+player["dex"]+"&armor="+player["armor"]+"&ward="+player["ward"]
				+"&item1="+player["item1"]+"&item2="+player["item2"]+"&item3="+player["item3"]+"&item4="+player["item4"]+"&item5="+player["item5"]+"&item6="+player["item6"]+"&item7="+player["item7"]+"&item8="+player["item8"]+"&item9="+player["item9"]+"&item10="+player["item10"]
				+"&gear1="+player["gear1"]+"&gear2="+player["gear2"]+"&gear3="+player["gear3"]+"&gear4="+player["gear4"]+"&gear5="+player["gear5"]+"&gear6="+player["gear6"]+"&gear7="+player["gear7"]+"&gear8="+player["gear8"]+"&gear9="+player["gear9"]+"&gear10="+player["gear10"]
				+"&g1="+player["g1"]+"&g2="+player["g2"]+"&g3="+player["g3"]+"&g4="+player["g4"] +"&g5="+player["g5"] +"&g6="+player["g6"]+"&g7="+player["g7"]+"&g8="+player["g8"]+"&g9="+player["g9"]+"&g10="+player["g10"]+"&s_income="+player["s_income"]+"&s_timer="+player["s_timer"]
				+"&pot1="+player["pot1"]+"&pot2="+player["pot2"]+"&pot3="+player["pot3"]+"&pot4="+player["pot4"]+"&pot5="+player["pot5"]+"&pot6="+player["pot6"]+"&pot7="+player["pot7"] +"&pot8="+player["pot8"] +"&pot9="+player["pot9"]+"&pot10="+player["pot10"]
				+"&ab1="+player["ab1"]+"&ab2="+player["ab2"]+"&ab3="+player["ab3"]+"&ab4="+player["ab4"]+"&ab5="+player["ab5"]+"&ab6="+player["ab6"]+"&ab7="+player["ab7"]+"&ab8="+player["ab8"]+"&ab9="+player["ab9"] +"&ab10="+player["ab10"]
				+"&q1="+player["q1_id"]+"&q2="+player["q2_id"]+"&q3="+player["q3_id"]+"&q4="+player["q4_id"]+"&q5="+player["q5_id"]+"&q6="+player["q6_id"]+"&q7="+player["q7_id"]+"&q8="+player["q8_id"]+"&q9="+player["q9_id"]+"&q10="+player["q10_id"] 
				+"&q1_prog="+player['q1_prog']+"&q2_prog="+player['q2_prog']+"&q3_prog="+player['q3_prog']+"&q4_prog="+player['q4_prog']+"&q5_prog="+player['q5_prog']+"&q6_prog="+player['q6_prog']+"&q7_prog="+player['q7_prog']+"&q8_prog="+player['q8_prog']+"&q9_prog="+player['q9_prog']+"&q10_prog="+player['q10_prog'] 
				+"&zombie_kills="+player["zombie_kills"]+"&orc_kills="+player["orc_kills"]+"&blob_kills="+player["blob_kills"]+"&beholder_kills="+player["beholder_kills"]+"&spider_kills="+player["spider_kills"]+"&head="+player["head"]+"&chest="+player["chest"]+"&arms="+player["arms"]+"&legs="+player["legs"]+"&feet="+player["feet"]+"&right_hand="+player["right_hand"]+"&left_hand="+player["left_hand"],
		error:function(){aJaxError(xhr.status,exception)},
		});
	}

/* Right Bar animations */

function right_content(type,damage,monster){
	switch(type){
		// player attacked and hit
		case "mdamage": if(monster){add_text="The "+monster+" took "+damage+" damage";} else{add_text="The "+temp_monster[0]+" took "+damage+" damage";} scroll_it(add_text,"redtext"); break;
		// player attacked and monster defended
		case "mdefend": add_text="the "+temp_monster[0]+" defended itself"; scroll_it(add_text); break;
		// player attacked and killed the monster
		case "mdeath": add_text="<strong>**The "+temp_monster[0]+" has been killed!**</strong>"; scroll_it(add_text,"blacktext"); break;
		// monster is poisoned
		case "mpoisoned": if(monster){ add_text="The "+monster+" took "+damage+" poison damage";} else{ add_text="The "+temp_monster[0]+" took "+damage+" poison damage";} scroll_it(add_text,"greentext"); break;
		// Monster attacked player and hit
		case "pdamage": if (parseInt(damage)==0) {right_content('pdefend',damage,monster)} else {add_text="The "+temp_monster[0]+" hit you for "+damage; scroll_it(add_text,"redtext")} break;
		// Monster attacked player and missed
		case "pdefend": add_text="The "+temp_monster[0]+" attacked you but missed"; scroll_it(add_text); break;
		// Player got hit by a burn spell
		case "pburned": add_text="* The "+monster+" burned you for "+damage+" damage"; scroll_it(add_text,"redtext"); break;
		// critical hit
		case "crit": add_text="<strong>CRITICAL</strong> hit on the "+temp_monster[0]+"!!"; add_text="The "+temp_monster[0]+" took "+damage+" damage"; scroll_it(add_text,"redtext"); break;
		// Fire has just been cast and the monster is in the targeted area
		case "mfire": add_text="The "+monster+" took "+damage+" fire damage"; scroll_it(add_text); break;
		// A monster has moved into the fire
		case "m_in_fire": add_text="The "+temp_monster[0]+" took "+damage+" fire damage"; scroll_it(add_text); break;
		// Player picked up treasure chest
		case "treasure": add_text="You got treasure!"; scroll_it(add_text,"yellowtext"); break;
		// Monster tried to erase the players memory but failed
		case "memoryFail": add_text="* You deflected the "+monster+"'s erase memory spell"; scroll_it(add_text); break;
		// Monster tried to teleport the player but failed
		case "teleFail": add_text="* You deflected the "+monster+"'s teleportation spell"; scroll_it(add_text); break;
		// Monster tried to burn the player but failed
		case "burnFail": add_text="* You deflected the "+monster+"'s burn spell"; scroll_it(add_text); break;
		}
	}

function remove_top_items() {
	if     ($("#rightbar ul>li").size()>=15){$('#rightbar ul li:first').animate({marginTop: -120}, 600, function(){$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();});}
	else if($("#rightbar ul>li").size()==13){$('#rightbar ul li:first').animate({marginTop: -100}, 500, function(){$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();});}
	else if($("#rightbar ul>li").size()==12){$('#rightbar ul li:first').animate({marginTop: -80}, 400, function(){$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();});}
	else if($("#rightbar ul>li").size()==11){$('#rightbar ul li:first').animate({marginTop: -60}, 300, function(){$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();});}
	else if($("#rightbar ul>li").size()==10){$('#rightbar ul li:first').animate({marginTop: -40}, 200, function(){$('#rightbar ul li:first').remove();$('#rightbar ul li:first').remove();});}
	}

//*********************************************************************//
//******************     *2*  Abilities!     **************************//
//*********************************************************************//

function activate_ability(i,pot){ //This happens when the player clicks on an ability
	switch(i){
		case "Bash":       var chk=ability_cost('Bash');       if(chk!=false){Bash="yes";       $(this).addcancel("Bash");       go_Bash('on');        finish_abilities()}break;
		case "Blister":    var chk=ability_cost('Blister');    if(chk!=false){Blister='yes';    $(this).addcancel("Blister");    go_poison('Blister'); finish_abilities()}break;
		case "Boil":       var chk=ability_cost('Boil');       if(chk!=false){Boil='yes';       $(this).addcancel("Boil");       go_poison('Boil');    finish_abilities()}break;
		case "Cyclone":    var chk=ability_cost('Cyclone');    if(chk!=false){Cyclone="yes";    $(this).addcancel("Cyclone");    go_Cyclone('on');     finish_abilities()}break;
		case "Fireball":   var chk=ability_cost('Fireball');   if(chk!=false){Fireball="yes";   $(this).addcancel("Fireball");             		        finish_abilities()}break;
		case "Firestorm":  var chk=ability_cost('Firestorm');  if(chk!=false){Firestorm="yes";  $(this).addcancel("Firestorm");                        finish_abilities()}break;
		case "Incinerate": var chk=ability_cost('Incinerate'); if(chk!=false){Incinerate="yes"; $(this).addcancel("Incinerate");                       finish_abilities()}break;
		case "Jump":       var chk=ability_cost('Jump');       if(chk!=false){Jump="yes";       $(this).addcancel("Jump");       go_Jump('on');        finish_abilities()}break;
		case "Leap":       var chk=ability_cost('Leap');       if(chk!=false){Leap="yes";       $(this).addcancel("Leap");       go_Leap('on');        finish_abilities()}break;
		case "Peak":       var chk=ability_cost('Peak');       if(chk!=false){Peak='yes';       $(this).addcancel("Peak");                             finish_abilities()}break;
		case "Pounce":     var chk=ability_cost('Pounce');     if(chk!=false){Pounce="yes";     $(this).addcancel("Pounce");     go_Pounce('on');      finish_abilities()}break;
		case "Pound":      var chk=ability_cost('Pound');      if(chk!=false){Pound="yes";      $(this).addcancel("Pound");      go_Pound('on');       finish_abilities()}break;
		case "Singe":      var chk=ability_cost('Singe');      if(chk!=false){Singe="yes";      $(this).addcancel("Singe");                		        finish_abilities()}break;
		case "Freeze":     var chk=ability_cost('Freeze');     if(chk!=false){Freeze='yes';     $(this).addcancel("Freeze");     go_freeze('on');      finish_abilities()}break;
		case "Uncover":    var chk=ability_cost('Uncover');    if(chk!=false){Uncover='yes';    $(this).addcancel("Uncover");                          finish_abilities()}break;

		/***** Possible potions *****/
		case "Reveal":   var chk=ability_cost('Reveal');   if((chk!=false)||(pot!=undefined)){Reveal="yes";   $(this).addcancel("Reveal",pot);   finish_abilities()}break;
		case "Teleport": var chk=ability_cost('Teleport'); if((chk!=false)||(pot!=undefined)){Teleport="yes"; $(this).addcancel("Teleport",pot); finish_abilities()}break;

		/***** Abilities that are activated when clicked in the menu *****/
		case "Berserk":   var chk=ability_cost('Berserk','cast');     if(chk!=false){Berserk=10;              check_active_ab();                                         }break;
		case "Bubble":    var chk=ability_cost('Bubble','cast');      if(chk!=false){Bubble='yes';            $(this).addcancel("Bubble"); go_force_field('on');         }break;
		case "Defensive": var chk=ability_cost('Defensive','cast');   if(chk!=false){Defensive=player["loc"]; check_active_ab();           go_Def_Hunk('on', 'Defensive')}break;
		case "Frenzy":    var chk=ability_cost('Frenzy','cast');      if(chk!=false){Frenzy=5;                check_active_ab();                                         }break;
		case "Hunker":    var chk=ability_cost('Hunker down','cast'); if(chk!=false){Hunker=player["loc"];    check_active_ab();           go_Def_Hunk('on', 'Hunker');  }break;
		case "Manic":     var chk=ability_cost('Manic','cast');       if(chk!=false){Manic=5;                 check_active_ab();                                         }break;
		case "Shield":    var chk=ability_cost('Shield','cast');      if(chk!=false){Shield='yes';            $(this).addcancel("Shield"); go_force_field('on');         }break;
		case "Wall":      var chk=ability_cost('Wall','cast');        if(chk!=false){Wall='yes';              $(this).addcancel("Wall");   go_force_field('on');         }break;
		}
	function finish_abilities(){active_ability="yes"; toggle_links('off'); movement="ability"}
	}

function reduce_player_mana(amount){player["mana"]=parseInt(player["mana"])-parseInt(amount); save_bar()}
function activate_ability_hover(){$('#left_main_ab').children('li').each(function(){if($(this).children('a').html()!=''){$(this).hover(function(){if($(this).children().children().size()<1){ability_details($(this).children('a').html(),this);}},function(){closeFloaterDiv();});$(this).click(function(){closeFloaterDiv();});}});}

function ability_cost(ab,data){
	var o=false;
	$('#left_main_ab').children('li').each(function(){
		var result=$(this).children('a').html().split('<a');
		if(result[0].toString()===ab){
			ab=$(this).attr('name');
			if(parseInt(ab)<=parseInt(player['mana'])){if(data=='cast'){reduce_player_mana(ab);o=ab}else{o=ab}}
			else {alert('Not enough mana')}
			}
		});
	return o;
	}

function ability_details(n,t){
	var o=[];
	switch(n) {
		case 'Teleport':    o[0]=7; o[1]='Instantly transport to any previously discovered location'; break;
		case 'Singe':       o[0]=5; o[1]='Ignite a 2x2 area with fire that burns anything inside it'; break;
		case 'Fireball':    o[0]=7; o[1]='Ignite a 3x3 area with fire that burns anything inside it'; break;
		case 'Firestorm':   o[0]=10;o[1]='Ignite a 4x4 area with fire that burns anything inside it'; break;
		case 'Incinerate':  o[0]=5; o[1]='A pumpable offensive spell targeting a single monster'; break;
		case 'Peak':        o[0]=4; o[1]='Look into an undiscovered 3x3 area of the map, revealing what is underneath'; break;
		case 'Uncover':     o[0]=5; o[1]='Look into an undiscovered 4x4 area of the map, revealing what is underneath'; break;
		case 'Reveal':      o[0]=7; o[1]='Look into an undiscovered 5x5 area of the map, revealing what is underneath'; break;
		case 'Bubble':      o[0]=1; o[1]='A weak force field that prevents 25% damage to the caster, drains 1 mana each turn to stay active'; break;
		case 'Shield':      o[0]=2; o[1]='A moderate force field that prevents 50% damage to the caster, drains 2 mana each turn to stay active'; break;
		case 'Wall':        o[0]=3; o[1]='A strong force field that prevents 75% damage to the caster, drains 2 mana each turn to stay active'; break;
		case 'Blister':     o[0]=4; o[1]='Poisons the monster causing damage over time'; break;
		case 'Boil':        o[0]=6; o[1]='Poisons the monster causing damage over time'; break;
		case 'Freeze':      o[0]=4; o[1]='Freezes target for 3 to 6 turns<br>Frozen targets can neither move nor attack'; break;
		case 'Pound':       o[0]=5; o[1]='Melee attack that stuns the target for 1 to 3 turns'; break;
		case 'Leap':        o[0]=4; o[1]='Instantly move 2 squares away, regardless of terrain'; break;
		case 'Jump':        o[0]=6; o[1]='Move up to 3 squares away, regardless of terrain'; break;
		case 'Pounce':      o[0]=8; o[1]='Move up to 3 squares away, regardless of terrain hurting any monsters within 1 square'; break;
		case 'Cyclone':     o[0]=8; o[1]='Melee attack that does damage to all monsters surrounding player'; break;
		case 'Bash':        o[0]=6; o[1]='{REQUIRES EQUIPPED SHIELD}<br>Pushes enemy two spaces back and does minor damage'; break;
		case 'Hunker down': o[0]=6; o[1]='Increased defense taking half damage, this goes away when player moves.<br>Costs one turn to activate'; break;
		case 'Defensive':   o[0]=7; o[1]='Increased defense taking half damage, this goes away when player moves'; break;
		case 'Frenzy':      o[0]=5; o[1]='Hit target twice per attack, lasts for 5 turns'; break;
		case 'Manic':       o[0]=7; o[1]='Hit target three times per attack, lasts for 5 turns'; break;
		case 'Berserk':     o[0]=9; o[1]='Hit target three times per attack, lasts for 10 turns'; break;
		/***** Passive abilities *****/
		case 'Precision':   o[0]=10;o[1]='Increases critical chance by 5%<br />For a total of 10%';o[2]='';break;
		case 'Rigor':       o[0]=15;o[1]='Increases critical chance by 10%<br />For a total of 15%';o[2]='';break;
		case 'Affliction':  o[0]=20;o[1]='Increases critical chance by 15%<br />For a total of 20%';o[2]='';break;
		case 'Speachcraft': o[0]=0; o[1]='10% better prices in shops and Castle<br />(buying and selling)';o[2]='';break;
		}
	if(t!=undefined){$('#'+$(t).children().html()+'_ab').hover(function(){$(this).addClass('nohover')}, function(){});pos=$(t).offset();if(o[2]==''){$('#floater').css({'top':pos.top,'left':pos.left+130}).html('<div id="abilityFloat"><div>Passive ability</div><span>'+o[1]+'</span></div>').show()}else{$('#floater').css({'top':pos.top,'left':pos.left+130}).html('<div id="abilityFloat"><div>Casting cost: '+o[0]+'</div><span>'+o[1]+'</span></div>').show()}}else{return o[0]}
	}

function closeFloaterDiv(){$('#floater').remove();$('body').append('<div id="floater"></div>')}
function check_active_ab(){if(Frenzy!='no'){add_active('Frenzy')}if(Manic!='no'){add_active('Manic')}if(Berserk!='no'){add_active('Berserk')}if(Hunker!='no'){add_active('Hunker down')}if(Defensive!='no'){add_active('Defensive')}function add_active(ab){$('#left_main_ab').children('li').each(function(){if($(this).children().html()==ab){$(this).children().addactive(check_for_hunker(ab))}});}}

function cancel_ability(i){
	$("#"+i+"_cancel").remove();
	active_cancel="no"; // active_cancel says whether or not a cancel button is currently showing.
	toggle_links('on'); // turn links back on
	movement=""; // turn movement back on
	switch(i){
		case"Bash":      go_Bash('off');    break;
		case"Berserk":   Berserk='no';		break;
		case"Blister":   Blister='no';		break;
		case"Boil":      Boil='no';         break;
		case"Bubble":    Bubble='no';       break;
		case"Cyclone":   go_Cyclone('off'); break;
		case"Defensive": go_Def_Hunk('off');break;
		case"Fireball":  Fireball='no';     break;
		case"Firestorm": Firestorm='no';    break;
		case"Freeze":    go_Freeze('off');  break;
		case"Frenzy":    Frenzy='no';			break;
		case"Hunker":    go_Def_Hunk('off');break;
		case"Incinerate":go_Incinerate();   break;
		case"Jump":      go_Jump('off');    break;
		case"Leap":      go_Leap('off');    break;
		case"Manic":     Manic='no';			break;
		case"Peak":      go_Peak('off');    break;
		case"Pounce":    go_Pounce('off');  break;
		case"Pound":     go_Pound('off');   break;
		case"Reveal":    go_Reveal('off');  break;
		case"Shield":    Shield='no';       break;
		case"Singe":     Singe='no';        break;
		case"Teleport":  go_Teleport('off');break;
		case"Uncover":   go_Uncover('off'); break;
		case"Wall":      Wall='no';         break;
		}
	check_active_abilities();
	}

function check_active_abilities(){
	function a_a(){active_ability='yes'}
	// need to figure out how to check for all active abilities to see if there are any currently running.
	switch('yes'){
		case"Bash":      a_a();break;
		case"Berserk":   a_a();break;
		case"Blister":   a_a();break;
		case"Boil":      a_a();break;
		case"Bubble":    a_a();break;
		case"Cyclone":   a_a();break;
		case"Defensive": a_a();break;
		case"Fireball":  a_a();break;
		case"Firestorm": a_a();break;
		case"Freeze":    a_a();break;
		case"Frenzy":    a_a();break;
		case"Hunker":    a_a();break;
		case"Incinerate":a_a();break;
		case"Jump":      a_a();break;
		case"Leap":      a_a();break;
		case"Manic":     a_a();break;
		case"Peak":      a_a();break;
		case"Pounce":    a_a();break;
		case"Pound":     a_a();break;
		case"Reveal":    a_a();break;
		case"Shield":    a_a();break;
		case"Singe":     a_a();break;
		case"Teleport":  a_a();break;
		case"Uncover":   a_a();break;
		case"Wall":      a_a();break;
		default:active_ability='no';break;
		}
	}

function ability_action(loc){
	remove_top_items(); // This is called to help keep the right scrolling update bar from getting to long
	switch("yes"){
		case Bash:    go_Bash(loc);       break;
		case Cyclone: go_Cyclone(loc);    break;
		case Jump:    go_Jump('tp',loc);  break;
		case Leap:    go_Leap('tp',loc);  break;
		case Peak:    go_Peak(loc);       break;
		case Pounce:  go_Pounce('tp',loc);break;
		case Pound:   go_Pound(loc);      break;
		case Reveal:  go_Reveal(loc);     break;
		case Teleport:go_Teleport(loc);   break;
		case Uncover: go_Uncover(loc);    break;
		/* spells that can only be cast within visual range */
		case Fireball:  var check=get_vis_array().indexOf(loc);if(check!=-1){ignite_squares("Fireball") }break;
		case Firestorm: var check=get_vis_array().indexOf(loc);if(check!=-1){ignite_squares("Firestorm")}break;
		case Incinerate:var check=get_vis_array().indexOf(loc);if(check!=-1){go_Incinerate(loc)         }break;
		case Singe:     var check=get_vis_array().indexOf(loc);if(check!=-1){ignite_squares("Singe")    }break;
		// default currently covers using gear to get materials
		default:if(active_cancel!='no'){activateGear('',active_cancel,loc)}break;
		}
	}

function go_Incinerate(loc){
	copy_array(check_monster_arrays(loc));
	var m=check_monster_arrays(loc);
	var result=locked.indexOf(loc);
	if(result!=-1){
		var o = '<script>var iBurn=0;iMana=5;</script>';
			 o+='<div id="incinerateFloat">';
			 o+='<div>'+temp_monster[0]+'\'s hp: '+temp_monster[9]+'<div title="Cancel Incinerate" onClick="go_Incinerate(\'off\')">X</div></div>';
			 o+='<span id="damageSpan">';
			 o+='	 Damage<br />';
			 o+=' 	 <input id="damage" name="damage" readonly maxlength="2" size="2" value="0" />';
			 o+='</span>';
			 o+='<span id="floatCount">';
			 o+=' 	 <div id="pumpUp" onClick="changeMana(\'up\')"><img src="backgrounds/upArrow.jpg" /></div>';
			 o+=' 	 <div id="pumpDown" onClick="changeMana(\'down\')"><img src="backgrounds/downArrow.jpg" /></div>';
			 o+='</span>';
			 o+='<span id="manaSpan">';
			 o+='   Mana<br />';
			 o+='   <input id="mana" name="mana" readonly maxlength="2" size="2" value="5" />';
			 o+='</span><br /><br /><br />';
			 o+='<input id="submit" onClick="incinerate_target(\''+m+'\',iBurn,iMana)" type="submit" value="Incinerate!" style="background-color:#c00; color:#fff;">';
			 o+='</div>';

		$('#floater').css('margin-left','460px').html(o).show();
		}
	if(loc=='off'){Incinerate='no';remove_border();cancel_ability("Incinerate");closeFloaterDiv()}
	}

function go_Bash(data){
	if(data=='on'){for(i=0;i<range1.length;i++){$('#'+range1[i]).addClass("red_border")}}
	else if(data=='off'){for(i=0;i<range1.length;i++){$('#'+range1[i]).removeClass("red_border"); Bash='no'}}
	else{
		if($.inArray(data, range1)>-1){
			checker=check_monster_arrays(data);
			if(checker){
				var hasShield=/shield/i.exec(left_hand_slot);
				if (hasShield!=null){ // if player has a shield equipped
					go_Bash('off');
					cancel_ability('Bash');
					ability_cost('Bash','cast');
					attack_target(data,'Bash');
					}
				else { // if player does not have a shield equipped
					go_Bash('off');
					cancel_ability('Bash');
					alert('You need a shield equipped to Bash');
					}
				}
			}
		}
	}

function go_freeze(){alert('haven\'t built this yet')}
function go_Teleport(loc){var o=locked.indexOf(loc);if(o!=-1){alert("Cannot Teleport there")}else if($('#'+loc).hasClass('dark')){alert(' You can only teleport to a location\n you have already discovered')}else if(loc=='off'){Teleport='no';$('#'+player["oldloc"]).removeClass("yellow_border")}else{tp(loc);ability_cost('Teleport','cast');remove_border();cancel_ability("Teleport");Teleport='no';PotID=$('#left_main_pots').find('img').parent().parent().attr('id');if(PotID){$('#'+PotID).remove();switch(PotID){case'1Teleport':player['pot1']='';break;case'2Teleport':player['pot2']='';break;case'3Teleport':player['pot3']='';break;case'4Teleport':player['pot4']='';break;case'5Teleport':player['pot5']='';break;case'6Teleport':player['pot6']='';break;case'7Teleport':player['pot7']='';break;case'8Teleport':player['pot8']='';break;case'9Teleport':player['pot9']='';break;case'10Teleport':player['pot10']='';break}}}}
function go_force_field(data){if(data=='on'){$('#'+player['loc']).addClass("blue_border")}else if(data=='off'){$('#'+player['loc']).removeClass("blue_border"); $('#'+player['oldloc']).removeClass("blue_border");cancel_ability('Bubble');cancel_ability('Shield');cancel_ability('Wall')}}
function check_force_field(){if((Bubble||Shield||Wall)=='yes'){if(player['mana']>0){if((Bubble=='yes')&&(player['mana']>0)){player["mana"]-=1;move_force_field()}else if(player['mana']==1){go_force_field('off')}else{if(Bubble=='yes'){go_force_field('off')}else if(Shield=='yes'){player["mana"]-=2;move_force_field()}else if(Wall=='yes'){player["mana"]-=2;move_force_field()}}save_bar()}else{go_force_field('off')}}}
function move_force_field(){$('#'+player['oldloc']).removeClass('blue_border');$('#'+player['loc']).addClass('blue_border')}
function changeMana(n){if((n=='up')&&(parseInt(iMana)<parseInt(player['mana']))){if(parseInt(iMana)+2<parseInt(player['mana'])){iBurn++;iMana+=2;$('#damage').val(iBurn); $('#mana').val(iMana);}}else if((n=='down')&&(parseInt(iBurn)>=0)){if(iBurn>0){iBurn--;iMana-=2;$('#damage').val(iBurn);$('#mana').val(iMana)}}}
function incinerate_target(loc, dam, mana){hurt_monster(loc,dam);remove_border();cancel_ability("Incinerate");closeFloaterDiv();ability_cost('Incinerate','cast');reduce_player_mana(mana); Incinerate='no';check_vis()}
function go_Def_Hunk(data, x){if(data=='on'){$('#'+player["loc"]).addClass("brown_border");if(x=='Hunker'){check_vis(player["loc"]);}}else if(data=='off'){$('#'+player["oldloc"]).removeClass("brown_border");Hunker=Defensive='no';$('#Hunker_cancel, #Hunker_activate, #Hunker_active, #Defensive_cancel, #Defensive_activate, #Defensive_active').remove()}}
function go_Cyclone(data){if(data=='on'){for (i=0;i<range1.length;i++){$('#'+range1[i]).addClass("red_border")}}else if(data=='off'){for(i=0;i<range1.length;i++){$('#'+range1[i]).removeClass("red_border");Cyclone='no';}}else{if($.inArray(data, range1)>-1){go_Cyclone('off');cancel_ability('Cyclone');ability_cost('Cyclone','cast');attack_target(data);damage_around('Cyclone',player['loc'])}}}
function go_Pound(data){if(data=='on'){for(i=0;i<range1.length;i++){$('#'+range1[i]).addClass("red_border")}}else if(data=='off'){for(i=0;i<range1.length;i++){$('#'+range1[i]).removeClass("red_border");Pound='no'}}else{if($.inArray(data, range1)>-1){var check=locked.indexOf(data);if(check!=-1){go_Pound('off');cancel_ability('Pound');ability_cost('Pound','cast');attack_target(data,'Stun')}}}}
function go_Leap(data,loc){var result=locked.indexOf(loc);if(result!=-1){alert("Cannot Leap there")}else if(data=='off'){for(i=0;i<range1and2.length;i++){$('#'+range1and2[i]).removeClass("yellow_border");Leap='no'}}else if(data=='tp'){if($.inArray(loc, range1and2)>-1){go_Leap('off');ability_cost('Leap','cast');tp(loc);cancel_ability('Leap')}}else{for(i=0;i<range1and2.length;i++){$('#'+range1and2[i]).addClass("yellow_border")}}}
function go_Jump(data,loc){var result=locked.indexOf(loc);if(result!=-1){alert("Cannot Jump there")}else if(data=='off'){for(i=0;i<vis_array.length;i++){$('#'+vis_array[i]).removeClass("yellow_border");Jump='no'}}else if(data=='tp'){if($.inArray(loc, vis_array)>-1){go_Jump('off');ability_cost('Jump','cast');tp(loc);cancel_ability('Jump')}}else{for (i=0;i<vis_array.length;i++){$('#'+vis_array[i]).addClass("yellow_border")}}}
function go_Pounce(data,loc){var result=locked.indexOf(loc);if(result!=-1){alert("Cannot Pounce there")}else if(data=='off'){for(i=0;i<vis_array.length;i++){$('#'+vis_array[i]).removeClass("red_border");Pounce='no'}}else if(data=='tp'){if($.inArray(loc, vis_array)>-1){damage_around('Pounce',loc);go_Pounce('off');ability_cost('Pounce','cast');tp(loc);cancel_ability('Pounce')}}else{for(i=0;i<vis_array.length;i++){$('#'+vis_array[i]).addClass("red_border")}}}
function go_Peak(loc){if(loc=='off'){Peak='no';for(i=0;i<vis_array.length;i++){$('#'+vis_array[i]).removeClass("blue_border");}}else{$(hover_array).each(function(i){make_vis(hover_array,'no');});ability_cost('Peak','cast');cancel_ability('Peak')}}
function go_Uncover(loc){if(loc=='off'){Uncover='no';for(i=0;i<vis_array.length;i++){$('#'+vis_array[i]).removeClass("blue_border")}}else{$(hover_array).each(function(i){make_vis(hover_array,'no');});ability_cost('Uncover','cast');cancel_ability('Uncover')}}
function tp(loc){player["oldloc"]=player["loc"];go_Def_Hunk('off');$('#'+player["oldloc"]).css('backgroundPosition', player["oldimage"]);player["loc"]=loc;player["oldloc"]=loc;player["oldimage"]=check_current_terrain(player["oldloc"]);i=loc.split("_");player["var1"]=i[0];player["oldvar1"]=i[0];player["var2"]=i[1];player["oldvar2"]=i[1];player["backup_loc"]=loc;$('#'+player["loc"]).css('backgroundPosition', player["image"]);player["watercnt"]=1;player["treecnt"]=1;player["rockcnt"]=1;check_vis(player["loc"])}
function fire_burn_out(){if(fire_array[0]<=0){remove_flames()}else{fire_array[0]=parseInt(fire_array[0])-1}}
function remove_flames(){$(fire_array).each(function(i){$("#"+fire_array[i]).empty();});$(fire_array).each(function(i){fire_array.splice(i)})}
function remove_AoE_borders(){for(i=0;i<hover_array.length;i++){z="#"+hover_array[i];z_parent=$(z).parent().parent();$(z_parent).removeClass()}}
function remove_border(){x="#"+player["loc"];x_parent=$(x).parent().parent();$(x_parent).removeClass()}
function go_Reveal(loc){if(loc=='off'){var vis_array=get_vis_array();for(i=0;i<vis_array.length;i++){$('#'+vis_array[i]).removeClass("blue_border")}Reveal='no'}else{PotID=$('#left_main_pots').find('img').parent().parent().attr('id');if(PotID){switch(PotID){case'1Reveal':player['pot1']='';break;case'2Reveal':player['pot2']='';break;case'3Reveal':player['pot3']='';break;case'4Reveal':player['pot4']='';break;case'5Reveal':player['pot5']='';break;case'6Reveal':player['pot6']='';break;case'7Reveal':player['pot7']='';break;case'8Reveal':player['pot8']='';break;case'9Reveal':player['pot9']='';break;case'10Reveal':player['pot10']='';break;}}$(hover_array).each(function(i){make_vis(hover_array,'no')});ability_cost('Reveal','cast');cancel_ability('Reveal')}}
function damage_around(x,loc){loc_arr=loc.split('_');set_range1(loc_arr[0],loc_arr[1]);set_range2(loc_arr[0],loc_arr[1]);switch(x){case'Pounce':$.each(locked, function(index, value){if($.inArray(value, range1)>-1){y=check_monster_arrays(value);var damage=Math.floor(Math.random()*20)+1;hurt_monster(y,damage);}if($.inArray(value, range2)>-1){y=check_monster_arrays(value);var damage=Math.floor(Math.random()*10)+1;hurt_monster(y,damage);}});break;case'Cyclone':$.each(locked, function(index, value){if($.inArray(value, range1)>-1){y=check_monster_arrays(value);var damage=Math.floor(Math.random()*10)+1;hurt_monster(y,damage)}});break}}
function ignite_squares(spell){$(hover_array).each (function(i){$("#"+hover_array[i]).html("<img class=\"fire\" src=\"backgrounds/fire.gif\" />");});fire_array[0]=4;/* will last 4 turns */if(fire_array[1]==undefined){$(hover_array).each(function(i){fire_array.push(hover_array[i]);})}check_flames("no_monster","ignite");remove_AoE_borders();cancel_ability(spell);}

function check_flames(monster,loc) {
	// ignite shows that the fire was just set and we should test to see if any monsters are currently in there
	if(loc=="ignite"){$(fire_array).each(function(i){o=locked.indexOf(fire_array[i]);if(o!=-1){
		if(fire_array[i]==monster1[3]){monster1[9]=parseInt(monster1[9])-3;right_content("mfire",3,monster1[0]);if(monster1[9]<=0){monster_dies("monster1")}}
		if(fire_array[i]==monster2[3]){monster2[9]=parseInt(monster2[9])-3;right_content("mfire",3,monster2[0]);if(monster2[9]<=0){monster_dies("monster2")}}
		if(fire_array[i]==monster3[3]){monster3[9]=parseInt(monster3[9])-3;right_content("mfire",3,monster3[0]);if(monster3[9]<=0){monster_dies("monster3")}}
		if(fire_array[i]==monster4[3]){monster4[9]=parseInt(monster4[9])-3;right_content("mfire",3,monster4[0]);if(monster4[9]<=0){monster_dies("monster4")}}
		if(fire_array[i]==monster5[3]){monster5[9]=parseInt(monster5[9])-3;right_content("mfire",3,monster5[0]);if(monster5[9]<=0){monster_dies("monster5")}}
		if(typeof monster6!='undefined'){if(fire_array[i]==monster6[3]){monster6[9]=parseInt(monster6[9])-3;right_content("mfire",3,monster6[0]);if(monster6[9]<=0){monster_dies("monster6")}}}
		if(typeof monster7!='undefined'){if(fire_array[i]==monster7[3]){monster7[9]=parseInt(monster7[9])-3;right_content("mfire",3,monster7[0]);if(monster7[9]<=0){monster_dies("monster7")}}}
		if(typeof monster8!='undefined'){if(fire_array[i]==monster8[3]){monster8[9]=parseInt(monster8[9])-3;right_content("mfire",3,monster8[0]);if(monster8[9]<=0){monster_dies("monster8")}}}
		if(typeof monster9!='undefined'){if(fire_array[i]==monster9[3]){monster9[9]=parseInt(monster9[9])-3;right_content("mfire",3,monster9[0]);if(monster9[9]<=0){monster_dies("monster9")}}}
		if(typeof monster10!='undefined'){if(fire_array[i]==monster10[3]){monster10[9]=parseInt(monster10[9])-3;right_content("mfire",3,monster10[0]);if(monster10[9]<=0){monster_dies("monster10")}}}
		if(typeof monster11!='undefined'){if(fire_array[i]==monster11[3]){monster11[9]=parseInt(monster11[9])-3;right_content("mfire",3,monster11[0]);if(monster11[9]<=0){monster_dies("monster11")}}}
		if(typeof monster12!='undefined'){if(fire_array[i]==monster12[3]){monster12[9]=parseInt(monster12[9])-3;right_content("mfire",3,monster12[0]);if(monster12[9]<=0){monster_dies("monster12")}}}
		if(typeof monster13!='undefined'){if(fire_array[i]==monster13[3]){monster13[9]=parseInt(monster13[9])-3;right_content("mfire",3,monster13[0]);if(monster13[9]<=0){monster_dies("monster13")}}}
		if(typeof monster14!='undefined'){if(fire_array[i]==monster14[3]){monster14[9]=parseInt(monster14[9])-3;right_content("mfire",3,monster14[0]);if(monster14[9]<=0){monster_dies("monster14")}}}
		if(typeof monster15!='undefined'){if(fire_array[i]==monster15[3]){monster15[9]=parseInt(monster15[9])-3;right_content("mfire",3,monster15[0]);if(monster15[9]<=0){monster_dies("monster15")}}}
		if(typeof monster16!='undefined'){if(fire_array[i]==monster16[3]){monster16[9]=parseInt(monster16[9])-3;right_content("mfire",3,monster16[0]);if(monster16[9]<=0){monster_dies("monster16")}}}
		if(typeof monster17!='undefined'){if(fire_array[i]==monster17[3]){monster17[9]=parseInt(monster17[9])-3;right_content("mfire",3,monster17[0]);if(monster17[9]<=0){monster_dies("monster17")}}}
		if(typeof monster18!='undefined'){if(fire_array[i]==monster18[3]){monster18[9]=parseInt(monster18[9])-3;right_content("mfire",3,monster18[0]);if(monster18[9]<=0){monster_dies("monster18")}}}
		if(typeof monster19!='undefined'){if(fire_array[i]==monster19[3]){monster19[9]=parseInt(monster19[9])-3;right_content("mfire",3,monster19[0]);if(monster19[9]<=0){monster_dies("monster19")}}}
		if(typeof monster20!='undefined'){if(fire_array[i]==monster20[3]){monster20[9]=parseInt(monster20[9])-3;right_content("mfire",3,monster20[0]);if(monster20[9]<=0){monster_dies("monster20")}}}
		if(typeof monster21!='undefined'){if(fire_array[i]==monster21[3]){monster21[9]=parseInt(monster21[9])-3;right_content("mfire",3,monster21[0]);if(monster21[9]<=0){monster_dies("monster21")}}}
		if(typeof monster22!='undefined'){if(fire_array[i]==monster22[3]){monster22[9]=parseInt(monster22[9])-3;right_content("mfire",3,monster22[0]);if(monster22[9]<=0){monster_dies("monster22")}}}
		if(typeof monster23!='undefined'){if(fire_array[i]==monster23[3]){monster23[9]=parseInt(monster23[9])-3;right_content("mfire",3,monster23[0]);if(monster23[9]<=0){monster_dies("monster23")}}}
		if(typeof monster24!='undefined'){if(fire_array[i]==monster24[3]){monster24[9]=parseInt(monster24[9])-3;right_content("mfire",3,monster24[0]);if(monster24[9]<=0){monster_dies("monster24")}}}
		if(typeof monster25!='undefined'){if(fire_array[i]==monster25[3]){monster25[9]=parseInt(monster25[9])-3;right_content("mfire",3,monster25[0]);if(monster25[9]<=0){monster_dies("monster25")}}}
		if(typeof monster26!='undefined'){if(fire_array[i]==monster26[3]){monster26[9]=parseInt(monster26[9])-3;right_content("mfire",3,monster26[0]);if(monster26[9]<=0){monster_dies("monster26")}}}
		if(typeof monster27!='undefined'){if(fire_array[i]==monster27[3]){monster27[9]=parseInt(monster27[9])-3;right_content("mfire",3,monster27[0]);if(monster27[9]<=0){monster_dies("monster27")}}}
		if(typeof monster28!='undefined'){if(fire_array[i]==monster28[3]){monster28[9]=parseInt(monster28[9])-3;right_content("mfire",3,monster28[0]);if(monster28[9]<=0){monster_dies("monster28")}}}
		if(typeof monster29!='undefined'){if(fire_array[i]==monster29[3]){monster29[9]=parseInt(monster29[9])-3;right_content("mfire",3,monster29[0]);if(monster29[9]<=0){monster_dies("monster29")}}}
		if(typeof monster30!='undefined'){if(fire_array[i]==monster30[3]){monster30[9]=parseInt(monster30[9])-3;right_content("mfire",3,monster30[0]);if(monster30[9]<=0){monster_dies("monster30")}}}
		if(typeof monster31!='undefined'){if(fire_array[i]==monster31[3]){monster31[9]=parseInt(monster31[9])-3;right_content("mfire",3,monster31[0]);if(monster31[9]<=0){monster_dies("monster31")}}}
		if(typeof monster32!='undefined'){if(fire_array[i]==monster32[3]){monster32[9]=parseInt(monster32[9])-3;right_content("mfire",3,monster32[0]);if(monster32[9]<=0){monster_dies("monster32")}}}
		if(typeof monster33!='undefined'){if(fire_array[i]==monster33[3]){monster33[9]=parseInt(monster33[9])-3;right_content("mfire",3,monster33[0]);if(monster33[9]<=0){monster_dies("monster33")}}}
		if(typeof monster34!='undefined'){if(fire_array[i]==monster34[3]){monster34[9]=parseInt(monster34[9])-3;right_content("mfire",3,monster34[0]);if(monster34[9]<=0){monster_dies("monster34")}}}
		if(typeof monster35!='undefined'){if(fire_array[i]==monster35[3]){monster35[9]=parseInt(monster35[9])-3;right_content("mfire",3,monster35[0]);if(monster35[9]<=0){monster_dies("monster35")}}}
		if(typeof monster36!='undefined'){if(fire_array[i]==monster36[3]){monster36[9]=parseInt(monster36[9])-3;right_content("mfire",3,monster36[0]);if(monster36[9]<=0){monster_dies("monster36")}}}
		if(typeof monster37!='undefined'){if(fire_array[i]==monster37[3]){monster37[9]=parseInt(monster37[9])-3;right_content("mfire",3,monster37[0]);if(monster37[9]<=0){monster_dies("monster37")}}}
		if(typeof monster38!='undefined'){if(fire_array[i]==monster38[3]){monster38[9]=parseInt(monster38[9])-3;right_content("mfire",3,monster38[0]);if(monster38[9]<=0){monster_dies("monster38")}}}
		if(typeof monster39!='undefined'){if(fire_array[i]==monster39[3]){monster39[9]=parseInt(monster39[9])-3;right_content("mfire",3,monster39[0]);if(monster39[9]<=0){monster_dies("monster39")}}}
		if(typeof monster40!='undefined'){if(fire_array[i]==monster40[3]){monster40[9]=parseInt(monster40[9])-3;right_content("mfire",3,monster40[0]);if(monster40[9]<=0){monster_dies("monster40")}}}
		if(typeof monster41!='undefined'){if(fire_array[i]==monster41[3]){monster41[9]=parseInt(monster41[9])-3;right_content("mfire",3,monster41[0]);if(monster41[9]<=0){monster_dies("monster41")}}}
		if(typeof monster42!='undefined'){if(fire_array[i]==monster42[3]){monster42[9]=parseInt(monster42[9])-3;right_content("mfire",3,monster42[0]);if(monster42[9]<=0){monster_dies("monster42")}}}
		if(typeof monster43!='undefined'){if(fire_array[i]==monster43[3]){monster43[9]=parseInt(monster43[9])-3;right_content("mfire",3,monster43[0]);if(monster43[9]<=0){monster_dies("monster43")}}}
		if(typeof monster44!='undefined'){if(fire_array[i]==monster44[3]){monster44[9]=parseInt(monster44[9])-3;right_content("mfire",3,monster44[0]);if(monster44[9]<=0){monster_dies("monster44")}}}
		if(typeof monster45!='undefined'){if(fire_array[i]==monster45[3]){monster45[9]=parseInt(monster45[9])-3;right_content("mfire",3,monster45[0]);if(monster45[9]<=0){monster_dies("monster45")}}}
		if(typeof monster46!='undefined'){if(fire_array[i]==monster46[3]){monster46[9]=parseInt(monster46[9])-3;right_content("mfire",3,monster46[0]);if(monster46[9]<=0){monster_dies("monster46")}}}
		if(typeof monster47!='undefined'){if(fire_array[i]==monster47[3]){monster47[9]=parseInt(monster47[9])-3;right_content("mfire",3,monster47[0]);if(monster47[9]<=0){monster_dies("monster47")}}}
		if(typeof monster48!='undefined'){if(fire_array[i]==monster48[3]){monster48[9]=parseInt(monster48[9])-3;right_content("mfire",3,monster48[0]);if(monster48[9]<=0){monster_dies("monster48")}}}
		if(typeof monster49!='undefined'){if(fire_array[i]==monster49[3]){monster49[9]=parseInt(monster49[9])-3;right_content("mfire",3,monster49[0]);if(monster49[9]<=0){monster_dies("monster49")}}}
		if(typeof monster50!='undefined'){if(fire_array[i]==monster50[3]){monster50[9]=parseInt(monster50[9])-3;right_content("mfire",3,monster50[0]);if(monster50[9]<=0){monster_dies("monster50")}}}
		if(typeof monster51!='undefined'){if(fire_array[i]==monster51[3]){monster51[9]=parseInt(monster51[9])-3;right_content("mfire",3,monster51[0]);if(monster51[9]<=0){monster_dies("monster51")}}}
		if(typeof monster52!='undefined'){if(fire_array[i]==monster52[3]){monster52[9]=parseInt(monster52[9])-3;right_content("mfire",3,monster52[0]);if(monster52[9]<=0){monster_dies("monster52")}}}
		if(typeof monster53!='undefined'){if(fire_array[i]==monster53[3]){monster53[9]=parseInt(monster53[9])-3;right_content("mfire",3,monster53[0]);if(monster53[9]<=0){monster_dies("monster53")}}}
		if(typeof monster54!='undefined'){if(fire_array[i]==monster54[3]){monster54[9]=parseInt(monster54[9])-3;right_content("mfire",3,monster54[0]);if(monster54[9]<=0){monster_dies("monster54")}}}
		if(typeof monster55!='undefined'){if(fire_array[i]==monster55[3]){monster55[9]=parseInt(monster55[9])-3;right_content("mfire",3,monster55[0]);if(monster55[9]<=0){monster_dies("monster55")}}}
		}})}
	// if loc is not undefined that means a monster location has been sent to this function and we need to see if that location is in the fire
	else if(loc!=undefined){o=fire_array.indexOf(loc);if(o!=-1){right_content("m_in_fire",3);temp_monster[9]=parseInt(temp_monster[9])-3;if(temp_monster[9]<=0){monster_dies(monster)}}}
	// this next one tests to see if the player is in the fire
	else{o=fire_array.indexOf(player["loc"]);if(o!=-1){alert("Player is in the fire")}}
	}

//*********************************************************************//
//******************  *3*  Player movement!   *************************//
//*********************************************************************//

function char_move(event){
	if(movement=='gear'){deactivate_gear()}
	if(movement==''){
		function finish_switch(){player["loc"]=player["var1"]+"_"+player["var2"];check_move()}
		switch(event.keyCode){
			case 37:assign_chars();player["var2"]--;finish_switch();break; // left
			case 38:assign_chars();player["var1"]--;finish_switch();break; // up
			case 39:assign_chars();player["var2"]++;finish_switch();break; // right
			case 40:assign_chars();player["var1"]++;finish_switch();break; // down
			case 82:rest();break; // r
			case 67:  // c
				//openCastle();
				//create_treasure("chest");
				alert(player['s_timer']);
				break;
			}
		}
	else if(movement=="loot"){
		var obj=$('#lootpage').find('.focus');
		switch(event.keyCode){
			case 37:if($(obj).prev().html()=='Pick up'){$(obj).removeClass('focus').prev().addClass('focus').focus()}break; // left
			case 38:if($(obj).parent().prev().children('a:first').html()=='Pick up'){$(obj).removeClass('focus').parent().prev().children('a:first').addClass('focus').focus()}break; // up
			case 39:if($(obj).next().html()=='Equip'){$(obj).removeClass('focus').next().addClass('focus').focus()}break; // right
			case 40:if($(obj).parent().next().children('a:first').html()=='Pick up'){$(obj).removeClass('focus').parent().next().children('a:first').addClass('focus').focus()}break; // down
			}
		}
	}

function assign_chars(){player["oldvar2"]=player["var2"]; player["oldvar1"]=player["var1"];player["oldloc"]=player["loc"]; player["backup_loc"]=player["var1"]+"_"+player["var2"];}
function rest(){remove_top_items();if((parseInt(player["hp"])<parseInt(player["max_hp"]))||(parseInt(player["mana"])<parseInt(player["max_mana"]))){if(parseInt(player["hp"])<parseInt(player["max_hp"])){player["hp"]=parseInt(player["hp"])+1;}if(parseInt(player["mana"])<parseInt(player["max_mana"])){player["mana"]=parseInt(player["mana"])+1;}if(player["hp"]>player["max_hp"]){player["hp"]=player["max_hp"]}if(player["mana"]>player["max_mana"]){player["mana"]=player["max_mana"]}save_bar();update_exp_bar();activate_all_monsters();monster_move();if(left_menu=="main"){left_main()}}}
function save_map(){var mapVar=jQuery('#map').html();for(i=0;i<1013;i++){mapVar=mapVar.toString().replace(" dark", "");mapVar=mapVar.toString().replace(/style(.*?)id/, "id");mapVar=mapVar.toString().replace(/title(.*?)hp"/, "");}$.ajax({type:"POST", url:"working/save_char.php", data:"map="+mapVar, error:function(){aJaxError(xhr.status,exception)}});}
function reset_terrain(){player["watercnt"]=1; player["treecnt"]=1;player["rockcnt"]=1}
function check_current_terrain(currentloc){loc="#"+currentloc;if($(loc).hasClass('dark')){o="0px 0px"}else{if($(loc).hasClass("grass")){o="0px -20px"}else if($(loc).hasClass("rock")){o="0px -40px"}else if($(loc).hasClass("tree")){o="0px -60px"}else if($(loc).hasClass("water")){o="0px -80px"}else if($(loc).hasClass('academy')){o='48px 40px'}else if($(loc).hasClass('barracks')){o='48px -60px'}else if($(loc).hasClass('enchanter')){o='48px -80px'}else if($(loc).hasClass('forge')){o='48px -100px'}else if($(loc).hasClass('house')){o='48px -120px'}else if($(loc).hasClass('store')){o='48px -140px'}else if($(loc).hasClass('library')){o='48px -160px'}else{o="0px 0px"}}return o}
function check_vis(){var back1=player["var1"];var back2=player["var2"];var Var1=player["var1"];var Var2=player["var2"];set_range1(Var1,Var2);set_range2(Var1,Var2);for(i=0;i<range1and2.length;i++){range1and2.splice(i)}for(i=0;i<range3.length;i++){range3.splice(i)}set_range3(Var1,Var2);for(i=0;i<range1.length;i++){range1and2.push(range1[i])} for(i=0;i<range2.length;i++){range1and2.push(range2[i])}for(i=0;i<range2.length;i++){range3.push(range2[i])}var vis_array=new Array();for(i=0;i<range1.length;i++){vis_array.push(range1[i])}for(i=0;i<range3.length;i++){vis_array.push(range3[i])}make_vis(vis_array)}
function toggle_links(data){$('#navigation').find('a').each(function(){if(data=='on'){alink=$(this).attr('name'); $(this).attr('href',alink);$(this).removeAttr('name')}else{alink=$(this).attr('href');$(this).attr('name',alink);$(this).attr('href','javascript: alert(" You must cancel out of the currently active ability or potion\\n before using the navigation");')}});$('#left_main_ab').children('li').each(function(){if(data=='on'){alink=$(this).children('a').attr('name'); $(this).children('a').attr('href',alink);$(this).children('a').removeAttr('name')}else{alink=$(this).children('a').attr('href');$(this).children('a').attr('name',alink);$(this).children('a').attr('href','javascript: alert(" You must cancel out of the currently active ability or potion\\n before trying to activate this one");')}});}
function revert(){player["var1"]=player["oldvar1"];player["var2"]=player["oldvar2"];player["loc"]=player["oldloc"];player["oldloc"]=player["backup_loc"];document.getElementById(player["loc"]).style.backgroundPosition=player["image"];check_vis()}
function get_style(){if(player["var2"]==0||player["var2"]==47||player["var1"]==0||player["var1"]==23){player["watercnt"]=1;player["treecnt"]=1;player["rockcnt"]=1;revert()}else{var ploc=document.getElementById(player["loc"]);var style=document.defaultView.getComputedStyle(ploc, null).getPropertyValue("background-position");return style}}

function check_move(){
	remove_top_items();
	fire_burn_out();
	var i=locked.indexOf(player["loc"]);
	if(i!=-1){attack_target(player["loc"]); revert(); return} // attack a monster
	else if((Hunker!='no')||(Defensive!='no')){go_Def_Hunk('off')} // if player did not attack a monster, remove the Hunker or Defensive abilities if they are active
	multiAttackCountDown();
	var background=get_style();

	if ($('#'+player["loc"]).hasClass("portal")) {
		save_character();
		if($('.castle').html()!=null){save_map()}
		if(portal=='castle'){if(parseInt(player['abpoints'])>0){window.location='/rpg?abpoints='+player['abpoints']+'&castle'}else{window.location='/rpg?castle'}}
		else if(portal=='quest1'){ /* find super monster */ }
		else{alert("Teleporting to new area!");if(parseInt(player['abpoints'])>0){window.location='/rpg?abpoints='+player['abpoints']}else{window.location='/rpg'}}
		}

	else if($('#'+player["loc"]).hasClass("castle"))    {if(player['castle']==''){save_map();alert('You found the castle!\n +25 exp');player['castle']='yes';gain_exp(25);}$('#'+$(".castle").attr("id")).removeClass('castle').addClass('none2').css({'background-image':'url(backgrounds/sprite.jpg)','background-position':player['image']}); updateloc(); save_character(); openCastle()}
	else if(background=="48px -180px")/* Treasure */    {reset_terrain();check_treasure()}	
	else if($('#'+player["loc"]).hasClass("academy"))   {reset_terrain();updateloc();open_building('academy')}
	else if($('#'+player["loc"]).hasClass("barracks"))  {reset_terrain();updateloc();open_building('barracks')}
	else if($('#'+player["loc"]).hasClass("enchanter")) {reset_terrain();updateloc();open_building('enchanter')}
	else if($('#'+player["loc"]).hasClass("forge"))     {reset_terrain();updateloc();open_building('forge')}
	else if($('#'+player["loc"]).hasClass("house"))     {reset_terrain();updateloc();open_building('house')}
	else if($('#'+player["loc"]).hasClass("store"))     {reset_terrain();updateloc();open_building('store')}
	else if($('#'+player["loc"]).hasClass("library"))   {reset_terrain();updateloc();open_building('library')}
	else if($('#'+player["loc"]).hasClass("tree"))      {if(player["treecnt"]==2) {updateloc();}else{player["watercnt"]=1; player["rockcnt"]=1; player["treecnt"]++; revert()}}
	else if($('#'+player["loc"]).hasClass("water"))     {if(player["watercnt"]==3){updateloc();}else{player["rockcnt"]=1;  player["treecnt"]=1; player["watercnt"]++; revert()}}
	else if($('#'+player["loc"]).hasClass("rock"))      {if(player["rockcnt"]==4) {updateloc();}else{player["watercnt"]=1; player["treecnt"]=1; player["rockcnt"]++; revert()}}
	else if($('#'+player["loc"]).hasClass("grass"))     {reset_terrain();updateloc()}
	else if($('#'+player["loc"]).hasClass("shop"))      {reset_terrain();updateloc();create_treasure("shop")}
	else{ /* alert("error, background = " + background); */ }
	check_force_field();
	}

function updateloc() {
	player["oldimage"]=check_current_terrain(player["oldloc"]);
	if($('#'+player["oldloc"]).hasClass('none')&&(player['loc']!=player['oldloc'])) {$(".none").css({'background-image':'','background-position':'0px 0px'}).addClass('portal').removeClass('none')}
	if($('#'+player["oldloc"]).hasClass('none2')&&(player['loc']!=player['oldloc'])){$(".none2").css({'background-image':'','background-position':'0px 0px'}).addClass('castle').removeClass('none2')}
	document.getElementById(player["oldloc"]).style.backgroundPosition=player["oldimage"];
	document.getElementById(player["loc"]).style.backgroundPosition=player["image"];
	player["watercnt"]=1; player["treecnt"]=1; player["rockcnt"]=1;
	check_vis(player["loc"]);
	}

function set_range1(Var1,Var2) {
	range1[0]=(parseInt(Var1)-parseInt(1))+"_"+ parseInt(Var2);              // up one
	range1[1]= parseInt(Var1)+"_"+             (parseInt(Var2)+parseInt(1)); // right one
	range1[2]=(parseInt(Var1)+parseInt(1))+"_"+ parseInt(Var2);              // down one
	range1[3]= parseInt(Var1)+"_"+             (parseInt(Var2)-parseInt(1)); // left one
	range1[4]=(parseInt(Var1)-parseInt(1))+"_"+(parseInt(Var2)+parseInt(1)); // up one right one
	range1[5]=(parseInt(Var1)-parseInt(1))+"_"+(parseInt(Var2)-parseInt(1)); // up one left one
	range1[6]=(parseInt(Var1)+parseInt(1))+"_"+(parseInt(Var2)-parseInt(1)); // down one left one
	range1[7]=(parseInt(Var1)+parseInt(1))+"_"+(parseInt(Var2)+parseInt(1)); // down one right one
	}

function set_range2(Var1,Var2) {
	range2[0]= (parseInt(Var1)-parseInt(1))+"_"+(parseInt(Var2)+parseInt(2)); // up one right two
	range2[1]= (parseInt(Var1)-parseInt(1))+"_"+(parseInt(Var2)-parseInt(2)); // up one left two
	range2[2]= (parseInt(Var1)+parseInt(1))+"_"+(parseInt(Var2)-parseInt(2)); // down one left two
	range2[3]= (parseInt(Var1)+parseInt(1))+"_"+(parseInt(Var2)+parseInt(2)); // down one right two
	range2[4]= (parseInt(Var1)-parseInt(2))+"_"+(parseInt(Var2)+parseInt(1)); // up two right one
	range2[5]= (parseInt(Var1)-parseInt(2))+"_"+(parseInt(Var2)+parseInt(2)); // up two right two
	range2[6]= (parseInt(Var1)-parseInt(2))+"_"+(parseInt(Var2)-parseInt(1)); // up two left one
	range2[7]= (parseInt(Var1)-parseInt(2))+"_"+(parseInt(Var2)-parseInt(2)); // up two left two
	range2[8]=  parseInt(Var1)+"_"+             (parseInt(Var2)-parseInt(2)); // left two
	range2[9]=  parseInt(Var1)+"_"+             (parseInt(Var2)+parseInt(2)); // right two
	range2[10]=(parseInt(Var1)+parseInt(2))+"_"+ parseInt(Var2);              // down two
	range2[11]=(parseInt(Var1)-parseInt(2))+"_"+ parseInt(Var2);              // up two
	range2[12]=(parseInt(Var1)+parseInt(2))+"_"+(parseInt(Var2)-parseInt(1)); // down two left one
	range2[13]=(parseInt(Var1)+parseInt(2))+"_"+(parseInt(Var2)-parseInt(2)); // down two left two
	range2[14]=(parseInt(Var1)+parseInt(2))+"_"+(parseInt(Var2)+parseInt(1)); // down two right one
	range2[15]=(parseInt(Var1)+parseInt(2))+"_"+(parseInt(Var2)+parseInt(2)); // down two right two
	}

function set_range3(Var1,Var2) {
	range3[0]= (parseInt(Var1)+parseInt(3))+"_"+ parseInt(Var2);              // up three
	range3[1]= (parseInt(Var1)-parseInt(3))+"_"+ parseInt(Var2);              // down three
	range3[2]=  parseInt(Var1)+"_"+             (parseInt(Var2)+parseInt(3)); // right three
	range3[3]=  parseInt(Var1)+"_"+             (parseInt(Var2)-parseInt(3)); // left three
	range3[4]= (parseInt(Var1)+parseInt(1))+"_"+(parseInt(Var2)-parseInt(3)); // left three up one
	range3[5]= (parseInt(Var1)+parseInt(2))+"_"+(parseInt(Var2)-parseInt(3)); // left three up two
	range3[6]= (parseInt(Var1)+parseInt(3))+"_"+(parseInt(Var2)-parseInt(3)); // left three up three
	range3[7]= (parseInt(Var1)-parseInt(1))+"_"+(parseInt(Var2)-parseInt(3)); // left three down one
	range3[8]= (parseInt(Var1)-parseInt(2))+"_"+(parseInt(Var2)-parseInt(3)); // left three down two
	range3[9]= (parseInt(Var1)-parseInt(3))+"_"+(parseInt(Var2)-parseInt(3)); // left three down three
	range3[10]=(parseInt(Var1)+parseInt(3))+"_"+(parseInt(Var2)-parseInt(2)); // left two up three
	range3[11]=(parseInt(Var1)+parseInt(3))+"_"+(parseInt(Var2)-parseInt(1)); // left one up three
	range3[12]=(parseInt(Var1)-parseInt(3))+"_"+(parseInt(Var2)-parseInt(2)); // left two down three 
	range3[13]=(parseInt(Var1)-parseInt(3))+"_"+(parseInt(Var2)-parseInt(1)); // left one down three
	range3[14]=(parseInt(Var1)-parseInt(3))+"_"+(parseInt(Var2)+parseInt(1)); // right one up three
	range3[15]=(parseInt(Var1)+parseInt(3))+"_"+(parseInt(Var2)+parseInt(1)); // right one down three
	range3[16]=(parseInt(Var1)-parseInt(3))+"_"+(parseInt(Var2)+parseInt(2)); // right two up three
	range3[17]=(parseInt(Var1)+parseInt(3))+"_"+(parseInt(Var2)+parseInt(2)); // right two down three
	range3[18]=(parseInt(Var1)-parseInt(1))+"_"+(parseInt(Var2)+parseInt(3)); // right three up one
	range3[19]=(parseInt(Var1)-parseInt(2))+"_"+(parseInt(Var2)+parseInt(3)); // right three up  two
	range3[20]=(parseInt(Var1)-parseInt(3))+"_"+(parseInt(Var2)+parseInt(3)); // right three up three
	range3[21]=(parseInt(Var1)+parseInt(1))+"_"+(parseInt(Var2)+parseInt(3)); // right three down one
	range3[22]=(parseInt(Var1)+parseInt(2))+"_"+(parseInt(Var2)+parseInt(3)); // right three down two
	range3[23]=(parseInt(Var1)+parseInt(3))+"_"+(parseInt(Var2)+parseInt(3)); // right three down three
	}

function make_vis(vis_array,potID){
	for(i=0;i<vis_array.length;i++){
		$(loc).removeClass('dark');
		loc="#"+vis_array[i];
		if($(loc).hasClass("grass"))      {$('#'+vis_array[i]).css('backgroundPosition','0% -20px')}
		else if($(loc).hasClass("rock"))  {$('#'+vis_array[i]).css('backgroundPosition','0% -40px')}
		else if($(loc).hasClass("tree"))  {$('#'+vis_array[i]).css('backgroundPosition','0% -60px')}
		else if($(loc).hasClass("water")) {$('#'+vis_array[i]).css('backgroundPosition','0% -80px')}
		else if($(loc).hasClass("shop"))  {$('#'+vis_array[i]).css('backgroundPosition','48px 0px')}
		else if($(loc).hasClass("portal")){$('#'+vis_array[i]).css('backgroundImage','url(backgrounds/portal.gif)')}
		else if($(loc).hasClass("castle")){$('#'+vis_array[i]).css('backgroundPosition','48px -20px')}
		if(treasure_array!=''){for (x=0;x<treasure_array.length;x++){$('#'+treasure_array[x][0]).css('backgroundPosition','48px -180px')}
		}

		if(typeof monster1!='undefined'){if(vis_array[i]==monster1[3]){$('#'+monster1[3]).css('backgroundPosition',monster1[13]);found_monster("monster1")}}
		if(typeof monster2!='undefined'){if(vis_array[i]==monster2[3]){$('#'+monster2[3]).css('backgroundPosition',monster2[13]);found_monster("monster2")}}
		if(typeof monster3!='undefined'){if(vis_array[i]==monster3[3]){$('#'+monster3[3]).css('backgroundPosition',monster3[13]);found_monster("monster3")}}
		if(typeof monster4!='undefined'){if(vis_array[i]==monster4[3]){$('#'+monster4[3]).css('backgroundPosition',monster4[13]);found_monster("monster4")}}
		if(typeof monster5!='undefined'){if(vis_array[i]==monster5[3]){$('#'+monster5[3]).css('backgroundPosition',monster5[13]);found_monster("monster5")}}
		if(typeof monster6!='undefined'){if(vis_array[i]==monster6[3]){$('#'+monster6[3]).css('backgroundPosition',monster6[13]);found_monster("monster6")}}
		if(typeof monster7!='undefined'){if(vis_array[i]==monster7[3]){$('#'+monster7[3]).css('backgroundPosition',monster7[13]);found_monster("monster7")}}
		if(typeof monster8!='undefined'){if(vis_array[i]==monster8[3]){$('#'+monster8[3]).css('backgroundPosition',monster8[13]);found_monster("monster8")}}
		if(typeof monster9!='undefined'){if(vis_array[i]==monster9[3]){$('#'+monster9[3]).css('backgroundPosition',monster9[13]);found_monster("monster9")}}
		if(typeof monster10!='undefined'){if(vis_array[i]==monster10[3]){$('#'+monster10[3]).css('backgroundPosition',monster10[13]);found_monster("monster10")}}
		if(typeof monster11!='undefined'){if(vis_array[i]==monster11[3]){$('#'+monster11[3]).css('backgroundPosition',monster11[13]);found_monster("monster11")}}
		if(typeof monster12!='undefined'){if(vis_array[i]==monster12[3]){$('#'+monster12[3]).css('backgroundPosition',monster12[13]);found_monster("monster12")}}
		if(typeof monster13!='undefined'){if(vis_array[i]==monster13[3]){$('#'+monster13[3]).css('backgroundPosition',monster13[13]);found_monster("monster13")}}
		if(typeof monster14!='undefined'){if(vis_array[i]==monster14[3]){$('#'+monster14[3]).css('backgroundPosition',monster14[13]);found_monster("monster14")}}
		if(typeof monster15!='undefined'){if(vis_array[i]==monster15[3]){$('#'+monster15[3]).css('backgroundPosition',monster15[13]);found_monster("monster15")}}
		if(typeof monster16!='undefined'){if(vis_array[i]==monster16[3]){$('#'+monster16[3]).css('backgroundPosition',monster16[13]);found_monster("monster16")}}
		if(typeof monster17!='undefined'){if(vis_array[i]==monster17[3]){$('#'+monster17[3]).css('backgroundPosition',monster17[13]);found_monster("monster17")}}
		if(typeof monster18!='undefined'){if(vis_array[i]==monster18[3]){$('#'+monster18[3]).css('backgroundPosition',monster18[13]);found_monster("monster18")}}
		if(typeof monster19!='undefined'){if(vis_array[i]==monster19[3]){$('#'+monster19[3]).css('backgroundPosition',monster19[13]);found_monster("monster19")}}
		if(typeof monster20!='undefined'){if(vis_array[i]==monster20[3]){$('#'+monster20[3]).css('backgroundPosition',monster20[13]);found_monster("monster20")}}
		if(typeof monster21!='undefined'){if(vis_array[i]==monster21[3]){$('#'+monster21[3]).css('backgroundPosition',monster21[13]);found_monster("monster21")}}
		if(typeof monster22!='undefined'){if(vis_array[i]==monster22[3]){$('#'+monster22[3]).css('backgroundPosition',monster22[13]);found_monster("monster22")}}
		if(typeof monster23!='undefined'){if(vis_array[i]==monster23[3]){$('#'+monster23[3]).css('backgroundPosition',monster23[13]);found_monster("monster23")}}
		if(typeof monster24!='undefined'){if(vis_array[i]==monster24[3]){$('#'+monster24[3]).css('backgroundPosition',monster24[13]);found_monster("monster24")}}
		if(typeof monster25!='undefined'){if(vis_array[i]==monster25[3]){$('#'+monster25[3]).css('backgroundPosition',monster25[13]);found_monster("monster25")}}8
		if(typeof monster26!='undefined'){if(vis_array[i]==monster26[3]){$('#'+monster26[3]).css('backgroundPosition',monster26[13]);found_monster("monster26")}}
		if(typeof monster27!='undefined'){if(vis_array[i]==monster27[3]){$('#'+monster27[3]).css('backgroundPosition',monster27[13]);found_monster("monster27")}}
		if(typeof monster28!='undefined'){if(vis_array[i]==monster28[3]){$('#'+monster28[3]).css('backgroundPosition',monster28[13]);found_monster("monster28")}}
		if(typeof monster29!='undefined'){if(vis_array[i]==monster29[3]){$('#'+monster29[3]).css('backgroundPosition',monster29[13]);found_monster("monster29")}}
		if(typeof monster30!='undefined'){if(vis_array[i]==monster30[3]){$('#'+monster30[3]).css('backgroundPosition',monster30[13]);found_monster("monster30")}}
		if(typeof monster31!='undefined'){if(vis_array[i]==monster31[3]){$('#'+monster31[3]).css('backgroundPosition',monster31[13]);found_monster("monster31")}}
		if(typeof monster32!='undefined'){if(vis_array[i]==monster32[3]){$('#'+monster32[3]).css('backgroundPosition',monster32[13]);found_monster("monster32")}}
		if(typeof monster33!='undefined'){if(vis_array[i]==monster33[3]){$('#'+monster33[3]).css('backgroundPosition',monster33[13]);found_monster("monster33")}}
		if(typeof monster34!='undefined'){if(vis_array[i]==monster34[3]){$('#'+monster34[3]).css('backgroundPosition',monster34[13]);found_monster("monster34")}}
		if(typeof monster35!='undefined'){if(vis_array[i]==monster35[3]){$('#'+monster35[3]).css('backgroundPosition',monster35[13]);found_monster("monster35")}}
		if(typeof monster36!='undefined'){if(vis_array[i]==monster36[3]){$('#'+monster36[3]).css('backgroundPosition',monster36[13]);found_monster("monster36")}}
		if(typeof monster37!='undefined'){if(vis_array[i]==monster37[3]){$('#'+monster37[3]).css('backgroundPosition',monster37[13]);found_monster("monster37")}}
		if(typeof monster38!='undefined'){if(vis_array[i]==monster38[3]){$('#'+monster38[3]).css('backgroundPosition',monster3[13]);found_monster("monster38")}}
		if(typeof monster39!='undefined'){if(vis_array[i]==monster39[3]){$('#'+monster39[3]).css('backgroundPosition',monster39[13]);found_monster("monster39")}}
		if(typeof monster40!='undefined'){if(vis_array[i]==monster40[3]){$('#'+monster40[3]).css('backgroundPosition',monster40[13]);found_monster("monster40")}}
		if(typeof monster41!='undefined'){if(vis_array[i]==monster41[3]){$('#'+monster41[3]).css('backgroundPosition',monster41[13]);found_monster("monster41")}}
		if(typeof monster42!='undefined'){if(vis_array[i]==monster42[3]){$('#'+monster42[3]).css('backgroundPosition',monster42[13]);found_monster("monster42")}}
		if(typeof monster43!='undefined'){if(vis_array[i]==monster43[3]){$('#'+monster43[3]).css('backgroundPosition',monster43[13]);found_monster("monster43")}}
		if(typeof monster44!='undefined'){if(vis_array[i]==monster44[3]){$('#'+monster44[3]).css('backgroundPosition',monster44[13]);found_monster("monster44")}}
		if(typeof monster45!='undefined'){if(vis_array[i]==monster45[3]){$('#'+monster45[3]).css('backgroundPosition',monster45[13]);found_monster("monster45")}}
		if(typeof monster46!='undefined'){if(vis_array[i]==monster46[3]){$('#'+monster46[3]).css('backgroundPosition',monster46[13]);found_monster("monster46")}}
		if(typeof monster47!='undefined'){if(vis_array[i]==monster47[3]){$('#'+monster47[3]).css('backgroundPosition',monster47[13]);found_monster("monster47")}}
		if(typeof monster48!='undefined'){if(vis_array[i]==monster48[3]){$('#'+monster48[3]).css('backgroundPosition',monster48[13]);found_monster("monster48")}}
		if(typeof monster49!='undefined'){if(vis_array[i]==monster49[3]){$('#'+monster49[3]).css('backgroundPosition',monster49[13]);found_monster("monster49")}}
		if(typeof monster50!='undefined'){if(vis_array[i]==monster50[3]){$('#'+monster50[3]).css('backgroundPosition',monster50[13]);found_monster("monster50")}}
		if(typeof monster51!='undefined'){if(vis_array[i]==monster51[3]){$('#'+monster51[3]).css('backgroundPosition',monster51[13]);found_monster("monster51")}}
		if(typeof monster52!='undefined'){if(vis_array[i]==monster52[3]){$('#'+monster52[3]).css('backgroundPosition',monster52[13]);found_monster("monster52")}}
		if(typeof monster53!='undefined'){if(vis_array[i]==monster53[3]){$('#'+monster53[3]).css('backgroundPosition',monster53[13]);found_monster("monster53")}}
		if(typeof monster54!='undefined'){if(vis_array[i]==monster54[3]){$('#'+monster54[3]).css('backgroundPosition',monster54[13]);found_monster("monster54")}}
		if(typeof monster55!='undefined'){if(vis_array[i]==monster55[3]){$('#'+monster55[3]).css('backgroundPosition',monster55[13]);found_monster("monster55")}}
		}
	locked[0]=player["loc"];
	if(potID==undefined){monster_move()}
	else{for(i=0;i<hover_array.length;i++){x=$("#"+hover_array[i]).parent().parent(); $(x).removeClass()} for(i=0;i<hover_array.length;i++){hover_array.splice(i)} $('#left_main_pots').find('img').parent().parent().remove()}
	}

//*********************************************************************//
//******************  *4*  Monster Moving!   **************************//
//*********************************************************************//

function move_the_monster(monster){
	copy_array(monster);
	check_flames(monster,temp_monster[3]);
	if ((temp_monster[16]=="yes")&&(temp_monster[3]!="dead")){
		temp_monster[4]=temp_monster[3];
		changeVar=where_monster_moves(temp_monster[0],temp_monster[1],temp_monster[2]); // this returns an array, 0: what var to change. 1: add or subtract from that var. 2: what terrain it is
		var temploc=get_temploc(); //this is to get the new loc to check if monster attacks
		var i=locked.indexOf(temploc); // grab the location to see if monster is moving into a locked location
		if(temploc==player["loc"]){monster_attacks(); revert_monster(monster)} // Monster will attack player
		else if(i!=-1){revert_monster(monster)} // if the monster is moving into a locked location revert him
		else{terrain_cnt()}
	}
	revert_copy_array(monster);
	update_monster(monster);
	}

function terrain_cnt(){switch(temp_monster[0]){case"spider": spider_terrain_cnt();break;case"orc":orc_terrain_cnt();break;case"blob":blob_terrain_cnt();break;case"zombie":zombie_terrain_cnt();break;case"beholder":beholder_terrain_cnt();break}}
/*
Spiders will never go in water
Orcs will move the same as the player
Blobs moves the same through all terrain
Zombies moves slowly through everything
beholder can fly so he ignores all terrain
*/
function temp_ter_rst(){temp_monster[12]=1;temp_monster[11]=1;temp_monster[10]=1}
function spider_terrain_cnt(){if((changeVar[2]=="water")&&(temp_monster[12]<100)){temp_monster[12]++}else if((changeVar[2]=="tree")&&(temp_monster[11]<2)){temp_monster[11]++}else if((changeVar[2]=="rock")&&(temp_monster[10]<4)){temp_monster[10]++}else{if(changeVar[0]==1){if(changeVar[1]=="add"){temp_monster[1]++; temp_ter_rst()}else{temp_monster[1]--}}else{if(changeVar[1]=="add"){temp_monster[2]++;temp_ter_rst()}else{temp_monster[2]--;temp_ter_rst()}}}}
function orc_terrain_cnt(){if((changeVar[2]=="water")&&(temp_monster[12]<3)){temp_monster[12]++}else if((changeVar[2]=="tree")&&(temp_monster[11]<2)){temp_monster[11]++}else if((changeVar[2]=="rock")&&(temp_monster[10]<4)){temp_monster[10]++}else{if(changeVar[0]==1){if(changeVar[1]=="add"){temp_monster[1]++; temp_ter_rst()}else{temp_monster[1]--}}else{if(changeVar[1]=="add"){temp_monster[2]++;temp_ter_rst()}else{temp_monster[2]--;temp_ter_rst()}}}}
function blob_terrain_cnt(){if((changeVar[2]=="water")&&(temp_monster[12]<2)){temp_monster[12]++}else if((changeVar[2]=="tree")&&(temp_monster[11]<2)){temp_monster[11]++}else if((changeVar[2]=="rock")&&(temp_monster[10]<2)){temp_monster[10]++}else{if(changeVar[0]==1){if(changeVar[1]=="add"){temp_monster[1]++; temp_ter_rst()}else{temp_monster[1]--}}else{if(changeVar[1]=="add"){temp_monster[2]++;temp_ter_rst()}else{temp_monster[2]--;temp_ter_rst()}}}}
function zombie_terrain_cnt(){if((changeVar[2]=="water")&&(temp_monster[12]<4)){temp_monster[12]++}else if((changeVar[2]=="tree")&&(temp_monster[11]<3)){temp_monster[11]++}else if((changeVar[2]=="rock")&&(temp_monster[10]<5)){temp_monster[10]++}else{if(changeVar[0]==1){if(changeVar[1]=="add"){temp_monster[1]++; temp_ter_rst()}else{temp_monster[1]--}}else{if(changeVar[1]=="add"){temp_monster[2]++;temp_ter_rst()}else{temp_monster[2]--;temp_ter_rst()}}}}
function beholder_terrain_cnt(){if(changeVar[0]==1){if(changeVar[1]=="add"){temp_monster[1]++}else{temp_monster[1]--}}else{if(changeVar[1]=="add"){temp_monster[2]++}else{temp_monster[2]--}}}
function get_temploc(){var ov1=parseInt(temp_monster[1]);var ov2=parseInt(temp_monster[2]);if(changeVar!=undefined){if(changeVar[0]==1){if(changeVar[1]=="add"){ov1++}else{ov1--}}else{if(changeVar[1]=="add"){ov2++;}else{ov2--;}}}var o=ov1+"_"+ov2;return o}
function monster_check_terrain(t1,t2){loc1="#"+t1;loc2="#"+t2;if($(loc1).hasClass("grass")){terrain=new Array(t1,"grass")}else if($(loc2).hasClass("grass")){terrain=new Array(t2,"grass")}else if($(loc1).hasClass("tree")){terrain=new Array(t1,"tree")}else if($(loc2).hasClass("tree")){terrain=new Array(t2,"tree")}else if($(loc1).hasClass("water")){terrain=new Array(t1,"water")}else if($(loc2).hasClass("water")){terrain=new Array(t2,"water")}else if($(loc1).hasClass("rock")){terrain=new Array(t1,"rock")}else if($(loc2).hasClass("rock")){terrain=new Array(t2,"rock")} return terrain}

function where_monster_moves(type,var1,var2) {
//create array of the area around the monster
	route=[];
	route[0]= (parseInt(var1)-parseInt(1))+"_"+parseInt(var2);  // up one
	route[1]=  parseInt(var1)+"_"+(parseInt(var2)+parseInt(1)); // right one
	route[2]= (parseInt(var1)+parseInt(1))+"_"+parseInt(var2);  // down one
	route[3]=  parseInt(var1)+"_"+(parseInt(var2)-parseInt(1)); // left one

// if monster is on the same line as player then just move towards player
	if((player["var1"]<var1)&&(player["var2"]==var2))     {terrain=monster_check_terrain(route[0],"none");o=new Array(1,"subtract",terrain[1]); return o} // Move up
	else if((player["var1"]==var1)&&(player["var2"]>var2)){terrain=monster_check_terrain(route[1],"none");o=new Array(2,"add",terrain[1]);      return o} // Move Right
	else if((player["var1"]>var1)&&(player["var2"]==var2)){terrain=monster_check_terrain(route[2],"none");o=new Array(1,"add",terrain[1]);      return o} // Move Down
	else if((player["var1"]==var1)&&(player["var2"]<var2)){terrain=monster_check_terrain(route[3],"none");o=new Array(2,"subtract",terrain[1]); return o} // Move Left

// if monster is not on same line as player then figure out where monster is in relation to player
	else{
		if ((player["var1"]<var1)&&(player["var2"]>var2)) // Monster is down and to the left of the player
			{terrain = monster_check_terrain(route[0],route[1]);
			 if((temp_monster[0]=="spider")&&(terrain[1]=="water")){ // spiders should never choose water if possible
			 	if(terrain[0]==route[0]){o=new Array(2,"subtract",terrain[1]);                            return o}} // move right one
			 else if((terrain[1]=="rock") &&(terrain[0]==route[1])){o=new Array(2,"add",terrain[1]);     return o}  // move right one
			 else if((terrain[1]=="rock") &&(terrain[0]==route[0])){o=new Array(1,"subtract",terrain[1]);return o}  // move up one
			 else if((terrain[1]=="water")&&(terrain[0]==route[1])){o=new Array(2,"add",terrain[1]);     return o}  // move right one
			 else if((terrain[1]=="water")&&(terrain[0]==route[0])){o=new Array(1,"subtract",terrain[1]);return o}  // move up one
			 else if((terrain[1]=="tree") &&(terrain[0]==route[1])){o=new Array(2,"add",terrain[1]);     return o}  // move right one
			 else if((terrain[1]=="tree") &&(terrain[0]==route[0])){o=new Array(1,"subtract",terrain[1]);return o}  // move up one
			 else if((terrain[1]=="grass")&&(terrain[0]==route[1])){o=new Array(2,"add",terrain[1]);     return o}  // move right one
			 else{o = new Array(1,"subtract",terrain[1]);                                                return o}  // move up one
			}
		else if((player["var1"]<var1)&&(player["var2"]<var2)) // Monster is down and to the right of the player
			{terrain = monster_check_terrain(route[0],route[3]);
			 if((temp_monster[0]=="spider")&&(terrain[1]=="water")){ // spiders should never choose water if possible
			 	if(terrain[0]==route[0]){o=new Array(2,"subtract",terrain[1]);                            return o}}  // move left one
			 else if((terrain[1]=="rock") &&(terrain[0]==route[3])){o=new Array(2,"subtract",terrain[1]);return o} 	// move left one
			 else if((terrain[1]=="rock") &&(terrain[0]==route[0])){o=new Array(1,"subtract",terrain[1]);return o} 	// move up one
			 else if((terrain[1]=="water")&&(terrain[0]==route[3])){o=new Array(2,"subtract",terrain[1]);return o} 	// move left one
			 else if((terrain[1]=="water")&&(terrain[0]==route[0])){o=new Array(1,"subtract",terrain[1]);return o} 	// move up one
			 else if((terrain[1]=="tree") &&(terrain[0]==route[3])){o=new Array(2,"subtract",terrain[1]);return o} 	// move left one
			 else if((terrain[1]=="tree") &&(terrain[0]==route[0])){o=new Array(1,"subtract",terrain[1]);return o} 	// move up one
			 else if((terrain[1]=="grass")&&(terrain[0]==route[3])){o=new Array(2,"subtract",terrain[1]);return o} 	// move left one
			 else{o=new Array(1,"subtract",terrain[1]);                                                  return o} 	// move up one
			}
		else if((player["var1"]>var1)&&(player["var2"]>var2)) // Monster is up and to the left of the player
			{terrain=monster_check_terrain(route[2],route[1]);
			 if((temp_monster[0]=="spider")&&(terrain[1]=="water")){ // spiders should never choose water if possible
			 	if(terrain[0]==route[2]){o=new Array(2,"add",terrain[1]);                            return o}} // move right one
			 else if((terrain[1]=="rock") &&(terrain[0]==route[1])){o=new Array(2,"add",terrain[1]);return o}  // move right one
			 else if((terrain[1]=="rock") &&(terrain[0]==route[2])){o=new Array(1,"add",terrain[1]);return o}  // move down one
			 else if((terrain[1]=="water")&&(terrain[0]==route[1])){o=new Array(2,"add",terrain[1]);return o}  // move right one
			 else if((terrain[1]=="water")&&(terrain[0]==route[2])){o=new Array(1,"add",terrain[1]);return o}  // move down one
			 else if((terrain[1]=="tree") &&(terrain[0]==route[1])){o=new Array(2,"add",terrain[1]);return o}  // move right one
			 else if((terrain[1]=="tree") &&(terrain[0]==route[2])){o=new Array(1,"add",terrain[1]);return o}  // move down one
			 else if((terrain[1]=="grass")&&(terrain[0]==route[1])){o=new Array(2,"add",terrain[1]);return o}  // move right one
			 else{o=new Array(1,"add",terrain[1]);                                                  return o}  // move down one
			}
		else((player["var1"]<var1)&&(player["var2"]>var2)) // Monster is up and to the right of the player
			{terrain=monster_check_terrain(route[2],route[3]);
			 if((temp_monster[0]=="spider")&&(terrain[1]=="water")) { // spiders should never choose water if possible
			 	if(terrain[0]==route[2]){o=new Array(2,"subtract",terrain[1]);                            return o}} // move left one
			 else if((terrain[1]=="rock") &&(terrain[0]==route[3])){o=new Array(2,"subtract",terrain[1]);return o}  // move left one
			 else if((terrain[1]=="rock") &&(terrain[0]==route[2])){o=new Array(1,"add",terrain[1]);     return o}  // move down one
			 else if((terrain[1]=="water")&&(terrain[0]==route[3])){o=new Array(2,"subtract",terrain[1]);return o}  // move left one
			 else if((terrain[1]=="water")&&(terrain[0]==route[2])){o=new Array(1,"add",terrain[1]);     return o}  // move down one
			 else if((terrain[1]=="tree") &&(terrain[0]==route[3])){o=new Array(2,"subtract",terrain[1]);return o}  // move left one
			 else if((terrain[1]=="tree") &&(terrain[0]==route[2])){o=new Array(1,"add",terrain[1]);     return o}  // move down one
			 else if((terrain[1]=="grass")&&(terrain[0]==route[3])){o=new Array(2,"subtract",terrain[1]);return o}  // move left one
			 else{o=new Array(1,"add",terrain[1]);                                                       return o}  // move down one
			}
		}
	}

//*********************************************************************//
//***********************  *5*  Combat!    ****************************//
//*********************************************************************//

function monster_attacks(monster){
	var a_roll=Math.floor(Math.random()*7);
	var d_roll=Math.floor(Math.random()*5);
	p_defend=parseInt(player["defense"])+parseInt(d_roll);
	m_attack=parseInt(temp_monster[5])+parseInt(a_roll)-player['armor'];

	if(m_attack>p_defend){
		d=parseInt(m_attack)-parseInt(p_defend);
		if ((Hunker||Defensive)!='no') { d=Math.ceil(d/2)   }
		if (Bubble!='no')    /* 25% */ { d=Math.ceil(d/1.5) }
		if (Shield!='no')    /* 50% */ { d=Math.ceil(d/2)   }
		if (Wall!='no')      /* 75% */ { d=Math.round(d/3)  }
		right_content("pdamage",d);
		player_takes_damage(d);
		}
	else{right_content("pdefend")}
	/* cast spells */
	if(temp_monster[0]=='beholder'){var m=Math.floor(Math.random()*3); m==0?monster_spells(temp_monster[0]):'';}
	}

function player_takes_damage(d){player["hp"]=parseInt(player["hp"])-parseInt(d);if(left_menu=="main"){left_main()}if(player["hp"]<=0){player_death()}save_bar()}
function notification(d,mon){o='';switch(d){case'memory':o+='The '+mon+' erased your memory!';break;case'teleport':o+='The '+mon+' teleported you!';break;case'helper':o+='The '+mon+' summoned a blob!';break;}$('#floater').html(o).css({'left':450,'top':200,'background-color':'white','padding':'20'}).show();movement_var('spell'); setTimeout('$("#floater").fadeOut("fast", function(){movement_var(); closeFloaterDiv();})',1500)}
function multiAttackCountDown(){if(Frenzy!='no'){Frenzy--;if(Frenzy<1){cancel_ability('Frenzy');Frenzy=='no';$('#Frenzy_active').remove()}} if(Manic!='no'){Manic--;if(Manic<1){cancel_ability('Manic');Manic=='no';$('#Manic_active').remove()}}if(Berserk!='no'){Berserk--;if(Berserk<1){cancel_ability('Berserk');Berserk=='no';$('#Berserk_active').remove()}}}

function monster_spells(m){
	if(m=='beholder'){beholder_spells=['burn','helper','teleport','memory'];n=Math.floor(Math.random()*beholder_spells.length);switch(beholder_spells[n]){case'helper':helper(m);break;case'memory':memory(m);break;case'burn':burn(m);break;case'teleport':teleport(m);break}}
	function memory(m){rand=Math.floor(Math.random()*8)+player['level'];if(parseInt(rand)>parseInt(player['mdefense'])){$('#mainbody').find('tr').each(function(){$(this).children('td').each(function(){if((!$(this).find('td').hasClass('dark'))&&($(this).find('td').attr('id')!=player['loc'])){$(this).find('td').addClass('dark').css('background-position','0px 0px');}});});if($(this).find('td').hasClass('portal')){$(this).find('td').css('background-image','')}check_vis();notification('memory',m)}else{right_content('memoryFail','',m)}}
	function helper(m){if(typeof monster51=='undefined'){create_monster('monster51',m)}else if(typeof monster51!='undefined'){if(monster51[3]=='dead'){$('#monster51_div').remove();create_monster('monster51',m)}}else if(typeof monster52=='undefined'){create_monster('monster52',m)}else if(typeof monster52!='undefined'){if(monster52[3]=='dead'){$('#monster52_div').remove(); create_monster('monster52',m)}}else if(typeof monster53=='undefined'){create_monster('monster53',m)}else if(typeof monster53!='undefined'){if(monster53[3]=='dead'){$('#monster53_div').remove(); create_monster('monster53',m)}}else if(typeof monster54=='undefined'){create_monster('monster54',m)}else if(typeof monster54!='undefined'){if(monster54[3]=='dead'){$('#monster54_div').remove(); create_monster('monster54',m)}}else if(typeof monster55=='undefined'){create_monster('monster55',m)}else if(typeof monster55!='undefined'){if(monster55[3]=='dead'){$('#monster55_div').remove(); create_monster('monster55',m)}}}
	function burn(m){rand=Math.floor(Math.random()*8)+player['level'];if(parseInt(rand)>parseInt(player['mdefense'])){var d=rand-player['mdefense']-player['ward'];if(d>0){right_content("pburned",d,m); player_takes_damage(d)}else {right_content('burnFail','',m)}}else{right_content('burnFail','',m)}}
	function teleport(m){function tpPlayer(){var loc=getLoc();var result=locked.indexOf(loc);if(result==-1){tp(loc); notification('teleport',m)}else{tpPlayer()}}rand=Math.floor(Math.random()*8)+player['level'];if(parseInt(rand)>parseInt(player['mdefense'])){tpPlayer()}else{right_content('teleFail','',m)}}
	function getLoc(){var var1=Math.floor(Math.random()*22)+1;var var2=Math.floor(Math.random()*46)+1;var o=var1+'_'+var2;return o}
	function get_monster_loc(){var c0=locked.indexOf(range1[0]);var c1=locked.indexOf(range1[1]);var c2=locked.indexOf(range1[2]);var c3=locked.indexOf(range1[3]);var c4=locked.indexOf(range1[4]);var c5=locked.indexOf(range1[5]);var c6=locked.indexOf(range1[6]);var c7=locked.indexOf(range1[7]);if(($('#'+range1[0]).html()!=null)&&(c0==-1)){mloc=range1[0]}else if(($('#'+range1[1]).html()!=null)&&(c1==-1)){mloc=range1[1]}else if(($('#'+range1[2]).html()!=null)&&(c1==-2)){mloc=range1[2]}else if(($('#'+range1[3]).html()!=null)&&(c1==-3)){mloc=range1[3]}else if(($('#'+range1[4]).html()!=null)&&(c1==-4)){mloc=range1[4]}else if(($('#'+range1[5]).html()!=null)&&(c1==-5)){mloc=range1[5]}else if(($('#'+range1[6]).html()!=null)&&(c1==-6)){mloc=range1[6]}else if(($('#'+range1[7]).html()!=null)&&(c1==-7)){mloc=range1[7]}return mloc}
	function create_monster(m,mon){
		function modStat(n,cL){if(cL!=1){o=(Math.round(n/6)*cL)+n; return o}else{return n}}var mon_loc=get_monster_loc();var temp=mon_loc.toString().split('_');var mVar1=temp[0];var mVar2=temp[1];o='<div id="'+m+'_div">';o+='<script>';o+='var '+m+'=[];';o+=m+'[0]="blob";';o+=m+'[1]="'+mVar1+'";';o+=m+'[2]="'+mVar2+'";';o+=m+'[3]="'+mon_loc+'";';o+=m+'[4]="'+mon_loc+'";';o+=m+'[5]="'+modStat(5,player['level'])+'";';o+=m+'[6]="'+modStat(5,player['level'])+'";';o+=m+'[7]="'+modStat(3,player['level'])+'";';o+=m+'[8]="'+modStat(2,player['level'])+'";';o+=m+'[9]="'+modStat(12,player['level'])+'";';o+=m+'[10]=1;';o+=m+'[11]=1;';o+=m+'[12]=1;';o+=m+'[13]="16px -20px";';o+=m+'[14]="";';o+=m+'[15]=0;';o+=m+'[16]="yes";';o+=m+'[17]="";';o+=m+'[18]="";';o+=m+'[19]="";';o+=m+'[20]="'+modStat(1,player['level']/2)+'";';o+=m+'[21]="";';
		o+='</script>';o+='</div>';$('body').append(o);$('#'+mon_loc).css('background-position','16px -20px');update_locked();notification('helper',mon)}
	}

function combat(monster,a_roll,d_roll,effect,newRoll){
	copy_array(monster);if(newRoll!='undefined'){a_roll=Math.floor(Math.random()*7); d_roll=Math.floor(Math.random()*5)}p_attack=parseInt(player["attack"])+parseInt(a_roll);m_defend=parseInt(temp_monster[7])+parseInt(d_roll);damage=parseInt(p_attack)-parseInt(m_defend);
	if(p_attack>m_defend){critical=checkCrit();if(critical==true){damage=parseInt(damage)*3;right_content("crit",damage)}else{right_content("mdamage",damage)}temp_monster[9]=parseInt(temp_monster[9])-parseInt(damage);revert_copy_array(monster);if(temp_monster[9]<=0){locked.splice(locked.indexOf(temp_monster[3]), 1);multiAttackCountDown();monster_dies(monster)}else if(parseInt(newRoll)>0){newRoll--;checkMultiAttacks();combat(monster,0,0,'', newRoll)}else{switch(effect){case'Stun':temp_monster[15]-=Math.floor(Math.random()*3)+2; revert_copy_array(monster); check_vis(); return; case'Bash':bash_monster();break}checkMultiAttacks()}}else{right_content("mdefend",damage);checkMultiAttacks()}
	function checkMultiAttacks(){if((Frenzy!='no')&&(newRoll==undefined)){Frenzy--;if(Frenzy<1){cancel_ability('Frenzy'); Frenzy='no'}combat(monster,0,0,'','done');return}else if(Manic!='no'){if(newRoll==1){if(Manic<1){cancel_ability('Manic'); Manic='no'}combat(monster,0,0,'','done');return;}else if(newRoll==undefined){Manic--;combat(monster,0,0,'',1);return}}else if(Berserk!='no'){if(newRoll==1){if(Berserk<1){cancel_ability('Manic'); Berserk='no'}combat(monster,0,0,'','done');return;}else if(newRoll==undefined){Berserk--;combat(monster,0,0,'',1);return}}}if ((newRoll=='undefined')||(newRoll==0)){check_vis()}
	}

function bash_monster(){
	/* monster is above the player */
	if((temp_monster[1]<player['var1'])&&(temp_monster[2]==player['var2'])){new_mVar1=temp_monster[1]-3; check_it=false;while(check_it==false){new_mVar1++; check_it=check_new_monster_loc(new_mVar1,temp_monster[2]);if(check_it==true){temp_monster[15]=0;temp_monster[1]=new_mVar1;temp_monster[3]=temp_monster[4]=new_mVar1+'_'+temp_monster[2];}}}
	/* monster is below the player */
	else if((temp_monster[1]>player['var1'])&&(temp_monster[2]==player['var2'])){new_mVar1=temp_monster[1]+3; check_it=false;while(check_it==false){new_mVar1--; check_it=check_new_monster_loc(new_mVar1,temp_monster[2]);if(check_it==true){temp_monster[15]=0;temp_monster[1]=new_mVar1;temp_monster[3]=temp_monster[4]=new_mVar1+'_'+temp_monster[2];}}}
	/* monster is to the left of the player */
	else if((temp_monster[1]==player['var1'])&&(temp_monster[2]<player['var2'])){new_mVar2=temp_monster[2]-3;check_it=false;while(check_it==false){new_mVar2++;check_it=check_new_monster_loc(temp_monster[1],new_mVar2);if(check_it==true){temp_monster[15]=0;temp_monster[2]=new_mVar2;temp_monster[3]=temp_monster[4]=temp_monster[1]+'_'+new_mVar2;}}}
	/* monster is to the right of the player */
	else if((temp_monster[1]==player['var1'])&&(temp_monster[2]>player['var2'])){new_mVar2=temp_monster[2]+3;check_it=false;while(check_it==false){new_mVar2--;check_it=check_new_monster_loc(temp_monster[1],new_mVar2);if(check_it==true){temp_monster[15]=0;temp_monster[2]=new_mVar2;temp_monster[3]=temp_monster[4]=temp_monster[1]+'_'+new_mVar2;}}}
	/* monster is above and to the left of the player */
	else if((temp_monster[1]<player['var1'])&&(temp_monster[2]<player['var2'])){new_mVar1=temp_monster[1]-3;new_mVar2=temp_monster[2]-3;check_it=false;while(check_it==false){new_mVar1++;new_mVar2++;check_it=check_new_monster_loc(new_mVar1,new_mVar2);if(check_it==true){temp_monster[15]=0;temp_monster[1]=new_mVar1;temp_monster[2]=new_mVar2; temp_monster[3]=temp_monster[4]=new_mVar1+'_'+new_mVar2}}}
	/* monster is below and to the left of the player */
	else if((temp_monster[1]<player['var1'])&&(temp_monster[2]>player['var2'])){new_mVar1=temp_monster[1]+3;new_mVar2=temp_monster[2]-3;check_it=false;while(check_it==false){new_mVar1--;new_mVar2++;check_it=check_new_monster_loc(new_mVar1,new_mVar2);if(check_it==true){temp_monster[15]=0;temp_monster[1]=new_mVar1;temp_monster[2]=new_mVar2;temp_monster[3]=temp_monster[4]=new_mVar1+'_'+new_mVar2;}}}
	/* monster is above and to the right of the player */
	else if((temp_monster[1]>player['var1'])&&(temp_monster[2]<player['var2'])){new_mVar1=temp_monster[1]-3;new_mVar2=temp_monster[2]+3;check_it=false;while(check_it==false){new_mVar1++;new_mVar2--;check_it=check_new_monster_loc(new_mVar1,new_mVar2);if(check_it==true){temp_monster[15]=0;temp_monster[1]=new_mVar1;temp_monster[2]=new_mVar2;temp_monster[3]=temp_monster[4]=new_mVar1+'_'+new_mVar2;}}}
	/* monster is below and to the right of the player */
	else if((temp_monster[1]>player['var1'])&&(temp_monster[2]>player['var2'])){new_mVar1=temp_monster[1]+3;new_mVar2=temp_monster[2]+3;check_it=false;while(check_it==false){new_mVar1--;new_mVar2--;check_it=check_new_monster_loc(new_mVar1,new_mVar2);if(check_it==true){temp_monster[15]=0;temp_monster[1]=new_mVar1;temp_monster[2]=new_mVar2;temp_monster[3]=temp_monster[4]=new_mVar1+'_'+new_mVar2;}}}
	
	function check_new_monster_loc(var1,var2){new_loc=var1+'_'+var2;o=$('#'+new_loc).length;if(o!=0){return true}else{return false}}
	update_locked();
	}

function checkCrit(){x=Math.floor(Math.random()*100);if(x<=parseInt(player['crit'])){return true}}
function monster_dies(monster,x){right_content("mdeath");$('#'+temp_monster[3]).css('backgroundPosition',temp_monster[14]);var treasure=new Array(temp_monster[3],temp_monster[14]);if((temp_monster[0]!='spider')&&(temp_monster[0]!='beholder')){treasure_drop(treasure)}locked.splice(locked.indexOf(temp_monster[3]), 1);temp_monster[3]="dead";gain_exp(temp_monster[20]);revert_copy_array(monster);update_monster(monster);monster_death_count(temp_monster[0]);if(!x){check_vis()}}
function player_death(){save_character();alert("You have been killed!\n You lose 5% of total exp");player["hp"]=player["max_hp"]; player["mana"]=player["max_mana"]; player['charexp']=parseInt(player['charexp'])-parseInt(Math.round(player['charexp']*.05));save_character();window.location.reload()}

//********************************************************************//
//***********************  *6*  Treasure!   **************************//
//********************************************************************//

function treasure_drop(treasure){document.getElementById(treasure[0]).style.backgroundPosition="16px -180px";treasure_array.push(treasure)}
function check_treasure(){for(i=0;i<treasure_array.length;i++){if(player["loc"]==treasure_array[i][0]){right_content("treasure"); document.getElementById(treasure_array[i][0]).style.backgroundPosition=player[treasure_array[i][1]];treasure_array.splice(i,1);updateloc();create_treasure("chest")}}}

function create_treasure(data){
	if(data=="chest"){ // player moved over a treasure chest
		for(i=0;i<loot_array.length;i++){loot_array.splice(i)} // make sure treasure array is empty before starting
		var drop_get_number=Math.floor(Math.random()*3)+1;     // +1 because we dont want the monsters to ever drop 0 items
		var get_numb=""; 													 // This is used in the "get_armor" and "get_weapon" switch statements
		var f_o=new Array(); 								          // This is the array that has the entire list of what is dropped
		var type_of_dropped_loot=new Array('armor','potion','weapon','gold','gold');
		a1_array=new Array('head','chest','legs','feet','shield'); // Armor type array
		p1_array=new Array('Heal','Heal','Heal','Heal','Mana','Mana','Mana','Mana','Reveal','Teleport'); // Potion type array
		w1_array=new Array('dagger','sword','staff','axe','mace','bow'); // Weapon type array

		for(i=0;i<drop_get_number;i++){
			x=Math.floor(Math.random()*5);
			item_type=type_of_dropped_loot[x];
			var quality=get_treasure_quality();
			var stat_numbs=get_stat_numbs(quality);
			var lootID="loot"+i;

		function create_loot_item(item_type,item_name){
			var value=get_value_of_eq(item_name,quality);
			var item_image='equipment/'+item_type[1]+'/'+item_type[0]+'/'+item_type[0]+(Math.floor(Math.random()*10)+1)+'.png';
			var image_title=item_name[0]+'    '+stat_numbs[0]+':'+stat_numbs[1]+','+stat_numbs[2]+':'+stat_numbs[3];
			var o ='<li id="'+lootID+'" class="'+quality+'">';
				 o+='<a href="javascript:item_manip(\'inv\',\''+item_name[0]+'\',\''+item_name[1]+'\',\'#'+lootID+'\',\''+item_type[0]+'\',\''+quality+'\',\''+item_image+'\',\''+image_title+'\',\'yes\','+value+')" class="lootbutton">Pick up</a>';
				 o+='<a href="javascript:item_manip(\'eq\',\''+item_name[0]+'\',\''+item_name[1]+'\',\'#'+lootID+'\',\''+item_type[0]+'\',\''+quality+'\',\''+item_image+'\',\''+image_title+'\',\'yes\','+value+')" class="lootbutton">Equip</a>';
				 o+='<a title="'+item_name[0]+"    "+stat_numbs[0]+':'+stat_numbs[1]+','+stat_numbs[2]+':'+stat_numbs[3]+'"><img src="'+item_image+'">'+item_name[0]+'</a>';
				 o+='</li>';
			return o;
			}

			switch(item_type){
				case"potion":var get_numb=Math.floor(Math.random()*p1_array.length);var potion_type=p1_array[get_numb];f_o.push('<li id="'+lootID+'"><a href="javascript:item_manip(\'pot\',\''+potion_type+'\',\'\',\'#'+lootID+'\',\'potion\')" class=\'lootbutton\'>Pick up</a>'+potion_type+'</li>');break;
				case"weapon":var get_numb=Math.floor(Math.random()*w1_array.length);var weapon_type=new Array(w1_array[get_numb],"weapon");var weapon_name=new Array();weapon_name[0]=stat_numbs[6]+" "+get_weapon_name(weapon_type[0]);weapon_name[1]=stat_numbs[0]+":"+stat_numbs[1]+","+stat_numbs[2]+":"+stat_numbs[3]+","+stat_numbs[4]+":"+stat_numbs[5]+","+stat_numbs[6]+":"+stat_numbs[7];var item_weapon=create_loot_item(weapon_type,weapon_name);f_o.push(item_weapon);break;
				case"armor":var get_numb=Math.floor(Math.random()*a1_array.length);var armor_type=new Array(a1_array[get_numb],"armor");var armor_name=new Array();armor_name[0]=stat_numbs[6]+" "+get_armor_name(armor_type[0]);armor_name[1]=stat_numbs[0]+":"+stat_numbs[1]+","+stat_numbs[2]+":"+stat_numbs[3]+","+stat_numbs[4]+":"+stat_numbs[5]+","+stat_numbs[6]+":"+stat_numbs[7];var item_armor=create_loot_item(armor_type,armor_name);f_o.push(item_armor);break;
				case"gold":var gold_amount=(Math.floor(Math.random()*5)+1)+parseInt(player["level"]);var o='<li id="'+lootID+'"><a href="javascript:item_manip(\'gold\',\'\',\''+gold_amount+'\',\'#'+lootID+'\')" class="lootbutton">Pick up</a>';o+=gold_amount+' gold';o+='</li>';f_o.push(o);break;
				}
			}
		open_lootpage(f_o);
		} // end if (data=="chest")

	shoppage=$('#shoppage').html();
	if((data=="shop")&&(shoppage!='')){open_shoppage()}
	if((data=="shop")&&(shoppage=="")){ // if player moved over a shop for the first time since map refreshed
		var get_numb=""; 					   // This is used in the "get_armor" and "get_weapon" switch statements
		var f_o=new Array();             // This is the array that has the entire list of what is dropped
		var type_of_dropped_loot=new Array('armor','weapon');
		a1_array=new Array('head','chest','legs','feet','shield');       // Armor type
		w1_array=new Array('dagger','sword','staff','axe','mace','bow'); // Weapon type

		for(i=0;i<10;i++){
			x=Math.floor(Math.random()*2);
			item_type=type_of_dropped_loot[x];

			var quality=get_treasure_quality('shop');
			var stat_numbs=get_stat_numbs(quality);
			var lootID="shop"+i;

		function create_shop_item(item_type,item_name){
			var value=get_value_of_eq(item_name,quality);
			var item_image='equipment/'+item_type[1]+'/'+item_type[0]+'/'+item_type[0]+(Math.floor(Math.random()*10)+1)+'.png';
			var image_title=item_name[0]+'    '+stat_numbs[0]+':'+stat_numbs[1]+','+stat_numbs[2]+':'+stat_numbs[3];
			var o ='<li id="'+lootID+'" class="'+quality+'">';
				 o+='<div onclick="item_manip(\'buy\',\''+item_name[0]+'\',\''+item_name[1]+'\',\'#'+lootID+'\',\''+item_type[0]+'\',\''+quality+'\',\''+item_image+'\',\''+image_title+'\',\'yes\','+value+')" class="itemValue">'+value+' gold</div>';
				 o+='<a title="'+item_name[0]+"    "+stat_numbs[0]+':'+stat_numbs[1]+','+stat_numbs[2]+':'+stat_numbs[3]+'"><img src="'+item_image+'">'+item_name[0]+'</a>';
				 o+='</li>';
			return o;
			}

			switch(item_type){
				case"weapon":var get_numb=Math.floor(Math.random()*w1_array.length);var weapon_type=new Array(w1_array[get_numb],"weapon");var weapon_name=new Array();weapon_name[0]=stat_numbs[6]+" "+get_weapon_name(weapon_type[0]);weapon_name[1]=stat_numbs[0]+":"+stat_numbs[1]+","+stat_numbs[2]+":"+stat_numbs[3]+","+stat_numbs[4]+":"+stat_numbs[5]+","+stat_numbs[6]+":"+stat_numbs[7];var item_weapon=create_shop_item(weapon_type,weapon_name);f_o.push(item_weapon);break;
				case"armor":var get_numb=Math.floor(Math.random()*a1_array.length);var armor_type=new Array(a1_array[get_numb],"armor");var armor_name=new Array();armor_name[0]=stat_numbs[6]+" "+get_armor_name(armor_type[0]);armor_name[1]=stat_numbs[0]+":"+stat_numbs[1]+","+stat_numbs[2]+":"+stat_numbs[3]+","+stat_numbs[4]+":"+stat_numbs[5]+","+stat_numbs[6]+":"+stat_numbs[7];var item_armor=create_shop_item(armor_type,armor_name);f_o.push(item_armor);break;
				}
			}
		shop=f_o;
		open_shoppage(f_o);
		} // end if((data=="shop")&&(shoppage==""))
	if(data=="blacksmith"){
		var get_numb=""; 		// This is used in the "get_armor" and "get_weapon" switch statements
		var f_o=new Array(); // This is the array that has the entire list of what is dropped
		var type_of_dropped_loot=new Array('armor','weapon');
		a1_array=new Array('head','chest','legs','feet','shield');       // Armor type array
		w1_array=new Array('dagger','sword','staff','axe','mace','bow'); // Weapon type array

		for(i=0;i<5;i++){x=Math.floor(Math.random()*2);item_type=type_of_dropped_loot[x];var quality=get_treasure_quality('shop');var stat_numbs=get_stat_numbs(quality);var lootID="blacksmith"+i;

		function create_shop_item(item_type,item_name){
			var value=get_value_of_eq(item_name,quality);
			var item_image='equipment/'+item_type[1]+'/'+item_type[0]+'/'+item_type[0]+(Math.floor(Math.random()*10)+1)+'.png';
			var image_title=item_name[0]+'    '+stat_numbs[0]+':'+stat_numbs[1]+','+stat_numbs[2]+':'+stat_numbs[3];
			var o ='<li id="'+lootID+'" class="'+quality+'">';
				 o+='<div onclick="item_manip(\'buy\',\''+item_name[0]+'\',\''+item_name[1]+'\',\'#'+lootID+'\',\''+item_type[0]+'\',\''+quality+'\',\''+item_image+'\',\''+image_title+'\',\'yes\','+value+')" class="itemValue">'+value+' gold</div>';
				 o+='<a title="'+item_name[0]+"    "+stat_numbs[0]+':'+stat_numbs[1]+','+stat_numbs[2]+':'+stat_numbs[3]+'"><img src="'+item_image+'">'+item_name[0]+'</a>';
				 o+='</li>';
			return o;
			}
			switch(item_type){	
				case "weapon":var get_numb=Math.floor(Math.random()*w1_array.length);var weapon_type=new Array(w1_array[get_numb],"weapon");var weapon_name=new Array();weapon_name[0]=stat_numbs[6]+" "+get_weapon_name(weapon_type[0]);weapon_name[1]=stat_numbs[0]+":"+stat_numbs[1]+","+stat_numbs[2]+":"+stat_numbs[3]+","+stat_numbs[4]+":"+stat_numbs[5]+","+stat_numbs[6]+":"+stat_numbs[7];var item_weapon=create_shop_item(weapon_type,weapon_name);f_o.push(item_weapon);break;
				case "armor":var get_numb=Math.floor(Math.random()*a1_array.length);var armor_type=new Array(a1_array[get_numb],"armor");var armor_name=new Array();armor_name[0]=stat_numbs[6]+" "+get_armor_name(armor_type[0]);armor_name[1]=stat_numbs[0]+":"+stat_numbs[1]+","+stat_numbs[2]+":"+stat_numbs[3]+","+stat_numbs[4]+":"+stat_numbs[5]+","+stat_numbs[6]+":"+stat_numbs[7];var item_armor=create_shop_item(armor_type,armor_name);f_o.push(item_armor);break;
				}
			}
		f_o=f_o.join('');
		$('#castleBlacksmith').html(f_o);
		}
	return f_o;
	}

function get_value_of_eq(item_name,quality){o=0;var x=item_name[0].split(" ");if(x[0]=="worn"){o+=20+Math.floor(Math.random()*15)}if(x[0]=="solid"){o+=50+Math.floor(Math.random()*40)}if(x[0]=="new"){o+=90+Math.floor(Math.random()*70)}if(x[0]=="Drained"){o+=20+Math.floor(Math.random()*15)}if(x[0]=="Charged"){o+=50+Math.floor(Math.random()*40)}if(x[0]=="Glowing"){o+=90+Math.floor(Math.random()*70)}if(quality=="graytext"){o+=20+Math.floor(Math.random()*10)}if(quality=="whitetext"){o+=40+Math.floor(Math.random()*40)}if(quality=="greentext"){o+=80+Math.floor(Math.random()*50)}if(quality=="bluetext"){o+=140+Math.floor(Math.random()*60)}if(quality=="goldtext"){o+=220+Math.floor(Math.random()*100)}if (Speachcraft=='yes'){n=Math.round(parseInt(o)*.1);o=parseInt(n)+parseInt(o)}return o;}

function get_stat_numbs(quality){
	/************************************************************* 
	Need the output to look like this:
	stat1,stat1Value,stat2,stat2Value,stat3,stat3Value,durability,durabiltyValue
   an example will look like this:
   hp,3,mana,4,'mt','mt',light,0;
	Stat3 will always be 'mt', that is reserved for forged items
	*************************************************************/

	o=new Array();
	var gray2 =Math.floor(Math.random()*1);
	var white2=Math.floor(Math.random()*2);
	var green2=Math.floor(Math.random()*3);
	var blue2 =Math.floor(Math.random()*3);
	var gold2 =Math.floor(Math.random()*4);
	var gray1 =0;
	var white1=parseInt(white2)+1;
	var green1=parseInt(green2)+1;
	var blue1 =parseInt(blue2)+2;
	var gold1 =parseInt(gold2)+3;

	switch(quality){case"graytext":o[1]=gray1;o[3]=gray2;break;case"whitetext":o[1]=white1;o[3]=white2;break;case"greentext":o[1]=green1;o[3]=green2;break;case"bluetext":o[1]=blue1;o[3]=blue2;break;case"goldtext":o[1]=gold1;o[3]=gold2;break;}
	o[1]+=player['level'];o[3]+=player['level'];
	var numb1=Math.floor(Math.random()*5);
	var numb2=Math.floor(Math.random()*5);
	stat_array=new Array("hp","mana","int","str","dex");
	while(numb1==numb2){numb2=Math.floor(Math.random()*5)}
	o[0]=stat_array[numb1];
	o[2]=stat_array[numb2];

	var durabilty=new Array();
	var x=Math.floor(Math.random()*101);
	if(x<=80){n=Math.floor(Math.random()*2);n==0?durabilty.push("Worn"):durabilty.push("Drained");durabilty.push(0)}
	else if((x>=81)&&(x<=95)){n=Math.floor(Math.random()*2);n==0?durabilty.push("Solid"):durabilty.push("Charged");durabilty.push(1)}
	else if(x>=96){n=Math.floor(Math.random()*2);n==0?durabilty.push("New"):durabilty.push("Glowing");durabilty.push(2)}

	o[4]='mt'; //stat3
	o[5]='mt'; //stat3 value
	o[6]=durabilty[0];
	o[7]=durabilty[1];

	return o;
	}

function open_lootpage(f_o){var o=f_o[0]+"\n";if(f_o[1]!=undefined){o+=f_o[1]+"\n"}if(f_o[2]!=undefined){o+=f_o[2]+"\n"}if(f_o[3]!=undefined){o+=f_o[3]}movement_var('loot');$("#lootpage").html('<div onclick="loot_page_empty(\'close\')" id="closeLootPage">Close</div>'+o).show();$("#lootpage").children('li:first').children('.lootbutton:first').addClass('focus').focus();}

function open_shoppage(final_equip){
	if(final_equip!=undefined){
		var equip=final_equip[0]+"\n";
		if(final_equip[1]!=undefined){equip+=final_equip[1]+"\n"}
		if(final_equip[2]!=undefined){equip+=final_equip[2]+"\n"}
		if(final_equip[3]!=undefined){equip+=final_equip[3]+"\n"}
		if(final_equip[4]!=undefined){equip+=final_equip[4]+"\n"}
		if(final_equip[5]!=undefined){equip+=final_equip[5]+"\n"}
		if(final_equip[6]!=undefined){equip+=final_equip[6]+"\n"}
		if(final_equip[7]!=undefined){equip+=final_equip[7]+"\n"}
		if(final_equip[8]!=undefined){equip+=final_equip[8]+"\n"}
		if(final_equip[9]!=undefined){equip+=final_equip[9]}
		
		var pots = '<li class="HealPot" class="whitetext">\n';
		pots    += '<div class="itemValue" onclick="item_manip(\'buy\',\'Heal\',\'\',\'potion\',\'\',\'\',\'\',\'\',\'\',50)">50 gold</div><a><img src="equipment/pots/heal.jpg">Heal potion</a></li>\n';
		pots    += '</li>\n';
		pots    += '<li class="ManaPot" class="whitetext">\n';
		pots    += '<div class="itemValue" onclick="item_manip(\'buy\',\'Mana\',\'\',\'potion\',\'\',\'\',\'\',\'\',\'\',50)">50 gold</div><a><img src="equipment/pots/mana.jpg">Mana potion</a></li>\n';
		pots    += '</li>\n';
		pots    += '<li class="RevealPot" class="whitetext">\n';
		pots    += '<div class="itemValue" onclick="item_manip(\'buy\',\'Reveal\',\'\',\'potion\',\'\',\'\',\'\',\'\',\'\',70)">70 gold</div><a><img src="equipment/pots/reveal.jpg">Reveal potion</a></li>\n';
		pots    += '</li>\n';
		pots    += '<li class="TeleportPot" class="whitetext">\n';
		pots    += '<div class="itemValue" onclick="item_manip(\'buy\',\'Teleport\',\'\',\'potion\',\'\',\'\',\'\',\'\',\'\',100)">100 gold</div><a><img src="equipment/pots/teleport.jpg">Teleport potion</a></li>\n';
		pots    += '</li>\n';
		
		var tabs  = '<div id="shopTabs">\n';
		tabs     += '<span id="equipTab" class="shoptab" onclick="$(\'#shopequip\').show(); $(\'#shopPotions\').hide();">Equipment</span>\n';
		tabs     += '<span id="potTab" class="shoptab" onclick="$(\'#shopPotions\').show(); $(\'#shopequip\').hide();">Potions</span>';
		tabs     += '</div>';

		$("#shoppage").html(tabs+'<div onclick="movement_var(); $(\'#shoppage\').hide(); closeFloaterDiv();" id="closeLootPage">Close</div>\n<div id="shopequip">'+equip+'</div>\n<div id="shopPotions">'+pots+'</div>').show();
		}
	else{$("#shoppage").show()}
	movement_var('shop'); // prevent the player from moving if shop is open, changing it to "shop" also allows the player to sell items; // prevent the player from moving if shop is open, changing it to "shop" also allows the player to sell items
	if(left_menu=='inventory'){open_sellAll()}
	}

function open_sellAll(){$('#floater').html('<div id="sellAllFloat">Sell everything in inventory<br><button onClick="sellEverything()">Sell Everything</button><br></div>').css({'margin-left':'750px','margin-top':'-280px'}).show()}
function sellEverything(){$('#left_main').children('div').children('li').each(function(){$(this).children('span').click()});}

function get_armor_name(armor_type){
	o="";head_array=new Array("Helm","Helmet","Skullcap","Cap","Band");chest_array=new Array("Breastplate","Shirt","jerkin","Coverings","Wrappings");legs_array=new Array("Leg Guards","Legplates","Greaves");feet_array=new Array("Footplates","Shoes","Boots","Sandles","Wraps");shield_array=new Array("Shield","Round Shield","Wall Shield","Spiked Shield");
	switch(armor_type){case"head":get_numb=Math.floor(Math.random()*head_array.length);o=head_array[get_numb];return o;break;case"chest":get_numb=Math.floor(Math.random()*chest_array.length);o=chest_array[get_numb];return o;break;case"legs":get_numb=Math.floor(Math.random()*legs_array.length);o=legs_array[get_numb];return o;break;case"feet":get_numb=Math.floor(Math.random()*feet_array.length);o=feet_array[get_numb];return o;break;case"shield":get_numb=Math.floor(Math.random()*shield_array.length);o=shield_array[get_numb];return o;break}
	}

function get_weapon_name(weapon_type){
	sword_array=new Array('Falchion','Sabre','Scimitar','Tulwar','Claymore','Flamberge','Gladius','Cutlass');dagger_array=new Array('Dagger','Spike','Sickle','Hook','Knife','Dirk','Gauche','Rondel','Bollock');staff_array=new Array('Pole','Staff','Rod','Shaft','Cane','Wand','Post','Bar','Stick','Polearm');axe_array=new Array('Axe','Pick','Hatchet','Cleaver','Crowbill','Naga','Tabar','Tomahawk','Ettin','Scythe');mace_array=new Array('Club','Mace','Flail','Maul','Cudgel','Knout','Sledge','Scourge','Hammer','Scepter');bow_array=new Array('Bow','Hunter','Yumi','Long Bow','Short Bow');
	switch(weapon_type){case"sword":get_numb=Math.floor(Math.random()*sword_array.length);var output=sword_array[get_numb];return output;break;case"dagger":get_numb=Math.floor(Math.random()*dagger_array.length);var output=dagger_array[get_numb];return output;break;case "staff":get_numb=Math.floor(Math.random()*staff_array.length);var output=staff_array[get_numb];return output;break;case"axe":get_numb=Math.floor(Math.random()*axe_array.length);var output=axe_array[get_numb];return output;break;case"mace":get_numb=Math.floor(Math.random()*mace_array.length);var output=mace_array[get_numb];return output;break;case"bow":get_numb=Math.floor(Math.random()*bow_array.length);var output=bow_array[get_numb];return output;break}
	}

function get_treasure_quality(data){var o='';var x=Math.floor(Math.random()*101);if(x<=9){o='graytext'}else if((x>=10)&&(x<=63)){o='whitetext'}else if((x>=64)&&(x<=84)){o='greentext'}else if((x>=85)&&(x<=93)){o='bluetext'}else if(x>=94){ o='goldtext'}if((data=='shop')&&(o=='graytext')){o='whitetext'}return o;}

//********************************************************************//
//******************  *7*  Item Manipulation!   **********************//
//********************************************************************//

function gain_gold(amount){player["gold"]=parseInt(player["gold"])+parseInt(amount); save_bar()}
function lose_gold(amount){player['gold']-=parseInt(amount); save_bar()}

function item_manip(action,item_name,amount,lootID,item_type,quality,item_image,image_title,newitem,value) {
	switch(action){
		case "gold":gain_gold(amount);finish_switch();if($('#lootpage').children('li').length>0){$("#lootpage").children('li:first').children('.lootbutton:first').addClass('focus').focus()}break;
		// moving from lootpage or castle to inventory
		case "inv":var i=check_current_inv(item_name,amount,item_type,quality,item_image,image_title,lootID,newitem,value);if(i==true){finish_switch();if(left_menu=="inventory"){left_inventory()}else if(left_menu=="main"){left_main()}if($('#lootpage').children('li').length>0){$("#lootpage").children('li:first').children('.lootbutton:first').addClass('focus').focus()}}else{alert("Your inventory is full")}break;
		// moving from lootpage to equipment
		case "eq":var i=check_current_equip(item_name,amount,item_type,quality,item_image,image_title,lootID,newitem,value);if(i==true){finish_switch();if(left_menu=="equipped"){left_equipped()}else if(left_menu=="main"){left_main()}save_bar();if($('#lootpage').children('li').length>0){$("#lootpage").children('li:first').children('.lootbutton:first').addClass('focus').focus()}}else{alert('You are already wearing something in that slot')}break;
		// moving from inventory to equipment
		case "inv_eq":var i=check_current_equip(item_name,amount,item_type,quality,item_image,image_title,lootID,newitem,value);if(i==true){$('#'+lootID).remove();delete_loot_ID(newitem);save_bar();}else{alert('you are already wearing something in that slot')}break;
		// moving from inventory to house
		case "inv_house":var i=check_current_house(item_name,amount,item_type,quality,item_image,image_title,lootID,newitem,value);if(i==true){$('#'+lootID).remove();delete_loot_ID(newitem);save_bar();}else{alert('No more room in your house')}break;
		// moving from equipment to inventory
		case "eq_inv":var i=check_current_inv(item_name,amount,item_type,quality,item_image,image_title,lootID,newitem,value);if(i==true){remove_from_stats(amount);$('#'+lootID).remove();delete_loot_ID(newitem);save_bar();}break;
		// deleting from equipment
		case "del_eq":var delete_me=confirm("Do you really want to delete this item?");if(delete_me==true){remove_from_stats(amount);$('#'+lootID).remove();delete_loot_ID(lootID,item_name);left_equipped();save_bar();}break;
		case "buy":if(value>player['gold']){alert('You cannot afford this');break}else{if(lootID=='potion'){var i=check_current_pot(item_name);if(i==true){if(left_menu=="potions"){left_potions()}lose_gold(value); save_bar(); update_exp_bar(); finish_switch()}else{alert("Your potions are full")}break;}else{if(newitem=='tool'){var i=check_current_gear(item_name,amount,item_type,quality,item_image,image_title,lootID,newitem,value);if(i==true){lose_gold(value); save_bar(); update_exp_bar();if(left_menu=="gear"){left_gear()}}else{alert("You can't hold any more gear")}}else{var i=check_current_inv(item_name,amount,item_type,quality,item_image,image_title,lootID,newitem,value);if (i==true){player['gold']-=parseInt(value);save_bar();update_exp_bar();finish_switch();if(left_menu=="inventory"){left_inventory()}else if(left_menu=="main"){left_main()}}else{alert("Your inventory is full")}}}break}
		case "del":var delete_me=confirm("Do you really want to delete this item?");if(delete_me==true){item_name=='pot'?newID=$('#'+lootID).attr('class'):newID=lootID;$('#'+lootID).remove();delete_loot_ID(newID,lootID);if(left_menu=="inventory"){left_inventory()}if(left_menu=="gear"){left_gear()}save_bar()}break;
		case "sell":sell_value=parseInt(Math.round(value*.2));player["gold"]=parseInt(player["gold"])+parseInt(sell_value);$('#'+lootID).remove();delete_loot_ID(newitem,lootID);save_bar();update_exp_bar();finish_switch();if(left_menu=="potions"){left_potions()}if(left_menu=="inventory"){left_inventory()}break;
		case "pot":var i=check_current_pot(item_name);if(i==true){if(left_menu=="potions"){left_potions()}finish_switch();if($('#lootpage').children('li').length>0){$("#lootpage").children('li:first').children('.lootbutton:first').addClass('focus').focus()}}else{alert("Your potions are full")}break}
	function finish_switch(){$(lootID).remove(); loot_page_empty()}
	function delete_loot_ID(lootLoc,itemID){
		function del_gear(lootLoc){switch(itemID){case player['gear1']:player['gear1']='';break;case player['gear2']:player['gear2']='';break;case player['gear3']:player['gear3']='';break;case player['gear4']:player['gear4']='';break;case player['gear5']:player['gear5']='';break;case player['gear6']:player['gear6']='';break;case player['gear7']:player['gear7']='';break;case player['gear8']:player['gear8']='';break;case player['gear9']:player['gear9']='';break;case player['gear10']:player['gear10']='';break;}}
		switch(lootLoc){
			/* Delete Inventory items*/
			case "item1":player["item1"]="";item1_slot="";break;case "item2":player["item2"]="";item2_slot="";break;case "item3":player["item3"]="";item3_slot="";break;case "item4":player["item4"]="";item4_slot="";break;case "item5":player["item5"]="";item5_slot="";break;case "item6":player["item6"]="";item6_slot="";break;case "item7":player["item7"]="";item7_slot="";break;case "item8":player["item8"]="";item8_slot="";break;case "item9":player["item9"]="";item9_slot="";break;case "item10":player["item10"]="";item10_slot="";break;
			/* Delete Potions*/
			case "pot1":player["pot1"]="";break;case "pot2":player["pot2"]="";break;case "pot3":player["pot3"]="";break;case "pot4":player["pot4"]="";break;case "pot5":player["pot5"]="";break;case "pot6":player["pot6"]="";break;case "pot7":player["pot7"]="";break;case "pot8":player["pot8"]="";break;case "pot9":player["pot9"]="";break;case "pot10":player["pot10"]="";break;
			/* Delete Equipped items*/
			case "equip_head":player["head"]="";head_slot="";break;case "equip_chest":player["chest"]="";chest_slot="";break;case "equip_legs":player["legs"]="";legs_slot="";break;case "equip_feet":player["feet"]="";feet_slot="";break;case "equip_right":player["right_hand"]="";right_hand_slot="";break;case "equip_left":player["left_hand"]="";left_hand_slot="";break;default: del_gear();break;
			}
		/* Delete item from database */
		if(itemID!=undefined){$.ajax({type:"POST", url:"working/save_equip.php", data:"delete="+itemID, error:function(){aJaxError(xhr.status,exception)}});}
		}
	save_character();
	}

function check_current_pot(item_name){switch(""){case player["pot1"]:lootID="#pot1";player["pot1"]=item_name;return true;break; case player["pot2"]:lootID="#pot2";player["pot2"]=item_name;return true;break; case player["pot3"]:lootID="#pot3";player["pot3"]=item_name;return true;break; case player["pot4"]:lootID="#pot4";player["pot4"]=item_name;return true;break; case player["pot5"]:lootID="#pot5";player["pot5"]=item_name;return true;break; case player["pot6"]:lootID="#pot6";player["pot6"]=item_name;return true;break; case player["pot7"]:lootID="#pot7";player["pot7"]=item_name;return true;break; case player["pot8"]:lootID="#pot8";player["pot8"]=item_name;return true;break; case player["pot9"]:lootID="#pot9";player["pot9"]=item_name;return true;break; case player["pot10"]:lootID="#pot10";player["pot10"]=item_name;return true;break; default:return false;break;}}
function check_current_gear(item_name,amount,item_type,quality,item_image,image_title,id,newitem,value) {
	var o=gearID="";
 	function check_4_mt(){
		switch(""){
			case player["gear1"]:gearID="gear1";eq_id=player['gear1']+'_gear1';if(item_type=='material'){player['g1']=1} player["gear1"]=item_name;o=true;break;
			case player["gear2"]:gearID="gear2";eq_id=player['gear2']+'_gear2';if(item_type=='material'){player['g2']=1} player["gear2"]=item_name;o=true;break;
			case player["gear3"]:gearID="gear3";eq_id=player['gear3']+'_gear3';if(item_type=='material'){player['g3']=1} player["gear3"]=item_name;o=true;break;
			case player["gear4"]:gearID="gear4";eq_id=player['gear4']+'_gear4';if(item_type=='material'){player['g4']=1} player["gear4"]=item_name;o=true;break;
			case player["gear5"]:gearID="gear5";eq_id=player['gear5']+'_gear5';if(item_type=='material'){player['g5']=1} player["gear5"]=item_name;o=true;break;
			case player["gear6"]:gearID="gear6";eq_id=player['gear6']+'_gear6';if(item_type=='material'){player['g6']=1} player["gear6"]=item_name;o=true;break;
			case player["gear7"]:gearID="gear7";eq_id=player['gear7']+'_gear7';if(item_type=='material'){player['g7']=1} player["gear7"]=item_name;o=true;break;
			case player["gear8"]:gearID="gear8";eq_id=player['gear8']+'_gear8';if(item_type=='material'){player['g8']=1} player["gear8"]=item_name;o=true;break;
			case player["gear9"]:gearID="gear9";eq_id=player['gear9']+'_gear9';if(item_type=='material'){player['g9']=1} player["gear9"]=item_name;o=true;break;
			case player["gear10"]:gearID="gear10";eq_id=player['gear10']+'_gear10';if(item_type=='material'){player['g10']=1; }player["gear10"]=item_name;o=true;break;
			default:break;
			}
		}
	function check_4_materials(){switch(item_name){case player["gear1"]:player['g1']++;o=true;break; case player["gear2"]:player['g2']++;o=true;break; case player["gear3"]:player['g3']++;o=true;break; case player["gear4"]:player['g4']++;o=true;break; case player["gear5"]:player['g5']++;o=true;break; case player["gear6"]:player['g6']++;o=true;break; case player["gear7"]:player['g7']++;o=true;break; case player["gear8"]:player['g8']++;o=true;break; case player["gear9"]:player['g9']++;o=true;break; case player["gear10"]:player['g10']++;o=true;break; default:check_4_mt();break;}}
	if(item_type=='material'){check_4_materials()}else{check_4_mt()}
	return o;
	}

function lose_Materials(mat,numb){switch(mat){case player["gear1"]:player['g1']=parseInt(player['g1'])-numb;break;case player["gear2"]:player['g2']=parseInt(player['g2'])-numb;break;case player["gear3"]:player['g3']=parseInt(player['g3'])-numb;break;case player["gear4"]:player['g4']=parseInt(player['g4'])-numb;break;case player["gear5"]:player['g5']=parseInt(player['g5'])-numb;break;case player["gear6"]:player['g6']=parseInt(player['g6'])-numb;break;case player["gear7"]:player['g7']=parseInt(player['g7'])-numb;break;case player["gear8"]:player['g8']=parseInt(player['g8'])-numb;break;case player["gear9"]:player['g9']=parseInt(player['g9'])-numb;break;case player["gear10"]:player['g10']=parseInt(player['g10'])-numb;break;default:alert('error in lose_Materials: mat='+mat+' numb='+numb);break;}if(left_menu=="gear"){left_gear()}}
function check_current_inv(item_name,amount,item_type,quality,item_image,image_title,id,newitem,value) {
	var o="";
	var lootID="";
	switch(""){
	case player["item1"]:lootID="item1";check_new_item();item1_slot=finish();player["item1"]=eq_id;return true;break;
	case player["item2"]:lootID="item2";check_new_item();item2_slot=finish();player["item2"]=eq_id;return true;break;
	case player["item3"]:lootID="item3";check_new_item();item3_slot=finish();player["item3"]=eq_id;return true;break;
	case player["item4"]:lootID="item4";check_new_item();item4_slot=finish();player["item4"]=eq_id;return true;break;
	case player["item5"]:lootID="item5";check_new_item();item5_slot=finish();player["item5"]=eq_id;return true;break;
	case player["item6"]:lootID="item6";check_new_item();item6_slot=finish();player["item6"]=eq_id;return true;break;
	case player["item7"]:lootID="item7";check_new_item();item7_slot=finish();player["item7"]=eq_id;return true;break;
	case player["item8"]:lootID="item8";check_new_item();item8_slot=finish();player["item8"]=eq_id;return true;break;
	case player["item9"]:lootID="item9";check_new_item();item9_slot=finish();player["item9"]=eq_id;return true;break;
	case player["item10"]:lootID="item10";check_new_item();item10_slot=finish();player["item10"]=eq_id;return true;break;
	default:return false; break;
	}
	function check_new_item(){if(newitem=="yes"){eq_id=push_equip(lootID,item_name,amount,item_type,quality,item_image,image_title,value);}else{eq_id = parseInt(id); push_equip(newitem,lootID,id)}}
	function finish(){
		x ='<li id="'+eq_id+'inv" onmouseover="show_li_buttons(\''+eq_id+'inv\')" onmouseout="hide_li_buttons(\''+eq_id+'inv\')" title="('+item_type+')   '+image_title+'" class="'+quality+'">'+item_name;
		x+='<a href="javascript:item_manip(\'inv_eq\',\''+item_name+'\',\''+amount+'\',\''+eq_id+'inv\',\''+item_type+'\',\''+quality+'\',\''+item_image+'\',\''+image_title+'\',\''+lootID+'\','+value+')" title="Equip item" class=\'itemequip\'>Eq</a>';
		x+='<a href="javascript:item_manip(\'del\',\''+eq_id+'inv\',\''+amount+'\',\''+lootID+'\')" title="Delete item" class=\'itemdelete\'>X</a>';
		x+='<span class="sellItem" onclick="item_manip(\'sell\',\''+item_name+'\',\''+amount+'\',\''+eq_id+'inv\',\''+item_type+'\',\''+quality+'\',\''+item_image+'\',\''+image_title+'\',\''+lootID+'\','+value+')">SELL</span>';
		x+='</li>';
		return x;
		}
	return o;
	}

function check_current_house(){alert('Need to make a house')}
function open_house(){$('body').append('<div id="houseStyle" style="display:none"><style>.Gear_to_house{z-index:10px;}</style></div>')}
function close_house(){$('#houseStyle').remove()}

function check_current_equip(item_name,amount,item_type,quality,item_image,image_title,id,newitem,value){
	var output="";
	switch(item_type){
		case"head":  if(player["head"]=="")      {slot="head";      lootID="equip_head"; check_new_item();head_slot=finish();      player["head"]=      eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"chest": if(player["chest"]=="")     {slot="chest";     lootID="equip_chest";check_new_item();chest_slot=finish();     player["chest"]=     eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"legs":  if(player["legs"]=="")      {slot="legs";      lootID="equip_legs"; check_new_item();legs_slot=finish();      player["legs"]=      eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"feet":  if(player["feet"]=="")      {slot="feet";      lootID="equip_feet"; check_new_item();feet_slot=finish();      player["feet"]=      eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"shield":if(player["left_hand"]=="") {slot="left_hand"; lootID="equip_left"; check_new_item();left_hand_slot=finish(); player["left_hand"]= eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"dagger":if(player["right_hand"]==""){slot="right_hand";lootID="equip_right";check_new_item();right_hand_slot=finish();player["right_hand"]=eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"sword": if(player["right_hand"]==""){slot="right_hand";lootID="equip_right";check_new_item();right_hand_slot=finish();player["right_hand"]=eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"staff": if(player["right_hand"]==""){slot="right_hand";lootID="equip_right";check_new_item();right_hand_slot=finish();player["right_hand"]=eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"axe":   if(player["right_hand"]==""){slot="right_hand";lootID="equip_right";check_new_item();right_hand_slot=finish();player["right_hand"]=eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"mace":  if(player["right_hand"]==""){slot="right_hand";lootID="equip_right";check_new_item();right_hand_slot=finish();player["right_hand"]=eq_id;add_to_stats(amount);return true;break}else{return false;break}
		case"bow":   if(player["right_hand"]==""){slot="right_hand";lootID="equip_right";check_new_item();right_hand_slot=finish();player["right_hand"]=eq_id;add_to_stats(amount);return true;break}else{return false;break}
		}

	function check_new_item(){if(newitem=="yes"){eq_id=push_equip(slot,item_name,amount,item_type,quality,item_image,image_title,value);} else {eq_id = parseInt(id); push_equip(newitem,lootID,eq_id);}}
	function finish(){x='<li id="'+eq_id+'equip" onmouseover="show_li_buttons(\''+eq_id+'equip\')" onmouseout="hide_li_buttons(\''+eq_id+'equip\')" class="'+quality+'">';x+='<a href="javascript:item_manip(\'eq_inv\',\''+item_name+'\',\''+amount+'\',\''+eq_id+'equip\',\''+item_type+'\',\''+quality+'\',\''+item_image+'\',\''+image_title+'\',\''+lootID+'\','+value+')" title="Put in inventory" class=\'iteminv\'>Inv</a>';x+='<a href="javascript:item_manip(\'del_eq\',\''+eq_id+'equip\',\''+amount+'\',\''+lootID+'\')" title="Delete item" class=\'itemdelete\'>X</a>';x+='<img src="'+item_image+'" title="'+image_title+'">';x+='</li>';return x;}
	return output;
	}

function add_to_stats(amount){x=amount.split(",");for(i=0;i<x.length;i++){w=x[i].split(":");switch (w[0]){case"hp":player["hp"]+=parseInt(w[1]);player["max_hp"]+=parseInt(w[1]);break;case"mana":player["mana"]+=parseInt(w[1]);player["max_mana"]+=parseInt(w[1]);break;case"int":player["intel"]+=parseInt(w[1]);break;case"str":player["str"]+=parseInt(w[1]);break;case"dex":player["dex"]+=parseInt(w[1]);break;case"Worn":break;case"Solid":player['armor']+=1;break;case"New":player['armor']+=2;break;case"Drained":break;case"Charged":player['ward']+=1;break;case"Glowing":player['ward']+=2;break;case'mt':break;default:alert("Something broke in add_to_stats(), w[0]= "+w[0]+"\n amount= "+amount); break}}}
function remove_from_stats(amount){x=amount.split(",");for(i=0;i<x.length;i++){w=x[i].split(":");switch(w[0]){case"hp":player["hp"]-=parseInt(w[1]);player["max_hp"]-=w[1];break;case"mana":player["mana"]-=parseInt(w[1]);player["max_mana"]-=w[1];break;case"int":player["intel"]-=parseInt(w[1]);break;case"str":player["str"]-=parseInt(w[1]);break;case"dex":player["dex"]-=parseInt(w[1]);break;case"Worn":break;case"Solid":player['armor']-=1;break;case"New":player['armor']-=2;break;case"Drained":break;case"Charged":player['ward']-=1;break;case"Glowing":player['ward']-=2;break;case'mt':break;default:alert("Something broke in remove_from_stats(), w[0]= "+w[0]+"\n amount= "+amount);break;}}}

function push_equip(slot,name,amount,type,quality,image,title,value){
	if(type==undefined){// update existing equipment
		var id=parseInt(amount);
		$.ajax({type:"POST", url:"working/save_equip.php", data:"id="+id+"&slot="+name, error:function (){aJaxError(xhr.status,exception)}})
		}
	else{ // create and push new equipment to database
		x =amount.split(',');
		x1=x[0].split(':');
		x2=x[1].split(':');
		x3=x[2].split(':');
		attr1=x1[0]; // first stat
		stat1=x1[1]; // first stat modifier
		attr2=x2[0]; // second stat
		stat2=x2[1]; // second stat modifier
		attr3=x3[0]; // third stat
		stat3=x3[1]; // third stat modifier
		x4=x[3].split(':');
		mod=x4[1]; // quality modifier

		dur=title.split(" ");
		if(dur[0]=="Worn"){durabilty="Worn"}else if(dur[0]=="Solid"){durabilty="Solid"}else if(dur[0]=="New"){durabilty="New"}else if(dur[0]=="Drained"){durabilty="Drained"}else if(dur[0]=="Charged"){durabilty="Charged"}else if(dur[0]=="Glowing"){durabilty="Glowing"}
		if(slot=="head"){slot="equip_head"}if(slot=="chest"){slot="equip_chest"}if(slot=="legs"){slot="equip_legs"}if(slot=="feet"){slot="equip_feet"}if(slot=="right_hand"){slot="equip_right"}if(slot=="left_hand"){slot="equip_left"}
		$.ajax({async: false,type:"POST",url:"working/save_equip.php",data:"pId="+player['id']+"&name="+name+"&slot="+slot+"&quality="+quality+"&durability="+durabilty+"&modifier="+mod+"&type="+type+"&image="+image+"&title="+title+"&attr1="+attr1+"&stat1="+stat1+"&attr2="+attr2+"&stat2="+stat2+"&attr3="+attr3+"&stat3="+stat3+"&value="+value,success:function(e){eqId=e},error:function (){aJaxError(xhr.status,exception)}});
		return eqId;
		}
	}

function movement_var(data){data!=undefined?movement=data:movement=''}
function loot_page_empty(data){if((data=='close')||($('#lootpage').children('li').length==0)&&(movement!='shop')){movement_var(); $('#lootpage').hide()}}

//********************************************************************//
//***********************  *8*  Castle!  *****************************//
//********************************************************************//

function createCastle() {
	var o ='<span id="castle">';
	 	 o+='   <span id="castleContent">';
	 	 o+='      <span id="castleContentBackDrop"></span>';
	 	 o+='      <span id="castleSpan"></span>';
		 o+='		<div id="castleBlacksmith">';
		 o+='			<div id="lootPage1">'+create_treasure('blacksmith')+'</div>';
		 o+='			<div id="lootPage2">'+create_treasure('blacksmith')+'</div>';
		 o+='			<div id="lootPage3">'+create_treasure('blacksmith')+'</div>';
		 o+='			<div id="lootPage4">'+create_treasure('blacksmith')+'</div>';
		 o+='			<div id="lootPageControls">';
		 o+='				<ul>';
		 o+='					<li onclick="moveLootPage(\'back\')">&#9668;</li>';
		 o+='					<li class="noHover active">1</li>';
		 o+='					<li class="noHover">2</li>';
		 o+='					<li class="noHover">3</li>';
		 o+='					<li class="noHover">4</li>';
		 o+='					<li onclick="moveLootPage(\'forward\')">&#9658;</li>';
		 o+='					<span class="activeFloater"></span>';
		 o+='				</ul>';
		 o+='			</div>'; // end #lootPageControls
		 o+='		</div>'; // end #castleBlacksmith
		 o+='		<div id="castleInn">';
		 o+='			<div id="innScene"></div>';
		 o+='			<div id="innOptions">';
		 o+='				<ul>';
		 o+='					<li onclick="changeInn(\'advice\')">Do you have any advice for me?</li>';
		 o+='					<li onclick="changeInn(\'job\')">Do you have a job for me?</li>';
		 function fin(){o+='<li id="returnQuestLi" onclick="changeInn(\'return\')">I have completed a job you gave me</li>'}
		 switch('complete'){case player['q1_prog']:fin();break;case player['q2_prog']:fin();break;case player['q3_prog']:fin();break;case player['q4_prog']:fin();break;case player['q5_prog']:fin();break;case player['q6_prog']:fin();break;case player['q7_prog']:fin();break;case player['q8_prog']:fin();break;case player['q9_prog']:fin();break;case player['q10_prog']:fin();break}
		 o+='				</ul>';
		 o+='			</div>';
		 o+='			<div id="innDiv"></div>';
		 o+='		</div>'; // end #innDiv
		 o+='		<div id="castleAlchemist"></div>';
		 o+='		<div id="generalGoods">'+get_General_Goods()+'</div>';
		 o+='   </span>'; // end #castleContent
		 o+='  <span onclick="closeCastle()" id="castleClose">Leave Castle</span>';
		 o+='</span>'; // end #castle

		 $('body').prepend(o);
	}

function get_General_Goods(){
	var o='<div id="generalGoods">';

	var l_o ='<ul class="leftClass">';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Wooden Pickaxe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',40)">40 gold</li>';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Wooden Axe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',40)">40 gold</li>';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Wooden Shovel\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',40)">40 gold</li>';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Iron Pickaxe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',70)">70 gold</li>';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Iron Axe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',70)">70 gold</li>';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Iron Shovel\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',70)">70 gold</li>';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Steel Pickaxe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',100)">100 gold</li>';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Steel Axe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',100)">100 gold</li>';
		 l_o+='<li class="buyItem" onclick="item_manip(\'buy\',\'Steel Shovel\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',100)">100 gold</li>';
		 l_o+='</ul>';

	var r_o ='<ul class="rightClass">';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Wooden Pickaxe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',40)" title="Used to gather stone from a block of rock">Wooden Pickaxe</a></li>';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Wooden Axe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',40)"     title="Used to chop down a tree and obtain its wood">Wooden Axe</a></li>';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Wooden Shovel\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',40)"  title="Used to plant a tree, fill in a water square with grass or place rock onto a square">Wooden Shovel</a></li>';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Iron Pickaxe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',70)"   title="Used to gather stone from a block of rock">Iron Pickaxe</a></li>';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Iron Axe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',70)"       title="Used to chop down a tree and obtain its wood">Iron Axe</a></li>';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Iron Shovel\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',70)"    title="Used to plant a tree, fill in a water square with grass or place rock onto a square">Iron Shovel</a></li>';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Steel Pickaxe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',100)" title="Used to gather stone from a block of rock">Steel Pickaxe</a></li>';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Steel Axe\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',100)"     title="Used to chop down a tree and obtain its wood">Steel Axe</a></li>';
		 r_o+='<li><a onclick="item_manip(\'buy\',\'Steel Shovel\',\'\',\'\',\'\',\'\',\'\',\'\',\'tool\',100)"  title="Used to plant a tree, fill in a water square with grass or place rock onto a square">Steel Shovel</a></li></div>';
		 r_o+='</ul>';

		o+=l_o+r_o;

		o+='</div>';
	return o;
	}

function changeInn(data){
	switch(data){
		case'main':  $('#innDiv').fadeOut('fast',     function(){$('#innOptions').show().fadeIn()});          break;
		case'advice':$('#innOptions').fadeOut('fast', function(){$('#innDiv').html(getAdvice()).fadeIn()});   break;
		case'job':   $('#innOptions').fadeOut('fast', function(){$('#innDiv').html(getJobs()).fadeIn()});     break;
		case'return':$('#innOptions').fadeOut('fast', function(){$('#innDiv').html(completeJobs()).fadeIn()});break;
		}
	}

function getJobs(){
	$("#innOptions").hide();
	var o='<div id="jobBack" onclick="changeInn(\'main\')"><< Back</div><ul id="castle_jobs">';
	if(typeof castleQuest1!='undefined'){if(castleQuest1!='undefined'){o+='<li id="cQuest1" onClick="showCastleQuest(\'one\')">'+castleQuest1['name']+'</li>'}}
	if(typeof castleQuest2!='undefined'){if(castleQuest2!='undefined'){o+='<li id="cQuest2" onClick="showCastleQuest(\'two\')">'+castleQuest2['name']+'</li>'}}
	if(typeof castleQuest3!='undefined'){if(castleQuest3!='undefined'){o+='<li id="cQuest3" onClick="showCastleQuest(\'three\')">'+castleQuest3['name']+'</li>'}}
	if(typeof castleQuest4!='undefined'){if(castleQuest4!='undefined'){o+='<li id="cQuest4" onClick="showCastleQuest(\'four\')">'+castleQuest4['name']+'</li>'}}
	if(typeof castleQuest5!='undefined'){if(castleQuest5!='undefined'){o+='<li id="cQuest5" onClick="showCastleQuest(\'five\')">'+castleQuest5['name']+'</li>'}}
	o+='</ul>';
	return o;
	}

function completeJobs(){
	$("#innOptions").hide();
	var o='<div id="jobBack" onclick="changeInn(\'main\')"><< Back</div><ul id="complete_jobs">';
	if(player['q1_prog']=='complete'){o+='<li id="cQuest1">'+player['q1_desc']+'</li><button id="Q1_button" onClick="TurnInQuest(\'q1\')">Complete</button>'}
	if(player['q2_prog']=='complete'){o+='<li id="cQuest2">'+player['q2_desc']+'</li><button id="Q2_button" onClick="TurnInQuest(\'q2\')">Complete</button>'}
	if(player['q3_prog']=='complete'){o+='<li id="cQuest3">'+player['q3_desc']+'</li><button id="Q3_button" onClick="TurnInQuest(\'q3\')">Complete</button>'}
	if(player['q4_prog']=='complete'){o+='<li id="cQuest4">'+player['q4_desc']+'</li><button id="Q4_button" onClick="TurnInQuest(\'q4\')">Complete</button>'}
	if(player['q5_prog']=='complete'){o+='<li id="cQuest5">'+player['q5_desc']+'</li><button id="Q5_button" onClick="TurnInQuest(\'q5\')">Complete</button>'}
	o+='</ul>';
	return o;
	}

function TurnInQuest(quest){
	switch(quest){
		case'q1':gain_exp(parseInt(player['q1_exp']));gain_gold(castleQuest1['gold']);deleteQuest('q1');$('#cQuest1').remove();$('#Q1_button').remove();if(typeof castleQuest1['prevQuest']!='undefined'){castleQuest1['prevQuest']='undefined'}break;
		case'q2':gain_exp(parseInt(player['q2_exp']));gain_gold(castleQuest2['gold']);deleteQuest('q2');$('#cQuest2').remove();$('#Q2_button').remove();if(typeof castleQuest2['prevQuest']!='undefined'){castleQuest2['prevQuest']='undefined'}break;
		case'q3':gain_exp(parseInt(player['q3_exp']));gain_gold(castleQuest3['gold']);deleteQuest('q3');$('#cQuest3').remove();$('#Q3_button').remove();if(typeof castleQuest3['prevQuest']!='undefined'){castleQuest3['prevQuest']='undefined'}break;
		case'q4':gain_exp(parseInt(player['q4_exp']));gain_gold(castleQuest4['gold']);deleteQuest('q4');$('#cQuest4').remove();$('#Q4_button').remove();if(typeof castleQuest4['prevQuest']!='undefined'){castleQuest4['prevQuest']='undefined'}break;
		case'q5':gain_exp(parseInt(player['q5_exp']));gain_gold(castleQuest5['gold']);deleteQuest('q5');$('#cQuest5').remove();$('#Q5_button').remove();if(typeof castleQuest5['prevQuest']!='undefined'){castleQuest5['prevQuest']='undefined'}break;
		}
	if($('#complete_jobs').children().size()==0){$('#returnQuestLi').remove();changeInn('main')}
	}

function getAdvice(){
	$("#innOptions").hide();
	var o=[];
	o[0] ='It is difficult for a zombie to move onto rock';
	o[1] ='A buddy told me that spiders will never enter the water';
	o[2] ='Beholders are the most dangerous common creature out there';
	o[3] ='Blobs move easily through all terrain';
	o[4] ='Zombies are slow stupid creatures that are easy to avoid or escape from';
	o[5] ='Spiders and Beholders never drop treasure';
	o[6] ='You cannot sell an item that you are currently wearing';
	o[7] ='You cannot sell anything in a Castle, you can only do that in a hut';
	o[8] ='Rest up before entering a portal so you can be at max health and mana when entering a new area';
	o[9] ='It\'s usually quicker to go around rock than to go through it';
	o[10]='Reveal and Teleport are a great combo!';
	o[11]='Stunning a monster is a great way to escape or do damage without fear of a counter attack';
	o[12]='If you scroll over a monster it\'s current hit points will display';
	o[13]='I hear the best strategy against a Beholder is to keep him stunned so he can\'t cast spells';
	var x=Math.floor(Math.random()*o.length);
	setTimeout('closeAdvice()', 4000);
	return '<div id="Advice">'+o[x]+'</div>';
	}

function closeAdvice(){$('#Advice').fadeOut('slow', function(){$("#innOptions").show().fadeIn('slow')});}
function openCastle(){fadeThePage('fade');movement_var('blacksmith');updateCastleContent('main');$('#castle').show();$('#castle').children('#castleContent').animate({ width: 440, height: 420 }, 1000);}
function activeFloat(data,numb,vari){if(data=='start'){var pos=$('.active').position();$('.activeFloater').css({'top':pos.top+14,'left':pos.left});$('#lootPage1').animate({'margin-left': 0}, 500);}else{var pos=$('.active').position();$('.activeFloater').animate({left: pos.left}, 500);if(vari=='add'){var x=numb-1;$('#lootPage'+x).animate({'margin-left': -500}, 500); $('#lootPage'+numb).animate({'margin-left': 0}, 500);}else{var x=numb++; $('#lootPage'+x).animate({ 'margin-left': 0}, 500); $('#lootPage'+numb).animate({'margin-left': 350}, 500);}}}
function moveLootPage(data){var activeNumb=0;$('#lootPageControls').find('li').each(function(){if($(this).hasClass('active')){activeNumb=$(this).html()}});if(data=='forward'&&activeNumb<4){moveActivePage('right')}else if(data=='back'&&activeNumb>1){moveActivePage('left')}function moveActivePage(dir){if(dir=='right'){activeNumb++;$('#lootPageControls').find('li').each(function(){if($(this).html()==activeNumb){$(this).addClass('active').prev().removeClass('active');activeFloat('move',activeNumb,'add');}});}else{activeNumb--;$('#lootPageControls').find('li').each(function(){if($(this).html()==activeNumb){$(this).addClass('active').next().removeClass('active');activeFloat('move',activeNumb,'sub');}});}}}
function closeCastle(){$('#castle').children('#castleContent').animate({width:0, height:0}, 700, function(){$('#castle').hide();fadeThePage('unfade');movement_var()});}
function castleHideAll(){$('#castleBlacksmith').hide();$('#lootPage1, #lootPage2, #lootPage3, #lootPage4').css('margin-left','350px')}
function updateCastleContent(data){
	switch(data){
		case'main':      $('#castleContent').children('div').hide();$('#castleContent').children('#castleSpan').html('<ul><li onclick="updateCastleContent(\'inn\')">Visit the Inn</li><li onclick="updateCastleContent(\'alchemist\')">Alchemist</li><li onclick="updateCastleContent(\'blacksmith\')">Blacksmith</li><li onclick="updateCastleContent(\'general\')">General goods</li></ul>');castleHideAll();break;
		case'blacksmith':clearCastleContent();$('#castleBlacksmith').show();activeFloat('start');break;
		case'inn':       clearCastleContent();$('#castleInn').show();break;
		case'alchemist': clearCastleContent();break;
		case'general':   clearCastleContent();$('#generalGoods').show();break;
		}
	function clearCastleContent(){$('#castleContent').children('#castleSpan').html('<div onclick="updateCastleContent(\'main\')" id="castleBackToMain"><< Back to Main</div>')}
	}

//********************************************************************//
//****************  *9*  Buildings and materials!  *******************//
//********************************************************************//

function activateGear(t,gID,dig,drop){
	function openFloat(ter,bp,mat){movement='gathering';function pickUp(){gain_Materials(terrain)}function putDown(){lose_Materials(mat,1)}if((mat=='undefined')||(mat==undefined)){txt='Gathering Material'}else{txt='Creating terrain'}$('#floater').css({'left':450,'top':250,'width':200}).html('<div>'+txt+'</div><span id="outerSpan" style="margin: 0px 10px 10px 10px; width: 180px; height: 15px; display: block; border: 1px solid black;"><span id="innerSpan" style="background-color: maroon; display: block; width:10px; height:15px"></span></span>').show();$('#innerSpan').animate({width:180}, quality, 'linear', function(){$('#floater').fadeOut('fast', function(){$('#'+dig).removeClass(terrain).addClass(ter).css('background-position',bp); movement='gear';closeFloaterDiv();if((mat=='undefined')||(mat==undefined)){pickUp()}else{putDown()}});});}
	if(dig==undefined){for (i=0;i<range1.length;i++){$('#'+range1[i]).addClass("blue_border")}toggle_links('off');movement='gear';$('#'+gID).addcancel(gID);active_ability='yes'}
	else if(dig=='cancel'){for (i=0;i<range1.length;i++){$('#'+range1[i]).removeClass("blue_border")}toggle_links('on');movement='';$('#'+gID+'_cancel').remove();active_ability='no';active_cancel="no"}
	else if(movement!='gathering'){
		var t=true;
		if($('#'+dig).hasClass('water')){
			switch('dirt'){case player['gear1']:case player['gear2']:case player['gear3']:case player['gear4']:case player['gear5']:case player['gear6']:case player['gear7']:case player['gear8']:case player['gear9']:case player['gear10']: break;default:alert('You do not have any dirt to fill this water hole');return false;
			}
		}
		if ($.inArray(dig, range1)>-1){t=$('#'+gID).html();var r=t.split('<a');var t2=r[0].split(' ');var c=$('#'+dig).attr('class');var c2=c.split(' ');var quality=t2[0];var type=t2[1];var terrain=c2[0];if(quality=='Wooden'){quality=3000}else if(quality=='Iron'){quality=2000}else if(quality=='Steel'){quality=1000}if(type=='Shovel'){if(terrain=='grass'){openFloat('water','0px -80px')}else if(terrain=='water'){openFloat('grass','0px -20px','dirt')}}else if(type=='Pickaxe'){if(terrain=='rock'){openFloat('grass','0px -20px')}else if(terrain=='grass'){openFloat('rock','0px -40px','stone')}}else if(type=='Axe'){if(terrain=='tree'){openFloat('grass','0px -20px')}else if(terrain=='grass'){openFloat('tree','0px -60px','wood')}}}}
	}

function gain_Materials(mat){if(mat=='tree'){mat='wood'}else if(mat=='rock'){mat='stone'}else if(mat=='grass'){mat='dirt'}check_current_gear(mat,'','material');if(left_menu=="gear"){left_gear()}check_vis()}
function closeBuildFloat(){$('#floater').fadeOut('slow', function(){closeFloaterDiv();movement='';toggle_links('on')});}

function buildIt(d){
	switch(d){
		case'house':    chk=checkMats(30,30,100);  chk==false?fr():placeBuilding('house',30,30,100);      break;
		case'forge':    chk=checkMats(30,60,200);  chk==false?fr():placeBuilding('forge',30,60,200);      break;
		case'library':  chk=checkMats(40,50,200);  chk==false?fr():placeBuilding('library',40,50,200);    break;
		case'barracks': chk=checkMats(40,50,200);  chk==false?fr():placeBuilding('barracks',40,50,200);   break;
		case'academy':  chk=checkMats(40,50,200);  chk==false?fr():placeBuilding('academy',40,50,200);    break;
		case'enchanter':chk=checkMats(75,100,1200);chk==false?fr():placeBuilding('enchanter',75,100,1200);break;

		case'store': if($('.store').width()!=16){chk=checkMats(30,30,500);chk==false?fr():placeBuilding('store',30,30,500);player['s_timer']=new Date().getTime();player['s_income']=100;break}else{alert('You can only build 1 store')}
		}

	function fr(){alert('You do not have enough materials to build this')}

	function checkMats(w,s,g){ // wood, stone, gold
		var wood=stone=0;
		if(player['gear1']=='wood') {wood=player['g1']} else if(player['gear1']=='stone') {stone=player['g1']}
		if(player['gear2']=='wood') {wood=player['g2']} else if(player['gear2']=='stone') {stone=player['g2']}
		if(player['gear3']=='wood') {wood=player['g3']} else if(player['gear3']=='stone') {stone=player['g3']}
		if(player['gear4']=='wood') {wood=player['g4']} else if(player['gear4']=='stone') {stone=player['g4']}
		if(player['gear5']=='wood') {wood=player['g5']} else if(player['gear5']=='stone') {stone=player['g5']}
		if(player['gear6']=='wood') {wood=player['g6']} else if(player['gear6']=='stone') {stone=player['g6']}
		if(player['gear7']=='wood') {wood=player['g7']} else if(player['gear7']=='stone') {stone=player['g7']}
		if(player['gear8']=='wood') {wood=player['g8']} else if(player['gear8']=='stone') {stone=player['g8']}
		if(player['gear9']=='wood') {wood=player['g9']} else if(player['gear9']=='stone') {stone=player['g9']}
		if(player['gear10']=='wood'){wood=player['g10']}else if(player['gear10']=='stone'){stone=player['g10']}
		if((parseInt(wood)>=parseInt(w))&&(parseInt(stone)>=parseInt(s))&&(parseInt(player['gold'])>=parseInt(g))){return true}
		else{return false}
		}

	function placeBuilding(b,w,s,g){$('#floater').fadeOut('fast', function() {closeFloaterDiv(); tempVar=b; $('#floater').css({'left':5,'top':240,'width':200,'height':250}).fadeIn('fast').html('<div id="cancelBuild">Cancel Building<br><br><img onclick="cancelBuild()" src="backgrounds/CancelButton.png" /></div>')})}
	}

function cancelBuild(){$('#floater').fadeOut('slow', function(){closeFloaterDiv();movement='';toggle_links('on')});}
function buildWaitBar(loc,b,bp){movement='wait'; $('#floater').html('<div id="cancelBuild">Building your '+b+'</div><span id="outerSpan" style="margin: 0px 10px 10px 10px; width: 180px; height: 15px; display: block; border: 1px solid black;"><span id="innerSpan" style="background-color: maroon; display: block; width:10px; height:15px"></span></span>').show(); $('#innerSpan').animate({width:180}, 7000, 'linear', function(){$('#floater').animate({opacity:0}, 300, function(){$('#'+loc).removeClass('grass').addClass(b).css('background-position',bp).parent().parent().parent().removeClass('blue_border'); cancelBuild()});});}
function fif(){$('#forgeOptions').fadeIn('fast')}
function nih(n,h){if(n=='img'){o=h.toString().split("'");return o[17]}o=h.toString().split(n+'="');o2=o[1].toString().split('"');return o2[0]}

function finishBuilding(b,loc){
	var va=get_vis_array();
	var chk=va.indexOf(loc);
	if(chk!=-1){
		if($('#'+loc).hasClass('grass')){
			tempVar='';
			switch(b){
				case'academy':   subtract_materials(40,50,200);   buildWaitBar(loc,'academy','48px -40px');   break;
				case'barracks':  subtract_materials(40,50,200);   buildWaitBar(loc,'barracks','48px -60px');  break;
				case'enchanter': subtract_materials(75,100,1200); buildWaitBar(loc,'enchanter','48px -80px'); break;
				case'forge':     subtract_materials(30,60,200);   buildWaitBar(loc,'forge','48px -100px');    break;
				case'house':     subtract_materials(30,30,100);   buildWaitBar(loc,'house','48px -120px');    break;
				case'store':     subtract_materials(30,30,500);   buildWaitBar(loc,'store','48px -140px');    break;
				case'library':   subtract_materials(40,50,200);   buildWaitBar(loc,'library','48px -160px');  break;
				}
			}
		else {alert('You can only build on grass')}
		}
	else {alert('You can only build within your visual range (no more than 3 squares away)')}
	}

function subtract_materials(wood,stone,gold){
	if(player['gear1']=='wood'){player['g1']-=wood}else if(player['gear1']=='stone'){player['g1']-=stone}if(player['gear2']=='wood'){player['g2']-=wood}else if(player['gear2']=='stone'){player['g2']-=stone}if(player['gear3']=='wood'){player['g3']-=wood}else if(player['gear3']=='stone'){player['g3']-=stone}if(player['gear4']=='wood'){player['g4']-=wood}else if(player['gear4']=='stone'){player['g4']-=stone}if(player['gear5']=='wood'){player['g5']-=wood}else if(player['gear5']=='stone'){player['g5']-=stone}if(player['gear6']=='wood'){player['g6']-=wood}else if(player['gear6']=='stone'){player['g6']-=stone}if(player['gear7']=='wood'){player['g7']-=wood}else if(player['gear7']=='stone'){player['g7']-=stone}if(player['gear8']=='wood'){player['g8']-=wood}else if(player['gear8']=='stone'){player['g8']-=stone}if(player['gear9']=='wood'){player['g9']-=wood}else if(player['gear9']=='stone'){player['g9']-=stone}if(player['gear10']=='wood'){player['g10']-=wood}else if(player['gear10']=='stone'){player['g10']-=stone}
	lose_gold(gold);left_gear()
	}

function buildSomething(){
	if($('#castle').html()==null){alert(" You can only build on the map\n that has your castle on it."); return}

	var o='<div id="buildFloat">';
		o+='<div id="buildHouse"     onclick="buildIt(\'house\')">    <img src="backgrounds/house_130.jpg"></div>';
		o+='<div id="buildForge"     onclick="buildIt(\'forge\')">    <img src="backgrounds/anvil_130.jpg"></div>';
		o+='<div id="buildStore"     onclick="buildIt(\'store\')">    <img src="backgrounds/store_130.jpg"></div>';
		o+='<div id="buildLibrary"   onclick="buildIt(\'library\')">  <img src="backgrounds/library_130.jpg"></div>';
		o+='<div id="buildBarracks"  onclick="buildIt(\'barracks\')"> <img src="backgrounds/barracks_130.jpg"></div>';
		o+='<div id="buildAcademy"   onclick="buildIt(\'academy\')">  <img src="backgrounds/academy_130.jpg"></div>';
		o+='<div id="buildEnchanter" onclick="buildIt(\'enchanter\')"><img src="backgrounds/enchanter_130.jpg"></div>';
		o+='<div id="buildInfoBox"></div>';
		o+='<div id="buildCancel"><img onclick="closeBuildFloat()" src="backgrounds/CancelButton.png" /></div>';
		o+='</div>';
	
	toggle_links('off'); movement='build';
	$('#floater').css({'left':250,'top':20,'width':500,'height':480,'opacity':0,'paddingTop':'10px','background-color':'#999'}).html(o).show().animate({ opacity:1 }, 700);
	var origTop=origLeft='';

	$('#buildFloat').children('div').hover(function(){var id=$(this).attr('id');if((id!='buildInfoBox')&&(id!='buildCancel')){$('#buildInfoBox').html(update_buildInfoBox(id));var mt=parseInt($(this).css('top'))-15;var ml=parseInt($(this).css('left'))-15;$(this).animate({'width':130,'height':130,'top':mt,'left':ml}, 500);}}, function(){var id=$(this).attr('id');if((id!='buildInfoBox')&&(id!='buildCancel')){$('#buildInfoBox').html(update_buildInfoBox());$(this).animate({'width':100,'height':100,'top':'10px','left':'0px'}, 500);}});
	}

function update_buildInfoBox(data){
	var o='';
	switch(data){
		case'buildHouse':     o+='House<br><br>Store items here for later use or for your other characters to use<br><br>Materials needed to build:<br>30 wood 30 stone 100 gold'; break;
		case'buildForge':     o+='Forge<br><br>Build, upgrade and design your own equipment<br><br>Materials needed to build:<br>30 wood 60 stone 200 gold';                       break;
		case'buildStore':     o+='Store<br><br>Makes money for you even while you are away (10 gold per hour)<br><br>Materials needed to build:<br>30 wood 30 stone 500 gold';     break;
		case'buildLibrary':   o+='Library<br><br>Train here to raise your Intellect<br><br><br>Materials needed to build:<br>40 wood 50 stone 200 gold';                           break;
		case'buildBarracks':  o+='Barracks<br><br>Train here to raise your Strength<br><br><br>Materials needed to build:<br>40 wood 50 stone 200 gold';                           break;
		case'buildAcademy':   o+='Academy<br><br>Train here to raise your Dexterity<br><br><br>Materials needed to build:<br>40 wood 50 stone 200 gold';                           break;
		case'buildEnchanter': o+='Enchanter<br><br>Enchant the equipment that you have made in your forge<br><br>Materials needed to build:<br>75 wood 100 stone 1200 gold';       break;
		default:              o+=''; break;
		}
	return o;
	}

function open_building(b){
	var o='';
	switch(b){
		case'academy':   break;
		case'barracks':  break;
		case'enchanter': break;
		case'forge':     o+='<div id="forge"><script>var createdItem=[]; var fStr=fDex=fInt=10</script><div id="forgeCancel" title="Leave Forge" onclick="closeFloaterDiv(); movement=\'\';" >X</div><div id="forgeScene"></div><div id="forgeOptions"></div></div>'; movement='forge'; setTimeout('changeForge();', 50); break;
		case'house':     o+='<div id="house"><div id="houseCancel" title="Leave House" onclick="closeFloaterDiv(); movement=\'\';" >X</div><div id="houseOptions"></div></div>'; movement='house'; setTimeout('changeHouse();', 50); break;
		case'store':     o+='<div id="store"><div id="storeCancel" title="Leave Store" onclick="closeFloaterDiv(); movement=\'\'; $(\'#storeTime\').remove(); timer=0" >X</div><div id="storeLevel"></div><div id="storeOptions"></div><button onclick="upgradeStore()" id="storeUpgrade">Upgrade Store</button></div>'; setTimeout('check_timer();', 50); break;
		case'library':   break;
		}
	$('#floater').css({'left':350,'top':80,'width':400,'height':400}).html(o).show();
	}

function upgradeStore(){var lvl=player['s_income'].toString().replace('00', '');var c=Math.floor(parseInt(lvl)*3)*100;var n=Math.floor(parseInt(lvl)+1);var a=confirm('Upgrade Store to level '+n+' for '+c+' gold?');if(a){if(c<player['gold']){$('#storeTime').remove();lose_gold(c);player['s_income']=n*100;check_timer()}else{alert('You do not have enough gold!')}}}
function check_timer(){if($('#storeTime').html()==undefined){$('body').append('<div id="storeTime" style="display:none"><scr'+'ipt>var timer=1</scr'+'ipt></div>');var o=player['s_income'].toString().replace('00', '');$('#storeLevel').html('Level '+o+' Store');}store_timer()}
function collectStoreIncome(){gain_gold(player['s_income']); player['s_timer']=new Date().getTime(); timer=1; check_timer()}
function store_timer(){var n=new Date().getTime()-player['s_timer'];var d=Math.floor(n/1000/60/60/24);n-=d*1000*60*60*24;var h=Math.floor(n/1000/60/60);n-=h*1000*60*60;var m=Math.floor(n/1000/60);n-=m*1000*60;var s=Math.floor(n/1000);if(timer==1) {if((d>0)||(h>0)){timer=0;$('#storeOptions').html('<button onclick="collectStoreIncome()" type="button">Collect</button>');}else if(timer==1){m=Math.abs(m-=60);if(m==60){m=59}s=Math.abs(s-=60);if(s==60){s=0}$('#storeOptions').html('Collect '+player['s_income']+' gold in:<br>'+m+':'+s);setTimeout("store_timer()", 1000);}}}

function changeHouse(){
	//$('#houseOptions').html(o);
	}

function list_forged_eq(d){ 
	var o='<ul id="forge_mod_list">';
	for(i=0;i<d.length;i++){
		var id=nih('id',d[i]); var ttl=nih('title',d[i]); var img=nih('img',d[i]); var t=ttl.split(')'); var t2=t[0].split('('); var loc=t2[1]; var t=ttl.split('   '); var t2=t[1].split('    '); var t3=t2[0].split(' '); var dur=t3[0]; var nam=t3[1]; var t=ttl.split('    '); var t2=t[1].split(','); t3=t2[0].split(':'); var str=t3[1]; t4=t2[1].split(':'); var dex=t4[1]; t5=t2[2].split(':'); var int=t5[1];
		o+='<li><a onclick="mod_forged_eq('+id+','+ttl+','+img+','+dur+','+nam+','+str+','+dex+','+int+')"><img src="'+img+'">'+dur+' '+nam+' (str:'+str+' dex:'+dex+' int:'+int+')</a></li>';
		}
	o+='</ul>';
	$('#forgeOptions').fadeOut('fast', function (){
		fif();
		$('#forgeOptions').html('<div id="forgeBack" onclick="changeForge()"><< back</div>'+o).show();
		});
	}

function mod_forged_eq(id,ttl,img,dur,nam,str,dex,int){
	var o ='<div id="forgeCost">Gold needed:<div>0</div></div>';
		 o+='<ul id="forgeItemStats"><select id="forgeItemName">'+nam+'</select><img id="forgeItem" src="'+img+'">';
		 o+='<li class="forgeStr">Strength: <span>'+str+'</span><button onclick="change_forge_stats(\'str\',\'up\')">+</button><button onclick="change_forge_stats(\'str\',\'down\')">-</button></li>';
		 o+='<li class="forgeDex">Dexterity: <span>'+dex+'</span><button onclick="change_forge_stats(\'dex\',\'up\')">+</button><button onclick="change_forge_stats(\'dex\',\'down\')">-</button></li>';
		 o+='<li class="forgeInt">Intelligence: <span>'+int+'</span><button onclick="change_forge_stats(\'int\',\'up\')">+</button><button onclick="change_forge_stats(\'int\',\'down\')">-</button></li>';
		 o+='<div id="forgeQuality"><span title="+0 Armor" id="Worn" class="forgeQuality" onclick="forgeQ(\'Worn\')">Worn</span><span title="+1 Armor" id="Solid" onclick="forgeQ(\'Solid\')">Solid</span><span title="+2 Armor" id="New" onclick="forgeQ(\'New\')">New</span><br><span title="+0 Ward" id="Drained" onclick="forgeQ(\'Drained\')">Drained</span><span title="+1 Ward" id="Charged" onclick="forgeQ(\'Charged\')">Charged</span><span title="+2 Ward" id="Glowing" onclick="forgeQ(\'Glowing\')">Glowing</span></div>';
		 o+='</ul>';
	$('#forgeOptions').fadeOut('fast', function(){
		fif();
		$('#forgeOptions').html('<div id="forgeBack" onclick="changeForge()"><< back</div>'+o).show();
		forgeQ(dur);
		$('#forge').append('<button id="forgeCreateItem" onclick="modifyForgeItem()">Apply changes</button><button id="forgeCancelItem" onclick="$(\'#forgeCancelItem\',\'#forgeCreateItem\').remove(); createdItem=[]; changeForge();">Cancel modification</button>');
		});
	}

function get_forged_eq(d){
	var a=[];
	var liA=[item1_slot,item2_slot,item3_slot,item4_slot,item5_slot,item6_slot,item7_slot,item8_slot,item9_slot,item10_slot];
	for (i=0;i<liA.length;i++) { if(str_cont(liA[i],'purple')==true) {a.push(liA[i]);} }

	list_forged_eq(a);
	}

function changeForge(data,data2,data3){
	switch(data){
		case'new':    $('#forgeOptions').fadeOut('fast', function(){fif();$('#forgeOptions').html('<div id="forgeBack" onclick="changeForge()"><< back</div><ul><li onclick="changeForge(\'weapons\')">Weapons</li><li onclick="changeForge(\'armor\')">Armor</li></ul>'); }); break;
		case'modify': $('#forgeOptions').fadeOut('fast', function(){fif();$('#forgeOptions').html('<div id="forgeBack" onclick="changeForge()"><< back</div>'+get_forged_eq()); }); break;
		case'weapons':$('#forgeOptions').fadeOut('fast', function(){fif();$('#forgeOptions').html('<div id="forgeBack" onclick="changeForge(\'new\')"><< back</div><ul><li onclick="changeForge(\'image\',\'weapon\',\'axe\')">Axe</li><li onclick="changeForge(\'image\',\'weapon\',\'bow\')">Bow</li><li onclick="changeForge(\'image\',\'weapon\',\'dagger\')">Dagger</li><li onclick="changeForge(\'image\',\'weapon\',\'mace\')">Mace</li><li onclick="changeForge(\'image\',\'weapon\',\'staff\')">Staff</li><li onclick="changeForge(\'image\',\'weapon\',\'sword\')">Sword</li></ul>');});break;
		case'armor':  $('#forgeOptions').fadeOut('fast', function(){fif();$('#forgeOptions').html('<div id="forgeBack" onclick="changeForge(\'new\')"><< back</div><ul><li onclick="changeForge(\'image\',\'armor\',\'head\')">Head</li><li onclick="changeForge(\'image\',\'armor\',\'chest\')">Chest</li><li onclick="changeForge(\'image\',\'armor\',\'legs\')">Legs</li><li onclick="changeForge(\'image\',\'armor\',\'feet\')">Feet</li><li onclick="changeForge(\'image\',\'armor\',\'shield\')">Shield</li></ul>');});break;
		case'image':  var o='<div id="itemImg"><ul><li>Choose your '+data3+'</li></ul>';for(i=1;i<11;i++){o+='<img onclick="createdItem.push(\'equipment/'+data2+'/'+data3+'/'+data3+i+'.png\',\''+data3+'\'); changeForge(\'options\')" src="equipment/'+data2+'/'+data3+'/'+data3+i+'.png">';} o+='</div>'; data2=='armor'?bL='armor':bL='weapons'; $('#forgeOptions').fadeOut('fast', function (){$('#forgeOptions').html('<div id="forgeBack" onclick="changeForge(\''+bL+'\')"><< back</div>'+o).fadeIn('fast')});break;
		case'options':
			var dropList='';
			switch(createdItem[1]){
				case'sword': dropList='<option>Falchion</option><option>Sabre</option><option>Scimitar</option><option>Tulwar</option><option>Claymore</option><option>Flamberge</option><option>Gladius</option><option>Cutlass</option>'; break;
				case'dagger':dropList='<option>Dagger</option><option>Spike</option><option>Sickle</option><option>Hook</option><option>Knife</option><option>Dirk</option><option>Gauche</option><option>Rondel</option><option>Bollock</option>'; break;
				case'staff': dropList='<option>Pole</option><option>Staff</option><option>Rod</option><option>Shaft</option><option>Cane</option><option>Wand</option><option>Post</option><option>Bar</option><option>Stick</option><option>Polearm</option>'; break;
				case'axe':   dropList='<option>Axe</option><option>Pick</option><option>Hatchet</option><option>Cleaver</option><option>Crowbill</option><option>Naga</option><option>Tabar</option><option>Tomahawk</option><option>Ettin</option><option>Scythe</option>'; break;
				case'mace':  dropList='<option>Club</option><option>Mace</option><option>Flail</option><option>Maul</option><option>Cudgel</option><option>Knout</option><option>Sledge</option><option>Scourge</option><option>Hammer</option><option>Scepter</option>'; break;
				case'bow':   dropList='<option>Bow</option><option>Hunter</option><option>Yumi</option><option>Long Bow</option><option>Short Bow</option>'; break;
				case'head':  dropList='<option>Helm</option><option>Helmet</option><option>Skullcap</option><option>Cap</option><option>Band</option>'; break;
				case'chest': dropList='<option>Breastplate</option><option>Shirt</option><option>jerkin</option><option>Coverings</option><option>Wrappings</option>'; break;
				case'legs':  dropList='<option>Leg Guards</option><option>Legplates</option><option>Greaves</option>'; break;
				case'feet':  dropList='<option>Footplates</option><option>Shoes</option><option>Boots</option><option>Sandles</option><option>Wraps</option>'; break;
				case'shield':dropList='<option>Shield</option><option>Round Shield</option><option>Wall Shield</option><option>Spiked Shield</option>'; break;
				}

			var o='<div id="forgeCost">Gold needed:<div>50</div></div>';
				o+='<ul id="forgeItemStats"><select id="forgeItemName">'+dropList+'</select><img id="forgeItem" src="'+createdItem[0]+'">';
				o+='<li class="forgeStr">Strength: <span>0</span><button onclick="change_forge_stats(\'str\',\'up\')">+</button><button onclick="change_forge_stats(\'str\',\'down\')">-</button></li>';
				o+='<li class="forgeDex">Dexterity: <span>0</span><button onclick="change_forge_stats(\'dex\',\'up\')">+</button><button onclick="change_forge_stats(\'dex\',\'down\')">-</button></li>';
				o+='<li class="forgeInt">Intelligence: <span>0</span><button onclick="change_forge_stats(\'int\',\'up\')">+</button><button onclick="change_forge_stats(\'int\',\'down\')">-</button></li>';
				o+='<div id="forgeQuality"><span title="+0 Armor" id="Worn" class="forgeQuality" onclick="forgeQ(\'Worn\')">Worn</span><span title="+1 Armor" id="Solid" onclick="forgeQ(\'Solid\')">Solid</span><span title="+2 Armor" id="New" onclick="forgeQ(\'New\')">New</span><br><span title="+0 Ward" id="Drained" onclick="forgeQ(\'Drained\')">Drained</span><span title="+1 Ward" id="Charged" onclick="forgeQ(\'Charged\')">Charged</span><span title="+2 Ward" id="Glowing" onclick="forgeQ(\'Glowing\')">Glowing</span></div>';
				o+='</ul>';
			$('#forgeOptions').fadeOut('fast', function(){fif();$('#forgeOptions').html(o)});
			$('#forge').append('<button id="forgeCreateItem" onclick="createForgeItem()">Create!</button><button id="forgeCancelItem" onclick="$(\'#forgeCancelItem\',\'#forgeCreateItem\').remove(); createdItem=[]; changeForge();">Cancel creation</button>');
			break;
		default:$('#forgeOptions').fadeOut('fast', function(){fif();$('#forgeOptions').html('<ul><li onclick="changeForge(\'new\')">Create new item</li><li onclick="changeForge(\'modify\')">Modify existing item</li></ul>');var createdItem=[];var fStr=fDex=fInt=10;$('#forgeCancelItem , #forgeCreateItem').remove()});break;
		}
	}

function createForgeItem(){
	var gold=parseInt($('#forgeCost').children('div').text());
	if(gold>player['gold']){alert('You do not have enough gold')}
	else{
		var c=confirm("Create Equipment?");
		if(c==true){
			var str  =parseInt($('.forgeStr').children('span').text());
			var dex  =parseInt($('.forgeDex').children('span').text());
			var intel=parseInt($('.forgeInt').children('span').text());
			var q=q2 =$('.forgeQuality').text();
			var name =$('#forgeItemName').val();
			switch(q){case 'Worn': q2=0; break; case 'Solid': q2=1; break; case 'New': q2=2; break; case 'Drained': q2=0; break; case 'Charged': q2=1; break; case 'Glowing': q2=2; break;}
			item_manip('buy',''+q+' '+name+'','str:'+str+',dex:'+dex+',int:'+intel+','+q+':'+q2+'','null',''+createdItem[1]+'','purpletext',createdItem[0],''+q+' '+name+'    str:'+str+',dex:'+dex+',int:'+intel+'','yes',gold);
			if(left_menu=='inventory'){left_inventory()}
			changeForge();
			}
		}
	}

function forgeQ(q){var gold=parseInt($('#forgeCost').children('div').text());if(!$('#'+q).hasClass('forgeQuality')){var q2=$('.forgeQuality').attr('id');$('#'+q2).removeClass('forgeQuality');$('#'+q).addClass('forgeQuality');if((q2=='Solid')||(q2=='Charged')){gold-=500}else if((q2=='New')||(q2=='Glowing')){gold-=1000}if((q=='Solid')||(q=='Charged')) { gold+=500}else if((q=='New')||(q=='Glowing')){gold+=1000}$('#forgeCost').children('div').text(gold);}}
function change_forge_stats(stat,dir){
	var gold=parseInt($('#forgeCost').children('div').text());
	switch(stat){
		case'str':var val=parseInt($('.forgeStr').children('span').text());if(dir=='up'){gold+=fStr;val++;$('.forgeStr').children('span').text(val);fStr*=2}else if(val!=0){fStr/=2;gold-=fStr;val--;$('.forgeStr').children('span').text(val)}break;
		case'int':var val=parseInt($('.forgeInt').children('span').text());if(dir=='up'){gold+=fInt;val++;$('.forgeInt').children('span').text(val);fInt*=2}else if(val!=0){fInt/=2;gold-=fInt;val--;$('.forgeInt').children('span').text(val)}break;
		case'dex':var val=parseInt($('.forgeDex').children('span').text());if(dir=='up'){gold+=fDex;val++;$('.forgeDex').children('span').text(val);fDex*=2}else if(val!=0){fDex/=2;gold-=fDex;val--;$('.forgeDex').children('span').text(val)}break;
		}
	gold<0?gold=0:'';
	$('#forgeCost').children('div').text(gold);
	}

function deactivate_gear(){ // this is activated when a player tried to move and a gear is active
	$('#left_main_gear').children('li').each(function(){var id=$(this).attr('id');if($('#'+id+'_cancel').html()!=null){activateGear('',id,'cancel')}});
	}

//********************************************************************//
//***********************  *10*  Quests!  ****************************//
//********************************************************************//

function showCastleQuest(n){
	var o='<div id="castle_jobs_details">';
	    o+='<div id="jobBack" onClick="$(\'#innDiv\').html(getJobs())"><< Back</div>';
	switch(n){
		case'one':  o+='<div id="jobName">'+castleQuest1['name']+'</div><div id="jobReward"><div>'+castleQuest1['exp']+' exp</div><div>'+castleQuest1['gold']+' gold</div></div><div id="jobDesc">'+castleQuest1['desc']+'</div>';if(typeof castleQuest1['prevQuest']!='undefined'){if(castleQuest1['prevQuest']!='undefined'){o+='<div id="acceptQuest" onClick=\'alert(" You cannot accept this quest until you complete '+castleQuest1['prevQuest']+'");\'>Accept this quest</div>'}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest1,\'1\');">Accept this quest</div>'}}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest1,\'1\');">Accept this quest</div>'}break;
		case'two':  o+='<div id="jobName">'+castleQuest2['name']+'</div><div id="jobReward"><div>'+castleQuest2['exp']+' exp</div><div>'+castleQuest2['gold']+' gold</div></div><div id="jobDesc">'+castleQuest2['desc']+'</div>';if(typeof castleQuest2['prevQuest']!='undefined'){if(castleQuest2['prevQuest']!='undefined'){o+='<div id="acceptQuest" onClick=\'alert(" You cannot accept this quest until you complete '+castleQuest2['prevQuest']+'");\'>Accept this quest</div>'}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest2,\'2\');">Accept this quest</div>'}}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest2,\'2\');">Accept this quest</div>'}break;
		case'three':o+='<div id="jobName">'+castleQuest3['name']+'</div><div id="jobReward"><div>'+castleQuest3['exp']+' exp</div><div>'+castleQuest3['gold']+' gold</div></div><div id="jobDesc">'+castleQuest3['desc']+'</div>';if(typeof castleQuest3['prevQuest']!='undefined'){if(castleQuest3['prevQuest']!='undefined'){o+='<div id="acceptQuest" onClick=\'alert(" You cannot accept this quest until you complete '+castleQuest3['prevQuest']+'");\'>Accept this quest</div>'}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest5,\'5\');">Accept this quest</div>'}}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest3,\'3\');">Accept this quest</div>'}break;
		case'four': o+='<div id="jobName">'+castleQuest4['name']+'</div><div id="jobReward"><div>'+castleQuest4['exp']+' exp</div><div>'+castleQuest4['gold']+' gold</div></div><div id="jobDesc">'+castleQuest4['desc']+'</div>';if(typeof castleQuest4['prevQuest']!='undefined'){if(castleQuest4['prevQuest']!='undefined'){o+='<div id="acceptQuest" onClick=\'alert(" You cannot accept this quest until you complete '+castleQuest4['prevQuest']+'");\'>Accept this quest</div>'}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest5,\'5\');">Accept this quest</div>'}}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest4,\'4\');">Accept this quest</div>'}break;
		case'five': o+='<div id="jobName">'+castleQuest5['name']+'</div><div id="jobReward"><div>'+castleQuest5['exp']+' exp</div><div>'+castleQuest5['gold']+' gold</div></div><div id="jobDesc">'+castleQuest5['desc']+'</div>';if(typeof castleQuest5['prevQuest']!='undefined'){if(castleQuest5['prevQuest']!='undefined'){o+='<div id="acceptQuest" onClick=\'alert(" You cannot accept this quest until you complete '+castleQuest5['prevQuest']+'");\'>Accept this quest</div>'}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest5,\'5\');">Accept this quest</div>'}}else{o+='<div id="acceptQuest" onClick="acceptQuest(castleQuest5,\'5\');">Accept this quest</div>'}break}
	o+='</div>';
	$('#innDiv').html(o);
	}

function acceptQuest(newQuest,questNumb){
	switch(''){
		case player['q1']:player['q1_id']=newQuest['id'];player['q1']=newQuest['name'];player['q1_desc']=newQuest['desc'];player['q1_track']=newQuest['track'];player['q1_prog']=newQuest['prog'];player['q1_comp']=newQuest['comp'];player['q1_orig']=newQuest['origin'];player['q1_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q2']:player['q2_id']=newQuest['id'];player['q2']=newQuest['name'];player['q2_desc']=newQuest['desc'];player['q2_track']=newQuest['track'];player['q2_prog']=newQuest['prog'];player['q2_comp']=newQuest['comp'];player['q2_orig']=newQuest['origin'];player['q2_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q3']:player['q3_id']=newQuest['id'];player['q3']=newQuest['name'];player['q3_desc']=newQuest['desc'];player['q3_track']=newQuest['track'];player['q3_prog']=newQuest['prog'];player['q3_comp']=newQuest['comp'];player['q3_orig']=newQuest['origin'];player['q3_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q4']:player['q4_id']=newQuest['id'];player['q4']=newQuest['name'];player['q4_desc']=newQuest['desc'];player['q4_track']=newQuest['track'];player['q4_prog']=newQuest['prog'];player['q4_comp']=newQuest['comp'];player['q4_orig']=newQuest['origin'];player['q4_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q5']:player['q5_id']=newQuest['id'];player['q5']=newQuest['name'];player['q5_desc']=newQuest['desc'];player['q5_track']=newQuest['track'];player['q5_prog']=newQuest['prog'];player['q5_comp']=newQuest['comp'];player['q5_orig']=newQuest['origin'];player['q5_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q6']:player['q6_id']=newQuest['id'];player['q6']=newQuest['name'];player['q6_desc']=newQuest['desc'];player['q6_track']=newQuest['track'];player['q6_prog']=newQuest['prog'];player['q6_comp']=newQuest['comp'];player['q6_orig']=newQuest['origin'];player['q6_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q7']:player['q7_id']=newQuest['id'];player['q7']=newQuest['name'];player['q7_desc']=newQuest['desc'];player['q7_track']=newQuest['track'];player['q7_prog']=newQuest['prog'];player['q7_comp']=newQuest['comp'];player['q7_orig']=newQuest['origin'];player['q7_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q8']:player['q8_id']=newQuest['id'];player['q8']=newQuest['name'];player['q8_desc']=newQuest['desc'];player['q8_track']=newQuest['track'];player['q8_prog']=newQuest['prog'];player['q8_comp']=newQuest['comp'];player['q8_orig']=newQuest['origin'];player['q8_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q9']:player['q9_id']=newQuest['id'];player['q9']=newQuest['name'];player['q9_desc']=newQuest['desc'];player['q9_track']=newQuest['track'];player['q9_prog']=newQuest['prog'];player['q9_comp']=newQuest['comp'];player['q9_orig']=newQuest['origin'];player['q9_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		case player['q10']:player['q10_id']=newQuest['id'];player['q10']=newQuest['name'];player['q10_desc']=newQuest['desc'];player['q10_track']=newQuest['track'];player['q10_prog']=newQuest['prog'];player['q10_comp']=newQuest['comp'];player['q10_orig']=newQuest['origin'];player['q10_exp']=newQuest['exp'];deleteQuestVar(questNumb);break;
		default:alert('You are maxed out on quests');return;
		}
	}

function checkQuestTrackers(monster){
	var patt=[player["q1_track"],player["q2_track"],player["q3_track"],player["q4_track"],player["q5_track"],player["q6_track"],player["q7_track"],player["q8_track"],player["q9_track"],player["q10_track"]];
	var mon=new RegExp(monster,i);
	for(var i=0;i<patt.length;i++){
		var result=mon.exec(patt[i]);
		if(result!=null){
			if((player["q1_prog"]!='complete')&&(player['q1_track']==result))  {player["q1_prog"]=parseInt(player["q1_prog"])+1;  if(player["q1_prog"]>=player["q1_comp"])  {quest_completed('q1')}}
			if((player["q2_prog"]!='complete')&&(player['q2_track']==result))  {player["q2_prog"]=parseInt(player["q2_prog"])+1;  if(player["q2_prog"]>=player["q2_comp"])  {quest_completed('q2')}}
			if((player["q3_prog"]!='complete')&&(player['q3_track']==result))  {player["q3_prog"]=parseInt(player["q3_prog"])+1;  if(player["q3_prog"]>=player["q3_comp"])  {quest_completed('q3')}}
			if((player["q4_prog"]!='complete')&&(player['q4_track']==result))  {player["q4_prog"]=parseInt(player["q4_prog"])+1;  if(player["q4_prog"]>=player["q4_comp"])  {quest_completed('q4')}}
			if((player["q5_prog"]!='complete')&&(player['q5_track']==result))  {player["q5_prog"]=parseInt(player["q5_prog"])+1;  if(player["q5_prog"]>=player["q5_comp"])  {quest_completed('q5')}}
			if((player["q6_prog"]!='complete')&&(player['q6_track']==result))  {player["q6_prog"]=parseInt(player["q6_prog"])+1;  if(player["q6_prog"]>=player["q6_comp"])  {quest_completed('q6')}}
			if((player["q7_prog"]!='complete')&&(player['q7_track']==result))  {player["q7_prog"]=parseInt(player["q7_prog"])+1;  if(player["q7_prog"]>=player["q7_comp"])  {quest_completed('q7')}}
			if((player["q8_prog"]!='complete')&&(player['q8_track']==result))  {player["q8_prog"]=parseInt(player["q8_prog"])+1;  if(player["q8_prog"]>=player["q8_comp"])  {quest_completed('q8')}}
			if((player["q9_prog"]!='complete')&&(player['q9_track']==result))  {player["q9_prog"]=parseInt(player["q9_prog"])+1;  if(player["q9_prog"]>=player["q9_comp"])  {quest_completed('q9')}}
			if((player["q10_prog"]!='complete')&&(player['q10_track']==result)){player["q10_prog"]=parseInt(player["q10_prog"])+1;if(player["q10_prog"]>=player["q10_comp"]){quest_completed('q10')}}
			if(left_menu=="quests"){left_quests()}
			}
		}
	}

function deleteQuest(data){
	switch(data){
		case'q1':player["q1"]=player["q1_id"]=player['q1_desc']=player["q1_exp"]=player["q1_orig"]=player['q1_track']=player['q1_prog']=player['q1_comp']='';break;
		case'q2':player["q2"]=player["q2_id"]=player['q2_desc']=player["q2_exp"]=player["q2_orig"]=player['q2_track']=player['q2_prog']=player['q2_comp']='';break;
		case'q3':player["q3"]=player["q3_id"]=player['q3_desc']=player["q3_exp"]=player["q3_orig"]=player['q3_track']=player['q3_prog']=player['q3_comp']='';break;
		case'q4':player["q4"]=player["q4_id"]=player['q4_desc']=player["q4_exp"]=player["q4_orig"]=player['q4_track']=player['q4_prog']=player['q4_comp']='';break;
		case'q5':player["q5"]=player["q5_id"]=player['q5_desc']=player["q5_exp"]=player["q5_orig"]=player['q5_track']=player['q5_prog']=player['q5_comp']='';break;
		case'q6':player["q6"]=player["q6_id"]=player['q6_desc']=player["q6_exp"]=player["q6_orig"]=player['q6_track']=player['q6_prog']=player['q6_comp']='';break;
		case'q7':player["q7"]=player["q7_id"]=player['q7_desc']=player["q7_exp"]=player["q7_orig"]=player['q7_track']=player['q7_prog']=player['q7_comp']='';break;
		case'q8':player["q8"]=player["q8_id"]=player['q8_desc']=player["q8_exp"]=player["q8_orig"]=player['q8_track']=player['q8_prog']=player['q8_comp']='';break;
		case'q9':player["q9"]=player["q9_id"]=player['q9_desc']=player["q9_exp"]=player["q9_orig"]=player['q9_track']=player['q9_prog']=player['q9_comp']='';break;
		case'q10':player["q10"]=player["q10_id"]=player['q10_desc']=player["q01_exp"]=player["q10_orig"]=player['q10_track']=player['q10_prog']=player['q10_comp']='';break;
		}
	if(left_menu=="quests"){left_quests()}
	}

function deleteQuestVar(questNumb){switch(questNumb){case'1':castleQuest1='undefined';break;case'2':castleQuest2='undefined';break;case'3':castleQuest3='undefined';break;case'4':castleQuest4='undefined';break;case'5':castleQuest5='undefined';break}if(left_menu=="quests"){left_quests()}$('#innDiv').html(getJobs())}
function abandonQuest(data){var delete_me=confirm(" Do you really want to be a big ol quitter\n and abandon this quest?");if(delete_me==true){deleteQuest(data)}}
function divide_quest_vars(track,prog,comp){if(track!=''){var trackOut=track.toString().split(","); var progOut=prog.toString().split(",");var compOut=comp.toString().split(",");var output=''; for (i=0;i<trackOut.length;i++){output+=trackOut[i]+'s : '+progOut[i]+' / '+compOut[i];if(i!=trackOut.length){output+='<br>'}}return output}}
function quest_completed(quest){switch(quest){case'q1':player["q1_prog"]='complete';break;case'q2':player["q2_prog"]='complete';break;case'q3':player["q3_prog"]='complete';break;case'q4':player["q4_prog"]='complete';break;case'q5':player["q5_prog"]='complete';break;case'q6':player["q6_prog"]='complete';break;case 'q7':player["q7_prog"]='complete';break;case'q8':player["q8_prog"]='complete';break;case'q9':player["q9_prog"]='complete';break;case'q10':player["q10_prog"]='complete';break}}
function monster_death_count(monsterType){switch(monsterType){case"spider":player["spider_kills"]++;checkQuestTrackers('spider');break;case"orc":player["orc_kills"]++;checkQuestTrackers('orc');break;case"blob":player["blob_kills"]++;checkQuestTrackers('blob');break;case"zombie":player["zombie_kills"]++;checkQuestTrackers('zombie');break;case"beholder":player["beholder_kills"]++;checkQuestTrackers('beholder');break}}