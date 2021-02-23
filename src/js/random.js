let random = {
  color: () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
  },
  
  number: (num1, num2, n) => {
    let conditionObj = {
      one: num1 != null && num2 == null && n == null,
      two: num1 != null && num2 != null && n == null,
      three: num1 != null && num2 != null && n != null,
      four: num1 != null && num2 == null && n != null,
    }
    let numList = []
  // conditionObj传入的参数判断
  // one只有上限 two只有上下限 there上线限且生成多个 four只有上限且生成多个
    switch (true) {
      case conditionObj.one:
        return Math.random() * num1;
      case conditionObj.two:
        return parseInt(Math.random() * (num1 - num2 + 1) + num2)
      case conditionObj.three:
        for (let i = 0; i < n; i++) {
          numList.push(parseInt(Math.random() * (num1 - num2 + 1) + num2))
        }
        return numList;
      case conditionObj.four:
        for (let i = 0; i < n; i++) {
          numList.push(Math.random() * num1)
        }
        return numList
      default:
        return null
    }
  },
  verificationCode:(num)=>{
    let list=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let numList=[]
    for(let i=0;i<num;i++){
       numList.push(list[Math.floor(Math.random()*list.length)])
    }
    return numList
  }
}
export default random