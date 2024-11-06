'use client';

import Script from 'next/script';
import Sales from '@/app/admin/dashboard/main/card/salesCard';
import Orders from '@/app/admin/dashboard/main/card/ordersCard';
import Visitors from '@/app/admin/dashboard/main/card/visitorsCard';
import VisitSalesStatistics from '@/app/admin/dashboard/main/card/visitSalesStatisticsCard';
import TrafficSources from '@/app/admin/dashboard/main/card/trafficSourcesCard';
import RecentTickets from '@/app/admin/dashboard/main/card/RecentTickets';

export default function Main() {
  return (
    <div className="main-panel" style={{ marginLeft: "0px" }}>
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white me-2">
              <i className="bi bi-house"></i>
            </span> Dashboard
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview <i className="bi bi-exclamation-circle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <Sales />
          <Orders />
          <Visitors />

        </div>
        <div className="row">
          <VisitSalesStatistics />
          <TrafficSources />

        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <RecentTickets />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body p-0 d-flex">
                <div id="inline-datepicker" className="datepicker datepicker-custom"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent Updates</h4>
                <div className="d-flex">
                  <div className="d-flex align-items-center me-4 text-muted font-weight-light">
                    <i className="bi bi-person"></i>
                    <span>jack Menqu</span>
                  </div>
                  <div className="d-flex align-items-center text-muted font-weight-light">
                    <i className="bi bi-stopwatch"></i>
                    <span>October 3rd, 2018</span>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-6 pe-1">
                    <img src="/admin/images/dashboard/img_1.jpg" className="mb-2 mw-100 w-100 rounded" alt="image" />
                    <img src="/admin/images/dashboard/img_4.jpg" className="mw-100 w-100 rounded" alt="image" />
                  </div>
                  <div className="col-6 ps-1">
                    <img src="/admin/images/dashboard/img_2.jpg" className="mb-2 mw-100 w-100 rounded" alt="image" />
                    <img src="/admin/images/dashboard/img_3.jpg" className="mw-100 w-100 rounded" alt="image" />
                  </div>
                </div>
                <div className="d-flex mt-5 align-items-top">
                  <img src="/admin/images/faces/face3.jpg" className="img-sm rounded-circle me-3" alt="image" />
                  <div className="mb-0 flex-grow">
                    <h5 className="me-2 mb-2">School Website - Authentication Module.</h5>
                    <p className="mb-0 font-weight-light">It is a long established fact that a reader will be distracted by the readable content of a page.</p>
                  </div>
                  <div className="ms-auto">
                    <i className="bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Project Status</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> # </th>
                        <th> Name </th>
                        <th> Due Date </th>
                        <th> Progress </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td> 1 </td>
                        <td> Herman Beck </td>
                        <td> May 15, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-success"
                              role="progressbar"
                              style={{ width: "25%" }}
                              aria-valuenow={25}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>

                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Messsy Adam </td>
                        <td> Jul 01, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow={75} // Chuyển đổi thành số
                              aria-valuemin={0} // Chuyển đổi thành số
                              aria-valuemax={100} // Chuyển đổi thành số
                            ></div>
                          </div>

                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> John Richards </td>
                        <td> Apr 12, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-warning"
                              role="progressbar"
                              style={{ width: "90%" }} // Sử dụng một đối tượng JavaScript cho style
                              aria-valuenow={90} // Chuyển thành số
                              aria-valuemin={0} // Chuyển thành số
                              aria-valuemax={100} // Chuyển thành số
                            ></div>
                          </div>

                        </td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td> Peter Meggik </td>
                        <td> May 15, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-primary"
                              role="progressbar"
                              style={{ width: "50%" }} // Sử dụng đối tượng JavaScript cho style
                              aria-valuenow={50} // Chuyển thành số
                              aria-valuemin={0} // Chuyển thành số
                              aria-valuemax={100} // Chuyển thành số
                            ></div>
                          </div>

                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Edward </td>
                        <td> May 03, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-danger"
                              role="progressbar"
                              style={{ width: "35%" }} // Sử dụng đối tượng JavaScript cho style
                              aria-valuenow={35} // Chuyển thành số
                              aria-valuemin={0} // Chuyển thành số
                              aria-valuemax={100} // Chuyển thành số
                            ></div>
                          </div>

                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Ronald </td>
                        <td> Jun 05, 2015 </td>
                        <td>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: "65%" }} // Sử dụng đối tượng JavaScript cho style
                              aria-valuenow={65} // Chuyển thành số
                              aria-valuemin={0} // Chuyển thành số
                              aria-valuemax={100} // Chuyển thành số
                            ></div>
                          </div>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-dark">Todo List</h4>
                <div className="add-items d-flex">
                  <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                  <button className="add btn btn-gradient-primary font-weight-bold todo-list-add-btn" id="add-task">Add</button>
                </div>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list todo-list-custom">
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Meeting with Alisa </label>
                      </div>
                      <i className="bi bi-x-circle"></i>
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Call John </label>
                      </div>
                      <i className="bi bi-x-circle"></i>
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Create invoice </label>
                      </div>
                      <i className="bi bi-x-circle"></i>
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Print Statements </label>
                      </div>
                      <i className="bi bi-x-circle"></i>
                    </li>
                    <li className="completed">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" checked /> Prepare for presentation </label>
                      </div>
                      <i className="bi bi-x-circle"></i>
                    </li>
                    <li>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="checkbox" type="checkbox" /> Pick up kids from school </label>
                      </div>
                      <i className="bi bi-x-circle"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}