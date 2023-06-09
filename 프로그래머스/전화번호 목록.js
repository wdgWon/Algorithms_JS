
// 해시를 이용한 풀이
function solution(phone_book) {
    const hashMap = {}
    
    for(let phoneNumber of phone_book) {
        hashMap[phoneNumber] = 1
    }
    
    for(let phoneNumber of phone_book) {
        let temp = ""
        const phoneNumberWithoutSpace = phoneNumber.replace(/\s/g, "")
        
        for(let number of phoneNumberWithoutSpace) {
            temp += number
            
            if(hashMap[temp] && temp != phoneNumberWithoutSpace) {
                return false
            }
        }
    }
    
    return true
}


// 파이썬 수빈님 코드 (sort를 사용해서 정렬 후 다음 문자열하고만 비교)

// def solution(phone_book):
//     phone_book.sort()
//     for i in range(len(phone_book)-1):
//         cur = phone_book[i]
//         next = phone_book[i+1]
//         if len(cur) <= len(next):
//             if cur == next[:len(cur)]:
//                     return False
//     return True