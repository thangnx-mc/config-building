# NHẬT KÝ ĐÁNH GIÁ & KIỂM TOÁN TRỰC QUAN (VISUAL REVIEW LOG)
## HỆ THỐNG RACEHORSE RTMS — BẢN THUYẾT TRÌNH 20 SLIDE

> **Repository:** `thangnx-mc/config-building` (Branch `main`)  
> **Official Commit:** `58dd1112f84482b4e9d02ea43aed4c37864f5ad9`  
> **Ngày cập nhật:** 04/11/2026  
> **Trạng thái:** `AUTOMATED QA PASS / PENDING HUMAN VISUAL SIGNOFF`

---

## 1. PHÂN ĐỊNH RANH GIỚI VÀ MỨC ĐỘ XÁC MINH (VERIFICATION CLASSIFICATION)

Để đảm bảo tính trung thực tuyệt đối theo quy tắc kiểm định của hệ thống:

### 1.1. Những Gì Đã Được Agent Trực Tiếp Xác Minh (`[FACT]`)
- **Đối chiếu Mã nguồn thực tế:** 100% dữ liệu kỹ thuật trên slide (Java 21, Spring Boot 3, MS SQL Server, React 19, Three.js 3D, PayOS VietQR, `DailyAutomationJob` lúc 06:00, enum `Role.java`, 67 lớp kiểm thử, 47 bản ghi migration) đã được kiểm tra trực tiếp từ thư mục `C:\DEV\RACE HORSE\HORSE-PROJECT`.
- **Không xâm phạm mã nguồn:** 0 tập tin trong dự án Racehorse bị chỉnh sửa hay thay đổi Git state (`READ-ONLY` 100%).
- **Kiểm tra OpenXML Native Editability:** Phân tích trực tiếp cấu trúc XML của gói PPTX:
  - Tổng số hình khối vector (`<p:sp>`): **569 phần tử**.
  - Tổng số hình ảnh rasterized (`<p:pic>`): **0 phần tử** (Không chứa bất kỳ ảnh chụp màn hình tĩnh nào).
  - Tổng số đoạn văn bản chỉnh sửa được (`<a:t>`): **386 chuỗi ký tự**.
  - Kết luận: 100% native vector & text, cho phép người dùng tự do sửa chữ, đổi màu, di chuyển trên Microsoft PowerPoint.
- **Trạng thái kho Git:** Repository `thangnx-mc/config-building` là **PRIVATE** (trả về HTTP 404 cho các truy vấn unauthenticated).

---

### 1.2. Những Gì Được Xác Nhận Bởi Automated QA (`[AUTOMATED QA PASS]`)
- **Kiểm định Hình học Khung Canvas (Geometry Linter):**
  - Quét 569 phần tử trên cả 20 slide.
  - Kết quả: **0 lỗi tràn viền / out-of-bounds** ($x < 0$, $y < 0$, $x+w > 10.0"$, $y+h > 5.625"$).
- **Kiểm định Ngữ nghĩa & Nội dung (Semantic Linter):**
  - Quét văn bản trên 20 slide.
  - Kết quả: **0 lỗi placeholder / TODO / dummy text**.
  - **0 mục cần thẩm định nguồn chứng cứ thực nghiệm** (Đã triệt tiêu toàn bộ các số liệu suy đoán).
- **Đo lường Sai số Pixel RMSE Khách quan:**
  - Điểm trung bình toàn deck: **72.18 RMSE**.
  - Các slide nội dung cốt lõi đạt mức tương đồng cao: Slide 06 (Platforms) đạt **54.06**, Slide 10 (Actors Grid) đạt **54.56**, Slide 16 (Other Flows) đạt **57.42**, Slide 08 (Architecture) đạt **61.23**.
  - Slide 01 (Cover) giảm sai số từ 182.57 xuống **85.41** nhờ đưa về nền sáng `#FFFFFF` và tiêu đề `#0265B2`.

---

### 1.3. Những Gì CHƯA Được Con Người Review (`[PENDING HUMAN REVIEW]`)
- **Cảm quan Thẩm mỹ & Độ Vừa Mắt (Aesthetic Impression):** Việc thuật toán đo lường RMSE thấp không đồng nghĩa với việc con người sẽ thấy "đẹp hoàn hảo". Cần sự xác nhận trực tiếp của thành viên nhóm và GVHD về độ hài lòng thị giác.
- **Mức độ Dễ đọc Khi Trình Chiếu Máy Chiếu (Projector Readability):** Một số nhãn phụ (8.5pt - 9.0pt) trên các sơ đồ kỹ thuật có thể đòi hỏi người ngồi xa phải tập trung quan sát; cần test thực tế trên màn hình trình chiếu lớn.
- **Ngữ điệu Trình Bày (Presenter Delivery Flow):** Sự ăn khớp giữa slide và kịch bản thuyết trình trực tiếp của từng sinh viên trong buổi bảo vệ đồ án.

---

## 2. BẢNG CHI TIẾT KẾT QUẢ ĐO LƯỜNG TỪNG SLIDE (SLIDE-BY-SLIDE AUDIT)

