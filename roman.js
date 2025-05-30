class Roman {
	constructor(number) {
		this.number = Math.floor(number);
		this.roman = "";
		if (number < 4000) {
			if (number == 0) {
				this.roman = "nulla";
			}
			while (number >= 1000) {
				this.roman += "M";
				number -= 1000;
			};
			while (number >= 500) {
				this.roman += "D";
				number -= 500;
			};
			while (number >= 100) {
				this.roman += "C";
				number -= 100;
			};
			while (number >= 50) {
				this.roman += "L";
				number -= 50;
			};
			while (number >= 10) {
				this.roman += "X";
				number -= 10;
			};
			while (number >= 5) {
				this.roman += "V";
				number -= 5;
			};
			while (number >= 1) {
				this.roman += "I";
				number -= 1;
			};
			this.roman = this.roman.replace("DCCCC","CM")
			this.roman = this.roman.replace("CCCC","CD")
			this.roman = this.roman.replace("LXXXX","XC")
			this.roman = this.roman.replace("XXXX","XL")
			this.roman = this.roman.replace("VIIII","IX")
			this.roman = this.roman.replace("IIII","IV")
		} else {
			var modulo = this.number%(1000**Math.floor(Math.log10(this.number/4)/3));
			this.roman = `${new Roman(this.number/(1000**Math.floor(Math.log10(this.number/4)/3))).toString()}^{${new Roman(Math.log10(this.number/4)/3)}}${(Math.floor(modulo) != 0) ? ` ${new Roman(modulo).toString()}` : ""}`
		};
	};
	toString() {
		return this.roman
	};
};
