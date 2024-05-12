// 贪心算法是找到局部最优解，然后通过局部最优解得到近似全局最优解。
// 贪心算法应用于没有全局最优解、计算量巨大的问题等场景。

// 例一：覆盖全国最小广播台集合
// 你需要办一个广播节目，要求全国用户都能听到。由于不同的广播台覆盖的州不定，
// 你想要在数量尽可能少的广播台开办节目，以实现覆盖全国的目标。
// 这个问题州和广播台的数量过多计算量将非常巨大，我们这里用贪心算法来求得一个近似最优解。

// 算法步骤：
// (1) 选出这样一个广播台，即它覆盖了最多的未覆盖州。即便这个广播台覆盖了一些已覆盖的州，也没有关系。
// (2) 重复第一步，直到覆盖了所有的州。

// 出于简化考虑，这里假设要覆盖的州没有那么多，广播台也没有那么多。

// 需要覆盖的州
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

// 广播台列表
const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

// 计算答案
const bestStationArr = [];
// 这里小心死循环(如果电台们不能覆盖所需覆盖的州，本例出于简化考虑省去校验代码)
while (statesNeeded.size) {
  let bestStation = ""; //本轮最佳电台
  let stationsList = []; //本轮最佳电台对应的州与未覆盖的州的交集

  for (const station of Object.keys(stations)) {
    const states = stations[station]; //当前电台覆盖的州
    // 求交集(未覆盖的州与当前电台覆盖的州)
    const covered = new Set([...statesNeeded].filter((state) => states.has(state)));
    // 大于上一轮则更新
    if (covered.size > stationsList.length) {
      stationsList = [...covered];
      bestStation = station;
    }
  }
  // 求差集，移除已覆盖的州
  statesNeeded = new Set([...statesNeeded].filter((state) => !stationsList.includes(state)));
  // 添加电台
  bestStationArr.push(bestStation);
}
console.log("计算结果:", bestStationArr);
