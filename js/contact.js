const faqs =
document.querySelectorAll(".faq-item");

faqs.forEach(item=>{

    const button =
    item.querySelector(".faq-question");

    button.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});

document
.getElementById("contactForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Message Sent Successfully!");

});