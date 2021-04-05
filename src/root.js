import React, {Props} from 'react';
import LinearFlow from './linear-flow/linear-flow';
import HorizontalNonLinearStepper from "./non-linear-flow/non-linear";

export default function Root() {
    return (
        <div>
            <LinearFlow/>
            <HorizontalNonLinearStepper/>
        </div>
    )
}
