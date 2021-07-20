function well(x) {
    let start = 0
    for (i = 0; i < x.length; i++) {
        if ('good' == x[i]) {
            start++
        }
    }
    if (start == 0) {
        return 'Fail!'
    } else if (2 >= start) {
        return 'Publish!'
    } else {
        return 'I smell a series!'
    }
}