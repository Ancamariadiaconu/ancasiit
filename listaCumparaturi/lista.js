var list=[]; 
function draw(){
    var str="";
    for(var i=0; i<list.length;i++){
        str+=`
            <tr>
             <td>${list[i]}</td>
             <td><button class="mark" onclick="edit(${i})">Mark as buyed</button></td>
            </tr>
        
        
        `;
    }
    document.querySelector("table tbody").innerHTML= str;    
}
function add(event){
    event.preventDefault();
    item=document.querySelector("[name='product']").value
    if(item.length>0){
     list.push(item);
     draw();
     document.querySelector("[name='product']").value=""; 
     document.querySelector("div.displayItems").classList.remove("hidden");
   }
}
function edit(idx){
    document.querySelector("table tr:nth-child("+(idx+1)+") td:nth-child("+1+")").classList.add("cut");
}
function sortAsc(event){
    for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length; j++) {
        if (list[j].toLowerCase() > list[j + 1].toLowerCase()){
             tmp = list[j];
             list[j] = list[j + 1];
             list[j + 1] = tmp;
         }
      }
   }
      draw(); 
}
function sortDesc(event){
  for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length; j++) {
        if (list[j].toLowerCase() < list[j + 1].toLowerCase()) {
             tmp = list[j];
             list[j] = list[j + 1];
             list[j + 1] = tmp;
         }
      }
   }
 draw();
}
