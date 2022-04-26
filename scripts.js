1.

//  function displayTime(){
//      var dateTime = new Date();
//      var hrs = dateTime.getHours();
//      var min = dateTime.getMinutes();
//      var sec = dateTime.getSeconds();
//      var session = document.getElementById('session');

//      if(hrs >= 12){
//          session.innerHTML = 'PM';
//      }else{
//          session.innerHTML = 'AM';
//      }

//      if(hrs > 12){
//          hrs = hrs - 12;
//      }

//      document.getElementById('hours').innerHTML = hrs;
//      document.getElementById('minutes').innerHTML = min;
//      document.getElementById('seconds').innerHTML = sec;
//  }
//  setInterval(displayTime, 10);

// 2//2. ლექციაზე შექმნილ სლაიდერს დავამატოთ: 
// //    2.1. startAutoSliding და stopAutoSliding ღილაკები startAutoSliding ის კლიკზე სლაიდერმა 3 წამში ერთხელ გადავიდეს შემდეგ სლაიდზე, 
// // stopAutoSliding ღილაკზე კლიკით ავტომატური გადასვა უნდა გაითიშოს.
// //   2.2. სლაიდერის გადართვა და გადმორთვა უნდა ხდებოდეს კლავიატურის ისრებით (<, >)
//  //  2.3 . დავამატოთ ასეთი (ღილაკები.png) ღილაკები იმდენი რამდენი სურათიც გვაქვს, ღილაკზე დაკლიების შემდეგ სლაიდერი უნდა გადავიდეს 
// //  შესაბამის სლაიდზე (პირველ ღილაკზე თუ დავკლიკე უნდა გადავიდეს პირველ სლაიზე და ასე შემდეგ).



const slideItems = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('#prev-slide-btn');
const nextBtn = document.querySelector('#next-slide-btn');
const startBtn = document.getElementById('start_btn');
const stopBtn = document.getElementById('stop_btn');
const dots = document.getElementsByClassName('dot');
let activeIndex = 0;
let intervalId = null;


 initSlider();
 function initSlider(){
   prevBtn.addEventListener('click', showPrevSlide);
   nextBtn.addEventListener('click', showNextSlide);
   startBtn.addEventListener('click', startSlides);
   stopBtn.addEventListener('click', stopSlides);

   document.addEventListener('keyup', e => {
     if(e.code === 'ArrowRight'){
       showNextSlide();
     } else{
         (e.code==='ArrowLeft')
         showPrevSlide()
     }
   })
 }



for (let i = 0; i < dots.length; i++) {
    const button = dots[i];
    button.addEventListener("click", ()=>{
      activeIndex = i
      renderSliders();
    })
  }



initSlider();



 function renderSliders() {
   slideItems.forEach((item, i) => {
     if(activeIndex === i){
       item.classList.add('active');
     } else {
       item.classList.remove('active');
     }
   })
 }

 function showPrevSlide(){
   activeIndex = activeIndex - 1;
   if(activeIndex < 0){
     activeIndex = slideItems.length - 1;
   }
   renderSliders();
 }
 function showNextSlide() {
   activeIndex = activeIndex + 1;
  if(activeIndex > slideItems.length - 1){
    activeIndex = 0;
  }
  renderSliders();
 }


 function startSlides(){
    intervalId = setInterval(showNextSlide, 3000)
  }
  
  function stopSlides(){
    clearInterval(intervalId);
  }
  

setInterval(initSlider(),2000);





3. 
// (optionsal) მოცემულია რიცხვების მასივი const students = [-1, -3, 4, 2], 
// დაწერეთ ფუნქცია angryProfessor(k, stundent){} რომელსაც გადაეცემა 2 პარამეტრი k - 
// (მინიმალური რაოდენობა სტუდენტების რომ ლექცია ჩატარდეს) და students (სტუდენტების მასივი რიცხვების სახით)
// განმარტება: - students მასივში 0 და ყველა ნაგატიური 
// რიცხვი ნიშნავს რომ სტუდენტი ლექციას ესწრება 1 დან ზემოთ 2, 3 .... ნიშნავს რომ აცცენს

// დავალება: დავითვალოთ სტუდენტების რაოდენობა რომელიც ესწრება ლექციას
// ფუნქციიდან დავაბრუნოთ: თუ დამსწრე სტუდენტების რაოდენობა ნაკლებია k-ზე მაშინ დაბრუნდეს "YES" თუ არა მაშინ "NO"


// const students = [-1, -3, 4, 2];

// function angryProfessor(k, students){
//   let count = 0;

//   for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     if (student<0) {
//       count++
//     }
//   }
//    if(count < k){
//      return "YES"
//    } else {
//      return "No"
//    }
// }

// console.log(angryProfessor(-1, students))