'use strict';

const serve = require('serve-static');

module.exports = function(app) {
  /**
   * @todo check if /public exists first
   */
  app.config.root.forEach(rootDir => {
    app.use(serve(rootDir + 'public/', {}));
  });
};