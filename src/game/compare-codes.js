function compareCodes(code, userCode){
    for(let i = userCode.length; i--;) {
        if(code[i] !== userCode[i]) {
            return false;
        }
    }
    return true;
}

export default compareCodes;