// eslint-disable-next-line
import { map, kakao } from '../component/main.jsx'
import React, { useEffect, useState } from 'react';
import { Table, Option, Div, Form, Input } from '../component/Tag.jsx';
import { LocationTable, ForeCastTable, Space20, Space50 } from '../component/LocationRecommand.jsx';
window.onload = function () {
	fetchData();

	fetch(process.env.PUBLIC_URL + "/json/emd.geojson")
		.then(response => response.json())
		.then(geojson => {

			var data = geojson.features;
			data.forEach(val => {
				if (val.properties.temp.includes('송파구 위례동')) {
					songpaPoly = val.geometry.coordinates[0][0];
				}
				if (val.properties.temp.includes('하남시 위례동')) {
					hanamPoly = val.geometry.coordinates[0][0];
				}
				if (val.properties.temp.includes('성남시 위례동')) {
					sungnamPoly = val.geometry.coordinates[0][0];
				}
			});
		})
		.catch(error => {
			console.error('Error fetching data:', error);
		});
}

function writeRankList() {
	document.getElementById('first').innerText = list[0];
	document.getElementById('second').innerText = list[1];
	document.getElementById('third').innerText = list[2];
}

function selectRegion(event) {
	var clickedTd = event.target;

	if (selectedTd) {
		selectedTd.classList.remove('bold');
	}
	clickedTd.classList.add('bold');

	selectedTd = clickedTd;
	var tdContent = clickedTd.innerText;
	showMapData(tdContent);
	fetcPredictData(tdContent);
}

function showMapData(tdContent) {

	switch (tdContent) {
		case '송파구 위례':
			songpaHosLoc();
			document.getElementById('regionDetail').innerText = '송파구 위례';
			break;
		case '성남시 위례':
			sungnamHosLoc();
			document.getElementById('regionDetail').innerText = '성남시 위례';
			break;
		case '하남시 위례':
			hanamHosLoc();
			document.getElementById('regionDetail').innerText = '하남시 위례';
			break;
		default:
			break;
	}
}

var list = ['-', '-', '-'];

function predictWrite() {

	document.getElementById('patient').innerText = predictData[0].toLocaleString() + " 명";
	document.getElementById('employee').innerText = predictData[1] + " 명";
	document.getElementById('size').innerText = predictData[2] + " 평";
	document.getElementById('predictSale').innerText = Number(String(predictData[3]).slice(0, 4)).toLocaleString() + " 만원"
}

