/** 20181103 弹窗随浏览器窗口改变而改变位置 */
    var agent = navigator.userAgent;
    var isIE7 = agent.indexOf('MSIE 7.0') != -1;
    var isIE8 = agent.indexOf('MSIE 8.0') != -1;
    //因为IE7、8取得的top值与其他浏览器不同，暂不支持IE7、8
    if(!isIE7 && !isIE8){
        /** 20181103 弹窗随鼠标滚动上下移动 start */
        if (/.*Firefox.*/.test(agent)) {
            document.addEventListener("DOMMouseScroll", function(e) {
                e = e || window.event;
                var detail = e.detail;//判断鼠标滚轮方向
                var top = 0;//弹窗实时top
                //判断是否存在弹窗
                if($('.m-lion-dialog').length > 0){
                    top = parseFloat($('.m-lion-dialog').css('top'));
                    if (detail > 0) {
                        // console.log("鼠标向下滚动");
                        if(top>-250){
                            $(".m-lion-dialog").css("top", top-10);
                        }
                    } else {
                        // console.log("鼠标向上滚动");
                        if(top<450){
                            $(".m-lion-dialog").css("top", top+10);
                        }
                    }
                }
            });
        } else {
            document.onmousewheel = function(e) {
                e = e || window.event;
                var wheelDelta = e.wheelDelta;//判断鼠标滚轮方向
                var top = 0;//弹窗实时top
                //判断是否存在弹窗
                if($('.m-lion-dialog').length > 0){
                    top = parseFloat($('.m-lion-dialog').css('top'));
                    if (wheelDelta > 0) {
                        // console.log("鼠标向上滚动");
                        if(top<450){
                            $(".m-lion-dialog").css("top", top+10);
                        }
                    } else {
                        // console.log("鼠标向下滚动");
                        if(top>-250){
                            $(".m-lion-dialog").css("top", top-10);
                        }
                    }
                }
            }
        }
        /** 20181103 弹窗随鼠标滚动上下移动 end */
        /** 20181103 弹窗随鼠标拖动滚动条上下移动 start */
        var p=0,t=0;  
        $(window).scroll(function(e){
            p = $(this).scrollTop();  
            var top = 0;//弹窗实时top
            if($('.m-lion-dialog').length > 0){
                top = parseFloat($('.m-lion-dialog').css('top'));
                if(t<=p){
                    // console.log("鼠标向下拖动");
                    if(top>-250){
                        $(".m-lion-dialog").css("top", top-10);
                    }
                }else{
                    // console.log("鼠标向上拖动");
                    if(top<450){
                        $(".m-lion-dialog").css("top", top+10);
                    }
                }  
                setTimeout(function(){t = p;},0);
            }
        }); 
        /** 20181103 弹窗随鼠标拖动滚动条上下移动 end */
    }