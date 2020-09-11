## gulp 설정

### ■ `전역에 gulp cli설치`
`npm i gulp-cli -g`

### ■ `gulp -v 응답이 없을시`
`Windows 로고 키 + X 키로 'Windows PowerShell(관리자)' 를 연다`<br />
스크립트 실행 권한이 제한된 상태일수 있으니<br />
파워쉘을 관리자 권한으로 실행해서 권한을 변경하면 해결할 수 있다. <br />
그 전에 아래 명령어를 실행하면 명령어에 해당하는 정보를 볼 수 있는데, 여기에서 어떤 권한을 설정할 수 있는지 확인할 수 있다.

### ■ `C:\> get-help Set-ExecutionPolicy`
Restricted(제한된): 실행 권한 정책 기본 옵션, 명령어 하나씩 실행 가능. .ps1 스크립트 파일을 로드해 실행 불가능<br />
AllSigned: 신뢰된 배포자에 의해 서명된 스크립트만 실행 가능<br />
RemoteSigned: 로컬 컴퓨터에서 본인이 생성한 스크립트만 실행 가능 또는 인터넷에서 다운로드 받은 경우 신뢰된 배포자에 의해 서명된 것만 실행 가능<br />
Unrestricted: 제한 없이 모든 스크립트 실행 가능<br />
ByPass: 어떤 것도 차단하지 않고 경고 없이 실행 가능<br />
Undefined: 정책 적용 안함.<br />
이 중 원하는 권한을 골라서 적용하면 된다. 나는 그나마 안전할 것 같은 수준의 RemoteSigned로 설정했고, 명령어를 실행할 수 있었다. <br />
권한 변경은 관리자 권한으로 실행한 뒤 해줘야 가능하다!

### ■ `C:\> Set-ExecutionPolicy RemoteSigned`

### ■ gulp 프로젝트 다운후 다운받은 경로에 `npm i` 패키지 설치

### ■ 다운받은 경로에 `gulp` 명령어로 구동시킴

### ■ gulp 패키지들
   - gulp-sass: sass를 CSS 로 변경
   - gulp-autoprefixer: 자동으로 CSS prefixer 생성
   - gulp-pxtorem: 자동으로 CSS rem 생성
   - browser-sync: CSS, HTML, JS 수정시 브라우저 자동 리플레쉬



## 프로젝트 설정

### `■ 기술환경정의`
1. 개발언어 : JSP
2. 인코딩 타입 : UTF-8
3. HTML, CSS TYPE
    - HTML5
    - SCSS, CSS2.1, CSS3
4. 제이쿼리 버전 : v1.9.1
5. 크로스브라우저 범위
    - IE11,edge, Firefox, Chrome 
    ※ round 및 shadow 효과 반영되지 않음. (IE8,9)
6. 모바일 대표디바이스
    - 대표 디바이스 설정 안되어 있음. 
    ※ 테블릿 화면 노출 정의 필요
7. 웹 접근성 준수 범위 : 준수
8. 해상도 
    컨텐츠 기본 넓이값 - 1080px
    ※ 양쪽 사이드바 1250px 이하시 display:none 처리

### `■ 네이밍 규칙`
1. 기본규칙
- a. 이름은 영문 소문자, 숫자, 하이픈(-), 언더스코어(_)로 작성
- b. 이름은 영문 소문자로만 시작
- c. 이름의 규칙은 형태 + 의미 + 상태(영역,확장 포함) 조합을 지향
- d. 하이픈(-) 및 언더스코어(_)는 단어와 단어 조합 또는 역할별 구분 시 사용

2. 이미지
- → 네이밍 규칙
     - ㄱ. 형태 + 의미 + 상태 순서로 조합
     - ㄴ. 2개 이상 이름이 중복 될 경우 구분 규정 (확장자 포함)
     - ㄷ. 더미(임시) 이미지 규정 (@temp~)
     - ㄹ. 형태+의미 같은 이미지 네이밍은 확장자 관계 없이 순차적으로 적용
     - ㅁ. 모바일의 경우 "m-" 벤더프릭스를 붙여 사용한다.
- → 예약어 사용
     : 각각의 목적에 맞는 형태로 기재하며, 예약어 사용시 멀티클래스로는 사용가능하나 다른 목적으로 사용하거나 독창적인 형태로 변형하여 사용하지 않는다.
     - ㄱ. ico-* / btn-* / bul-* / tab-* / txt-* / tit-* / tbl-*

3. CSS
- a. 아이디 : 고유 식별자로써 한 문서에서 동일한 ID를 중복 사용하지 않는다.
   - → 네이밍 규칙
      - ㄱ. 카멜케이스 사용여부
      - ㄴ. 아이디 사용방법 규정
      - ㄷ. 고유영역에 부여
   - → 예약어 사용
      - ㄱ. 레이아웃,폴더별,공통,팝업등 예약어
   - → 주사용 영역 : header,container,contents,footer 등

