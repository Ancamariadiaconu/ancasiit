
class Elev3{
    constructor(nume){
        this.nume = nume;
        this.note = [];
    }
    adaugaNota(nota){
        this.note.push(nota);
    }
    get medie(){
        var sum = 0;
        for(var i=0;i<this.note.length;i++){
            sum += this.note[i];
        }
        if(this.note.length === 0){
            return "";
        }
        return sum / this.note.length;

    }
    
}

class Catalog{
    constructor(){
        this.elevi=[];
    }
    addElev(str){
        var elev = new Elev3(str);
        this.elevi.push(elev);
    }
    veziNote(idx){
        var elev = this.elevi[idx];
        this.elevAscultat = elev;
    }
    addNota(str){
        this.elevAscultat.adaugaNota(str);
    }
    sortAsc(){
        this.elevi.sort(function(a,b){
            // <0 daca b>a
            // >0 daca a>b
            // 0 daca a===b
            return a.medie - b.medie;
            
            //SAUU
            
            if(a.medie>b.medie){
                return 1;
            }else if(a.medie<b.medie){
                return -1;
            } else{
                return 0
            }
        });
    }
    sortDesc(){
        this.elevi.sort(function(a,b){
            return b.medie - a.medie;
        });
    }
    sortAscNote(){
        this.elevAscultat.note.sort(function(a,b){
            return a-b;
        });
    }
    sortDescNote(){
        this.elevAscultat.note.sort(function(a,b){
            return b - a;
        });
    }
}

var catalog = new Catalog();

function onSubmitAddElev(event){
    event.preventDefault();
    var numeElev = document.querySelector(".elevNou").value;
    catalog.addElev(numeElev);
    document.querySelector(".elevNou").value="";
    drawElevi();
}
function onSubmitAddNota(){
    event.preventDefault();
    var notaElev = Number(document.querySelector(".notaNoua").value);
    catalog.addNota(notaElev);
    document.querySelector(".notaNoua").value=""; 
    drawNote();
    drawElevi();
}
function onClickVeziNote(idx){
    catalog.veziNote(idx);
    drawNote();
    document.querySelector(".container").classList.add("redimensionare");
    document.querySelector(".note_elev_wrapper").classList.add("redimensionareCopil");
    document.querySelector(".lista_elevi_wrapper").classList.add("redimensionareCopil");
    document.querySelector(".note_elev_wrapper").classList.remove("hidden");
}
function ascundeDivNote(){
    document.querySelector(".container").classList.remove("redimensionare");
    document.querySelector(".note_elev_wrapper").classList.remove("redimensionareCopil");
    document.querySelector(".lista_elevi_wrapper").classList.remove("redimensionareCopil");
    document.querySelector(".note_elev_wrapper").classList.add("hidden");
}


function onClickSortAscMedie(){
    catalog.sortAsc();
    drawElevi();
}
function onClickSortDescMedie(){
    catalog.sortDesc();
    drawElevi();
}

function onClickSortNoteAsc(){
    catalog.sortAscNote();
    drawNote();
}
function onClickSortNoteDesc(){
    catalog.sortDescNote();
    drawNote();
}
function drawElevi(){
    var str = "";
    for(var i=0;i<catalog.elevi.length;i++){
        var elev = catalog.elevi[i];
        str+=`
            <tr>
                <td>${elev.nume}</td>
                <td>${elev.medie}</td>
                <td><button onclick="onClickVeziNote(${i})">Vezi Note</button></td>
            </tr>
        `
    }
    document.querySelector("#elevi tbody").innerHTML = str;
}
function drawNote(){
    var note = catalog.elevAscultat.note;
    var str = "";
    for(var i=0;i<note.length;i++){
        var nota = note[i];
        str+=`
            <tr>
                <td>${nota}</td>
            </tr>
        `
    }
    document.querySelector("#note tbody").innerHTML = str;
}
async function delay(param){
    


}