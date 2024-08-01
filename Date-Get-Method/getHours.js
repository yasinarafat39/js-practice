

/*
    Get hour (0-23)  
*/

const d = new Date();
console.log(d.getHours()); // 22 (because start from 0) 


function getIntNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

switch (new Date()) {
    case 0:
        minute = `Ekhon ${0} Minute baje`;
        break;
    case 1:
        minute = `Ekhon ${1} Minute baje`;
        break;
    case 2:
        minute = `Ekhon ${2} Minute baje`;
        break;
    case 3:
        minute = `Ekhon ${3} Minute baje`;
        break;
    case 4:
        minute = `Ekhon ${4} Minute baje`;
        break;
    case 5:
        minute = `Ekhon ${5} Minute baje`;
        break;
    case 6:
        minute = `Ekhon ${6} Minute baje`;
        break;
    case 7:
        minute = `Ekhon ${7} Minute baje`;
        break;
    case 8:
        minute = `Ekhon ${8} Minute baje`;
        break;
    case 9:
        minute = `Ekhon ${9} Minute baje`;
        break;
    case 10:
        minute = `Ekhon ${10} Minute baje`;
        break;
    case 11:
        minute = `Ekhon ${11} Minute baje`;
        break;
    case 12:
        minute = `Ekhon ${12} Minute baje`;
        break;
    case 13:
        minute = `Ekhon ${13} Minute baje`;
        break;
    case 14:
        minute = `Ekhon ${14} Minute baje`;
        break;
    case 15:
        minute = `Ekhon ${15} Minute baje`;
        break;
    case 16:
        minute = `Ekhon ${16} Minute baje`;
        break;
    case 17:
        minute = `Ekhon ${17} Minute baje`;
        break;
    case 18:
        minute = `Ekhon ${18} Minute baje`;
        break;
    default:
        minute = `Tumar inputer cheye minute beshi beje gese. please check it out.`;
}

console.log(minute);




