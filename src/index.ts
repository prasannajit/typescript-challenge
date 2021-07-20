import { User } from "./models/User";

const user = new User({name:'Jack',age:35});
console.log(user.get('name'));
user.set({age:23});
console.log(user.get('age'));
user.on('change',()=>{});
console.log(user);
user.on('change',()=>{});
user.on('update',()=>{});
console.log(user);
