// graph 图
const graph = {
  home: {
    park: 6,
    school: 2,
  },
  park: {
    company: 3,
    school: 1,
  },
  school: {
    park: 1,
    company: 3,
  },
  company: {},
};

// 在未检查的节点中，找到最低开销的节点
function findLowestCostNode(costs, checkedNodes) {
  let smallestValue = Infinity;
  let smallestKey = null;

  for (const [node, cost] of Object.entries(costs)) {
    if (cost < smallestValue && !checkedNodes.includes(node)) {
      smallestValue = cost;
      smallestKey = node;
    }
  }

  return smallestKey;
}

// 找到给定节点到达图中其他可达节点的最短路径
function findShortestPath(graph, startNode) {
  const costs = {}; //开销，随每轮计算更新
  const parents = {}; //已知的最短路径节点的父节点，随每轮计算更新
  const checkedNodes = [startNode]; //已检查节点，因为每次都从最短的路径向外层扩散，保证了已检查过的节点就是最短路径，无需再计算
  const startNeighbors = graph[startNode]; //开始节点的领居节点

  // 初始化：costs 和 parents
  for (const node of Object.keys(graph)) {
    if (Object.keys(startNeighbors).includes(node)) {
      costs[node] = startNeighbors[node];
      parents[node] = startNode;
    } else if (node === startNode) {
      costs[node] = 0;
      parents[node] = null;
    } else {
      costs[node] = Infinity;
      parents[node] = null;
    }
  }

  // 找到未检查过的最低开销节点。
  let smallestKey = findLowestCostNode(costs, checkedNodes);
  while (smallestKey) {
    const cost = costs[smallestKey];
    const neighbors = graph[smallestKey];
    for (const [key, value] of Object.entries(neighbors)) {
      const newCost = cost + value;
      if (newCost < costs[key]) {
        costs[key] = newCost;
        parents[key] = smallestKey;
      }
    }
    checkedNodes.push(smallestKey); //标记当前最低开销节点已检查
    smallestKey = findLowestCostNode(costs, checkedNodes); //继续下一轮最低开销节点检查
  }

  return [costs, parents];
}

const r1 = findShortestPath(graph, "home");
console.log(r1);

/*
[
  { home: 0, park: 3, school: 2, company: 5 },
  { home: null, park: 'school', school: 'home', company: 'school' }
] 
home => company: 最低开销 5，最短路径 home => school => comany
*/
