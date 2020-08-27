console.log(MUI);
//rem폰트설정
MUI.resize.font();

$(function(){

    /*전역 변수*/
    var $BODY = $('body'),
        TOUCH_CLICK = ('ontouchstart' in window) ? 'touchstart' : 'click',
        LAYER_PARENT = '.layer-wrap',
        LAYER_DIM = '.bg-dimmed';
    
    //호스트환경 체크
    MUI.resize.chk($BODY);

    //리사이즈시 rem폰트설정, 호스트환경 체크
    MUI.resize.resize($BODY);

    //상단네비 엑티브시 센터
    MUI.event.navCenter($('.header-nav'), 'active');

    //후터하단 슬라이드팝업 테스트 1
    MUI.layer.openClick('#layer-open1', LAYER_DIM, LAYER_PARENT, function(show){
        console.log('open');
        show();
    });
    MUI.layer.closeClick('.layer-slide-close', LAYER_DIM, LAYER_PARENT, function(hide){
        console.log('close');
        hide();
    });

    MUI.layer.closeClick(LAYER_DIM, LAYER_DIM, LAYER_PARENT, function(hide){
        console.log('close');
        hide();
    });

    //bg-dimmed 클릭시 열린 레이어 들 닫기
 
    

    //하단 퀵메뉴 모션
    MUI.event.fixedBottom($('.fixedBottom'));
});