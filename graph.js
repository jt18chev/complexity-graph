

const newClasses = {
  "P": {
    description: "Decision problems solvable in deterministic polynomial time.",
    category: "time",
    relationships: [
      {
        target: "NP",
        type: "subset",
        directed: true
      },
      {
        target: "Co-NP",
        type: "subset",
        directed: true
      },
      {
        target: "P/Poly",
        type: "strict subset",
        directed: true
      },
      {
        target: "BPP",
        type: "subset",
        directed: true
      }
    ]
  },
  "NP": {
    description: "Decision problems whose yes-instances have polynomial-size certificates verifiable in polynomial time.",
    category: "time",
    relationships: [
      {
        target: "PH",
        type: "subset",
        directed: true
      },
      {
        target: "Co-NP",
        type: "???",
        directed: false
      },
      {
        target: "P/Poly",
        type: "???",
        directed: false
      }
    ]
  },
  "Co-NP": {
    description: "Decision problems whose compliment is in NP.",
    category: "time",
    relationships: [
      {
        target: "PH",
        type: "subset",
        directed: true
      }
    ]
  },
  "PH": {
    description: "A hierarchy of classes that generalizes NP and Co-NP",
    category: "time",
    relationships: [
      {
        target: "PSPACE",
        type: "subset",
        directed: true
      }
    ]
  },
  "PSPACE": {
    description: "Decision problems solvable by a Turing machine using a polynomial amount of space.",
    category: "space",
    relationships: [
      {
        target: "NPSPACE",
        type: "equal",
        directed: false
      },
      {
        target: "EXP",
        type: "subset",
        directed: true
      }
    ]
  },
  "EXP": {
    description: "Decision problems solvable in deterministic exponential time.",
    category: "time",
    relationships: [
      {
        target: "NEXP",
        type: "subset",
        directed: true
      },
      {
        target: "P/Poly",
        type: "???",
        directed: false
      }
    ]
  },
  "NEXP": {
    description: "Decision problems solvable in non-deterministic exponential time.",
    category: "time",
    relationships: [
      {
        target: "P/Poly",
        type: "???",
        directed: false
      }
    ]
  },
  "NPSPACE": {
    description: "Decision problems solvable by a non-deterministic Turing machine using a polynomial amount of space.",
    category: "space",
    relationships: []
  },
  "L": {
    description: "Decision problems solvable by a Turing machine using a logarithmic amount of space.",
    category: "space",
    relationships: [
      {
        target: "NL",
        type: "subset",
        directed: true
      }
    ]
  },
  "NL": {
    description: "Decision problems solvable by a non-deterministic Turing machine using a logarithmic amount of space.",
    category: "space",
    relationships: [
      {
        target: "P",
        type: "subset",
        directed: true
      },
      {
        target: "NC",
        type: "subset",
        directed: true
      }
    ]
  },
  "P/Poly": {
    description: "Decision problems solvable by polynomial-sized circuit families. Includes problems that are undecidable by TMs.",
    category: "circuit",
    relationships: []
  },
  "NC": {
    description: "Decision problems solvable by polynomial-sized circuit families with polylogarithmic depth.",
    category: "circuit",
    relationships: [
      {
        target: "P",
        type: "subset",
        directed: true
      }
    ]
  },
  "AC": {
    description: "Decision problems solvable by polynomial-sized circuit families with polylogarithmic depth where gates have unbounded fan-in.",
    category: "circuit",
    relationships: [
      {
        target: "NC",
        type: "equal",
        directed: false
      }
    ]
  },
  "BPP": {
    description: "Decision problems solvable by a probabilistic TM with probability >= 2/3.",
    category: "randomized",
    relationships: [
      {
        target: "EXP",
        type: "subset",
        directed: true
      },
      {
        target: "P/Poly",
        type: "subset",
        directed: true
      },
      {
        target: "PH",
        type: "subset",
        directed: true
      }
    ]
  },
  "RP": {
    description: "Decision problems solvable by a probabilistic TM that correctly rejects with probability 1 and correctly accepts with probability > 1/2.",
    category: "randomized",
    relationships: [
      {
        target: "NP",
        type: "subset",
        directed: true
      },
      {
        target: "BPP",
        type: "subset",
        directed: true
      }
    ]
  },
  "Co-RP": {
    description: "Decision problems whose compliment is in RP.",
    category: "randomized",
    relationships: [
      {
        target: "BPP",
        type: "subset",
        directed: true
      }
    ]
  },
  "ZPP": {
    description: "Decision problems solvable by a probabilistic TM in polynomial time on average and always correctly accepts/rejects. Is also defined as the intersection of RP and Co-RP",
    category: "randomized",
    relationships: [
      {
        target: "BPP",
        type: "subset",
        directed: true
      }
    ]
  },
  "BPL": {
    description: "Decision problems solvable by a probabilistic TM in logarithmic space with probability >= 2/3",
    category: "randomized",
    relationships: [
      {
        target: "P",
        type: "subset",
        directed: true
      },
      {
        target: "L",
        type: "UNCONFIRMED equal",
        directed: false
      }
    ]
  },
  "RL": {
    description: "Decision problems solvable by a probabilistic TM in logarithmic space that correctly rejects with probability 1 and correctly accepts with probability > 1/2.",
    category: "randomized",
    relationships: [
      {
        target: "P",
        type: "subset",
        directed: true
      },
      {
        target: "NL",
        type: "subset",
        directed: true
      },
      {
        target: "L",
        type: "UNCONFIRMED equal",
        directed: false
      },
      {
        target: "BPL",
        type: "UNCONFIRMED equal",
        directed: false
      }
    ]
  }
}

