// ============マーカー配列を空、吹き出し配列を空、マーカーデータ配列に直接入力=============  

  var marker = [];
  var infoWindow = [];
  var markerData = [ 
      {
      name: 'TECH::EXPERT福岡<br><img src="/demo0.jpg"class=image >" ',
      lat: 33.592954,
      lng: 130.404864,
      }, {
      name: '[無料]エンジニアカフェ（天神）<br><img src="/demo1.jpg"class=image > ',
      lat: 33.593152,
      lng: 130.401884
      }, {
      name: '[無料]スタートアップカフェ（大名）<br><img src="/demo1.jpg"class=image > ',
      lat: 33.589162,
      lng: 130.395307
      }, {
      name: '[有料]プロント新天神町店 <br><img src="/demo1.jpg"class=image > ',
      lat: 33.590126,
      lng: 130.398116
      }, {
      name: '[有料]コーデュロイカフェパルコ店 <br><img src="/demo1.jpg"class=image > ',
      lat: 33.59012,
      lng: 130.398116
      }, {
      name: '[有料]SIROUZU COFFE警固店 <br><img src="/demo1.jpg"class=image > ',
      lat: 33.584114,
      lng: 130.390572
      }, {
      name: '[有料]タリーズコーヒー新天神店 <br><img src="/demo1.jpg"class=image > ',
      lat: 33.590074,
      lng: 130.39707
      }, {
      name: '[有料]シアトルズベスト天神昭和通店 <br><img src="/demo1.jpg"class=image > ',
      lat: 33.592324,
      lng: 130.397139
      }, {
      name: '[有料]スタバ メディアモール天神 <br><img src="/demo1.jpg"class=image > ',
      lat: 33.590907,
      lng: 130.400564
      }, {
      name: '[有料]コメダ珈琲店 福岡天神南店 <br><img src="/demo1.jpg"class=image > ',
      lat: 33.589295,
      lng: 130.403634
      }, {
      name: '[有料]VITO中洲ゲイツ店 <br><img src="/demo1.jpg"class=image > ',
      lat: 33.593775,
      lng: 130.406223
      }, {
      name: '[有料]福岡天狼院（今泉）<br><img src="/demo1.jpg"class=image > ',
      lat: 33.585459,
      lng: 130.400186
      }, {
      name: '[有料]スタバ天神地下街店<br><img src="/demo1.jpg"class=image > ',
      lat: 33.588061,
      lng: 130.401138
      }, {
      name: '[有料]マクド キャナルシティ博多店<br><img src="/demo1.jpg"class=image > ',
      lat: 33.58956,
      lng: 130.411763
      }, {
      name: '[有料]MUJIカフェ 無印良品 (大名)<br><img src="/demo1.jpg"class=image > ',
      lat: 33.587337,
      lng: 130.396749
      }, {
      name: '[有料]サブウェイ 天神ロフト店<br><img src="/demo1.jpg"class=image > ',
      lat: 33.58695 ,
      lng: 130.401579
      }, {
      name: '[有料]BOOK & CO.<br><img src="/demo1.jpg"class=image > ',
      lat: 33.593852 ,
      lng: 130.39835
      }, {
      name: '[有料]黒猫屋珈琲店<br><img src="/demo1.jpg"class=image > ',
      lat: 33.585335 ,
      lng: 130.391875
      }, {
      name: '[有料]スタバ天神ソラリア地下1階店<br><img src="/demo1.jpg"class=image > ',
      lat: 33.585335 ,
      lng: 130.391875
      }


  ];  
   //==================マーカー配列記述終わり==============
  
  
   //==================現在地取得とその情報での地図表示の記述===================
  function initMap() {


                             // Geolocation APIに対応している
    if (navigator.geolocation) {
                              // 現在地を取得
      navigator.geolocation.getCurrentPosition(
                            // 取得成功した場合
        function(position) {
                            // 緯度・経度を変数に格納
          var myLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                            // マップオプションを変数に格納
          var mymapOptions = {
            zoom : 16,                 // 拡大倍率
            center : { lat: 33.592954,lng: 130.404864 },     // myLatLng, // 緯度・経度
            maxZoom:20,                // 最大ズームの設定
            minZoom: 15,               // 最小ズームの設定
            scaleControl:true,         // 距離スケール表示
          };

                                              // マップオブジェクト作成
          var map = new google.maps.Map(
            document.getElementById("map"),   // マップを表示する要素
            mymapOptions                      // マップオプション
          );
          
 
      // ========== 以下が現在位置Circleのコード ==========
      circleOptions = {
        center :{ lat: 33.592954,lng: 130.404864 }, // myLatLng,  // 緯度・経度
        clickable: true,          // クリックできるようにする
        draggable: false,         // ドラッグできないようにする
        zIndex:5,                 // 前面表示の度合い
        radius: 200,              // 半径メートル
        map: map,                 // 表示先の地図の種類
        strokeColor: 'blue',       // 線の色
        strokeOpacity: 0.2,       // 色の透過率
        strokeWeight: 1,          // 線の太さ
        fillColor: 'blue',        // 円の色
        fillOpacity: 0.10         // 色の透過率
        },
        circle = new google.maps.Circle(circleOptions);  //上記の設定を変数circleに代入

        //================ここからマーカ配列の表示コード==============
  
          for (var i = 0; i < markerData.length; i++) {
            markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); 
            marker[i] = new google.maps.Marker({ 
              position: markerLatLng, 
              map: map,                 // 表示先の地図の種類
              animation: google.maps.Animation.BOUNCE,   // アイコンの動き DROP
              clickable: true,          // クリックできるようにする
              draggable: false,         // ドラッグできないようにする
              zIndex:5,                 // 前面表示の度合い
              });

              infoWindow[i] = new google.maps.InfoWindow({ 
                content: '<div class="sample">' + markerData[i]['name'] + '</div>' 
              });
              markerEvent(i); 
          }

          function markerEvent(i) {
            marker[i].addListener('mouseover', function() { 
            infoWindow[i].open(map, marker[i]); 
            });
          }
        

      },
        //=============ここまでが現在地取得成功した場合==========

        // ============取得失敗した場合===============
        function(error) {
          // エラーメッセージを表示
          switch(error.code) {
            case 1: // PERMISSION_DENIED
              alert("位置情報の利用が許可されていません");
              break;
            case 2: // POSITION_UNAVAILABLE
              alert("現在位置が取得できませんでした");
              break;
            case 3: // TIMEOUT
              alert("タイムアウトになりました");
              break;
            default:
              alert("その他のエラー(エラーコード:"+error.code+")");
              break;
          }
        }
      );
    // Geolocation APIに対応していない
    } else {
      alert("この端末では位置情報が取得できません");
    };

}





