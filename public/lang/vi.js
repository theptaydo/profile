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
        src: "/img/langs/Flag_of_Vietnam.svg.png",
      },
      lang1: {
        id: "en",
        name: "English",
        src: "/img/langs/Flag_of_the_United_Kingdom.png",
      },
      lang2: {
        id: "km",
        name: "កម្ពុជា",
        src: "/img/langs/Flag_of_Cambodia.svg.png",
      }, //khmer
      lang3: {
        id: "zh-cn",
        name: "中国",
        src: "/img/langs/china.png",
      }, //china
      lang4: {
        id: "ja",
        name: "日本",
        src: "/img/langs/Flag_of_Japan_(bordered).svg.png",
      }, //japan
    },
  },
  footer: {
    content:"Đăng Ký Nhận Thông Tin",
    message:"Đăng ký để nhận được các tin tức mới nhất về sản phẩm và dịch vụ của Thép Tây Đô!",
    placeholder: "Nhập email của bạn",
    loading:"Đang xử lý...",
    sent:"Yêu cầu đăng ký của bạn đã được gửi. Cảm ơn!",
    section: [
      {
        brand: "Thép Tây Đô",
        address: "123 Đường Công Nghiệp Quận Bình Thủy, TP. Cần Thơ",
        phone: {
          title: "Điện thoại: ",
          value: "+84 292 123 4567",
        },
        email: {
          title: "Email: ",
          value: "info@theptaydo.com",
        },
      },
      {
        brand: "Văn phòng xưởng liệu",
        address: "27 Lê Hồng Phong, P. Trà An, Quận Bình Thủy, TP. Cần Thơ",
        phone: {
          title: "Điện thoại: ",
          value: "+84.796 65 65 65",
        },
        email: {
          title: "Email: ",
          value: "info@theptaydo.com",
        },
      },
      {
        brand: "Văn phòng đại diện tại Cần Thơ",
        address: "Số 44, CMT8, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ",
        phone: {
          title: "Điện thoại: ",
          value: "+84.796 65 65 65",
        },
        email: {
          title: "Email: ",
          value: "info@theptaydo.com",
        },
      },
      {
        brand: "Văn phòng đại diện tại TP HCM",
        address: "...",
        phone: {
          title: "Điện thoại: ",
          value: "+84.796 65 65 65",
        },
        email: {
          title: "Email: ",
          value: "info@theptaydo.com",
        },
      },
    ],
    cert: {
      title: "Giấy chứng nhận đăng ký kinh doanh số: 1800156657",
      dateOfPlace: "Ngày cấp: 27/06/2008 - Nơi cấp: Sở KH & ĐT TP Cần Thơ",
      grant: "Tổng Giám Đốc Huỳnh Trung Quang",
    },
    infor: {
      title: "Theo Dõi Chúng Tôi",
      description:
        "Hãy kết nối với chúng tôi trên các kênh truyền thông xã hội để cập nhật thông tin mới nhất về thị trường thép.",
    },
    coppyright: {
      brand: "Thep Tay Do ",
      title: "Bản quyền ",
      subTitle: "Đã Đăng Ký Bản Quyền",
      developer: "Thiết kế bởi ",
    },
  },
  HomePage: {
    home: "Trang chủ",
    contact: "Liên hệ",
    switchLanguage: "Việt Nam",
    hero: {
      welcome: "Chào mừng đến với ",
      brand: "Thép Tây Đô",
      description:
        "Doanh nghiệp hàng đầu về lĩnh vực sản xuất và kinh doanh các sản phẩm về Thép xây dựng tại ĐBSCL.",
      buy: "Mua ngay",
      more: "Xem thêm",
    },
    featuredServices: {
      one: {
        title: "Cung cấp thép xây dựng",
        description:
          "Chuyên cung cấp các loại thép xây dựng như thép cây, thép hình, thép cuộn cho các công trình lớn nhỏ.",
      },
      two: {
        title: "Gia công thép theo yêu cầu",
        description:
          "Dịch vụ gia công thép theo yêu cầu của khách hàng, đáp ứng các tiêu chuẩn kỹ thuật chính xác.",
      },
      three: {
        title: "Tư vấn giải pháp thép",
        description:
          "Chúng tôi cung cấp tư vấn chuyên sâu về các loại thép phù hợp cho từng loại công trình.",
      },
      four: {
        title: "Vận chuyển và lắp đặt thép",
        description:
          "Dịch vụ vận chuyển nhanh chóng và lắp đặt thép tận nơi với đội ngũ chuyên nghiệp.",
      },
    },
    about: {
      badge: "GIỚI THIỆU",
      title: "Giới thiệu về ",
      subTitle: "chúng tôi",
      hightlight: "Tiên phong trong ngành công nghiệp thép",
      description:
        "Với hơn 20 năm kinh nghiệm, Thép Tây Đô chuyên cung cấp các sản phẩm thép chất lượng cao cho các công trình xây dựng và ngành công nghiệp.",
      attributes: {
        one: {
          title: "Chất lượng hàng đầu",
          description:
            "Sản phẩm thép được kiểm định theo tiêu chuẩn quốc tế, đảm bảo độ bền và an toàn.",
        },
        two: {
          title: "Giá cả cạnh tranh",
          description:
            "Chúng tôi cam kết cung cấp sản phẩm với mức giá cạnh tranh nhất trên thị trường.",
        },
      },
      message:
        "Thép Tây Đô luôn cam kết chất lượng cao, đảm bảo sự hài lòng của khách hàng và xây dựng những công trình bền vững, an toàn.",
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
          titles: "Ông ",
        },
        {
          name: "Huỳnh Trung Quang",
          role: "Tổng Giám Đốc kiêm CT.HĐTV",
          images: "/img/team/quanght.png",
          titles: "Ông ",
        },
        {
          name: "Võ Văn Khải",
          role: "Phó Tổng Giám Đốc Kinh doanh",
          images: "/img/team/khaivv.png",
          titles: "Ông ",
        },
        {
          name: "Anh Da Den",
          role: "Uvuvwevwevwe Onyetenyevwe Ugwemubwem Osas",
          images:
            "https://th.bing.com/th/id/OIP.ueglsKxAkWD-4Bb_nc46IgHaHa?rs=1&pid=ImgDetMain",
          titles: "Anh ",
        },
      ],
    },
    portfolio: {
      badge: "Dự Án",
      title: "Khám Phá Các",
      subTitle: "Dự Án Của Chúng Tôi",
      attributes: [
        {
          name: "Cầu Cần Thơ",
          date: "....",
          images: "/img/portfolio/cau-can-tho-su-dung-thep-tay-do.png",
        },
        {
          name: "Bệnh Viện Đa Khoa Thành Phố",
          date: "....",
          images: "/img/portfolio/da-khoa-tpct-su-dung-thep-tay-do.png",
        },
        {
          name: "Bệnh Viện Đa Khoa Trung Ương",
          date: "....",
          images:
            "/img/portfolio/da-khoa-trung-uong-ct-su-dung-thep-tay-do.png",
        },
        {
          name: "Trường Đại Học Cần Thơ",
          date: "....",
          images: "/img/portfolio/dai-hoc-can-tho-su-dung-thep-tay-do.png",
        },
        {
          name: "Bệnh Viện Đa Khoa Thành Phố",
          date: "....",
          images: "/img/portfolio/cau-can-tho-su-dung-thep-tay-do.png",
        },
      ],
    },
    faq: {
      badge: "Câu Hỏi Thường Gặp",
      title: "Những câu hỏi thường gặp về",
      subTitle: "Thép Tây Đô",
      attributes: [
        {
          title:
            " Các sản phẩm thép của Thép Tây Đô có đạt tiêu chuẩn chất lượng quốc tế không?",
          value:
            "Tất cả các sản phẩm thép của chúng tôi đều đạt tiêu chuẩn chất lượng quốc tế như ASTM, JIS, và EN, đảm bảo độ bền và an toàn cho mọi công trình xây dựng.",
        },
        {
          title:
            "Thép Tây Đô có cung cấp dịch vụ gia công thép theo yêu cầu không?",
          value:
            " Chúng tôi cung cấp dịch vụ gia công thép theo yêu cầu kỹ thuật của khách hàng, bao gồm cắt, uốn, và mạ kẽm, đảm bảo đáp ứng đầy đủ các tiêu chuẩn và yêu cầu của từng dự án.",
        },
        {
          title: "Thời gian giao hàng của Thép Tây Đô là bao lâu?",
          value:
            " Thời gian giao hàng thông thường là từ 3-5 ngày làm việc tùy thuộc vào địa điểm và khối lượng đặt hàng. Chúng tôi cũng cung cấp dịch vụ vận chuyển nhanh theo yêu cầu của khách hàng.",
        },
        {
          title: "Thép Tây Đô có hỗ trợ tư vấn cho các dự án lớn không?",
          value:
            "Chúng tôi có đội ngũ kỹ thuật chuyên môn cao, sẵn sàng hỗ trợ tư vấn về sản phẩm thép và giải pháp phù hợp cho các dự án xây dựng lớn nhỏ trên toàn quốc.",
        },
        {
          title: "Thép Tây Đô có cung cấp dịch vụ bảo trì thép không?",
          value:
            " Chúng tôi cung cấp dịch vụ bảo trì và kiểm định thép định kỳ, giúp khách hàng đảm bảo chất lượng và tuổi thọ của các sản phẩm thép sau khi sử dụng.",
        },
        {
          title:
            "Thép Tây Đô có cung cấp thép cho các công trình quốc tế không?",
          value:
            "Chúng tôi không chỉ cung cấp thép cho thị trường trong nước mà còn xuất khẩu sang các quốc gia khác, đảm bảo đáp ứng các tiêu chuẩn quốc tế khắt khe nhất.",
        },
      ],
    },
    products : {
      badge: "Sản phẩm",
      title: "Sản phẩm tiêu biểu",
      subTitle: "Thép Tây Đô",
      generic: "Loại: ",
      characteristic: "Đặc điểm: ",
      standard: "Tiêu chuẩn",
      diameter: "Đường kính: ",
      weight: "Trọng lượng mỗi mét: ",
      contactLink: "Liên hệ",
      items: [
        {
          name: "Thép cuộn tròn trơn",
          types: "CB240T, HPB300, SAE 1018",
          features: "Bề mặt bóng, không trầy xước, không khuyết tật, không bavia, không nứt, ...",
          standards: "TCVN (Việt Nam), GB (Trung Quốc), ASTM (Mỹ)",
          diameters: "6mm, 6.5mm, 8mm, 10mm, 12mm, 14mm",
          weightPerMeter: [
            { diameter: "Ф6 = 0.222 kg" },
            { diameter: "Ф6.5 = 0.260 kg" },
            { diameter: "Ф8 = 0.395 kg" },
            { diameter: "Ф10 = 0.617 kg" },
            { diameter: "Ф12 = 0.888 kg" },
            { diameter: "Ф14 = 1.21 kg" }
          ],
           
        },
        {
          name: "Thép cuộn có hoa văn",
          types: "CB240T, HPB300, SAE 1018",
          features: "Bề mặt bóng, không trầy xước, không khuyết tật, không bavia, không nứt, ...",
          standards: "TCVN (Việt Nam), GB (Trung Quốc), ASTM (Mỹ)",
          diameters: "6mm, 6.5mm, 8mm, 10mm, 12mm, 14mm",
          weightPerMeter: [
            { diameter: "Ф6", weight: "0.222 kg" },
            { diameter: "Ф6.5", weight: "0.260 kg" },
            { diameter: "Ф8", weight: "0.395 kg" },
            { diameter: "Ф10", weight: "0.617 kg" },
            { diameter: "Ф12", weight: "0.888 kg" },
            { diameter: "Ф14", weight: "1.21 kg" }
          ],
          
        }
      ]
    },
    
    contact: {
      badge: "Liên Hệ",
      title: "Liên hệ với",
      subTitle: "Chúng tôi",

      attributes: [
        {
          title: "Địa chỉ",
          value:
            "Lô đất số 45, đường số 2, KCN Trà Nóc 1, P. Trà Nóc, Q. Bình Thủy, TP Cần Thơ Hotline: (+84)2923.841822",
        },
        {
          title: "Điện thoại",
          value: "+1 5589 55488 55",
        },
        {
          title: "Email",
          value: "info@example.com",
        },
      ],
      form: [
        {
          name: "Tên của bạn",
          email: "Email",
          subject: "Tiêu đề",
          message: "Tin nhắn",
          loading: "Đang tải",
          sent: "Đã gửi tin nhắn của bạn. Thank you!",
          submit: "Gửi tin nhắn ",
        },
      ],
    },
  },
};
