function add_remove_favorite_joke(joke_id){
	show_ajax_loader('show');
	$("#joke_fav_"+joke_id).css('visibility','hidden');
	$.ajax({
		  data : 'joke_id='+joke_id,
		  url  : HTTP_SITE+'home/add_remove_favorite_joke',
		  type : "POST",
		  success : function(response){
			  var count = parseInt($("#fav_count_"+joke_id).html());
			  
			  if(response=='0'){
				  if(count!=0){
				  	count = count-1;
				  	$("#fav_count_"+joke_id).html(count);
				  }
				  $("#joke_fav_"+joke_id).removeClass('small-heart-icon');
			  }else{
				  count = count+1;
				  $("#fav_count_"+joke_id).html(count);
				  $("#joke_fav_"+joke_id).addClass('small-heart-icon');
			  }
			  $("#joke_fav_"+joke_id).css('visibility','visible');
			  $("#joke_fav_"+joke_id).show();
			  show_ajax_loader('hide');
		  }
	});
	return false;
}
function add_update_joke_vote(joke_id,type,cvalue){
	show_ajax_loader('show');
	if(type=='1'){
		$("#joke_up_"+joke_id).css('visibility','hidden');
	}else{
		$("#joke_down_"+joke_id).css('visibility','hidden');
	}
	$.ajax({
		  data : 'joke_id='+joke_id+'&type='+type+'&cvalue='+cvalue+'&current_page=',
		  url  : HTTP_SITE+'home/add_update_joke_vote',
		  type : "POST",
		  success : function(response){
			  show_ajax_loader('hide');
			  if(response!=''){
				  if(type=='1'){
					  var count = parseInt($("#up_count_"+joke_id).html());
					  var dcount = parseInt($("#down_count_"+joke_id).html());
					  count = count+1;
					  $("#up_count_"+joke_id).html(count);
					  $("#joke_up_"+joke_id).addClass('small-thumbs-up-active');
					  $("#joke_down_"+joke_id).removeClass('small-thumbs-down-active');				  
					  $("#joke_up_"+joke_id).css('visibility','visible');
					  $("#joke_up_"+joke_id).show();
					  if(dcount!=0 && cvalue!=0){
						  dcount = dcount-1;
						  $("#down_count_"+joke_id).html(dcount)
					  }
					  $("#joke_down_btn_"+joke_id).attr('onClick','return add_update_joke_vote("'+joke_id+'",\'-1\',\'1\')');
					  $("#joke_up_btn_"+joke_id).attr('onClick','return false');
				  }
				  if(type=='-1'){
					  var count = parseInt($("#up_count_"+joke_id).html());
					  var dcount = parseInt($("#down_count_"+joke_id).html());
					  dcount = dcount+1;
					  
					  $("#down_count_"+joke_id).html(dcount);
					  $("#joke_down_"+joke_id).addClass('small-thumbs-down-active');
					  $("#joke_up_"+joke_id).removeClass('small-thumbs-up-active');				  
					  $("#joke_down_"+joke_id).css('visibility','visible');
					  $("#joke_down_"+joke_id).show();
					  if(count!=0 && cvalue!=0){
						  count = count-1;
						  $("#up_count_"+joke_id).html(count)
					  }
					  $("#joke_up_btn_"+joke_id).attr('onClick','return add_update_joke_vote("'+joke_id+'",\'1\',\'1\')');
					  $("#joke_down_btn_"+joke_id).attr('onClick','return false');
				  }
			  }else{
				  if(type=='1'){
						$("#joke_up_"+joke_id).css('visibility','visible');
					}else{
						$("#joke_down_"+joke_id).css('visibility','visible');
					}
			  }
		  }
	});
	return false;
}
function add_contest_vote(joke_id,contest_id){
	show_ajax_loader('show');
	$("#contest_vote_icon_"+joke_id).css('visibility','hidden');
	$.ajax({
		  data : 'joke_id='+joke_id+'&contest_id='+contest_id,
		  url  : HTTP_SITE+'contest/add_contest_joke_vote',
		  type : "POST",
		  success : function(response){
			  if(response!=''){
				  $("#contest_vote_icon_btn_"+joke_id).attr('onClick','');
				  $("#contest_vote_icon_"+joke_id).removeClass('recommendation-icon-off').addClass('small-recommendation-icon');
				  $("#contest_joke_vote_"+joke_id).html(response);
				  $("#contest_joke_vote_text_"+joke_id).html('Voted');
				  $("#contest_vote_icon_"+joke_id).css('visibility','visible');
			  }else{
				  $("#contest_vote_icon_"+joke_id).css('visibility','visible');
			  }
			  show_ajax_loader('hide');
		  }
	});
	return false;
}
////////Right Side///////////
function update_my_filter(choice){
	show_ajax_loader('show');
	$.ajax({
		  data : 'choice='+choice,
		  url  : HTTP_SITE+'users/update_filter_choice',
		  type : "POST",
		  success : function(response){
			  show_ajax_loader('show');
			  location.reload(true);
			  
		  }
	});
	return false;
}
function update_user_filter_val(){
	filter_type = '';
	$("input[name='filter_options[]']:checked").each(function (){
		var filter = $(this).val();
		filter_type += filter+',';
	});
	if(filter_type==''){
		alert('At least one type must be selected.');
		return false;
	}
	update_user_filter(filter_type);
}
function update_user_filter(filter_type){
	show_ajax_loader('show');
	
	$.ajax({
		  data : 'filter='+filter_type,
		  url  : HTTP_SITE+'users/update_filter_choice_new',
		  type : "POST",
		  success : function(response){
			location.reload(true);				
			
		  }
	});
	return false;
}
function update_my_sorting(choice){
	show_ajax_loader('show');
	$.ajax({
		  data : 'choice='+choice,
		  url  : HTTP_SITE+'users/update_sorting_choice',
		  type : "POST",
		  success : function(response){
			  show_ajax_loader('show');
			  location.reload(true);
			  //$(".filter_loader").hide();
			  //get_new_filter_jokes();
			  //get_new_filter_joke_of_the_day();
		  }
	});
	return false;
}
function update_my_fontsize(choice){
	show_ajax_loader('show');
	$.ajax({
		  data : 'choice='+choice,
		  url  : HTTP_SITE+'users/update_fontsize_choice',
		  type : "POST",
		  success : function(response){
			  show_ajax_loader('show');
			  location.reload(true);
			  //$(".filter_loader").hide();
			  //get_new_filter_jokes();
			  //get_new_filter_joke_of_the_day();
		  }
	});
	return false;
}
function generate_user_recommendations(gen_kid,gen_ofc,gen_res,gen_unc){
	$.ajax({
		  data : 'gen_kid='+gen_kid+'&gen_ofc='+gen_ofc+'&gen_res='+gen_res+'&gen_unc='+gen_unc,
		  url  : HTTP_SITE+'home/generate_user_recommendations',
		  type : "POST",
		  success : function(response){
			  if(response=='1'){
				  recommendation_completed(gen_kid,gen_ofc,gen_res,gen_unc);				  
				  
			  }
		  }
	});
}
function recommendation_completed(gen_kid,gen_ofc,gen_res,gen_unc){
	if(gen_kid=='1'){
		$.ajax({
			  data : 'gen_kid=1',
			  url  : HTTP_SITE+'home/recommendation_completed',
			  type : "POST",
			  success : function(response){
				  location.reload(true);
			  }
		});
	}
	if(gen_ofc=='1'){
		$.ajax({
			  data : 'gen_ofc=1',
			  url  : HTTP_SITE+'home/recommendation_completed',
			  type : "POST",
			  success : function(response){
				  location.reload(true);
			  }
		});
	}
	if(gen_res=='1'){
		$.ajax({
			  data : 'gen_res=1',
			  url  : HTTP_SITE+'home/recommendation_completed',
			  type : "POST",
			  success : function(response){
				  location.reload(true);
			  }
		});
	}
	if(gen_unc=='1'){
		$.ajax({
			  data : 'gen_unc=1',
			  url  : HTTP_SITE+'home/recommendation_completed',
			  type : "POST",
			  success : function(response){
				  location.reload(true);
			  }
		});
	}
}
function show_email_popup(joke_id){
	$("#send_joke_by_email_s1").show();
	show_ajax_loader('show');
	$("#send_by_email_joke_id").val(joke_id);
	$.ajax({
		  data : 'is_mobile=1',
		  url  : HTTP_SITE+'contact_emails/get_user_saved_emails_list_and_contacts',
		  type : "POST",
		  success : function(response){
			  show_ajax_loader('hide');
			  if(response!=''){
				  var res = $.parseJSON(response);
				  is_saved_list = true;
				  $.each(res.emails,function(index,em){
			  	  	if(em.display_name!=''){						
						var data = Array();
						data[0] = em.email;
						data[1] = em.display_name;
						$("#entered_emails").addTag(data,'_1');
					}else{
						
						$("#entered_emails").addTag(em.email,'_1');
					}
				  });
				  is_saved_list = false;
				  //$("#entered_emails").val(response);
				  //check_saved_emails_validation();
				  if(res.registered=='1' && res.is_logged_in=='1'){
					  //$("#usercontacts_list").dropdownchecklist("destroy");
					  var total_cont_list = 0;
					  var contact_lists = '';
					  var heading_title = 'No Contacts or Distribution Lists - Click Manage to Create';
					  if(res.dist_list.length>0){
						  
						  //contact_lists += '<optgroup label="" class="dist_list">';
						  $.each(res.dist_list,function(index,dl){
							  total_cont_list = total_cont_list+1;
							  contact_lists += '<div class="list-line"><div class="distribution-users"></div><div class="distribution-list-title">'+dl.userknowndistlist_name+'</div><a href="javascript:void(0)" id="dist_list_'+dl.userknowndistlist_id+'" onclick="load_distribution_list_contacts('+dl.userknowndistlist_id+')" class="distribution-list-btn">Add</a><div class="clear"></div></div>';
						  });
						  //contact_lists += '</optgroup>';
						  //heading_title = 'Contacts and Distribution Lists';
					  }
					  if(res.contacts.length>0){
						  //contact_lists += '<optgroup label="" class="emails_list">';
						  $.each(res.contacts,function(index,cn){
							  total_cont_list = total_cont_list+1;
							  contact_lists += '<div class="list-line"><div class="distribution-user"></div><div class="distribution-list-title">'+cn.display_text+'</div><a href="javascript:void(0)" id="contact_list_'+cn.userknowncontact_id+'" onclick="load_contact_information('+cn.userknowncontact_id+')" class="distribution-list-btn">Add</a><div class="clear"></div></div>';
						  });
						  //contact_lists += '</optgroup>';
						  //heading_title = 'Contacts and Distribution Lists';
					  }
					  if(total_cont_list>4) $("#mysaved_contacts_and_lists").css({'height':'115px','overflow-y':'scroll'});
					  $("#mysaved_contacts_and_lists").html(contact_lists);
					  //$("#usercontacts_list").dropdownchecklist({ emptyText: heading_title, width: 360, maxDropHeight: 150,icon: {}  }); 
					  show_ajax_loader('hide');
				  }
			  }else{
				  show_ajax_loader('hide');
			  }
			  
		  }
	});
}

