class CommonFn {

	//函数防抖
	static debounce(func, wait) {
		let timer;
		return function() {
			let context = this; // 注意 this 指向
			let args = arguments; // arguments中存着e

			if (timer) clearTimeout(timer);

			timer = setTimeout(() => {
				func.apply(this, args)
			}, wait)
		}
	}

	//函数节流
	static throttle(fn, gapTime) {
		if (gapTime == null || gapTime == undefined) {
			gapTime = 1500;
		}
		let _lastTime = null;
		// 返回新的函数
		return function() {
			let _nowTime = +new Date();
			if (_nowTime - _lastTime > gapTime || !_lastTime) {
				fn.apply(this, arguments); //将this和参数传给原函数
				_lastTime = _nowTime;
			}
		};
	}
}
	
module.exports = CommonFn;