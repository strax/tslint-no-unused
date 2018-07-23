import * as tslint from "tslint"
import * as path from "path"

const t0 = process.hrtime()
for (let i = 0; i < 10; i++) {
  tslint.Test.runTest(path.join(__dirname, "rules/no-unused/default"), path.join(__dirname, "..", "dist"))
}
const t1 = process.hrtime(t0)
console.log("Took %d seconds, %d nanoseconds", t1[0], t1[1])

