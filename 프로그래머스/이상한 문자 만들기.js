function solution(s) {
    return s.split(" ").map(word => {
        let str = '';
        for(let i = 0; i < word.length; i++) {
            if(i % 2 === 0) {
                str += word[i].toUpperCase();
            }
            else {
                str += word[i].toLowerCase();
            }
        }
        return str;
    }).join(" ");
}