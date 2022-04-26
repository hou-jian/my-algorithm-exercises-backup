// 理解分而治之的思想
// - 确定基线条件（ base case ），对于求和，最简单的数组自然是1个或0个元素，就在此时终止递归。
// - 确定递归条件（ recursive case ），每次递归pop掉一个元素，缩小范围。
// 就这样把问题不断的简化来解决问题。

// 编写一个sum函数用递归的方式求和
function sum(arr) {
  // 基线条件
  if(arr.length === 1) {
    return arr[0]
  }
  // 递归条件（缩小范围）
  let endItem = arr.pop()
  return endItem + sum(arr)
}

const arr = [1, 44, 11, 22]
console.log(sum(arr))