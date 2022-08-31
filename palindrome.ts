function palindromeString2(val: string) {
    val = val.toLowerCase();
    const stringToArray: string[] = val.split('');
    const reverseArrayValue: string[] = stringToArray.reverse();
    const arrayToString: string = reverseArrayValue.join('');

    if(val == arrayToString ) {
        console.log(val + ' adalah palindrome');
    } else {
        console.log(val + ' bukan palindrome');
    }
}

const string2 = prompt('masukkan huruf: ');
palindromeString2(string2);