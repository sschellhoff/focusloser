// ==UserScript==
// @name         FocusLoser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  lose focus on esc hit
// @author       Sören Schellhoff
// @match        https://web.telegram.org/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = () => {
        document.onkeydown = (evt) => {
            evt = evt||window.event;
            if("key" in evt && evt.key === "Escape") {
                let focus_element = document.querySelector(':focus');
                if(focus_element) {
                    // console.log("lose focus");
                    focus_element.blur();
                }
            }
        }
    }
})();
