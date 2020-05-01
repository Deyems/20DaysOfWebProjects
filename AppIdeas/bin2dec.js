
class Calculation{
  constructor() {
    this.UnitFrom = document.querySelector('#from');
    this.UnitTo = document.querySelector('#to');
    this.find = document.querySelector('#val');
    this.solveBtn = document.querySelector('#calc');
    this.cls = document.querySelector('#cls');
    this.result = document.querySelector('#result');
    this.errorMsg = document.querySelector('.error');
    this.toggleBtn = document.querySelector('.sideBtn');
    this.dotBtn = document.querySelector('.rating');
  }

  run(){

    this.toggleBtn.addEventListener('click',(new Hidden).navigation);
    this.dotBtn.addEventListener('click',(new Hidden).rightSide)

    this.find.addEventListener('input',this.validate);

    this.solveBtn.addEventListener('click',this.convert);
    this.cls.addEventListener('click',this.clearScreen);
  }

  validate = (e) => {

    const Base = {
      "bin": "2",
      "oct": "8",
      "dec": "10",
      "hex": "16"
    }

    if(this.UnitFrom.value === Base["bin"]){
      if(!(new Validator).checkForBinary(this.find.value))
        {this.errorMsg.innerText = `*Cannot process Non-binary value`;
        }else{
          this.errorMsg.innerText = ``;
        }
    }

    if(this.UnitFrom.value === Base["oct"]){
      if(!(new Validator).checkForOctal(this.find.value))
        {this.errorMsg.innerText = `*Cannot process Non-Octal values`;
        }else{
          this.errorMsg.innerText = ``;
        }
    }

    if(this.UnitFrom.value === Base["dec"]){
      if(!(new Validator).checkForDecimal(this.find.value))
        {this.errorMsg.innerText = `*Cannot process Non-Decimal values`;
      }else{
        this.errorMsg.innerText = ``;
      }
    }

    if(this.UnitFrom.value === Base["hex"]){
      if(!(new Validator).checkForHexaDecimal(this.find.value))
      {this.errorMsg.innerText = `*Cannot process Non-Hexadecimal values`;
      }else{
        this.errorMsg.innerText = ``;
      }
    }
  }

  convert = (e) => {
    //function to help convert a binary number to Octal
    if(this.UnitFrom.value === "2"
    && this.UnitTo.value === "8"){
      let answer = (new Converter).bin2octal(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base2) == ${answer} (base8)`;
    }
    if(this.UnitFrom.value === "2"
    && this.UnitTo.value === "10"){
      let answer = (new Converter).bin2Dec(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base2) == ${answer} (base10)`;
    }
    if(this.UnitFrom.value === "2"
    && this.UnitTo.value === "16"){
      let answer = (new Converter).bin2Hex(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base2) == ${answer} (base16)`;
    }

    if(this.UnitFrom.value === "8"
    && this.UnitTo.value === "2"){
      let answer = (new Converter).oct2Bin(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base8) == ${answer} (base2)`;
    }

    if(this.UnitFrom.value === "8"
    && this.UnitTo.value === "10"){
      let answer = (new Converter).oct2Dec(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base8) == ${answer} (base10)`;
    }

    if(this.UnitFrom.value === "8"
    && this.UnitTo.value === "16"){
      let answer = (new Converter).octToHex(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base8) == ${answer} (base16)`;
    }

    if(this.UnitFrom.value === "10" && this.UnitTo.value === "2"){
      let answer = (new Converter).decToAnyBase(this.find.value,Number(this.UnitTo.value));
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base10) == ${answer} (base${this.UnitTo.value})`;
    }

    if(this.UnitFrom.value === "10" && this.UnitTo.value === "8"){
      let answer = (new Converter).decToAnyBase(this.find.value,Number(this.UnitTo.value));
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base10) == ${answer} (base${this.UnitTo.value})`;
    }

    if(this.UnitFrom.value === "10" && this.UnitTo.value === "16"){
      let answer = (new Converter).decToAnyBase(this.find.value,Number(this.UnitTo.value));
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base10) == ${answer} (base${this.UnitTo.value})`;
    }

    if(this.UnitFrom.value === "8"
    && this.UnitTo.value === "16"){
      let answer = (new Converter).octToHex(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base8) == ${answer} (base16)`;
    }


    if(this.UnitFrom.value === "16"
    && this.UnitTo.value === "2"){
      let answer = (new Converter).hexToBin(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base16) == ${answer} (base2)`;
    }

    if(this.UnitFrom.value === "16"
    && this.UnitTo.value === "8"){
      let answer = (new Converter).hexToOct(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base16) == ${answer} (base8)`;
    }

    if(this.UnitFrom.value === "16"
    && this.UnitTo.value === "10"){
      let answer = (new Converter).hexToDec(this.find.value);
      // console.log(answer);
      this.result.innerText = `${this.find.value}(base16) == ${answer} (base10)`;
    }

  }

  clearScreen = () => {
    this.result.innerText = ``;
    this.find.value = ``;
    this.find.focus();
  }

}

