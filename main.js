//
//extensions
//


//
//variablen konfigurieren
//

//field
var field = [];
//breite
var b = 0;
//anzahl der einzelnen Figuren
var numspringer = 0;
var numlaufer = 0;
var numturm = 0;
var numdame = 0;



//
//funktionen
//

//generation
function generator(b){
    //anzahl der figuren konfigurieren
    numspringer = 0;
    numlaufer = 0;
    numdame = 0;
    numturm = 0;

    for(var i=0; i<=b*b-1; i++){
        while(1>0){
            var random = Math.floor(Math.random() * 4);
            if(i == b-1){
                field.push(0)
                break
            }
            if(i == b*(b-1)-1){
                field.push(5)
                break
            }
            if(random==0){
                if(numspringer<Math.floor(((b*b)-2)/3)){
                    field.push(1)
                    break
                }
            }
            if(random==1){
                if(numlaufer<Math.floor(((b*b)-2)/3)){
                    field.push(2)
                    break
                }
            }
            if(random==3){
                if(numdame<Math.floor(((b*b)-2)/9)){
                    field.push(4)
                    break
                }
            }
            if(random==2){
                if(numturm<(b*b-2)- Math.floor((((b*b)-2)/3)*2) - Math.floor(((b*b)-2)/9)){
                    field.push(3)
                    break
                }
            }
        }
    }
}




//
//main
//