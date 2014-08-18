/*
monster array
0= type
1= var1
2= var2
3= loc
4= oldloc
5= attack
6= mattack
7= defense
8= mdefense
9= hp
10= rockcnt
11= treecnt
12= watercnt
13= image
14= oldimage
15= hold        a number that represents how long the monster will be stunned
16= found       whether or not the creature has been found by the player, this is set to "yes" or "no"
17= oldvar1
18= oldvar2
19= backup_loc
20= exp_gain
21= effect      what effect is currently affecting the monster, like poison
*/

function attack_target(loc,effect) {
	if      (movement=='gear')      {deactivate_gear(); return} /* a gear is active, make it unactive */
	else if (movement=='gathering') {return} /* in the middle of gathering materials */
	else {
		var a_roll=Math.floor(Math.random()*7);
		var d_roll=Math.floor(Math.random()*5);
		
		if (typeof monster1!='undefined')  {if (loc==monster1[3])  {combat("monster1",a_roll,d_roll,effect)}}
		if (typeof monster2!='undefined')  {if (loc==monster2[3])  {combat("monster2",a_roll,d_roll,effect)}}
		if (typeof monster3!='undefined')  {if (loc==monster3[3])  {combat("monster3",a_roll,d_roll,effect)}}
		if (typeof monster4!='undefined')  {if (loc==monster4[3])  {combat("monster4",a_roll,d_roll,effect)}}
		if (typeof monster5!='undefined')  {if (loc==monster5[3])  {combat("monster5",a_roll,d_roll,effect)}}
		if (typeof monster6!='undefined')  {if (loc==monster6[3])  {combat("monster6",a_roll,d_roll,effect)}}
		if (typeof monster7!='undefined')  {if (loc==monster7[3])  {combat("monster7",a_roll,d_roll,effect)}}
		if (typeof monster8!='undefined')  {if (loc==monster8[3])  {combat("monster8",a_roll,d_roll,effect)}}
		if (typeof monster9!='undefined')  {if (loc==monster9[3])  {combat("monster9",a_roll,d_roll,effect)}}
		if (typeof monster10!='undefined') {if (loc==monster10[3]) {combat("monster10",a_roll,d_roll,effect)}}
		if (typeof monster11!='undefined') {if (loc==monster11[3]) {combat("monster11",a_roll,d_roll,effect)}}
		if (typeof monster12!='undefined') {if (loc==monster12[3]) {combat("monster12",a_roll,d_roll,effect)}}
		if (typeof monster13!='undefined') {if (loc==monster13[3]) {combat("monster13",a_roll,d_roll,effect)}}
		if (typeof monster14!='undefined') {if (loc==monster14[3]) {combat("monster14",a_roll,d_roll,effect)}}
		if (typeof monster15!='undefined') {if (loc==monster15[3]) {combat("monster15",a_roll,d_roll,effect)}}
		if (typeof monster16!='undefined') {if (loc==monster16[3]) {combat("monster16",a_roll,d_roll,effect)}}
		if (typeof monster17!='undefined') {if (loc==monster17[3]) {combat("monster17",a_roll,d_roll,effect)}}
		if (typeof monster18!='undefined') {if (loc==monster18[3]) {combat("monster18",a_roll,d_roll,effect)}}
		if (typeof monster19!='undefined') {if (loc==monster19[3]) {combat("monster19",a_roll,d_roll,effect)}}
		if (typeof monster20!='undefined') {if (loc==monster20[3]) {combat("monster20",a_roll,d_roll,effect)}}
		if (typeof monster21!='undefined') {if (loc==monster21[3]) {combat("monster21",a_roll,d_roll,effect)}}
		if (typeof monster22!='undefined') {if (loc==monster22[3]) {combat("monster22",a_roll,d_roll,effect)}}
		if (typeof monster23!='undefined') {if (loc==monster23[3]) {combat("monster23",a_roll,d_roll,effect)}}
		if (typeof monster24!='undefined') {if (loc==monster24[3]) {combat("monster24",a_roll,d_roll,effect)}}
		if (typeof monster25!='undefined') {if (loc==monster25[3]) {combat("monster25",a_roll,d_roll,effect)}}
		if (typeof monster26!='undefined') {if (loc==monster26[3]) {combat("monster26",a_roll,d_roll,effect)}}
		if (typeof monster27!='undefined') {if (loc==monster27[3]) {combat("monster27",a_roll,d_roll,effect)}}
		if (typeof monster28!='undefined') {if (loc==monster28[3]) {combat("monster28",a_roll,d_roll,effect)}}
		if (typeof monster29!='undefined') {if (loc==monster29[3]) {combat("monster29",a_roll,d_roll,effect)}}
		if (typeof monster30!='undefined') {if (loc==monster30[3]) {combat("monster30",a_roll,d_roll,effect)}}
		if (typeof monster31!='undefined') {if (loc==monster31[3]) {combat("monster31",a_roll,d_roll,effect)}}
		if (typeof monster32!='undefined') {if (loc==monster32[3]) {combat("monster32",a_roll,d_roll,effect)}}
		if (typeof monster33!='undefined') {if (loc==monster33[3]) {combat("monster33",a_roll,d_roll,effect)}}
		if (typeof monster34!='undefined') {if (loc==monster34[3]) {combat("monster34",a_roll,d_roll,effect)}}
		if (typeof monster35!='undefined') {if (loc==monster35[3]) {combat("monster35",a_roll,d_roll,effect)}}
		if (typeof monster36!='undefined') {if (loc==monster36[3]) {combat("monster36",a_roll,d_roll,effect)}}
		if (typeof monster37!='undefined') {if (loc==monster37[3]) {combat("monster37",a_roll,d_roll,effect)}}
		if (typeof monster38!='undefined') {if (loc==monster38[3]) {combat("monster38",a_roll,d_roll,effect)}}
		if (typeof monster39!='undefined') {if (loc==monster39[3]) {combat("monster39",a_roll,d_roll,effect)}}
		if (typeof monster40!='undefined') {if (loc==monster40[3]) {combat("monster40",a_roll,d_roll,effect)}}
		if (typeof monster41!='undefined') {if (loc==monster41[3]) {combat("monster41",a_roll,d_roll,effect)}}
		if (typeof monster42!='undefined') {if (loc==monster42[3]) {combat("monster42",a_roll,d_roll,effect)}}
		if (typeof monster43!='undefined') {if (loc==monster43[3]) {combat("monster43",a_roll,d_roll,effect)}}
		if (typeof monster44!='undefined') {if (loc==monster44[3]) {combat("monster44",a_roll,d_roll,effect)}}
		if (typeof monster45!='undefined') {if (loc==monster45[3]) {combat("monster45",a_roll,d_roll,effect)}}
		if (typeof monster46!='undefined') {if (loc==monster46[3]) {combat("monster46",a_roll,d_roll,effect)}}
		if (typeof monster47!='undefined') {if (loc==monster47[3]) {combat("monster47",a_roll,d_roll,effect)}}
		if (typeof monster48!='undefined') {if (loc==monster48[3]) {combat("monster48",a_roll,d_roll,effect)}}
		if (typeof monster49!='undefined') {if (loc==monster49[3]) {combat("monster49",a_roll,d_roll,effect)}}
		if (typeof monster50!='undefined') {if (loc==monster50[3]) {combat("monster50",a_roll,d_roll,effect)}}
		if (typeof monster51!='undefined') {if (loc==monster51[3]) {combat("monster51",a_roll,d_roll,effect)}}
		if (typeof monster52!='undefined') {if (loc==monster52[3]) {combat("monster52",a_roll,d_roll,effect)}}
		if (typeof monster53!='undefined') {if (loc==monster53[3]) {combat("monster53",a_roll,d_roll,effect)}}
		if (typeof monster54!='undefined') {if (loc==monster54[3]) {combat("monster54",a_roll,d_roll,effect)}}
		if (typeof monster55!='undefined') {if (loc==monster55[3]) {combat("monster55",a_roll,d_roll,effect)}}
		}
	}

function found_monster(monster) {
	switch (monster) {
		case "monster1":  monster1[16]="yes";  break;
		case "monster2":  monster2[16]="yes";  break;
		case "monster3":  monster3[16]="yes";  break;
		case "monster4":  monster4[16]="yes";  break;
		case "monster5":  monster5[16]="yes";  break;
		case "monster6":  monster6[16]="yes";  break;
		case "monster7":  monster7[16]="yes";  break;
		case "monster8":  monster8[16]="yes";  break;
		case "monster9":  monster9[16]="yes";  break;
		case "monster10": monster10[16]="yes"; break;
		case "monster11": monster11[16]="yes"; break;
		case "monster12": monster12[16]="yes"; break;
		case "monster13": monster13[16]="yes"; break;
		case "monster14": monster14[16]="yes"; break;
		case "monster15": monster15[16]="yes"; break;
		case "monster16": monster16[16]="yes"; break;
		case "monster17": monster17[16]="yes"; break;
		case "monster18": monster18[16]="yes"; break;
		case "monster19": monster19[16]="yes"; break;
		case "monster20": monster20[16]="yes"; break;
		case "monster21": monster21[16]="yes"; break;
		case "monster22": monster22[16]="yes"; break;
		case "monster23": monster23[16]="yes"; break;
		case "monster24": monster24[16]="yes"; break;
		case "monster25": monster25[16]="yes"; break;
		case "monster26": monster26[16]="yes"; break;
		case "monster27": monster27[16]="yes"; break;
		case "monster28": monster28[16]="yes"; break;
		case "monster29": monster29[16]="yes"; break;
		case "monster30": monster30[16]="yes"; break;
		case "monster31": monster31[16]="yes"; break;
		case "monster32": monster32[16]="yes"; break;
		case "monster33": monster33[16]="yes"; break;
		case "monster34": monster34[16]="yes"; break;
		case "monster35": monster35[16]="yes"; break;
		case "monster36": monster36[16]="yes"; break;
		case "monster37": monster37[16]="yes"; break;
		case "monster38": monster38[16]="yes"; break;
		case "monster39": monster39[16]="yes"; break;
		case "monster40": monster40[16]="yes"; break;
		case "monster41": monster41[16]="yes"; break;
		case "monster42": monster42[16]="yes"; break;
		case "monster43": monster43[16]="yes"; break;
		case "monster44": monster44[16]="yes"; break;
		case "monster45": monster45[16]="yes"; break;
		case "monster46": monster46[16]="yes"; break;
		case "monster47": monster47[16]="yes"; break;
		case "monster48": monster48[16]="yes"; break;
		case "monster49": monster49[16]="yes"; break;
		case "monster50": monster50[16]="yes"; break;
		case "monster51": monster51[16]="yes"; break;
		case "monster52": monster52[16]="yes"; break;
		case "monster53": monster53[16]="yes"; break;
		case "monster54": monster54[16]="yes"; break;
		case "monster55": monster55[16]="yes"; break;
		}
	}

