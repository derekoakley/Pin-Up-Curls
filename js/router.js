var router=function(){var e=document.querySelector("[data-router=top]"),t=document.querySelector("[data-router=bottom]"),a=function(e){if(e.target.dataset.router){e.preventDefault();var t=e.target.dataset.router,a=new XMLHttpRequest,r="partials/"+t;a.open("GET",r,!0),a.setRequestHeader("Pragma","no-cache"),a.onreadystatechange=function(e){return function(){4===a.readyState&&(200===a.status?n(a.response,e):console.log(a.response))}}(t),a.send()}},r=function(t){"menu"===t.target.dataset.router&&(t.preventDefault(),e.scrollIntoView({behavior:"smooth"}))},n=function(e,a){t.innerHTML=e,t.classList.add("min-h-100"),"map"===a&&(t.classList.add("flex"),t.classList.add("flex-column")),t.scrollIntoView({behavior:"smooth"}),"map"===a&&map.init()};e.addEventListener("click",a,!1),t.addEventListener("click",r,!1)}();