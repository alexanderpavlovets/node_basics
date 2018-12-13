function longestPolindrom(str) {
	function isPolindrom(str) {
        let matchCount = 0
        for (let i = 0; i < str.length; i++){
            if(str[i] === str[str.length-1-i]){
                matchCount++
            }
        }
        if(matchCount === str.length){return true}
        return false
    }

	const arr = str.split('')
	const polidroms = []


	for(let step = 0; step <= str.length; step++) {
        for (let char = 0; char < str.length; char++) {
            let string = arr.slice(char, char+step).join('')
            if(isPolindrom(string)){polidroms.push(string)}
        }

    }

	return polidroms.sort((a,b) => b.length - a.length)[0]
}

// this is just working solution - not "Good" one.
// rewrite if there is time for this. Try to use Array.reverse()