class Validator{
  // constructor(){
  //
  // }
  checkForBinary(binDigit){
    //EDGE CASES check;
    if(binDigit === null) return false;
    if(binDigit === "") return false;
    if(typeof binDigit !== "string") return false;
    if(/[^01]/.test(binDigit)) return false;
    return true;
  }

  checkForOctal(octDigit){
    //EDGE CASES check
    if(octDigit === null) return false;
    if(octDigit === "") return false;
    if(typeof octDigit !== "string") return false;
    if(/[^0-7]/.test(octDigit)) return false;
    return true;
  }

  checkForDecimal(decDigit){
    //EDGE CASES check
    if(decDigit === null) return false;
    if(decDigit === "") return false;
    if(typeof decDigit !== "string") return false;
    if(/[^0-9]/.test(decDigit)) return false;
    return true;
  }

  checkForHexaDecimal(hexDigit){
    if(hexDigit === null) return false;
    if(hexDigit === "") return false;
    if(typeof hexDigit !== "string") return false;
    if(/[^0-7|A-F]/.test(hexDigit)) return false;
    return true;
  }
}

class Converter{

  decToAnyBase(decimal,base){
    let stack = []; let result="";
    const exceptions = {
      10: "A",
      11: "B",
      12: "C",
      13: "D",
      14: "E",
      15: "F"
    }
    while(decimal !== 0){
      let rem = decimal%base;
      if(rem > 9){
        rem = exceptions[rem];
      }
      stack.push(rem);
      decimal = Math.floor(decimal / base);
    }

    while(stack.length){
      result += stack.pop();
    }
    return result;
  }

  bin2Dec(binDigit){
      //EDGE CASES
    if((new Validator).checkForBinary(binDigit)){
      // AFTER NO EDGE CASES AGAIN
      let counter = 0; let decimal = 0;
      for(let i = binDigit.length-1; i >= 0; i--){
        decimal += Number(binDigit[i])*(2**counter);
        counter++;
      }
      return decimal;
    }

  }

  bin2octal(binDigit){
    let decimal = this.bin2Dec(binDigit);
    if(decimal === undefined) return "Not A Valid Number";
    let octal = this.decToAnyBase(decimal,8);
    return octal;
  }

  bin2Hex(binDigit){
    let decimal = this.bin2Dec(binDigit);
    if(decimal === undefined) return "Not A Valid Number";

    let hexEqi = this.decToAnyBase(decimal,16);
    return hexEqi;
  }

  oct2Bin(octDigit){
    //convert to base 10
    let decimal = this.oct2Dec(octDigit);
    if(decimal === undefined) return "Invalid entry";
    //Then convert to base two
    let binary = this.decToAnyBase(decimal,2);
    return binary;
  }

  oct2Dec(octDigit){
    //EDGE CASES
    if((new Validator).checkForOctal(octDigit)){
      let dec = `0o`+octDigit;
      return Number(dec);
    }
  }

  octToHex(octDigit){
    let decimal = this.oct2Dec(octDigit);
    //Then convert to base Sixteen
    let hex = this.decToAnyBase(decimal,16);
    return hex;
  }

  hexToBin(hexDigit){
    //convert to base 10
    let decimal = this.hexToDec(hexDigit);
    if(decimal === undefined) return "Invalid entry";
    //Then convert to base two
    let binary = this.decToAnyBase(decimal,2);
    return binary;
  }

  hexToOct(hexDigit){
    //convert to base 10
    let decimal = this.hexToDec(hexDigit);
    // if(decimal === undefined) return "Invalid entry";
    //Then convert to base two
    let octal = this.decToAnyBase(decimal,8);
    return octal;
  }

  hexToDec(hexDigit){
    if((new Validator).checkForHexaDecimal(hexDigit)){
      let dec = `0x`+hexDigit;
      return Number(dec);
    }
  }

}

class Hidden{
  constructor(){
    this.nav = document.querySelector('nav');
    this.rightBar = document.querySelector('.left-bar');
  }

  navigation = () => {
    // console.log(this.nav);
    this.nav.classList.toggle('show');
  }

  rightSide = () => {
    this.rightBar.classList.toggle('pop');
  }

}


let converter = new Calculation();
converter.run();
