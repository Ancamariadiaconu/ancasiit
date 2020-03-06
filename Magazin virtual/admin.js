

async function getAdmin (){
    let response = await fetch("https://final-project-corect.firebaseio.com/.json");
    adminList = await response.json();
    drawAdmin();


}
function drawAdmin(){


    let str="";
    for(let i in adminList){
    str+=`
    <div class="itemAdmin">
            <div class="imagineAdmin">
                <img src="${adminList[i].imagine}" class="imgAdmin"/>
            </div>
            <div class="nameAdmin">
                 <a><span>${adminList[i].nume}</span></a>
            </div>
            <div class="pretAdmin">
                <span>${adminList[i].pret}</span>
            </div>
            <div class="cantitateAdmin">
                <span>${adminList[i].stoc}</span>
            </div>
            <div class="removeAdmin">
                <button>Remove</button>
            </div>

    </div>     
    
       `
    }
    document.querySelector(".adminContent").innerHTML = str;
}