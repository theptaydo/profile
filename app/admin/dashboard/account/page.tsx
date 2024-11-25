'use client'; // Thêm dòng này để báo rằng đây là một Client Component
import '@/styles/admin.css';
import Link from 'next/link';
import React, { useState } from 'react';
export default function User() {
  const [searchTerm, setSearchTerm] = useState('');

  // Dữ liệu người dùng mẫu
  const users = [
    { name: 'David Grey', subject: 'Fund is not received', status: 'DONE', date: 'Dec 5, 2017', id: 'WD-12345', img: '/admin/images/faces/face1.jpg' },
    { name: 'Stella Johnson', subject: 'High loading time', status: 'PROGRESS', date: 'Dec 12, 2017', id: 'WD-12346', img: '/admin/images/faces/face2.jpg' },
    { name: 'Marina Michel', subject: 'Website down for one week', status: 'ON HOLD', date: 'Dec 16, 2017', id: 'WD-12347', img: '/admin/images/faces/face3.jpg' },
    { name: 'John Doe', subject: 'Losing control on server', status: 'REJECTED', date: 'Dec 3, 2017', id: 'WD-12348', img: '/admin/images/faces/face4.jpg' },
  ];

  // Lọc danh sách người dùng dựa trên từ khóa tìm kiếm
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleButtonClick = () => {
    window.location.href = "/admin/dashboard/account/user"; // Đường dẫn bạn muốn chuyển đến
  };
    return (
      
      <div className="card-account" style={{}}>
        <div className="card-body-account">
        <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white me-2">
              <i className="bi bi-house"></i>
            </span> Người dùng
          </h3>
       <div></div>
          <div className="header-box mb-3">
          <input
            type="text"
            className="bi bi-search search-icon"
            placeholder="Tìm kiếm người dùng..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />     
           <button className="new-user-button" onClick={handleButtonClick}>+ New post</button>
        </div>     
     
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th> Assignee </th>
                  <th> Subject </th>
                  <th> Status </th>
                  <th> Last Update </th>
                  <th> Tracking ID </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                     David Grey
                  </td>
                  <td> Fund is not recieved </td>
                  <td>
                    <label className="badge badge-gradient-success">DONE</label>
                  </td>
                  <td> Dec 5, 2017 </td>
                  <td> WD-12345 </td>
                </tr>
                <tr>
                  <td>
                   Stella Johnson
                  </td>
                  <td> High loading time </td>
                  <td>
                    <label className="badge badge-gradient-warning">PROGRESS</label>
                  </td>
                  <td> Dec 12, 2017 </td>
                  <td> WD-12346 </td>
                </tr>
                <tr>
                  <td>
                   Marina Michel
                  </td>
                  <td> Website down for one week </td>
                  <td>
                    <label className="badge badge-gradient-info">ON HOLD</label>
                  </td>
                  <td> Dec 16, 2017 </td>
                  <td> WD-12347 </td>
                </tr>
                <tr>
                  <td>
                   John Doe
                  </td>
                  <td> Loosing control on server </td>
                  <td>
                    <label className="badge badge-gradient-danger">REJECTED</label>
                  </td>
                  <td> Dec 3, 2017 </td>
                  <td> WD-12348 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }