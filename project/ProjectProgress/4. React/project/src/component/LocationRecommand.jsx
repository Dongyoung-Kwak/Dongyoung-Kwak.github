// eslint-disable-next-lin
import '../css/recommand.css';
import '../js/locationRecommand.js'
import { selectRegion, getRankList } from '../js/locationRecommand.js';
import { Header, Footer, BelowHeader, KakaoMap } from './main.jsx'

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
                        <Option name='임플란트' value='implant' />
                        <Option name='교정' value='orthodontics' />
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
                      <LocationTd id="first" number="1." />
                      <LocationTd id="second" number="2." />
                      <LocationTd id="third" number="3." />
                    </tbody>
                  </table>
                  <div style={{ height: '50px', width: '100px' }}></div>
                  <div className="subtitle" id="regionDetail">지역 정보</div>
                  <div style={{ height: '20px', width: '100px' }}></div>
                  <table id="forecastTable" className="table">
                    <tbody>
                      <ForecastTd title='예상 환자 수(월)' id='patient' />
                      <ForecastTd title='추천 간호사수' id='employee' />
                      <ForecastTd title='추천 평수' id='size' />
                      <ForecastTd title='예상 순수익' id='predictSale' />
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

function Option(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td><input type="checkbox" name={props.value} vlaue={props.value} id={props.value} /></td>
    </tr>
  );
}
function LocationTd(props) {
  return (
    <tr>
      <td>{props.number}</td>
      <td id={props.id} onClick={(event) => selectRegion(event)}>-</td>
      <td></td>
    </tr>
  );
}
function ForecastTd(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td id={props.id}>-</td>
    </tr>
  );
}
export default LocationRecommandPage;