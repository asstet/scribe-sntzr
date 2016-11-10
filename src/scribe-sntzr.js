var sanitizeHtml = require('sanitize-html');

module.exports = function(config) {
  var cfg = merge(cloneDeep(config), {
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
