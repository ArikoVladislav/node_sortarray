const { Transform } = require('stream');

const {RemoveDuplicate, SortMass} = require('./code');

class RemoveTransform extends Transform {
    constructor(action) {
      super();
      this.action = action;
    }
  
    _transform(chunk, _, done) {
      let result = '';
  
      switch (this.action) {
        case 'remove':
          result = RemoveDuplicate(chunk.toString('utf8'));
          break;
        case 'sort':
          result = SortMass(chunk.toString('utf8'));
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
  