import React from 'react';

const TVShowsHeader = () => {
  return (
    <div className="container-fluid px-4 bg-dark text-white">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="dropdown ml-4 mt-1">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: '#221f1f' }}
            >
              Genres &nbsp;
            </button>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item text-white" href="#">Comedy</a>
              <a className="dropdown-item text-white" href="#">Drama</a>
              <a className="dropdown-item text-white" href="#">Thriller</a>
            </div>
          </div>
        </div>
        <div>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
    </div>
  );
};

export default TVShowsHeader;