function updateTimeScreensaver() {
    now = new Date();
    document.getElementById("time2").innerHTML = `<i class="fas fa-clock fa-2xs" style="color: #fff;"> </i> ` + now.toLocaleString(getNavigatorLanguage, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
 }