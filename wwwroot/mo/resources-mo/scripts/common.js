console.log(MUI);

/*dom tree 생성이전 시점(프레임)*/
//rem폰트설정
MUI.resize.font();

/*dom tree 생성이후 시점(프레임)*/
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

    //해더 상단네비 엑티브시 센터
    if($('.header-nav').length) { MUI.event.navCenter($('.header-nav'), 'active'); }

    //견적 상단네비 엑티브시 센터
    if($('.estimate-wrap .section-nav').length) { MUI.event.navCenter($('.estimate-wrap .section-nav'), 'active'); }


    //필터 슬라이드 팝업
    if($('.layer-filter').length) {
        MUI.layer.openClick('.layer-filter-open', LAYER_DIM, LAYER_PARENT, function(show){
            //console.log('open');
            show();
        });

        //필터 슬라이드 내 슬라이드
        $('#slider-price').slider({
            range: true,
            min: 0,							// 최저
            max: 80,						// 최고
            orientation: 'horizontal',		// 바타입 수평
            step: 20,						// 스텝
            values: [0, 80],				// 디폴트 값
            start: function(event, ui) {	// start
            },
            slide: function(event, ui) {	// mouse movement
            },
            stop: function(event, ui) {		// stop
            },
            change: function(event, ui) {
                var min = 10 <= ui.values[0] && ui.values[0] <= 60 ? ui.values[0] + 10 : ui.values[0],
                    max = 10 <= ui.values[1] && ui.values[1] <= 60 ? ui.values[1] + 10 : ui.values[1];

                // update form fields
                $('#min_slider_price').val(min);
                $('#max_slider_price').val(max);

            }
        });

        $('.price-all').on('click', function(e) {
			$('#slider-price').slider('values', [0, 80]);
		});
    
    }

    //프로모션 슬라이드 팝업
    if($('.layer-promotion').length) {
        MUI.layer.openClick('.layer-promotion-open', LAYER_DIM, LAYER_PARENT, function(show){
            //console.log('open');
            show();
        });
        
    }

    //슬라이드 팝업 공통 닫기
    if($('.layer-slide').length) {
        MUI.layer.closeClick('.layer-slide-close', LAYER_DIM, LAYER_PARENT, function(hide){
            //console.log('close');
            hide();
        });
    }

    //일반 레이어팝업 테스트
    MUI.layer.openClick('#layer-open2', LAYER_DIM, LAYER_PARENT, function(show){
        console.log('open');
        show();
    });
    MUI.layer.closeClick('#layer-close2', LAYER_DIM, LAYER_PARENT, function(hide){
        console.log('close');
        hide();
    });

    //bg-dimmed 클릭시 열린 레이어 들 닫기
    MUI.layer.closeClick(LAYER_DIM, LAYER_DIM, LAYER_PARENT, function(hide){
        //console.log('close');
        hide();
    });

    //drawer버튼 열기
    MUI.event.toggle('.btn-drawer', null, function(logic, layer) {
        $BODY.addClass("fixed");
        $('.btn-drawer-close').addClass('on');
        logic();
    });

    //drawer버튼 닫기
    MUI.event.toggle('.btn-drawer-close', null, function(logic, layer) {
        $BODY.removeClass("fixed");
        $('.btn-drawer').removeClass('on');
        logic();
    });



    /*----  슬라이더  ----*/
    //견적 상단 슬리이더
    MUI.slide.init('.detail-view-list','swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    

    //하단 퀵메뉴 모션
    if($('.fixedBottom').length) { MUI.event.fixedBottom($('.fixedBottom')); }




    //메이슨리 테스트--동적테이블
    var content =
        '<div class="grid-item">'
            +'<img src="https://images.unsplash.com/photo-1552584010-ca8bbbd5bd18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ" alt="">'
            +'<span>1</span>'
        +'</div>'
        +'<div class="grid-item">'
            +'<img src="https://images.unsplash.com/photo-1552644867-3c98a63f38eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ" alt="">'
            +'<span>2</span>'
        +'</div>'
        +'<div class="grid-item">'
            +'<img src="https://images.unsplash.com/photo-1552620543-31d952829801?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ" alt="">'
            +'<span>3</span>'
        +'</div>'
        +'<div class="grid-item">'
            +'<img src="https://images.unsplash.com/photo-1552602989-715150494024?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ" alt="">'
            +'<span>4</span>'
        +'</div>'
        ;

        $('.list-more').on('click', function(){
            console.log('리스트 추가');
            var $content = $( content );
            // add jQuery object
            $('.grid').append( $content ).masonry( 'appended', $content );
        });


    /*브라우저 모든 resources 다운 완료시점(프레임)*/
    $(window).on('load', function(){

        /*
        //Masonry 테스트1
        MUI.Masonry.init($('.grid'), {
            // options
            //horizontalOrder: true,
            itemSelector: '.grid-item',
            fitwidth: true,
            
        });
        */

    });

});
