import React from 'react'
import './Pagination.css';

function Pagination({issuesPerPage,totalIssues ,paginate}) {
    const pageNumber = [];
    for(let i=1;i<=Math.ceil(totalIssues/issuesPerPage);i++){
      pageNumber.push(i);
    }
  return (
    <div class="pagination">
      {pageNumber.map((number) => (
        <a onClick={()=>{console.log(number,"hello buddy") 
          paginate(number)}} href="#"key={number}>{number}</a>
      ))}
    </div>
)
}

export default Pagination
