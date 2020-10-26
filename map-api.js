'use strict';
//이 js파일은 구글에서 제공하는 map관련 api를 통해 어느위치인지, 어떻게 나타낼건지 등을 함수에 정의한 것이다. 
// 실행을 위해서는 외부 js를 호출하고 개인의 key를 입력하여 실행할것이다. 

function initMap() {

    // 위도(Latitude), 경도(Longitude)
    const myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    };

    //구글 api를 통해 map을 정의하고자 함
    //구글 maps객체에 들어있는 map함수를 실행한다. 함수의 인자로는 (맵삽입위치,맵표시옵션)
    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 18
    });

     //구글api를 통해 map에 표시할 maker를 정의하고자한다.
    //지도가 어떤지도인지 설정하고, 제목을 설정한다.
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'GitHub'
    });
}
