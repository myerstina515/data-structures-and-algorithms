class Vertex {
  constructor(value) {
    this.value = value;
  }
}
class Edge {
  constructor(weight, vertex) {
    this.weight = weight;
    this.vertex = vertex;
  }
}
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  // add a new vertex to this graph
  addVertex(vertex) {
    //.set (key, value) puts a key/value in the Map
    // when you add a node(vertex) for the first time, the value is an empty array because it will eventually hold a list of all of the nodes that it is connected to.
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    // error checking: we MUST have a starting and ending node
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('error: need a starting and ending vertex');
    }
    // get startVertex from the Map (all of vertices)
    // push a new Edge that will connect the start to the end into the array along with the weight
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('error in getting neighbors', vertex);
    }
    return this.adjacencyList.get(vertex); //returns an array
  }

  bft(startNode) {
    if (!startNode) return null;
    const queue = [];
    const visitedNodes = new Set();
    queue.push(startNode);
    visitedNodes.add(startNode);
    while (queue.length) {
      let currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return visitedNodes;
  }

  // dfs(startNode) {
  //   const visitedNodes = new Set();
  //   const _traverseNeighbors = (node) => {
  //     visitedNodes.add(node);
  //     const neighbors = this.getNeighbors(node);
  //     for (let edge of neighbors) {
  //       // if the set doesn’t have the node
  //       if (!visitedNodes.has(edge.vertex)) {
  //         _traverseNeighbors(edge.vertex);
  //       }
  //     }
  //   };
  //   _traverseNeighbors(startNode);
  //   return visitedNodes;
  // }

  pathTo(startNode, endNode) {
    const stack = [];
    const visitedNodes = new Set();
    const parentPath = new Map();
    stack.push(startNode);
    visitedNodes.add(startNode);
    while (stack.length) {
      // remove the top/last thing from the stack
      const currentNode = stack.pop();
      // make sure that our currentNode is not our end node
      if (currentNode === endNode) { return parentPath; }
      // get all the neighbors
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        //find the vertex node
        const neighborNode = neighbor.vertex;
        // check if the Set contains that node
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
        }
        stack.push(neighborNode);
        parentPath.set(neighborNode, currentNode);
      }
    }
    return parentPath;
  }
  size(startNode) {
    let count = 0;
    if (!startNode) return count;
    const visitedNodes = new Set();
    const _traverseNeighbors = (node) => {
      visitedNodes.add(node);
      count++;
      const neighbors = this.getNeighbors(node);
      for (let edge of neighbors) {
        if (!visitedNodes.has(edge.vertex)) {
          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startNode);
    return count;
  }
  getNodes(startNode) {
    const visitedNodes = new Set();
    const _traverseNeighbors = (node) => {
      visitedNodes.add(node);
      const neighbor = this.getNeighbors(node);
      for (let edge of neighbor) {
        if (!visitedNodes.has(edge.vertex)) {
          _traverseNeighbors(edge.vertex);
        }
      }
    };
    _traverseNeighbors(startNode);
    return visitedNodes;
  }
  gitEdge(array) {
    if (!array[0] || !array[1]) {
      return false, 0;
    }
    let output = false;
    let outputValue = 0;
    for (let i = 0; i <= array.length - 1; i++) {
      let neighbor = this.getNeighbors(array[i]);
      for (let j = 0; j <= neighbor.length - 1; j++) {
        if (array[i + 1] === neighbor[j].vertex) {
          outputValue += neighbor[j].weight;
          output = true;
        }
      }
      if (output === false) {
        output = false;
        outputValue = 0;
        return [output, outputValue];
      }
    }
    return [output, outputValue];
  }
}



module.exports = { Vertex, Edge, Graph };
