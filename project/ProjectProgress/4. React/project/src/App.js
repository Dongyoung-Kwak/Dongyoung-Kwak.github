// eslint-disable-next-lin
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { selectRegion, getRankList } from './js/locationRecommand.js';
import $ from 'jquery';
import './bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import './css/recommand.css';
import './js/locationRecommand.js'
const { kakao } = window
let map;


{/*import './bootstrap/dist/js/bootstrap.bundle.js'*/ }
{/*import logo from './logo.svg';*/ }

{/*import { useState } from 'react'; */ }



function LocationRecommandPage() {

  return (
    <div>
      <Header />
      <BelowHeader />
      <LocationRecommand />
      <KakaoMap />
      <Footer />
    </div>
  );
};
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/myapp" element={<Main />} />
          <Route exact path="/myapp/locationRecommand/recommand" element={<LocationRecommandPage />} />
        </Routes>
      </div>
    </Router>
  );
}

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
      <MainCarousel />
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
function LocationRecommand() {

  return (
    <div>
      <div>
        <div className="container">
          <div style={{ height: '50px', width: '100px' }}></div>

        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="boxShadow vertical1">

                <div className="section">
                  <div className="subtitle">희망 분야</div>
                  <div style={{ height: '20px', width: '100px' }}></div>
                  <form action="submit.do" method="post">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>임플란트</td>
                          <td><input type="checkbox" name="implant" value="implant"
                            id="implant" /></td>
                        </tr>
                        <tr>
                          <td>교정</td>
                          <td><input type="checkbox" name="orthodontics"
                            value="orthodontics" id="orthodontics" /></td>
                        </tr>
                      </tbody>
                    </table>
                    <input id="searchBtn" type="button" value="추천 지역 검색"
                      onClick={getRankList} />
                  </form>
                </div>
              </div>
              <div className="boxShadow vertical2">
                <div style={{ height: '20px', width: '100px' }}></div>
                <div className="section">
                  <div className="subtitle">추천 지역</div>
                  <div style={{ height: '20px', width: '100px' }}></div>
                  <table id="areaTable" className="table">
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td id="first" onClick={(event) => selectRegion(event)}>-</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td id="second" onClick={(event) => selectRegion(event)}>-</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>3.</td>
                        <td id="third" onClick={(event) => selectRegion(event)}>-</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ height: '50px', width: '100px' }}></div>
                  <div className="subtitle" id="regionDetail">지역 정보</div>
                  <div style={{ height: '20px', width: '100px' }}></div>
                  <table id="forecastTable" className="table">
                    <tbody>
                      <tr>
                        <td>예상 환자 수(월)</td>
                        <td id="patient">-</td>

                      </tr>
                      <tr>
                        <td>추천 간호사수</td>
                        <td id="employee">-</td>
                      </tr>
                      <tr>
                        <td>추천 평수</td>
                        <td id="size">-</td>
                      </tr>
                      <tr>
                        <td>예상 순수익</td>
                        <td id="predictSale">-</td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
            <div className="col-lg-9">
              <div>
                <div id="map" className="boxShadow" style={{ width: '100%' }}></div>
              </div>
            </div>

          </div>
        </div>
        <div className="container">
          <div id="explain" className="boxShadow">
            ※ 회귀분석으로 치과의원의 예상 매출과 환자 수를 구하는 회귀식을 구해 지역별 예상 매출, 환자 수 정보를 제공합니다.<br />
            ※ 지역별 예상 매출과 연령대 인구수에 기반하여 사용자의 선택에 따른 점수를 부여하고, 이를 종합하여 높은 점수를 가진 지역을 추천합니다.<br />
            ※ 예상 환자 수에 따라 의료법 의료기관 의료인 정원 기준을 만족하는 간호사 수를 추천합니다.<br />
            ※ 서울시의 평균 환자 수와 병원 평수를 기준으로 예상 환자에 따른 병원 평수를 추천합니다.<br />
            ※ 추천 직원수와 추천 평수의 임대료로 예상 순수익 계산합니다.<br />
          </div>
        </div>
      </div>
    </div >
  );
}
function Header() {
  let loggedInUser = '홍길동';
  {/*let [a, b] = useState('DATA');*/ }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
          
          <a className="navbar-brand fs-4" href="/myapp"><img src={require("./img/logo.png")} alt="" /></a>

          <button className="navbar-toggler shadow-none border-0 " type="button"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="offcanvas offcanvas-start sidebar" tabIndex="-1"
            id="offcanvasNavbar">

            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src={require("./img/logo.png")} alt="" /></h5>
              <button type="button" className="btn-close shadow-none"
                data-bs-dismiss="offcanvas"></button>
            </div>

            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                <li className="nav-item mx-5"><a className="nav-link"
                  href="/myapp/locationRecommand/recommand">지역추천</a></li>
                <li className="nav-item mx-5"><a className="nav-link"
                  href="/saleAnalysis/search.do">매출분석</a></li>
                <li className="nav-item dropdown mx-5">
                  <div className="dropdown-center">
                    <a className="nav-link dropdown-toggle" href="#" role="button"
                      data-bs-toggle="dropdown">입지분석</a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item"
                        href="/locationAnalysis/population.do">인구분석</a></li>
                      <li><a className="dropdown-item"
                        href="/locationAnalysis/hospital.do">치과현황</a></li>
                      <li><a className="dropdown-item"
                        href="/locationAnalysis/map.do">지도</a></li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item mx-5"><a className="nav-link" href="/board/boardList.do">Q&A</a>
                </li>
              </ul>

              {/*<c:set var="loggedInUser" value="${sessionScope.loggedInUser}" />*/}
              {loggedInUser === null ?
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
                </div>}

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
            <img src={require('./img/carousel1.jpg')} alt="" />

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
            <img src={require('./img/carousel2.jpg')} alt="" />
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
            <img src={require('./img/carousel3.jpg')} alt="" />
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
              <img src={require('./img/mainFirstContent1.png')} alt="" />
            </div>
            <div id="analysisRight" className="col-lg-6 ">
              <div>
                <h2>인구 분석</h2>
                <img src={require('./img/mainFirstContent2.jpg')} alt="" />
                <h6>
                  신도시 유동인구와 거주인구를 파악하여 어느입지에 치과를 설립해야 유리할까?
                </h6>
                <a href="populationStatus.html" className="btn">자세히 보기</a>
              </div>
              <div>
                <h2>치과 현황</h2>
                <img src={require('./img/mainFirstContent2.jpg')} alt="" />
                <h6>
                  주변의 치과의원 수와  개업 · 폐업의 수를 파악하여 개업이 가능할까?
                </h6>
                <a href="hospitalStatus.html" className="btn">자세히 보기</a>
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
              정확한 분석을 원하시면 <a href="search.html">여기</a>를 클릭해주세요
            </h6>
          </div>
        </div>

        <div id="content2Bottom" className="container">
          <div className="row">
            <div id="content2Left" className="col-lg-6">
              <img src={require('./img/mainSecondContent1.png')} alt="" />
            </div>
            <div id="content2Right" className="col-lg-6">
              <div>
                <div>
                  <img src={require('./img/mainSecondContent2.png')} alt="" />
                </div>
                <div>
                  <img src={require('./img/mainSecondContent3.png')} alt="" />
                </div>
              </div>
              <div>
                <div>
                  <img src={require('./img/mainSecondContent4.png')} alt="" />
                </div>
                <div>
                  <img src={require('./img/mainSecondContent5.png')} alt="" />
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
          <img src={require('./img/mainThirdContent.jpg')} alt="" />
        </div>

        {/*<!-- 본문3 오른쪽(게시판)------------------------------------------------------------------------------------------->*/}
        <div id="boardRight" className="col-lg-6 ">
          <div id="title">
            <a href="">Q&A</a>
          </div>
          <table className="table">

            <thead>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td><a href="">게시글 1</a></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>2</th>
                <td><a href="">게시글 2</a></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>3</th>
                <td><a href="">게시글 3</a></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>4</th>
                <td><a href="">게시글 4</a></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>5</th>
                <td><a href="">게시글 5</a></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>6</th>
                <td><a href="">게시글 6</a></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>7</th>
                <td><a href="">게시글 7</a></td>
                <td>2022-02-22</td>
              </tr>
              <tr>
                <th>8</th>
                <td><a href="">게시글 8</a></td>
                <td>2022-02-22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  );
}

export default App;
export { map };
