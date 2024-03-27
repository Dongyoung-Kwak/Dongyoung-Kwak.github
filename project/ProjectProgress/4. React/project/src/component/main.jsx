// eslint-disable-next-line
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../css/index.css';
import '../js/main.js'
import DropDown from './DropDown.jsx';
import { A, P, Td, Tr, Th, Span, Button, Img, CarouselBtn, CarouselItem, Table, Div } from './Tag.jsx'

const today = new Date();
const board = [1, 2, 3, 4, 5, 6, 7, 8];

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
    <Div>
      <Div style={{ height: '60px', width: '100px' }}></Div>
    </Div>
  );
}

function Header() {
  // let loggedInUser = null;
  const [loggedInUser, setLoggedInUser] = useState("");
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg">
        <Div className="container">
          <Link className="navbar-brand fs-4" to="/myapp"><Img src={require("../img/logo.png")} /></Link>
          <Button className="navbar-toggler shadow-none border-0 " type="button"
            toggle="offcanvas" target="#offcanvasNavbar">
            <Span className="navbar-toggler-icon"></Span>
          </Button>
          <Div className="offcanvas offcanvas-start sidebar" tabIndex="-1"
            id="offcanvasNavbar">
            <Div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><Img src={require("../img/logo.png")} /></h5>
              <Button type="button" className="btn-close shadow-none"
                dismiss="offcanvas"></Button>
            </Div>
            <Div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pe-3">
                <li className="nav-item mx-5"><Link className="nav-link"
                  to="/myapp/locationRecommand/recommand">지역추천</Link></li>
                <li className="nav-item mx-5"><Link className="nav-link"
                  to="/saleAnalysis/search.do">매출분석</Link></li>
                <li className="nav-item dropdown mx-5">
                  {/* <DropDown></DropDown> */}
                  <Div className="dropdown-center">
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
                  </Div>
                </li>
                <li className="nav-item mx-5"><Link className="nav-link" to="/board/boardList.do">Q&A</Link>
                </li>
              </ul>
              {loggedInUser === null ?
                <Div
                  className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                  <A className='text-dark' link='/member/loginPage.do' text='로그인'></A>
                  <A className='text-white text-decoration-none px-3 py-1 rounded-4' link='/member/assent.do' text='회원가입' id='loginBtn'></A>
                </Div>
                :
                <Div>
                  <Div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                    <p id="useName"> {loggedInUser} 님 안녕하세요</p>
                    <A className='text-dark' link='/member/logout.do' text='로그아웃'></A>
                    <A className='text-white text-decoration-none px-3 py-1 rounded-4' link='/member/mypage.do' text='마이페이지' id='loginBtn'></A>
                  </Div>
                </Div>}
            </Div>
          </Div>
        </Div>
      </nav>
    </>
  )
}
function Footer() {
  return (
    <>
      <footer className="text-body-secondary py-5">
        <Div className="container">
          <Div className="row">
            <Div className="col-6">
              <P className="mb-1">이용약관 개인정보처리방침 회사소개</P>
              <P></P>
              <P className="mb-1">서울특별시 마포구</P>
              <P className="mb-0">대표번호 : 02-1111-1111 l FAX : 02-111-1111</P>
            </Div>
            <Div className="col-6">
              <P className="float-end mb-1">
              </P>
            </Div>
          </Div>
        </Div>
      </footer>
    </>
  );
}

function MainCarousel() {
  return (
    <>
      <Div id="mainCarousel" className="carousel slide mb-6"
        ride="carousel" interval="2000">
        <Div className="carousel-indicators">
          <CarouselBtn number='0' className='active' />
          <CarouselBtn number='1' />
          <CarouselBtn number='2' />
        </Div>
        <Div className="carousel-inner">
          <CarouselItem firClassName='carousel-item active' src={require('../img/carousel1.jpg')} secClassName='container' thirdClassName='carousel-caption text-start' firId='title' secId='detail' text='치과 개원을 준비하는 의사를 위한 입지 분석' />
          <CarouselItem firClassName='carousel-item ' src={require('../img/carousel2.jpg')} title='주거 인구 예측 서비스' secClassName='container' thirdClassName='carousel-caption text-start' firId='title' secId='detail' text='주택 ·
                  인구 데이터 분석을 통해 주거 인구 예측'/>
          <CarouselItem firClassName='carousel-item ' src={require('../img/carousel3.jpg')} title='매출 예측 서비스' secClassName='container' thirdClassName='carousel-caption text-start' firId='title' secId='detail' text='빅데이터
                  분석을 통한 매출 분석 서비스'/>
          {/*<!-- carousel 좌우 버튼 -->*/}
          <Button className="carousel-control-prev" type="button"
            target="#myCarousel" slide="prev"></Button>
          <Button className="carousel-control-next" type="button"
            target="#myCarousel" slide="next"></Button>
        </Div>
      </Div>
    </>
  );
}

