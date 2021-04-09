
import React, {useContext} from "react";
import {WorkflowContext} from '../Wizard';
import Button from '@material-ui/core/Button'

function StepComponent({movie}) {
  const {currentStep, allSteps, next, previous} = useContext(WorkflowContext)
  const step = allSteps[currentStep]
  const CustomStepComponent = step.component
  return(
    <div className="step">
      <p>{movie.title}</p>
      <h2>{step.title}</h2>
      <p>
        {
          step.text
        }
      </p>
      {
        CustomStepComponent && <CustomStepComponent />
      }
      <div className="actions">
        {
          currentStep > 0
          && <Button classes={{root: 'button'}} variant="contained" color="secondary" onClick={previous}>Previous</Button>
        }
        {
          currentStep < (allSteps.length - 1)
          && <Button classes={{root: 'button'}} variant="contained" color="primary" onClick={next}>Next</Button>
        }
      </div>
    </div>
  )
}
export default StepComponent