
let ipText = document.getElementById("ip-text");
let ipColor = document.getElementById("color");
let button = document.getElementById("btn");
let opRow = document.getElementById("op-row");
let i = 1;

let data = [];

button.addEventListener('click', function () {
    data.push({
        text: ipText.value,
        color: ipColor.value,
        objId: i,


    })
    console.log(data);
    i++;
    printOnScreen();

})

function printOnScreen() {
    opRow.innerHTML = " ";
    data.forEach((e, index, array) => {
        let div = document.createElement("div");
        div.classList.add("col");
        div.classList.add("opCol");
        div.innerHTML = `<div class="edit">
                            <i class='fa fa-edit editBtn' style="color:rgb(255, 255, 255)"></i>
                        </div>
                        <div class="close">
                            <i class="fa fa-close closeBtn" style="color:rgb(255, 255, 255)"></i>
                        </div>
                        
                        <textarea class="text" id="p-box-text" style="background-color:${e.color}" readonly="readonly">${e.text}</textarea>`;
        div.style.margin = "20px";
        div.style.backgroundColor = `${e.color}`
        opRow.appendChild(div);
        ipText.value = " ";
        document.getElementById("p-box-text").readOnly = true;

    })
    let editBtn = document.querySelectorAll(".editBtn");
   
    let deleteBtn = document.querySelectorAll(".closeBtn");
    let flag=false;

    editBtn.forEach((element,index)=>{
        element.addEventListener("click",function()
    {
       // console.log(element.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.readOnly=false)
       if(flag==false){
        element.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.style.scale="1.3";
        element.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.style.transition="0.8s ease-in-out";
               
        element.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.readOnly=false;
        flag=true;

       }
       else{
        element.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.style.scale="1";
        element.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.style.transition="0.8s ease-in-out";
        element.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.readOnly=true;
        flag=false;
       }
       
       
    })
    })
    deleteBtn.forEach((element,index)=>{
        element.addEventListener("click",function()
    {
       // console.log(element.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling.readOnly=false)
      
        element.parentElement.parentElement.remove();
        console.log(index);
        data.splice(index,1);

       
       
       
    })
    })
    
}
