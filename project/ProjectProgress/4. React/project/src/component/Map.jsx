// import { useEffect } from 'react';
// const { kakao } = window
// let map;
// function KakaoMap() {
//   useEffect(() => {
//     // Kakao 맵 API가 로드되었는지 확인 후 사용
//     if (window.kakao && window.kakao.maps) {
//       // Kakao 맵 생성
//       const mapContainer = document.getElementById('map')
//       const mapOption = {
//         center: new kakao.maps.LatLng(37.47601668950402, 127.15099417223486), // 지도의
//         // 중심좌표
//         level: 6, // 지도의 확대 레벨
//         disableDoubleClickZoom: true,
//         scrollwheel: false,
//         draggable: false
//       };
//       map = new window.kakao.maps.Map(mapContainer, mapOption);
//     }
//   }, []);
// }
// export { map, KakaoMap, kakao };