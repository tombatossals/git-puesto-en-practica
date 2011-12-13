(function() {
    "use strict";

    function linkOn(e) {
        var imgs = { "first": "easy.jpg", "second": "medium.png" };
        var cl = e.currentTarget.className;
        var bg = document.querySelectorAll("div#main > img")[0];
        bg.style.display = "inline";
        if (bg.src != "images/" + imgs[cl]) {
            setTimeout(function() { bg.style.opacity = "1"; bg.src = "images/" + imgs[cl]; }, 300 );
        } else {
            bg.style.opacity = "1";
        }
    }

    function linkOff(e) {
        var imgs = { "first": "easy-bw.jpg", "second": "medium-bw.png" };
        var cl = e.currentTarget.className;
        var bg = document.querySelectorAll("div#main > img")[0];
        bg.src = "images/" + imgs[cl];
        bg.style.opacity = ".2";
    }

    window.onload = function() {
        var nodeList = document.querySelectorAll("ul.nav li a");

        for (var i = 0; i < nodeList.length; i++) {
            nodeList[i].addEventListener("mouseover", linkOn, false);
            nodeList[i].addEventListener("mouseout", linkOff, false);
        }  
    };
})();
