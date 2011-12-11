(function() {
    "use strict";

    function linkOn(e) {
        var imgs = { "first": "pacifier.png", "second": "team.jpg" };
        var t = e.srcElement;
        var bg = document.querySelectorAll("aside img")[0];
        bg.style.display = "inline";
        bg.src = "images/" + imgs[t.className];
        bg.style.opacity = "1";
    }

    function linkOff(e) {
        var imgs = { "first": "pacifier-bw.png", "second": "team-bw.jpg" };
        var t = e.srcElement;
        var bg = document.querySelectorAll("aside img")[0];
        bg.src = "images/" + imgs[t.className];
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
