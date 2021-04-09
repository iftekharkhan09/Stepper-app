import React, {useEffect, useState} from "react";
import {updateWizardState, getWizardState} from "../api/wizard";

export function useWorkflowData(allSteps, movie) {
  console.log({movie});
  const slug = movie.slug;
  const [currentStep, setCurrentStep] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Load the Wizard Initial state
    const state = getWizardState(slug);
    setCurrentStep(state.activeStep);
    setLoading(false)
  },[slug])

  const next = () => {
    const step = Math.min(currentStep + 1, allSteps.length-1);
    //Sync the Wizard state
    updateWizardState({
      activeStep: step
    }, slug)
    setCurrentStep(step)
  }
  const previous = () => {
    const step = Math.max(currentStep - 1, 0)
    //Sync the Wizard state
    updateWizardState({
      activeStep: step
    }, slug)
    setCurrentStep(step)
  }
  return {
    currentStep, next, previous, allSteps, loading, movie
  }
}