

// Instantiate a new graph
var Graph = function () {
  this.nodes = {}
  this.edges = {}
  // Incrementers
  this.nodesSize = 0;
  this.edgesSize = 0;

  // Edge Constructor
  this.edge = (from, to) => {
    var edge = {};

    // Edge's values
    edge.values = [from, to];

    // Check if both nodes are connected by edge
    edge.hasNodes = (fromNode, toNode) => {
      return (edge.values[0] === fromNode && edge.values[1] === toNode) ||
        (edge.values[0] === toNode && edge.values[1] === fromNode);
    }
    // Check if edge contains a node
    edge.hasNode = (node) => {
      return (edge.values[0] === node || edge.values[1] === node);
    }

    return edge;
  }
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  this.nodes[this.nodesSize] = node;
  this.nodesSize++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  for (key in this.nodes) {
    if (this.nodes[key] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  for (nodeKey in this.nodes) {
    if (this.nodes[nodeKey] === node) {
      for (edgeKey in this.edges) {
        if (this.edges[edgeKey].hasNode(node)) {
          delete this.edges[edgeKey];
        }
      }
      delete this.nodes[nodeKey];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  for (edge in this.edges) {
    if (this.edges[edge].hasNodes(fromNode, toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  this.edges[this.edgesSize] = this.edge(fromNode, toNode);
  this.edgesSize++;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  for (edge in this.edges) {
    if (this.edges[edge].hasNodes(fromNode, toNode)) {
      delete this.edges[edge];
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (node in this.nodes) {
    cb(this.nodes[node]);
  }
};