function load_contact_information(cont_id){
	show_ajax_loader('show');
	$("#contact_list_"+cont_id).hide();
	$.ajax({
		  data : 'contact_id='+cont_id,
		  url  : HTTP_SITE+'contact_emails/get_contact_info_by_id',
		  type : "POST",
		  success : function(response){
			  if(response!=''){
				  show_ajax_loader('hide');
				  var res = $.parseJSON(response);
				  is_saved_list = true;
				  
					  if(res.contact.userknowncontact_displayname!=''){						
						var data = Array();
						data[0] = res.contact.userknowncontact_email;
						data[1] = res.contact.userknowncontact_displayname;
						$("#entered_emails").addTag(data,cont_id);
					}else{
						
						$("#entered_emails").addTag(res.contact.userknowncontact_email,cont_id);
					}
				  
				  $("#joke_email_error").html('');
				  check_saved_emails_validation();
			  }else{
				  show_ajax_loader('hide');
			  }
			  
		  }
	});
}
function load_distribution_list_contacts(dist_id){
	show_ajax_loader('show');
	$("#dist_list_"+dist_id).hide();
	$.ajax({
		  data : 'dist_id='+dist_id,
		  url  : HTTP_SITE+'contact_emails/get_distribution_list_contacts',
		  type : "POST",
		  success : function(response){
			  if(response!=''){
				  show_ajax_loader('hide');
				  var res = $.parseJSON(response);
				  is_saved_list = true;
				  $.each(res.contacts,function(index,em){
					  if(em.userknowncontact_displayname!=''){						
						var data = Array();
						data[0] = em.userknowncontact_email;
						data[1] = em.userknowncontact_displayname;
						$("#entered_emails").addTag(data,dist_id);
					}else{
						
						$("#entered_emails").addTag(em.userknowncontact_email,dist_id);
					}
				  });
				  $("#joke_email_error").html('');
				  check_saved_emails_validation();
			  }else{
				  show_ajax_loader('hide');
			  }
			  
		  }
	});
}
function check_saved_emails_validation(){
			var emails = $("#entered_emails").val();
			if(emails){
				$.ajax({
					  data : 'emails='+emails,
					  url  : HTTP_SITE+'contact_emails/check_saved_emails_in_block_list',
					  type : "POST",
					  success : function(response){
						  $("#load_saved_email").hide();
						  var res = $.parseJSON(response);
						  
						  $.each(res.found,function(index,f){
							 
							  
							  if(f=='1'){
								  var message = '';
								  var is_anon = $("#joke_send_by_anon").is(':checked');
								  var error = 0;
								  var elem_id = res.result[index].email.replace(/\@/g,'');
								  var elem = res.result[index].email;
								  elem_id = elem_id.replace(/\./g,'');
								  if(res.result[index].blockedemail_type=='1'){
									  error = 1;
									  message = '<span id="'+elem_id+'">Sorry, but <strong>'+elem+'</strong> has requested not to receive emails from Jokerz.com<br></span>';
								  }
								  else if(res.result[index].blockedemail_type=='2' && is_anon){
									  error = 2;
									  message = '<span id="'+elem_id+'">Sorry, but <strong>'+elem+'</strong> has requested not to receive anonymous emails<br></span>';
								  }
								  else if(res.result[index].blockedemail_type=='3' && res.result[index].blockedemail_newvalidated=='1'){
									  error = 3;
									  message = '<span id="'+elem_id+'">Warning, the email address <strong>'+elem+'</strong> has been changed to <strong>'+res.result.blockedemail_newaddress+'</strong> at the user\'s request.<br></span>';
								  }else if(res.result[index].blockedemail_type=='3' && res.result[index].blockedemail_newvalidated=='0'){
									  error = 1;
									  message = elem+' is temporarily blocked per user request';
								  }
								  if(error){
									  $("#joke_email_error").append(message);
									  
										  $("span.tag > span").each(function(index, element) {
												var val = $(this).html();
												if(error=='1' || error=='2'){
													if(val==elem){
														$(this).parent().css({'background':'#ff0000','color':'#fff'});
														$(this).next('a').css({'color':'#fff'});
													}
												}else if(error==3){
													if(val==elem && res.result[index].blockedemail_newvalidated=='1'){
														$(this).html(res.result[index].blockedemail_newaddress);
														var v = $("#entered_emails").val();
														v = v.replace(elem,res.result[index].blockedemail_newaddress);
														$("#entered_emails").val(v);
													}
												}
											});
									  
								  }
							  }
						  });
					  }
				});
			}else{
				$("#load_saved_email").hide();
			}
		}
