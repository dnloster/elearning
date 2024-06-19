export const courses = [
    {
        id: "1",
        img: "/image/bo-mach-chu.jpg",
        title: "Bo mạch chủ",
        desc: "Bo mạch chủ chịu trách nhiệm liên kết các linh kiện phần cứng trong máy tính thành một hệ thống để hoạt động một cách trơn tru và nhịp nhàng",
        slug: "bo-mach-chu",
        lecture: [
            {
                id: "1",
                title: "Bài 1: Giới thiệu Mainboard",
                duration: 30,
                slug: "gioi-thieu-mainboard",
                src: "/video/mainboard.mp4",
            },
            {
                id: "2",
                title: "Bài 2: Các thành phần trên Mainboard",
                duration: 30,
                slug: "thanh-phan-mainboard",
                src: "/video/bo-nguon.mp4",
            },
        ],
        gained: [
            "Nhận biết được mainboard",
            "Phân loại được các mainboard theo hãng sản xuất, socket, chipset",
            "Giải thích cấu trúc và các thành phần chính trên mainboard",
            "Lựa chọn và thay thế được mainboard",
        ],
        questions: {
            slug: "questions",
            question: [
                {
                    id: "1",
                    ask: "Mainboard là gì? ",
                    answers: [
                        "A. Bộ nhớ chính của máy tính",
                        "B. Bộ xử lý trung tâm",
                        "C. Bảng mạch chính",
                        "D. Các câu trên đều sai",
                    ],
                    correctAnswer: "C. Bảng mạch chính",
                },
                {
                    id: "2",
                    ask: "Mainboard có chức năng chính là gì?",
                    answers: [
                        "A. Lưu trữ dữ liệu",
                        "B. Quản lý nguồn điện",
                        "C. Kết nối và điều khiển các thành phần của máy tính",
                        "D. Bảo vệ máy tính khỏi virus",
                    ],
                    correctAnswer: "C. Kết nối và điều khiển các thành phần của máy tính",
                },
                {
                    id: "3",
                    ask: "Bo mạch chủ ATX có kích thước tiêu chuẩn là bao nhiêu?",
                    answers: ["A. 12 x 9.6 inches", "B. 9.6 x 9.6 inches", "C. 6.7 x 6.7 inches", "D. 9 x 7.5 inches"],
                    correctAnswer: "A. 12 x 9.6 inches",
                },
            ],
        },
    },
    {
        id: "2",
        img: "/image/bo-nguon.jpg",
        title: "Bộ nguồn",
        desc: "Bộ nguồn máy tính chịu trách nhiệm cung cấp điện năng cho toàn bộ các linh kiện trong máy tính",
        slug: "bo-nguon",
        lecture: [
            {
                id: "1",
                title: "Bài 1",
                duration: 40,
                slug: "gioi-thieu-psu",
                src: "/video/bo-nguon.mp4",
            },
            {
                id: "2",
                title: "Bài 2",
                duration: 70,
                slug: "thanh-phan-psu",
                src: "/video/mainboard.mp4",
            },
        ],
        gained: [
            "Nhận biết được bộ nguồn",
            "Phân loại được các mainboard theo thương hiệu, công suất, kích thước,...",
            "Giải thích cấu trúc và các thành phần chính trong bộ nguồn",
            "Hiểu được công suất, hiệu suất và các mức điện áp đầu ra của bộ nguồn",
            "Giải thích được các loại chân cắm kết nối phổ biến",
            "Lựa chọn và thay thế được mainboard",
        ],
        questions: {
            slug: "questions",
            question: [
                {
                    id: "1",
                    ask: "Bộ nguồn là gì? ",
                    answers: [
                        "A. Bộ nhớ chính của máy tính",
                        "B. Bộ xử lý trung tâm",
                        "C. Bảng mạch chính",
                        "D. Các câu trên đều sai",
                    ],
                    correctAnswer: "C. Bảng mạch chính",
                },
                {
                    id: "2",
                    ask: "Mainboard có chức năng chính là gì?",
                    answers: [
                        "A. Lưu trữ dữ liệu",
                        "B. Quản lý nguồn điện",
                        "C. Kết nối và điều khiển các thành phần của máy tính",
                        "D. Bảo vệ máy tính khỏi virus",
                    ],
                    correctAnswer: "C. Kết nối và điều khiển các thành phần của máy tính",
                },
                {
                    id: "3",
                    ask: "Bo mạch chủ ATX có kích thước tiêu chuẩn là bao nhiêu?",
                    answers: ["A. 12 x 9.6 inches", "B. 9.6 x 9.6 inches", "C. 6.7 x 6.7 inches", "D. 9 x 7.5 inches"],
                    correctAnswer: "A. 12 x 9.6 inches",
                },
            ],
        },
    },
];
