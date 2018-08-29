const Component = require('./ComponentTextNode');

module.exports = Component.extend(
  {
    toHTML() {
      return `<${'!'}--${this.get('content')}-->`;
    }
  },
  {
    isComponent(el) {
      var result = '';
      if (el.nodeType === 8) {
        result = {
          tagName: 'NULL', // just need this to avoid some parser rule
          type: 'html-comment',
          content: el.textContent
        };
      }
      return result;
    }
  }
);
