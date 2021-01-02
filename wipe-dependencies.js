// https://medium.com/@jh3y/how-to-update-all-npm-packages-in-your-project-at-once-17a8981860ea
// Change all dependency version to `*`
const fs = require('fs')
const wipeDependencies = () => {
  const file  = fs.readFileSync('package.json')
  const content = JSON.parse(file)
  for (const devDep in content.devDependencies) {
    content.devDependencies[devDep] = '*'
  }
  for (const dep in content.dependencies) {
    content.dependencies[dep] = '*'
  }
  fs.writeFileSync('package.json', JSON.stringify(content))
}
if (require.main === module) {
  wipeDependencies()
} else {
  module.exports = wipeDependencies
}