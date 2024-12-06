// 서브페이지 - 건강 지원
// npm install react-kakao-maps-sdk
import React, { useState } from 'react';
import '../../assets/css/sub/sub.css';

import { Map, MapMarker } from 'react-kakao-maps-sdk';

// img
import WhiteArrow from '../../assets/images/sub/WhiteArrow.png';

// Link
import { Link } from 'react-router-dom';

const healthLinks = [
  {
    number: '01.',

    title: '라파엘 센터',
    desc: '서울특별시 성북구 창경궁로43길 7',
    latitude: 37.588272100000204, // 위도
    longitude: 127.00016769999957, // 경도
  },
  {
    number: '02.',

    title: '천사 병원',
    desc: '서울특별시 동대문구 서울시립대로 57',
    latitude: 37.57658010000022, // 위도
    longitude: 127.0435382, // 경도
  },
  {
    number: '03.',

    title: '중구 무료 진료소',
    desc: '서울 중구 남창동 190-22',
    latitude: 37.55723689999997, // 위도
    longitude: 126.97799809999948, // 경도
  },
  {
    number: '04.',

    title: '강남구 보건소',
    desc: '서울특별시 강남구 선릉로 668',
    latitude: 37.51632219999968, // 위도
    longitude: 127.03795959999945, // 경도
  },
  {
    number: '05.',

    title: '강동구 보건소',
    desc: '서울특별시 강동구 성내로 45 (성내동)',
    latitude: 37.52925939999966, // 위도
    longitude: 127.12137389999967, // 경도
  },
  {
    number: '06.',

    title: '강북구 보건소',
    desc: '서울특별시 강북구 한천로 897 (번동) 232',
    latitude: 37.632217899999944, // 위도
    longitude: 127.03440719999942, // 경도
  },
  {
    number: '07.',

    title: '동작구 보건소',
    desc: '서울특별시 동작구 장승배기로10길 42 (상도동)',
    latitude: 37.50439009999988, // 위도
    longitude: 126.93692549999996, // 경도
  },
];

const SubHealth = () => {
  // 지도 중심 상태 관리
  const [mapCenter, setMapCenter] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });

  // 유닛 클릭 시 중심 좌표 변경 함수
  const handleUnitClick = (latitude, longitude) => {
    setMapCenter({ lat: latitude, lng: longitude });
  };

  return (
    <div className="sub-view-container">
      <div className="sub-Header">
        <Link to="/Main">
          <div className="flex">
            <img className="sub-Arrow" src={WhiteArrow} alt="icon" />
            <div className="sub-MainTitle">건강 지원</div>
          </div>
        </Link>
      </div>

      <div className="sub-Background">
        <Map
          className="sub-map"
          center={mapCenter} // 동적으로 변경되는 중심 좌표
          level={3}
        >
          {/* 선택된 위치에 마커 표시 */}
          <MapMarker position={mapCenter} />
        </Map>

        {healthLinks.map((link, index) => (
          <div
            className="sub-health__container"
            key={index}
            onClick={() => handleUnitClick(link.latitude, link.longitude)} // 클릭 이벤트 추가
          >
            <div className="flex__column">
              <p className="sub-healthNumber">{link.number}</p>
              <p className="sub-healthTitle">{link.title}</p>
              <p className="sub-healthDesc">{link.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="gap-margin"></div>
    </div>
  );
};

export default SubHealth;
