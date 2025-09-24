  const isMobile = window.innerWidth <= 768; // 모바일 화면 판단
  const mapLink = document.querySelector('.map-container iframe:src');

  if (isMobile) {
    mapLink.href = "https://m.place.naver.com/place/1191092372/home"; // 모바일 앱용 네이버 지도 링크
  }