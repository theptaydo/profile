'use client'; // Thêm dòng này nếu bạn sử dụng các hook hoặc sự kiện liên quan đến client
import "@/styles/main.css";
export default function News() {

    return(
<>
<section className="home-news">
  <div className="container">
    <div className="row">
      {/* News Section */}
      <div className="col-sm-6">
        <h2 style={{ textTransform: 'uppercase' }} className="block-title">
          <a href="https://www.vinamilk.com.vn/vi/tin-tuc-su-kien">Tin tức - Sự kiện</a>
        </h2>
        <div className="home-news__grid row">
              <div className="home-news__grid__cell col-sd-6">
                <article className="home-news__item -big">
                <div className="card" style={{width: '35rem'}}>
                <img
                          className="lozad loaded"
                          data-src=""
                          alt=""
                          src="/img/news/2.png"
                          data-loaded="true" >
                          </img>   
  <div className="card-body">
    <h5 className="card-title">Thép Tây Đô Tổng Kết 9 Tháng Đầu Năm 2024: Thành Tựu và Kế Hoạch Phát Triển Cuối Năm</h5>
    <p className="card-text">Năm 2024, Công ty Thép Tây Đô đã đối mặt với những thách thức từ thị trường thép trong nước và quốc tế. Tuy nhiên, nhờ sự chỉ đạo quyết liệt từ Ban Lãnh đạo cùng sự nỗ lực của toàn thể cán bộ công nhân viên.</p>
    <a href="#" className="primary">Go somewhere</a>
  </div>
</div>
                </article>
              </div>

              <div className="clearfix"></div>

              {/* More News Articles */}
              <div className="home-news__grid__cell col-sm-5" style={{  }}>
              <article className="home-news__item">
    <div className="card" style={{ width: '16.6rem',padding:'0px',margin:'9px' }}>
      <img
        className="lozad loaded"
        data-src="https://www.vinamilk.com.vn/static/uploads/article/1728449315-8c19bf9bbf816507d507579688ca9663e2566ff0250fe7ddb324e9de03851d64.jpg"
        alt=""
        src="/img/news/1.jpg"
        data-loaded="true"
      />
      <div className="card-body">
        <h5 className="card-title">Chào mừng Ngày Phụ Nữ Việt Nam 20/10 - Cuộc Thi "Trang Trí Bánh Kem" Tại Công Ty Thép Tây Đô</h5>
        <p className="card-text">Nhân dịp Ngày Phụ Nữ Việt Nam 20/10, Công Ty Thép Tây Đô đã tổ chức một buổi lễ trang trọng và vui tươi để tôn vinh những đóng góp và vai trò to lớn của chị em phụ nữ trong công ty.</p>
        <a href="#" className="primary">Go somewhere</a>
      </div>
    </div>
  </article>
</div>

<div className="home-news__grid__cell col-sm-6" style={{ }}>
  <article className="home-news__item">
    <div className="card" style={{ width: '16.6rem',padding:'0px',margin:'9px' }}>
      <img
        className="lozad loaded"
        data-src="https://www.vinamilk.com.vn/static/uploads/article/1728449315-8c19bf9bbf816507d507579688ca9663e2566ff0250fe7ddb324e9de03851d64.jpg"
        alt=""
        src="/img/news/3.jpg"
        data-loaded="true"
      />
      <div className="card-body">
        <h5 className="card-title">Công ty Thép Tây Đô Hỗ Trợ Đồng Bào Lào Cai khắc phục hậu quả sau cơn bão số 3</h5>
        <p className="card-text">Vừa qua, hưởng ứng lời kêu gọi của Ủy ban Trung ương Mặt trận Tổ quốc Việt Nam và chia sẻ với những mất mát do cơn bão số 3 (Yagi) gây ra, Công ty Thép Tây Đô đã tham gia cùng Tổng công ty Thép Việt Nam - CTCP (VNSTEEL) trong hoạt động cứu trợ.</p>
        <a href="#" className="primary">Go somewhere</a>
      </div>
    </div>
  </article>
</div>
            </div>
          </div>

          {/* Shareholder News Section */}
          <div className="col-sm-6">
        <h2 style={{ textTransform: 'uppercase' }} className="block-title">
          <a href="https://www.vinamilk.com.vn/vi/thong-bao-co-dong">Tin cổ đông</a>
        </h2>
        <div className="home-news__grid row">
        <div className="home-news__grid__cell col-sd-6">
                <article className="home-news__item -big">
                <div className="card" style={{width: '35rem'}}>
                <img
                          className="lozad loaded"
                          data-src="https://www.vinamilk.com.vn/static/uploads/article/1728449315-8c19bf9bbf816507d507579688ca9663e2566ff0250fe7ddb324e9de03851d64.jpg"
                          alt=""
                          src="/img/news/5.jpg"
                          data-loaded="true" >
                          </img>   
  <div className="card-body">
    <h5 className="card-title">​ THẮP SÁNG ĐÊM TRUNG THU ​</h5>
    <p className="card-text"> 
    Mùa trăng năm nay, Công ty Thép Tây Đô đã có cơ hội mang đến niềm vui và hy vọng cho những trái tim bé nhỏ tại Trung tâm Công tác Xã hội thành phố Cần Thơ. </p>
    <a href="#" className="primary">Go somewhere</a>
  </div>
</div>
                </article>
              </div>

                          {/* More News Articles */}
                          <div className="home-news__grid__cell col-sm-5" style={{  }}>
              <article className="home-news__item">
    <div className="card" style={{ width: '16.6rem',padding:'0px',margin:'9px' }}>
      <img
        className="lozad loaded"
        data-src="https://www.vinamilk.com.vn/static/uploads/article/1728449315-8c19bf9bbf816507d507579688ca9663e2566ff0250fe7ddb324e9de03851d64.jpg"
        alt=""
        src="/img/news/4.jpg"
        data-loaded="true"
      />
      <div className="card-body">
        <h5 className="card-title">Chào mừng Tết Trung Thu 2024 cùng Thép Tây Đô!</h5>
        <p className="card-text">Với mong muốn mang đến một mùa Trung Thu ấm áp và ý nghĩa cho các em nhỏ, Công ty Thép Tây Đô đã tổ chức chương trình "Trung Thu Yêu Thương" tại Phường Trà Nóc và Phường Phước Thới.</p>
        <a href="#" className="primary">Go somewhere</a>
      </div>
    </div>
  </article>
</div>

<div className="home-news__grid__cell col-sm-6" style={{ }}>
  <article className="home-news__item">
    <div className="card" style={{ width: '16.6rem', padding:'0px',margin:'9px'}}>
      <img
        className="lozad loaded"
        data-src="https://www.vinamilk.com.vn/static/uploads/article/1728449315-8c19bf9bbf816507d507579688ca9663e2566ff0250fe7ddb324e9de03851d64.jpg"
        alt=""
        src="/img/news/6.jpg"
        data-loaded="true"
      />
      <div className="card-body">
        <h5 className="card-title">Công ty Thép Tây Đô Phát Động Chương Trình Quyên Góp Ủng Hộ Đồng Bào Miền Bắc Khắc Phục Hậu Quả Thiên Tai</h5>
        <p className="card-text"> 
        Trong những ngày qua, các tỉnh miền Bắc nước ta đã và đang phải gánh chịu những trận lũ lụt nghiêm trọng, gây ra nhiều thiệt hại về người và của. </p>
        <a href="#" className="primary">Go somewhere</a>
      </div>
    </div>
  </article>
</div>
            </div>
          </div>

          {/* View All Button */}
          
        </div>
        
      </div>
      <div className="col-sd-8">
        <div className="home-news__action"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }} >
          <a href="https://www.vinamilk.com.vn/vi/tin-tuc-su-kien" className="button" style={{ textAlign: 'center' }}>
                Xem tất cả
              </a>
            </div>
          </div>
    </section>
</>
    );
}
