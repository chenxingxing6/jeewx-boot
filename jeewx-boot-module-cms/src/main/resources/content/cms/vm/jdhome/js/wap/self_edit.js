//�༭ϵͳ����
var parent_host = window.parent.location.host;

//ʱ���
function UTCTimeDemo(){
   var now = new Date().getTime();
   var datestr=escape(now*1000+Math.round(Math.random()*1000));
   return datestr;
}

function show_system(tag){
	var url='http://'+parent_host+'default.htm';
	var tmp_url,title,tmp_width,tmp_height,tmp_param,user_name;
	tmp_width = 650;
	tmp_height = 400;
	tmp_param ='is_frame=2';
	if(tag=='top'){
		tmp_url='own_set_top.php';
		title='ͷ����Ϣ';
	}
	if(tag=='search'){
		tmp_url='tj_index_module_search.php';
		title='��������';
	}
	if(tag=='foot_doc'){
		tmp_url='own_add_foot_doc.php';
		title='�ײ�����';
		tmp_height = 450;
	}
	if(tag=='linksite'){
		tmp_url='add_link_site.php';
		title='��������';
	}
	if(tag=='foot'){
		tmp_url='wap_add_foot.php';
		title='�ײ���Ϣ';
	}
	if(tag=='logo'){
		tmp_url='wap_logo_set.php';
		title='logo��Ϣ';
	}
	if(tag=='banner'){
		tmp_url='wap_define_banner.php';
		title='����ͼ��Ϣ';
	}
	var to_url = url + tmp_url + '?'+ tmp_param +'&tj=1&u='+ UTCTimeDemo();
	window.parent.get_url_window(to_url,title,tmp_width,tmp_height);
}

function module_con_edit(link) {
	var tmp_width = 660;
	var tmp_height = 500;

	var url='http://'+parent_host+'default.htm';
	to_url=url+link+'&u='+UTCTimeDemo();

	window.parent.get_url_window(to_url,'�༭����',tmp_width,tmp_height);
}

/*var location_arr=window.location.href.split("#");
var end_tag=location_arr[location_arr.length-1];
if(end_tag=='evedit') {
	$(document).ready(function(){
		ini_self_edit();
	});
}
//��ʼ�༭
function ini_self_edit(){
	$("a").each(function(){
		var tmp_href=$(this).attr('href');
		if(tmp_href!=undefined){
			tmp_href=$.trim(tmp_href);
			var pos=tmp_href.indexOf("javascript");
			if(tmp_href!='' && pos==-1 && tmp_href!='#' && tmp_href!='###'){
				tmp_href=tmp_href+'#evedit';
				$(this).attr('href',tmp_href);
			}
		}
	});
	if($("#index_link").length>0){ $("#index_link").attr("href","wap/index.php@username="+ user_name +"&action=1");	}
	if($("#logo_link").length>0){ $("#logo_link").attr("href","wap/index.php@username="+ user_name +"&action=1");	}
	if($("#foot_index_link").length>0){ $("#foot_index_link").attr("href","wap/index.php@username="+ user_name +"&action=1"); }
}*/
