export function scrollToTop(behavior = "instant") {
  window.scrollTo({ top: 0, left: 0, behavior });
}

export function scrollToSection(sectionId, behavior = "smooth") {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior, block: "start" });
    return true;
  }
  return false;
}

export function scrollToSectionWhenReady(sectionId, { behavior = "smooth", maxAttempts = 12 } = {}) {
  let attempts = 0;

  const tryScroll = () => {
    if (scrollToSection(sectionId, behavior)) return;
    attempts += 1;
    if (attempts < maxAttempts) {
      requestAnimationFrame(tryScroll);
    }
  };

  tryScroll();
}