function monster_move() {
	// monster[15] is the variable that represents whether or not the monster is being held, if monster[15] is anything less than 0 it wont move
	if (typeof monster1!='undefined') {if (monster1[16]=="yes") {if (monster1[15]<=0) {monster1[15]++; monster1[16]="no";} else if (monster1[3]!="dead") {move_the_monster("monster1")}}}
	if (typeof monster2!='undefined') {if (monster2[16]=="yes") {if (monster2[15]<=0) {monster2[15]++; monster2[16]="no";} else if (monster2[3]!="dead") {move_the_monster("monster2")}}}
	if (typeof monster3!='undefined') {if (monster3[16]=="yes") {if (monster3[15]<=0) {monster3[15]++; monster3[16]="no";} else if (monster3[3]!="dead") {move_the_monster("monster3")}}}
	if (typeof monster4!='undefined') {if (monster4[16]=="yes") {if (monster4[15]<=0) {monster4[15]++; monster4[16]="no";} else if (monster4[3]!="dead") {move_the_monster("monster4")}}}
	if (typeof monster5!='undefined') {if (monster5[16]=="yes") {if (monster5[15]<=0) {monster5[15]++; monster5[16]="no";} else if (monster5[3]!="dead") {move_the_monster("monster5")}}}
	if (typeof monster6!='undefined') {if (monster6[16]=="yes") {if (monster6[15]<=0) {monster6[15]++; monster6[16]="no";} else if (monster6[3]!="dead") {move_the_monster("monster6")}}}
	if (typeof monster7!='undefined') {if (monster7[16]=="yes") {if (monster7[15]<=0) {monster7[15]++; monster7[16]="no";} else if (monster7[3]!="dead") {move_the_monster("monster7")}}}
	if (typeof monster8!='undefined') {if (monster8[16]=="yes") {if (monster8[15]<=0) {monster8[15]++; monster8[16]="no";} else if (monster8[3]!="dead") {move_the_monster("monster8")}}}
	if (typeof monster9!='undefined') {if (monster9[16]=="yes") {if (monster9[15]<=0) {monster9[15]++; monster9[16]="no";} else if (monster9[3]!="dead") {move_the_monster("monster9")}}}
	if (typeof monster10!='undefined') {if (monster10[16]=="yes") {if (monster10[15]<=0) {monster10[15]++; monster10[16]="no";} else if (monster10[3]!="dead") {move_the_monster("monster10")}}}
	if (typeof monster11!='undefined') {if (monster11[16]=="yes") {if (monster11[15]<=0) {monster11[15]++; monster11[16]="no";} else if (monster11[3]!="dead") {move_the_monster("monster11")}}}
	if (typeof monster12!='undefined') {if (monster12[16]=="yes") {if (monster12[15]<=0) {monster12[15]++; monster12[16]="no";} else if (monster12[3]!="dead") {move_the_monster("monster12")}}}
	if (typeof monster13!='undefined') {if (monster13[16]=="yes") {if (monster13[15]<=0) {monster13[15]++; monster13[16]="no";} else if (monster13[3]!="dead") {move_the_monster("monster13")}}}
	if (typeof monster14!='undefined') {if (monster14[16]=="yes") {if (monster14[15]<=0) {monster14[15]++; monster14[16]="no";} else if (monster14[3]!="dead") {move_the_monster("monster14")}}}
	if (typeof monster15!='undefined') {if (monster15[16]=="yes") {if (monster15[15]<=0) {monster15[15]++; monster15[16]="no";} else if (monster15[3]!="dead") {move_the_monster("monster15")}}}
	if (typeof monster16!='undefined') {if (monster16[16]=="yes") {if (monster16[15]<=0) {monster16[15]++; monster16[16]="no";} else if (monster16[3]!="dead") {move_the_monster("monster16")}}}
	if (typeof monster17!='undefined') {if (monster17[16]=="yes") {if (monster17[15]<=0) {monster17[15]++; monster17[16]="no";} else if (monster17[3]!="dead") {move_the_monster("monster17")}}}
	if (typeof monster18!='undefined') {if (monster18[16]=="yes") {if (monster18[15]<=0) {monster18[15]++; monster18[16]="no";} else if (monster18[3]!="dead") {move_the_monster("monster18")}}}
	if (typeof monster19!='undefined') {if (monster19[16]=="yes") {if (monster19[15]<=0) {monster19[15]++; monster19[16]="no";} else if (monster19[3]!="dead") {move_the_monster("monster19")}}}
	if (typeof monster20!='undefined') {if (monster20[16]=="yes") {if (monster20[15]<=0) {monster20[15]++; monster20[16]="no";} else if (monster20[3]!="dead") {move_the_monster("monster20")}}}
	if (typeof monster21!='undefined') {if (monster21[16]=="yes") {if (monster21[15]<=0) {monster21[15]++; monster21[16]="no";} else if (monster21[3]!="dead") {move_the_monster("monster21")}}}
	if (typeof monster22!='undefined') {if (monster22[16]=="yes") {if (monster22[15]<=0) {monster22[15]++; monster22[16]="no";} else if (monster22[3]!="dead") {move_the_monster("monster22")}}}
	if (typeof monster23!='undefined') {if (monster23[16]=="yes") {if (monster23[15]<=0) {monster23[15]++; monster23[16]="no";} else if (monster23[3]!="dead") {move_the_monster("monster23")}}}
	if (typeof monster24!='undefined') {if (monster24[16]=="yes") {if (monster24[15]<=0) {monster24[15]++; monster24[16]="no";} else if (monster24[3]!="dead") {move_the_monster("monster24")}}}
	if (typeof monster25!='undefined') {if (monster25[16]=="yes") {if (monster25[15]<=0) {monster25[15]++; monster25[16]="no";} else if (monster25[3]!="dead") {move_the_monster("monster25")}}}
	if (typeof monster26!='undefined') {if (monster26[16]=="yes") {if (monster26[15]<=0) {monster26[15]++; monster26[16]="no";} else if (monster26[3]!="dead") {move_the_monster("monster26")}}}
	if (typeof monster27!='undefined') {if (monster27[16]=="yes") {if (monster27[15]<=0) {monster27[15]++; monster27[16]="no";} else if (monster27[3]!="dead") {move_the_monster("monster27")}}}
	if (typeof monster28!='undefined') {if (monster28[16]=="yes") {if (monster28[15]<=0) {monster28[15]++; monster28[16]="no";} else if (monster28[3]!="dead") {move_the_monster("monster28")}}}
	if (typeof monster29!='undefined') {if (monster29[16]=="yes") {if (monster29[15]<=0) {monster29[15]++; monster29[16]="no";} else if (monster29[3]!="dead") {move_the_monster("monster29")}}}
	if (typeof monster30!='undefined') {if (monster30[16]=="yes") {if (monster30[15]<=0) {monster30[15]++; monster30[16]="no";} else if (monster30[3]!="dead") {move_the_monster("monster30")}}}
	if (typeof monster31!='undefined') {if (monster31[16]=="yes") {if (monster31[15]<=0) {monster31[15]++; monster31[16]="no";} else if (monster31[3]!="dead") {move_the_monster("monster31")}}}
	if (typeof monster32!='undefined') {if (monster32[16]=="yes") {if (monster32[15]<=0) {monster32[15]++; monster32[16]="no";} else if (monster32[3]!="dead") {move_the_monster("monster32")}}}
	if (typeof monster33!='undefined') {if (monster33[16]=="yes") {if (monster33[15]<=0) {monster33[15]++; monster33[16]="no";} else if (monster33[3]!="dead") {move_the_monster("monster33")}}}
	if (typeof monster34!='undefined') {if (monster34[16]=="yes") {if (monster34[15]<=0) {monster34[15]++; monster34[16]="no";} else if (monster34[3]!="dead") {move_the_monster("monster34")}}}
	if (typeof monster35!='undefined') {if (monster35[16]=="yes") {if (monster35[15]<=0) {monster35[15]++; monster35[16]="no";} else if (monster35[3]!="dead") {move_the_monster("monster35")}}}
	if (typeof monster36!='undefined') {if (monster36[16]=="yes") {if (monster36[15]<=0) {monster36[15]++; monster36[16]="no";} else if (monster36[3]!="dead") {move_the_monster("monster36")}}}
	if (typeof monster37!='undefined') {if (monster37[16]=="yes") {if (monster37[15]<=0) {monster37[15]++; monster37[16]="no";} else if (monster37[3]!="dead") {move_the_monster("monster37")}}}
	if (typeof monster38!='undefined') {if (monster38[16]=="yes") {if (monster38[15]<=0) {monster38[15]++; monster38[16]="no";} else if (monster38[3]!="dead") {move_the_monster("monster38")}}}
	if (typeof monster39!='undefined') {if (monster39[16]=="yes") {if (monster39[15]<=0) {monster39[15]++; monster39[16]="no";} else if (monster39[3]!="dead") {move_the_monster("monster39")}}}
	if (typeof monster40!='undefined') {if (monster40[16]=="yes") {if (monster40[15]<=0) {monster40[15]++; monster40[16]="no";} else if (monster40[3]!="dead") {move_the_monster("monster40")}}}
	if (typeof monster41!='undefined') {if (monster41[16]=="yes") {if (monster41[15]<=0) {monster41[15]++; monster41[16]="no";} else if (monster41[3]!="dead") {move_the_monster("monster41")}}}
	if (typeof monster42!='undefined') {if (monster42[16]=="yes") {if (monster42[15]<=0) {monster42[15]++; monster42[16]="no";} else if (monster42[3]!="dead") {move_the_monster("monster42")}}}
	if (typeof monster43!='undefined') {if (monster43[16]=="yes") {if (monster43[15]<=0) {monster43[15]++; monster43[16]="no";} else if (monster43[3]!="dead") {move_the_monster("monster43")}}}
	if (typeof monster44!='undefined') {if (monster44[16]=="yes") {if (monster44[15]<=0) {monster44[15]++; monster44[16]="no";} else if (monster44[3]!="dead") {move_the_monster("monster44")}}}
	if (typeof monster45!='undefined') {if (monster45[16]=="yes") {if (monster45[15]<=0) {monster45[15]++; monster45[16]="no";} else if (monster45[3]!="dead") {move_the_monster("monster45")}}}
	if (typeof monster46!='undefined') {if (monster46[16]=="yes") {if (monster46[15]<=0) {monster46[15]++; monster46[16]="no";} else if (monster46[3]!="dead") {move_the_monster("monster46")}}}
	if (typeof monster47!='undefined') {if (monster47[16]=="yes") {if (monster47[15]<=0) {monster47[15]++; monster47[16]="no";} else if (monster47[3]!="dead") {move_the_monster("monster47")}}}
	if (typeof monster48!='undefined') {if (monster48[16]=="yes") {if (monster48[15]<=0) {monster48[15]++; monster48[16]="no";} else if (monster48[3]!="dead") {move_the_monster("monster48")}}}
	if (typeof monster49!='undefined') {if (monster49[16]=="yes") {if (monster49[15]<=0) {monster49[15]++; monster49[16]="no";} else if (monster49[3]!="dead") {move_the_monster("monster49")}}}
	if (typeof monster50!='undefined') {if (monster50[16]=="yes") {if (monster50[15]<=0) {monster50[15]++; monster50[16]="no";} else if (monster50[3]!="dead") {move_the_monster("monster50")}}}
	if (typeof monster51!='undefined') {if (monster51[16]=="yes") {if (monster51[15]<=0) {monster51[15]++; monster51[16]="no";} else if (monster51[3]!="dead") {move_the_monster("monster51")}}}
	if (typeof monster52!='undefined') {if (monster52[16]=="yes") {if (monster52[15]<=0) {monster52[15]++; monster52[16]="no";} else if (monster52[3]!="dead") {move_the_monster("monster52")}}}
	if (typeof monster53!='undefined') {if (monster53[16]=="yes") {if (monster53[15]<=0) {monster53[15]++; monster53[16]="no";} else if (monster53[3]!="dead") {move_the_monster("monster53")}}}
	if (typeof monster54!='undefined') {if (monster54[16]=="yes") {if (monster54[15]<=0) {monster54[15]++; monster54[16]="no";} else if (monster54[3]!="dead") {move_the_monster("monster54")}}}
	if (typeof monster55!='undefined') {if (monster55[16]=="yes") {if (monster55[15]<=0) {monster55[15]++; monster55[16]="no";} else if (monster55[3]!="dead") {move_the_monster("monster55")}}}
	}

function activate_all_monsters() { // make all monsters "found" so they can all move even if they have not been found yet
	if (typeof monster1!='undefined')  {monster1[16]="yes"} 
	if (typeof monster2!='undefined')  {monster2[16]="yes"}
	if (typeof monster3!='undefined')  {monster3[16]="yes"}
	if (typeof monster4!='undefined')  {monster4[16]="yes"}
	if (typeof monster5!='undefined')  {monster5[16]="yes"}
	if (typeof monster6!='undefined')  {monster6[16]="yes"}
	if (typeof monster7!='undefined')  {monster7[16]="yes"}
	if (typeof monster8!='undefined')  {monster8[16]="yes"}
	if (typeof monster9!='undefined')  {monster9[16]="yes"}
	if (typeof monster10!='undefined') {monster10[16]="yes"}
	if (typeof monster11!='undefined') {monster11[16]="yes"}
	if (typeof monster12!='undefined') {monster12[16]="yes"}
	if (typeof monster13!='undefined') {monster13[16]="yes"}
	if (typeof monster14!='undefined') {monster14[16]="yes"}
	if (typeof monster15!='undefined') {monster15[16]="yes"}
	if (typeof monster16!='undefined') {monster16[16]="yes"}
	if (typeof monster17!='undefined') {monster17[16]="yes"}
	if (typeof monster18!='undefined') {monster18[16]="yes"}
	if (typeof monster19!='undefined') {monster19[16]="yes"}
	if (typeof monster20!='undefined') {monster20[16]="yes"}
	if (typeof monster21!='undefined') {monster21[16]="yes"}
	if (typeof monster22!='undefined') {monster22[16]="yes"}
	if (typeof monster23!='undefined') {monster23[16]="yes"}
	if (typeof monster24!='undefined') {monster24[16]="yes"}
	if (typeof monster25!='undefined') {monster25[16]="yes"}
	if (typeof monster26!='undefined') {monster26[16]="yes"}
	if (typeof monster27!='undefined') {monster27[16]="yes"}
	if (typeof monster28!='undefined') {monster28[16]="yes"}
	if (typeof monster29!='undefined') {monster29[16]="yes"}
	if (typeof monster30!='undefined') {monster30[16]="yes"}
	if (typeof monster31!='undefined') {monster31[16]="yes"}
	if (typeof monster32!='undefined') {monster32[16]="yes"}
	if (typeof monster33!='undefined') {monster33[16]="yes"}
	if (typeof monster34!='undefined') {monster34[16]="yes"}
	if (typeof monster35!='undefined') {monster35[16]="yes"}
	if (typeof monster36!='undefined') {monster36[16]="yes"} 
	if (typeof monster37!='undefined') {monster37[16]="yes"}
	if (typeof monster38!='undefined') {monster38[16]="yes"}
	if (typeof monster39!='undefined') {monster39[16]="yes"}
	if (typeof monster40!='undefined') {monster40[16]="yes"}
	if (typeof monster41!='undefined') {monster41[16]="yes"} 
	if (typeof monster42!='undefined') {monster42[16]="yes"}
	if (typeof monster43!='undefined') {monster43[16]="yes"}
	if (typeof monster44!='undefined') {monster44[16]="yes"}
	if (typeof monster45!='undefined') {monster45[16]="yes"}
	if (typeof monster46!='undefined') {monster46[16]="yes"} 
	if (typeof monster47!='undefined') {monster47[16]="yes"}
	if (typeof monster48!='undefined') {monster48[16]="yes"}
	if (typeof monster49!='undefined') {monster49[16]="yes"}
	if (typeof monster50!='undefined') {monster50[16]="yes"}
	if (typeof monster51!='undefined') {monster51[16]="yes"}
	if (typeof monster52!='undefined') {monster52[16]="yes"}
	if (typeof monster53!='undefined') {monster53[16]="yes"}
	if (typeof monster54!='undefined') {monster54[16]="yes"}
	if (typeof monster55!='undefined') {monster55[16]="yes"}
	}

function copy_array(monster) {
	switch (monster) {
		case "monster1":  for(i=0;i<monster1.length;i++)  {temp_monster[i]=monster1[i];}  break;
		case "monster2":  for(i=0;i<monster2.length;i++)  {temp_monster[i]=monster2[i];}  break;
		case "monster3":  for(i=0;i<monster3.length;i++)  {temp_monster[i]=monster3[i];}  break;
		case "monster4":  for(i=0;i<monster4.length;i++)  {temp_monster[i]=monster4[i];}  break;
		case "monster5":  for(i=0;i<monster5.length;i++)  {temp_monster[i]=monster5[i];}  break;
		case "monster6":  for(i=0;i<monster6.length;i++)  {temp_monster[i]=monster6[i];}  break;
		case "monster7":  for(i=0;i<monster7.length;i++)  {temp_monster[i]=monster7[i];}  break;
		case "monster8":  for(i=0;i<monster8.length;i++)  {temp_monster[i]=monster8[i];}  break;
		case "monster9":  for(i=0;i<monster9.length;i++)  {temp_monster[i]=monster9[i];}  break;
		case "monster10": for(i=0;i<monster10.length;i++) {temp_monster[i]=monster10[i];} break;
		case "monster11": for(i=0;i<monster11.length;i++) {temp_monster[i]=monster11[i];} break;
		case "monster12": for(i=0;i<monster12.length;i++) {temp_monster[i]=monster12[i];} break;
		case "monster13": for(i=0;i<monster13.length;i++) {temp_monster[i]=monster13[i];} break;
		case "monster14": for(i=0;i<monster14.length;i++) {temp_monster[i]=monster14[i];} break;
		case "monster15": for(i=0;i<monster15.length;i++) {temp_monster[i]=monster15[i];} break;
		case "monster16": for(i=0;i<monster16.length;i++) {temp_monster[i]=monster16[i];} break;
		case "monster17": for(i=0;i<monster17.length;i++) {temp_monster[i]=monster17[i];} break;
		case "monster18": for(i=0;i<monster18.length;i++) {temp_monster[i]=monster18[i];} break;
		case "monster19": for(i=0;i<monster19.length;i++) {temp_monster[i]=monster19[i];} break;
		case "monster20": for(i=0;i<monster20.length;i++) {temp_monster[i]=monster20[i];} break;
		case "monster21": for(i=0;i<monster21.length;i++) {temp_monster[i]=monster21[i];} break;
		case "monster22": for(i=0;i<monster22.length;i++) {temp_monster[i]=monster22[i];} break;
		case "monster23": for(i=0;i<monster23.length;i++) {temp_monster[i]=monster23[i];} break;
		case "monster24": for(i=0;i<monster24.length;i++) {temp_monster[i]=monster24[i];} break;
		case "monster25": for(i=0;i<monster25.length;i++) {temp_monster[i]=monster25[i];} break;
		case "monster26": for(i=0;i<monster26.length;i++) {temp_monster[i]=monster26[i];} break;
		case "monster27": for(i=0;i<monster27.length;i++) {temp_monster[i]=monster27[i];} break;
		case "monster28": for(i=0;i<monster28.length;i++) {temp_monster[i]=monster28[i];} break;
		case "monster29": for(i=0;i<monster29.length;i++) {temp_monster[i]=monster29[i];} break;
		case "monster30": for(i=0;i<monster30.length;i++) {temp_monster[i]=monster30[i];} break;
		case "monster31": for(i=0;i<monster31.length;i++) {temp_monster[i]=monster31[i];} break;
		case "monster32": for(i=0;i<monster32.length;i++) {temp_monster[i]=monster32[i];} break;
		case "monster33": for(i=0;i<monster33.length;i++) {temp_monster[i]=monster33[i];} break;
		case "monster34": for(i=0;i<monster34.length;i++) {temp_monster[i]=monster34[i];} break;
		case "monster35": for(i=0;i<monster35.length;i++) {temp_monster[i]=monster35[i];} break;
		case "monster36": for(i=0;i<monster36.length;i++) {temp_monster[i]=monster36[i];} break;
		case "monster37": for(i=0;i<monster37.length;i++) {temp_monster[i]=monster37[i];} break;
		case "monster38": for(i=0;i<monster38.length;i++) {temp_monster[i]=monster38[i];} break;
		case "monster39": for(i=0;i<monster39.length;i++) {temp_monster[i]=monster39[i];} break;
		case "monster40": for(i=0;i<monster40.length;i++) {temp_monster[i]=monster40[i];} break;
		case "monster41": for(i=0;i<monster41.length;i++) {temp_monster[i]=monster41[i];} break;
		case "monster42": for(i=0;i<monster42.length;i++) {temp_monster[i]=monster42[i];} break;
		case "monster43": for(i=0;i<monster43.length;i++) {temp_monster[i]=monster43[i];} break;
		case "monster44": for(i=0;i<monster44.length;i++) {temp_monster[i]=monster44[i];} break;
		case "monster45": for(i=0;i<monster45.length;i++) {temp_monster[i]=monster45[i];} break;
		case "monster46": for(i=0;i<monster46.length;i++) {temp_monster[i]=monster46[i];} break;
		case "monster47": for(i=0;i<monster47.length;i++) {temp_monster[i]=monster47[i];} break;
		case "monster48": for(i=0;i<monster48.length;i++) {temp_monster[i]=monster48[i];} break;
		case "monster49": for(i=0;i<monster49.length;i++) {temp_monster[i]=monster49[i];} break;
		case "monster50": for(i=0;i<monster50.length;i++) {temp_monster[i]=monster50[i];} break;
		case "monster51": for(i=0;i<monster51.length;i++) {temp_monster[i]=monster51[i];} break;
		case "monster52": for(i=0;i<monster52.length;i++) {temp_monster[i]=monster52[i];} break;
		case "monster53": for(i=0;i<monster53.length;i++) {temp_monster[i]=monster53[i];} break;
		case "monster54": for(i=0;i<monster54.length;i++) {temp_monster[i]=monster54[i];} break;
		case "monster55": for(i=0;i<monster55.length;i++) {temp_monster[i]=monster55[i];} break;
		}
	}

