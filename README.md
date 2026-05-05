# IE213.Q21 - Web System Development Labs
Repository này lưu trữ các bài thực hành môn **IE213 – Kỹ thuật phát triển hệ thống Web** tại **Trường Đại học Công nghệ Thông tin (UIT)**.

---

## Thông tin sinh viên
- Họ tên: Hồ Thị Minh Ngọc  
- MSSV: 23521022  
- Lớp: IE213.Q21.1  
- Môn học: IE213.Q21 - Kỹ thuật phát triển hệ thống Web  

---

## Danh sách các Lab
- [Lab01 - MongoDB CRUD Operation](Lab01/)
- [Lab02 - Movie Reviews Backend API](Lab02/)
- [Lab03 - Movie Reviews CRUD + Review Management](Lab03/)
- [Lab04 - Movie Reviews Frontend (React)](Lab04/)
- [Lab05 - Xây dựng Frontend với ReactJS](Lab05/)
- Lab06 - ...

---

## Cấu trúc repository
```
23521022-HoThiMinhNgoc-IE213.Q21
│
├── .gitignore
├── README.md
├── Lab01
├── Lab02
├── Lab03
├── Lab04
├── Lab05
└── Lab06
```

Mỗi thư mục Lab bao gồm:
- README.md mô tả bài thực hành
- Source code
- Screenshots
- Báo cáo chi tiết (nếu có)

Lab02 triển khai backend Node.js theo mô hình Route - Controller - DAO:
- movie-reviews/backend/index.js: khởi chạy server và kết nối MongoDB Atlas
- movie-reviews/backend/server.js: cấu hình Express app và middleware
- movie-reviews/backend/api/: định nghĩa route và controller
- movie-reviews/backend/dao/: tầng truy xuất dữ liệu MongoDB

Lab03 mở rộng trực tiếp từ Lab02, bổ sung Review Management:
- CRUD review: POST/PUT/DELETE `/api/v1/movies/review`
- Lấy movie theo id kèm reviews: GET `/api/v1/movies/id/:id`
- Lấy ratings distinct: GET `/api/v1/movies/ratings`
- Có kiểm thử bằng Postman và đối chiếu MongoDB Compass trong `Lab03/screenshots`
- Có báo cáo chi tiết: `Lab03/LAB03-IE213.docx` (tải về để xem)

Lab04 xây dựng frontend React cơ bản:
- Create React App scaffold
- Các component: MoviesList, Movie, AddReview, Login
- Sử dụng react-router-dom cho routing
- react-bootstrap cho UI (Card, Form, Button, Row, Col)

Lab05 hoàn thiện frontend với kết nối API:
- Tạo `MovieDataService` (axios client) để kết nối backend API
- MoviesList: tìm kiếm theo title, filter theo rating, hiển thị danh sách phim với poster
- Movie detail: hiển thị 2 cột (poster bên trái, nội dung + reviews bên phải)
- Review CRUD: thêm/sửa/xóa review với xác thực quyền thuộc sở hữu
- Định dạng ngày giờ bằng moment.js
- Fallback placeholder SVG cho ảnh bị lỗi

---

## Hướng dẫn
Mỗi thư mục Lab có `README.md` riêng mô tả:
- mục tiêu bài thực hành
- môi trường sử dụng
- cách chạy
- kết quả thực hiện

Có thể bắt đầu đọc theo thứ tự:
1. Lab01: thao tác MongoDB CRUD và aggregation.
2. Lab02: xây dựng backend API với Node.js/Express + MongoDB Atlas.
3. Lab03: mở rộng API với review CRUD, lookup reviews và ratings.
4. Lab04: xây dựng frontend React cơ bản với routing và component.
5. Lab05: hoàn thiện frontend với kết nối API, review management và xử lý ảnh.

---

## Tình trạng hoàn thành
- **Lab01**: Hoàn thành ✅
- **Lab02**: Hoàn thành ✅
- **Lab03**: Hoàn thành ✅
- **Lab04**: Hoàn thành ✅
- **Lab05**: Hoàn thành ✅
- **Lab06**: Chưa thực hiện

---

## Ghi chú sử dụng AI
- Công cụ sử dụng: ChatGPT, GitHub Copilot  
- Mục đích sử dụng: hỗ trợ giải thích lỗi, chuẩn hóa cấu trúc repository và hỗ trợ trình bày README  
- Phần được AI hỗ trợ: mô tả kỹ thuật, chuẩn hóa tài liệu và rà soát nội dung