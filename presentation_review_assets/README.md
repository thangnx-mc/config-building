# GÓI TƯ LIỆU REVIEW TRỰC QUAN BẢN THUYẾT TRÌNH RACEHORSE (20 SLIDES)
## (RACEHORSE PRESENTATION VISUAL REVIEW ASSET PACKAGE)

> **Repository:** `thangnx-mc/config-building` (Branch `main`)  
> **Official Commit:** `58dd1112f84482b4e9d02ea43aed4c37864f5ad9`  
> **Official Report:** [RACEHORSE_OFFICIAL_PRESENTATION_REPORT.md](../RACEHORSE_OFFICIAL_PRESENTATION_REPORT.md)  
> **Quyền truy cập kho:** `PRIVATE` (Yêu cầu tài khoản GitHub được phân quyền)

---

## 1. Mục Đích Của Gói Tư Liệu (Purpose)

Gói tư liệu này được tổ chức và chuẩn hóa nhằm mục đích:
1. **Lưu trữ chuẩn mực:** Đóng gói toàn bộ tài sản hình ảnh trực quan phục vụ công tác nghiệm thu, review đối chiếu bài thuyết trình 20 slide của dự án Racehorse RTMS.
2. **Review nhanh trong các cuộc trò chuyện mới:** Cho phép các mô hình AI (như ChatGPT, Gemini, Claude) hoặc thành viên hội đồng có thể rà soát toàn diện hình ảnh từng slide mà không bắt buộc người dùng phải upload lại hàng chục file ảnh thủ công mỗi phiên.
3. **Minh bạch bằng chứng:** Đối chiếu 1:1 trực tiếp giữa slide mẫu của giảng viên (`4488_..._Slide.pdf`) và slide chính thức được sinh từ mã nguồn Racehorse thực tế.

---

## 2. Cấu Trúc & Vai Trò Các Thư Mục (Directory Structure)

```text
presentation_review_assets/
├── README.md                               # Tài liệu hướng dẫn sử dụng và danh mục URL
├── ASSET_MANIFEST.md                       # Bảng kê khai kích thước, mã SHA-256 từng file
├── official_deck/                          # Toàn cảnh bản trình chiếu chính thức Racehorse
│   └── official_20_slides_contact_sheet.png # Contact sheet tổng hợp 20 slide (1725 x 1335)
├── sample/                                 # Tài sản slide mẫu của giảng viên
│   ├── sample_contact_sheet.png            # Contact sheet tổng hợp 20 trang mẫu (1725 x 1335)
│   └── sample_pages/                       # 20 trang mẫu đơn lẻ độ phân giải cao (1500 x 844)
│       ├── page_01.png đến page_20.png
├── comparisons/                            # Ảnh đối chiếu song song (Side-by-side)
│   ├── slide_01_vs_sample_01.png đến slide_20_vs_sample_20.png
└── review/                                 # Báo cáo đánh giá và nhật ký kiểm toán trực quan
    └── VISUAL_REVIEW_LOG.md
```

- **`official_deck/`**: Lưu trữ ảnh tổng thể 20 slide chính thức của Racehorse dưới dạng contact sheet lưới 4x5 để quan sát toàn diện nhịp điệu bài báo cáo trong 1 cái nhìn duy nhất.
- **`sample/`**: Lưu trữ toàn bộ 20 trang mẫu của giảng viên đã được render chuẩn hóa $1500 \times 844$ pixel và ảnh contact sheet mẫu tương ứng.
- **`comparisons/`**: Lưu trữ 20 ảnh đối chiếu side-by-side chuẩn hóa $3090 \times 974$ pixel (Mẫu bên trái, Racehorse bên phải) kèm chỉ số sai lệch pixel RMSE trên tiêu đề ảnh.
- **`review/`**: Chứa `VISUAL_REVIEW_LOG.md` phân định rõ các tiêu chí đã kiểm định tự động, kiểm định người dùng và các hạn chế kỹ thuật.

---

## 3. Cách Nhận Diện & Phân Biệt Ảnh Mẫu vs Ảnh Đầu Ra

| Tiêu chí | Slide Mẫu Giảng Viên (Sample) | Slide Chính Thức Racehorse (Official) |
|:---|:---|:---|
| **Đề tài** | Freedriver (Nền tảng kết nối tài xế xe ô tô) | Racehorse RTMS / Stride (Hệ thống huấn luyện ngựa đua) |
| **Nhận diện màu sắc** | Viền xám trung tính, biểu đồ thị trường ô tô B2 | Sóng tím thương hiệu FPT `#5141CF`, tiêu đề Ocean Blue `#0265B2` |
| **Vị trí trong ảnh so sánh** | **Nửa bên trái (LEFT)**, viền xám mỏng | **Nửa bên phải (RIGHT)**, viền tím nổi bật |
| **Nguồn dữ liệu** | PDF gốc `4488_SP25SE136_GSP94_..._Slide.pdf` | Mã nguồn thực tế `C:\DEV\RACE HORSE\HORSE-PROJECT` |

