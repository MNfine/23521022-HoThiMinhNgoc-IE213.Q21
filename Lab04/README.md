# Lab04 - Frontend Movie Reviews với ReactJS

## 1. Mục tiêu
- Thiết lập frontend cho ứng dụng Movie Reviews bằng ReactJS.
- Kết nối frontend với backend đã triển khai ở Lab03.
- Thực hành chia component, thiết lập định tuyến, dùng Bootstrap và gọi API bằng Axios.
- Xây dựng các trang: Navbar, Movies List, Movie Detail, Add Review, Login (giả lập).

## 2. Thông tin sinh viên
- Họ và tên: Hồ Thị Minh Ngọc
- MSSV: 23521022
- Lớp: IE213.Q21.1
- Môn học: IE213.Q21 - Kỹ thuật phát triển hệ thống Web

## 3. Công cụ & môi trường
- Node.js
- create-react-app (React)
- react-router-dom (routing)
- react-bootstrap, bootstrap (UI)
- axios (HTTP client)
- Trình duyệt: Chrome / Edge
- Hệ điều hành: Windows

## 4. Cấu trúc dự án
```
Lab04/
└── movie-reviews/
	├── frontend/
	│   ├── package.json
	│   ├── README.md    <-- file này
	│   └── src/
	│       ├── App.js
	│       ├── index.js
	│       └── components/
	│           ├── movies-list.js
	│           ├── movie.js
	│           ├── add-review.js
	│           └── login.js
	└── screenshots/
```

## 5. Cài đặt & chạy
1. Mở terminal tại thư mục `Lab04/movie-reviews/frontend`.
2. Cài đặt phụ thuộc:
```bash
npm install
```
3. Chạy ứng dụng frontend:
```bash
npm start
```
4. Đảm bảo backend (Lab03) đang chạy và có thể truy cập (khuyến nghị cổng 5000).
5. Mở trình duyệt tại: `http://localhost:3000`

> Lưu ý: Nếu backend chạy ở cổng khác, cập nhật URL API trong frontend tương ứng.

## 6. Các tính năng đã triển khai (Lab04)
- Tạo project bằng `create-react-app`.
- Thiết lập React Router cho các route: `/`, `/movies`, `/movies/:id`, `/movies/:id/review`, `/login`.
- Thanh điều hướng (Navbar) sử dụng React-Bootstrap.
- Tạo các component: `movies-list`, `movie`, `add-review`, `login`.
- `movies-list` sử dụng `axios` để gọi API backend (`/api/v1/movies`) và hiển thị các thẻ phim.
- Login là giả lập: lưu `user` vào state của `App` để minh họa chức năng.

## 7. Các lỗi thường gặp & cách khắc phục
- Lỗi CORS: Nếu trình duyệt chặn yêu cầu từ `localhost:3000` sang backend, cài và bật CORS trên backend:
```bash
# trong thư mục backend
npm i cors
```
Rồi thêm vào `server.js` (sau khi tạo `app`):
```js
import cors from 'cors';
app.use(cors());
```
- Lỗi port trùng: Đảm bảo frontend chạy trên `3000`, backend chạy trên `5000` (hoặc điều chỉnh URL API trong frontend).
- React Router v6: Sử dụng `Routes` và `Route` với `element={<Component />}`; dùng `useParams()` để lấy `:id`.
- Dữ liệu API không phải mảng: kiểm tra `res.data` (console.log) và dùng `setMovies(res.data.movies || [])` nếu API trả về object chứa trường `movies`.
- Lỗi DOM nesting `<a> trong <a>`: dùng `<Nav.Link as={Link} to="...">` hoặc `<Nav.Link as="button">` để tránh lồng thẻ `<a>`.

## 8. Ảnh minh họa 
- `01-create-react-app.png`
- `02-add-packages.png`
- `03-npm-start.png`
- `04-navbar.png`
- `05-frontend-backend.png`
- `06-routing.png`
- `07-movies-list.png`
- `08-movie-detail.png`
- `09-add-review.png`
- `10-login.png`
- `11-add-review-successful.png`

## 9. Kiểm thử tích hợp nhanh
1. Chạy backend (Lab03) trong một terminal:
```bash
cd Lab03/movie-reviews/backend
npm install
# nếu có script dev (nodemon) dùng:
npm run dev
# hoặc dùng:
npm start
```
2. Chạy frontend trong terminal khác:
```bash
cd Lab04/movie-reviews/frontend
npm start
```
3. Mở `http://localhost:3000` và kiểm tra:
- Navbar hiển thị đúng.
- Trang `Movies` lấy và hiển thị danh sách phim.
- Click vào một phim để xem trang chi tiết.
- Trang thêm review hiển thị form (nếu backend hỗ trợ, gửi POST sẽ lưu review).

## 10. Ghi chú cho chấm bài
- Login hiện chỉ là giả lập lưu trong state của React — chưa có xác thực thực sự.
- Đảm bảo các endpoint backend tồn tại theo tên và đường dẫn mà frontend dùng (`/api/v1/movies`, `/api/v1/movies/id/:id`, `/api/v1/movies/review`).
