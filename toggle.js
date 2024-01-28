document.getElementById("toggle-nav").addEventListener("click", () => {
    let toggle1 = document.getElementById("toggle1");
    let navlist = document.getElementById("res-nav");
    let projectlist = document.getElementById("project-list")
    let rotate = document.getElementById("arrow1")
    if (toggle1.style.top != "120px", navlist.style.top != "60px",  rotate.style.transform != "rotate(270deg)", projectlist.style.top != "145px") {
        navlist.style.top = "60px";
        toggle1.style.top = "120px";
        rotate.style.transform = "rotate(270deg)";
        projectlist.style.top = "145px";
    }
    else {
        rotate.style.transform = "rotate(90deg)";
        toggle1.style.top = "60px";
        navlist.style.top = "1px";
        projectlist.style.top = "85px";
    }

})