const myCheckbox=document.getElementById("myCheckbox");
const visaBtn=document.getElementById("visaBtn");
const masterBtn=document.getElementById("masterBtn");
const paypalBtn=document.getElementById("paypalBtn");
const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const paymentresult=document.getElementById("paymentresult");

mysubmit.onclick=function(){
    if(myCheckbox.checked){
        subresult.textContent=`you are subscribed!`;
    }
    else{
        subresult.textContent=`you are not subscribed yet`;
    }
    if(visaBtn.checked){
        paymentresult.textContent=`you are pauing with visa`;
    }
    else if(masterBtn.checked){
        paymentresult.textContent=` you are paying with master card`;

    }
    else if(paypalBtn.checked){
        paymentresult.textContent=`you are paying with paypal`;

    }
    else{
        paymentresult.textContent=`you have to choose a payment mathod`;
    }

}