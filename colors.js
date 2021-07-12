const colors = {
	result: "",
	re: '\033[0;0m',
	reset(target){
		colors.result = colors.re + target
		return colors.result
	},
	resetAfter(target){
		colors.result = target + colors.re
		return colors.result
	},
	invert(target){
		colors.result = '\033[;7m' + target + colors.re
		return colors.result
	},
	invertAll(target){
		colors.result = '\033[;7m' + target
		return colors.result
	},
	font(target, mode){
		if (mode == 'b'){
			colors.result = '\033[;1m' + target + colors.re
		}
		else if (mode == 'white'){
			colors.result = '\033[1;97m' + target + colors.re
		}
		else if (mode == 'black'){
			colors.result = '\033[1;30m' + target + colors.re
		}
		else if (mode == 'red'){
			colors.result = '\033[1;31m' + target + colors.re
		}
		else if (mode == 'light-red'){
			colors.result = '\033[1;91m' + target + colors.re
		}
		else if (mode == 'green'){
			colors.result = '\033[1;32m' + target + colors.re
		}
		else if (mode == 'light-green'){
			colors.result = '\033[1;92m' + target + colors.re
		}
		else if (mode == 'yellow'){
			colors.result = '\033[1;33m' + target + colors.re
		}
		else if (mode == 'light-yellow'){
			colors.result = '\033[1;93m' + target + colors.re
		}
		else if (mode == 'blue'){
			colors.result = '\033[1;34m' + target + colors.re
		}
		else if (mode == 'light-blue'){
			colors.result = '\033[1;94m' + target + colors.re
		}
		else if (mode == 'pink'){
			colors.result = '\033[1;35m' + target + colors.re
		}
		else if (mode == 'light-pink'){
			colors.result = '\033[1;95m' + target + colors.re
		}
		else if (mode == 'cyan'){
			colors.result = '\033[1;36m' + target + colors.re
		}
		else if (mode == 'light-cyan'){
			colors.result = '\033[1;96m' + target + colors.re
		}
		else if (mode == 'gray'){
			colors.result = '\033[1;90m' + target + colors.re
		}
		else if (mode == 'light-gray'){
			colors.result = '\033[1;37m' + target + colors.re
		}
		else {
			console.log('\033[1;31m' + "Mode Error!!" + '\033[0;0m')
		}

		return colors.result
	},
	allFont(target, mode){
		if (mode == 'b'){
			colors.result = '\033[;1m' + target
		}
		else if (mode == 'white'){
			colors.result = '\033[1;97m' + target
		}
		else if (mode == 'black'){
			colors.result = '\033[1;30m' + target
		}
		else if (mode == 'red'){
			colors.result = '\033[1;31m' + target
		}
		else if (mode == 'light-red'){
			colors.result = '\033[1;91m' + target
		}
		else if (mode == 'green'){
			colors.result = '\033[1;32m' + target
		}
		else if (mode == 'light-green'){
			colors.result = '\033[1;92m' + target
		}
		else if (mode == 'yellow'){
			colors.result = '\033[1;33m' + target
		}
		else if (mode == 'light-yellow'){
			colors.result = '\033[1;93m' + target
		}
		else if (mode == 'blue'){
			colors.result = '\033[1;34m' + target
		}
		else if (mode == 'light-blue'){
			colors.result = '\033[1;94m' + target
		}
		else if (mode == 'pink'){
			colors.result = '\033[1;35m' + target
		}
		else if (mode == 'light-pink'){
			colors.result = '\033[1;95m' + target
		}
		else if (mode == 'cyan'){
			colors.result = '\033[1;36m' + target
		}
		else if (mode == 'light-cyan'){
			colors.result = '\033[1;96m' + target
		}
		else if (mode == 'gray'){
			colors.result = '\033[1;90m' + target
		}
		else if (mode == 'light-gray'){
			colors.result = '\033[1;37m' + target
		}
		else {
			console.log('\033[1;31m' + "Mode Error!!" + '\033[0;0m')
		}

		return colors.result
	}
}

module.exports = colors