function GetRankList() {
	const [checkedImpl, setCheckedImpl] = useState(false);
	const [checkedOrth, setCheckedOrth] = useState(false);
	const [region, setRegion] = useState('');

	const fetchData = async (impl, orth) => {
		try {
			const data = {
				checkImpl: impl,
				checkOrth: orth
			};
			await fetch(process.env.PUBLIC_URL + "/json/locationRecommand", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(jsonArray => {
					list = jsonArray.map(item => item.adm_nm);
				})

				.then(() => {

					writeRankList();
					setRegion(document.getElementById('first').innerText);
					// 이제 writeRankList가 실행된 이후에 아래 코드가 실행됩니다.
					// var tempcon = document.getElementById('first').innerText;

					// showMapData(tempcon);
					// fetcPredictData(tempcon);
				})

		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (region) {
			showMapData(region);
			fetcPredictData(region);
		}
	}, [region])
	const handleImplChange = () => {
		setCheckedImpl(!checkedImpl);
	};

	const handleOrthChange = () => {
		setCheckedOrth(!checkedOrth);
	};

	const handleSearchBtnClick = () => {
		fetchData(checkedImpl, checkedOrth);
	};

	function OptionTable(props) {
		return (
			<Table className='table'>
				<Option type='checkbox' name='임플란트' value='implant' checked={checkedImpl} onChange={handleImplChange} />
				<Option type='checkbox' name='교정' value='orthodontics' checked={checkedOrth} onChange={handleOrthChange} />
			</Table>
		);
	}

	return (
		<>
			<Div className="col-lg-3">
				<Div className="boxShadow vertical1">
					<Div className="section">
						<Div className="subtitle" text='희망 분야'></Div>
						<Space20 />
						<Form action="submit.do" method="post">
							<OptionTable />
							<Input id="searchBtn" type="button" value="추천 지역 검색" onClick={handleSearchBtnClick} />
						</Form>
					</Div>
				</Div>
				<Div className="boxShadow vertical2">
					<Space20 />
					<Div className="section">
						<Div className="subtitle" text='추천 지역'></Div>
						<Space20 />
						<LocationTable />
						<Space50 />
						<Div className="subtitle" id="regionDetail" text='지역 정보'></Div>
						<Space20 />
						<ForeCastTable />
					</Div>
				</Div>
			</Div>
		</>
	);
}

// 지도에 표시 -------------------------------------------------------------
var moveLatLon;

function songpaHosLoc() {

	map.setLevel(5);
	deleteArea();
	displayArea(songpaPoly);
	moveLatLon = new kakao.maps.LatLng(37.48274629824583, 127.13696522477319);
	map.panTo(moveLatLon);
	deleteMarker();
	songpaHos();
	overlayDel.setMap(null);
	if (currentInfoWindow) {
		currentInfoWindow.close();
	}
}

function sungnamHosLoc() {
	map.setLevel(5);
	deleteArea();
	displayArea(sungnamPoly);
	moveLatLon = new kakao.maps.LatLng(37.468393767232406, 127.14408328318119);
	map.panTo(moveLatLon);
	deleteMarker();
	sungnamHos();
	overlayDel.setMap(null);
	if (currentInfoWindow) {
		currentInfoWindow.close();
	}
}

function hanamHosLoc() {
	map.setLevel(5);
	deleteArea();
	displayArea(hanamPoly);
	moveLatLon = new kakao.maps.LatLng(37.47860551575809, 127.16237294151435);
	map.panTo(moveLatLon);
	deleteMarker();
	hanamHos();
	overlayDel.setMap(null);
	if (currentInfoWindow) {
		currentInfoWindow.close();
	}

}

// json으로 가져오기----------------------------------------------------------------


var array = [];
function fetchData() {
	fetch(process.env.PUBLIC_URL + '/json/map')
		.then(response => {
			if (!response.ok) {
				throw new Error('네트워크 응답이 올바르지 않습니다.');
			}
			return response.json();
		})
		.then(data => {

			array = data;

		})
		.catch(error => console.error('에러:', error));
}


var predictData = [];
function fetcPredictData(regionName) {
	var data =
		{ name: regionName }
	fetch(process.env.PUBLIC_URL + '/json/predict', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {

			predictData.length = 0;
			predictData.push(data.predictPatient);
			predictData.push(data.employee);
			predictData.push(data.size);
			predictData.push(data.netProfit);
		})
		.then(() => {
			predictWrite();
		})
		.catch(error => console.error('에러 :', error))
}




function hanamHos() {

	array.forEach(data => {
		if (data.REGION === '하남시' && data.BUSINESS_STATUS === '영업/정상') {
			displayMarker(data, openHosImg);
		} else if (data.REGION === '하남시' && data.BUSINESS_STATUS !== '영업/정상') {
			displayMarker(data, closeHosImg);
		}
	});
}

function sungnamHos() {
	array.forEach(data => {
		if (data.REGION === '성남시' && data.BUSINESS_STATUS === '영업/정상') {
			displayMarker(data, openHosImg);
		} else if (data.REGION === '성남시' && data.BUSINESS_STATUS !== '영업/정상') {
			displayMarker(data, closeHosImg);
		}
	});
}

function songpaHos() {
	array.forEach(data => {
		if (data.REGION === '송파구' && data.BUSINESS_STATUS === '영업/정상') {
			displayMarker(data, openHosImg);
		} else if (data.REGION === '송파구' && data.BUSINESS_STATUS !== '영업/정상') {
			displayMarker(data, closeHosImg);
		}
	});

}

// 오버레이 ----------------------------------------
const markerArr = [];
var overlayDel = new kakao.maps.CustomOverlay({
	yAnchor: 3,
	position: null
});

var openHosImg = process.env.PUBLIC_URL + "/img/hosMark.png";
var closeHosImg = process.env.PUBLIC_URL + "/img/closeHosMark.png";
var imageSize = new kakao.maps.Size(20, 20);
// var hos = document.getElementById('hos');
// var hosLoc = document.getElementById('hosLoc');

var currentInfoWindow = null;

function displayMarker(data, img) {

	// 마커 이미지 및 위치 설정
	var markerImage = new kakao.maps.MarkerImage(img, imageSize);
	var position = new kakao.maps.LatLng(Number(data.X_COORDINATE), Number(data.Y_COORDINATE));
	// 마커 생성
	var marker = new kakao.maps.Marker({
		map: map,
		position: position,
		image: markerImage,
	});
	markerArr.push(marker);

	var licenseDate = new Date(data.LICENSE_DATE);
	var closeDate = new Date(data.CLOSE_DATE);
	var infoContent = img === closeHosImg ?
		'개업일: ' + licenseDate.getFullYear() + "-" + ('0' + (licenseDate.getMonth() + 1)).slice(-2) + "-" + ('0' + (licenseDate.getDate() + 1)).slice(-2) + "<br>" +
		'폐업일: ' + closeDate.getFullYear() + "-" + ('0' + (closeDate.getMonth() + 1)).slice(-2) + "-" + ('0' + (closeDate.getDate() + 1)).slice(-2) :
		'개업일: ' + licenseDate.getFullYear() + "-" + ('0' + (licenseDate.getMonth() + 1)).slice(-2) + "-" + ('0' + (licenseDate.getDate() + 1)).slice(-2)
		;

	var infowindow = img === closeHosImg ? new kakao.maps.InfoWindow({
		content: '<div id="infoWindow" style="height:100px";>' +
			'<strong>' + data.HOSPITAL_NAME + '</strong><br>' +
			infoContent +
			'</div>',
		removable: true  // 기본 InfoWindow 디자인 사용
	}) :
		new kakao.maps.InfoWindow({
			content: '<div id="infoWindow">' +
				'<strong>' + data.HOSPITAL_NAME + '</strong><br>' +
				infoContent +
				'</div>',
			removable: true  // 기본 InfoWindow 디자인 사용
		})
		;


	kakao.maps.event.addListener(marker, 'click', function () {
		if (currentInfoWindow) {
			currentInfoWindow.close();
		}
		infowindow.open(map, marker);
		currentInfoWindow = infowindow;
	});
}

function deleteMarker() {
	markerArr.forEach(marker => marker.setMap(null));
}

// 폴리곤 ----------------------------------------
var songpaPoly;
var hanamPoly;
var sungnamPoly;
var polygon = [];

function displayArea(coordinates) {
	var path = [];
	coordinates.forEach(coordinate => {
		path.push(new kakao.maps.LatLng(coordinate[1], coordinate[0]));
	});

	polygon.push(new kakao.maps.Polygon({
		map: map,
		path: path,
		strokeWeight: 4,
		strokeColor: 'red',
		strokeOpacity: 0.5,
		strokeStyle: 'solid',
		fillColor: 'red',
		fillOpacity: 0.05
	}));
}

function deleteArea() {
	polygon.forEach(coordinate => coordinate.setMap(null));
}

/* 
function showCustomOverlay(data, infoContent) {
	document.getElementById('hospitalName').innerText = data.hospital_name;
	document.getElementById('infoContent').innerText = infoContent;

	var customOverlay = document.getElementById('customOverlay');
	customOverlay.style.display = 'block';

	// 팝업 위치 설정 (예시로 임의의 위치)
	var position = new kakao.maps.LatLng(Number(data.x_coordinate), Number(data.y_coordinate));

	// CustomOverlay 추가
	var customOverlayOptions = {
		content: customOverlay,
		position: position,
		zIndex: 1
	};

	var customOverlayObj = new kakao.maps.CustomOverlay(customOverlayOptions);
	customOverlayObj.setMap(map);

	// 팝업을 클릭하면 닫기
	customOverlay.onClick = function () {
		customOverlay.style.display = 'none';
		customOverlayObj.setMap(null);
	};
}
*/
var selectedTd = null;

export { selectRegion, GetRankList };