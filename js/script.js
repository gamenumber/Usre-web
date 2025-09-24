  const isMobile = window.innerWidth <= 768; // 모바일 화면 판단
  const mapLink = document.querySelector('.map-link a');

  if (isMobile) {
    mapLink.href = "nmap://place/123456789"; // 모바일 앱용 네이버 지도 링크
  }