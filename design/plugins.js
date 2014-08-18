(function($) {
	$.fn.hovereffect = function() {
		$(this).hover(
			// mouseover effect
			function () {
				loc_id=$(this).attr("id");
				if      (Reveal=='yes')  {ab_Reveal(loc_id)}
				else if (Peak=='yes')    {ab_Peak(loc_id)}
				else if (Uncover=='yes') {ab_Uncover(loc_id)}

				//look for background position so the border does not appear on undiscovered squares
				else if ((loc_id!=undefined)&&(document.getElementById(loc_id).style.backgroundPosition!="")) {
					switch ("yes") {
						case Singe:      ab_Singe(loc_id);      break;
						case Fireball:   ab_Fireball(loc_id);   break;
						case Firestorm:  ab_Firestorm(loc_id);  break;
						case Teleport:   ab_Teleport(loc_id);   break;
						case Incinerate: ab_Incinerate(loc_id); break;
						default:         if (movement=='build') {build_hover(loc_id) }; break;
						}
					}
				},
			// mouseout effect
			function (){
				if(((Singe=="yes")||(Fireball=="yes")||(Firestorm=="yes"))&&(hover_array.length!=0)&&(document.getElementById(hover_array[0]).style.backgroundPosition!="")){for(i=0;i<hover_array.length;i++){x=$("#"+hover_array[i]).parent().parent(); $(x).removeClass()}for(i=0;i<hover_array.length;i++){hover_array.splice(i)}}
				else if((Teleport=="yes")||(Jump=="yes")){loc_id=$(this).attr("id");if(loc_id!=undefined){x="#"+loc_id; x_parent=$(x).parent().parent();if(document.getElementById(loc_id).style.backgroundPosition!=""){$(x_parent).removeClass()}}}
				else if(Incinerate=="yes"){loc_id=$(this).attr("id");if(loc_id!=undefined){x="#"+loc_id; x_parent=$(x).parent().parent();if(document.getElementById(loc_id).style.backgroundPosition!=""){$(x_parent).removeClass()}}}
				else if(Peak=='yes'){for(i=0;i<hover_array.length;i++){x=$("#"+hover_array[i]).parent().parent(); $(x).removeClass()}for(i=0;i<hover_array.length;i++){hover_array.splice(i)}}
				else if(Uncover=='yes'){for(i=0;i<hover_array.length;i++){x=$("#"+hover_array[i]).parent().parent(); $(x).removeClass()}for(i=0;i<hover_array.length;i++){hover_array.splice(i)}}
				else if(Reveal=='yes'){for(i=0;i<hover_array.length;i++){x=$("#"+hover_array[i]).parent().parent(); $(x).removeClass()}for(i=0;i<hover_array.length;i++){hover_array.splice(i)}}
				else if(movement=='build'){loc_id=$(this).attr("id");if(loc_id!=undefined){x="#"+loc_id;if($('#castle').html()!=null){x_parent=$(x).parent().parent().parent()}else{ x_parent=$(x).parent().parent()}if(document.getElementById(loc_id).style.backgroundPosition!=""){$(x_parent).removeClass()}}}
				}
			);

		function build_hover(loc) {
			var va=get_vis_array();
			var check=va.indexOf(loc);
			if(check!=-1){
				if($('#castle').html()!=null){id_parent=$('#'+loc).parent().parent().parent()}
				else{id_parent=$('#'+loc).parent().parent()}
				if($('#'+loc).css('backgroundPosition')!=""){$(id_parent).addClass("blue_border")}
				}
			}

		function ab_Singe(loc_id) {
			var check=get_vis_array().indexOf(loc_id);
			if (check!=-1) {
				q=loc_id.split("_"); // split the id to get both vars
				hover_array[0]= loc_id;
				hover_array[1]= parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(1));              // right one
				hover_array[2]=(parseInt(q[0])+parseInt(1))+"_"+parseInt(q[1]);               // down one
				hover_array[3]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // down one right one

				for (i=0;i<hover_array.length;i++) {
					x=$("#"+hover_array[i]).parent().parent();
					if (document.getElementById(hover_array[i]).style.backgroundPosition!="") {$(x).addClass("red_border");}
					}
				}
			}

		function ab_Fireball(loc_id) {
			var check=get_vis_array().indexOf(loc_id);
			if (check!=-1) {
				q=loc_id.split("_"); // split the id to get both vars
				hover_array[0]= loc_id;
				hover_array[1]=(parseInt(q[0])-parseInt(1))+"_"+parseInt(q[1]);               // up one
				hover_array[2]= parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(1));              // right one
				hover_array[3]=(parseInt(q[0])+parseInt(1))+"_"+parseInt(q[1]);               // down one
				hover_array[4]= parseInt(q[0])+"_"+(parseInt(q[1])-parseInt(1));              // left one
				hover_array[5]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // up one right one
				hover_array[6]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // up one left one
				hover_array[7]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // down one left one
				hover_array[8]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // down one right one

				for (i=0;i<hover_array.length;i++) {
					x=$("#"+hover_array[i]).parent().parent();
					if (document.getElementById(hover_array[i]).style.backgroundPosition!="") {$(x).addClass("red_border");}
					}
				}
			}

		function ab_Firestorm(loc_id) {
			var check=get_vis_array().indexOf(loc_id);
			if (check!=-1) {
				q=loc_id.split("_"); // split the id to get both vars
				hover_array[0]= loc_id;
				hover_array[1]= (parseInt(q[0])-parseInt(1))+"_"+parseInt(q[1]);               // up one
				hover_array[2]=  parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(1));              // right one
				hover_array[3]= (parseInt(q[0])+parseInt(1))+"_"+parseInt(q[1]);               // down one
				hover_array[4]=  parseInt(q[0])+"_"+(parseInt(q[1])-parseInt(1));              // left one
				hover_array[5]= (parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // up one right one
				hover_array[6]= (parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // up one left one
				hover_array[7]= (parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // down one left one
				hover_array[8]= (parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // down one right one
				hover_array[9]=  parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(2));              // right two
				hover_array[10]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])+parseInt(2)); // up two right two
				hover_array[11]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(2)); // down one right two
				hover_array[12]=(parseInt(q[0])+parseInt(2))+"_"+parseInt(q[1]);               // down two
				hover_array[13]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])-parseInt(1)); // down two left one
				hover_array[14]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])+parseInt(1)); // down two right one
				hover_array[15]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])+parseInt(2)); // down two right two
				
				for (i=0;i<hover_array.length;i++) {
					x=$("#"+hover_array[i]).parent().parent();
					if (document.getElementById(hover_array[i]).style.backgroundPosition!="") {$(x).addClass("red_border");}
					}
				}
			}

		function ab_Teleport(i) {
			Teleport_id="#"+i;
			t_id_parent=$(Teleport_id).parent().parent();
			if (document.getElementById(i).style.backgroundPosition!="") {$(t_id_parent).addClass("yellow_border");}
			}

		function ab_Incinerate(i) {
			var check=get_vis_array().indexOf(i);
			if (check!=-1) {
				id_parent=$('#'+i).parent().parent();
				if (document.getElementById(i).style.backgroundPosition!="") {$(id_parent).addClass("red_border");}
				}
			}

		function ab_Peak(loc_id) {
			if (loc_id!=undefined) {
				q=loc_id.split("_"); // split the id to get both vars
				/* one space away */
				hover_array[0]=loc_id;
				hover_array[1]=(parseInt(q[0])-parseInt(1))+"_"+parseInt(q[1]);               // up one
				hover_array[2]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // up one right one
				hover_array[3]= parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(1));              // right one
				hover_array[4]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // right one down one
				hover_array[5]=(parseInt(q[0])+parseInt(1))+"_"+parseInt(q[1]);               // down one
				hover_array[6]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // down one left one
				hover_array[7]= parseInt(q[0])+"_"+(parseInt(q[1])-parseInt(1));              // left one
				hover_array[8]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // up one left one
				/* end one space away */

				for (i=0;i<hover_array.length;i++) {
					x=$("#"+hover_array[i]).parent().parent();
					back_Pos = $('#'+hover_array[i]).css('background-position');
					if ((back_Pos!=undefined)&&(back_Pos=="0px 0px")) {$(x).addClass("blue_border");}
					}
				}
			}

		function ab_Uncover(loc_id) {
			if (loc_id!=undefined) {
				q=loc_id.split("_"); // split the id to get both vars
				/* one space away */
				hover_array[0]=loc_id;
				hover_array[1]=(parseInt(q[0])-parseInt(1))+"_"+parseInt(q[1]);               // up one
				hover_array[2]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // up one right one
				hover_array[3]= parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(1));              // right one
				hover_array[4]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // right one down one
				hover_array[5]=(parseInt(q[0])+parseInt(1))+"_"+parseInt(q[1]);               // down one
				hover_array[6]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // down one left one
				hover_array[7]= parseInt(q[0])+"_"+(parseInt(q[1])-parseInt(1));              // left one
				hover_array[8]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // up one left one
				/* end one space away */
				/* two spaces away */
				hover_array[9]= (parseInt(q[0])-parseInt(2))+"_"+ parseInt(q[1]);              // up two
				hover_array[10]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])+parseInt(1)); // up two right one
				hover_array[11]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])+parseInt(2)); // up two right two
				hover_array[12]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])+parseInt(2)); // up one right two
				hover_array[13]= parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(2));              // right two
				hover_array[14]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(2)); // right two down one
				hover_array[15]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])+parseInt(2)); // right two down two
				hover_array[16]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])+parseInt(1)); // right one down two
				hover_array[17]=(parseInt(q[0])+parseInt(2))+"_"+parseInt(q[1]);               // down two
				hover_array[18]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])-parseInt(1)); // down two left one
				hover_array[19]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])-parseInt(2)); // down two left two
				hover_array[20]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])-parseInt(2)); // down one left two
				hover_array[21]= parseInt(q[0])+"_"+             (parseInt(q[1])-parseInt(2)); // left two
				hover_array[22]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])-parseInt(2)); // left two up one
				hover_array[23]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])-parseInt(2)); // left two up two
				hover_array[24]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])-parseInt(1)); // left one up two
				/* end two spaces away */

				for (i=0;i<hover_array.length;i++) {
					x=$("#"+hover_array[i]).parent().parent();
					back_Pos = $('#'+hover_array[i]).css('background-position');
					if ((back_Pos!=undefined)&&(back_Pos=="0px 0px")) {$(x).addClass("blue_border");}
					}
				}
			}

		function ab_Reveal(loc_id) {
			if (loc_id!=undefined) {
				q=loc_id.split("_"); // split the id to get both vars
				/* one space away */
				hover_array[0]=loc_id;
				hover_array[1]=(parseInt(q[0])-parseInt(1))+"_"+parseInt(q[1]);               // up one
				hover_array[2]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // up one right one
				hover_array[3]= parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(1));              // right one
				hover_array[4]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(1)); // right one down one
				hover_array[5]=(parseInt(q[0])+parseInt(1))+"_"+parseInt(q[1]);               // down one
				hover_array[6]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // down one left one
				hover_array[7]= parseInt(q[0])+"_"+(parseInt(q[1])-parseInt(1));              // left one
				hover_array[8]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])-parseInt(1)); // up one left one
				/* end one space away */
				/* two spaces away */
				hover_array[9]= (parseInt(q[0])-parseInt(2))+"_"+ parseInt(q[1]);              // up two
				hover_array[10]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])+parseInt(1)); // up two right one
				hover_array[11]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])+parseInt(2)); // up two right two
				hover_array[12]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])+parseInt(2)); // up one right two
				hover_array[13]= parseInt(q[0])+"_"+(parseInt(q[1])+parseInt(2));              // right two
				hover_array[14]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(2)); // right two down one
				hover_array[15]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])+parseInt(2)); // right two down two
				hover_array[16]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])+parseInt(1)); // right one down two
				hover_array[17]=(parseInt(q[0])+parseInt(2))+"_"+parseInt(q[1]);               // down two
				hover_array[18]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])-parseInt(1)); // down two left one
				hover_array[19]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])-parseInt(2)); // down two left two
				hover_array[20]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])-parseInt(2)); // down one left two
				hover_array[21]= parseInt(q[0])+"_"+             (parseInt(q[1])-parseInt(2)); // left two
				hover_array[22]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])-parseInt(2)); // left two up one
				hover_array[23]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])-parseInt(2)); // left two up two
				hover_array[24]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])-parseInt(1)); // left one up two
				/* end two spaces away */
				/* three spaces away */
				hover_array[25]=(parseInt(q[0])+parseInt(3))+"_"+ parseInt(q[1]);              // up three
				hover_array[26]=(parseInt(q[0])-parseInt(3))+"_"+ parseInt(q[1]);              // down three
				hover_array[27]= parseInt(q[0])+"_"+             (parseInt(q[1])+parseInt(3)); // right three
				hover_array[28]= parseInt(q[0])+"_"+             (parseInt(q[1])-parseInt(3)); // left three
				hover_array[29]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])-parseInt(3)); // left three up one
				hover_array[30]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])-parseInt(3)); // left three up two
				hover_array[31]=(parseInt(q[0])+parseInt(3))+"_"+(parseInt(q[1])-parseInt(3)); // left three up three
				hover_array[32]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])-parseInt(3)); // left three down one
				hover_array[33]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])-parseInt(3)); // left three down two
				hover_array[34]=(parseInt(q[0])-parseInt(3))+"_"+(parseInt(q[1])-parseInt(3)); // left three down three
				hover_array[35]=(parseInt(q[0])+parseInt(3))+"_"+(parseInt(q[1])-parseInt(2)); // left two up three
				hover_array[36]=(parseInt(q[0])+parseInt(3))+"_"+(parseInt(q[1])-parseInt(1)); // left one up three
				hover_array[37]=(parseInt(q[0])-parseInt(3))+"_"+(parseInt(q[1])-parseInt(2)); // left two down three 
				hover_array[38]=(parseInt(q[0])-parseInt(3))+"_"+(parseInt(q[1])-parseInt(1)); // left one down three
				hover_array[39]=(parseInt(q[0])-parseInt(3))+"_"+(parseInt(q[1])+parseInt(1)); // right one up three
				hover_array[40]=(parseInt(q[0])+parseInt(3))+"_"+(parseInt(q[1])+parseInt(1)); // right one down three
				hover_array[41]=(parseInt(q[0])-parseInt(3))+"_"+(parseInt(q[1])+parseInt(2)); // right two up three
				hover_array[42]=(parseInt(q[0])+parseInt(3))+"_"+(parseInt(q[1])+parseInt(2)); // right two down three
				hover_array[43]=(parseInt(q[0])-parseInt(1))+"_"+(parseInt(q[1])+parseInt(3)); // right three up one
				hover_array[44]=(parseInt(q[0])-parseInt(2))+"_"+(parseInt(q[1])+parseInt(3)); // right three up  two
				hover_array[45]=(parseInt(q[0])-parseInt(3))+"_"+(parseInt(q[1])+parseInt(3)); // right three up three
				hover_array[46]=(parseInt(q[0])+parseInt(1))+"_"+(parseInt(q[1])+parseInt(3)); // right three down one
				hover_array[47]=(parseInt(q[0])+parseInt(2))+"_"+(parseInt(q[1])+parseInt(3)); // right three down two
				hover_array[48]=(parseInt(q[0])+parseInt(3))+"_"+(parseInt(q[1])+parseInt(3)); // right three down three
				/* end three spaces away */

				for (i=0;i<hover_array.length;i++) {
					x=$("#"+hover_array[i]).parent().parent();
					back_Pos = $('#'+hover_array[i]).css('background-position');
					if ((back_Pos!=undefined)&&(back_Pos=="0px 0px")) {$(x).addClass("blue_border");}
					}
				}
			}
		};
	}
)(jQuery);

/****************************************************************************************************************************/
(function($) {
		$.fn.addactive = function(i) {
			if ($('#'+i+'_active').html()==null) { $("#"+i+"_ab").parent().append("<span id='"+i+"_active' style='display:inline'>Active</span>"); }
			};
		}
	)(jQuery);

(function($) {
		$.fn.addcancel = function(i,potID) {
			if (active_cancel!="yes") {
				if (potID) { $("#"+potID).append("<a id='"+potID+"_cancel' class=\"potCancel\" href=\"javascript: cancel_ability('"+potID+"')\"><img src=\"backgrounds/CancelButton.png\"></a>"); }
				else       {
					$("#"+i+"_ab").append("<a id='"+i+"_cancel' href=\"javascript: cancel_ability('"+i+"')\"><img src=\"backgrounds/CancelButton.png\"></a>");
					if (left_menu=='gear') {
						$("#"+i).append("<div id='"+i+"_cancel' onclick=\"javascript: activateGear('','"+i+"','cancel')\"><img src=\"backgrounds/CancelButton.png\"></div>");
						$('#'+i+'_cancel').show();
						$("#"+i+" a").hide();
						}
					}
				active_cancel=i;
				}
			};
		}

	)(jQuery);