function revert_copy_array(monster) {
	switch (monster) {
		case "monster1":  for(i=0;i<temp_monster.length;i++) {monster1[i]=temp_monster[i];} break;
		case "monster2":  for(i=0;i<temp_monster.length;i++) {monster2[i]=temp_monster[i];} break;
		case "monster3":  for(i=0;i<temp_monster.length;i++) {monster3[i]=temp_monster[i];} break;
		case "monster4":  for(i=0;i<temp_monster.length;i++) {monster4[i]=temp_monster[i];} break;
		case "monster5":  for(i=0;i<temp_monster.length;i++) {monster5[i]=temp_monster[i];} break;
		case "monster6":  for(i=0;i<temp_monster.length;i++) {monster6[i]=temp_monster[i];} break;
		case "monster7":  for(i=0;i<temp_monster.length;i++) {monster7[i]=temp_monster[i];} break;
		case "monster8":  for(i=0;i<temp_monster.length;i++) {monster8[i]=temp_monster[i];} break;
		case "monster9":  for(i=0;i<temp_monster.length;i++) {monster9[i]=temp_monster[i];} break;
		case "monster10": for(i=0;i<temp_monster.length;i++) {monster10[i]=temp_monster[i];} break;
		case "monster11": for(i=0;i<temp_monster.length;i++) {monster11[i]=temp_monster[i];} break;
		case "monster12": for(i=0;i<temp_monster.length;i++) {monster12[i]=temp_monster[i];} break;
		case "monster13": for(i=0;i<temp_monster.length;i++) {monster13[i]=temp_monster[i];} break;
		case "monster14": for(i=0;i<temp_monster.length;i++) {monster14[i]=temp_monster[i];} break;
		case "monster15": for(i=0;i<temp_monster.length;i++) {monster15[i]=temp_monster[i];} break;
		case "monster16": for(i=0;i<temp_monster.length;i++) {monster16[i]=temp_monster[i];} break;
		case "monster17": for(i=0;i<temp_monster.length;i++) {monster17[i]=temp_monster[i];} break;
		case "monster18": for(i=0;i<temp_monster.length;i++) {monster18[i]=temp_monster[i];} break;
		case "monster19": for(i=0;i<temp_monster.length;i++) {monster19[i]=temp_monster[i];} break;
		case "monster20": for(i=0;i<temp_monster.length;i++) {monster20[i]=temp_monster[i];} break;
		case "monster21": for(i=0;i<temp_monster.length;i++) {monster21[i]=temp_monster[i];} break;
		case "monster22": for(i=0;i<temp_monster.length;i++) {monster22[i]=temp_monster[i];} break;
		case "monster23": for(i=0;i<temp_monster.length;i++) {monster23[i]=temp_monster[i];} break;
		case "monster24": for(i=0;i<temp_monster.length;i++) {monster24[i]=temp_monster[i];} break;
		case "monster25": for(i=0;i<temp_monster.length;i++) {monster25[i]=temp_monster[i];} break;
		case "monster26": for(i=0;i<temp_monster.length;i++) {monster26[i]=temp_monster[i];} break;
		case "monster27": for(i=0;i<temp_monster.length;i++) {monster27[i]=temp_monster[i];} break;
		case "monster28": for(i=0;i<temp_monster.length;i++) {monster28[i]=temp_monster[i];} break;
		case "monster29": for(i=0;i<temp_monster.length;i++) {monster29[i]=temp_monster[i];} break;
		case "monster30": for(i=0;i<temp_monster.length;i++) {monster30[i]=temp_monster[i];} break;
		case "monster31": for(i=0;i<temp_monster.length;i++) {monster31[i]=temp_monster[i];} break;
		case "monster32": for(i=0;i<temp_monster.length;i++) {monster32[i]=temp_monster[i];} break;
		case "monster33": for(i=0;i<temp_monster.length;i++) {monster33[i]=temp_monster[i];} break;
		case "monster34": for(i=0;i<temp_monster.length;i++) {monster34[i]=temp_monster[i];} break;
		case "monster35": for(i=0;i<temp_monster.length;i++) {monster35[i]=temp_monster[i];} break;
		case "monster36": for(i=0;i<temp_monster.length;i++) {monster36[i]=temp_monster[i];} break;
		case "monster37": for(i=0;i<temp_monster.length;i++) {monster37[i]=temp_monster[i];} break;
		case "monster38": for(i=0;i<temp_monster.length;i++) {monster38[i]=temp_monster[i];} break;
		case "monster39": for(i=0;i<temp_monster.length;i++) {monster39[i]=temp_monster[i];} break;
		case "monster40": for(i=0;i<temp_monster.length;i++) {monster40[i]=temp_monster[i];} break;
		case "monster41": for(i=0;i<temp_monster.length;i++) {monster41[i]=temp_monster[i];} break;
		case "monster42": for(i=0;i<temp_monster.length;i++) {monster42[i]=temp_monster[i];} break;
		case "monster43": for(i=0;i<temp_monster.length;i++) {monster43[i]=temp_monster[i];} break;
		case "monster44": for(i=0;i<temp_monster.length;i++) {monster44[i]=temp_monster[i];} break;
		case "monster45": for(i=0;i<temp_monster.length;i++) {monster45[i]=temp_monster[i];} break;
		case "monster46": for(i=0;i<temp_monster.length;i++) {monster46[i]=temp_monster[i];} break;
		case "monster47": for(i=0;i<temp_monster.length;i++) {monster47[i]=temp_monster[i];} break;
		case "monster48": for(i=0;i<temp_monster.length;i++) {monster48[i]=temp_monster[i];} break;
		case "monster49": for(i=0;i<temp_monster.length;i++) {monster49[i]=temp_monster[i];} break;
		case "monster50": for(i=0;i<temp_monster.length;i++) {monster50[i]=temp_monster[i];} break;
		case "monster51": for(i=0;i<temp_monster.length;i++) {monster51[i]=temp_monster[i];} break;
		case "monster52": for(i=0;i<temp_monster.length;i++) {monster52[i]=temp_monster[i];} break;
		case "monster53": for(i=0;i<temp_monster.length;i++) {monster53[i]=temp_monster[i];} break;
		case "monster54": for(i=0;i<temp_monster.length;i++) {monster54[i]=temp_monster[i];} break;
		case "monster55": for(i=0;i<temp_monster.length;i++) {monster55[i]=temp_monster[i];} break;
		}
	}

function revert_monster(monster) {
	switch(monster) {
		case "monster1":  monster1[1]=monster1[17];   monster1[2]=monster1[18];   monster1[3]=monster1[4];   monster1[4]=monster1[19];   break;
		case "monster2":  monster2[1]=monster2[17];   monster2[2]=monster2[18];   monster2[3]=monster2[4];   monster2[4]=monster2[19];   break;
		case "monster3":  monster3[1]=monster3[17];   monster3[2]=monster3[18];   monster3[3]=monster3[4];   monster3[4]=monster3[19];   break;
		case "monster4":  monster4[1]=monster4[17];   monster4[2]=monster4[18];   monster4[3]=monster4[4];   monster4[4]=monster4[19];   break;
		case "monster5":  monster5[1]=monster5[17];   monster5[2]=monster5[18];   monster5[3]=monster5[4];   monster5[4]=monster5[19];   break;
		case "monster6":  monster6[1]=monster6[17];   monster6[2]=monster6[18];   monster6[3]=monster6[4];   monster6[4]=monster6[19];   break;
		case "monster7":  monster7[1]=monster7[17];   monster7[2]=monster7[18];   monster7[3]=monster7[4];   monster7[4]=monster7[19];   break;
		case "monster8":  monster8[1]=monster8[17];   monster8[2]=monster8[18];   monster8[3]=monster8[4];   monster8[4]=monster8[19];   break;
		case "monster9":  monster9[1]=monster9[17];   monster9[2]=monster9[18];   monster9[3]=monster9[4];   monster9[4]=monster9[19];   break;
		case "monster10": monster10[1]=monster10[17]; monster10[2]=monster10[18]; monster10[3]=monster10[4]; monster10[4]=monster10[19]; break;
		case "monster11": monster11[1]=monster11[17]; monster11[2]=monster11[18]; monster11[3]=monster11[4]; monster11[4]=monster11[19]; break;
		case "monster12": monster12[1]=monster12[17]; monster12[2]=monster12[18]; monster12[3]=monster12[4]; monster12[4]=monster12[19]; break;
		case "monster13": monster13[1]=monster13[17]; monster13[2]=monster13[18]; monster13[3]=monster13[4]; monster13[4]=monster13[19]; break;
		case "monster14": monster14[1]=monster14[17]; monster14[2]=monster14[18]; monster14[3]=monster14[4]; monster14[4]=monster14[19]; break;
		case "monster15": monster15[1]=monster15[17]; monster15[2]=monster15[18]; monster15[3]=monster15[4]; monster15[4]=monster15[19]; break;
		case "monster16": monster16[1]=monster16[17]; monster16[2]=monster16[18]; monster16[3]=monster16[4]; monster16[4]=monster16[19]; break;
		case "monster17": monster17[1]=monster17[17]; monster17[2]=monster17[18]; monster17[3]=monster17[4]; monster17[4]=monster17[19]; break;
		case "monster18": monster18[1]=monster18[17]; monster18[2]=monster18[18]; monster18[3]=monster18[4]; monster18[4]=monster18[19]; break;
		case "monster19": monster19[1]=monster19[17]; monster19[2]=monster19[18]; monster19[3]=monster19[4]; monster19[4]=monster19[19]; break;
		case "monster20": monster20[1]=monster20[17]; monster20[2]=monster20[18]; monster20[3]=monster20[4]; monster20[4]=monster20[19]; break;
		case "monster21": monster21[1]=monster21[17]; monster21[2]=monster21[18]; monster21[3]=monster21[4]; monster21[4]=monster21[19]; break;
		case "monster22": monster22[1]=monster22[17]; monster22[2]=monster22[18]; monster22[3]=monster22[4]; monster22[4]=monster22[19]; break;
		case "monster23": monster23[1]=monster23[17]; monster23[2]=monster23[18]; monster23[3]=monster23[4]; monster23[4]=monster23[19]; break;
		case "monster24": monster24[1]=monster24[17]; monster24[2]=monster24[18]; monster24[3]=monster24[4]; monster24[4]=monster24[19]; break;
		case "monster25": monster25[1]=monster25[17]; monster25[2]=monster25[18]; monster25[3]=monster25[4]; monster25[4]=monster25[19]; break;
		case "monster26": monster26[1]=monster26[17]; monster26[2]=monster26[18]; monster26[3]=monster26[4]; monster26[4]=monster26[19]; break;
		case "monster27": monster27[1]=monster27[17]; monster27[2]=monster27[18]; monster27[3]=monster27[4]; monster27[4]=monster27[19]; break;
		case "monster28": monster28[1]=monster28[17]; monster28[2]=monster28[18]; monster28[3]=monster28[4]; monster28[4]=monster28[19]; break;
		case "monster29": monster29[1]=monster29[17]; monster29[2]=monster29[18]; monster29[3]=monster29[4]; monster29[4]=monster29[19]; break;
		case "monster30": monster30[1]=monster30[17]; monster30[2]=monster30[18]; monster30[3]=monster30[4]; monster30[4]=monster30[19]; break;
		case "monster31": monster31[1]=monster31[17]; monster31[2]=monster31[18]; monster31[3]=monster31[4]; monster31[4]=monster31[19]; break;
		case "monster32": monster32[1]=monster32[17]; monster32[2]=monster32[18]; monster32[3]=monster32[4]; monster32[4]=monster32[19]; break;
		case "monster33": monster33[1]=monster33[17]; monster33[2]=monster33[18]; monster33[3]=monster33[4]; monster33[4]=monster33[19]; break;
		case "monster34": monster34[1]=monster34[17]; monster34[2]=monster34[18]; monster34[3]=monster34[4]; monster34[4]=monster34[19]; break;
		case "monster35": monster35[1]=monster35[17]; monster35[2]=monster35[18]; monster35[3]=monster35[4]; monster35[4]=monster35[19]; break;
		case "monster36": monster36[1]=monster36[17]; monster36[2]=monster36[18]; monster36[3]=monster36[4]; monster36[4]=monster36[19]; break;
		case "monster37": monster37[1]=monster37[17]; monster37[2]=monster37[18]; monster37[3]=monster37[4]; monster37[4]=monster37[19]; break;
		case "monster38": monster38[1]=monster38[17]; monster38[2]=monster38[18]; monster38[3]=monster38[4]; monster38[4]=monster38[19]; break;
		case "monster39": monster39[1]=monster39[17]; monster39[2]=monster39[18]; monster39[3]=monster39[4]; monster39[4]=monster39[19]; break;
		case "monster40": monster40[1]=monster40[17]; monster40[2]=monster40[18]; monster40[3]=monster40[4]; monster40[4]=monster40[19]; break;
		case "monster41": monster41[1]=monster41[17]; monster41[2]=monster41[18]; monster41[3]=monster41[4]; monster41[4]=monster41[19]; break;
		case "monster42": monster42[1]=monster42[17]; monster42[2]=monster42[18]; monster42[3]=monster42[4]; monster42[4]=monster42[19]; break;
		case "monster43": monster43[1]=monster43[17]; monster43[2]=monster43[18]; monster43[3]=monster43[4]; monster43[4]=monster43[19]; break;
		case "monster44": monster44[1]=monster44[17]; monster44[2]=monster44[18]; monster44[3]=monster44[4]; monster44[4]=monster44[19]; break;
		case "monster45": monster45[1]=monster45[17]; monster45[2]=monster45[18]; monster45[3]=monster45[4]; monster45[4]=monster45[19]; break;
		case "monster46": monster46[1]=monster46[17]; monster46[2]=monster46[18]; monster46[3]=monster46[4]; monster46[4]=monster46[19]; break;
		case "monster47": monster47[1]=monster47[17]; monster47[2]=monster47[18]; monster47[3]=monster47[4]; monster47[4]=monster47[19]; break;
		case "monster48": monster48[1]=monster48[17]; monster48[2]=monster48[18]; monster48[3]=monster48[4]; monster48[4]=monster48[19]; break;
		case "monster49": monster49[1]=monster49[17]; monster49[2]=monster49[18]; monster49[3]=monster49[4]; monster49[4]=monster49[19]; break;
		case "monster50": monster50[1]=monster50[17]; monster50[2]=monster50[18]; monster50[3]=monster50[4]; monster50[4]=monster50[19]; break;
		case "monster51": monster51[1]=monster51[17]; monster51[2]=monster51[18]; monster51[3]=monster51[4]; monster51[4]=monster51[19]; break;
		case "monster52": monster52[1]=monster52[17]; monster52[2]=monster52[18]; monster52[3]=monster52[4]; monster52[4]=monster52[19]; break;
		case "monster53": monster53[1]=monster53[17]; monster53[2]=monster53[18]; monster53[3]=monster53[4]; monster53[4]=monster53[19]; break;
		case "monster54": monster54[1]=monster54[17]; monster54[2]=monster54[18]; monster54[3]=monster54[4]; monster54[4]=monster54[19]; break;
		case "monster55": monster55[1]=monster55[17]; monster55[2]=monster55[18]; monster55[3]=monster55[4]; monster55[4]=monster55[19]; break;
		}
}

