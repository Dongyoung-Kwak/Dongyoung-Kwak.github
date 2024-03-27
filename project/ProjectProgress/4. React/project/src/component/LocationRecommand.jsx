// eslint-disable-next-line
// import { useEffect, useState } from 'react';
import '../css/recommand.css';
// import '../js/locationRecommand.js'
import { selectRegion, GetRankList } from '../js/locationRecommand.js';
import { Header, Footer, BelowHeader, KakaoMap } from './main.jsx'
// import { KakaoMap } from './Map.jsx';
import { Div, Tr, Td, Table, Option } from './Tag.jsx'

const styles = {
  space20: {
    height: '20px',
    width: '100px'
  },
  space50: {
    height: '50px',
    width: '100px'
  }
}
function LocationRecommandPage() {
  return (
    <>
      <Header />
      <BelowHeader />
      <LocationRecommand />
      <KakaoMap />
      <Footer />
    </>
  );
};
function LocationRecommand() {
  return (
    <>
      <Div className='container'>
        <Space50 />
      </Div>
      <Div className='container'>
        <Div className='row'>
          <GetRankList />
          <Div className="col-lg-9">
            <Div>
              <Div id="map" className="boxShadow" style={{ width: '100%' }}></Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div id="explain" className="boxShadow">
          ※ 회귀분석으로 치과의원의 예상 매출과 환자 수를 구하는 회귀식을 구해 지역별 예상 매출, 환자 수 정보를 제공합니다.<br />
          ※ 지역별 예상 매출과 연령대 인구수에 기반하여 사용자의 선택에 따른 점수를 부여하고, 이를 종합하여 높은 점수를 가진 지역을 추천합니다.<br />
          ※ 예상 환자 수에 따라 의료법 의료기관 의료인 정원 기준을 만족하는 간호사 수를 추천합니다.<br />
          ※ 서울시의 평균 환자 수와 병원 평수를 기준으로 예상 환자에 따른 병원 평수를 추천합니다.<br />
          ※ 추천 직원수와 추천 평수의 임대료로 예상 순수익 계산합니다.<br />
        </Div>
        <Space50 />
      </Div >
    </>
  );
}

function Space20() {
  return (
    <Div style={styles.space20}></Div>
  );
}
function Space50() {
  return (
    <Div style={styles.space50}></Div>
  );
}


function OptionTable(props) {
  return (
    <Table className='table'>
      <Option type='checkbox' name='임플란트' value='implant' />
      <Option type='checkbox' name='교정' value='orthodontics' />
    </Table>
  );
}
function LocationTable(props) {
  return (
    <Table id='areaTable' className='table'>
      <LocationTd id="first" number="1." />
      <LocationTd id="second" number="2." />
      <LocationTd id="third" number="3." />
    </Table>
  );
}
function LocationTd(props) {
  return (
    <Tr>
      <Td>{props.number}</Td>
      <Td id={props.id} onClick={(event) => selectRegion(event)}>-</Td>
      <Td></Td>
    </Tr>
  );
}
function ForeCastTable(props) {
  return (
    <Table id='forecastTable' className='table'>
      <ForecastTd title='예상 환자 수(월)' id='patient' />
      <ForecastTd title='추천 간호사수' id='employee' />
      <ForecastTd title='추천 평수' id='size' />
      <ForecastTd title='예상 순수익' id='predictSale' />
    </Table>
  );
}
function ForecastTd(props) {
  return (
    <Tr>
      <Td>{props.title}</Td>
      <Td id={props.id}>-</Td>
    </Tr>
  );
}


export default LocationRecommandPage;
export { OptionTable, ForeCastTable, LocationTable, Space20, Space50 };