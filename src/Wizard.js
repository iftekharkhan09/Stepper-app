import wizardConfig from "./config/wizard";
import React, {useEffect, useState} from "react";
import {updateWizardState, getWizardState} from "./api/wizard";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {Button} from '@material-ui/core';

function WizardComponent() {
  const [currentStep, setCurrentStep] = useState(null);
  useEffect(() => {
    const state = getWizardState();
    setCurrentStep(state.activeStep);
  },[])
  const next = () => {
    const step = Math.min(currentStep + 1, wizardConfig.length-1);
    setCurrentStep(step)
    updateWizardState({
      activeStep: step
    })
  }
  const previous = () => {
    const step = Math.max(currentStep - 1, 0)
    setCurrentStep(step)
    updateWizardState({
      activeStep: step
    })
  }
  return(
    <div className="wizard-container">
      <div>
        <Stepper orientation="vertical" activeStep={currentStep}>
          {wizardConfig.map((step) => {
            return (
              <Step key={step.id}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className="wizard-content">
        {
          currentStep !== null &&
          <StepComponent steps={wizardConfig} step={wizardConfig[currentStep]} next={next} previous={previous} />
        }
      </div>
    </div>
  )
}

const StepComponent = ({next, previous, step, steps}) => {

  return(
    <div className="step">
      <h2>{step.title}</h2>
      <p>
        {
          step.text
        }
      </p>
      <div className="actions">
        {
          steps.indexOf(step) > 0
          && <Button classes={{root: 'button'}} variant="contained" color="secondary" onClick={previous}>Previous</Button>
        }
        {
          steps.indexOf(step) < (steps.length - 1)
          && <Button classes={{root: 'button'}} variant="contained" color="primary" onClick={next}>Next</Button>
        }
      </div>
    </div>
  )
}
export default WizardComponent;
