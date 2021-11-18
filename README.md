# task1

## RemoveDuplicate || SortMass CLI tool

# Run app
```
$ git clone https://github.com/vlaadg/nodeTask1
```
```
$ cd nodeTask1
```
```
$ npm i
```

### Usage example:

CLI tool accept 3 options (short alias and full name):

1. -i, --input: an input file
2. -o, --output: an output file
3. -a, --action: an action complete

Remove || Sort input.txt to output.txt:
```
$ node cli -i "./input.txt" -o "./output.txt" -a remove
```
```
$ node cli -i "./input.txt" -o "./output.txt" -a sort
```
Remove || Sort stdin to stdout:
```
$ node cli -a remove
```
```
$ node cli -a sort
```

For action remove need enter text through "," , for example:

["abracadabra","allottee","assessee"] -> ['abracadabra','alote','asese']

For action sort need enter text through "," , for example:

[9, 8, 7, 6, 5, 4, 3, 2, 1, 0] -> [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