function check_hidden(monster) { //check to see if the monster has been discovered or not and if not then do not reveal them on the map.
	if (typeof monster1!='undefined')  {if((monster=="monster1")&&(monster1[3]!="dead"))   {if($('#'+monster1[3]).hasClass('dark'))  {$('#'+monster1[4]).css('background-position',monster1[14])}   else {$('#'+monster1[4]).css('background-position',monster1[14]);   $('#'+monster1[3]).css('background-position',monster1[13]);}}}
	if (typeof monster2!='undefined')  {if((monster=="monster2")&&(monster2[3]!="dead"))   {if($('#'+monster2[3]).hasClass('dark'))  {$('#'+monster2[4]).css('background-position',monster2[14])}   else {$('#'+monster2[4]).css('background-position',monster2[14]);   $('#'+monster2[3]).css('background-position',monster2[13]);}}}
	if (typeof monster3!='undefined')  {if((monster=="monster3")&&(monster3[3]!="dead"))   {if($('#'+monster3[3]).hasClass('dark'))  {$('#'+monster3[4]).css('background-position',monster3[14])}   else {$('#'+monster3[4]).css('background-position',monster3[14]);   $('#'+monster3[3]).css('background-position',monster3[13]);}}}
	if (typeof monster4!='undefined')  {if((monster=="monster4")&&(monster4[3]!="dead"))   {if($('#'+monster4[3]).hasClass('dark'))  {$('#'+monster4[4]).css('background-position',monster4[14])}   else {$('#'+monster4[4]).css('background-position',monster4[14]);   $('#'+monster4[3]).css('background-position',monster4[13]);}}}
	if (typeof monster5!='undefined')  {if((monster=="monster5")&&(monster5[3]!="dead"))   {if($('#'+monster5[3]).hasClass('dark'))  {$('#'+monster5[4]).css('background-position',monster5[14])}   else {$('#'+monster5[4]).css('background-position',monster5[14]);   $('#'+monster5[3]).css('background-position',monster5[13]);}}}
	if (typeof monster6!='undefined')  {if((monster=="monster6")&&(monster6[3]!="dead"))   {if($('#'+monster6[3]).hasClass('dark'))  {$('#'+monster6[4]).css('background-position',monster6[14])}   else {$('#'+monster6[4]).css('background-position',monster6[14]);   $('#'+monster6[3]).css('background-position',monster6[13]);}}}
	if (typeof monster7!='undefined')  {if((monster=="monster7")&&(monster7[3]!="dead"))   {if($('#'+monster7[3]).hasClass('dark'))  {$('#'+monster7[4]).css('background-position',monster7[14])}   else {$('#'+monster7[4]).css('background-position',monster7[14]);   $('#'+monster7[3]).css('background-position',monster7[13]);}}}
	if (typeof monster8!='undefined')  {if((monster=="monster8")&&(monster8[3]!="dead"))   {if($('#'+monster8[3]).hasClass('dark'))  {$('#'+monster8[4]).css('background-position',monster8[14])}   else {$('#'+monster8[4]).css('background-position',monster8[14]);   $('#'+monster8[3]).css('background-position',monster8[13]);}}}
	if (typeof monster9!='undefined')  {if((monster=="monster9")&&(monster9[3]!="dead"))   {if($('#'+monster9[3]).hasClass('dark'))  {$('#'+monster9[4]).css('background-position',monster9[14])}   else {$('#'+monster9[4]).css('background-position',monster9[14]);   $('#'+monster9[3]).css('background-position',monster9[13]);}}}
	if (typeof monster10!='undefined') {if((monster=="monster10")&&(monster10[3]!="dead")) {if($('#'+monster10[3]).hasClass('dark')) {$('#'+monster10[4]).css('background-position',monster10[14])} else {$('#'+monster10[4]).css('background-position',monster10[14]); $('#'+monster10[3]).css('background-position',monster10[13]);}}}
	if (typeof monster11!='undefined') {if((monster=="monster11")&&(monster11[3]!="dead")) {if($('#'+monster11[3]).hasClass('dark')) {$('#'+monster11[4]).css('background-position',monster11[14])} else {$('#'+monster11[4]).css('background-position',monster11[14]); $('#'+monster11[3]).css('background-position',monster11[13]);}}}
	if (typeof monster12!='undefined') {if((monster=="monster12")&&(monster12[3]!="dead")) {if($('#'+monster12[3]).hasClass('dark')) {$('#'+monster12[4]).css('background-position',monster12[14])} else {$('#'+monster12[4]).css('background-position',monster12[14]); $('#'+monster12[3]).css('background-position',monster12[13]);}}}
	if (typeof monster13!='undefined') {if((monster=="monster13")&&(monster13[3]!="dead")) {if($('#'+monster13[3]).hasClass('dark')) {$('#'+monster13[4]).css('background-position',monster13[14])} else {$('#'+monster13[4]).css('background-position',monster13[14]); $('#'+monster13[3]).css('background-position',monster13[13]);}}}
	if (typeof monster14!='undefined') {if((monster=="monster14")&&(monster14[3]!="dead")) {if($('#'+monster14[3]).hasClass('dark')) {$('#'+monster14[4]).css('background-position',monster14[14])} else {$('#'+monster14[4]).css('background-position',monster14[14]); $('#'+monster14[3]).css('background-position',monster14[13]);}}}
	if (typeof monster15!='undefined') {if((monster=="monster15")&&(monster15[3]!="dead")) {if($('#'+monster15[3]).hasClass('dark')) {$('#'+monster15[4]).css('background-position',monster15[14])} else {$('#'+monster15[4]).css('background-position',monster15[14]); $('#'+monster15[3]).css('background-position',monster15[13]);}}}
	if (typeof monster16!='undefined') {if((monster=="monster16")&&(monster16[3]!="dead")) {if($('#'+monster16[3]).hasClass('dark')) {$('#'+monster16[4]).css('background-position',monster16[14])} else {$('#'+monster16[4]).css('background-position',monster16[14]); $('#'+monster16[3]).css('background-position',monster16[13]);}}}
	if (typeof monster17!='undefined') {if((monster=="monster17")&&(monster17[3]!="dead")) {if($('#'+monster17[3]).hasClass('dark')) {$('#'+monster17[4]).css('background-position',monster17[14])} else {$('#'+monster17[4]).css('background-position',monster17[14]); $('#'+monster17[3]).css('background-position',monster17[13]);}}}
	if (typeof monster18!='undefined') {if((monster=="monster18")&&(monster18[3]!="dead")) {if($('#'+monster18[3]).hasClass('dark')) {$('#'+monster18[4]).css('background-position',monster18[14])} else {$('#'+monster18[4]).css('background-position',monster18[14]); $('#'+monster18[3]).css('background-position',monster18[13]);}}}
	if (typeof monster19!='undefined') {if((monster=="monster19")&&(monster19[3]!="dead")) {if($('#'+monster19[3]).hasClass('dark')) {$('#'+monster19[4]).css('background-position',monster19[14])} else {$('#'+monster19[4]).css('background-position',monster19[14]); $('#'+monster19[3]).css('background-position',monster19[13]);}}}
	if (typeof monster20!='undefined') {if((monster=="monster20")&&(monster20[3]!="dead")) {if($('#'+monster20[3]).hasClass('dark')) {$('#'+monster20[4]).css('background-position',monster20[14])} else {$('#'+monster20[4]).css('background-position',monster20[14]); $('#'+monster20[3]).css('background-position',monster20[13]);}}}
	if (typeof monster21!='undefined') {if((monster=="monster21")&&(monster21[3]!="dead")) {if($('#'+monster21[3]).hasClass('dark')) {$('#'+monster21[4]).css('background-position',monster21[14])} else {$('#'+monster21[4]).css('background-position',monster21[14]); $('#'+monster21[3]).css('background-position',monster21[13]);}}}
	if (typeof monster22!='undefined') {if((monster=="monster22")&&(monster22[3]!="dead")) {if($('#'+monster22[3]).hasClass('dark')) {$('#'+monster22[4]).css('background-position',monster22[14])} else {$('#'+monster22[4]).css('background-position',monster22[14]); $('#'+monster22[3]).css('background-position',monster22[13]);}}}
	if (typeof monster23!='undefined') {if((monster=="monster23")&&(monster23[3]!="dead")) {if($('#'+monster23[3]).hasClass('dark')) {$('#'+monster23[4]).css('background-position',monster23[14])} else {$('#'+monster23[4]).css('background-position',monster23[14]); $('#'+monster23[3]).css('background-position',monster23[13]);}}}
	if (typeof monster24!='undefined') {if((monster=="monster24")&&(monster24[3]!="dead")) {if($('#'+monster24[3]).hasClass('dark')) {$('#'+monster24[4]).css('background-position',monster24[14])} else {$('#'+monster24[4]).css('background-position',monster24[14]); $('#'+monster24[3]).css('background-position',monster24[13]);}}}
	if (typeof monster25!='undefined') {if((monster=="monster25")&&(monster25[3]!="dead")) {if($('#'+monster25[3]).hasClass('dark')) {$('#'+monster25[4]).css('background-position',monster25[14])} else {$('#'+monster25[4]).css('background-position',monster25[14]); $('#'+monster25[3]).css('background-position',monster25[13]);}}}
	if (typeof monster26!='undefined') {if((monster=="monster26")&&(monster26[3]!="dead")) {if($('#'+monster26[3]).hasClass('dark')) {$('#'+monster26[4]).css('background-position',monster26[14])} else {$('#'+monster26[4]).css('background-position',monster26[14]); $('#'+monster26[3]).css('background-position',monster26[13]);}}}
	if (typeof monster27!='undefined') {if((monster=="monster27")&&(monster27[3]!="dead")) {if($('#'+monster27[3]).hasClass('dark')) {$('#'+monster27[4]).css('background-position',monster27[14])} else {$('#'+monster27[4]).css('background-position',monster27[14]); $('#'+monster27[3]).css('background-position',monster27[13]);}}}
	if (typeof monster28!='undefined') {if((monster=="monster28")&&(monster28[3]!="dead")) {if($('#'+monster28[3]).hasClass('dark')) {$('#'+monster28[4]).css('background-position',monster28[14])} else {$('#'+monster28[4]).css('background-position',monster28[14]); $('#'+monster28[3]).css('background-position',monster28[13]);}}}
	if (typeof monster29!='undefined') {if((monster=="monster29")&&(monster29[3]!="dead")) {if($('#'+monster29[3]).hasClass('dark')) {$('#'+monster29[4]).css('background-position',monster29[14])} else {$('#'+monster29[4]).css('background-position',monster29[14]); $('#'+monster29[3]).css('background-position',monster29[13]);}}}
	if (typeof monster30!='undefined') {if((monster=="monster30")&&(monster30[3]!="dead")) {if($('#'+monster30[3]).hasClass('dark')) {$('#'+monster30[4]).css('background-position',monster30[14])} else {$('#'+monster30[4]).css('background-position',monster30[14]); $('#'+monster30[3]).css('background-position',monster30[13]);}}}
	if (typeof monster31!='undefined') {if((monster=="monster31")&&(monster31[3]!="dead")) {if($('#'+monster31[3]).hasClass('dark')) {$('#'+monster31[4]).css('background-position',monster31[14])} else {$('#'+monster31[4]).css('background-position',monster31[14]); $('#'+monster31[3]).css('background-position',monster31[13]);}}}
	if (typeof monster32!='undefined') {if((monster=="monster32")&&(monster32[3]!="dead")) {if($('#'+monster32[3]).hasClass('dark')) {$('#'+monster32[4]).css('background-position',monster32[14])} else {$('#'+monster32[4]).css('background-position',monster32[14]); $('#'+monster32[3]).css('background-position',monster32[13]);}}}
	if (typeof monster33!='undefined') {if((monster=="monster33")&&(monster33[3]!="dead")) {if($('#'+monster33[3]).hasClass('dark')) {$('#'+monster33[4]).css('background-position',monster33[14])} else {$('#'+monster33[4]).css('background-position',monster33[14]); $('#'+monster33[3]).css('background-position',monster33[13]);}}}
	if (typeof monster34!='undefined') {if((monster=="monster34")&&(monster34[3]!="dead")) {if($('#'+monster34[3]).hasClass('dark')) {$('#'+monster34[4]).css('background-position',monster34[14])} else {$('#'+monster34[4]).css('background-position',monster34[14]); $('#'+monster34[3]).css('background-position',monster34[13]);}}}
	if (typeof monster35!='undefined') {if((monster=="monster35")&&(monster35[3]!="dead")) {if($('#'+monster35[3]).hasClass('dark')) {$('#'+monster35[4]).css('background-position',monster35[14])} else {$('#'+monster35[4]).css('background-position',monster35[14]); $('#'+monster35[3]).css('background-position',monster35[13]);}}}
	if (typeof monster36!='undefined') {if((monster=="monster36")&&(monster36[3]!="dead")) {if($('#'+monster36[3]).hasClass('dark')) {$('#'+monster36[4]).css('background-position',monster36[14])} else {$('#'+monster36[4]).css('background-position',monster36[14]); $('#'+monster36[3]).css('background-position',monster36[13]);}}}
	if (typeof monster37!='undefined') {if((monster=="monster37")&&(monster37[3]!="dead")) {if($('#'+monster37[3]).hasClass('dark')) {$('#'+monster37[4]).css('background-position',monster37[14])} else {$('#'+monster37[4]).css('background-position',monster37[14]); $('#'+monster37[3]).css('background-position',monster37[13]);}}}
	if (typeof monster38!='undefined') {if((monster=="monster38")&&(monster38[3]!="dead")) {if($('#'+monster38[3]).hasClass('dark')) {$('#'+monster38[4]).css('background-position',monster38[14])} else {$('#'+monster38[4]).css('background-position',monster38[14]); $('#'+monster38[3]).css('background-position',monster38[13]);}}}
	if (typeof monster39!='undefined') {if((monster=="monster39")&&(monster39[3]!="dead")) {if($('#'+monster39[3]).hasClass('dark')) {$('#'+monster39[4]).css('background-position',monster39[14])} else {$('#'+monster39[4]).css('background-position',monster39[14]); $('#'+monster39[3]).css('background-position',monster39[13]);}}}
	if (typeof monster40!='undefined') {if((monster=="monster40")&&(monster40[3]!="dead")) {if($('#'+monster40[3]).hasClass('dark')) {$('#'+monster40[4]).css('background-position',monster40[14])} else {$('#'+monster40[4]).css('background-position',monster40[14]); $('#'+monster40[3]).css('background-position',monster40[13]);}}}
	if (typeof monster41!='undefined') {if((monster=="monster41")&&(monster41[3]!="dead")) {if($('#'+monster41[3]).hasClass('dark')) {$('#'+monster41[4]).css('background-position',monster41[14])} else {$('#'+monster41[4]).css('background-position',monster41[14]); $('#'+monster41[3]).css('background-position',monster41[13]);}}}
	if (typeof monster42!='undefined') {if((monster=="monster42")&&(monster42[3]!="dead")) {if($('#'+monster42[3]).hasClass('dark')) {$('#'+monster42[4]).css('background-position',monster42[14])} else {$('#'+monster42[4]).css('background-position',monster42[14]); $('#'+monster42[3]).css('background-position',monster42[13]);}}}
	if (typeof monster43!='undefined') {if((monster=="monster43")&&(monster43[3]!="dead")) {if($('#'+monster43[3]).hasClass('dark')) {$('#'+monster43[4]).css('background-position',monster43[14])} else {$('#'+monster43[4]).css('background-position',monster43[14]); $('#'+monster43[3]).css('background-position',monster43[13]);}}}
	if (typeof monster44!='undefined') {if((monster=="monster44")&&(monster44[3]!="dead")) {if($('#'+monster44[3]).hasClass('dark')) {$('#'+monster44[4]).css('background-position',monster44[14])} else {$('#'+monster44[4]).css('background-position',monster44[14]); $('#'+monster44[3]).css('background-position',monster44[13]);}}}
	if (typeof monster45!='undefined') {if((monster=="monster45")&&(monster45[3]!="dead")) {if($('#'+monster45[3]).hasClass('dark')) {$('#'+monster45[4]).css('background-position',monster45[14])} else {$('#'+monster45[4]).css('background-position',monster45[14]); $('#'+monster45[3]).css('background-position',monster45[13]);}}}
	if (typeof monster46!='undefined') {if((monster=="monster46")&&(monster46[3]!="dead")) {if($('#'+monster46[3]).hasClass('dark')) {$('#'+monster46[4]).css('background-position',monster46[14])} else {$('#'+monster46[4]).css('background-position',monster46[14]); $('#'+monster46[3]).css('background-position',monster46[13]);}}}
	if (typeof monster47!='undefined') {if((monster=="monster47")&&(monster47[3]!="dead")) {if($('#'+monster47[3]).hasClass('dark')) {$('#'+monster47[4]).css('background-position',monster47[14])} else {$('#'+monster47[4]).css('background-position',monster47[14]); $('#'+monster47[3]).css('background-position',monster47[13]);}}}
	if (typeof monster48!='undefined') {if((monster=="monster48")&&(monster48[3]!="dead")) {if($('#'+monster48[3]).hasClass('dark')) {$('#'+monster48[4]).css('background-position',monster48[14])} else {$('#'+monster48[4]).css('background-position',monster48[14]); $('#'+monster48[3]).css('background-position',monster48[13]);}}}
	if (typeof monster49!='undefined') {if((monster=="monster49")&&(monster49[3]!="dead")) {if($('#'+monster49[3]).hasClass('dark')) {$('#'+monster49[4]).css('background-position',monster49[14])} else {$('#'+monster49[4]).css('background-position',monster49[14]); $('#'+monster49[3]).css('background-position',monster49[13]);}}}
	if (typeof monster50!='undefined') {if((monster=="monster50")&&(monster50[3]!="dead")) {if($('#'+monster50[3]).hasClass('dark')) {$('#'+monster50[4]).css('background-position',monster50[14])} else {$('#'+monster50[4]).css('background-position',monster50[14]); $('#'+monster50[3]).css('background-position',monster50[13]);}}}
	if (typeof monster51!='undefined') {if((monster=="monster51")&&(monster51[3]!="dead")) {if($('#'+monster51[3]).hasClass('dark')) {$('#'+monster51[4]).css('background-position',monster51[14])} else {$('#'+monster51[4]).css('background-position',monster51[14]); $('#'+monster51[3]).css('background-position',monster51[13]);}}}
	if (typeof monster52!='undefined') {if((monster=="monster52")&&(monster52[3]!="dead")) {if($('#'+monster52[3]).hasClass('dark')) {$('#'+monster52[4]).css('background-position',monster52[14])} else {$('#'+monster52[4]).css('background-position',monster52[14]); $('#'+monster52[3]).css('background-position',monster52[13]);}}}
	if (typeof monster53!='undefined') {if((monster=="monster53")&&(monster53[3]!="dead")) {if($('#'+monster53[3]).hasClass('dark')) {$('#'+monster53[4]).css('background-position',monster53[14])} else {$('#'+monster53[4]).css('background-position',monster53[14]); $('#'+monster53[3]).css('background-position',monster53[13]);}}}
	if (typeof monster54!='undefined') {if((monster=="monster54")&&(monster54[3]!="dead")) {if($('#'+monster54[3]).hasClass('dark')) {$('#'+monster54[4]).css('background-position',monster54[14])} else {$('#'+monster54[4]).css('background-position',monster54[14]); $('#'+monster54[3]).css('background-position',monster54[13]);}}}
	if (typeof monster55!='undefined') {if((monster=="monster55")&&(monster55[3]!="dead")) {if($('#'+monster55[3]).hasClass('dark')) {$('#'+monster55[4]).css('background-position',monster55[14])} else {$('#'+monster55[4]).css('background-position',monster55[14]); $('#'+monster55[3]).css('background-position',monster55[13]);}}}
	}

