// eslint-disable-next-lin
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import '../css/index.css';
import '../js/main.js'

const { kakao } = window
let map;
function KakaoMap() {
  useEffect(() => {
    // Kakao 맵 API가 로드되었는지 확인 후 사용
    if (window.kakao && window.kakao.maps) {
      // Kakao 맵 생성
      const mapContainer = document.getElementById('map')
      const mapOption = {
        center: new kakao.maps.LatLng(37.47601668950402, 127.15099417223486), // 지도의
        // 중심좌표
        level: 6, // 지도의 확대 레벨
        disableDoubleClickZoom: true,
        scrollwheel: false,
        draggable: false
      };
      map = new window.kakao.maps.Map(mapContainer, mapOption);
    }
  }, []);
}

function Main() {
  return (
    <div>
      <Header />
      <Slide />
      <AnalysisSection />
      <SaleAnalysisSection />
      <QnASection />
      <Footer />
    </div>
  );
}

function BelowHeader() {
  return (
    <div>
      <div style={{ height: '60px', width: '100px' }}></div>
    </div>
  );
}

function Header() {
  let loggedInUser = '홍길동';
  {/*let [a, b] = useState('DATA');*/ }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">

          <Link className="navbar-brand fs-4" to="/myapp"><img src={require("../img/logo.png")} alt="" /></Link>

          <button className="navbar-toggler shadow-none border-0 " type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="offcanvas offcanvas-start sidebar" tabIndex="-1"
            id="offcanvasNavbar">

            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={require("../img/logo.png")} alt="" /></h5>
              <button type="button" className="btn-close shadow-none"
                data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                <li className="nav-item mx-5"><Link className="nav-link"
                  to="/myapp/locationRecommand/recommand">지역추천</Link></li>
                <li className="nav-item mx-5"><Link className="nav-link"
                  to="/saleAnalysis/search.do">매출분석</Link></li>
                <li className="nav-item dropdown mx-5">
                  <div className="dropdown-center">
                    <Link className="nav-link dropdown-toggle" to="#" role="button"
                      data-bs-toggle="dropdown">입지분석</Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item"
                        to="/locationAnalysis/population.do">인구분석</Link></li>
                      <li><Link className="dropdown-item"
                        to="/locationAnalysis/hospital.do">치과현황</Link></li>
                      <li><Link className="dropdown-item"
                        to="/locationAnalysis/map.do">지도</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mx-5"><Link className="nav-link" to="/board/boardList.do">Q&A</Link>
                </li>
              </ul>

              {/*<c:set var="loggedInUser" value="${sessionScope.loggedInUser}" />*/}
              {loggedInUser === null ?
                <div
                  className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                  <A className='text-dark' link='/member/loginPage.do' text='로그인'></A>
                  <A className='text-white text-decoration-none px-3 py-1 rounded-4' link='/member/assent.do' text='회원가입' id='loginBtn'></A>
                </div>
                :
                <div>
                  <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <p id="useName"> {loggedInUser} 님 안녕하세요</p>
                    <A className='text-dark' link='/member/logout.do' text='로그아웃'></A>
                    <A className='text-white text-decoration-none px-3 py-1 rounded-4' link='/member/mypage.do' text='마이페이지' id='loginBtn'></A>
                  </div>
                </div>}

              {/* {loggedInUser === null ?
                <div
                  className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                  <a className="text-dark"
                    href="/member/loginPage.do">로그인</a>
                  <a id="loginBtn"
                    className="text-white text-decoration-none px-3 py-1 rounded-4"
                    href="/member/assent.do">회원가입</a>
                </div>
                :
                <div>

                  <div
                    className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <p id="useName"> {loggedInUser} 님 안녕하세요</p>
                    <a className="text-dark"
                      href="/member/logout.do">로그아웃</a>
                    <a id="loginBtn"
                      className="text-white text-decoration-none px-3 py-1 rounded-4"
                      href="/member/mypage.do">마이페이지</a>
                  </div>
                </div>} */}

              {/* 
              <c:choose>
                <c:when test="${empty loggedInUser}">
                  <div
                    className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <a className="text-dark"
                      href="${pageContext.request.contextPath}/member/loginPage.do">로그인</a>
                    <a id="loginBtn"
                      className="text-white text-decoration-none px-3 py-1 rounded-4"
                      href="${pageContext.request.contextPath}/member/assent.do">회원가입</a>
                  </div>

                </c:when>
                <c:otherwise>

                  <p id="useName">${loggedInUser.name} 님 안녕하세요</p>
                  <div
                    className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <a className="text-dark"
                      href="${pageContext.request.contextPath}/member/logout.do">로그아웃</a>
                    <a id="loginBtn"
                      className="text-white text-decoration-none px-3 py-1 rounded-4"
                      href="${pageContext.request.contextPath}/member/mypage.do">마이페이지</a>
                  </div>


                </c:otherwise>
              </c:choose>
*/}
            </div>
          </div>
        </div>
      </nav>
    </div>

  )
}
function Footer() {
  return (
    <div>
      <footer className="text-body-secondary py-5">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p className="mb-1">이용약관 개인정보처리방침 회사소개</p>
              <p></p>
              <p className="mb-1">서울특별시 마포구</p>
              <p className="mb-0">대표번호 : 02-1111-1111 l FAX : 02-111-1111</p>
            </div>
            <div className="col-6">
              <p className="float-end mb-1">
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
function Slide() {
  const settings = {
    cssEase: 'linear',
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 100,
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={require('../img/carousel1.jpg')} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <img src={require('../img/carousel2.jpg')} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <img src={require('../img/carousel3.jpg')} alt="" style={{ width: '100%', height: '100%' }} />
        </div>
      </Slider>
    </div>

  );
}
function MainCarousel() {
  return (
    <div>
      <div id="mainCarousel" className="carousel slide mb-6"
        data-bs-ride="carousel" data-bs-interval="4000">
        {/* 하단 현재위치  */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#mainCarousel"
            data-bs-slide-to="0" className="active">
            <span></span>
          </button>
          <button type="button" data-bs-target="#mainCarousel"
            data-bs-slide-to="1">
            <span></span>
          </button>
          <button type="button" data-bs-target="#mainCarousel"
            data-bs-slide-to="2">
            <span></span>
          </button>
        </div>

        {/*<!-- carousel page1  -->*/}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require('../img/carousel1.jpg')} alt="" />

            <div className="container">
              <div className="carousel-caption text-start">
                <div id="title"></div>
                <div id="detail" className="col-xs-12 col-sm-12 col-lg-6">
                  치과 개원을 준비하는 의사를 위한 입지 분석<br>
                    {/*<!-- 유동인구, 치과 현황을 통한 입지분석 -->*/}</br>
                </div>
                {/*
                  <!-- <button type="button">
                    <div className="temp">
                      <a href="">자세히 알아보기</a>
                    </div>
  </button> -->*/}


              </div>
            </div>
          </div>

          {/*<!-- carousel page2 -->*/}
          <div className="carousel-item">
            <img src={require('../img/carousel2.jpg')} alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <div id="title">주거 인구 예측 서비스</div>
                <div id="detail" className="col-xs-12 col-sm-12 col-lg-6">주택 ·
                  인구 데이터 분석을 통해 주거 인구 예측</div>
                {/*<!-- <button type="button"><a href="">자세히 알아보기</a></button> -->*/}
              </div>
            </div>
          </div>

          {/*<!-- carousel page3 -->*/}
          <div className="carousel-item">
            <img src={require('../img/carousel3.jpg')} alt="" />
            <div className="container">
              <div className="carousel-caption text-start">
                <div id="title">매출 예측 서비스</div>
                <div id="detail" className="col-xs-12 col-sm-12 col-lg-6">빅데이터
                  분석을 통한 매출 분석 서비스</div>
                {/* <!-- <button type="button"><a href="">자세히 알아보기</a></button> -->*/}
              </div>
            </div>
          </div>

          {/*<!-- carousel 좌우 버튼 -->*/}
          <button className="carousel-control-prev" type="button"
            data-bs-target="#myCarousel" data-bs-slide="prev"></button>
          <button className="carousel-control-next" type="button"
            data-bs-target="#myCarousel" data-bs-slide="next"></button>
        </div>
      </div>
    </div>
  );
}

function AnalysisSection() {
  return (
    <div id="content1" className="container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 id="analysisTitle">
              치과의원 개업 시 입지 선정의 중요 Point
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div id="analysisLeft" className="col-lg-6 ">
              <img src={require('../img/mainFirstContent1.png')} alt="" />
            </div>
            <div id="analysisRight" className="col-lg-6 ">
              <div>
                <h2>인구 분석</h2>
                <img src={require('../img/mainFirstContent2.jpg')} alt="" />
                <h6>
                  신도시 유동인구와 거주인구를 파악하여 어느입지에 치과를 설립해야 유리할까?
                </h6>
                <Link to="populationStatus.html" className="btn">자세히 보기</Link>
              </div>
              <div>
                <h2>치과 현황</h2>
                <img src={require('../img/mainFirstContent2.jpg')} alt="" />
                <h6>
                  주변의 치과의원 수와  개업 · 폐업의 수를 파악하여 개업이 가능할까?
                </h6>
                <Link to="hospitalStatus.html" className="btn">자세히 보기</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function SaleAnalysisSection() {
  return (
    <div id="content2" className="container-fluid">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 id="analysisTitle">성공적인 개업을 위한 매출 분석</h1>
            <h6>
              정확한 분석을 원하시면 <a to="search.html">여기</a>를 클릭해주세요
            </h6>
          </div>
        </div>

        <div id="content2Bottom" className="container">
          <div className="row">
            <div id="content2Left" className="col-lg-6">
              <img src={require('../img/mainSecondContent1.png')} alt="" />
            </div>
            <div id="content2Right" className="col-lg-6">
              <div>
                <div>
                  <img src={require('../img/mainSecondContent2.png')} alt="" />
                </div>
                <div>
                  <img src={require('../img/mainSecondContent3.png')} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <img src={require('../img/mainSecondContent4.png')} alt="" />
                </div>
                <div>
                  <img src={require('../img/mainSecondContent5.png')} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QnASection() {
  return (
    <div className="container">
      <div className="row">

        {/*<!-- 본문3 왼쪽 -->*/}
        <div id="boardLeft" className="col-lg-6">
          <img src={require('../img/mainThirdContent.jpg')} alt="" />
        </div>

        {/*<!-- 본문3 오른쪽(게시판)------------------------------------------------------------------------------------------->*/}
        <div id="boardRight" className="col-lg-6 ">
          <div id="title">
            <Link to="">Q&A</Link>
          </div>
          <table className="table">

            <thead>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td><Link to="">게시글 1</Link></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>2</th>
                <td><Link to="">게시글 2</Link></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>3</th>
                <td><Link to="">게시글 3</Link></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>4</th>
                <td><Link to="">게시글 4</Link></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>5</th>
                <td><Link to="">게시글 5</Link></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>6</th>
                <td><Link to="">게시글 6</Link></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>7</th>
                <td><Link to="">게시글 7</Link></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>8</th>
                <td><Link to="">게시글 8</Link></td>
                <td>2022-02-22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

function A(props) {
  return (
    <Link id={props.id} className={props.className} to={props.link}>{props.text}</Link>
  );
}

// export default;
export { Main, Header, Footer, BelowHeader, KakaoMap, map };