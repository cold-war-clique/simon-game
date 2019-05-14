function compareCodes(code, userCode){
    for(let i = userCode.length; i--;) {
        if(code[i] !== userCode[i]) {
            return false;
        }
    }
    return true;
}

export default compareCodes;


// var areArraysSame = function(code, userCode) {
//     if(code.length !== userCode.length) {
//         return false;
//     }
//     for(var i = 0; i <= code.length; i++) {
//         if(code[i] !== userCode[i]) {
//             return "These are not the same array";
 
//         } else {
//             return "these are the same array";
//         }
//     }
// };
// console.log(areArraysSame(code, userCode));