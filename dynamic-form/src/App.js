import { Button } from "@mui/material";
import { useState } from "react";
import CopmonentSelector from "./Components/CopmonentSelector";
import config from "./config.json";

function App() {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.id) {
      setData((d) => ({ ...d, [e.target.id]: e.target.value }));
    }
  };

  const handleSubmit = () => {
    let error = {};

    config.fields.forEach((f) => {
      if (!f.validations?.nullable && !Boolean(data[f?.id])) {
        error = { ...error, [f?.id]: "Required!" };
      }
    });
    if (Object.keys(error).length > 0) {
      setErrors(error);
    } else {
      setErrors({});
      alert(JSON.stringify(data));
    }
  };
  return (
    <div className="App">
      <h4>{config.formHeading}</h4>
      <div>
        {config.fields.map((c) => (
          <div style={{ margin: "10px" }}>
            <CopmonentSelector
              {...c}
              value={data[c?.id] || ""}
              error={errors[c?.id] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
