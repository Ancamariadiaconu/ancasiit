//java script pagina admin.html
var list={};
async function getMenu(){
    var response = await fetch("https://menu-49210.firebaseio.com/menu.json");
    window.list = await response.json();
    draw();
}
function draw(){
    document.querySelector("table").classList.remove("hidden");
    document.querySelector(".loader").classList.add("hidden");

    var str="";
    for(var i in list){
          if(list[i]===null){
              continue;
          }
              
          str+= `
          <tr>
            <td><img src="${list[i].imagine}" class="imagine"></td>
            <td>
                 <span>${list[i].nume}</span></br>
                 <span>${list[i].ingrediente}</span>
            </td>
            <td><a href="edit.html?id=${i}"><button class="modifica">Modifica</button></a></td>
            <td><a href="delete.html?id=${i}"><button class="sterge">Sterge</button></a></td>
          </tr>
          `
      }
      document.querySelector("table tbody").innerHTML = str;
  }
  //java script pagina add.html
  async function adaugaPreparatNou(event){
    event.preventDefault();
    var preparatNou = {
        imagine:document.querySelector("[name='url']").value,
        nume:document.querySelector("[name='nume']").value,
        ingrediente: document.querySelector("[name='ingrediente']").value,
        reteta: document.querySelector("[name='preparare']").value
        
    };
    
        var response = await fetch(`https://menu-49210.firebaseio.com/menu.json`,{
            method:"POST",
            body:JSON.stringify(preparatNou)
        });
        window.location.assign("admin.html");
  }
  //java script pagina delete.html
  async function actualizareNumePreparat(){
   var index=window.location.search.substr(4);
   var response = await fetch("https://menu-49210.firebaseio.com/menu.json");
    window.list = await response.json();
    document.querySelector(".stergerePreparat").classList.remove("hidden");
    document.querySelector(".loader").classList.add("hidden");

      document.querySelector("#numePreparat").innerText=list[index].nume; 
}

  
async function confirmareStergere() {
    var idx=window.location.search.substr(4);
    var response = await fetch(`https://menu-49210.firebaseio.com/menu//${idx}.json`,{
        method:"DELETE"
    });
    window.location.assign("admin.html");
}
function refuzStergere(){

    window.location.assign("admin.html");
}
//java script pagina edit.html
 async function afisareInformatiiPreparat(){
        var idx=window.location.search.substr(4);
        var response = await fetch("https://menu-49210.firebaseio.com/menu.json");
        window.list = await response.json();

        document.querySelector("[name='nume']").value=list[idx].nume;
	    document.querySelector("[name='url']").value=list[idx].imagine;
        document.querySelector("[name='ingrediente']").value=list[idx].ingrediente;
        document.querySelector("[name='preparare']").value=list[idx].reteta;

 }
 async function salvarePreparat(){
    event.preventDefault();
    var index=window.location.search.substr(4);
    var preparatNou={
        nume:document.querySelector("[name='nume']").value,
        imagine:document.querySelector("[name='url']").value,
        ingrediente:document.querySelector("[name='ingrediente']").value,
        reteta:document.querySelector("[name='preparare']").value
     };
    var response = await fetch(`https://menu-49210.firebaseio.com/menu//${index}.json`,{
						method:"PUT",
						body:JSON.stringify(preparatNou)
                    });
                   
                    window.location.assign("admin.html");
 }


