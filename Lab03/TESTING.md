# 📝 Hướng dẫn Testing Lab03

## ⚙️ Setup Trước

### 1. Cài dependencies
```bash
npm install
```

### 2. Cập nhật .env
Mở file `.env` và thay thế:
```
MOVIEREVIEWS_DB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
MOVIEREVIEWS_NS=sample_mflix
```

### 3. Chạy server
```bash
npm start
```

Nếu thành công sẽ thấy:
```
Connected to MongoDB Atlas
Server is running on port: 3000
```

---

## 🧪 Testing với Postman/Insomnia

### 1️⃣ GET /api/v1/movies (Test xem server có chạy không)

```
GET http://localhost:3000/api/v1/movies
```

✅ **Expected**: Danh sách movies phân trang

---

### 2️⃣ POST /api/v1/movies/review (Tạo review mới)

```
POST http://localhost:3000/api/v1/movies/review
Content-Type: application/json

{
  "movie_id": "573a1390f29313caabcd5247",
  "review": "Hay quá! Tuyệt vời lắm!",
  "user_id": "23521022",
  "name": "Ngoc"
}
```

✅ **Expected**: 
```json
{
  "status": "success"
}
```

⚠️ **Lưu ý**: 
- `movie_id` phải lấy từ database (query `/api/v1/movies` để được movie ID)
- Sao chép 1 ID nào đó từ kết quả

---

### 3️⃣ GET /api/v1/movies/ratings (Lấy danh sách ratings)

```
GET http://localhost:3000/api/v1/movies/ratings
```

✅ **Expected**:
```json
[
  "PG",
  "R",
  "G",
  "PG-13",
  "TV-14",
  ...
]
```

---

### 4️⃣ GET /api/v1/movies/id/:id (Lấy movie + reviews)

```
GET http://localhost:3000/api/v1/movies/id/573a1390f29313caabcd5247
```

✅ **Expected**: 
```json
{
  "_id": "573a1390f29313caabcd5247",
  "plot": "...",
  "genres": [...],
  "rated": "PG",
  "reviews": [
    {
      "_id": "xxx",
      "name": "Ngoc",
      "user_id": "23521022",
      "review": "Hay quá! Tuyệt vời lắm!",
      "date": "2024-..."
    }
  ]
}
```

⚠️ **Quan trọng**: Kiểm tra `reviews` array có chứa review vừa tạo không

---

### 5️⃣ PUT /api/v1/movies/review (Cập nhật review)

Từ bước 2 ở trên, lấy `review_id` từ response (hoặc từ MongoDB)

```
PUT http://localhost:3000/api/v1/movies/review
Content-Type: application/json

{
  "review_id": "663a1390f29313caabcd9999",
  "review": "Sửa lại: Không tuyệt vời như tưởng tượng!",
  "user_id": "23521022"
}
```

✅ **Expected**:
```json
{
  "status": "success"
}
```

---

### 6️⃣ DELETE /api/v1/movies/review (Xóa review)

```
DELETE http://localhost:3000/api/v1/movies/review
Content-Type: application/json

{
  "review_id": "663a1390f29313caabcd9999",
  "user_id": "23521022"
}
```

✅ **Expected**:
```json
{
  "status": "success"
}
```

Kiểm tra lại bằng GET `/api/v1/movies/id/:id` → review đã biến mất

---

## 📸 Ảnh cần chụp (Postman/Insomnia)

Chụp lần lượt:

1. **01-post-review.png** - POST /review (thành công)
2. **02-get-movie-by-id.png** - GET /id/:id (có reviews)
3. **03-put-review.png** - PUT /review (thành công)
4. **04-get-ratings.png** - GET /ratings (danh sách ratings)
5. **05-delete-review.png** - DELETE /review (thành công)

Lưu vào folder `/Lab03/screenshots/`

---

## ✅ Checklist Bao Gồm

- [x] Cấu trúc folder đầy đủ
- [x] ReviewsDAO.js (addReview, updateReview, deleteReview)
- [x] ReviewsController.js (POST, PUT, DELETE)
- [x] MoviesController.js (thêm apiGetMovieById, apiGetRatings)
- [x] MoviesDAO.js (thêm getMovieById, getRatings)
- [x] movies.route.js (thêm 3 routes)
- [x] index.js (inject ReviewsDAO)
- [x] package.json
- [x] server.js
- [x] .env

---

## 🐛 Troubleshooting

| Lỗi | Nguyên nhân | Giải pháp |
|-----|-----------|---------|
| Cannot connect MongoDB | `.env` chưa đúng | Kiểm tra MongoDB URI |
| Reviews not found | ReviewsDAO chưa inject | Kiểm tra index.js |
| 404 not found | Route sai | Kiểm tra movies.route.js |
| ObjectId error | Import không đúng | Kiểm tra import mongodb |

