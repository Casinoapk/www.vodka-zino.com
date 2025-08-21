function preventAutoDownload(){window.addEventListener("beforeunload",function (e){e.preventDefault();e.returnValue = ""}
)}
preventAutoDownload();document.addEventListener("DOMContentLoaded",function (){const navButtons = document.querySelectorAll(".nav-btn");const screens = document.querySelectorAll(".screen");navButtons.forEach((btn) =>{btn.addEventListener("click",function (){const target = btn.getAttribute("data-target");screens.forEach((screen) => screen.classList.remove("active"));const targetEl = document.getElementById(target);if (targetEl) targetEl.classList.add("active");history.pushState(null,"","" + target)}
)}
);window.addEventListener("popstate",function (){const path = window.location.pathname.replace("","");const screen = document.getElementById(path);if (screen){screens.forEach((e) => e.classList.remove("active"));screen.classList.add("active")}
}
)}
);document.addEventListener("DOMContentLoaded",function (){const vodkaArrow = document.getElementById("vodka-arrow");let arrowHidden = false;function hideArrow(){if (!arrowHidden && vodkaArrow){arrowHidden = true;vodkaArrow.style.height = "0px";vodkaArrow.style.opacity = "0"}
}
window.addEventListener("wheel",hideArrow,{passive:true}
);window.addEventListener("touchmove",hideArrow,{passive:true}
);const navContainer = document.querySelector(".nav-container");const scrollUp = document.querySelector(".scroll-btn.up");const scrollDown = document.querySelector(".scroll-btn.down");const menuToggle = document.querySelector(".menu-toggle");const navButtons = document.querySelectorAll(".nav-btn");const screens = document.querySelectorAll(".screen");const listItems = document.querySelectorAll(".list");let menuOpen = false;function toggleMenu(forceClose = false){menuOpen = !forceClose && !menuOpen;if (navContainer) navContainer.classList.toggle("active",menuOpen);listItems.forEach((item) =>{if (menuOpen){item.classList.add("shifted");item.style.transform = "translateX(138px)"}
else{item.classList.remove("shifted");item.style.transform = "translateX(0px)"}
}
)}
function activateScreen(id){screens.forEach((el) => el.classList.remove("active"));const target = document.getElementById(id);if (target) target.classList.add("active")}
if (menuToggle){menuToggle.addEventListener("click",() => toggleMenu())}
navButtons.forEach((btn) =>{btn.addEventListener("click",function (){const target = this.getAttribute("data-target");activateScreen(target);history.pushState({screen:target}
,"","" + target)}
)}
);if (scrollUp && scrollDown && navContainer){scrollUp.addEventListener("click",() =>{navContainer.scrollBy({top:-50,behavior:"smooth"}
)}
);scrollDown.addEventListener("click",() =>{navContainer.scrollBy({top:50,behavior:"smooth"}
)}
)}
window.addEventListener("popstate",function (e){if (e.state && e.state.screen){activateScreen(e.state.screen)}
else{activateScreen("")}
toggleMenu(true)}
);const path = window.location.pathname.replace("","").toLowerCase();const validScreens = [ "vodka-casino","bonuses-vodka-casino","games-vodka-casino","partnership-vodka-casino","contacts-vodka-casino","reviews-vodka-casino","map-vodka-casino" ];activateScreen(validScreens.includes(path) ? path:"vodka-casino")}
);