const categoryColors = {
  time: "#4C8EDA",
  space: "#3AAB83",
  alternation: "#A77BE8",
  circuit: "#E4A14A",
  quantum: "#D96C79",
  randomized: "#26A6B8",
  counting: "#C77D4A",
  other: "#89929E"
};

const nodes = Object.entries(newClasses).map(
  ([id, cls]) => ({
    data: {
      id: id,
      label: id,
      description: cls.description,
      category: cls.category,
      color: categoryColors[cls.category] ?? categoryColors.other
    }
  })
);

const edges = Object.entries(newClasses).flatMap(
  ([source, cls]) =>
    cls.relationships.map((rel, index) => ({
      data: {
        id: `${source}-${rel.target}-${index}`,
        source,
        target: rel.target,
        label: rel.type,
        type: rel.type,
        directed: rel.directed,
        status: rel.status
      },
      classes: rel.directed ? "directed" : "undirected"
    }))
);

console.log(nodes);


const cy = cytoscape({
  container: document.getElementById("cy"),

  elements: [...nodes, ...edges],
  wheelSensitivity: 2,
  style: [
    {
      selector: "node",
      style: {
        "label": "data(label)",
        "text-valign": "center",
        "text-halign": "center",
        "background-color": "data(color)",
        "border-width": 2,
        "border-color": "#000000",
        "width": 75,
        "height": 55,
        "font-size": 15
      }
    },
    {
      selector: "edge",
      style: {
        "width": 2,
        "line-color": "#8593a7",
        "target-arrow-color": "#8593a7",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
        "label": "data(label)",
        "font-size": 10,
        "text-background-color": "#ffffff",
        "text-background-opacity": 1,
        "text-background-padding": 3
      }
    },
    {
      selector: "edge.undirected",
      style: {
        "source-arrow-shape": "none",
        "target-arrow-shape": "none",
        "line-color": "#8593a7",
        "width": 2
      }
    },
    {
      selector: ":selected",
      style: {
        "border-color": "#e08a38",
        "border-width": 4
      }
    },
    {
      selector: ".faded",
      style: {
        "opacity": 0.2,
        "text-opacity": 0.2
      }
    }
  ],
  /*
  layout: {
    name: "breadthfirst",
    directed: true,
    spacingFactor: 1.5,
    padding: 40
  },
  */
  layout: {
    name: "fcose",
    quality: "default",
    animate: true,
    fit: true,
    padding: 40,
    nodeRepulsion: () => 8000,
    idealEdgeLength: () => 200,
    gravity: 0.2
  },

  userZoomingEnabled: true,
  userPanningEnabled: true
});

cy.on("tap", "node", function (event) {
  const node = event.target;

  document.getElementById("description").textContent =
    node.data("description");
});


function clearFocus() {
  cy.elements().removeClass("faded");
}

cy.on("tap", "node", function (event) {
  const node = event.target;

  // Fade everything first.
  cy.elements().addClass("faded");

  // Highlight the selected node, its neighbors,
  // and the edges connecting them.
  node.closedNeighborhood().removeClass("faded");

  // Update your existing details panel.
  document.getElementById("description").textContent =
    node.data("description") || "No description available.";
});

cy.on("tap", function (event) {
  // Restore the graph when the background is clicked.
  if (event.target === cy) {
    clearFocus();
  }
});


const resizeObserver = new ResizeObserver(() => {
  cy.resize();
  cy.fit(undefined, 30);
});

resizeObserver.observe(document.getElementById("cy"));
