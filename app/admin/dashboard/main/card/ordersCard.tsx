"use client";
import Image from "next/image";
export default function Orders() {
  return (
    <div className="col-md-4 stretch-card grid-margin">
      <div className="card bg-gradient-info card-img-holder text-white">
        <div className="card-body">
          <Image
            src="/admin/images/dashboard/circle.svg"
            alt="circle-image"
            className="card-img-absolute"
            width={500} // đặt chiều rộng phù hợp
            height={500} // đặt chiều cao phù hợp
          />
          <h4 className="font-weight-normal mb-3">Weekly Orders <i className="bi bi-bookmark float-end"></i>
          </h4>
          <h2 className="mb-5">45,6334</h2>
          <h6 className="card-text">Decreased by 10%</h6>
        </div>
      </div>
    </div>
  );
}