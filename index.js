const student= require("./information");
const cowSay= require("./node_modules/cowsay");




console.log(cowSay.say({
    text: `Hello! I'm ${student.name} from the ${student.campus}`,
    e:"^ ^",
    t:"U",
}))
