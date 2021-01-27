'use strict';

const Graph = require('../graph');

describe('Graph breadth first traversal', () => {
  it('correctly returns a collection of verticies from a graph', () => {
    let graph = new Graph();
    let vertex1 = graph.addVertex('Pandora');
    let vertex2 = graph.addVertex('Arendelle');
    let vertex3 = graph.addVertex('Metroville');
    let vertex4 = graph.addVertex('Monstropolis');
    let vertex5 = graph.addVertex('Naboo');
    let vertex6 = graph.addVertex('Narnia');
    console.log(graph.size());
    expect(graph.size()).toBe(6);
    // graph.addDirectedEdge('Pandora', 'Arendelle', 1);
    // graph.addDirectedEdge('Arendelle', 'Metroville', 2);
    // graph.addDirectedEdge('Arendelle', 'Monstropolis', 3);
    // graph.addDirectedEdge('Metroville', 'Monstropolis', 4);
    // graph.addDirectedEdge('Metroville', 'Naboo', 5);
    // graph.addDirectedEdge('Metroville', 'Narnia', 6);
    // graph.addDirectedEdge('Monstropolis', 'Narnia', 7);
    // graph.addDirectedEdge('Naboo', 'Narnia', 8);
    // console.log([...graph.bft('Pandora')]);
    // expect([...graph.bft('Pandora')]).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Naboo', 'Narnia']);
  });
});
