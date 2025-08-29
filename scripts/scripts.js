// heart icon increment number 

const allLoveIcons = document.querySelectorAll(".love-icon");
 
for(const loveIcon of allLoveIcons){
loveIcon.addEventListener("click",function(){

let heartNumber = parseInt(document.getElementById("heart-number").innerText);
 heartNumber++;
document.getElementById("heart-number").innerText = heartNumber;

})

}


// function for call button 

const allCallBtn = document.querySelectorAll(".call-button");

let callHistory = [];

for(const callBtn of allCallBtn){
    callBtn.addEventListener("click",function(){
      const parentOfBtn = callBtn.parentNode;
      const parentOfParent = parentOfBtn.parentNode;
      const serviceName = parentOfParent.querySelector("h1:first-of-type").innerText; 
      const serviceNumber = parentOfParent.querySelector("h1:last-of-type").innerText;

       let coinNumber = parseInt(document.getElementById("coin-number").innerText);
        
        

        if(coinNumber < 20){
                alert("❌ You do not have sufficient coins");
                return;
        }else{
             alert(` 📞 Calling  ${serviceName}  ${serviceNumber}....`);
             coinNumber = coinNumber-20;
        }
        
document.getElementById("coin-number").innerText = coinNumber;
   
      
    let history = {
        service : serviceName,
        number : serviceNumber,
        time:new Date().toLocaleTimeString(),
    }  

    callHistory.push(history)


const historyDiv= document.getElementById("history");

historyDiv.innerHTML=""


    for (let i = 0; i < callHistory.length; i++) {



const newDiv = document.createElement("div");
 newDiv.innerHTML =`
 
 
    <div class="letest-call-history flex items-center justify-between my-3 bg-gray-300 p-3 rounded-xl">
    <div class="left ">
        <h2 class="font-medium text-[13px]">${callHistory[i].service}</h2>
        <p>${callHistory[i].number}</p>
    </div>
    <div class="right">
        <p class="text-[12px] sm:text-[14px]  ml-1">${callHistory[i].time}</p>
    </div>

    </div>

 
 
 `

historyDiv.appendChild(newDiv)

const clearBtn = document.getElementById("clear-button");

clearBtn.addEventListener("click",function(){
    newDiv.innerHTML = "";
    callHistory = [];


})

}
      
    })

}


//  copy btn section 

const copyBtns= document.querySelectorAll(".copy-button");
for(const btn of copyBtns){
    btn.addEventListener("click",function(){
         let copyNumber = parseInt(document.getElementById("copy-number").innerText);
         copyNumber++
         document.getElementById("copy-number").innerText = copyNumber;
        const parentOfBtn = btn.parentNode;
      const parentOfParent = parentOfBtn.parentNode;
   const number = parentOfParent.querySelector("h1").innerText;

     const copied = navigator.clipboard.writeText(number);
    alert(`Number has been copied successfully  ${ number}`)


    })
}