function go_back_to_step1(){
	hide_light_box('send_joke_by_email_s2');
	$("#send_joke_by_email_s1").show();
	
}
function goToNextStep_joke_email(){
	var email_to = $("#entered_emails").val();
	if(email_to==''){
		alert('Please provide atleast one email');
		return false;
	}
	hide_light_box('send_joke_by_email_s1');
	$("#send_joke_by_email_s2").show();
	$("#selected_entered_emails").val(email_to);
}
function send_joke_to_emails(){
	
	var fdata = $("#send_joke_email_form").serialize();
	$("#email_btn_cont").hide();
	show_ajax_loader('show');
	console.log(fdata);
	$.ajax({
		  data : fdata,
		  url  : HTTP_SITE+'contact_emails/send_joke_by_email',
		  type : "POST",
		  success : function(response){
			  console.log('Res:'+response);
			  var res = $.parseJSON(response);
			  var msg = '';
			  if(res.is_not_sent=='1'){
				  msg = 'Could not sent joke on following emails:<br>';
				  $.each(res.not_sent,function(index,r){
					  msg += r+'<br>';
				  });
			  }
			  else{
				  msg = 'Joke has been sent to email(s) successfuly';
				  
			  }
			  $("#joke_email_msg").html(msg);
			  $("#joke_email_msg").show();
			  $("#email_btn_cont").show();
			  show_ajax_loader('hide');
			  setTimeout('hide_email_popup()',3000);
			  $("#email_comments").val('');
			  $("#send_by_email_joke_id").val('');
			  $("span.tag").each(function(index, element) {
				$(this).remove();
			  });
			  $("#joke_email_error").html('');
			  $("#entered_emails").val('');
				
		  }
	});
	return false;
}
function update_user_jokes_seen(){
	var jokes_seen_user = $.param({'jokes[]': jokes_seen});	
	$.ajax({
	 type: "POST",
	 url: HTTP_SITE+'home/jokes_seen_by_user',
	 data: jokes_seen_user,
	
	 success: function(data) { }
	});	
}
function hide_email_popup(){
	$("#joke_email_msg").html('');
	$("#joke_email_msg").hide();
	hide_light_box('send_joke_by_email_s2')
}