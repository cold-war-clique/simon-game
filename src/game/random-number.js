function randomNumber() {
    let number = Math.random();
    number = number * 10;
    const wholeNumber = Math.floor(number);
    return wholeNumber;
}

export default randomNumber;