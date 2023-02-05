import React from 'react'
import "./IssueList.css";
import GreenPoint from "../../Assets/Icons/GreenPoint";

function Issues({issues,loading}) {
    if(loading){
        return <h2>Loadin ... </h2>
    }
    return( 
    <div>
            {issues.map((issue) => (
              <div>
                <table>
                  <tr>
                    <td id="tableData">
                      <GreenPoint />
                    </td>
                    <td key={issue.id}>
                      {issue.title}
                      <p id="comment">#2856 opened on Oct 20, 2021 by mangelozzi</p>
                    </td>
                  </tr>
                  <hr />
                </table>
                <hr />
              </div>
            ))}
          </div>)
}

export default Issues
