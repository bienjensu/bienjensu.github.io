function gridCellDimensions() {
  const element = document.createElement("div");
  element.style.position = "fixed";
  element.style.height = "var(--line-height)";
  element.style.width = "1ch";
  document.body.appendChild(element);
  const rect = element.getBoundingClientRect();
  document.body.removeChild(element);
  return { width: rect.width, height: rect.height };
}

// Add padding to each media to maintain grid.
function adjustMediaPadding() {
  const cell = gridCellDimensions();

  function setHeightFromRatio(media, ratio) {
      const rect = media.getBoundingClientRect();
      const realHeight = rect.width / ratio;
      const diff = cell.height - (realHeight % cell.height);
      media.parentNode.style.setProperty("margin-bottom", `${diff}px`);
  }

  function setFallbackHeight(media) {
      const rect = media.getBoundingClientRect();
      const height = Math.round((rect.width / 2) / cell.height) * cell.height;
      media.style.setProperty("height", `${height}px`);
  }

  function onMediaLoaded(media) {
    var width, height;
    switch (media.tagName) {
      case "IMG":
        width = media.naturalWidth;
        height = media.naturalHeight;
        break;
      case "VIDEO":
        width = media.videoWidth;
        height = media.videoHeight;
        break;
    }
    if (width > 0 && height > 0) {
      setHeightFromRatio(media, width / height);
    } else {
      setFallbackHeight(media);
    }
  }

  const medias = document.querySelectorAll("img, video");
    for (media of medias) {
        // `element` is the element you want to wrap
        var parent = media.parentNode;
        parent.classList.add("media-wrapper");
    switch (media.tagName) {
      case "IMG":
        if (media.complete) {
          onMediaLoaded(media);
        } else {
          media.addEventListener("load", () => onMediaLoaded(media));
          media.addEventListener("error", function() {
              setFallbackHeight(media);
          });
        }
        break;
      case "VIDEO":
        switch (media.readyState) {
          case HTMLMediaElement.HAVE_CURRENT_DATA:
          case HTMLMediaElement.HAVE_FUTURE_DATA:
          case HTMLMediaElement.HAVE_ENOUGH_DATA:
            onMediaLoaded(media);
            break;
          default:
            media.addEventListener("loadeddata", () => onMediaLoaded(media));
            media.addEventListener("error", function() {
              setFallbackHeight(media);
            });
            break;
        }
        break;
    }
  }
}

adjustMediaPadding();
window.addEventListener("load", adjustMediaPadding);
window.addEventListener("resize", adjustMediaPadding);

function checkOffsets() {
  const ignoredTagNames = new Set([
    "THEAD",
    "TBODY",
    "TFOOT",
    "TR",
    "TD",
    "TH",
  ]);
  const cell = gridCellDimensions();
  const elements = document.querySelectorAll("body :not(.debug-grid, .debug-toggle)");
  for (const element of elements) {
    if (ignoredTagNames.has(element.tagName)) {
      continue;
    }
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      continue;
    }
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    const offset = top % (cell.height / 2);
    if(offset > 0) {
      element.classList.add("off-grid");
      console.error("Incorrect vertical offset for", element, "with remainder", top % cell.height, "when expecting divisible by", cell.height / 2);
    } else {
      element.classList.remove("off-grid");
    }
  }
}

const updateColors = () => {
    const colors = ['green', 'red', 'blue', 'yellow'];
    const updates = document.getElementsByClassName("colorme");
    const hrs = document.querySelectorAll("hr, td, th, tr, table");
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (const u of updates) {
        u.style.backgroundColor = color;
        u.style.borderColor = color;
        if (color == 'yellow') {
            u.style.color = 'black';
        } else {
            u.style.color = 'white';
        }
    }

    console.log(hrs);
    for (const hr of hrs) {
        hr.style.setProperty('--borderColor', color);
        hr.style.borderColor = color;
    }

    var r = document.querySelector(':root');
    r.style.setProperty('--highlight-color', color);
    if (color == 'yellow') {
       r.style.setProperty('--highlight-text-color', 'black');
    } else {
        r.style.setProperty('--highlight-text-color', 'white');
    }

    const imgs = document.querySelectorAll("img");
    console.log(imgs);
    for (const i of imgs) {
        if (color == 'red') {
            i.setAttribute("class", "filter-red");
        } else if (color == 'green') {
            i.setAttribute("class", "filter-green");
        }else if (color == 'blue') {
            i.setAttribute("class", "filter-blue");
        }else if (color == 'yellow') {
            i.setAttribute("class", "filter-yellow");
        }
    }
}
updateColors();
