/** 20181103 ��������������ڸı���ı�λ�� */
    var agent = navigator.userAgent;
    var isIE7 = agent.indexOf('MSIE 7.0') != -1;
    var isIE8 = agent.indexOf('MSIE 8.0') != -1;
    //��ΪIE7��8ȡ�õ�topֵ�������������ͬ���ݲ�֧��IE7��8
    if(!isIE7 && !isIE8){
        /** 20181103 �����������������ƶ� start */
        if (/.*Firefox.*/.test(agent)) {
            document.addEventListener("DOMMouseScroll", function(e) {
                e = e || window.event;
                var detail = e.detail;//�ж������ַ���
                var top = 0;//����ʵʱtop
                //�ж��Ƿ���ڵ���
                if($('.m-lion-dialog').length > 0){
                    top = parseFloat($('.m-lion-dialog').css('top'));
                    if (detail > 0) {
                        // console.log("������¹���");
                        if(top>-250){
                            $(".m-lion-dialog").css("top", top-10);
                        }
                    } else {
                        // console.log("������Ϲ���");
                        if(top<450){
                            $(".m-lion-dialog").css("top", top+10);
                        }
                    }
                }
            });
        } else {
            document.onmousewheel = function(e) {
                e = e || window.event;
                var wheelDelta = e.wheelDelta;//�ж������ַ���
                var top = 0;//����ʵʱtop
                //�ж��Ƿ���ڵ���
                if($('.m-lion-dialog').length > 0){
                    top = parseFloat($('.m-lion-dialog').css('top'));
                    if (wheelDelta > 0) {
                        // console.log("������Ϲ���");
                        if(top<450){
                            $(".m-lion-dialog").css("top", top+10);
                        }
                    } else {
                        // console.log("������¹���");
                        if(top>-250){
                            $(".m-lion-dialog").css("top", top-10);
                        }
                    }
                }
            }
        }
        /** 20181103 �����������������ƶ� end */
        /** 20181103 ����������϶������������ƶ� start */
        var p=0,t=0;  
        $(window).scroll(function(e){
            p = $(this).scrollTop();  
            var top = 0;//����ʵʱtop
            if($('.m-lion-dialog').length > 0){
                top = parseFloat($('.m-lion-dialog').css('top'));
                if(t<=p){
                    // console.log("��������϶�");
                    if(top>-250){
                        $(".m-lion-dialog").css("top", top-10);
                    }
                }else{
                    // console.log("��������϶�");
                    if(top<450){
                        $(".m-lion-dialog").css("top", top+10);
                    }
                }  
                setTimeout(function(){t = p;},0);
            }
        }); 
        /** 20181103 ����������϶������������ƶ� end */
    }