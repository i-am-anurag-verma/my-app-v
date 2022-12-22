import React from 'react'


const Pagination = (props) => {
  const {currentPage, totalPage, onClick} = props;
  const pages = [];
  for(let i=1; i<=totalPage; i++){
    pages.push(i);
  }
  return (
    <div>
        {pages.map((page, index) => {
            return currentPage === page ? ` page ${page} `:(
                <a href="#" key={index}  onClick={() => onClick(page)}>{` page ${page} `}</a>
            )
        })}
    </div>
  )
}

export default Pagination