function update_monster(monster) {
	switch (monster) {
		case "monster1":  if(monster1[3]!="dead")  {monster1[3]=monster1[1]+"_"+monster1[2];    monster1[14]=check_current_terrain(monster1[4]);   check_hidden("monster1");  monster1[17]=monster1[1];   monster1[18]=monster1[2];   monster1[4]=monster1[3];   monster1[16]="no";  update_locked(); $("#"+monster1[3]).attr("title", monster1[0]+"   " +monster1[9] +"hp");}    break;
		case "monster2":  if(monster2[3]!="dead")  {monster2[3]=monster2[1]+"_"+monster2[2];    monster2[14]=check_current_terrain(monster2[4]);   check_hidden("monster2");  monster2[17]=monster2[1];   monster2[18]=monster2[2];   monster2[4]=monster2[3];   monster2[16]="no";  update_locked(); $("#"+monster2[3]).attr("title", monster2[0]+"   " +monster2[9] +"hp");}    break;
		case "monster3":  if(monster3[3]!="dead")  {monster3[3]=monster3[1]+"_"+monster3[2];    monster3[14]=check_current_terrain(monster3[4]);   check_hidden("monster3");  monster3[17]=monster3[1];   monster3[18]=monster3[2];   monster3[4]=monster3[3];   monster3[16]="no";  update_locked(); $("#"+monster3[3]).attr("title", monster3[0]+"   " +monster3[9] +"hp");}    break;
		case "monster4":  if(monster4[3]!="dead")  {monster4[3]=monster4[1]+"_"+monster4[2];    monster4[14]=check_current_terrain(monster4[4]);   check_hidden("monster4");  monster4[17]=monster4[1];   monster4[18]=monster4[2];   monster4[4]=monster4[3];   monster4[16]="no";  update_locked(); $("#"+monster4[3]).attr("title", monster4[0]+"   " +monster4[9] +"hp");}    break;
		case "monster5":  if(monster5[3]!="dead")  {monster5[3]=monster5[1]+"_"+monster5[2];    monster5[14]=check_current_terrain(monster5[4]);   check_hidden("monster5");  monster5[17]=monster5[1];   monster5[18]=monster5[2];   monster5[4]=monster5[3];   monster5[16]="no";  update_locked(); $("#"+monster5[3]).attr("title", monster5[0]+"   " +monster5[9] +"hp");}    break;
		case "monster6":  if(monster6[3]!="dead")  {monster6[3]=monster6[1]+"_"+monster6[2];    monster6[14]=check_current_terrain(monster6[4]);   check_hidden("monster6");  monster6[17]=monster6[1];   monster6[18]=monster6[2];   monster6[4]=monster6[3];   monster6[16]="no";  update_locked(); $("#"+monster6[3]).attr("title", monster6[0]+"   " +monster6[9] +"hp");}    break;
		case "monster7":  if(monster7[3]!="dead")  {monster7[3]=monster7[1]+"_"+monster7[2];    monster7[14]=check_current_terrain(monster7[4]);   check_hidden("monster7");  monster7[17]=monster7[1];   monster7[18]=monster7[2];   monster7[4]=monster7[3];   monster7[16]="no";  update_locked(); $("#"+monster7[3]).attr("title", monster7[0]+"   " +monster7[9] +"hp");}    break;
		case "monster8":  if(monster8[3]!="dead")  {monster8[3]=monster8[1]+"_"+monster8[2];    monster8[14]=check_current_terrain(monster8[4]);   check_hidden("monster8");  monster8[17]=monster8[1];   monster8[18]=monster8[2];   monster8[4]=monster8[3];   monster8[16]="no";  update_locked(); $("#"+monster8[3]).attr("title", monster8[0]+"   " +monster8[9] +"hp");}    break;
		case "monster9":  if(monster9[3]!="dead")  {monster9[3]=monster9[1]+"_"+monster9[2];    monster9[14]=check_current_terrain(monster9[4]);   check_hidden("monster9");  monster9[17]=monster9[1];   monster9[18]=monster9[2];   monster9[4]=monster9[3];   monster9[16]="no";  update_locked(); $("#"+monster9[3]).attr("title", monster9[0]+"   " +monster9[9] +"hp");}    break;
		case "monster10": if(monster10[3]!="dead") {monster10[3]=monster10[1]+"_"+monster10[2]; monster10[14]=check_current_terrain(monster10[4]); check_hidden("monster10"); monster10[17]=monster10[1]; monster10[18]=monster10[2]; monster10[4]=monster10[3]; monster10[16]="no"; update_locked(); $("#"+monster10[3]).attr("title",monster10[0]+"   "+monster10[9]+"hp");}    break;
		case "monster11": if(monster11[3]!="dead") {monster11[3]=monster11[1]+"_"+monster11[2]; monster11[14]=check_current_terrain(monster11[4]); check_hidden("monster11"); monster11[17]=monster11[1]; monster11[18]=monster11[2]; monster11[4]=monster11[3]; monster11[16]="no"; update_locked(); $("#"+monster11[3]).attr("title", monster11[0]+"   " +monster11[9] +"hp");} break;
		case "monster12": if(monster12[3]!="dead") {monster12[3]=monster12[1]+"_"+monster12[2]; monster12[14]=check_current_terrain(monster12[4]); check_hidden("monster12"); monster12[17]=monster12[1]; monster12[18]=monster12[2]; monster12[4]=monster12[3]; monster12[16]="no"; update_locked(); $("#"+monster12[3]).attr("title", monster12[0]+"   " +monster12[9] +"hp");} break;
		case "monster13": if(monster13[3]!="dead") {monster13[3]=monster13[1]+"_"+monster13[2]; monster13[14]=check_current_terrain(monster13[4]); check_hidden("monster13"); monster13[17]=monster13[1]; monster13[18]=monster13[2]; monster13[4]=monster13[3]; monster13[16]="no"; update_locked(); $("#"+monster13[3]).attr("title", monster13[0]+"   " +monster13[9] +"hp");} break;
		case "monster14": if(monster14[3]!="dead") {monster14[3]=monster14[1]+"_"+monster14[2]; monster14[14]=check_current_terrain(monster14[4]); check_hidden("monster14"); monster14[17]=monster14[1]; monster14[18]=monster14[2]; monster14[4]=monster14[3]; monster14[16]="no"; update_locked(); $("#"+monster14[3]).attr("title", monster14[0]+"   " +monster14[9] +"hp");} break;
		case "monster15": if(monster15[3]!="dead") {monster15[3]=monster15[1]+"_"+monster15[2]; monster15[14]=check_current_terrain(monster15[4]); check_hidden("monster15"); monster15[17]=monster15[1]; monster15[18]=monster15[2]; monster15[4]=monster15[3]; monster15[16]="no"; update_locked(); $("#"+monster15[3]).attr("title", monster15[0]+"   " +monster15[9] +"hp");} break;
		case "monster16": if(monster16[3]!="dead") {monster16[3]=monster16[1]+"_"+monster16[2]; monster16[14]=check_current_terrain(monster16[4]); check_hidden("monster16"); monster16[17]=monster16[1]; monster16[18]=monster16[2]; monster16[4]=monster16[3]; monster16[16]="no"; update_locked(); $("#"+monster16[3]).attr("title", monster16[0]+"   " +monster16[9] +"hp");} break;
		case "monster17": if(monster17[3]!="dead") {monster17[3]=monster17[1]+"_"+monster17[2]; monster17[14]=check_current_terrain(monster17[4]); check_hidden("monster17"); monster17[17]=monster17[1]; monster17[18]=monster17[2]; monster17[4]=monster17[3]; monster17[16]="no"; update_locked(); $("#"+monster17[3]).attr("title", monster17[0]+"   " +monster17[9] +"hp");} break;
		case "monster18": if(monster18[3]!="dead") {monster18[3]=monster18[1]+"_"+monster18[2]; monster18[14]=check_current_terrain(monster18[4]); check_hidden("monster18"); monster18[17]=monster18[1]; monster18[18]=monster18[2]; monster18[4]=monster18[3]; monster18[16]="no"; update_locked(); $("#"+monster18[3]).attr("title", monster18[0]+"   " +monster18[9] +"hp");} break;
		case "monster19": if(monster19[3]!="dead") {monster19[3]=monster19[1]+"_"+monster19[2]; monster19[14]=check_current_terrain(monster19[4]); check_hidden("monster19"); monster19[17]=monster19[1]; monster19[18]=monster19[2]; monster19[4]=monster19[3]; monster19[16]="no"; update_locked(); $("#"+monster19[3]).attr("title", monster19[0]+"   " +monster19[9] +"hp");} break;
		case "monster20": if(monster20[3]!="dead") {monster20[3]=monster20[1]+"_"+monster20[2]; monster20[14]=check_current_terrain(monster20[4]); check_hidden("monster20"); monster20[17]=monster20[1]; monster20[18]=monster20[2]; monster20[4]=monster20[3]; monster20[16]="no"; update_locked(); $("#"+monster20[3]).attr("title", monster20[0]+"   " +monster20[9]+"hp");}  break;
		case "monster21": if(monster21[3]!="dead") {monster21[3]=monster21[1]+"_"+monster21[2]; monster21[14]=check_current_terrain(monster21[4]); check_hidden("monster21"); monster21[17]=monster21[1]; monster21[18]=monster21[2]; monster21[4]=monster21[3]; monster21[16]="no"; update_locked(); $("#"+monster21[3]).attr("title", monster21[0]+"   " +monster21[9] +"hp");} break;
		case "monster22": if(monster22[3]!="dead") {monster22[3]=monster22[1]+"_"+monster22[2]; monster22[14]=check_current_terrain(monster22[4]); check_hidden("monster22"); monster22[17]=monster22[1]; monster22[18]=monster22[2]; monster22[4]=monster22[3]; monster22[16]="no"; update_locked(); $("#"+monster22[3]).attr("title", monster22[0]+"   " +monster22[9] +"hp");} break;
		case "monster23": if(monster23[3]!="dead") {monster23[3]=monster23[1]+"_"+monster23[2]; monster23[14]=check_current_terrain(monster23[4]); check_hidden("monster23"); monster23[17]=monster23[1]; monster23[18]=monster23[2]; monster23[4]=monster23[3]; monster23[16]="no"; update_locked(); $("#"+monster23[3]).attr("title", monster23[0]+"   " +monster23[9] +"hp");} break;
		case "monster24": if(monster24[3]!="dead") {monster24[3]=monster24[1]+"_"+monster24[2]; monster24[14]=check_current_terrain(monster24[4]); check_hidden("monster24"); monster24[17]=monster24[1]; monster24[18]=monster24[2]; monster24[4]=monster24[3]; monster24[16]="no"; update_locked(); $("#"+monster24[3]).attr("title", monster24[0]+"   " +monster24[9] +"hp");} break;
		case "monster25": if(monster25[3]!="dead") {monster25[3]=monster25[1]+"_"+monster25[2]; monster25[14]=check_current_terrain(monster25[4]); check_hidden("monster25"); monster25[17]=monster25[1]; monster25[18]=monster25[2]; monster25[4]=monster25[3]; monster25[16]="no"; update_locked(); $("#"+monster25[3]).attr("title", monster25[0]+"   " +monster25[9] +"hp");} break;
		case "monster26": if(monster26[3]!="dead") {monster26[3]=monster26[1]+"_"+monster26[2]; monster26[14]=check_current_terrain(monster26[4]); check_hidden("monster26"); monster26[17]=monster26[1]; monster26[18]=monster26[2]; monster26[4]=monster26[3]; monster26[16]="no"; update_locked(); $("#"+monster26[3]).attr("title", monster26[0]+"   " +monster26[9] +"hp");} break;
		case "monster27": if(monster27[3]!="dead") {monster27[3]=monster27[1]+"_"+monster27[2]; monster27[14]=check_current_terrain(monster27[4]); check_hidden("monster27"); monster27[17]=monster27[1]; monster27[18]=monster27[2]; monster27[4]=monster27[3]; monster27[16]="no"; update_locked(); $("#"+monster27[3]).attr("title", monster27[0]+"   " +monster27[9] +"hp");} break;
		case "monster28": if(monster28[3]!="dead") {monster28[3]=monster28[1]+"_"+monster28[2]; monster28[14]=check_current_terrain(monster28[4]); check_hidden("monster28"); monster28[17]=monster28[1]; monster28[18]=monster28[2]; monster28[4]=monster28[3]; monster28[16]="no"; update_locked(); $("#"+monster28[3]).attr("title", monster28[0]+"   " +monster28[9] +"hp");} break;
		case "monster29": if(monster29[3]!="dead") {monster29[3]=monster29[1]+"_"+monster29[2]; monster29[14]=check_current_terrain(monster29[4]); check_hidden("monster29"); monster29[17]=monster29[1]; monster29[18]=monster29[2]; monster29[4]=monster29[3]; monster29[16]="no"; update_locked(); $("#"+monster29[3]).attr("title", monster29[0]+"   " +monster29[9] +"hp");} break;
		case "monster30": if(monster30[3]!="dead") {monster30[3]=monster30[1]+"_"+monster30[2]; monster30[14]=check_current_terrain(monster30[4]); check_hidden("monster30"); monster30[17]=monster30[1]; monster30[18]=monster30[2]; monster30[4]=monster30[3]; monster30[16]="no"; update_locked(); $("#"+monster30[3]).attr("title", monster30[0]+"   " +monster30[9]+"hp");}  break;
		case "monster31": if(monster31[3]!="dead") {monster31[3]=monster31[1]+"_"+monster31[2]; monster31[14]=check_current_terrain(monster31[4]); check_hidden("monster31"); monster31[17]=monster31[1]; monster31[18]=monster31[2]; monster31[4]=monster31[3]; monster31[16]="no"; update_locked(); $("#"+monster31[3]).attr("title", monster31[0]+"   " +monster31[9] +"hp");} break;
		case "monster32": if(monster32[3]!="dead") {monster32[3]=monster32[1]+"_"+monster32[2]; monster32[14]=check_current_terrain(monster32[4]); check_hidden("monster32"); monster32[17]=monster32[1]; monster32[18]=monster32[2]; monster32[4]=monster32[3]; monster32[16]="no"; update_locked(); $("#"+monster32[3]).attr("title", monster32[0]+"   " +monster32[9] +"hp");} break;
		case "monster33": if(monster33[3]!="dead") {monster33[3]=monster33[1]+"_"+monster33[2]; monster33[14]=check_current_terrain(monster33[4]); check_hidden("monster33"); monster33[17]=monster33[1]; monster33[18]=monster33[2]; monster33[4]=monster33[3]; monster33[16]="no"; update_locked(); $("#"+monster33[3]).attr("title", monster33[0]+"   " +monster33[9] +"hp");} break;
		case "monster34": if(monster34[3]!="dead") {monster34[3]=monster34[1]+"_"+monster34[2]; monster34[14]=check_current_terrain(monster34[4]); check_hidden("monster34"); monster34[17]=monster34[1]; monster34[18]=monster34[2]; monster34[4]=monster34[3]; monster34[16]="no"; update_locked(); $("#"+monster34[3]).attr("title", monster34[0]+"   " +monster34[9] +"hp");} break;
		case "monster35": if(monster35[3]!="dead") {monster35[3]=monster35[1]+"_"+monster35[2]; monster35[14]=check_current_terrain(monster35[4]); check_hidden("monster35"); monster35[17]=monster35[1]; monster35[18]=monster35[2]; monster35[4]=monster35[3]; monster35[16]="no"; update_locked(); $("#"+monster35[3]).attr("title", monster35[0]+"   " +monster35[9] +"hp");} break;
		case "monster36": if(monster36[3]!="dead") {monster36[3]=monster36[1]+"_"+monster36[2]; monster36[14]=check_current_terrain(monster36[4]); check_hidden("monster36"); monster36[17]=monster36[1]; monster36[18]=monster36[2]; monster36[4]=monster36[3]; monster36[16]="no"; update_locked(); $("#"+monster36[3]).attr("title", monster36[0]+"   " +monster36[9] +"hp");} break;
		case "monster37": if(monster37[3]!="dead") {monster37[3]=monster37[1]+"_"+monster37[2]; monster37[14]=check_current_terrain(monster37[4]); check_hidden("monster37"); monster37[17]=monster37[1]; monster37[18]=monster37[2]; monster37[4]=monster37[3]; monster37[16]="no"; update_locked(); $("#"+monster37[3]).attr("title", monster37[0]+"   " +monster37[9] +"hp");} break;
		case "monster38": if(monster38[3]!="dead") {monster38[3]=monster38[1]+"_"+monster38[2]; monster38[14]=check_current_terrain(monster38[4]); check_hidden("monster38"); monster38[17]=monster38[1]; monster38[18]=monster38[2]; monster38[4]=monster38[3]; monster38[16]="no"; update_locked(); $("#"+monster38[3]).attr("title", monster38[0]+"   " +monster38[9] +"hp");} break;
		case "monster39": if(monster39[3]!="dead") {monster39[3]=monster39[1]+"_"+monster39[2]; monster39[14]=check_current_terrain(monster39[4]); check_hidden("monster39"); monster39[17]=monster39[1]; monster39[18]=monster39[2]; monster39[4]=monster39[3]; monster39[16]="no"; update_locked(); $("#"+monster39[3]).attr("title", monster39[0]+"   " +monster39[9] +"hp");} break;
		case "monster40": if(monster40[3]!="dead") {monster40[3]=monster40[1]+"_"+monster40[2]; monster40[14]=check_current_terrain(monster40[4]); check_hidden("monster40"); monster40[17]=monster40[1]; monster40[18]=monster40[2]; monster40[4]=monster40[3]; monster40[16]="no"; update_locked(); $("#"+monster40[3]).attr("title", monster40[0]+"   " +monster40[9]+"hp");}  break;
		case "monster41": if(monster41[3]!="dead") {monster41[3]=monster41[1]+"_"+monster41[2]; monster41[14]=check_current_terrain(monster41[4]); check_hidden("monster41"); monster41[17]=monster41[1]; monster41[18]=monster41[2]; monster41[4]=monster41[3]; monster41[16]="no"; update_locked(); $("#"+monster41[3]).attr("title", monster41[0]+"   " +monster41[9] +"hp");} break;
		case "monster42": if(monster42[3]!="dead") {monster42[3]=monster42[1]+"_"+monster42[2]; monster42[14]=check_current_terrain(monster42[4]); check_hidden("monster42"); monster42[17]=monster42[1]; monster42[18]=monster42[2]; monster42[4]=monster42[3]; monster42[16]="no"; update_locked(); $("#"+monster42[3]).attr("title", monster42[0]+"   " +monster42[9] +"hp");} break;
		case "monster43": if(monster43[3]!="dead") {monster43[3]=monster43[1]+"_"+monster43[2]; monster43[14]=check_current_terrain(monster43[4]); check_hidden("monster43"); monster43[17]=monster43[1]; monster43[18]=monster43[2]; monster43[4]=monster43[3]; monster43[16]="no"; update_locked(); $("#"+monster43[3]).attr("title", monster43[0]+"   " +monster43[9] +"hp");} break;
		case "monster44": if(monster44[3]!="dead") {monster44[3]=monster44[1]+"_"+monster44[2]; monster44[14]=check_current_terrain(monster44[4]); check_hidden("monster44"); monster44[17]=monster44[1]; monster44[18]=monster44[2]; monster44[4]=monster44[3]; monster44[16]="no"; update_locked(); $("#"+monster44[3]).attr("title", monster44[0]+"   " +monster44[9] +"hp");} break;
		case "monster45": if(monster45[3]!="dead") {monster45[3]=monster45[1]+"_"+monster45[2]; monster45[14]=check_current_terrain(monster45[4]); check_hidden("monster45"); monster45[17]=monster45[1]; monster45[18]=monster45[2]; monster45[4]=monster45[3]; monster45[16]="no"; update_locked(); $("#"+monster45[3]).attr("title", monster45[0]+"   " +monster45[9] +"hp");} break;
		case "monster46": if(monster46[3]!="dead") {monster46[3]=monster46[1]+"_"+monster46[2]; monster46[14]=check_current_terrain(monster46[4]); check_hidden("monster46"); monster46[17]=monster46[1]; monster46[18]=monster46[2]; monster46[4]=monster46[3]; monster46[16]="no"; update_locked(); $("#"+monster46[3]).attr("title", monster46[0]+"   " +monster46[9] +"hp");} break;
		case "monster47": if(monster47[3]!="dead") {monster47[3]=monster47[1]+"_"+monster47[2]; monster47[14]=check_current_terrain(monster47[4]); check_hidden("monster47"); monster47[17]=monster47[1]; monster47[18]=monster47[2]; monster47[4]=monster47[3]; monster47[16]="no"; update_locked(); $("#"+monster47[3]).attr("title", monster47[0]+"   " +monster47[9] +"hp");} break;
		case "monster48": if(monster48[3]!="dead") {monster48[3]=monster48[1]+"_"+monster48[2]; monster48[14]=check_current_terrain(monster48[4]); check_hidden("monster48"); monster48[17]=monster48[1]; monster48[18]=monster48[2]; monster48[4]=monster48[3]; monster48[16]="no"; update_locked(); $("#"+monster48[3]).attr("title", monster48[0]+"   " +monster48[9] +"hp");} break;
		case "monster49": if(monster49[3]!="dead") {monster49[3]=monster49[1]+"_"+monster49[2]; monster49[14]=check_current_terrain(monster49[4]); check_hidden("monster49"); monster49[17]=monster49[1]; monster49[18]=monster49[2]; monster49[4]=monster49[3]; monster49[16]="no"; update_locked(); $("#"+monster49[3]).attr("title", monster49[0]+"   " +monster49[9] +"hp");} break;
		case "monster50": if(monster50[3]!="dead") {monster50[3]=monster50[1]+"_"+monster50[2]; monster50[14]=check_current_terrain(monster50[4]); check_hidden("monster50"); monster50[17]=monster50[1]; monster50[18]=monster50[2]; monster50[4]=monster50[3]; monster50[16]="no"; update_locked(); $("#"+monster50[3]).attr("title", monster50[0]+"   " +monster50[9]+"hp");}  break;
		case "monster51": if(monster51[3]!="dead") {monster51[3]=monster51[1]+"_"+monster51[2]; monster51[14]=check_current_terrain(monster51[4]); check_hidden("monster51"); monster51[17]=monster51[1]; monster51[18]=monster51[2]; monster51[4]=monster51[3]; monster51[16]="no"; update_locked(); $("#"+monster51[3]).attr("title", monster51[0]+"   " +monster51[9]+"hp");}  break;
		case "monster52": if(monster52[3]!="dead") {monster52[3]=monster52[1]+"_"+monster52[2]; monster52[14]=check_current_terrain(monster52[4]); check_hidden("monster52"); monster52[17]=monster52[1]; monster52[18]=monster52[2]; monster52[4]=monster52[3]; monster52[16]="no"; update_locked(); $("#"+monster52[3]).attr("title", monster52[0]+"   " +monster52[9]+"hp");}  break;
		case "monster53": if(monster53[3]!="dead") {monster53[3]=monster53[1]+"_"+monster53[2]; monster53[14]=check_current_terrain(monster53[4]); check_hidden("monster53"); monster53[17]=monster53[1]; monster53[18]=monster53[2]; monster53[4]=monster53[3]; monster53[16]="no"; update_locked(); $("#"+monster53[3]).attr("title", monster53[0]+"   " +monster53[9]+"hp");}  break;
		case "monster54": if(monster54[3]!="dead") {monster54[3]=monster54[1]+"_"+monster54[2]; monster54[14]=check_current_terrain(monster54[4]); check_hidden("monster54"); monster54[17]=monster54[1]; monster54[18]=monster54[2]; monster54[4]=monster54[3]; monster54[16]="no"; update_locked(); $("#"+monster54[3]).attr("title", monster54[0]+"   " +monster54[9]+"hp");}  break;
		case "monster55": if(monster55[3]!="dead") {monster55[3]=monster55[1]+"_"+monster55[2]; monster55[14]=check_current_terrain(monster55[4]); check_hidden("monster55"); monster55[17]=monster55[1]; monster55[18]=monster55[2]; monster55[4]=monster55[3]; monster55[16]="no"; update_locked(); $("#"+monster55[3]).attr("title", monster55[0]+"   " +monster55[9]+"hp");}  break;
		}
	}

