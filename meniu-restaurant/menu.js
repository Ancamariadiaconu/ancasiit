//https://menu-49210.firebaseio.com/.json
var list={};
async function getMenu(){
    var response = await fetch("https://menu-49210.firebaseio.com/menu.json");
    window.list = await response.json();
    draw();
}
function draw(){
  var str="";
  var ingredient=document.querySelector(".search").value; 
  for(var i in list){
        if(list[i]===null){
            continue;
        }
        if(list[i].ingrediente.indexOf(ingredient)!==-1){
            str+= `
            <tr>
                <td><img src="${list[i].imagine}" alt="" class="imagine"></td>
                <td id="ingredients">
                    <span class="nume-preparat">${list[i].nume}</span></br>
                    <span>${list[i].ingrediente}</span>
                </td>
                <td><a href="details.html?id=${i}"><button class="detalii">Detalii</button></a></td>
            </tr>
            `
        }
    }
    document.querySelector("table tbody").innerHTML = str;
}
     


