var list=[];
var indexEdit; 
function draw(){
    var str="";
    for(var i=0; i<list.length;i++){
    var userInfo=list[i];
        str+=`
                 <tr>
                     <td>${userInfo.name}</td>
                     <td>${userInfo.telefon}</td>
                     <td><button id="tableButtons" onclick="edit(${i})">Modifica</button></td>
                     <td><button id="tableButtons" onclick="del(${i})");">Sterge</button></td>
                  </tr>
        
        
        
        `;
    }
    document.querySelector("table tbody").innerHTML= str; 
    
}


function add(event){
 event.preventDefault();
 var newContact={
   name: document.querySelector("[name='contactName']").value,
   telefon: document.querySelector("[name='telefonContact']").value

 }
 if(indexEdit===undefined){
  list.push(newContact);

 }
 else{
    list[indexEdit]=newContact;
    window.indexEdit= undefined;
 }
  draw();
  document.querySelector("div.displayContact").classList.remove("hidden");
}
function edit(idx){
    document.querySelector("[name='contactName']").value=list[idx].name;
    document.querySelector("[name='telefonContact']").value=list[idx].telefon;
    window.indexEdit = idx;

}
function del(idx){
    if(confirm("Esti sigur ca vrei sa stergi acest contact?")){
        list.splice(idx,1);
        draw();
    }

}
function keyDefault(event){
    if(event.key === "Enter") {
        event.preventDefault();
    }
}
function addInput(event){
   
 
    if(event.key === "Enter"){
        
        var newContact={
          name: document.querySelector("[name='contactName']").value,
          telefon: document.querySelector("[name='telefonContact']").value
       
        }
        if(indexEdit===undefined){
         list.push(newContact);
       
        }
        else{
           list[indexEdit]=newContact;
           window.indexEdit= undefined;
        }
         draw();
         document.querySelector("div.displayContact").classList.remove("hidden");

    
}

}
