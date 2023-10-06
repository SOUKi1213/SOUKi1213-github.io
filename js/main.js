"use strict";



/*---------- ハンバーガーメニュー ----------*/
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-nav"); 
// const body = document.querySelector(".js_body");

  ham.addEventListener("click", function ()  { //ハンバーガーメニューをクリックしたら
    ham.classList.toggle("active"); // ハンバーガーメニューにactiveクラスを付け外し
    nav.classList.toggle("active"); // ナビゲーションメニューにactiveクラスを付け外し
  });

/*---------- スライドイン ----------*/
gsap
.timeline()
  .from(".js_top_kv", {
		// 1.4秒かけて
    duration: 1.4,
		// 透明度0の状態
    autoAlpha: 0,
		// x軸方向に-100pxの位置
    x: -50,
    y: -30
  })


  gsap
  .timeline()
  .from(".js_animation", {
		// 1.4秒かけて
    duration: 1.4,
		// 透明度0の状態
    autoAlpha: 0,
		// x軸方向に-100pxの位置
    y: 30,
  })

/*---------- オープニングアニメーション ----------*/
const opening = document.querySelector(".js_opening");


gsap.timeline()
    .from(".js_opening-img", {
			//1.2秒かけて
      duration: 2.2,
			//透明度0から
      autoAlpha: 0,
			//y軸40px下から
      y: 40,
    }).to(".js_opening", {
      autoAlpha: 0,
      duration: 1.6,
    })

    function webStorage() {
      if (sessionStorage.getItem('access')) {
        //2回目以降アクセス時の処理には関数を実行しない
        opening.classList.add("active");
        
    
      } else {
        //初回アクセス時の処理
        sessionStorage.setItem('access', 0);
        OpeningAnime();
      }
    };
    webStorage();
