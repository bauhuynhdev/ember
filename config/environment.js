/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'open-ethereum-pool',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // API host and port
      ApiUrl: '//45.32.156.232:8080/',

      // HTTP mining endpoint
      HttpHost: 'http://45.32.156.232',
      HttpPort: 8888,

      // Stratum mining endpoint
      StratumHost: '45.32.156.232',
      StratumPort: 1386,
	  // Adding for nicehash
      StratumNicehashPort: 4445,

      // Fee and payout details
      PoolFee: '0.9%',
      PayoutThreshold: '20 PIRL',
	  
	  // For blockchain explorer for each coin
	  // Blockexplorer: 'https://explorer.ellaism.org'
	  BlockexplorerAddr: 'https://pirl.site/addr',
	  BlockexplorerTX: 'https://pirl.site/tx',

      // For network hashrate (change for your favourite fork)
      BlockTime: 13
    }
  };

  if (environment === 'development') {
    /* Override ApiUrl just for development, while you are customizing
      frontend markup and css theme on your workstation.
    */
    ENV.APP.ApiUrl = 'http://localhost:8080/'
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
