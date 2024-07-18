import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,date,source} = this.props;
    return (
        
      <div className='my-3'>
        <div className="card" style={{background:'#35b0a9',color:'white'}}>
         <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
         }}>
          <span className='badge rounded-pill bg-danger'>{source}</span>
          </div> 
  <img src={!imageUrl? "https://t4.ftcdn.net/jpg/06/50/17/81/240_F_650178114_WCvMncO2Hhq6qhs2iiwq3i89n7NUlItn.jpg":imageUrl} alt='....'/> 
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted" >By {!author? "Unknown":author} on {new Date(date).toGMTString()}</small></p>
  
    <a href={newsUrl} className="btn btn-primary">Read more...</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
