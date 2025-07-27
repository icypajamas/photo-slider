const img1 = "https://images.pistonheads.com/nimg/43448/911_turbo_006.jpg"
const img2 = "https://images.prismic.io/carwow/Zz3IQK8jQArT1EUV_2024Porsche911frontquarterdriving2.jpg?auto=format&cs=tinysrgb&fit=max&q=60"
const img3 = "https://images.pistonheads.com/nimg/47627/mceu_92714459611694185139788.jpg"
const img4 = "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/porsche-911-gts-reveiw-2025-001.jpg?itok=k67M4ZWN"
const img5 = "https://www.thecarexpert.co.uk/wp-content/uploads/2019/04/PCGB25_0177_fine-1920x960.jpg"

const imgArray = [img1, img2, img3, img4, img5]
let index = 0;

function setImg(imagePath) {
    document.getElementById("slidePhoto").src = imagePath;
    const scroll = document.querySelectorAll("#bar img");

    scroll.forEach(img => {
        if (img.src === imagePath) {
            img.classList.add("border-4", "border-blue-300")
        }
        else {
            img.classList.remove("border-4", "border-blue-300");
        }
    })
}

function nextImg() {
    index++;
    if (index >= imgArray.length) {
        index = 0;
    }
    imagePath = imgArray[index]
    setImg(imagePath);
}
function prevImg() {
    index--;
    if (index < 0) {
        index = imgArray.length - 1;
    }
    imagePath = imgArray[index]
    setImg(imagePath);
}

function scrollBar(img) {
    const imgSrc = img.src;
    setImg(imgSrc);
}