function update_locked() {
	if (typeof monster1!='undefined')  {locked[1]=monster1[3]}
	if (typeof monster2!='undefined')  {locked[2]=monster2[3]}
	if (typeof monster3!='undefined')  {locked[3]=monster3[3]}
	if (typeof monster4!='undefined')  {locked[4]=monster4[3]}
	if (typeof monster5!='undefined')  {locked[5]=monster5[3]}
	if (typeof monster6!='undefined')  {locked[6]=monster6[3]}
	if (typeof monster7!='undefined')  {locked[7]=monster7[3]}
	if (typeof monster8!='undefined')  {locked[8]=monster8[3]}
	if (typeof monster9!='undefined')  {locked[9]=monster9[3]}
	if (typeof monster10!='undefined') {locked[10]=monster10[3]}
	if (typeof monster11!='undefined') {locked[11]=monster11[3]}
	if (typeof monster12!='undefined') {locked[12]=monster12[3]}
	if (typeof monster13!='undefined') {locked[13]=monster13[3]}
	if (typeof monster14!='undefined') {locked[14]=monster14[3]}
	if (typeof monster15!='undefined') {locked[15]=monster15[3]}
	if (typeof monster16!='undefined') {locked[16]=monster16[3]}
	if (typeof monster17!='undefined') {locked[17]=monster17[3]}
	if (typeof monster18!='undefined') {locked[18]=monster18[3]}
	if (typeof monster19!='undefined') {locked[19]=monster19[3]}
	if (typeof monster20!='undefined') {locked[20]=monster20[3]}
	if (typeof monster21!='undefined') {locked[21]=monster21[3]}
	if (typeof monster22!='undefined') {locked[22]=monster22[3]}
	if (typeof monster23!='undefined') {locked[23]=monster23[3]}
	if (typeof monster24!='undefined') {locked[24]=monster24[3]}
	if (typeof monster25!='undefined') {locked[25]=monster25[3]}
	if (typeof monster26!='undefined') {locked[26]=monster26[3]}
	if (typeof monster27!='undefined') {locked[27]=monster27[3]}
	if (typeof monster28!='undefined') {locked[28]=monster28[3]}
	if (typeof monster29!='undefined') {locked[29]=monster29[3]}
	if (typeof monster30!='undefined') {locked[30]=monster30[3]}
	if (typeof monster31!='undefined') {locked[31]=monster31[3]}
	if (typeof monster32!='undefined') {locked[32]=monster32[3]}
	if (typeof monster33!='undefined') {locked[33]=monster33[3]}
	if (typeof monster34!='undefined') {locked[34]=monster34[3]}
	if (typeof monster35!='undefined') {locked[35]=monster35[3]}
	if (typeof monster36!='undefined') {locked[36]=monster36[3]}
	if (typeof monster37!='undefined') {locked[37]=monster37[3]}
	if (typeof monster38!='undefined') {locked[38]=monster38[3]}
	if (typeof monster39!='undefined') {locked[39]=monster39[3]}
	if (typeof monster40!='undefined') {locked[40]=monster40[3]}
	if (typeof monster41!='undefined') {locked[41]=monster41[3]}
	if (typeof monster42!='undefined') {locked[42]=monster42[3]}
	if (typeof monster43!='undefined') {locked[43]=monster43[3]}
	if (typeof monster44!='undefined') {locked[44]=monster44[3]}
	if (typeof monster45!='undefined') {locked[45]=monster45[3]}
	if (typeof monster46!='undefined') {locked[46]=monster46[3]}
	if (typeof monster47!='undefined') {locked[47]=monster47[3]}
	if (typeof monster48!='undefined') {locked[48]=monster48[3]}
	if (typeof monster49!='undefined') {locked[49]=monster49[3]}
	if (typeof monster50!='undefined') {locked[50]=monster50[3]}
	if (typeof monster51!='undefined') {locked[51]=monster51[3]}
	if (typeof monster52!='undefined') {locked[52]=monster52[3]}
	if (typeof monster53!='undefined') {locked[53]=monster53[3]}
	if (typeof monster54!='undefined') {locked[54]=monster54[3]}
	if (typeof monster55!='undefined') {locked[55]=monster55[3]}
	}

