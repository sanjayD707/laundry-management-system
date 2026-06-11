const slides = document.querySelectorAll(".slide");
const currentSlideText =
document.getElementById("currentSlide");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    currentSlideText.textContent =
    index + 1;
}

setInterval(()=>{

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);

},5000);





const image =
document.getElementById("serviceImage");

const items =
document.querySelectorAll(".service-item");

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            image.src =
            entry.target.dataset.image;

        }

    });

},
{
    threshold:0.5
});

items.forEach(item=>{
    observer.observe(item);
});