var list=[]; 
function draw(){
    var str="";
    for(var i=0; i<list.length;i++){
        if(list[i].strike==="striked"){
        str+=`
            <tr>
            <td class="cut">${list[i].nume}</td>
             <td><button class="mark" onclick="edit(${i})">Mark as buyed</button></td>
            </tr>
        
        
        `;
        }
        else{
            str+=`
            <tr>
            <td>${list[i].nume}</td>
             <td><button class="mark" onclick="edit(${i})">Mark as buyed</button></td>
            </tr>
        
        
        `;
        }
    }
    document.querySelector("table tbody").innerHTML= str;    
}
function add(event){
    event.preventDefault();
    var item={
        nume: document.querySelector("[name='product']").value,
        strike: ""
    };
    
     list.push(item);
     draw();
     document.querySelector("[name='product']").value=""; 
     document.querySelector("div.displayItems").classList.remove("hidden");
   
}
function edit(idx){
    list[idx].strike="striked";
    draw();
}
function sortAsc(event){
    var arr=[];
    var strikeEl=[];
    for(var i=0;i<list.length;i++){
        if(list[i].strike==="striked"){
        strikeEl.push(list[i].nume);
        list[i].strike="";
        }
       arr.push(list[i].nume);
    }
    arr.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
   for(var i=0;i<list.length;i++){
    list[i].nume=arr[i];
  }
  for(var i=0;i<strikeEl.length;i++){
        for(var j=0;j<list.length;j++){
            if(strikeEl[i]===list[j].nume){
                     list[j].strike="striked"

              }
        }

  }
   draw();
      
}
function sortDesc(event){
    var arr=[];
    var strikeEl=[];
    for(var i=0;i<list.length;i++){
        if(list[i].strike==="striked"){
        strikeEl.push(list[i].nume);
        list[i].strike="";
        }
       arr.push(list[i].nume);
    }
    arr.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
   arr.reverse();
   for(var i=0;i<list.length;i++){
    list[i].nume=arr[i];
  }
  for(var i=0;i<strikeEl.length;i++){
        for(var j=0;j<list.length;j++){
            if(strikeEl[i]===list[j].nume){
                     list[j].strike="striked"

               }
         }

  }
      draw();
   
}
