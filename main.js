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
