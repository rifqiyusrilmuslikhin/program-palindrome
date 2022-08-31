function palindromeString(val: string) {
    val = val.toLowerCase();
    const len: number = val.length;

    for(let i: number = 0; i < len/2; i++) {
        if(val[i] !== val[len -1 - i]) {
            return `${val} bukan palindrome`;
        }
    }
    return `${val} adalah palindrome`;
}

const string = prompt('Masukkan huruf: ');
const value = palindromeString(string);
console.log(value);