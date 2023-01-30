//"To load an ES module, set "type": "module" in the package.json or use the '.mjs' extension"

//import User from '/export.mjs' //Absolute Path
//import User from './export.mjs'//Relative Path 

//import DefaultImport from './export.mjs' //This only grabs the default export of the targeted file ()
import Default, { printName, printAge } from './export.mjs' //Bracket imports need original names

const user = new Default('Bob', 11)
console.log(user, printName(user), printAge(user))