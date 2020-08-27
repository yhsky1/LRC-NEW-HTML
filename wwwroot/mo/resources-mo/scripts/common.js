console.log(MUI);
//rem폰트설정
MUI.resize.font();

$(function(){

    /*전역 변수*/
    var $BODY = $('body');
    
    //호스트환경 체크
    MUI.resize.chk($BODY);

    //리사이즈시 rem폰트설정, 호스트환경 체크
    MUI.resize.resize($BODY);

    //상단네비 엑티브시 센터
    MUI.event.navCenter($('.header-nav'), 'active');
    

    //하단 퀵메뉴 모션
    MUI.event.fixedBottom($('.fixedBottom'));
});