function howMuchILoveYou(numPedals) {
    return [`not at all`, `I love you`, `a little`, `a lot`, `passionately`, `madly`, `not at all`][numPedals % 6]
}