'use strict';

const obj = require('../graph');

describe('Graph testing', () => {
  it('Allows a node to be successfully added to the graph', () => {
    let vertex = new obj.Vertex(3);
    let graph = new obj.Graph();
    graph.addVertex(vertex);
    expect(graph.getNeighbors(vertex)).toEqual([]);
  });
  it('Should allow an edge to be successfully added to the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addDirectedEdge(1, 2, 7);
    // console.log(graph.addDirectedEdge(1, 2, 7));
    // console.log(graph.getNeighbors(1));
    expect(graph.getNeighbors(1)).toEqual([ {weight: 2, vertex: 7}]);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addDirectedEdge(1,2,1);
    expect(graph.getNodes(1)).toContain(1,2);
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addDirectedEdge(1, 2, 1);
    expect(graph.getNeighbors(1)).toEqual([ {vertex: 1, weight: 2}]);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    let graph = new obj.Graph();
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addDirectedEdge(3,4,1);
    expect(graph.getNeighbors(3)).toEqual([ {vertex: 1, weight: 4} ]);
  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {
    let graph = new obj.Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addDirectedEdge(1, 2, 4);
    graph.addDirectedEdge(2, 3, 5);
    console.log(graph.size(1));
  })
});