function check_monster_arrays(loc) {
	 if (loc==monster1[3]) {return 'monster1'}
	 if (loc==monster2[3]) {return 'monster2'}
	 if (loc==monster3[3]) {return 'monster3'}
	 if (loc==monster4[3]) {return 'monster4'}
	 if (loc==monster5[3]) {return 'monster5'}
	 if ((typeof monster6!='undefined')&&(loc==monster6[3])) {return 'monster6'}
	 if ((typeof monster7!='undefined')&&(loc==monster7[3])) {return 'monster7'}
	 if ((typeof monster8!='undefined')&&(loc==monster8[3])) {return 'monster8'}
	 if ((typeof monster9!='undefined')&&(loc==monster9[3])) {return 'monster9'}
	 if ((typeof monster10!='undefined')&&(loc==monster10[3])) {return 'monster10'}
	 if ((typeof monster11!='undefined')&&(loc==monster11[3])) {return 'monster11'}
	 if ((typeof monster12!='undefined')&&(loc==monster12[3])) {return 'monster12'}
	 if ((typeof monster13!='undefined')&&(loc==monster13[3])) {return 'monster13'}
	 if ((typeof monster14!='undefined')&&(loc==monster14[3])) {return 'monster14'}
	 if ((typeof monster15!='undefined')&&(loc==monster15[3])) {return 'monster15'}
	 if ((typeof monster16!='undefined')&&(loc==monster16[3])) {return 'monster16'}
	 if ((typeof monster17!='undefined')&&(loc==monster17[3])) {return 'monster17'}
	 if ((typeof monster18!='undefined')&&(loc==monster18[3])) {return 'monster18'}
	 if ((typeof monster19!='undefined')&&(loc==monster19[3])) {return 'monster19'}
	 if ((typeof monster20!='undefined')&&(loc==monster20[3])) {return 'monster20'}
	 if ((typeof monster21!='undefined')&&(loc==monster21[3])) {return 'monster21'}
	 if ((typeof monster22!='undefined')&&(loc==monster22[3])) {return 'monster22'}
	 if ((typeof monster23!='undefined')&&(loc==monster23[3])) {return 'monster23'}
	 if ((typeof monster24!='undefined')&&(loc==monster24[3])) {return 'monster24'}
	 if ((typeof monster25!='undefined')&&(loc==monster25[3])) {return 'monster25'}
	 if ((typeof monster26!='undefined')&&(loc==monster26[3])) {return 'monster26'}
	 if ((typeof monster27!='undefined')&&(loc==monster27[3])) {return 'monster27'}
	 if ((typeof monster28!='undefined')&&(loc==monster28[3])) {return 'monster28'}
	 if ((typeof monster29!='undefined')&&(loc==monster29[3])) {return 'monster29'}
	 if ((typeof monster30!='undefined')&&(loc==monster30[3])) {return 'monster30'}
	 if ((typeof monster31!='undefined')&&(loc==monster31[3])) {return 'monster31'}
	 if ((typeof monster32!='undefined')&&(loc==monster32[3])) {return 'monster32'}
	 if ((typeof monster33!='undefined')&&(loc==monster33[3])) {return 'monster33'}
	 if ((typeof monster34!='undefined')&&(loc==monster34[3])) {return 'monster34'}
	 if ((typeof monster35!='undefined')&&(loc==monster35[3])) {return 'monster35'}
	 if ((typeof monster36!='undefined')&&(loc==monster36[3])) {return 'monster36'}
	 if ((typeof monster37!='undefined')&&(loc==monster37[3])) {return 'monster37'}
	 if ((typeof monster38!='undefined')&&(loc==monster38[3])) {return 'monster38'}
	 if ((typeof monster39!='undefined')&&(loc==monster39[3])) {return 'monster39'}
	 if ((typeof monster40!='undefined')&&(loc==monster40[3])) {return 'monster40'}
	 if ((typeof monster41!='undefined')&&(loc==monster41[3])) {return 'monster41'}
	 if ((typeof monster42!='undefined')&&(loc==monster42[3])) {return 'monster42'}
	 if ((typeof monster43!='undefined')&&(loc==monster43[3])) {return 'monster43'}
	 if ((typeof monster44!='undefined')&&(loc==monster44[3])) {return 'monster44'}
	 if ((typeof monster45!='undefined')&&(loc==monster45[3])) {return 'monster45'}
	 if ((typeof monster46!='undefined')&&(loc==monster46[3])) {return 'monster46'}
	 if ((typeof monster47!='undefined')&&(loc==monster47[3])) {return 'monster47'}
	 if ((typeof monster48!='undefined')&&(loc==monster48[3])) {return 'monster48'}
	 if ((typeof monster49!='undefined')&&(loc==monster49[3])) {return 'monster49'}
	 if ((typeof monster50!='undefined')&&(loc==monster50[3])) {return 'monster50'}
	 if ((typeof monster51!='undefined')&&(loc==monster51[3])) {return 'monster51'}
	 if ((typeof monster52!='undefined')&&(loc==monster52[3])) {return 'monster52'}
	 if ((typeof monster53!='undefined')&&(loc==monster53[3])) {return 'monster53'}
	 if ((typeof monster54!='undefined')&&(loc==monster54[3])) {return 'monster54'}
	 if ((typeof monster55!='undefined')&&(loc==monster55[3])) {return 'monster55'}
	}

