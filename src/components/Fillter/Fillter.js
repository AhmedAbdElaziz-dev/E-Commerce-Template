import React, { Component } from 'react'
import {getAll } from '../Axios/Categories'
class Fillter extends Component{

    state ={
        categories:[],
    }
async componentDidMount(){
const response = await getAll()
const categories = response.categories;
this.setState({categories})
}
  
render(){

    return(

        <React.Fragment>
            <section className="filters">
            {/* <!-- search box --> */}
            <div className="search-box">
                <input className="search-box__input" placeholder="Search..." type="text" onChange={this.props.search} name="txt_search" id=""/>
                <button type="submit" className="search-box__btn">
                    <i className="fas fa-search"></i>
                </button>
            </div>
            {/* <!-- filter list --> */}
            <div>
                {/* <!-- filter header --> */}
                <h5>Categories</h5>
                {/* <!-- filter list --> */}
                <ul className="list list--vr-separator">
                <li  className="link list__item" onClick={()=>this.props.categoryFilter()}><i className="link__icon fas fa-angle-right"></i>All categories</li>
                    {this.state.categories.map((el,index)=>{
                        return (<li key={index} className="link list__item" onClick={()=>this.props.categoryFilter(el._id)}><i className="link__icon fas fa-angle-right"></i>{el.name}</li>)
                    })}
                 
                </ul>
            </div>
            {/* <!-- filter tags --> */}
            <div>
                {/* <!-- filter header --> */}
                <h5>Tags</h5>
                {/* <!-- filter tags --> */}
                {/* <div className="tags">
                    <span className="tag">Nike</span>
                    <span className="tag">Travel</span>
                    <span className="tag">Sport</span>
                    <span className="tag">Tv</span>
                    <span className="tag">Books</span>
                    <span className="tag">Tech</span>
                    <span className="tag">Addidas</span>
                    <span className="tag">Promo</span>
                    <span className="tag">Reading</span>
                    <span className="tag">Social</span>
                    <span className="tag">New</span>
                    <span className="tag">Special</span>
                    <span className="tag">Food</span>
                    <span className="tag">Used</span>
                </div> */}
            </div>
            {/* <!-- related items --> */}
            <div>
                {/* <!-- title --> */}
                {/* <h5></h5> */}
                {/* <!-- small item --> */}
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
        </React.Fragment>
    )
}
}

export default Fillter;