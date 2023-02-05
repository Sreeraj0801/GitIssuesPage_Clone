import React, { useState, useEffect } from "react";
import axios from "axios";
import "./IssueList.css";
import Point from "../../Assets/Icons/IssuesIcon";
import Issues from "./Issues";
import Pagination from "../Pagination/Pagination";


function IssueList() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(10); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues"
      );
      setIssues(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  const indexOfLastIssue = currentPage * issuesPerPage;
  const indexOfFirstPage = indexOfLastIssue - issuesPerPage;
  const currentIssue = issues.slice(indexOfFirstPage,indexOfLastIssue)

  //Change Page
  const paginate = (pageNumber)=>{setCurrentPage(pageNumber)}
  return (
    <div>
      <div class="IssueCard">
        <div class="header">
          <div style={{ display: "flex" }}>
            <Point />
            &nbsp;&nbsp;&nbsp;
            <p className="ListHead">236 Open</p>&nbsp;&nbsp;&nbsp;
            <p className="ListHead">1,769 Closed</p>
          </div>
          <div class="dropdown">
            <p className="ListTag">Author</p>
            <p className="ListTag">Label</p>
            <p className="ListTag">Projects</p>
            <p className="ListTag">Milestones</p>
            <p className="ListTag">Assignee</p>
            <p className="ListTag">Sort</p>
          </div>
        </div>
        <hr className="headingHr" />
        {console.log(currentIssue)}
        <Issues issues={currentIssue} loading={loading}/>
      </div>
      <p>Hai</p>
      <Pagination 
      issuesPerPage={issuesPerPage} 
      totalIssues={issues.length} 
      paginate={paginate}/>
      <hr style={{marginBottom:"30px",color:"#fff",height:"3px"}} />
    </div>
  );
}

export default IssueList;
