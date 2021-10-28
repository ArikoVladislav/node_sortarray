const { Transform } = require('stream');

const {RemoveDuplicate} = require('./code');

class RemoveTransform extends Transform {
    constructor(action) {
      super();
      this.action = action;
    }
  
    _transform(chunk, _, done) {
      let result = '';
  
      switch (this.action) {
        case 'remove':
          result = RemoveDuplicate(chunk.toString('uint8_t'));
          break;
        default:
          process.stderr.write(' Erorr: Action not found\n');
          process.exit(1);
      }
  
      this.push(result);
      done();
    }
  }
  module.exports = RemoveTransform;