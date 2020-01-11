var public = {};
var sIdTag = '';
var G_ = {};
var wsf = {};
// JavaScript Document
/**
 ** �����õ���ȷ�ļӡ������ˡ������
 ** ˵����javascript����������������������������ؽ�Ϊ��ȷ�ļӷ������
 ** ���ã��ӣ�nCount.add(arg1,arg2),
 *	����nCount.sub(arg1,arg2),
 *	�ˣ�nCount.mul(arg1,arg2),
 *	����nCount.div(arg1,arg2),
 ** ����ֵ��arg1��arg2�����ľ�ȷ���
 **/

var nCount = {
	add : function(arg1,arg2){
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
	},
	sub : function(arg1, arg2){
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //��̬���ƾ��ȳ���
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
	},
	mul : function(arg1, arg2){
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	},
	div : function(arg1, arg2){
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
	}
};
/**
	������֤(�û���,����ȵ�...)
	����:6-20���ַ�(��ĸ/����/�»���)
*/
public.yzUsername = function(string) {
	if (string.length == 0) {
		return false;
	}

	if(/^(\w){6,20}$/.test(string) ) {
		return true;
	}else{
		return false;
	}
}

/**
	������֤����
*/
public.yzEmail = function (email){
	if (email.length == 0) {
		return false;
	}

	if( /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email) ) {
		return true;
	}else{
		return false;
	}
}

