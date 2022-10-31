export function swipeSystem(system: HTMLElement, panels: any[]) {
	let isDown = false
	let startX: number
	let scrollLeft: number
	let ioOptions = {
		root: system,
		rootMargin: '0px',
		threshold: 0.50
	}
	const io = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio >= 0.50) {
				// Add 'observed' class if observation target is inside viewport
				entry.target.classList.add('observed')
			} else {
				// Remove 'observed' class otherwise
				entry.target.classList.remove('observed')
			}
		})
	}, ioOptions)
		
	panels.forEach((el) => {
		io.observe(el)
	})

	system.addEventListener("mousedown", e => {
		let pageX = e.pageX
		isDown = true
		system.classList.add("active")
		startX = pageX - system.offsetLeft
		scrollLeft = system.scrollLeft
	})

	system.addEventListener("mouseleave", () => {
		isDown = false
		system.classList.remove("active")
	})

	system.addEventListener("mouseup", () => {
		const observedSection = document.querySelector(".observed")
		observedSection?.scrollIntoView({
			behavior: "smooth"
		})
		isDown = false
		system.classList.remove("active")
	})

	system.addEventListener("mousemove", e => {
		if (!isDown) return

		e.preventDefault() //stop any weird stuff

		const x = e.pageX - system.offsetLeft
		const deviation = x - startX
		system.scrollLeft = scrollLeft - deviation
	})

	// after scroll event ends, scroll into observed view
	// if removed it will only go into observed view on desktops mouseup
	// on mobiles it wont go anywhere
	let isScrolling: any

	system.addEventListener('scroll', e  => {
		// Clear our timeout throughout the scroll
		window.clearTimeout( isScrolling )

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(() => {
			const observedSection = document.querySelector(".observed")
			observedSection?.scrollIntoView({
				behavior: "smooth",
			})
		}, 66)

	}, false)
}

