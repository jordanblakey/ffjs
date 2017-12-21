import fs from 'fs'

// NODE METHODS ////////////////////////////////////////////////////////////////
let node
export default node = {
  fs: fs,
  // Writes a JSON object to a file.
  JSONToFile: (obj, filename) => node.fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2)),
  // Returns an array of lines from the specified file.
  readFileLines: filename => node.fs.readFileSync(filename).toString('UTF8').split('\n')
}
