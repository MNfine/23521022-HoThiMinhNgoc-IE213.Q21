// 5.1 Tạo Database
use 23521022-IE213

// 5.2 Thêm dữ liệu vào Collection
db.employees.insertMany([
  { id: 1, name: { first: "John", last: "Doe" }, age: 48 },
  { id: 2, name: { first: "Jane", last: "Doe" }, age: 16 },
  { id: 3, name: { first: "Alice", last: "A" }, age: 32 },
  { id: 4, name: { first: "Bob", last: "B" }, age: 64 }
])

// 5.3 Tạo Unique Index cho trường id
db.employees.createIndex({ id: 1 }, { unique: true })

// 5.4 Tìm nhân viên có firstname là John và lastname là Doe
db.employees.find({
  "name.first": "John",
  "name.last": "Doe"
})

// 5.5 Tìm những nhân viên có tuổi trên 30 và dưới 60
db.employees.find({
  age: { $gt: 30, $lt: 60 }
})

// 5.6 Thêm document có middle name
db.employees.insertMany([
  { id: 5, name: { first: "Rooney", middle: "K", last: "A" }, age: 30 },
  { id: 6, name: { first: "Ronaldo", middle: "T", last: "B" }, age: 60 }
])

// 5.7 Tìm tất cả document có middle name
db.employees.find({
  "name.middle": { $exists: true }
})

// 5.8 Xóa trường middle name
db.employees.updateMany(
  { "name.middle": { $exists: true } },
  { $unset: { "name.middle": "" } }
)

// 5.9 Thêm trường organization
db.employees.updateMany(
  {},
  { $set: { organization: "UIT" } }
)

// 5.10 Cập nhật organization của nhân viên id 5 và 6
db.employees.updateMany(
  { id: { $in: [5, 6] } },
  { $set: { organization: "USSH" } }
)

// 5.11 Tính tổng tuổi và tuổi trung bình theo organization
db.employees.aggregate([
  {
    $match: {
      organization: { $in: ["UIT", "USSH"] }
    }
  },
  {
    $group: {
      _id: "$organization",
      totalAge: { $sum: "$age" },
      avgAge: { $avg: "$age" }
    }
  }
])