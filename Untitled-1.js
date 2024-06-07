const wrapper document.querySelector(".wrapper");
const question document.querySelector(".question");
const ing document.querySelector("img");
const yesBtn document.querySelector(".yes-btn");
const noBtn document.querySelector(".no-btn");
const secondQuestion document.querySelectorAll(".question")[1];\

yesBtn.addEventListener("click", () => { 
  question.innerHTML = "I like you";
  secondQuestion.innerHTML = "How about you?"; 
  img.src =
  
  https://raw.githubusercontent.com/DzarelDeveloper/Img/main/AskCrush1.png"
  
  noBtn.addEventListener("mouseover", () => {
    const noßtnRect = noßtn.getBoundingClientRect();
    const maxx = window. InnerWidth - noßtnRect.width;
    const maxy = window.innerHeight - noBtnRect.height;
    
    const randomX = Math.floor(Math.random() * maxx);
    const randomy = Math.floor(Math.random() * maxy);
    
    noBtn.style.left = randomX + "px";
    noBtn.style.top randomy + "px";