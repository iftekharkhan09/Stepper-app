export function updateWizardState(state, slug) {
  const key = `wizardState-${slug}`;
  localStorage.setItem(key, JSON.stringify(state));
}

export function getWizardState(slug) {
  const key = `wizardState-${slug}`;
  const state = JSON.parse(localStorage.getItem(key));
  return state ?
  state : { activeStep: 0}
}
