// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000100002020202020202020101020202020203030303030303030202020202020202020202020102020202020202030202020303030303010303010202020202020202020202060404040404040703020303030303030604040404040404040701020202020205030203020202050303030101030303050303030303030201050202020202020502010202020105020303030101010305030303010202020205020202010202050303030302020502010303020202030501030302020202020502020204040409030303020202050203030303030303050303030103010301050303030203030203030302020205030303030302030305020202030202030205020203030203020301030202020503030303030301030502020203020303020502020303020302020203030303050102020303030303050201030303020202050202030302030202020302020105020203030202010305030303010101020205020303020303020202020303030804040404040404040903020202020202020502030202030303020202020202010101010103030303020202020102020202050303020203030302010202020202020202020201030303010303010303030305010202020203030202020202020202020202020202020202020202020202020804040a0202020202020202020202020202020202020202020202020202020202010202`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
