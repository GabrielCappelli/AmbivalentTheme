let isOpen = false;
function toggleSideMenu() {
    var sideMenuSize = getComputedStyle(document.documentElement).getPropertyValue('--side-menu-size');
    if(isOpen)
    {
        document.getElementById("side-menu").style.left = "-100vw";
        document.getElementById("body").addEventListener('ontouchmove', function(e) {e.preventDefault()}, false);
    }
    else
    {
        document.getElementById("side-menu").style.left = "0";
        document.getElementById("body").removeEventListener('ontouchmove', function(e) {e.preventDefault()});
    }
    isOpen = !isOpen;
}
