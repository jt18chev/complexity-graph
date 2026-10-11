
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
    data: { source: "NP", target: "EXP", label: "subset" }
  },
  {
    data: { source: "Co-NP", target: "EXP", label: "subset" }
  },
  {
    data: { source: "EXP", target: "NEXP", label: "subset" }
  },
  {
    data: { source: "NP", target: "Co-NP", label: "?" }, classes: "undirected"
  }
];

const cy = cytoscape({
  container: document.getElementById("cy"),

  elements: [...classes, ...relationships],
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
    name: "preset",
    fit: true,
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
