import React, {useContext} from "react";
import WorkflowProgress from './Workflow/WorkflowProgress';
import {useWorkflowData} from './Workflow/hooks';
import WorkflowStep from "./Workflow/WorkflowStep"

export const WorkflowContext = React.createContext(null);
function WorkflowComponent({allSteps, movie}) {
  const workflow = useWorkflowData(allSteps, movie);
  return(
    <WorkflowContext.Provider value={workflow}>
      <div className="wizard-container">
        <WorkflowProgress />
        <div className="wizard-content">
          { !workflow.loading
          && <>
              <WorkflowStep movie={movie} />
            </>
          }
        </div>
      </div>
    </WorkflowContext.Provider>
  )
}

export default WorkflowComponent;
