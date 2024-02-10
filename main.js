/**
* This function loads all used images.
* 
* They can be accessed with ```loader.getResult(id)```, where id is declared in the manifest.
*/
function loadResources() {
    let loadQueue = new createjs.LoadQueue(true, null, true);
    let manifest = [
        {src: "images/placeholders/field_black.svg", id: "field_black", type: createjs.LoadQueue.IMAGE},
        {src: "images/placeholders/field_white.svg", id: "field_white", type: createjs.LoadQueue.IMAGE},
        {src: "images/placeholders/chesspiece_king.svg", id: "chesspiece_king", type: createjs.LoadQueue.IMAGE},
        {src: "images/placeholders/chesspiece_queen.svg", id: "chesspiece_queen", type: createjs.LoadQueue.IMAGE},
        {src: "images/placeholders/chesspiece_rook.svg", id: "chesspiece_rook", type: createjs.LoadQueue.IMAGE},
        {src: "images/placeholders/chesspiece_bishop.svg", id: "chesspiece_bishop", type: createjs.LoadQueue.IMAGE},
        {src: "images/placeholders/chesspiece_knight.svg", id: "chesspiece_knight", type: createjs.LoadQueue.IMAGE}
    ];
    loadQueue.addEventListener("complete", () => {
        loader = loadQueue;
        console.log(`Time used to load images: ${(Date.now() - startTime) / 1000}s`);
        loadingComplete();
    });
    loadQueue.loadManifest(manifest);
};


function drawPlayingField(fieldPositions) {
    let fieldWidth = fieldPositions.length;
    let fieldSize = 100;
    let pieceOffset = 10;
    let marginX = (800 - fieldSize * fieldWidth) / 2;
    let marginY = (600 - fieldSize * fieldWidth) / 2;

    for (let fieldY = 0; fieldY < fieldWidth; fieldY++) {
        for (let fieldX = 0; fieldX < fieldWidth; fieldX++) {
            // Adding the Bitmap for the field
            let field;
            if ((fieldX + fieldY) % 2 == 0) {
                field = new createjs.Bitmap(loader.getResult("field_white"));
            }
            else {
                field = new createjs.Bitmap(loader.getResult("field_black"));
            }
            field.scale = 0.001 * fieldSize;
            field.x = fieldSize * fieldX + marginX;
            field.y = fieldSize * fieldY + marginY;
            stage.addChild(field);

            // Adding the Bitmap for the chess piece
            let chessPiece;
            switch (fieldPositions[fieldY][fieldX]) {
                case 5:
                    chessPiece = new createjs.Bitmap(loader.getResult("chesspiece_king"));
                    break;
                case 4:
                    chessPiece = new createjs.Bitmap(loader.getResult("chesspiece_queen"));
                    break;
                case 3:
                    chessPiece = new createjs.Bitmap(loader.getResult("chesspiece_rook"));
                    break;
                case 2:
                    chessPiece = new createjs.Bitmap(loader.getResult("chesspiece_bishop"));
                    break;
                case 1:
                    chessPiece = new createjs.Bitmap(loader.getResult("chesspiece_knight"));
                    break;
                case 0:
                    break;
            };
            if (! fieldPositions[fieldY][fieldX] == 0) {
                chessPiece.scale = 0.001 * (fieldSize - 2 * pieceOffset);
                chessPiece.x = fieldSize * fieldX + marginX + pieceOffset;
                chessPiece.y = fieldSize * fieldY + marginY + pieceOffset;
    
                let blurFilter = new createjs.BlurFilter(10, 10, 0);
                chessPiece.filters = [blurFilter];
                chessPiece.cache(0, 0, 1000, 1000);
    
                stage.addChild(chessPiece);
            }
        }
    }

    console.log(`Time used to draw canvas: ${(Date.now() - startTime) / 1000}s`)

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener('tick', () => {
        stage.update();
    });
}


// This function is called when all images have been loaded.
function loadingComplete() {
    drawPlayingField([[5, 1, 3, 0], [2, 1, 2, 3], [3, 4, 1, 2], [1, 3, 2, 2]]);
};

let startTime = Date.now();

let loader;
let stage = new createjs.StageGL("canvas");
// This loads the images for the frontend
// Call all frontend functions in handleLoadingComplete()!
loadResources();
