document.addEventListener("DOMContentLoaded",function () {
    var element = document.getElementById("jsContent");

    if (element != null) {
        element.innerHTML = "<strong>Dynamic Content</strong>";
    }
    else {
        console.warn("Element Missing")
    }
});
