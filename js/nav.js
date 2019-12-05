document.addEventListener("DOMContentLoaded", function(e) {
  const topMenu = document.getElementById("float-nav");
  const menuItems = topMenu.querySelectorAll("a");
  const scrollItems = Array.from(menuItems);
  const scrollAnchors = scrollItems.map(item => item.getAttribute("href"));

  let lastIndex = 0;

  const calculate = function() {
      const cur = scrollAnchors.findIndex(e => {
      const result = document.querySelector(`a[name=${e.substr(1)}]`);
      // const rect = result.getBoundingClientRect();
      if (result.getBoundingClientRect().top > 0) return true;
    });
    const adjustedIndex = cur === -1
      ? scrollItems.length - 1
      : (cur - 1 < 0 ? 0 : cur - 1);
    if (lastIndex !== adjustedIndex) {
      // Hacky class add/removing to get custom colors on each nav item
      const removeIndex = Array.from(scrollItems[lastIndex].classList)
        .find(c => c.includes("active"));
      scrollItems[lastIndex].classList.remove(removeIndex);
      const targetClass = `${scrollItems[adjustedIndex].classList[0]}-active`;
      scrollItems[adjustedIndex].classList.add(targetClass);
      lastIndex = adjustedIndex;

    }
  }
  window.addEventListener("scroll", calculate);
  calculate();
});
