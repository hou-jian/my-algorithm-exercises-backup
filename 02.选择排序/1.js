import { ensure } from "../utils.js";

// 直接对arr进行操作，进行选择排序
function selectionSort(arr) {
  let smallestIndex = 0;
  let temp;

  //最后一次无需交换，故 length - 1
  for (let i = 0; i < arr.length - 1; i++) {
    smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        // 找到最小数的下标
        smallestIndex = j;
      }
    }
    // 交换位置
    temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }
}

// 测试
function test() {
  const arr1 = [0, 21, 12, 12, -151, 0, 1, 1, 99, 89, -111, 888];
  selectionSort(arr1);
  const s = (() => {
    for (let i = 0; i < arr1.length - 1; i++) {
      if (arr1[i] > arr1[i + 1]) {
        return false;
      }
    }
    return true;
  })();

  ensure(s, "selectionSort");
}

test();