---

## 4. Hướng Dẫn Tiếp Tục Review Trong Cuộc Trò Chuyện Mới Với ChatGPT

> [!IMPORTANT]
> **CẢNH BÁO QUYỀN TRUY CẬP (ACCESS BOUNDARY):**  
> Repository `thangnx-mc/config-building` hiện ở trạng thái **PRIVATE**.  
> Các liên kết web trực tiếp (`github.com/...` hoặc `raw.githubusercontent.com/...`) sẽ trả về **`HTTP 404 Not Found`** đối với bất kỳ kết nối nào không có phiên đăng nhập GitHub của tài khoản sở hữu (bao gồm tính năng duyệt web tự động của ChatGPT).

### Cách thức review khuyến nghị:
1. **Đối với công cụ có quyền truy cập Git cục bộ / IDE Agent (Antigravity, Cursor, Claude Code):**  
   Mở trực tiếp các tập tin trong thư mục `presentation_review_assets/` hoặc clone repository với SSH/Token.
2. **Đối với ChatGPT Web (chat.openai.com):**  
   - Người dùng tải trực tiếp ảnh contact sheet `official_20_slides_contact_sheet.png` hoặc các ảnh so sánh cụ thể trong thư mục `comparisons/` và kéo-thả vào cửa sổ chat của ChatGPT.
   - Kèm theo câu lệnh mẫu:  
     > *"Hãy review trực quan hình ảnh so sánh giữa slide mẫu giảng viên (bên trái) và slide dự án Racehorse (bên phải). Đánh giá tính cân đối, khoảng trắng, độ dễ đọc và mức độ kế thừa phong cách."*

---

## 5. Danh Mục URL Trực Tiếp Trên GitHub (Dành Cho Tài Khoản Được Phân Quyền)

### 5.1. Báo cáo & Tài liệu hướng dẫn
- **Báo cáo nghiệm thu chính thức:** [RACEHORSE_OFFICIAL_PRESENTATION_REPORT.md](https://github.com/thangnx-mc/config-building/blob/main/RACEHORSE_OFFICIAL_PRESENTATION_REPORT.md)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/RACEHORSE_OFFICIAL_PRESENTATION_REPORT.md`
- **Bảng kê khai tài sản:** [ASSET_MANIFEST.md](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/ASSET_MANIFEST.md)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/ASSET_MANIFEST.md`
- **Nhật ký review trực quan:** [VISUAL_REVIEW_LOG.md](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/review/VISUAL_REVIEW_LOG.md)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/review/VISUAL_REVIEW_LOG.md`

### 5.2. Contact Sheets
- **Official Deck Contact Sheet (20 Slides):** [official_20_slides_contact_sheet.png](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/official_deck/official_20_slides_contact_sheet.png)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/official_deck/official_20_slides_contact_sheet.png`
- **Sample Contact Sheet (20 Trang Mẫu):** [sample_contact_sheet.png](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/sample/sample_contact_sheet.png)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/sample/sample_contact_sheet.png`

### 5.3. Các Trang Mẫu Trọng Điểm
- **Sample Page 01 (Cover):** [page_01.png](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/sample/sample_pages/page_01.png)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/sample/sample_pages/page_01.png`
- **Sample Page 10 (PCDACO Actors Grid):** [page_10.png](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/sample/sample_pages/page_10.png)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/sample/sample_pages/page_10.png`
- **Sample Page 15 (Flow 5 Multistation Flowchart):** [page_15.png](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/sample/sample_pages/page_15.png)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/sample/sample_pages/page_15.png`

### 5.4. Các Ảnh So Sánh Trọng Điểm (Side-by-Side Comparisons)
- **So sánh Slide 01 vs Trang Mẫu 01:** [slide_01_vs_sample_01.png](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/comparisons/slide_01_vs_sample_01.png)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/comparisons/slide_01_vs_sample_01.png`
- **So sánh Slide 10 vs Trang Mẫu 10:** [slide_10_vs_sample_10.png](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/comparisons/slide_10_vs_sample_10.png)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/comparisons/slide_10_vs_sample_10.png`
- **So sánh Slide 15 vs Trang Mẫu 15:** [slide_15_vs_sample_15.png](https://github.com/thangnx-mc/config-building/blob/main/presentation_review_assets/comparisons/slide_15_vs_sample_15.png)  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/presentation_review_assets/comparisons/slide_15_vs_sample_15.png`
