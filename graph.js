

const newClasses = {
  "P": {
    description: "Decision problems solvable in deterministic polynomial time.",
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
    relationships: []
  },
  "L": {
    description: "Decision problems solvable by a Turing machine using a logarithmic amount of space.",
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
    relationships: []
  },
  "NC": {
    description: "Decision problems solvable by polynomial-sized circuit families with polylogarithmic depth.",
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


const classes = [
  {
    data: {
      id: "P",
      label: "P",
      description:
        "Decision problems solvable in deterministic polynomial time."
    },
    position: { x: 150, y: 100 }
  },
  {
    data: {
      id: "NP",
      label: "NP",
      description:
        "Decision problems whose yes-instances have polynomial-size certificates verifiable in polynomial time."
    },
    position: { x: 300, y: 220 }
  },
  {
    data: {
      id: "Co-NP",
      label: "Co-NP",
      description:
        "Decision problems whose compliment is in NP."
    },
    position: { x: 150, y: 340 }
  },
  {
    data: {
      id: "EXP",
      label: "EXP",
      description:
        "Decision problems solvable in deterministic exponential time."
    },
    position: { x: 400, y: 430 }
  },
  {
    data: {
      id: "NEXP",
      label: "NEXP",
      description:
        "Decision problems solvable in non-deterministic exponential time."
    },
    position: { x: 550, y: 300 }
  },
  {
    data: {
      id: "PSPACE",
      label: "PSPACE",
      description:
        "Decision problems solvable by a Turing machine using a polynomial amount of space."
    },
    position: { x: 550, y: 300 }
  },
  {
    data: {
      id: "NPSPACE",
      label: "NPSPACE",
      description:
        "Decision problems solvable by a non-deterministic Turing machine using a polynomial amount of space."
    },
    position: { x: 550, y: 300 }
  },
  {
    data: {
      id: "L",
      label: "L",
      description:
        "Decision problems solvable by a Turing machine using a logarithmic amount of space."
    },
    position: { x: 550, y: 300 }
  },
  {
    data: {
      id: "NL",
      label: "NL",
      description:
        "Decision problems solvable by a non-deterministic Turing machine using a logarithmic amount of space."
    },
    position: { x: 550, y: 300 }
  }
];

const relationships = [
  {
    data: { source: "P", target: "NP", label: "subset" }
  },
  {
    data: { source: "P", target: "Co-NP", label: "subset" }
  },
  {
    data: { source: "NP", target: "PSPACE", label: "subset" }
  },
  {
    data: { source: "Co-NP", target: "PSPACE", label: "subset" }
  },
  {
    data: { source: "PSPACE", target: "NPSPACE", label: "equal" }, classes: "undirected"
  },
  {
    data: { source: "PSPACE", target: "EXP", label: "subset" }
  },
  {
    data: { source: "EXP", target: "NEXP", label: "subset" }
  },
  {
    data: { source: "NP", target: "Co-NP", label: "???" }, classes: "undirected"
  },
  {
    data: { source: "L", target: "NL", label: "subset" }
  },
  {
    data: { source: "NL", target: "P", label: "subset" }
  },
];

const nodes = Object.entries(newClasses).map(
  ([id, cls]) => ({
    data: {
      id: id,
      label: id,
      description: cls.description
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
        "background-color": "#dce7f8",
        "border-width": 2,
        "border-color": "#5779a8",
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
    }
  ],

  layout: {
    name: "breadthfirst",
    directed: true,
    spacingFactor: 1.5,
    padding: 40
  },

  userZoomingEnabled: true,
  userPanningEnabled: true
});

cy.on("tap", "node", function (event) {
  const node = event.target;

  document.getElementById("description").textContent =
    node.data("description");
});

const resizeObserver = new ResizeObserver(() => {
  cy.resize();
  cy.fit(undefined, 30);
});

resizeObserver.observe(document.getElementById("cy"));
