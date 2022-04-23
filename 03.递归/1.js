import { ensure } from "../utils.js"
import { dequal } from "dequal"

// 例子：展开嵌套数组

// 递归展开
function unfoldArr(arr) {
  let newArr = []
  for(const item of arr) {
    if(Array.isArray(item)) {
      newArr = [...newArr, ...unfoldArr(item)]
    } else {
      newArr.push(item)
    }
  }
  return newArr
}

// 不用递归的方式
function unfoldArr2(arr) {
  let stack = [...arr]
  let newArr = []
  let item
  while(stack.length > 0) {
    item = stack.pop() // 出栈
    if(Array.isArray(item)) {
      stack.push(...item) // 为数组展开并入栈
    } else {
      newArr.push(item)
    }
  }
  return newArr.reverse()
}

// 测试
function test() {
  const arr = [1, 2, [3, 4, [5, 6], 7], 8, 9, 10, [11, 12], 13]
  const expectArr = [
    1, 2, 3,  4,  5,  6,
    7, 8, 9, 10, 11, 12,
   13
 ]
  const newArr1 = unfoldArr(arr)
  const newArr2 = unfoldArr2(arr)
  ensure(dequal(expectArr, newArr1), 'unfoldArr')
  ensure(dequal(expectArr, newArr2), 'unfoldArr2')
}

test()
