$(function(){


    var header = `
        <!--header 컴포넌트-->
        <header class="header">
            <div class="header-top">
                <h1><a href="#none">해더부분</a></h1>
                <button type="button" class="btn-drawer" >
                    <i class="icon">
                        <i class="line line-1"></i>
                        <i class="line line-2"></i>
                        <i class="line line-3"></i>
                    </i>
                </button>
            </div>
            <nav class="header-nav">
                <a href="#">홈</a>
                <a href="#">빠른출고</a>
                <a href="#">프로모션</a>
                <a href="#" class="active">특가모아보기</a>
                <a href="#">이벤트</a>
                <a href="#">고객후기</a>
                <a href="#">신차장TV</a>
            </nav>
        </header>
        <!--//header 컴포넌트-->
    `;

    var footer = `
        <!--footer 컴포넌트-->
        <footer class="footer">
            <div class="inner">
                푸터영역
            </div>
        </footer>
        <!--//footer 컴포넌트-->

        <!--drawer 컴포넌트-->
        <div class="drawer">
            전체메뉴 부분
        </div>
        <!--//drawer 컴포넌트-->

        <!--fixedBottom 컴포넌트-->
        <div class="fixedBottom">
            <button type="button" >CAR타르시스</button>
            <button type="button">기획전</button>
            <button type="button">견적</button>
            <button type="button">상담</button>
            <button type="button">마이페이지</button>
        </div>
        <!--//fixedBottom 컴포넌트-->
    `;

    $(".header").html(header);
    $(".header .header").unwrap();

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});