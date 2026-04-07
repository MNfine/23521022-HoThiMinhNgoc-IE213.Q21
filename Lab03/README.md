# Lab03 - Movie Reviews CRUD + Review Management

## 1. Mục tiêu
- Mở rộng backend từ Lab02 theo mô hình Route - Controller - DAO.
- Xây dựng API CRUD cho review: tạo, cập nhật, xóa.
- Bổ sung API lấy chi tiết movie kèm danh sách reviews bằng MongoDB aggregation `$lookup`.
- Bổ sung API lấy danh sách ratings distinct từ collection `movies`.
- Hoàn thiện kiểm thử API bằng Postman và đối chiếu dữ liệu trên MongoDB Compass.

## 2. Thông tin sinh viên
- Họ tên: Hồ Thị Minh Ngọc
- MSSV: 23521022
- Lớp: IE213.Q21.1
- Môn học: IE213.Q21 - Kỹ thuật phát triển hệ thống Web

## 3. Công cụ và môi trường sử dụng
- Node.js: Runtime chạy backend.
- Express.js: Framework xây dựng REST API.
- MongoDB Atlas: Cơ sở dữ liệu cloud.
- MongoDB Node.js Driver: Kết nối và thao tác dữ liệu MongoDB.
- Dotenv: Quản lý biến môi trường.
- CORS: Cho phép gọi API từ client.
- Postman: Kiểm thử endpoint.
- MongoDB Compass: Kiểm tra dữ liệu review trực tiếp trên database.
- Hệ điều hành: Windows 11.

## 4. Nội dung thực hiện

Cấu trúc triển khai Lab03:

```text
Lab03/
├── LAB03-IE213.docx
├── README.md
├── TESTING.md
├── screenshots/
└── movie-reviews/
    └── backend/
        ├── package.json
        ├── .env
        ├── index.js
        ├── server.js
        ├── api/
        │   ├── movies.route.js
        │   ├── movies.controller.js
        │   └── reviews.controller.js
        └── dao/
            ├── moviesDAO.js
            └── reviewsDAO.js
```

### 4.1 Nâng cấp từ Lab02
- Giữ nguyên API danh sách phim từ Lab02.
- Bổ sung module xử lý reviews gồm `reviews.controller.js` và `reviewsDAO.js`.
- Bổ sung route mới trong `movies.route.js`.

### 4.2 Cấu hình môi trường
- File `.env` gồm:
  - `PORT=3000`
  - `MOVIEREVIEWS_DB_URI=<mongodb_atlas_uri>`
  - `MOVIEREVIEWS_NS=sample_mflix`

### 4.3 Bổ sung API review CRUD
- `POST /api/v1/movies/review`: tạo review mới.
- `PUT /api/v1/movies/review`: cập nhật nội dung review.
- `DELETE /api/v1/movies/review`: xóa review.

### 4.4 Bổ sung API movie detail + ratings
- `GET /api/v1/movies/id/:id`: lấy movie theo id, có thêm trường `reviews`.
- `GET /api/v1/movies/ratings`: lấy tập giá trị `rated` distinct.

### 4.5 Truy vấn dữ liệu với DAO
- `moviesDAO.getMovieById(id)` dùng aggregation `$lookup` để join `movies` với `reviews`.
- `moviesDAO.getRatings()` dùng `distinct("rated")`.
- `reviewsDAO` thao tác `insertOne`, `updateOne`, `deleteOne` cho collection `reviews`.

### 4.6 Quy ước dữ liệu review
- `movie_id` và `review_id` được chuyển sang `ObjectId` khi thao tác DB.
- `user_id` dùng để kiểm soát quyền cập nhật/xóa review.

## 5. Cách chạy
1. Mở terminal tại thư mục `Lab03/movie-reviews/backend`.
2. Cài dependencies:
   - `npm install`
3. Chạy server:
   - `node index.js`
4. Test API bằng Postman tại:
   - `http://localhost:3000/api/v1/movies`

Lưu ý: không có endpoint `GET /api/v1/movies/review`.

## 6. Kết quả
- Kết nối MongoDB Atlas thành công.
- API review CRUD hoạt động đúng.
- Response POST trả về `status` và `review_id`.
- API `GET /api/v1/movies/id/:id` trả về movie kèm mảng `reviews`.
- API `GET /api/v1/movies/ratings` trả về danh sách ratings distinct.
- Dữ liệu review xuất hiện và cập nhật đúng trên MongoDB Compass.

## 7. Báo cáo chi tiết

Báo cáo đầy đủ của bài thực hành được trình bày trong file:

**LAB03-IE213.docx** (Tải về để xem)

## 8. Một số hình ảnh minh họa
- `screenshots/01-server-test.png`
- `screenshots/02-movies-ratings.png`
- `screenshots/03-post-review.png`
- `screenshots/04-reviews-MongoDB-Compass.png`
- `screenshots/05-put-reviews.png`
- `screenshots/06-reviews-update-MongoDB-Compass.png`
- `screenshots/07-delete-review.png`
- `screenshots/08-reviews-update-MongoDB-Compass (1).png`

## 9. Đánh giá
### Đã hoàn thành
- Hoàn thành mở rộng backend Lab03 theo yêu cầu.
- Hoàn thành toàn bộ endpoint review CRUD.
- Hoàn thành API movie detail + ratings.
- Hoàn thành kiểm thử và lưu ảnh minh chứng.

### Chưa hoàn thành
- Không.

## 10. Ghi chú sử dụng AI
- Công cụ sử dụng: ChatGPT, GitHub Copilot.
- Mục đích sử dụng: hỗ trợ rà soát lỗi, chuẩn hóa cấu trúc tài liệu và mô tả kỹ thuật.
- AI chỉ hỗ trợ tham khảo kỹ thuật và trình bày README; việc cài đặt, viết code, chạy test được thực hiện thủ công bởi sinh viên.