/**
	��ȡ�ַ�����
*/
public.getStringLength = function(str) {
		if (str == '') return 0;

    var realLength = 0, len = str.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

/**
	�绰��֤��֧���������ֻ���
*/
public.yzTel = function(s) {
	var str=s;
	var reg=/(^(\d{2,4}[-_����]?)?\d{3,8}([-_����]?\d{3,8})?([-_����]?\d{1,7})?$)|(^0?1[35]\d{9}$)/;
	if (reg.test(str)==false){
		return false;
	}else{
		return true;
	}
};

/**
	�ʱ���֤
*/
public.yzPostcode = function(s) {
	var str=s;
	var reg=/^[0-9][0-9]{5}$/;
	if (reg.test(str)==false){
		return false;
	}else{
		return true;
	}
};

/**
	�ж�С��λ�Ƿ���ֵ����û��ת��������
*/
public.yzIsdecimal = function(str) {
	var reg=/(\.00)$/;
	if (reg.test(str)==false){
		return str;
	}else{
		return parseInt(str);
	}
};

/**
	��֤�ֻ�
*/
public.yzMobile = function(tel) {
	var reg = /(^0{0,1}1[0-9]{1}[0-9]{9}$)/;
	if (reg.test(tel)) {
		tel = true;
		return tel;
	} else {
		tel = false;
		return tel;
	}
}

function showAllzz(tit, jsons){
	var allZZ = $('<div id="allZZ" class="allzz"><div class="alertDiv"><div class="promptText">�ظ��ɹ�</div><div class="promptBut"><a href="###">�����ظ�</a><a href="###">�ر�</a></div></div></div>'),
		h = $(document).height(),
		ah = $(document).scrollTop()+$(window).height()/2,
		i=0;

	allZZ.find(".promptText").html(tit), alertDiv = allZZ.find(".alertDiv");

	if (!jsons) {
		jsons = {'�ر�':'###'};
	}

	var x, aArray = "";
	for (var x in jsons) {
		i++;
		aArray += '<a href="' + jsons[x] + '">' + x + '</a>';
	}
	allZZ.find(".promptBut").html(aArray);


	allZZ.find(".promptBut").find("a").css({
		'width': 100 / i + "%"
	}).click(function() {
		allZZ.remove();
	});

	allZZ.css({
		"height": h + "px"
	}).appendTo('body');
	alertDiv.css({
		"margin-top": ah - alertDiv.height() / 2
	});
}

//��ʱ����
function alert_frame(val_text){
	$("body").append('<div class="alert_frame" id="alert_frame"><div class="alert_frame_bg"></div><div class="alert_frame_c">'+val_text+'</div></div>');
	var time_ = 1000,
		frame_id = $("#alert_frame"),
		text_w = $(".alert_frame_c").outerWidth()/2,
		text_h = $(".alert_frame_c").outerHeight()/2;
	$(".alert_frame_c").css({
		"top":"50%",
		"left":"50%",
		"margin-top":-text_h,
		"margin-left":-text_w
	});
	setTimeout(function(){
		$("body").find("#alert_frame").remove();
	},time_);
}

//�ڴ�������ʾ��ά��
function showAllewm(tit, wenzi){
	var allZZ = $('<div id="allZZ" class="allzz"><div class="alertDiv"><div class="promptText"><div class="ewmstyle">�ظ��ɹ�</div><div class="wenzi"></div></div><div class="promptBut"><a href="###" style="width: 100%;">�ر�</a></div></div></div>'),
		h = $("body").height(),
		ah = $(document).scrollTop()+$(window).height()/2,
		i=0;

	allZZ.find(".ewmstyle").html(tit),allZZ.find(".wenzi").html(wenzi), alertDiv = allZZ.find(".alertDiv");

	allZZ.find(".promptBut").find("a").click(function() {
		allZZ.remove();
	});

	allZZ.css({
		"height": h + "px"
	}).appendTo('body');
	alertDiv.css({
		"margin-top": ah - alertDiv.height() / 2
	});
}
//�ж��Ƿ�Ϊ΢��
function is_weixn(){
  var ua = navigator.userAgent.toLowerCase();
  if(ua.match(/MicroMessenger/i)=="micromessenger") {
     return false;
  } else {
    return true;
  }
}

// $('#shareModule span').live("click",function(){
// 	var ua = navigator.userAgent.toLowerCase();
//   var is_weixn = (ua.match(/MicroMessenger/i)=="micromessenger") ? 1 : 0;
//   if(is_weixn){
//     fJson.weixin()
//   }else{
// 		var tmpClass = $(this).attr('class');
// 		fJson[tmpClass]();
//   }

// });

// ��ʵ��ת��Ϊ�ַ�
function decodeHtmlEntity(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};

//���������ֲ�
function alert_layer(){
  $("body").append('<div class="alert_layer" id="alert_layer"><div class="alert_layer_bg"></div><div class="alert_layer_c"><img src="images/loading.gif" class="loading_img"></div></div>')
}
//ɾ�����ֲ�
function del_layer(){
  $("#alert_layer").remove();
}

//ҳ�����ģ��
$(function(){
  $('div.shareModule span').on("click",function(){
    var ua = navigator.userAgent.toLowerCase();
    var is_weixn = (ua.match(/MicroMessenger/i)=="micromessenger") ? 1 : 0;
    if(is_weixn){
      fJson.weixin()
    }else{
      var tmpClass = $(this).attr('class');
      fJson[tmpClass]();
    }
  });
  $('#closeSpecHtml').click(function(){
        $('#specHtml').hide();
        if ($('#return_top').length>0) {
            $('#return_top').show();
        }
        if ( $('#fixedShopCar').length>0) {
            $('#fixedShopCar').show();
        }
        if ($('#fixed_nav_but').length>0) {
            $('#fixed_nav_but').show();
        }
        var buyBtn = $('#inner_nowBuy'),
            addCat = $('#inner_addCat');
        //��Ʒ��ҳ����ť�Զ���
        buyBtn.html(define_pro_buy_text);
        addCat.html(define_pro_add_text);
        buyBtn.removeAttr("style");
        addCat.removeAttr("style");
        if ($('#footerMoneyContent').length>0) {
            $('#footerMoneyContent').hide();
        }
        $('#serverProductBtn').show();
  });
})

 // ����ʱ���� 
wsf.countDown = function(j) {
    var r = function(t) {
            var a = t.split(' '),
                ymd = a[0],
                hms = a[1],
                str = ymd.split('-'),
                fix = hms.split(':'),
                year = str[0] - 0,
                month = str[1] - 0 - 1,
                day = str[2] - 0,
                hour = fix[0] - 0,
                minute = fix[1] - 0,
                second = fix[2] - 0,
                time = (new Date(year, month, day, hour, minute, second)).getTime();
            return parseInt(time / 1000);
        },
        o = j.o,
        st = r(j.st),
        et = r(j.et),
        nts = j.nt ? r(j.nt) : (new Date().getTime() / 1000),
        n_underway = function() {
            var y, m, d, h, mi, s, now = nts,
                c = et - now,
                html_;
            nts = nts + 1;
            if (c > 0) {
                d = Math.floor(c / (60 * 60 * 24));
                h = Math.floor((c - d * 24 * 60 * 60) / 3600);
                mi = Math.floor((c - d * 24 * 60 * 60 - h * 3600) / 60);
                s = Math.floor(c - d * 24 * 60 * 60 - h * 3600 - mi * 60);
                h = h < 10 ? '0' + h : h;
                mi = mi < 10 ? '0' + mi : mi;
                s = s < 10 ? '0' + s : s;
                html_ = '<span class="count-time"><i>' + d + '</i><em>��</em><i>' + h + '</i><em>ʱ</em><i>' + mi + '</i><em>��</em><i>' + s + '</i><em>��</em></span>';
                o.html(html_);
                setTimeout(function() {
                    n_underway();
                }, 1000);
            } else {
                typeof j.efun == 'function' && j.efun();
                // o.html('��Ѿ�������');
            }
        },
        b_underway = function() {
            var y, m, d, h, mi, s, now = nts,
                c = st - now,
                html_;
            nts = nts + 1;
            if (c > 0) {
                d = Math.floor(c / (60 * 60 * 24));
                h = Math.floor((c - d * 24 * 60 * 60) / 3600);
                mi = Math.floor((c - d * 24 * 60 * 60 - h * 3600) / 60);
                s = Math.floor(c - d * 24 * 60 * 60 - h * 3600 - mi * 60);
                h = h < 10 ? '0' + h : h;
                mi = mi < 10 ? '0' + mi : mi;
                s = s < 10 ? '0' + s : s;
                html_ = '<span class="count-time"><i>' + d + '</i><em>��</em><i>' + h + '</i><em>ʱ</em><i>' + mi + '</i><em>��</em><i>' + s + '</i><em>��</em></span>';
                o.html(html_);
                setTimeout(function() {
                    b_underway();
                }, 1000);
            } else {
                n_underway();
                typeof j.nfun == 'function' && j.nfun();
            }
        };
    // �ж�״̬
    if ((st - nts) > 0) {
        typeof j.sfun == 'function' && j.sfun();
        b_underway();
    } else if ((nts - et) > 0) {
        typeof j.efun == 'function' && j.efun();
        // o.html('��Ѿ�������');
    } else {
        n_underway();
        typeof j.nfun == 'function' && j.nfun();
    }
};

//ʱ���
function UTCTimeDemo(){
	   var now = new Date().getTime();
	   var datestr=escape(now*1000+Math.round(Math.random()*1000));
	   return datestr;
}
var moduleMoveFun = function(t){
    var t_id = t.obj;           // ��������
    var _time = t._time;        // �����ٶ� 1-4 ��-��
    var s_way = t.s_way;        // ������ʽ 1��������� 2��������� 3: �������һ���
    var s_type = t.s_type;      // �������� 1��������� 2����������
    var li_x = t.li_x;          // ÿ����ʾ����
    var li_y = t.li_y;          // ��ʾ����
    var list_length = t.list_length;    // չʾͼƬ����
    var num = t.num;            // ��ʼֵ 0
    // var win_w = $(".exhibition_map").parent().width();
    var win_w = t_id.width();
    var demo_c = t_id.find(".exhibition_demo");
    var set_time = "";
    var touch_s = "",touch_m = "",touch_e = "";
    var xy = li_x * li_y;
    // var List_num = t_id.find(".demo1 li").length;
    var li_w = Math.ceil(win_w/li_x);
    demo_c.find("li .pic").css({"height":li_w-10,"line-height":li_w-14+'px'});
    var li_h = demo_c.find("li").outerHeight(),
        ceil_x = Math.ceil(list_length/li_y),
        ceil_y = Math.ceil(list_length/li_x);
        // ceil_x = Math.ceil(list_length/li_y),
        // ceil_y = Math.ceil(list_length/li_x);
    // �����ٶ�
    if(s_type == 1){
        switch(_time) {
            case 1:
                _time = 1000;
                break;
            case 2:
                _time = 2000;
                break;
            case 3:
                _time = 3000;
                break;
            case 4:
                _time = 4000;
                break;
        }
    }else{
        switch(_time) {
            case 1:
                _time = 10;
                break;
            case 2:
                _time = 20;
                break;
            case 3:
                _time = 30;
                break;
            case 4:
                _time = 40;
                break;
        }
    }

    // ��ӹ���
    function add_scroll(){
        if(s_way == 1){
            if(s_type == 1){
                num += li_w;
                t_id.animate({"scrollLeft":num});
            }else{
                num += 1;
                t_id.scrollLeft(num);
            }
        }else{
            if(s_type == 1){
                num += li_h;
                t_id.animate({"scrollTop":num});
            }else{
                num += 1;
                t_id.scrollTop(num);
            }
        }
    }
    function scroll_set(scrollL){
        var WorH = "",scroll_type = "",scroll_val = "";
        switch(s_way) {
            case 1:
                scroll_type = t_id.scrollLeft();
                WorH = t_id.find("ul").outerWidth();
                t_id.find("ul").css("float","left");
                break;
            case 2:
                scroll_type = t_id.scrollTop();
                WorH = t_id.find("ul").outerHeight();
                t_id.find("ul").css("float","none");
                break;
            case 3:
                /*WorH = t_id.find("ul").outerWidth();
                t_id.find("ul").css("float","left");*/
                break;
        }
        if(s_way == 1 || s_way == 2){
            if(scroll_type >= WorH){
                if(s_way == 1){
                    num = 0;
                    t_id.scrollLeft(num);
                }else{
                    num = 0;
                    t_id.scrollTop(num);
                }
                t_id.find("ul:first").insertAfter(t_id.find("ul:last"));
                add_scroll();
            }else{
                add_scroll();
            }
        }else{
            /*if(touch_s > touch_e){
                if(t_id.scrollLeft() >= WorH){
                    t_id.scrollLeft(t_id.scrollLeft()-WorH);
                }
                num = t_id.scrollLeft() + t_id.width();
            }else if(touch_s < touch_e){
                if(t_id.scrollLeft() <= 0){
                    t_id.scrollLeft(t_id.scrollLeft()+WorH);
                }
                num = t_id.scrollLeft() - t_id.width();
            }
            t_id.animate({"scrollLeft":num},function(){
                if(touch_s > touch_e && num >= WorH){
                    t_id.scrollLeft(t_id.scrollLeft()-WorH);
                }else if(touch_s < touch_e && num <= 0){
                    t_id.scrollLeft(t_id.scrollLeft()+WorH);
                }
            });*/
            if(touch_s > touch_e){
                // num = t_id.scrollLeft() + t_id.width();
                num = scrollL + t_id.width();
                t_id.siblings(".touch_dot").children(".cur").next().addClass("cur").siblings().removeClass("cur");
            }else if(touch_s < touch_e){
                num = scrollL - t_id.width();
                // num = t_id.scrollLeft() - t_id.width();
                t_id.siblings(".touch_dot").children(".cur").prev().addClass("cur").siblings().removeClass("cur");
            }
            // console.log(num);
            t_id.animate({"scrollLeft":num});
            // t_id.css("overflow","hidden");
        }
    }
    if(s_way == 1 || s_way == 2){
        set_time = setInterval(scroll_set,_time);
        t_id.hover(function(){
            clearInterval(set_time);
        },function(){
            set_time = setInterval(scroll_set,_time);
        })
    }else{
        var sc_l;
        t_id.on("touchstart",function(e){
            sc_l = t_id.scrollLeft();
            t_id.css("overflow","auto");
            var _touch = e.originalEvent.targetTouches[0];
            var _x = _touch.pageX;
            touch_s = _x;
        })
        /*t_id.on("touchmove",function(e){
            e.preventDefault();
            // e.stopPropagation();
        })*/
        t_id.on("touchend",function(e){
            t_id.css("overflow","hidden");
            var _touch = e.originalEvent.changedTouches[0];
            var _x = _touch.pageX;
            touch_e = _x;
            scroll_set(sc_l);
        })
    }
    if(s_way == 1){
        if(xy >= list_length){
            demo_c.find("ul").width(li_w * li_x);
            demo_c.css("width",win_w*2);
        }else{
            demo_c.find("ul").width(li_w * ceil_x);
            demo_c.css("width",demo_c.find("ul").width() * 2);
        }
    }else if(s_way == 2){
        demo_c.find("ul").width(li_w * li_x);
        demo_c.css("width",win_w);
        if(xy >= list_length){
            demo_c.height((li_h * li_y) * 2);
            demo_c.find("ul").height(li_h * li_y);
            t_id.css("height",li_h * li_y);
        }else{
            demo_c.height((li_h * ceil_y) * 2);
            demo_c.find("ul").height(li_h * ceil_y);
            t_id.css("height",li_h * li_y);
        }
    }else{
        /*if(xy >= list_length){
            demo_c.find("ul").width(li_w * li_x);
            demo_c.css("width",win_w*2);
        }else{
            demo_c.find("ul").width(li_w * ceil_x);
            demo_c.css("width",demo_c.find("ul").width() * 2);
        }*/
        var dot = "";
        if(xy >= list_length){
            demo_c.find("ul").width(li_w * ceil_x);
            demo_c.css("width",win_w);
            dot += '<em class="cur"></em>';
        }else{
            var i = 1;
            var dotNum = Math.ceil(ceil_x / li_x);
            var demo_c_w = win_w * dotNum;
            demo_c.find("ul").width(li_w * ceil_x);
            demo_c.css("width",demo_c_w);
            for(i;i<=dotNum;i++){
                if(i == 1){
                    dot += '<em class="cur"></em>';
                }else{
                    dot += '<em></em>';
                }
            }
        }
        t_id.parent().append('<div class="touch_dot">'+dot+'</div>');
    }
    demo_c.find("li").width(li_w);
    demo_c.find(".demo2").html(demo_c.find(".demo1").html());
    if(s_way == 1 || s_way == 2){
        demo_c.find(".demo2").show();
        demo_c.find(".demo2").html(demo_c.find(".demo1").html());
    }else{
        demo_c.find(".demo2").hide();
    }

    // �������־�����ʾ
    demo_c.find("li.img_c").each(function(){
        var t = $(this);
        var P_height = t.find(".text_list_bk").height();
        t.find(".text_list_bk").css("margin-top",-P_height/2);
    })
}

//���޹���
wsf.userLike = function(recordId, type, objectId, style, operate, user_name, part, html) {
    //û�е�¼ͨ��cookie��֤�Ƿ����
    var zz_userid = readCookie('zz_userid');
    if (!zz_userid && operate == 'like') {
        var userLikeRecord = readCookie('user_like_record');
        var tmpStr = type + '*' + recordId;
        //���޹�
        if (userLikeRecord.indexOf(tmpStr) != -1) {
            alert_frame('���޹�');
            return false;
        }

        //ÿ������100��
        var tmpArr = userLikeRecord.split('#');
        if (tmpArr.length >= 100) {
            alert_frame('ÿ��������100��');
            return false;
        }
    }
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'Public/UserOperate.php',
        data: {
            username: user_name,
            rid: recordId,
            opt: operate,
            type: type,
            part: part,
            t: Date.parse(new Date())
        },
        success: function(data) {
            if (data.errorcode > 0) {
                alert_frame(data.errormsg);
            } else {
                var obj = $("#" + objectId);
                if(html){
                    obj.html(html.replace('{n}', data.num));
                }else{
                    if (operate == 'browse') {
                        obj.html(data.num+'�Ķ�');
                    } else {
                        obj.html(data.errormsg);
                    }
                }
                
                var styleArr = style.split('#');
                
                if (operate == 'like' || data.liked) 
                {
                    obj.data('opt', "unLike");
                    obj.removeClass(styleArr[0]);
                    obj.addClass(styleArr[1]);
                    if(operate == 'like') alert_frame('���޳ɹ�');
                } 
                else if (operate == 'unLike') 
                {
                    obj.data('opt', "like");
                    obj.removeClass(styleArr[1]);
                    obj.addClass(styleArr[0]);
                    alert_frame('ȡ���ɹ�');
                }
            }
        }
    });
};
