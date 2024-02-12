
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

var maxspringer = 0;
var maxlaufer = 0;
var maxturm = 0;
var maxdame = 0;

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

    //maximale anzahl konfigurieren
    maxspringer = Math.floor((b*b)/3)
    maxlaufer = maxspringer
    maxdame = Math.floor((b*b)/9)
    maxturm = (b*b)- maxspringer - maxlaufer - maxdame - 2

    for(var i=0; i<=b*b-1; i++){
        console.log("a")
        var j = 0
        while(j<100){
            var random = Math.floor(Math.random() * 4);
            if(i == b-1){
                field.push(0)
                break
            }
            if(i == b*(b-1)){
                field.push(5)
                break
            }
            if(random==0){
                if(numspringer<=maxspringer){
                    field.push(1)
                    numspringer = numspringer + 1
                    break
                }
            }
            if(random==1){
                if(numlaufer<=maxlaufer){
                    field.push(2)
                    numlaufer = numlaufer + 1
                    break
                }
            }
            if(random==3){
                if(numdame<=maxdame){
                    field.push(4)
                    numdame = numdame + 1
                    break
                }
            }
            if(random==2){
                if(numturm<=maxturm){
                    field.push(3)
                    numturm = numturm + 1
                    break
                }
            }
            j = j +1
        }
    }
    return field
}



//
//main
//
console.log(generator(8));
/**
 * This function loads all used images.
 * 
 * They can be accessed with ```loader.getResult(id)```, where id is declared in the manifest.
 */
function loadResources() {
    let startTime = Date.now();

    let loadQueue = new createjs.LoadQueue(false);
    let manifest = [
        {src: "images/placeholders/field_black.svg", id: "field_black"}
    ];
    loadQueue.addEventListener("complete", () => {
        loadingComplete(loadQueue);
        console.log("Time used to load images: " + (Date.now() - startTime) + "ms");
    });
    loadQueue.loadManifest(manifest);
}


// This function is called when all images have been loaded.
function loadingComplete(loader) {
    
}


// This loads the images for the frontend
// Call all frontend functions in handleLoadingComplete()!
loadResources();
