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
- Lab03 - ...
- Lab04 - ...
- Lab05 - ...
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

Riêng Lab02 có cấu trúc project Node.js backend theo mô hình Route - Controller - DAO:
- movie-reviews/backend/index.js: khởi chạy server và kết nối MongoDB Atlas
- movie-reviews/backend/server.js: cấu hình Express app và middleware
- movie-reviews/backend/api/: định nghĩa route và controller
- movie-reviews/backend/dao/: tầng truy xuất dữ liệu MongoDB

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

---

## Tình trạng hoàn thành
- **Lab01**: Hoàn thành ✅
- **Lab02**: Hoàn thành ✅
- **Lab03**: Chưa thực hiện
- **Lab04**: Chưa thực hiện
- **Lab05**: Chưa thực hiện
- **Lab06**: Chưa thực hiện

---

## Ghi chú sử dụng AI
- Công cụ sử dụng: ChatGPT, GitHub Copilot  
- Mục đích sử dụng: hỗ trợ giải thích lỗi, hướng dẫn tổ chức repository và hỗ trợ mô tả README  
- Phần được AI hỗ trợ: cấu trúc README và giải thích kỹ thuật