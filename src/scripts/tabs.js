const tabLists = document.querySelectorAll('[role="tablist"]');

const panelsClassNames = {
  active: "active",
};

const tabsClassNames = {
  active: "active",
};

const getTabPanels = (tab) => {
  const ariaControls = tab.getAttribute("aria-controls");
  const panel = document.querySelector(`#${ariaControls}`);

  if (!panel)
    throw new Error(
      "panel not found, maybe you forgot to add the aria-controls attribute to the tab button"
    );

  return panel;
};

const hideAllTabs = (tabs) =>
  tabs.forEach((tab) => {
    const panel = getTabPanels(tab);

    // Hide the tab and the panel
    tab.setAttribute("aria-selected", "false");
    tab.classList.remove(tabsClassNames.active);
    panel.classList.remove(panelsClassNames.active);
  });

const showSelectedTab = (tab) => {
  const panel = getTabPanels(tab);

  // Show the tab and the panel
  tab.setAttribute("aria-selected", "true");
  tab.classList.add(tabsClassNames.active);
  panel.classList.add(panelsClassNames.active);
};

const handleTabClick = (allTabs) => (e) => {
  const tab = e.target;

  hideAllTabs(allTabs);
  showSelectedTab(tab);
};

tabLists.forEach((tablist) => {
  const tabs = tablist.querySelectorAll('[role="tab"]');
  tabs.forEach((tab) => tab.addEventListener("click", handleTabClick(tabs)));
});