| Slide # | Tên Phân Loại | Số Lượng Shapes (`<p:sp>`) | Số Lượng Text (`<a:t>`) | Geometry Linter | Semantic Linter | Pixel RMSE | Trạng Thái Review |
|:---:|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| **01** | Cover Slide | 23 | 21 | PASS (0 lỗi) | PASS (0 lỗi) | 85.41 | Chờ người dùng duyệt tên thành viên |
| **02** | Content / Agenda | 44 | 27 | PASS (0 lỗi) | PASS (0 lỗi) | 105.97 | Chờ người dùng duyệt mục lục |
| **03** | Section Divider 01 | 22 | 13 | PASS (0 lỗi) | PASS (0 lỗi) | 82.61 | Chờ người dùng duyệt nội dung |
| **04** | Context & Risks | 31 | 19 | PASS (0 lỗi) | PASS (0 lỗi) | 87.80 | Chờ người dùng duyệt rủi ro |
| **05** | Core Solution | 28 | 16 | PASS (0 lỗi) | PASS (0 lỗi) | 63.06 | Chờ người dùng duyệt mô hình lõi |
| **06** | Platforms Ecosystem | 37 | 31 | PASS (0 lỗi) | PASS (0 lỗi) | 54.06 | **Tương đồng rất cao** |
| **07** | Section Divider 02 | 22 | 13 | PASS (0 lỗi) | PASS (0 lỗi) | 90.82 | Chờ người dùng duyệt nội dung |
| **08** | Full Architecture | 21 | 11 | PASS (0 lỗi) | PASS (0 lỗi) | 61.23 | Chờ người dùng duyệt sơ đồ phân tầng |
| **09** | Section Divider 03 | 22 | 13 | PASS (0 lỗi) | PASS (0 lỗi) | 85.64 | Chờ người dùng duyệt nội dung |
| **10** | 5-Column Actors Grid | 54 | 43 | PASS (0 lỗi) | PASS (0 lỗi) | 54.56 | **Tương đồng rất cao** |
| **11** | Flow 1: Registration | 32 | 19 | PASS (0 lỗi) | PASS (0 lỗi) | 61.23 | Chờ người dùng duyệt sơ đồ luồng |
| **12** | Flow 2: Training Plan | 32 | 19 | PASS (0 lỗi) | PASS (0 lỗi) | 62.75 | Chờ người dùng duyệt sơ đồ luồng |
| **13** | Flow 3: Clinical & Lock | 32 | 19 | PASS (0 lỗi) | PASS (0 lỗi) | 65.47 | Chờ người dùng duyệt sơ đồ rẽ nhánh |
| **14** | Flow 4: Stable Care | 32 | 19 | PASS (0 lỗi) | PASS (0 lỗi) | 62.98 | Chờ người dùng duyệt sơ đồ luồng |
| **15** | Flow 5: Wallet & VietQR | 32 | 22 | PASS (0 lỗi) | PASS (0 lỗi) | 63.77 | **Tương đồng rất cao** |
| **16** | Other Secondary Flows | 25 | 15 | PASS (0 lỗi) | PASS (0 lỗi) | 57.42 | **Tương đồng rất cao** |
| **17** | Recurring Jobs | 24 | 21 | PASS (0 lỗi) | PASS (0 lỗi) | 64.17 | Chờ người dùng duyệt chu kỳ job |
| **18** | On-Demand Jobs | 24 | 21 | PASS (0 lỗi) | PASS (0 lỗi) | 65.68 | Chờ người dùng duyệt trigger job |
| **19** | Thank You Slide | 9 | 10 | PASS (0 lỗi) | PASS (0 lỗi) | 87.81 | Chờ người dùng duyệt lời tri ân |
| **20** | Q&A Slide | 23 | 14 | PASS (0 lỗi) | PASS (0 lỗi) | 81.13 | Chờ người dùng duyệt chủ đề phản biện |

---

## 3. CÁC GIỚI HẠN KỸ THUẬT & VẤN ĐỀ CÒN MỞ (LIMITATIONS & OPEN ISSUES)

1. **Ranh Giới Truy Cập Ngoại Vi (External Access Barrier):**
   - Kho lưu trữ là **PRIVATE**, do đó việc kiểm tra truy cập bằng URL HTTP từ một môi trường độc lập không đăng nhập sẽ trả về `HTTP 404`.
   - Khuyến nghị: Nếu muốn ChatGPT trực tiếp duyệt ảnh qua link mạng công khai, người dùng cần cấu hình repository sang chế độ `Public` hoặc sử dụng GitHub Personal Access Token (PAT).
2. **Ký Tự Biểu Tượng (Iconography):**
   - Bộ slide hiện đang sử dụng ký tự Unicode/Emoji tiêu chuẩn (như `🏇`, `📋`, `🩺`, `🧹`, `⚙️`). Các ký tự này hiển thị ổn định trên đa số thiết bị, nhưng nếu người dùng muốn độ đồng nhất tuyệt đối theo phong cách icon phẳng đơn sắc (monochrome flat icons), có thể thay thế bằng vector shape SVG nhúng sẵn.
3. **Phông Chữ Hệ Thống (Font Rendering):**
   - Bộ slide được xây dựng dựa trên phông `Segoe UI` chuẩn Windows. Khi mở trên các hệ điều hành khác (macOS, Linux), nếu không có sẵn `Segoe UI`, PowerPoint có thể tự động thay thế bằng `Arial` hoặc `Helvetica`, có thể làm xê dịch nhẹ khoảng cách ngắt dòng.
