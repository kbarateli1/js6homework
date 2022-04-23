//1.

function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

2//2. ლექციაზე შექმნილ სლაიდერს დავამატოთ: 
//    2.1. startAutoSliding და stopAutoSliding ღილაკები startAutoSliding ის კლიკზე სლაიდერმა 3 წამში ერთხელ გადავიდეს შემდეგ სლაიდზე, 
// stopAutoSliding ღილაკზე კლიკით ავტომატური გადასვა უნდა გაითიშოს.
//   2.2. სლაიდერის გადართვა და გადმორთვა უნდა ხდებოდეს კლავიატურის ისრებით (<, >)
 //  2.3 . დავამატოთ ასეთი (ღილაკები.png) ღილაკები იმდენი რამდენი სურათიც გვაქვს, ღილაკზე დაკლიების შემდეგ სლაიდერი უნდა გადავიდეს შესაბამის სლაიდზე (პირველ ღილაკზე თუ დავკლიკე უნდა გადავიდეს პირველ სლაიზე და ასე შემდეგ).