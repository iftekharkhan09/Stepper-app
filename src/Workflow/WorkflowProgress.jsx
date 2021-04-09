import React, {useContext} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {WorkflowContext} from '../Wizard';

function WorkflowProgress(props) {
  const {currentStep, allSteps} = useContext(WorkflowContext)
  return (
    <div className="workflow-progress">
      {
        allSteps && <Stepper orientation="vertical" activeStep={currentStep}>
          {allSteps.map((step) => {
            return (
              <Step key={step.id}>
                <StepLabel>{step.title}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      }
    </div>
  );
}
export default WorkflowProgress;