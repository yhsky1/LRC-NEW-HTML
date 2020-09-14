/*dom tree 생성이전 시점(프레임)*/


/*dom tree 생성이후 시점(프레임)*/
$(function(){

    /*전역 변수*/
    var $BODY = $('body'),
        TOUCH_CLICK = ('ontouchstart' in window) ? 'touchstart' : 'click',
        LAYER_PARENT = '.layer-wrap',
        LAYER_DIM = '.bg-dimmed';


/* 유틸start-------------------------------------------------*/
//전체동의 열고 닫기
if($('.chk-agree-list').length){
    MUI.event.toggle('.chk-agree-list .agree-toggle-btn', '.chk-agree-list .agree-toggle-cont', false, function(logic, layer) {
        console.log(layer);
        if($(".layer-login-iscroll").length){
            setTimeout(function(){
                MUI.layer.calculate('.layer-login');
                $(".layer-login-iscroll")[0].iscrolls.refresh();
            },500);
        }

        logic();
    });
}
/* -------------------------------------------------유틸end*/

/* 탭 전환start-------------------------------------------------*/
if($('.layer-login .tab-normal').length){
    MUI.event.taps('.layer-login .tab-normal', false, function(swap){
        if($(".layer-login-iscroll").length){
            setTimeout(function(){
                MUI.layer.calculate('.layer-login');
                $(".layer-login-iscroll")[0].iscrolls.refresh();
            },500);
        }

        swap();
    });
}
/* -------------------------------------------------탭 전환end*/

/* 레이어팝업start-------------------------------------------------*/
    //로그인 레이어팝업
    if($('.layer-login').length) {
        MUI.layer.openClick('.layer-login-open', LAYER_DIM, LAYER_PARENT, true, function(show){
            show();
        });
        MUI.layer.closeClick('.layer-login-close', LAYER_DIM, LAYER_PARENT, true, function(hide){
            console.log('close');
            hide();
        });
    }



    //bg-dimmed 클릭시 열린 레이어 들 닫기
    MUI.layer.closeClick(LAYER_DIM, LAYER_DIM, LAYER_PARENT, function(hide){
        //console.log('close');
        hide();
    });
/* -------------------------------------------------레이어팝업end*/


/* 로그인start-------------------------------------------------*/

/* -------------------------------------------------로그인end*/




});


/*브라우저 모든 resources 다운 완료시점(프레임)*/
$(window).on('load', function(){

/* 아이스크롤start-------------------------------------------------*/
if($(".layer-login-iscroll").length){
    $(".layer-login-iscroll")[0].iscrolls = new IScroll(".layer-login-iscroll", { 
        scrollbars: true,
        mouseWheel: true,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: true,
    });
    $(window).on("resize",function(){
        $(".layer-login-iscroll")[0].iscrolls.refresh();
    });
}

/* -------------------------------------------------아이스크롤end*/

});