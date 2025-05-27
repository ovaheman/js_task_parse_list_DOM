var r,t=document.querySelector("ul");function e(r){var t=Array.from(r),e=t.indexOf(",");return t.splice(e,1,"."),t.splice(0,1,""),t.join("")}r=Array.from(t.querySelectorAll("li")).sort(function(r,t){var a=e(r.getAttribute("data-salary"));return e(t.getAttribute("data-salary"))-a}),t.innerHTML="",r.forEach(function(r){return t.appendChild(r)});
//# sourceMappingURL=index.256e1282.js.map
