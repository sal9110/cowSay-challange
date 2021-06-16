const student= require("./information");
const cowSay= require("cowsay");




console.log(cowSay.say({
    text: `Hello! I'm ${student.name} from the ${student.campus}`,
    e:"^ ^",
    T:"U "
}))
