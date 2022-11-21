import React from 'react'

interface FiltersProps {}

const Filters = ({}: FiltersProps) => {
  return (
    <div className="home__fiters">
      <div className="home__fiters--work">
        <span>Show me </span>
        <span>all work</span>
      </div>
      <div className="home__fiters--industry">
        <span>in </span>
        {'  '}
        <span className="md:text-black text-white">all industries</span>
      </div>
    </div>
  )
}

export default Filters
