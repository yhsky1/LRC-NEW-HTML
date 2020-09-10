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

    //서브네비 엑티브시 센터
    if($('.section-nav').length) { MUI.event.navCenter($('.section-nav'), 'active'); }
    
    //textarea 자동높이 조절
    if($('.textarea.auto-height').length){
        autosize($('.textarea.auto-height textarea'));
    }

    //전체동의 열고 닫기
    if($('.chk-agree-list').length){
        MUI.event.toggle('.chk-agree-list .agree-toggle-btn', '.chk-agree-list .agree-toggle-cont', false, function(logic, layer) {
            //console.log('toggle');
            logic();
        });
    }

    //gotop
    if($('.fixedRight .btn-goTop').length){
        MUI.event.goTop($('.fixedRight .btn-goTop'));
        MUI.event.topScrollCh($('.fixedRight'));
        $(window).on('scroll', function(){
            MUI.event.topScrollCh($('.fixedRight'));
        });
    }

    //차트그리기
    if($('.pie-chart').length){
        $('.pie-chart').easyPieChart({
            size:80,
            lineWidth: 7,
            barColor:'#F04040',
            trackColor:'#EBEBEB',
            scaleColor:false,
			onStep: function(from, to, percent) {
                $(this.el).find('.percent span').text(Math.round(percent));
			}
		});
    }

    /* 레이어팝업-------------------------------------------------*/

    //제휴카드 혜택안내 풀팝업
    if($('.layer-cards').length) {
        MUI.layer.openClick('.layer-cards-open', LAYER_DIM, LAYER_PARENT, function(show){
            //console.log('open');
            show();

            if($('.layer-cards .swiper-slide').length === 1) {
                $('.layer-cards .swiper-button-prev').hide();
                $('.layer-cards .swiper-button-next').hide();
                return;
            }

            MUI.slide.init('.layer-cards .cards-lists','swiper', {
                loop: true,
                //autoHeight: true,
                pagination: {
                    el: '.layer-cards .swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                nextEl: '.layer-cards .swiper-button-next',
                prevEl: '.layer-cards .swiper-button-prev',
                },
            });
        });
    }

    //운전면허 정보안내 풀팝업
    if($('.layer-license').length) {
        MUI.layer.openClick('.layer-license-open', LAYER_DIM, LAYER_PARENT, function(show){
            //console.log('open');
            show();
        });
    }

    //주소찾기 풀팝업
    if($('.layer-address').length) {
        MUI.layer.openClick('.layer-address-open', LAYER_DIM, LAYER_PARENT, function(show){
            //console.log('open');
            show();
        });
    }

    //게시글작성 풀팝업
    if($('.layer-write').length) {
        MUI.layer.openClick('.layer-write-open', LAYER_DIM, LAYER_PARENT, function(show){
            //console.log('open');
            show();
        });
    }

    //본인인증 슬라이드 팝업
    if($('.layer-certification').length) {
        MUI.layer.openClick('.layer-certification-open', LAYER_DIM, LAYER_PARENT, function(show){
            //console.log('open');
            show();
        });
    }

    //필터 슬라이드 팝업
    if($('.layer-filter').length) {
        MUI.layer.openClick('.layer-filter-open', LAYER_DIM, LAYER_PARENT, function(show){
            //alert('open');
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
                var min = ui.values[0],
                    max = ui.values[1];

                    console.log(ui, min, max);
                // update form fields
                $('#min_slider_price').val(min);
                $('#max_slider_price').val(max);

                $('.layer-filter .price-txt span').each(function(idx, item){
                    var text = $(item).text(),
                        minTxt = min === 0 ? min + '원' : min + '만원',
                        maxTxt = max + '만원',
                        minRegex = RegExp(minTxt),
                        maxRegex = RegExp(maxTxt);
                    if(minRegex.test(text) || maxRegex.test(text)) {
                        $(item).addClass('active');
                    }
                    else{
                        $(item).removeClass('active');
                    }
                });

            }
        });

        $('.layer-filter .price-all').on('click', function(e) {
			$('#slider-price').slider('values', [0, 80]);
        });
        $('.layer-filter .filter-reset-btn').on('click', function(e) {
            $('#slider-price').slider('values', [0, 80]);
            $('.layer-filter input').prop('checked', false);
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
    if($('.layer-full').length) {
        MUI.layer.closeClick('.layer-full-close', LAYER_DIM, LAYER_PARENT, function(hide){
            //console.log('close');
            hide();
        });
    }

    //로그인 레이어팝업
    if($('.login-wrap').length) {
        MUI.layer.openClick('.layer-login-open', LAYER_DIM, LAYER_PARENT, function(show){
            $('.drawer').removeClass('active');
            $('.btn-drawer').removeClass('active');
            show();
        });
        MUI.layer.closeClick('.layer-login-close', LAYER_DIM, LAYER_PARENT, function(hide){
            console.log('close');
            hide();
        });
    }

    //bg-dimmed 클릭시 열린 레이어 들 닫기
    MUI.layer.closeClick(LAYER_DIM, LAYER_DIM, LAYER_PARENT, function(hide){
        //console.log('close');
        hide();
    });

    //drawer버튼 열기
    MUI.event.toggle('.btn-drawer', null, true, function(logic, layer) {
        console.log(11);
        $BODY.addClass("fixed");
        $('.btn-drawer-close').addClass('active');
        logic();
    });

    //drawer버튼 닫기
    MUI.event.toggle('.btn-drawer-close', null, true, function(logic, layer) {
        $BODY.removeClass("fixed");
        $('.btn-drawer').removeClass('active');
        logic();
        $('.drawer').scrollTop(0);
    });


/* 견적start-------------------------------------------------*/
    //견적 상단 슬리이더
    if($('.estimate-wrap .detail-view-list').length) {
        MUI.slide.init('.estimate-wrap .detail-view-list','swiper', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }

    //견적 detail-layer-top 스크롤 체크
    if($('.estimate-wrap .detail-layer-top').length) {
        var $target = $('.estimate-wrap .detail-layer-top');
        $(window).on('scroll', function(){
            var winTop = $(window).scrollTop(),
                topHeight = $target.height(),
                targetTop = $target.offset().top;
            //console.log(winTop,topHeight,targetTop);
            if(winTop >= (targetTop + topHeight/2)) {
                $target.addClass('sticky');
            }
            else{
                $target.removeClass('sticky');
            }
        });
    }

    //견적 텝이동
    if($('.estimate-wrap .detail-layer-nav').length) {
        MUI.event.goTarget('.menu-link');

        $(window).on('scroll', function(){
            var scrollTop = $(this).scrollTop();
            MUI.event.scrollTaps(scrollTop, $('.estimate-wrap .layer-item'), $('.estimate-wrap .menu-link'));
        });
    }

    //견적 step1 라디오버튼 선택
    if($('.estimate-wrap .item-step1').length) {
        $('.estimate-wrap .item-step1').on('change', '.radio-box input', function(e){
            if(e.target.value === 'E'){
                $('.estimate-wrap .electric').addClass('active');
            }
            else{
                $('.estimate-wrap .electric').removeClass('active');
            }
        });
    }

    //견적 step2 모델 선택
    if($('.estimate-wrap .item-step2').length) {
        MUI.event.toggle('.item-step2 .model-toggle-btn', '.item-step2 .model-toggle-cont', false, function(logic, layer) {
            //console.log('toggle');
            $('.estimate-wrap .item-step2 input').prop('checked', false);
            logic();
        });
    }

    //견적 step6 계약조건 선택
    if($('.estimate-wrap .item-step6').length) {
        MUI.event.toggle('.item-step6 .model-toggle-btn', '.item-step6 .model-toggle-cont', true, function(logic, layer) {
            //console.log('toggle');
            logic();
        });
    }
    //견적 기본정보 토글
    if($('.summary-table-wrap .summary-toggle-btn').length) {
        MUI.event.toggle('.summary-table-wrap .summary-toggle-btn', '.summary-table-wrap .summary-toggle-cont', true, function(logic, layer) {
            logic();
        });
    }
/* -------------------------------------------------견적end*/



/* 기획전start-------------------------------------------------*/
    //기획전 상단 슬리이더
    if($('.exhibition-wrap .exhibition-view-list').length) {
        MUI.slide.init($('.exhibition-wrap .exhibition-view-list'), 'slick', {
				slidesToScroll: 1, 
				infinite: false,
				autoplay: false,
                arrows: false,
                slidesToShow: 1,
                centerMode: true,
                variableWidth: true,
                dots: true,

        });
    }

    //기획전 스틱키
    if($('.exhibition-wrap .exhibition-sticky').length) {
        var $target = $('.exhibition-wrap .exhibition-sticky'),
            targetTop = $('.exhibition-wrap .exhibition-list-wrap').offset().top;
        $(window).on('scroll', function(){
            var winTop = $(window).scrollTop();
            if(winTop >= targetTop) {
                $target.addClass('sticky');
            }
            else{
                $target.removeClass('sticky');
            }
        });
    }


/* -------------------------------------------------기획전end*/


    //로그인 견적화면 메뉴 라디오버튼 선택
    if($('.login-wrap .menu-radio-box').length) {
        $('.login-wrap .menu-radio-box').on('change', '.radio-box input', function(e){
            if(e.target.value === 'N'){
                $('.login-wrap .detail-layer-normal').addClass('active');
            }
            else{
                $('.login-wrap .detail-layer-normal').removeClass('active');
            }
        });
        $('.login-wrap .menu-radio-box').on('change', '.radio-box input', function(e){
            if(e.target.value === 'I'){
                $('.login-wrap .detail-layer-integrated').addClass('active');
            }
            else{
                $('.login-wrap .detail-layer-integrated').removeClass('active');
            }
        });
    }

    //로그인 견적화면 메뉴 토글
    if($('.login-wrap .detail-layer-integrated').length) {
        MUI.event.toggle('.detail-layer-integrated .model-toggle-btn', '.detail-layer-integrated .model-toggle-cont', false, function(logic, layer) {
            //console.log('toggle');
            $('.login-wrap .detail-layer-integrated input').prop('checked', false);
            logic();
        });
    }

    //계약화면 메뉴 라디오버튼 선택
    if($('.contract-wrap .menu-radio-box').length) {
        $('.contract-wrap .menu-radio-box').on('change', '.radio-box input', function(e){
            if(e.target.value === 'N'){
                $('.contract-wrap .detail-layer-normal').addClass('active');
            }
            else{
                $('.contract-wrap .detail-layer-normal').removeClass('active');
            }
        });
        $('.contract-wrap .menu-radio-box').on('change', '.radio-box input', function(e){
            if(e.target.value === 'I'){
                $('.contract-wrap .detail-layer-integrated').addClass('active');
            }
            else{
                $('.contract-wrap .detail-layer-integrated').removeClass('active');
            }
        });
    }
    
    
    //하단 퀵메뉴 모션
    if($('.fixedBottom').length) { MUI.event.fixedBottom($('.fixedBottom')); }




    //일반 레이어팝업 테스트 ---추후삭제
    MUI.layer.openClick('#layer-open2', LAYER_DIM, LAYER_PARENT, function(show){
        console.log('open');
        show();
    });
    MUI.layer.closeClick('#layer-close2', LAYER_DIM, LAYER_PARENT, function(hide){
        console.log('close');
        hide();
    });

    //메이슨리 테스트--동적테이블 ---추후삭제
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
