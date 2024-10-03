const MBTiles = require('@mapbox/mbtiles');

new MBTiles('./mbtiles/VTpracticegzip.mbtiles?mode=ro', (err, mbtiles) => {
  if (err) {
    console.error('MBTiles file could not be opened:', err);
  } else {
    mbtiles.getTile(1, 1, 1, (err, tile, headers) => {
      if (err) {
        console.error('Tile could not be found:', err);
      } else {
        console.log('Tile data: ', tile);
        console.log('Headers data: ', headers);
      }
    });
    mbtiles.getInfo((err, info) => {
      if (err) {
        console.error('Could not get info data:', err);
      }
      console.log('Info data: ', info);
      // console.log('Info data: ', JSON.stringify(info, null, 2));
    });
  }
});
