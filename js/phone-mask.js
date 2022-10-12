class PhoneMask {
	constructor(selector) {
		this.input = selector;
		this.result = '';
		this.clearValue = this.getClearValue;
		this.numberLength = 11;

		this.mask = '+7 (   ) ___-__-__';

		this.init();
	}

	init() {
		this.inputHandler = this.inputHandler.bind(this);
		this.input.addEventListener('input', this.inputHandler);
		this.focusHandler = this.focusHandler.bind(this);
		this.input.addEventListener('focus', this.focusHandler);
		this.blurHandler = this.blurHandler.bind(this);
		this.input.addEventListener('blur', this.blurHandler);
	}

	focusHandler(event) {
		if (this.clearValue.length === 0) {
			this.result = '+7 (';
		}
		this.updateInputValue();
		this.updateClearValue();
	}

	blurHandler(event) {
		if (this.clearValue.length < 2) {
			this.result = '';
		}
		this.updateInputValue();
		this.updateClearValue();
	}

	inputHandler(event) {
		this.updateClearValue();
		this.updateResult();
		this.updateInputValue();
	}

	get getClearValue() {
		return this.input.value.replace(/\D+/g, '');
	}

	updateClearValue() {
		this.clearValue = this.getClearValue;
	}

	updateInputValue() {
		this.input.value = this.result;
	}

	updateResult() {
		let result = '';

		for ( let i = 0; i < this.clearValue.length && i < this.numberLength; i++) {
			switch (i) {
				case 0:
					result += this.prefixNumber(this.clearValue[i]);
					continue;
				case 4:
					result += ') ';
					break;
				case 7:
					result += '-';
					break;
				case 9:
					result += '-';
					break;
				default:
					break;
			}
			result += this.clearValue[i];
		}

		this.result = result;
	}

	prefixNumber(str) {
		if (str === '7') {
			return '+7 (';
		}
		if (str === '8') {
			return '+7 (';
		}
		return `+7 (${str}`;
	}

	destroy() {}
}