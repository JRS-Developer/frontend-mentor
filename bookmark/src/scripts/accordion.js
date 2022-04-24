(function () {
  const accordions = document.querySelectorAll(".accordion");

  const triggersClassNames = {
    normal: "accordion-trigger",
    active: "active",
  };

  const panelsClassNames = {
    normal: "accordion-panel",
    active: "active",
  };

  const hideElement = (element, classToRemove) =>
    element.classList.remove(classToRemove);

  const hideTriggers = (triggers) =>
    triggers.forEach((trigger) => {
      hideElement(trigger, triggersClassNames.active);
      trigger.setAttribute("aria-expanded", "false");
    });

  const hidePanels = (panels) => {
    panels.forEach((panel) => {
      hideElement(panel, panelsClassNames.active);
      panel.style.maxHeight = 0;
      panel.setAttribute("aria-hidden", "true");
    });
  };

  const showTrigger = (trigger) =>
    trigger.classList.add(triggersClassNames.active);

  const showPanel = (panel) => {
    panel.classList.add(panelsClassNames.active);
    panel.style.maxHeight = panel.scrollHeight + "px";
    panel.setAttribute("aria-hidden", "false");
  };

  const handleAccordionClick = (triggers, panels) => (e) => {
    if (e.target && e.target.classList.contains(triggersClassNames.normal)) {
      const trigger = e.target;
      const panel = trigger.parentElement.nextElementSibling;

      // If the panel is already active, hide it
      if (trigger.classList.contains(triggersClassNames.active)) {
        hideTriggers(triggers);
        hidePanels(panels);
        return;
      }

      // Else hide all other panels
      hideTriggers(triggers);
      hidePanels(panels);

      // Show the clicked panel
      showTrigger(trigger);
      showPanel(panel);
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