- b. 클래스 : 반복 사용되는 속성에 부여
   - → 네이밍 규칙
      - ㄱ. 영문소문자 및 숫자를 이용한 조합 규정
      - ㄴ. 언더스코어 및 하이픈 사용 규정 (단어 조합시 필요)
      - ㄷ. 보편적으로 이해 가능한 단어
      - ㄹ. 일반적으로 통용되는 용어 또는 이해할 수 있는 합성어
      - ㅁ. 긴단어는 5자 내외로 축약하여 사용
   - → 예약어 사용

### `■ CSS 규칙`
1. 기본 문법
- 문법오류는 아니지만 원활한 유지보수를 위하여 "charset" 을 선언합니다. `@charset "UTF-8"`;
- 주석은 두가지 분류로 나누어 사용하고 주석 스타일은 반드시 아래 예로만 사용합니다.

   `/* 영역단위`
   `-------------------------------------------------*/`
   #header {...}

   `/* 모듈단위 */`
   .roundbox {width: 200px;  height: 500px;background: #000;float: left;}

- 한글 폰트일 경우 한글명과 영문명을 표기해준다.(예:`Gulim/굴림`)

2. Hack
   - *+html .foo {height: 123px;} `/*ie7용*/`
   - .foo {height: 123px\0/IE8;} `/*ie8적용*/`
   - @media screen and (min-width:0\0){.foo {height: 123px;}} `/*ie9,10적용*/`

3. 폰트
   - 콘텐츠 폰트정의는 AS-IS 사이트를 기준으로 하며, 디자인 요소는 디자인팀 폰트 정의에 따른다.
   - 폰트정의시 Safe Font를 참조하여 정의한다.
   `.font-family: '맑은 고딕', 'Malgun Gothic', '굴림', 'Gulim';`

### `■ SCSS 폴더 정의`
1. contents: 메인, 각 서브 컨텐츠들
2. layout: 해더, 푸터, 레이아웃
3. modules: 공통으로 쓰이는 부분 (ex: 버튼, 슬라이더)
4. _common.scss  : 믹스인, 함수, 변수 정의

### `■ HTML 마크업 규칙`
1. 문서타입, 문서구조
- HEAD
   : 문서에 대한 정보, 즉 문서의 제목, 검색 엔진에 유용한 키워드, 문서 내용에 담기지 않은 다른 자료등을 포함한다.

    - a. 문서형 선언
         → 상호 운용성을 위하여 반드시 선언<br/>
    - b. 언어지정
         → 웹페이지에 주로 사용하는 언어를 lang 속성을 지정하여 명시<br/>
    - c. 문자셋(Charset) 지정
    - d. 파일경로
         → 로컬 브라우저와 다양한 OS에서 확인 가능하도록 "상대경로" 작업<br/>
    - e. Link & Script (html5인 경우 일부 속성 생략가능)
         → `<link rel="stylesheet" type="text/css" href="" />`<br/>
         → `<script type="text/javascript" src=""></script>`<br/>
    - f. Meta Tag (sns tag 포함)
         → 페이지별로 제공할지 의논필요 (description,keywords)<br/>
         →  Author, content, keywords, description<br/>
         ※ SEO를 위해 meta 지정은 필수이며, 접근성 차원에서 title은 반드시 제공해야한다. <br/>
    - g. title 정의
         → 접근성에 맞게 각 페이지별 title 제공 <br/>
    - h. 렌더링 모드 적용
         → <meta http-equiv="X-UA-Compatible" content="IE=edge"><br/>
         →  최신모드로 지정된 DOCTYPE에 상관없이 IE8 이상 버전에서 항상 최신 표준 모드로 렌더링됩니다. (IE에서만 작동하는 비표준 속성)<br/>
                ※ W3C에서 제공하는 유효성 검사에서는 이 속성값이 적용되어 있을 경우 오류로 판단.<br/>
                과거에는 content="IE=edge,chrome=1" 처럼 대체 방법으로 크롬 프레임이라는 ActiveX를 설치하라는 것을 추천했는데 크롬 프레임의 <br/>
                개발 종료로 이제 더 이상 추천하지 않는다.<br/>
         →  고객 PC IE에 호환성 설정이 된 경우 서버단 세팅으로 호환성 해제를 해줘야 한다.<br/>
               ＊아파치 서버일 경우<br/>
                   httpd.conf 파일에 헤덜스모듈 추가<br/>
                  `<IfModule headers_module><br/>`
                       `Header set X-UA-Compatible:IE=Edge`<br/>
                  `</IfModule>`<br/>
                   ※ 톰캣을 단독으로 사용 시 아래 주소를 참조하여 변경<br/>
                        https://www3.ntu.edu.sg/home/ehchua/programming/java/JavaServletExamples.html

- BODY
     - a. 들여쓰기
         → 코드의 가독성을 높이고 마크업 구조를 쉽게 파악하기 위해 규칙 준수<br/>
     - b. 주석정의
         → 마크업 구조(영역) 파악과 협업을 위해 반드시 명시<br/>
         → 주석은 간결하게 표기<br/>
         → Start,End 구분하며, 종료 주석에는 반드시 "//" 표기<br/>
     - c. Table
         → 레이아웃 구성으로 사용 시 thead,tbody,tfoot,th,scope등 사용금지<br/>
         → 의미에 맞게 구성 (caption.summary,thead,tbody,tfoot,scope등)<br/>
              ※ HTML5에서는 caption만 제공함.<br/>
         → 각 셀 넓이 지정을 위해 colgroup > col > style=width %를 제공한다.<br/>
      - d. Button
         → type="button"은 반드시 제공해야함. 제공하지 않을 경우 submit으로 제공됨.<br/>
         → 사용목적에 맞게 타입 설정<br/>
      - e. Form
         → 서식요소가 2개 이상일 경우 fieldset > legend를 반드시 사용한다.<br/>
         → width값은 inline style로 제공하며, 정확한 사이즈 또는 일정한 사이즈의 경우에는 class를 사용한다.<br/>
      - f. 프레임셋 및 아이프레임
         → 각 프레임을 구분할 수 있는 title 속성을 제공한다.<br/>
         → 프레임을 지원하지 않는 환경을 위해서 noframes을 제공한다.<br/>
              `<frameset><noframes></noframes></frameset>`

2. 폼
- a. 입력 양식의 경우, <fieldset>을 이용한다.
- b. 텍스트박스의 width값은 size로 지정을 해야하나 다양한 사이즈를 제공하기 위해선 Inline Style 방식을 우선한다.
   → <input type="type" id="" name="" class="" style="width:300px;">
- c. 폼타입별 필수 속성 제공값
   ※ title제공은 필수이며, label 제공시에는 제공하지 않는다.<br/>
   → `<input type="text" id="" name="" maxlength="">`<br/>
   → `<input type="text" id="" name="" maxlength="" class="">`<br/>
   → `<input type="text" id="" name="" maxlength="" style="">`<br/>
   → `<input type="radio" id="" name="" checked="checked">`<br/>
       _체크가 된 경우 반드시 checked="checked" 제공<br/>
   → `<input type="checkbox" id="" name="" checked="checked">`<br/>
   → `<select id="" name=""><option value=""></option></select>`<br/>
   → `<textarea cols="" rows="">`<br/>

3. 테이블
※ 테이블에서 펼침목록 기능을 제공할 경우 col width값을 %제공하게 되면 IE에서 셀영역들이 움직이게 되므로 반드시 "px" 단위로 제공해야한다.

4. 프레임셋
아이프레임은 사용할 수 있으나 프레임셋은 지양한다.

5. 기타
a. 특수기호는 엔티티(Entity) 코드로 변환하여 사용


### `■ rem 단위변환 가이드`
.2rem = 2.5px <br/>
.4rem = 5px <br/>
.5rem = 6px <br/>
.6rem = 7px <br/>
.7rem = 8px <br/>
.9rem =10.5px <br/>
1rem = 11.5px <br/>
1.1rem = 13px <br/>
1.2rem = 14px <br/>
1.3rem = 15px <br/>
1.4rem = 16.5px <br/>
1.5rem = 17.5px <br/>
1.7rem = 20px <br/>
1.8rem = 21px <br/>
1.9rem = 22px <br/>
2rem = 23px <br/>
2.2rem = 25.5px <br/>
2.3rem = 27px <br/>
2.4rem = 28px <br/>
2.6rem = 30px <br/>
2.8rem = 32px <br/>
3rem = 35px <br/>
3.2rem = 37.5px <br/>
3.4rem = 40px <br/>
3.6rem = 42px <br/>
3.8rem = 44.5px <br/>
4rem = 46.5px <br/>
4.1rem = 48px <br/>
4.2rem = 49px <br/>
4.5rem = 52.5px <br/>
4.7rem = 55px <br/>
5.2rem = 61px <br/>
5.5rem =64.5px <br/>
6rem = 70px <br/>
6.5rem =76px <br/>
6.8rem =79.5px <br/>
7rem = 82px <br/>
7.5rem = 87.5px <br/>
9rem = 105.5px <br/>
10.2rem = 120px <br/>
19.3rem = 226px <br/>
23.5rem = 275px <br/>
