export default function Cache () {
	const _ = {};

	return {
		get (key, createNew) {
			if (_[key]) {
				return _[key];
			}
			return _[key] = createNew();
		},
		remove (key) {
			delete _[key];
		}
	};
}
