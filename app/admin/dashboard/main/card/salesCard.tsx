"use client";

import Image from "next/image";
export default function Sales() {
  return (
    <div className="col-md-4 stretch-card grid-margin">
      <div className="card bg-gradient-danger card-img-holder text-white">
        <div className="card-body">
          <Image src="/admin/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
          <h4 className="font-weight-normal mb-3">Weekly Sales <i className="bi bi-graph-up float-end"></i>
          </h4>
          <h2 className="mb-5">$ 15,0000</h2>
          <h6 className="card-text">Increased by 60%</h6>
        </div>
      </div>
    </div>
  );
}