function quicksort(arr) {
  // - 基线条件 最简单的数组就是0或1个元素的数组，它无需排序。
  if(arr.length < 2) return arr

  // - 递归条件 不断缩小规模，接近基线条件。
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0] // 基准值 这里选择中间值
  let lessArr = [] // 存放小于等于基准值的元素
  let greaterArr = [] // 大于基准值

  for(const item of arr) {
    if(item <= pivot) {
      lessArr.push(item)
    } else {
      greaterArr.push(item)
    }
  }
  
  return [...quicksort(lessArr), pivot, ...quicksort(greaterArr)]
}

const result = quicksort([2, 100, 123, 2, -1, 0, 0, 888, 777])
console.log(result)
