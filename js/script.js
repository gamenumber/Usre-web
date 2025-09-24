  var map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.5665, 126.9780), // 위도, 경도
      zoom: 15
  });

  var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5665, 126.9780),
      map: map,
      title: "우스레 공방"
  });