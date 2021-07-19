function findNeedle(haystack) {
    for (i = 0; i < haystack.length; i++) {
        if (haystack[i] == "needle") {
            return `found the needle at position ${i}`
        }
    }
}

// or you can also do indexOf()

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}

// or as a fat arrow function without template string literals
const findNeedle = haystack => 'found the needle at position ' + haystack.indexOf('needle')