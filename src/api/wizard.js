export function updateWizardState(state) {
  localStorage.setItem("wizardState", JSON.stringify(state));
}

export function getWizardState() {
  const state = JSON.parse(localStorage.getItem("wizardState"));
  console.log(state);
  return state ?
  state : { activeStep: 0}
}
