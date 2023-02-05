import React from 'react'
import Navigation from '../Components/Navigation/Navigation';
import LongCard from '../Assets/Cards/LongCard';
import Second from '../Components/SecondSection/Second';
import FilterBox from '../Components/FilterBox/FilterBox';
import IssueList from '../Components/IssuesList/IssueList';
import FooterCo from '../Components/FooterComponent/FooterCo';
import Pagination from '../Components/Pagination/Pagination';
function GitIssues() {
  return (
    <div>
      <Navigation/>
      <LongCard/>
      <Second/>
      <FilterBox/>
      <IssueList/>
      <FooterCo/>
      <Pagination/>
    </div>
  )
}

export default GitIssues
