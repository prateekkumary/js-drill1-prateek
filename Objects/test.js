

import { testObject } from "./objects.js";
import { keys ,values,mapObject, pairs} from "./solution.js";

let  keyArray=keys(testObject);
console.log(keyArray);

let valueArray=values(testObject);
console.log(valueArray);


let mapObjectArray=mapObject(testObject,(value)=>{ return value.toString()});
console.log(mapObjectArray);


let listOfObject=pairs(testObject);
console.log(listOfObject);


