'use strict';

const obj = require('../graph');

describe('Graph breadth first traversal', () => {
  it('correctly returns a collection of verticies from a graph', () => {
    let graph = new obj.Graph();
    graph.addVertex('Pandora');
    graph.addVertex('Arendelle');
    graph.addVertex('Metroville');
    graph.addVertex('Monstropolis');
    graph.addVertex('Naboo');
    graph.addVertex('Narnia');
    graph.addDirectedEdge('Pandora', 'Arendelle', 1);
    graph.addDirectedEdge('Arendelle', 'Metroville', 2);
    graph.addDirectedEdge('Arendelle', 'Monstropolis', 3);
    graph.addDirectedEdge('Metroville', 'Monstropolis', 4);
    graph.addDirectedEdge('Metroville', 'Naboo', 5);
    graph.addDirectedEdge('Metroville', 'Narnia', 6);
    graph.addDirectedEdge('Monstropolis', 'Narnia', 7);
    graph.addDirectedEdge('Naboo', 'Narnia', 8);
    console.log([...graph.bft('Pandora')]);
    expect([...graph.bft('Pandora')]).toEqual(['Pandora', 'Arendelle', 'Metroville', 'Monstropolis', 'Naboo', 'Narnia']);
  });
});
