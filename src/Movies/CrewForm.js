import React, {useState} from 'react';
import Form from "@rjsf/core";
import "./CrewForm.scss";
const schema = {
  title: "Initiate Project",
  type: "object",
  properties: {
    producer: {
      title: "Producer",
      type: "string"
    },
    exec: {
      title: "Executive Producer",
      type: "string"
    }
  }
};
function CrewForm(props) {
  const [formData, setFormData] = useState(null);
  return (
    <div className="crew-form">
      <Form
        formData={formData}
        onChange={e => setFormData(e.formData) }
        schema={schema}
      />
    </div>
  );
}
export default CrewForm;