let isOpen = false;
function toggleSideMenu() {
    var sideMenuSize = getComputedStyle(document.documentElement).getPropertyValue('--side-menu-size');
    if(isOpen)
    {
        document.getElementById("side-menu").style.left = "-100vw";
        document.getElementById("body").style.overflowY = "auto";
    }
    else
    {
        document.getElementById("side-menu").style.left = "0";
        document.getElementById("body").style.overflowY = "hidden";
    }
    isOpen = !isOpen;
}
