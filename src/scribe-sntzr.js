var sanitizeHtml = require('sanitize-html');
var _ = require('lodash');

module.exports = function(config) {
  var cfg = _.merge(_.cloneDeep(config), {
    tags: {
      em: { class: 'scribe-marker' },
      br: {}
    }
  });

  return function(scribe) {
    var janitor = function(html) {
      return sanitizeHtml(html, cfg);
    };

    scribe.registerHTMLFormatter('sanitize', janitor);
  };
};
