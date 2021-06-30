let boolToWord = bool => {
    var a = bool.toString();
    if (a == 'true')
        return 'Yes';
    else
        return 'No';
}