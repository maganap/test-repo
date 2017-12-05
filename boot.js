/**
 *  @module boot - Settings iniciales para App
 *  @description Si existe entonces se ejecuta.
 *   En este se pueden colocar Servicios o settings iniciales
 *  @example
 *    fs.access('./app/servers/ubikable.js', fs.R_OK , (err) => {
    if(!err){
      var UbikableServer = require('./servers/ubikable');
      new UbikableServer(App);
    }else {
      log.error(err);      
    }
}
 */
module.exports = Boot;

var log;
function Boot(App) {
  let log    = App.log.child({ module: 'boot' });
  let initMS = (new Date()).getTime();

  log.info('---> Boot Init <---');

  /* PUT YOUR CODE BELOW THIS LINE */

  /*

  // Example: Set storage reference list
  // You may keep 'temporal'. The rest are just examples, adapt to your needs.
  log.info('Loading Storage References...');
  let storageReferences = {
    'temporal': { service: 'local',  container: 'temporal-uploads',   pathPrefix: '' },
    'profile':  { service: 'gcloud', container: '<your container>', pathPrefix: 'profile/' },
    'vehicle':  { service: 'gcloud', container: '<your container>', pathPrefix: 'vehicle/' }
  };
  App.Storage.setReferences(storageReferences);


  // Example: Load Geo IP data to map IP addresses to country
  // Remember to call 'npm install geoip-lite' if you want to use this example
  log.info('Loading GeoIP lite...');
  let geoip = require('geoip-lite');
  geoip.startWatchingDataUpdate();

  */

  /* PUT YOUR CODE ABOVE THIS LINE */

  // push notifications
  log.info('Init Push Services...');
  App.push.init();

  log.info('Total Boot time: ' + ((new Date()).getTime() - initMS) + 'ms');
}
