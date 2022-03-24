(function () {
  const accordions = document.querySelectorAll(".accordion");

  const triggersClassNames = {
    normal: "accordion__trigger",
    active: "accordion__trigger--active",
  };

  const panelsClassNames = {
    normal: "accordion__panel",
    active: "accordion__panel--active",
  };

  const hideElement = (element, classToRemove) =>
    element.classList.remove(classToRemove);

  const hideTriggers = (triggers) =>
    triggers.forEach((trigger) =>
      hideElement(trigger, triggersClassNames.active)
    );

  const hidePanels = (panels) =>
    panels.forEach((panel) => hideElement(panel, panelsClassNames.active));

  const showTrigger = (trigger) =>
    trigger.classList.add(triggersClassNames.active);

  const showPanel = (panel) => panel.classList.add(panelsClassNames.active);

  const handleAccordionClick = (triggers, panels) => (e) => {
    if (e.target && e.target.classList.contains(triggersClassNames.normal)) {
      hideTriggers(triggers);
      hidePanels(panels);
      showTrigger(e.target);

      const targetPanel = e.target.nextElementSibling;
      showPanel(targetPanel);
    }
  };

  accordions.forEach((accordion) => {
    const triggers = accordion.querySelectorAll(
      `.${triggersClassNames.normal}`
    );
    const panels = accordion.querySelectorAll(`.${panelsClassNames.normal}`);

    accordion.addEventListener("click", handleAccordionClick(triggers, panels));
  });
})();
