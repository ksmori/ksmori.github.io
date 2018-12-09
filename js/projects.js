const l = {
  ACA: 1,
  IND: 2,
  PRO: 3,
  CRE: 4,
  DES: 5,
  PUZ: 6,
  LAN: 7,
};
const projects = [
  makeProject("Aquarium puzzlehunt", "aqua", "",
  "Writing puzzles for freshmen orientation event at the aquarium",
  [l.PUZ], true),
];
  AQUA: {rank: 1, name: "Aquarium puzzlehunt", labels: [], public: true},
  BASIS: {rank: 1, name: "Basis Tech", labels: [], public: false},
  BOAT: {rank: 1, name: "Electric motor boat", labels: [], public: true},
  BUD: {rank: 1, name: "bud:2020", labels: [], public: false},
  CONLANG: {rank: 1, name: "Kirha: a constructed language", labels: [], public: false},
  CR2: {rank: 1, name: "Courseroad v2", labels: [], public: false},
  ESL: {rank: 1, name: "ESL treebank", labels: [], public: false},
  ESP: {rank: 1, name: "ESPider", labels: [], public: false},
  FORCES: {rank: 1, name: "Forces frozen", labels: [], public: true},
  GTTA: {rank: 1, name: "Gotta Track 'Em All", labels: [], public: false},
  HAUNT: {rank: 1, name: "Next haunt", labels: [], public: true},
  IPAFUZZ: {rank: 1, name: "Fuzzy matching IPA", labels: [], public: false},
  PAPER: {rank: 1, name: "Paper structures", labels: [], public: false},
  WB: {rank: 1, name: "Wonder Blocks", labels: [], public: false},
};

const makeProject = function(name, tag, src, desc, labels, public, rank) {
  return {
    label: name,
    tag: tag,
    href: tag + ".html",
    src: src,
    desc: desc,
    labels: labels,
    public: public,
    rank: rank,
  }
}
// on document load
// grab label box, stick in all labels
// attach event listeners to each label
// keep track of selected stuff via localstorage and such
// union/intersection option

If you make the image a background-image of a div in CSS, when that div is set to "display: none", the image will not load. When CSS is disabled, it still will not load, because, well, CSS is disabled.

