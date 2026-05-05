# Lab05 - Xây dựng Frontend với ReactJS

## 1. Mục tiêu
- Kết nối Frontend với Backend (MovieDataService) bằng axios.
- Thực hành các hook `useState`, `useEffect` và tổ chức component trong React.
- Sử dụng `react-bootstrap` để hiển thị giao diện (Card, Form, Button, Row, Col).
- Hiển thị trang chi tiết phim và hệ thống review (thêm, sửa, xóa) với quyền thuộc sở hữu.
- Định dạng ngày giờ review bằng `momentjs`.

## 2. Thông tin sinh viên
- Họ và tên: Hồ Thị Minh Ngọc
- MSSV: 23521022
- Lớp: IE213.Q21.1

## 3. Công cụ & thư viện
- Node.js, npm
- create-react-app
- react, react-dom
- react-router-dom (routing)
- react-bootstrap, bootstrap (UI)
- axios (HTTP client)
- moment (định dạng ngày)

## 4. Cấu trúc dự án (chỉ ra các file chính)
```
Lab05/
└── movie-reviews/
    ├── package.json
    ├── README.md    <-- file này
    └── src/
        ├── App.js
        ├── index.js
        ├── services/
        │   └── movies.js
        └── components/
            ├── movies-list.js
            ├── movie.js
            ├── add-review.js
            └── login.js
```
Các file quan trọng (xem mã nguồn):
- [Lab05/movie-reviews/src/services/movies.js](Lab05/movie-reviews/src/services/movies.js)
- [Lab05/movie-reviews/src/components/movies-list.js](Lab05/movie-reviews/src/components/movies-list.js)
- [Lab05/movie-reviews/src/components/movie.js](Lab05/movie-reviews/src/components/movie.js)
- [Lab05/movie-reviews/src/components/add-review.js](Lab05/movie-reviews/src/components/add-review.js)
- [Lab05/movie-reviews/src/components/login.js](Lab05/movie-reviews/src/components/login.js)
- [Lab05/movie-reviews/src/App.js](Lab05/movie-reviews/src/App.js)

## 5. Yêu cầu thực hiện (tóm tắt)
1. Tạo `MovieDataService` trong `src/services/movies.js` với các phương thức:
   - `getAll(page = 0)`
   - `get(id)`
   - `find(query, by = "title", page = 0)`
   - `createReview(data)`
   - `updateReview(data)`
   - `deleteReview(id, userId)`
   - `getRatings()`

2. `MoviesList` component:
   - State: `movies`, `searchTitle`, `searchRating`, `ratings`.
   - `useEffect()` gọi `retrieveMovies()` và `retrieveRatings()` khi render.
   - Form tìm kiếm theo title và rating; hiện kết quả bằng `Card` của react-bootstrap.

3. `Movie` component:
   - Lưu movie detail (id, title, rated, plot, poster, reviews).
   - Gọi `MovieDataService.get(id)` để lấy dữ liệu (dùng `useParams()`/`props.match.params.id`).
   - Hiển thị poster (`<Image fluid/>`), tiêu đề, plot.
   - Hiển thị link `Add Review` khi đã login (`props.user`).

4. Hệ thống Review:
   - Hiển thị danh sách review với `.map()`.
   - Định dạng ngày bằng `moment(review.date).format("Do MMMM YYYY")`.
   - Edit/Delete chỉ hiển thị nếu `props.user.id === review.user_id`.
   - Khi chỉnh sửa, truyền `currentReview` qua `state` của `<Link>` đến trang edit.

## 6. Cài đặt & chạy
1. Mở terminal tại `Lab05/movie-reviews`.
```bash
cd "Lab05/movie-reviews"
npm install
npm start
```
2. Đảm bảo backend (Lab03) đang chạy và API có thể truy cập. Mặc định frontend sẽ gọi API tại `http://localhost:5000/api/v1/movies` — nếu backend của bạn ở cổng khác, chỉnh `baseURL` trong `src/services/movies.js`.

## 7. Kiểm thử nhanh
- Mở `http://localhost:3000`:
  - Trang `Movies` hiển thị danh sách phim.
  - Tìm kiếm theo title và filter theo rating hoạt động.
  - Click phim để vào trang chi tiết, xem poster, plot và reviews.
  - Đăng nhập (giả lập) để hiện `Add Review` và thêm review; edit/delete chỉ hiển thị với review của user.

## 8. Ảnh minh họa (Checklist cho báo cáo)
Lưu ảnh vào `Lab05/movie-reviews/screenshots/` với tên gợi ý:
- `01-react-app-structure.png` — cấu trúc thư mục dự án.
- `02-install-packages.png` — terminal cài `axios`, `react-bootstrap`, `moment`, `react-router-dom`.
- `03-npm-start.png` — terminal chạy `npm start`.
- `04-navbar-routing.png` — navbar và chuyển trang.
- `05-movies-list.png` — trang danh sách phim (cards).
- `06-search-title.png` — tìm kiếm theo title + kết quả.
- `07-search-rating.png` — filter theo rating + kết quả.
- `08-movie-detail.png` — trang chi tiết phim (poster, plot, rated).
- `09-reviews-list.png` — danh sách reviews với ngày đã format.
- `10-login.png` — trang login (giả lập).
- `11-add-review.png` — form thêm review (đã login).
- `12-edit-delete-review.png` — hiển thị nút Edit/Delete chỉ cho review của user hiện tại.

## 9. Lỗi thường gặp & gợi ý khắc phục
- Lỗi CORS khi frontend (3000) gọi backend (5000): bật `cors()` trên backend.
- Backend không chạy hoặc cổng khác: kiểm tra `baseURL` trong `src/services/movies.js`.
- API trả dữ liệu khác cấu trúc: kiểm tra `res.data` và dùng `setMovies(res.data.movies || [])`.

## 10. Kết quả mong đợi
- Frontend gọi được API và hiển thị danh sách phim.
- Trang chi tiết movie kèm review hoạt động.
- Thêm/Chỉnh sửa/Xóa review hoạt động khi backend hỗ trợ và user là chủ sở hữu.
