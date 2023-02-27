const timer = (id, deadline) => {
	const addZero = (number) => {
		return number < 10 ? `0${number}` : number;
	}

	const getRemainingTime = (endtime) => {
			const time = Date.parse(endtime) - Date.parse(new Date());
			const seconds = Math.floor((time / 1000) % 60);
			const minutes = Math.floor((time / 1000 / 60) % 60);
			const hours = Math.floor((time / 1000/ 60 / 60) % 24);
			const days = Math.floor(time / (1000 * 60 * 60 * 24));
			const expired = '00'; 

		return {
						time,
						seconds,
						minutes,
						hours,
						days,
						expired	};
	};

	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector);
		const days = timer.querySelector('#days');
		const hours = timer.querySelector('#hours');
		const minutes = timer.querySelector('#minutes');
		const seconds = timer.querySelector('#seconds');
		const timerIntervalId = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getRemainingTime(endtime);

			days.textContent = addZero(t.days);
			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.time <= 0) {
				days.textContent = t.expired;
				hours.textContent = t.expired;
				minutes.textContent = t.expired;
				seconds.textContent = t.expired;

				clearInterval(timerIntervalId);
			}
		}
	}

	setClock(id, deadline);
}

export default timer;