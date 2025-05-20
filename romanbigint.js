class BigIntRoman {
	constructor(number) {
		this.number = number;
		this.roman = "";
		if (number < 4000n) {
			if (number == 0n) {
				this.roman = "nulla";
			}
			while (number >= 1000n) {
				this.roman += "M";
				number -= 1000n;
			};
			while (number >= 500n) {
				this.roman += "D";
				number -= 500n;
			};
			while (number >= 100n) {
				this.roman += "C";
				number -= 100n;
			};
			while (number >= 50n) {
				this.roman += "L";
				number -= 50n;
			};
			while (number >= 10n) {
				this.roman += "X";
				number -= 10n;
			};
			while (number >= 5n) {
				this.roman += "V";
				number -= 5n;
			};
			while (number >= 1n) {
				this.roman += "I";
				number -= 1n;
			};
			this.roman = this.roman.replace("DCCCC","CM")
			this.roman = this.roman.replace("CCCC","CD")
			this.roman = this.roman.replace("LXXXX","XC")
			this.roman = this.roman.replace("XXXX","XL")
			this.roman = this.roman.replace("VIIII","IX")
			this.roman = this.roman.replace("IIII","IV")
		} else {
			var nonBigInt = Number(this.number)
			var modulo = BigInt(nonBigInt%(1000**Math.log10(nonBigInt/4)/3));
			this.roman = `${new Roman(BigInt(Math.floor(nonBigInt/(1000**Math.log10(nonBigInt/4)/3)))).toString()}^{${new Roman(BigInt(Math.log10(nonBigInt/4)/3))}}${(modulo != 0n) ? ` ${new Roman(modulo).toString()}` : ""}`
		};
	};
	toString() {
		return this.roman
	};
};
