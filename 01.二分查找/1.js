import { ensure } from "../utils.js";

// 给定一个有序整数列表，查找其下标，没有返回-1
function binarySearch(list, item) {
  let low = 0; //起始下标
  let high = list.length - 1; //终止下标
  let mid = 0; //中间下标
  let guess = 0; //猜测值

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    guess = list[mid];

    if (guess === item) {
      return mid;
    }
    
    if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// 测试
function test() {
  const arr1 = [0, 1, 2, 5, 6, 11, 13, 15, 20, 22, 333, 1000];
  ensure(binarySearch(arr1, 13) === 6, "binarySearch");
  ensure(binarySearch(arr1, 1000) === 11, "binarySearch");
  ensure(binarySearch(arr1, 4) === -1, "binarySearch");
  ensure(binarySearch(arr1, 11000) === -1, "binarySearch");
  ensure(binarySearch(arr1, -110) === -1, "binarySearch");
}

test();
