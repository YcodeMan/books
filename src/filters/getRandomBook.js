
export default (books, num) => {
    let len = books.length,
        arr = []
        num = len > num ? num : len
        for(let i = 0; i < num; i++) {
            let  index =  parseInt(Math.random() * len)
            if (arr.indexOf(books[index]) != -1) {
                i--
            } else {
                arr.push(books[index])
            }
           
        }
    return arr;
}