function AnalysisSection() {
  return (
    <Div id="content1" className="container-fluid">
      <Div className="container-fluid">
        <Div className="row">
          <Div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 id="analysisTitle">
              치과의원 개업 시 입지 선정의 중요 Point
            </h1>
          </Div>
        </Div>
        <Div className="container">
          <Div className="row">
            <Div id="analysisLeft" className="col-lg-6 ">
              <Img src={require('../img/mainFirstContent1.png')} />
            </Div>
            <Div id="analysisRight" className="col-lg-6 ">
              <Div>
                <h2>인구 분석</h2>
                <Img src={require('../img/mainFirstContent2.jpg')} />
                <h6>
                  신도시 유동인구와 거주인구를 파악하여 어느입지에 치과를 설립해야 유리할까?
                </h6>
                <A to="populationStatus.html" className="btn" text='자세히 보기' />
              </Div>
              <Div>
                <h2>치과 현황</h2>
                <Img src={require('../img/mainFirstContent2.jpg')} />
                <h6>
                  주변의 치과의원 수와  개업 · 폐업의 수를 파악하여 개업이 가능할까?
                </h6>
                <A to="hospitalStatus.html" className="btn" text='자세히 보기' />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
function SaleAnalysisSection() {
  return (
    <Div id="content2" className="container-fluid">
      <Div className="container-fluid">
        <Div className="row">
          <Div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 id="analysisTitle">성공적인 개업을 위한 매출 분석</h1>
            <h6>
              정확한 분석을 원하시면 <Link to="search.html">여기</Link>를 클릭해주세요
            </h6>
          </Div>
        </Div>

        <Div id="content2Bottom" className="container">
          <Div className="row">
            <Div id="content2Left" className="col-lg-6">
              <Img src={require('../img/mainSecondContent1.png')} alt="" />
            </Div>
            <Div id="content2Right" className="col-lg-6">
              <Div>
                <Div>
                  <Img src={require('../img/mainSecondContent2.png')} />
                </Div>
                <Div>
                  <Img src={require('../img/mainSecondContent3.png')} />
                </Div>
              </Div>
              <Div>
                <Div>
                  <Img src={require('../img/mainSecondContent4.png')} />
                </Div>
                <Div>
                  <Img src={require('../img/mainSecondContent5.png')} />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
}

function QnASection() {
  return (
    <Div className="container">
      <Div className="row">
        {/*<!-- 본문3 왼쪽 -->*/}
        <Div id="boardLeft" className="col-lg-6">
          <Img src={require('../img/mainThirdContent.jpg')} />
        </Div>
        {/*<!-- 본문3 오른쪽(게시판)------------------------------------------------------------------------------------------->*/}
        <Div id="boardRight" className="col-lg-6 ">
          <Div id="title">
            <A to="" text='Q&A' />
          </Div>
          <Table className="table">
            {/* <colgroup>
                <col width={'10%'} />
                <col width={'60%'} />
                <col width={'30%'} />
              </colgroup> */}
            {board.map((boardNumber, index) => (
              <Board key={index} number={boardNumber} text={`게시글 ${boardNumber}`} date={today.getFullYear() +
                '-' + padNumber(today.getMonth() + 1) + '-' + padNumber(today.getDate())} />
            ))}
          </Table>
        </Div>
      </Div>
    </Div>

  );
}


function padNumber(number) {
  return number < 10 ? '0' + number : number;
}


function Board(props) {
  return (
    <Tr>
      <Th>{props.number}</Th>
      <Td><Link to={props.link}>{props.text}</Link></Td>
      <Td>{props.date}</Td>
    </Tr>
  );
}


export { Main, Header, Footer, BelowHeader, KakaoMap, map, kakao };