function solution(s) {
    s = s
        .split(" ")
        .map(str => str.charAt(0).toUpperCase() + str?.slice(1).toLowerCase())
        .join(" ")
    return s
}