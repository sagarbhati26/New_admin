import React from 'react';

const MainContent = () => {
  return (
    
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header">
              <div className="icon icon-warning">
                <span className="material-icons">equalizer</span>
              </div>
            </div>
            <div className="card-content">
              <p className="category"><strong>Visits</strong></p>
              <h3 className="card-title">70,340</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons text-info">info</i>
                <a href="#pablo">See detailed report</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header">
              <div className="icon icon-rose">
                <span className="material-icons">shopping_cart</span>
              </div>
            </div>
            <div className="card-content">
              <p className="category"><strong>Orders</strong></p>
              <h3 className="card-title">102</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">local_offer</i> Product-wise sales
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header">
              <div className="icon icon-success">
                <span className="material-icons">attach_money</span>
              </div>
            </div>
            <div className="card-content">
              <p className="category"><strong>Revenue</strong></p>
              <h3 className="card-title">$23,100</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">date_range</i> Weekly sales
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="card card-stats">
            <div className="card-header">
              <div className="icon icon-info">
                <span className="material-icons">follow_the_signs</span>
              </div>
            </div>
            <div className="card-content">
              <p className="category"><strong>Followers</strong></p>
              <h3 className="card-title">+245</h3>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">update</i> Just Updated
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default MainContent;
