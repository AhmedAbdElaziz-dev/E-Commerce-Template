import React from "react";
// import React.Fragment from "../../hoc/React.Fragment";
const paging = (props) => {
  const productsListSize = props.size;
  const pagesNumber = Math.ceil(productsListSize / props.pageSize)  ;
  const paginationList = [];
  for(let i = 1;i<=pagesNumber;i++){
    paginationList.push(i);
  }
  return (
    
    <React.Fragment>
      {pagesNumber >1 &&(
        <div className="paging">
        {/* <!-- left arrow --> */}
        <div className="paging__arrow">
          <i className="fas fa-angle-left" name="leftArrrow"></i>
        </div>
        {/* <!-- page number --> */}
        {paginationList.map((pagesNum,index)=>
        <div
         className={pagesNum === parseInt( props.currentPage ) ?"paging__number active":"paging__number"}
          key={index}
           id={pagesNum}
            onClick={props.page}>{pagesNum}</div>
          
          )}
        {/* <div className="paging__number active">1</div>
        <div className="paging__number">2</div>
        <div className="paging__number">3</div> */}
        {/* <!-- right arrow --> */}
        <div className="paging__arrow">
          <i className="fas fa-angle-right" name="rightArrow"></i>
        </div>
      </div>

      )}
      
    </React.Fragment>
  );
};
export default paging;
