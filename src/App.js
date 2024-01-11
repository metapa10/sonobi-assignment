import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Iframe from './iframe.js';
import { submitBidRequest } from './SubmitBidRequest.js';
import { submitImpressionRequest } from './SubmitImpressionRequest.js';
import { displayIframe } from './DisplayIframe.js';
import { ValidateForm } from './ValidateForm.js';
import { ProcessForm } from './ProcessForm.js';

function App() {
  const [formData, setFormData] = useState({
    placement_id: "",
    csv_of_sizes: "",
  });

  const [iframeState, setIframeState] = useState("");

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

  const handleSubmit = (event) => {
      event.preventDefault();
      ProcessForm(formData);
    };


  return (
  <div>
    <form onSubmit={handleSubmit}>
        <label>
            Placement ID:
        </label>
        <input type="text" name="placement_id" value={formData.placement_id} onChange={handleChange}/>
        <label>
            CSV of Sizes:
            <input type="text" name="csv_of_sizes" value={formData.csv_of_sizes} onChange={handleChange}/>
        </label>
        <input type="submit" value="Submit" />
    </form>
    <div>
        <label> Bid Request: </label>
        <div id="bid_request"/>
    </div>
    <div>
        <label> Impression Request: </label>
        <div id="impression_request"/>
    </div>

    <div>
        <label> Iframe: </label>
        <div>
            <iframe id="iframe" height="0" width="0"/>
        </div>
    </div>

    </div>


  );
}

export default App;