function hurt_monster(monster,damage) {
	switch(monster) {
		case 'monster1': monster1[9]-=damage; right_content("mdamage",damage,monster1[0]); if(monster1[9]<=0) {right_content("mdeath",monster); $('#'+monster1[3]).css('backgroundPosition',monster1[14]); var treasure=new Array(monster1[3],monster1[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster1[3]), 1); monster1[3]="dead"; gain_exp(monster1[20]); monster_death_check(monster1[0]);} break;
		case 'monster2': monster2[9]-=damage; right_content("mdamage",damage,monster2[0]); if(monster2[9]<=0) {right_content("mdeath",monster); $('#'+monster2[3]).css('backgroundPosition',monster2[14]); var treasure=new Array(monster2[3],monster2[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster2[3]), 1); monster2[3]="dead"; gain_exp(monster2[20]); monster_death_check(monster2[0]);} break;
		case 'monster3': monster3[9]-=damage; right_content("mdamage",damage,monster3[0]); if(monster3[9]<=0) {right_content("mdeath",monster); $('#'+monster3[3]).css('backgroundPosition',monster3[14]); var treasure=new Array(monster3[3],monster3[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster3[3]), 1); monster3[3]="dead"; gain_exp(monster3[20]); monster_death_check(monster3[0]);} break;
		case 'monster4': monster4[9]-=damage; right_content("mdamage",damage,monster4[0]); if(monster4[9]<=0) {right_content("mdeath",monster); $('#'+monster4[3]).css('backgroundPosition',monster4[14]); var treasure=new Array(monster4[3],monster4[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster4[3]), 1); monster4[3]="dead"; gain_exp(monster4[20]); monster_death_check(monster4[0]);} break;
		case 'monster5': monster5[9]-=damage; right_content("mdamage",damage,monster5[0]); if(monster5[9]<=0) {right_content("mdeath",monster); $('#'+monster5[3]).css('backgroundPosition',monster5[14]); var treasure=new Array(monster5[3],monster5[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster5[3]), 1); monster5[3]="dead"; gain_exp(monster5[20]); monster_death_check(monster5[0]);} break;
		case 'monster6': monster6[9]-=damage; right_content("mdamage",damage,monster6[0]); if(monster6[9]<=0) {right_content("mdeath",monster); $('#'+monster6[3]).css('backgroundPosition',monster6[14]); var treasure=new Array(monster6[3],monster6[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster6[3]), 1); monster6[3]="dead"; gain_exp(monster6[20]); monster_death_check(monster6[0]);} break;
		case 'monster7': monster7[9]-=damage; right_content("mdamage",damage,monster7[0]); if(monster7[9]<=0) {right_content("mdeath",monster); $('#'+monster7[3]).css('backgroundPosition',monster7[14]); var treasure=new Array(monster7[3],monster7[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster7[3]), 1); monster7[3]="dead"; gain_exp(monster7[20]); monster_death_check(monster7[0]);} break;
		case 'monster8': monster8[9]-=damage; right_content("mdamage",damage,monster8[0]); if(monster8[9]<=0) {right_content("mdeath",monster); $('#'+monster8[3]).css('backgroundPosition',monster8[14]); var treasure=new Array(monster8[3],monster8[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster8[3]), 1); monster8[3]="dead"; gain_exp(monster8[20]); monster_death_check(monster8[0]);} break;
		case 'monster9': monster9[9]-=damage; right_content("mdamage",damage,monster9[0]); if(monster9[9]<=0) {right_content("mdeath",monster); $('#'+monster9[3]).css('backgroundPosition',monster9[14]); var treasure=new Array(monster9[3],monster9[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster9[3]), 1); monster9[3]="dead"; gain_exp(monster9[20]); monster_death_check(monster9[0]);} break;
		case 'monster10': monster10[9]-=damage; right_content("mdamage",damage,monster10[0]); if(monster10[9]<=0) {right_content("mdeath",monster); $('#'+monster10[3]).css('backgroundPosition',monster10[14]); var treasure=new Array(monster10[3],monster10[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster10[3]), 1); monster10[3]="dead"; gain_exp(monster10[20]); monster_death_check(monster10[0]);} break;
		case 'monster11': monster11[9]-=damage; right_content("mdamage",damage,monster11[0]); if(monster11[9]<=0) {right_content("mdeath",monster); $('#'+monster11[3]).css('backgroundPosition',monster11[14]); var treasure=new Array(monster11[3],monster11[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster11[3]), 1); monster11[3]="dead"; gain_exp(monster11[20]); monster_death_check(monster11[0]);} break;
		case 'monster12': monster12[9]-=damage; right_content("mdamage",damage,monster12[0]); if(monster12[9]<=0) {right_content("mdeath",monster); $('#'+monster12[3]).css('backgroundPosition',monster12[14]); var treasure=new Array(monster12[3],monster12[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster12[3]), 1); monster12[3]="dead"; gain_exp(monster12[20]); monster_death_check(monster12[0]);} break;
		case 'monster13': monster13[9]-=damage; right_content("mdamage",damage,monster13[0]); if(monster13[9]<=0) {right_content("mdeath",monster); $('#'+monster13[3]).css('backgroundPosition',monster13[14]); var treasure=new Array(monster13[3],monster13[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster13[3]), 1); monster13[3]="dead"; gain_exp(monster13[20]); monster_death_check(monster13[0]);} break;
		case 'monster14': monster14[9]-=damage; right_content("mdamage",damage,monster14[0]); if(monster14[9]<=0) {right_content("mdeath",monster); $('#'+monster14[3]).css('backgroundPosition',monster14[14]); var treasure=new Array(monster14[3],monster14[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster14[3]), 1); monster14[3]="dead"; gain_exp(monster14[20]); monster_death_check(monster14[0]);} break;
		case 'monster15': monster15[9]-=damage; right_content("mdamage",damage,monster15[0]); if(monster15[9]<=0) {right_content("mdeath",monster); $('#'+monster15[3]).css('backgroundPosition',monster15[14]); var treasure=new Array(monster15[3],monster15[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster15[3]), 1); monster15[3]="dead"; gain_exp(monster15[20]); monster_death_check(monster15[0]);} break;
		case 'monster16': monster16[9]-=damage; right_content("mdamage",damage,monster16[0]); if(monster16[9]<=0) {right_content("mdeath",monster); $('#'+monster16[3]).css('backgroundPosition',monster16[14]); var treasure=new Array(monster16[3],monster16[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster16[3]), 1); monster16[3]="dead"; gain_exp(monster16[20]); monster_death_check(monster16[0]);} break;
		case 'monster17': monster17[9]-=damage; right_content("mdamage",damage,monster17[0]); if(monster17[9]<=0) {right_content("mdeath",monster); $('#'+monster17[3]).css('backgroundPosition',monster17[14]); var treasure=new Array(monster17[3],monster17[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster17[3]), 1); monster17[3]="dead"; gain_exp(monster17[20]); monster_death_check(monster17[0]);} break;
		case 'monster18': monster18[9]-=damage; right_content("mdamage",damage,monster18[0]); if(monster18[9]<=0) {right_content("mdeath",monster); $('#'+monster18[3]).css('backgroundPosition',monster18[14]); var treasure=new Array(monster18[3],monster18[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster18[3]), 1); monster18[3]="dead"; gain_exp(monster18[20]); monster_death_check(monster18[0]);} break;
		case 'monster19': monster19[9]-=damage; right_content("mdamage",damage,monster19[0]); if(monster19[9]<=0) {right_content("mdeath",monster); $('#'+monster19[3]).css('backgroundPosition',monster19[14]); var treasure=new Array(monster19[3],monster19[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster19[3]), 1); monster19[3]="dead"; gain_exp(monster19[20]); monster_death_check(monster19[0]);} break;
		case 'monster20': monster20[9]-=damage; right_content("mdamage",damage,monster20[0]); if(monster20[9]<=0) {right_content("mdeath",monster); $('#'+monster20[3]).css('backgroundPosition',monster20[14]); var treasure=new Array(monster20[3],monster20[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster20[3]), 1); monster20[3]="dead"; gain_exp(monster20[20]); monster_death_check(monster20[0]);} break;
		case 'monster21': monster21[9]-=damage; right_content("mdamage",damage,monster21[0]); if(monster21[9]<=0) {right_content("mdeath",monster); $('#'+monster21[3]).css('backgroundPosition',monster21[14]); var treasure=new Array(monster21[3],monster21[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster21[3]), 1); monster21[3]="dead"; gain_exp(monster21[20]); monster_death_check(monster21[0]);} break;
		case 'monster22': monster22[9]-=damage; right_content("mdamage",damage,monster22[0]); if(monster22[9]<=0) {right_content("mdeath",monster); $('#'+monster22[3]).css('backgroundPosition',monster22[14]); var treasure=new Array(monster22[3],monster22[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster22[3]), 1); monster22[3]="dead"; gain_exp(monster22[20]); monster_death_check(monster22[0]);} break;
		case 'monster23': monster23[9]-=damage; right_content("mdamage",damage,monster23[0]); if(monster23[9]<=0) {right_content("mdeath",monster); $('#'+monster23[3]).css('backgroundPosition',monster23[14]); var treasure=new Array(monster23[3],monster23[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster23[3]), 1); monster23[3]="dead"; gain_exp(monster23[20]); monster_death_check(monster23[0]);} break;
		case 'monster24': monster24[9]-=damage; right_content("mdamage",damage,monster24[0]); if(monster24[9]<=0) {right_content("mdeath",monster); $('#'+monster24[3]).css('backgroundPosition',monster24[14]); var treasure=new Array(monster24[3],monster24[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster24[3]), 1); monster24[3]="dead"; gain_exp(monster24[20]); monster_death_check(monster24[0]);} break;
		case 'monster25': monster25[9]-=damage; right_content("mdamage",damage,monster25[0]); if(monster25[9]<=0) {right_content("mdeath",monster); $('#'+monster25[3]).css('backgroundPosition',monster25[14]); var treasure=new Array(monster25[3],monster25[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster25[3]), 1); monster25[3]="dead"; gain_exp(monster25[20]); monster_death_check(monster25[0]);} break;
		case 'monster26': monster26[9]-=damage; right_content("mdamage",damage,monster26[0]); if(monster26[9]<=0) {right_content("mdeath",monster); $('#'+monster26[3]).css('backgroundPosition',monster26[14]); var treasure=new Array(monster26[3],monster26[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster26[3]), 1); monster26[3]="dead"; gain_exp(monster26[20]); monster_death_check(monster26[0]);} break;
		case 'monster27': monster27[9]-=damage; right_content("mdamage",damage,monster27[0]); if(monster27[9]<=0) {right_content("mdeath",monster); $('#'+monster27[3]).css('backgroundPosition',monster27[14]); var treasure=new Array(monster27[3],monster27[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster27[3]), 1); monster27[3]="dead"; gain_exp(monster27[20]); monster_death_check(monster27[0]);} break;
		case 'monster28': monster28[9]-=damage; right_content("mdamage",damage,monster28[0]); if(monster28[9]<=0) {right_content("mdeath",monster); $('#'+monster28[3]).css('backgroundPosition',monster28[14]); var treasure=new Array(monster28[3],monster28[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster28[3]), 1); monster28[3]="dead"; gain_exp(monster28[20]); monster_death_check(monster28[0]);} break;
		case 'monster29': monster29[9]-=damage; right_content("mdamage",damage,monster29[0]); if(monster29[9]<=0) {right_content("mdeath",monster); $('#'+monster29[3]).css('backgroundPosition',monster29[14]); var treasure=new Array(monster29[3],monster29[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster29[3]), 1); monster29[3]="dead"; gain_exp(monster29[20]); monster_death_check(monster29[0]);} break;
		case 'monster30': monster30[9]-=damage; right_content("mdamage",damage,monster30[0]); if(monster30[9]<=0) {right_content("mdeath",monster); $('#'+monster30[3]).css('backgroundPosition',monster30[14]); var treasure=new Array(monster30[3],monster30[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster30[3]), 1); monster30[3]="dead"; gain_exp(monster30[20]); monster_death_check(monster30[0]);} break;
		case 'monster31': monster31[9]-=damage; right_content("mdamage",damage,monster31[0]); if(monster31[9]<=0) {right_content("mdeath",monster); $('#'+monster31[3]).css('backgroundPosition',monster31[14]); var treasure=new Array(monster31[3],monster31[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster31[3]), 1); monster31[3]="dead"; gain_exp(monster31[20]); monster_death_check(monster31[0]);} break;
		case 'monster32': monster32[9]-=damage; right_content("mdamage",damage,monster32[0]); if(monster32[9]<=0) {right_content("mdeath",monster); $('#'+monster32[3]).css('backgroundPosition',monster32[14]); var treasure=new Array(monster32[3],monster32[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster32[3]), 1); monster32[3]="dead"; gain_exp(monster32[20]); monster_death_check(monster32[0]);} break;
		case 'monster33': monster33[9]-=damage; right_content("mdamage",damage,monster33[0]); if(monster33[9]<=0) {right_content("mdeath",monster); $('#'+monster33[3]).css('backgroundPosition',monster33[14]); var treasure=new Array(monster33[3],monster33[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster33[3]), 1); monster33[3]="dead"; gain_exp(monster33[20]); monster_death_check(monster33[0]);} break;
		case 'monster34': monster34[9]-=damage; right_content("mdamage",damage,monster34[0]); if(monster34[9]<=0) {right_content("mdeath",monster); $('#'+monster34[3]).css('backgroundPosition',monster34[14]); var treasure=new Array(monster34[3],monster34[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster34[3]), 1); monster34[3]="dead"; gain_exp(monster34[20]); monster_death_check(monster34[0]);} break;
		case 'monster35': monster35[9]-=damage; right_content("mdamage",damage,monster35[0]); if(monster35[9]<=0) {right_content("mdeath",monster); $('#'+monster35[3]).css('backgroundPosition',monster35[14]); var treasure=new Array(monster35[3],monster35[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster35[3]), 1); monster35[3]="dead"; gain_exp(monster35[20]); monster_death_check(monster35[0]);} break;
		case 'monster36': monster36[9]-=damage; right_content("mdamage",damage,monster36[0]); if(monster36[9]<=0) {right_content("mdeath",monster); $('#'+monster36[3]).css('backgroundPosition',monster36[14]); var treasure=new Array(monster36[3],monster36[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster36[3]), 1); monster36[3]="dead"; gain_exp(monster36[20]); monster_death_check(monster36[0]);} break;
		case 'monster37': monster37[9]-=damage; right_content("mdamage",damage,monster37[0]); if(monster37[9]<=0) {right_content("mdeath",monster); $('#'+monster37[3]).css('backgroundPosition',monster37[14]); var treasure=new Array(monster37[3],monster37[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster37[3]), 1); monster37[3]="dead"; gain_exp(monster37[20]); monster_death_check(monster37[0]);} break;
		case 'monster38': monster38[9]-=damage; right_content("mdamage",damage,monster38[0]); if(monster38[9]<=0) {right_content("mdeath",monster); $('#'+monster38[3]).css('backgroundPosition',monster38[14]); var treasure=new Array(monster38[3],monster38[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster38[3]), 1); monster38[3]="dead"; gain_exp(monster38[20]); monster_death_check(monster38[0]);} break;
		case 'monster39': monster39[9]-=damage; right_content("mdamage",damage,monster39[0]); if(monster39[9]<=0) {right_content("mdeath",monster); $('#'+monster39[3]).css('backgroundPosition',monster39[14]); var treasure=new Array(monster39[3],monster39[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster39[3]), 1); monster39[3]="dead"; gain_exp(monster39[20]); monster_death_check(monster39[0]);} break;
		case 'monster40': monster40[9]-=damage; right_content("mdamage",damage,monster40[0]); if(monster40[9]<=0) {right_content("mdeath",monster); $('#'+monster40[3]).css('backgroundPosition',monster40[14]); var treasure=new Array(monster40[3],monster40[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster40[3]), 1); monster40[3]="dead"; gain_exp(monster40[20]); monster_death_check(monster40[0]);} break;
		case 'monster41': monster41[9]-=damage; right_content("mdamage",damage,monster41[0]); if(monster41[9]<=0) {right_content("mdeath",monster); $('#'+monster41[3]).css('backgroundPosition',monster41[14]); var treasure=new Array(monster41[3],monster41[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster41[3]), 1); monster41[3]="dead"; gain_exp(monster41[20]); monster_death_check(monster41[0]);} break;
		case 'monster42': monster42[9]-=damage; right_content("mdamage",damage,monster42[0]); if(monster42[9]<=0) {right_content("mdeath",monster); $('#'+monster42[3]).css('backgroundPosition',monster42[14]); var treasure=new Array(monster42[3],monster42[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster42[3]), 1); monster42[3]="dead"; gain_exp(monster42[20]); monster_death_check(monster42[0]);} break;
		case 'monster43': monster43[9]-=damage; right_content("mdamage",damage,monster43[0]); if(monster43[9]<=0) {right_content("mdeath",monster); $('#'+monster43[3]).css('backgroundPosition',monster43[14]); var treasure=new Array(monster43[3],monster43[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster43[3]), 1); monster43[3]="dead"; gain_exp(monster43[20]); monster_death_check(monster43[0]);} break;
		case 'monster44': monster44[9]-=damage; right_content("mdamage",damage,monster44[0]); if(monster44[9]<=0) {right_content("mdeath",monster); $('#'+monster44[3]).css('backgroundPosition',monster44[14]); var treasure=new Array(monster44[3],monster44[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster44[3]), 1); monster44[3]="dead"; gain_exp(monster44[20]); monster_death_check(monster44[0]);} break;
		case 'monster45': monster45[9]-=damage; right_content("mdamage",damage,monster45[0]); if(monster45[9]<=0) {right_content("mdeath",monster); $('#'+monster45[3]).css('backgroundPosition',monster45[14]); var treasure=new Array(monster45[3],monster45[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster45[3]), 1); monster45[3]="dead"; gain_exp(monster45[20]); monster_death_check(monster45[0]);} break;
		case 'monster46': monster46[9]-=damage; right_content("mdamage",damage,monster46[0]); if(monster46[9]<=0) {right_content("mdeath",monster); $('#'+monster46[3]).css('backgroundPosition',monster46[14]); var treasure=new Array(monster46[3],monster46[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster46[3]), 1); monster46[3]="dead"; gain_exp(monster46[20]); monster_death_check(monster46[0]);} break;
		case 'monster47': monster47[9]-=damage; right_content("mdamage",damage,monster47[0]); if(monster47[9]<=0) {right_content("mdeath",monster); $('#'+monster47[3]).css('backgroundPosition',monster47[14]); var treasure=new Array(monster47[3],monster47[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster47[3]), 1); monster47[3]="dead"; gain_exp(monster47[20]); monster_death_check(monster47[0]);} break;
		case 'monster48': monster48[9]-=damage; right_content("mdamage",damage,monster48[0]); if(monster48[9]<=0) {right_content("mdeath",monster); $('#'+monster48[3]).css('backgroundPosition',monster48[14]); var treasure=new Array(monster48[3],monster48[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster48[3]), 1); monster48[3]="dead"; gain_exp(monster48[20]); monster_death_check(monster48[0]);} break;
		case 'monster49': monster49[9]-=damage; right_content("mdamage",damage,monster49[0]); if(monster49[9]<=0) {right_content("mdeath",monster); $('#'+monster49[3]).css('backgroundPosition',monster49[14]); var treasure=new Array(monster49[3],monster49[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster49[3]), 1); monster49[3]="dead"; gain_exp(monster49[20]); monster_death_check(monster49[0]);} break;
		case 'monster50': monster50[9]-=damage; right_content("mdamage",damage,monster50[0]); if(monster50[9]<=0) {right_content("mdeath",monster); $('#'+monster50[3]).css('backgroundPosition',monster50[14]); var treasure=new Array(monster50[3],monster50[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster50[3]), 1); monster50[3]="dead"; gain_exp(monster50[20]); monster_death_check(monster50[0]);} break;
		case 'monster51': monster51[9]-=damage; right_content("mdamage",damage,monster51[0]); if(monster51[9]<=0) {right_content("mdeath",monster); $('#'+monster51[3]).css('backgroundPosition',monster51[14]); var treasure=new Array(monster51[3],monster51[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster51[3]), 1); monster51[3]="dead"; gain_exp(monster51[20]); monster_death_check(monster51[0]);} break;
		case 'monster52': monster52[9]-=damage; right_content("mdamage",damage,monster52[0]); if(monster52[9]<=0) {right_content("mdeath",monster); $('#'+monster52[3]).css('backgroundPosition',monster52[14]); var treasure=new Array(monster52[3],monster52[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster52[3]), 1); monster52[3]="dead"; gain_exp(monster52[20]); monster_death_check(monster52[0]);} break;
		case 'monster53': monster53[9]-=damage; right_content("mdamage",damage,monster53[0]); if(monster53[9]<=0) {right_content("mdeath",monster); $('#'+monster53[3]).css('backgroundPosition',monster53[14]); var treasure=new Array(monster53[3],monster53[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster53[3]), 1); monster53[3]="dead"; gain_exp(monster53[20]); monster_death_check(monster53[0]);} break;
		case 'monster54': monster54[9]-=damage; right_content("mdamage",damage,monster54[0]); if(monster54[9]<=0) {right_content("mdeath",monster); $('#'+monster54[3]).css('backgroundPosition',monster54[14]); var treasure=new Array(monster54[3],monster54[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster54[3]), 1); monster54[3]="dead"; gain_exp(monster54[20]); monster_death_check(monster54[0]);} break;
		case 'monster55': monster55[9]-=damage; right_content("mdamage",damage,monster55[0]); if(monster55[9]<=0) {right_content("mdeath",monster); $('#'+monster55[3]).css('backgroundPosition',monster55[14]); var treasure=new Array(monster55[3],monster55[14]); treasure_drop(treasure); locked.splice(locked.indexOf(monster55[3]), 1); monster55[3]="dead"; gain_exp(monster55[20]); monster_death_check(monster55[0]);} break;
		}
	}