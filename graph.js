
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
      id: "PSPACE",
      label: "PSPACE",
      description:
        "Decision problems solvable using polynomial space."
    },
    position: { x: 150, y: 340 }
  },
  {
    data: {
      id: "EXPTIME",
      label: "EXPTIME",
      description:
        "Decision problems solvable in deterministic exponential time."
    },
    position: { x: 400, y: 430 }
  }
];

const relationships = [
  {
    data: { source: "P", target: "NP", label: "subset" }
  },
  {
    data: { source: "NP", target: "PSPACE", label: "subset" }
  },
  {
    data: { source: "PSPACE", target: "EXPTIME", label: "subset" }
  }
];

const cy = cytoscape({
  container: document.getElementById("cy"),

  elements: [...classes, ...relationships],

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
