$(function(){


    var footer = `
        <!--footer 컴포넌트-->
        <footer class="footer">
            <div class="inner">
                푸터영역
            </div>
        </footer>
        <!--//footer 컴포넌트-->

        <!--bg-dimmed 컴포넌트-->
        <div class="bg-dimmed">딤(Dim)처리 배경</div>
        <!--//bg-dimmed 컴포넌트-->

        <!--drawer 컴포넌트-->
        <div class="drawer">
            <button type="button" class="btn-drawer-close"  data-target="drawer" data-on="true" data-sort="none">레이어닫기</button>
            <br/>
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

    $(".footer").html(footer);
    $(".footer .footer").unwrap();

});