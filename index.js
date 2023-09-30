const cardContainter = document.querySelector(".card");
const seclectionContainer = document.querySelector(".hide");
const sumbitButton = document.getElementById("submit");
const rateAgainButton = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".circle")


sumbitButton.addEventListener("click", () =>{
    seclectionContainer.classList.remove("hidden")
    cardContainter.style.display="none"

   rates.forEach((rate) => {
rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
})    
}); 

} )

rateAgainButton.addEventListener("click", () =>{
    seclectionContainer.classList.add("hidden")
    cardContainter.style.display= "";
} )



