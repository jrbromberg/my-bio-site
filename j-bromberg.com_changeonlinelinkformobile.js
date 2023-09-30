function detectMobile() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

window.onload = function () {
    if (detectMobile()) {
        var glink = document.getElementById("onlinelink")
        glink.href = "https://www.google.com/search?q=Internet,+teach+me+how+to+program+stuff."
    }
}

// I've read about why user agent should not be used for detecting mobile BUT for the purposes of changing one link on a personal resume website, I think it's appropriate.