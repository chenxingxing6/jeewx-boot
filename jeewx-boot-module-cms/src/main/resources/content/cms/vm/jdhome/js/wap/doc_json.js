//������������б�����
var filtrateFun = {
	addFiltrateList : function(big,middle,small){	//ɸѡ�б��������
		var l = arguments.length,
			x = "",sList = "",sLi = "",sDt = "",curVal = "";
		if(l == 0){	//ɸѡ�����б����
			var j = proF.pClass;
			if(proF.clickVal.class[0]){
				curVal = proF.clickVal.class[0];
			}else if(proF.getback.class[0]){
				curVal = proF.getback.class[0];
			}
			for(x in j){
				var url       = j[x]['url'] ? j[x]['url'] : "";
				var	id        = j[x]["id"],name = j[x]["name"];
				var	cur       = curVal == id ? "cur" : "";
				var target    = j[x]['url_yemian'],durl = j[x]['define_url'];
				if(x == "all"){
					sDt += '<li class="'+cur+'" data-id="'+id+'" data-url="'+url+'" data-target="'+target+'" data-durl="'+durl+'"><strong>'+name+'</strong><em><s></s></em><small></small></li>';
				}else if(id != undefined){
					sLi += '<li class="'+cur+'" data-id="'+id+'" data-url="'+url+'" data-target="'+target+'" data-durl="'+durl+'"><strong>'+name+'</strong><em><s></s></em><small></small></li>';
				}
			}
			sList = '<dl><dd><ul>'+ sDt + sLi +'</ul></dd></dl>';
			return sList;
		}
		if(l == 1){		//ɸѡ�����б����
			var j = proF.pClass[big]["sub"];
			if(proF.clickVal.class[1]){
				curVal = proF.clickVal.class[1];
			}else if(proF.getback.class[1]){
				curVal = proF.getback.class[1];
			}else{
				curVal = "all";
			}
			if(typeof(j) == "object"){
				for(x in j){
					var url = j[x]['url'] ? j[x]['url'] : "";
					var	id = j[x]["id"],
						name = j[x]["name"];
					var cur = id == curVal ? "cur" : "";
					var target = j[x]['url_yemian'];
					if(x != "all"){
						sLi += '<li class="'+cur+'" data-id="'+id+'" data-url="'+url+'" data-target="'+target+'"><strong>'+name+'</strong><em><s></s></em><small></small></li>';
					}else{
						sDt = '<dt class="'+cur+'" data-id="'+id+'" data-url="'+url+'" data-target="'+target+'"><i></i><strong>'+name+'</strong><em><s></s></em></dt>';
					}
				}
				sList = '<dl>'+sDt+'<dd><ul>'+sLi+'<ul></ul></dd></dl>';
				return sList;
			}
		}
	}
};

$(function(){
	//�õ�domԪ��
	var filtrateBut = $("#filtrateBut"),
		wrap = $("#filtrateListWrap"),
		firstClassify = $("#firstClassify"),
		secondClassify = $("#secondClassify"),
		thirdClassify = $("#thirdClassify");
	//��domԪ�ذ��¼�
		filtrateBut.on({
			click : function(){
				var curBut = $(this),dataId = curBut.data("id"),open = curBut.data("open");
				//���ݵ�����������б�
				switch(dataId){
					case "secondClassify" :
						if(secondClassify.data("add") != 1){
							secondClassify.prepend(filtrateFun.addFiltrateList());
							secondClassify.data("add",1);
						}
					break;
				}
				//�ж��Ƿ��
				if(open == 1){
					curBut.data("open",0).removeClass("open-select");
					wrap.animate({height:0},300,function(){
						wrap.find("div.filtrate-list").hide();
						thirdClassify.animate({left:"100%"},300,function(){
							thirdClassify.data("open",0);
							secondClassify.find("dd").removeClass("open");
						});
					});
				}else{
					wrap.find("div.filtrate-list").hide().css({"left":0});
					thirdClassify.data("open",0);
					switch(dataId){
						case "sortList" :
							sortList.show();
						break;
						case "secondClassify" :
							secondClassify.show();
						break;
					}
					wrap.animate({height:330},300);
					curBut.data("open",1).addClass("open-select");
					curBut.siblings().data("open",0).removeClass("open-select");
				}
			}
		},"li");
	//�������б���ӵ����¼�
		secondClassify.on({
			click : function(){
				var cLi = $(this),
					dataId = cLi.data("id"),
					dataUrl = cLi.data("url"),
					dataTarget = cLi.data("target"),
					curText = cLi.find("strong").text(),
					dataDurl = cLi.data("durl");
				if (proF.pClass[dataId]) {
					var subJ = proF.pClass[dataId]['sub'];
				}
				cLi.addClass("cur").siblings("li").removeClass("cur");
				if(proF.clickVal.class[0] != dataId){
					if(proF.clickVal.class[0] != undefined){
						proF.clickVal.class[1] = 'all';
					}
					proF.clickVal.class[0] = dataId;
				}
				if(dataDurl != 1 && typeof(subJ) == "object"){
					var dd = secondClassify.find("dd"),
						t = cLi.index()*cLi.outerHeight(),
						h = secondClassify.height(),
						st = dd.scrollTop();
					thirdClassify.html(filtrateFun.addFiltrateList(dataId));
					if(thirdClassify.data("open") != 1){
							thirdClassify.css({"display":"block","left":"100%","top":"0px"}).animate({left:"40%"},300,function(){
								thirdClassify.data("open",1);
								secondClassify.find("dd").addClass("open");
							});

						}
					dd.animate({scrollTop:t},300);
				}else{
					if(dataTarget == 2){
						window.open(dataUrl);
					}else if(dataTarget == 1){
						window.location = dataUrl;
					}
				}
			}
		},"li");
	//�������б���ӵ����¼�
		thirdClassify.on({
			click : function(){
				var cLi = $(this),
					curText = cLi.find("strong").text(),
					dataId = cLi.data("id"),
					dataUrl = cLi.data("url"),
					bigVar = proF.clickVal.class[0],
					dataTarget = cLi.data("target");
				cLi.addClass("cur");
				if(dataId == "all"){
					cLi.parents('dl').find("dt").removeClass("cur");
					cLi.siblings().removeClass("cur");
					dataUrl = proF.pClass[bigVar]['url'];
					dataTarget = proF.pClass[bigVar]['url_yemian'];

				}else{
					cLi.parent().find("li").removeClass("cur");
				}
				proF.clickVal.class[1] = dataId;
				if(dataUrl){
					if(dataTarget == 2){
						window.open(dataUrl);
					}else if(dataTarget == 1){
						window.location = dataUrl;
					}
				}
			}
		},"li,dt");
})
