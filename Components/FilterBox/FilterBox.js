import React from "react";

import "./FilterBox.css";
import DoubleButton from "../DoubleButton/DoubleButton";
import GreenButton from "../GreenButton/GreenButton";
function FilterBox() {
  return (
    <div style={{display:"flex"}}>
      <div class="filter-container">
        <button class="filter-button">Filter</button>
        <input type="text" placeholder="Search all issues" />
      </div>
<div style={{display:"flex",marginTop:"1.9%"}}>
<DoubleButton/>
<GreenButton/>
</div>
    </div>
  );
}

export default FilterBox;
