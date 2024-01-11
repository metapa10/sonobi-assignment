import { submitBidRequest } from './SubmitBidRequest.js';
import { submitImpressionRequest } from './SubmitImpressionRequest.js';
import { displayIframe } from './DisplayIframe.js';
import { ValidateForm } from './ValidateForm.js';

export function ProcessForm(formData) {
      if (!ValidateForm(formData)){
        alert("Placement ID is required");
        return
      }

      submitBidRequest(formData.placement_id, formData.csv_of_sizes).then (response => {
        document.getElementById("bid_response").innerHTML = response;
        if (JSON.stringify(response.slots.dom_1) === '{}')
        {
            console.log("No bids returned");
            displayIframe("100", "100", "No Bid Returned");
            document.getElementById("impression_request").innerHTML = "";
            document.getElementById("impression_response").innerHTML = "";
        }
        else
        {
           //console.log("Bid returned");
           let dimensions = response.slots.dom_1.sbi_size.split("x");
           submitImpressionRequest(response.slots.dom_1.sbi_aid).then(impression => {
                document.getElementById("impression_response").innerHTML = impression;
                displayIframe(dimensions[0], dimensions[1],"<script>" + impression + "</script>");
           });
        }
      })
    };