// 先根据需求实现图
const graph = {};
// 一级
graph["you"] = ["alice", "bob", "claire"];
// 二级
graph["alice"] = ["peggy"];
graph["bob"] = ["anuj", "peggy"];
graph["claire"] = ["thom", "jonny"];
// 三级 本例为空
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];
// 查找函数，name为根节点
function search(name) {
  const queue = []; // 待检查人员队列
  const searched = [name]; // 存储已检查人员
  queue.push(...graph[name]); // 添加一级人脉

  while (queue.length >= 1) {
    const person = queue.shift(); // 出队拿到第一个待检查人员

    // 没有检查过才运行，防止循环引用
    if (searched.indexOf(person) === -1) {
      // 本例为了简单起见，假设了thom在做芒果生意
      if (person === "thom") {
        return "找到了是：" + person;
      } else {
        // 入队person的朋友
        queue.push(...graph[person]);
        // 标记person已检查
        searched.push(person);
      }
    }
  }

  return "没有卖芒果的人";
}

const result = search("you");
console.log(result);
