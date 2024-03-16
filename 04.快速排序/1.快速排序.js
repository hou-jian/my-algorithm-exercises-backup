import { dequal } from "dequal";
import { ensure } from "../utils.js";

/*
  ## 需求：给定一个数组，进行从小到大的排序

  本例使用“快速排序”:

  - 确定“基线条件”：0或1个的数组，无需排序
  - 确定一个基准值（随便哪个都行）
  - 分区（partitioning）：“小于等于基准值的元素子数组 + 基准值 + 大于基准值的元素子数组”
  - 递归的对这两个子数组进行“快速排序”，直到满足“基线条件”
 */

function quicksort(arr) {
  // - 基线条件 最简单的数组就是0或1个元素的数组，它无需排序。
  if (arr.length < 2) return arr;

  // - 递归条件 不断缩小规模，接近基线条件。
  let pivot = arr.splice(Math.floor(arr.length / 2), 1)[0]; // 基准值 这里选择中间的元素
  let lessArr = []; // 存放所有小于等于基准值元素的子数组
  let greaterArr = []; // 存放大于基准值元素的子数组

  for (const item of arr) {
    if (item <= pivot) {
      lessArr.push(item);
    } else {
      greaterArr.push(item);
    }
  }

  // 递归的对这两个子数组进行 quicksort
  return [...quicksort(lessArr), pivot, ...quicksort(greaterArr)];
}

// 测试
function test() {
  const arr = quicksort([2, 100, 123, 2, -1, 0, 0, 888, 777]);
  const expectArr = [-1, 0, 0, 2, 2, 100, 123, 777, 888];
  // 比较快速排序后的数组与预期数组是否一致
  ensure(dequal(arr, expectArr), "quicksort");
}

test();
