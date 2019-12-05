const l = {
  ACA: 1,
  IND: 2,
  PRO: 3,
  CRE: 4,
  DES: 5,
  PUZ: 6,
  LAN: 7,
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

