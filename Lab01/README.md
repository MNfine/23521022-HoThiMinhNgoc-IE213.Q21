# Lab01 - MongoDB CRUD Operation

## 1. Mục tiêu
- Làm quen với **MongoDB Atlas** trên nền tảng cloud  
- Kết nối cơ sở dữ liệu bằng **MongoDB Compass**  
- Thực hiện các thao tác **CRUD** trong MongoDB bằng **mongosh**
- Làm việc với **embedded document**
- Sử dụng **MongoDB Query Operators**
- Sử dụng **Aggregation Pipeline**

## 2. Thông tin sinh viên
- Họ tên: Hồ Thị Minh Ngọc
- MSSV: 23521022
- Lớp: IE213.Q21.1
- Môn học: IE213.Q21 - Kỹ thuật phát triển hệ thống Web

## 3. Công cụ và môi trường sử dụng
- MongoDB Atlas: Cloud database
- MongoDB Compass: GUI quản lý MongoDB
- Mongosh: MongoDB shell
- GitHub: Lưu trữ bài thực hành
- Hệ điều hành: Windows 11

## 4. Nội dung thực hiện

### 4.1 Tạo database
Tạo database có tên `23521022-IE213`.

### 4.2 Tạo collection và thêm dữ liệu
Thêm 4 document đầu tiên vào collection `employees`.

### 4.3 Tạo unique index cho trường id
Dùng `createIndex({id:1}, {unique:true})` để đảm bảo không thể thêm document có id trùng.

### 4.4 Truy vấn dữ liệu
- Tìm nhân viên có firstname là John và lastname là Doe
- Tìm nhân viên có tuổi trên 30 và dưới 60
- Tìm các document có middle name

### 4.5 Cập nhật dữ liệu
- Xóa trường middle khỏi các document có middle name
- Thêm trường `organization: "UIT"` cho toàn bộ document
- Cập nhật organization của nhân viên id 5 và 6 thành `USSH`

### 4.6 Thống kê dữ liệu
Sử dụng aggregation để tính tổng tuổi và tuổi trung bình theo organization.

## 5. Cách chạy
1. Mở MongoDB Compass
2. Kết nối đến cluster MongoDB Atlas
3. Mở MONGOSH
4. Chạy lần lượt các lệnh trong file `mongo_commands.js`

## 6. Kết quả
- Kết nối MongoDB Atlas thành công
- Tạo database và collection thành công
- Thực hiện đầy đủ các truy vấn CRUD
- Tính được tổng tuổi và tuổi trung bình theo từng organization

## 7. Báo cáo chi tiết

Báo cáo đầy đủ của bài thực hành được trình bày trong file:

**LAB01-IE213.docx**

## 8. Một số hình ảnh minh họa
### Kết nối Atlas
![Connect](screenshots/02-compass-connect.png)

### Thêm dữ liệu ban đầu
![InsertMany](screenshots/03-insertMany.png)

### Truy vấn John Doe
![Find John Doe](screenshots/04-find-john-doe.png)

### Kết quả aggregation
![Aggregation](screenshots/09-aggregation.png)

## 9. Đánh giá
### Đã hoàn thành
- Hoàn thành toàn bộ yêu cầu Lab01
- Thực hiện CRUD bằng mongosh
- Có ảnh minh họa kết quả

### Chưa hoàn thành
- Không

## 10. Ghi chú sử dụng AI
- Công cụ sử dụng: ChatGPT, Github Copilot
- Mục đích sử dụng: hỗ trợ giải thích lỗi kết nối MongoDB Compass, gợi ý cấu trúc README, kiểm tra cú pháp lệnh MongoDB.
- AI chỉ hỗ trợ phần trình bày README và hướng dẫn kỹ thuật, toàn bộ thao tác MongoDB được thực hiện thủ công bởi sinh viên.