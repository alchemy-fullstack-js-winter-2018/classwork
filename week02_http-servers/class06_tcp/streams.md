# Streams

## Read File Stream

* use `fs.createReadStream` to create a new
  read stream from `LAB.md`
* `console.log` the contents of `LAB.md`
  * HINT: add a listener to the `data` event


















## Write File Stream

* use `fs.createWriteStream` to create a new
  write stream
* use the `write` method to write to your
  stream


















## Copy with chunks

* create a read stream from `LAB.md`
* create a write stream to `LAB-copy.md`
* copy the contents of `LAB.md` to
  `LAB-copy.md` using your streams
  * `on` each `data` event from your read stream use
    `write` on your write stream















## Pipe streams

* create a read stream from `LAB.md`
* create a write stream to `LAB-copy.md`
* copy the contents of `LAB.md` to
  `LAB-copy.md` using your streams
  * HINT: read about `pipe`
* How would you use `pipe` to print to the
  terminal?
