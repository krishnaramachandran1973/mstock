import { useEffect, useState } from "react";
import { connect } from "react-redux";
import store from "../AppStore";

const CompanyListComponent = ({ isLoggedIn, companies }) => {
  const [companyList, setCompanyList] = useState([]);
  useEffect(() => {
    const { companies } = store.getState();
    console.log(companies);
    setCompanyList(companies);
  });

  return (
    <div className="container border rounded m-5 p-5">
      <h2>Company List</h2>
      <div className="row">
        {companyList.map((company) => {
          const { id, title, description, price } = company;
          return (
            <div className="col-4 mb-4" key={id}>
              <div className="card">
                <div className="card-header">
                  <b>{title}</b>
                </div>
                <div className="card-body">
                  <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                  <b>Today's Price: ${price}</b>
                  {isLoggedIn && (
                    <button type="button" className="btn btn-danger m-2">
                      Watch
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isLoggedIn, companies } = state;
  return { isLoggedIn, companies };
};

export default connect(mapStateToProps)(CompanyListComponent);
