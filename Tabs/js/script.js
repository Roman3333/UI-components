let tab = function () {
  let tabNav = document.querySelectorAll(".tabs-nav__item"),
    tabContent = document.querySelectorAll(".tab"),
    tabId;

  tabNav.forEach((el) => {
    el.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((el) => {
      el.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabId = this.getAttribute("data-tab-name");
    selectTabContent(tabId);
  }

  function selectTabContent(tabId) {
    tabContent.forEach((el) => {
      el.classList.contains(tabId)
        ? el.classList.add("is-active")
        : el.classList.remove("is-active");
    });
  }
};

tab();
