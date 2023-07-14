function solution(s) {
    const reg = new RegExp('(zero|one|two|three|four|five|six|seven|eight|nine)', 'g');
    s = s.replaceAll(reg, (m) => {
        switch(m) {
            case 'zero': return '0'
            case 'one': return '1'
            case 'two': return '2'
            case 'three': return '3'
            case 'four': return '4'
            case 'five': return '5'
            case 'six': return '6'
            case 'seven': return '7'
            case 'eight': return '8'
            case 'nine': return '9'
        }
    })
    return parseInt(s);
}