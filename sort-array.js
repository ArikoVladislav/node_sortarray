const fs = require('fs');
const stream = require('stream');
const program = require('commander');
const util = require('util');

const valid = require('./module/valid');
const RemoveTransform = require('./module/transform');
const pipeline = util.promisify(stream.pipeline);

const actions = async _ => {
  const {input, output, action } = program.opts();
     process.stdout.write('Enter the text and press ENTER to remove duplicates | press CTRL + C to exit: ')

  const ReadableStream = !valid.isEmpty(input) ? fs.createReadStream(input) : process.stdin;
  const WriteableStream = !valid.isEmpty(output) ? fs.createWriteStream((output), { flags: 'a' }) : process.stdout;

  try {
    await pipeline(
      ReadableStream,
      new RemoveTransform(action),
      WriteableStream
    );
    process.stdout.write(`Text ${action}d\n`);
  } catch (e) {
    process.stderr.write(` ${e.message}\n`);
    process.exit(1);
  }
}
process.stdin.setEncoding('utf8');

program
  .requiredOption('-a --action <action>', 'An action remove')
  .option('-i, --input <filename>', 'An input file')
  .option('-o --output <filename>', 'An output file')
  .action(actions)

program.parse(process.argv);
