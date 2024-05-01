export default class Team {
	constructor() {
		this.members = new Set();
	}
	add(character) {
		if (this.members.has(character)) {
			throw new Error('error')
		}
		this.members.add(character);
	}

	addAll(...all) {
		for (const key of all) {
			this.members.add(key)
		};
	}

	[Symbol.iterator]() {
		const array = Array.from(this.members.values());
		let start = 0;
		let end = array.length;
		return {
			next() {

				if (start < end) {
					return {
						done: false,
						value: ++start
					};
				}
				return {
					done: true,
				};
			},
		};
	};
};