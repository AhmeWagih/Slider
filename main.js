let sliderImasges = Array.from(document.querySelectorAll(".slider-container img"));
let sliderImasgesNum = sliderImasges.length;
let currentSlid = 1;
let slideElementNumber = document.getElementById("slider-number");
let prevBotton = document.getElementById("prev");
let nextBotton = document.getElementById("next");

prevBotton.onclick = prevSlide;
nextBotton.onclick = nextSlide;

let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= sliderImasgesNum; i++) {
    let paginationElementList = document.createElement("li");
    paginationElementList.setAttribute("data-index", i);
    paginationElementList.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationElementList);

}

document.getElementById("indicator").appendChild(paginationElement);

let paginationUl = document.getElementById("pagination-ul");

let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function () {
        currentSlid = parseInt(this.getAttribute("data-index"));
        checker();
    }
}

checker();

function checker() {
    slideElementNumber.textContent = "Slide " + currentSlid + " of " + sliderImasgesNum;
    removeActive();
    sliderImasges[currentSlid - 1].classList.add("active");
    paginationUl.children[currentSlid - 1].classList.add("active");

    if (currentSlid === 1) {
        prevBotton.classList.add("disable");
    } else {
        prevBotton.classList.remove("disable");
    }
    if (currentSlid === sliderImasgesNum) {
        nextBotton.classList.add("disable");
    } else {
        nextBotton.classList.remove("disable");
    }
}

function removeActive() {
    sliderImasges.forEach(function (img) {
        img.classList.remove("active");
    });
    paginationBullets.forEach(function (bollet) {
        bollet.classList.remove("active");
    });
}

function prevSlide() {
    if (prevBotton.classList.contains("disable")) {
        return false;
    }
    else {
        currentSlid--;
        checker();
    }
}
function nextSlide() {
    if (nextBotton.classList.contains("disable")) {
        return false;
    }
    else {
        currentSlid++;
        checker();
    }

}