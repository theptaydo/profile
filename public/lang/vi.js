import Portfolio from "@/app/home/portfolio/page";

export default {
  header: {
    home: "Trang chủ",
    about: "Giới thiệu",
    service: "Dịch vụ",
    profile: "Hồ sơ",
    team: "Đội ngũ",
    products: {
      main: "Sản phẩm",
    },
    contact: "Liên hệ",
    switchLanguage: "Việt Nam",
    contact: "Liên hệ",
    switchLanguage: {
      lang: {
        id: "vi",
        name: "Tiếng Việt",
        src: "/img/langs/Flag_of_Vietnam.svg.png"
      },
      lang1: {
        id: "en",
        name: "English",
        src: "/img/langs/Flag_of_the_United_Kingdom.png"
      },
      lang2: {
        id: "km",
        name: "កម្ពុជា",
        src: "/img/langs/Flag_of_Cambodia.svg.png"
      },  //khmer
      lang3: {
        id: "zh-cn",
        name: "中国",
        src: "/img/langs/china.png"
      },  //china
      lang4: {
        id: "ja",
        name: "日本",
        src: "/img/langs/Flag_of_Japan_(bordered).svg.png"
      },  //japan
    },
  },
  footer: {
    section:[
      {
        brand: "Thép Tây Đô",
        address: "123 Đường Công Nghiệp Quận Bình Thủy, TP. Cần Thơ",
        phone:{
          title: "Điện thoại: ",
          value: "+84 292 123 4567",
        },
        email:{
          title:"Email: ",
          value: "info@theptaydo.com"
        }
      },
      {
        brand: "Văn phòng xưởng liệu",
        address: "27 Lê Hồng Phong, P. Trà An, Quận Bình Thủy, TP. Cần Thơ",
        phone:{
          title: "Điện thoại: ",
          value: "+84.796 65 65 65",
        },
        email:{
          title:"Email: ",
          value: "info@theptaydo.com"
        }
      },
      {
        brand: "Văn phòng đại diện tại Cần Thơ",
        address: "Số 44, CMT8, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ",
        phone:{
          title: "Điện thoại: ",
          value: "+84.796 65 65 65",
        },
        email:{
          title:"Email: ",
          value: "info@theptaydo.com"
        }
      },
      {
        brand: "Văn phòng đại diện tại TP HCM",
        address: "...",
        phone:{
          title: "Điện thoại: ",
          value: "+84.796 65 65 65",
        },
        email:{
          title:"Email: ",
          value: "info@theptaydo.com"
        }
      },
    ],
    cert: {
      title: "Giấy chứng nhận đăng ký kinh doanh số: 1800156657",
      dateOfPlace: "Ngày cấp: 27/06/2008 - Nơi cấp: Sở KH & ĐT TP Cần Thơ",
      grant: "Tổng Giám Đốc Huỳnh Trung Quang"

    },
    infor:{
      title: "Theo Dõi Chúng Tôi",
      description: "Hãy kết nối với chúng tôi trên các kênh truyền thông xã hội để cập nhật thông tin mới nhất về thị trường thép.",
    }
  },
  HomePage: {
    home: "Trang chủ",
    contact: "Liên hệ",
    switchLanguage: "Việt Nam",
    hero: {
      welcome: "Chào mừng đến với ",
      brand: "Thép Tây Đô",
      description: "Doanh nghiệp hàng đầu về lĩnh vực sản xuất và kinh doanh các sản phẩm về Thép xây dựng tại ĐBSCL.",
      buy: "Mua ngay",
      more: "Xem thêm",
    },
    featuredServices: {
      one: {
        title: "Cung cấp thép xây dựng",
        description: "Chuyên cung cấp các loại thép xây dựng như thép cây, thép hình, thép cuộn cho các công trình lớn nhỏ.",
      },
      two: {
        title: "Gia công thép theo yêu cầu",
        description: "Dịch vụ gia công thép theo yêu cầu của khách hàng, đáp ứng các tiêu chuẩn kỹ thuật chính xác.",
      },
      three: {
        title: "Tư vấn giải pháp thép",
        description: "Chúng tôi cung cấp tư vấn chuyên sâu về các loại thép phù hợp cho từng loại công trình.",
      },
      four: {
        title: "Vận chuyển và lắp đặt thép",
        description: "Dịch vụ vận chuyển nhanh chóng và lắp đặt thép tận nơi với đội ngũ chuyên nghiệp.",
      },
    },
    about: {
      badge: "GIỚI THIỆU",
      title: "Giới thiệu về ",
      subTitle: "chúng tôi",
      hightlight: "Tiên phong trong ngành công nghiệp thép",
      description: "Với hơn 20 năm kinh nghiệm, Thép Tây Đô chuyên cung cấp các sản phẩm thép chất lượng cao cho các công trình xây dựng và ngành công nghiệp.",
      attributes: {
        one: {
          title: "Chất lượng hàng đầu",
          description: "Sản phẩm thép được kiểm định theo tiêu chuẩn quốc tế, đảm bảo độ bền và an toàn."
        },
        two: {
          title: "Giá cả cạnh tranh",
          description: "Chúng tôi cam kết cung cấp sản phẩm với mức giá cạnh tranh nhất trên thị trường.",
        }
      },
      message: "Thép Tây Đô luôn cam kết chất lượng cao, đảm bảo sự hài lòng của khách hàng và xây dựng những công trình bền vững, an toàn."
    },
    team: {
      badge: "ĐỘI NGŨ",
      title: "Những thành viên chủ chốt của ",
      subTitle: "chúng tôi",
      attributes: [
        {
          name: "Đào Duy Tuấn Hùng",
          role: "Phó Tổng Giám Đốc Quản lý chất lượng",
          images: "/img/team/hungddt.png",
          titles: "Ông "
        },
        {
          name: "Huỳnh Trung Quang",
          role: "Tổng Giám Đốc kiêm CT.HĐTV",
          images: "/img/team/quanght.png",
          titles: "Ông "
        },
        {
          name: "Võ Văn Khải",
          role: "Phó Tổng Giám Đốc Kinh doanh",
          images: "/img/team/khaivv.png",
          titles: "Ông "
        },
        {
          name: "Da Den",
          role: "Op moe moe moe oshat",
          images: "https://th.bing.com/th/id/OIP.ueglsKxAkWD-4Bb_nc46IgHaHa?rs=1&pid=ImgDetMain",
          titles: "Anh "
        },
      ]
    },
    portfolio:{
      badge: "Dự Án",
      title: "Khám Phá Các",
      subTitle: "Dự Án Của Chúng Tôi",
      attributes:[

        {
          name: "Cầu Cần Thơ",
          date:"....",
          images:"/img/portfolio/cau-can-tho-su-dung-thep-tay-do.png"
        },
        {
          name: "Cầu Cần Thơ",
          date:"....",
          images:"/img/portfolio/da-khoa-tpct-su-dung-thep-tay-do.png"
        },
        {
          name: "Cầu Cần Thơ",
          date:"....",
          images:"/img/portfolio/da-khoa-trung-uong-ct-su-dung-thep-tay-do.png"
        },
        {
          name: "Cầu Cần Thơ",
          date:"....",
          images:"/img/portfolio/dai-hoc-can-tho-su-dung-thep-tay-do.png"
        },
        {
          name: "Cầu Cần Thơ",
          date:"....",
          images:"/img/portfolio/cau-can-tho-su-dung-thep-tay-do.png"
        },
      ]
    }
  }
}