# BÁO CÁO THIẾT KẾ LẠI SLIDE 01 (SLIDE 01 REDESIGN REPORT)
## DỰ ÁN RACEHORSE RTMS — BÁM SÁT MẪU GIẢNG VIÊN & LOGO FPT CHUẨN

> **Repository:** `thangnx-mc/config-building` (Branch `main`)  
> **Quy trình áp dụng:** `Slide-by-Slide Approval Workflow` (Chỉ thiết kế duy nhất Slide 01, không làm Slide 02)  
> **Tài liệu tham chiếu gốc:** `4488_SP25SE136_GSP94_SP25SE136_GSP94_MinhTTH5_Slide.pdf` (Trang 01)  
> **Ngày thực hiện:** 04/11/2026  
> **Trạng thái:** `SUCCESS / READY FOR USER & CHATGPT REVIEW`

---

## 1. PHÂN TÍCH THỊ GIÁC TRANG 01 MẪU GIẢNG VIÊN (SAMPLE PAGE 01 ANALYSIS)

Bằng việc phân tích trực tiếp cấu trúc luồng lệnh PDF (Content Stream) và hình ảnh render $3000 \times 1688$ của Trang 01 mẫu giảng viên, các quy chuẩn thị giác cốt lõi đã được xác lập:

1. **Logo Đại học FPT chuẩn mực (Authentic FPT University Logo):**
   - Không vẽ lại, không xấp xỉ hay thay thế. Logo chính thống của Đại học FPT được trích xuất trực tiếp từ XObject hình ảnh `X6` trong PDF mẫu (tập tin PNG trong suốt RGBA kích thước $400 \times 156$ pixel, gồm 3 màu chuẩn: Cam `#F06F22`, Xanh dương `#0065B2`, Xanh lá `#0BAF4A`).
   - Tỷ lệ co dãn được cố định chính xác $w/h = 2.566$ ($1.45" \times 0.565"$), đặt tại góc trên bên trái, thẳng hàng tuyệt đối với trục lề trái của toàn bộ nội dung slide.
2. **Trục căn lề trái nghiêm ngặt (Strict Left Margin Guide at $x = 0.90"$):**
   - Toàn bộ khối tiêu đề, phụ đề, tên nhóm và danh sách thành viên đều được căn lề trái thẳng tắp dọc theo tọa độ $x = 0.90"$.
3. **Phân cấp kiểu chữ (Typography Hierarchy):**
   - **Tên đề tài chính (Project Title):** `RACEHORSE` (thay thế cho `FREEDRIVER` của mẫu), kiểu chữ `Segoe UI Bold`, kích thước 36 pt, màu Xanh dương đại dương `#0265B2` (đo trực tiếp từ pixel của mẫu).
   - **Phụ đề chính (Primary Subtitle):** `HỆ THỐNG QUẢN LÝ HUẤN LUYỆN NGỰA ĐUA` (tương ứng với `PLATFORM CONNECTING`), kiểu chữ `Segoe UI Bold` in hoa, kích thước 22 pt, màu Đen tuyền `#000000`.
   - **Phụ đề phụ (Secondary Subtitle / Scope):** `NỀN TẢNG SỐ HÓA Y TẾ LÂM SÀNG, KẾ HOẠCH & CHUỒNG TRẠI` (tương ứng với `DRIVERS AND CARS OWNERS`), kiểu chữ `Segoe UI Bold` in hoa, kích thước 17 pt, màu Slate đậm `#334155`.
   - **Định danh nhóm (Group ID):** `BÁO CÁO BỞI: NHÓM GSP25SE_RACEHORSE` (tương ứng với `Presented by: GSP25SE94`), kích thước 13 pt bold, màu `#0265B2`.
4. **Hoa văn sóng tím hữu cơ (Organic Purple Wave Accents):**
   - Sóng góc trên trái: Khối bo góc tím `#5141CF` và bong bóng trang trí `#818CF8` tại $[0, 0]$.
   - Sóng góc trên phải: Khối bo góc tím đa tầng `#5141CF` và `#4F41CD` chảy mềm từ $x = 7.8" \to 10.0"$ cùng 2 bong bóng thả rơi.
   - Sóng góc dưới trái: Khối bo góc tím lớn tại $[0, 4.25"] \to [2.6", 5.625"]$.
   - Toàn bộ hoa văn được neo an toàn tuyệt đối bên trong khung canvas $10.0" \times 5.625"$, không có bất kỳ toạ độ âm hay tràn viền nào.
5. **Mã học phần góc dưới phải:**
   - Dòng chữ `ĐỒ ÁN TỐT NGHIỆP KỸ THUẬT PHẦN MỀM · SP25SE136` đặt tại góc dưới phải ($x = 7.50", y = 5.25"$), kích thước 9.5 pt, màu xám nhạt `#64748B`, căn lề phải.

---

## 2. NỘI DUNG VÀ CÁC GIẢ ĐỊNH DỮ LIỆU (CONTENT ASSUMPTIONS)

Tuân thủ nghiêm ngặt quy định an toàn về dữ liệu, không bịa đặt thông tin cá nhân:
- **Tên đề tài & Phạm vi:** Kế thừa từ mã nguồn thực tế tại `C:\DEV\RACE HORSE\HORSE-PROJECT` và tài liệu `Scope.docx` (Quản trị huấn luyện ngựa đua, y tế lâm sàng, kế hoạch đường đua, chuồng trại và nạp ví).
- **Mã nhóm & Học phần:** Mã nhóm quy ước `GSP25SE_RACEHORSE`, học kỳ `SP25SE136`.
- **Thông tin chưa xác minh (Editable Placeholders):**
  - Giảng viên hướng dẫn: `[Giảng viên hướng dẫn: GVHD - Bộ môn Kỹ thuật Phần mềm]`
  - Thành viên nhóm: Cung cấp sẵn 4 dòng placeholder có cấu trúc rõ ràng để người dùng có thể nhấp chuột sửa trực tiếp tên và MSSV thật:
    - `• [Họ và tên SV 1 - MSSV] — Trưởng nhóm / Kiến trúc hệ thống & Backend Spring Boot 3`
    - `• [Họ và tên SV 2 - MSSV] — Phát triển Frontend React 19 & Mô hình giải phẫu 3D Three.js`
    - `• [Họ và tên SV 3 - MSSV] — Quản trị y tế lâm sàng & Tích hợp cổng thanh toán PayOS VietQR`
    - `• [Họ và tên SV 4 - MSSV] — Vận hành chuồng trại, dinh dưỡng & Báo cáo chủ sở hữu`

---

## 3. KẾT QUẢ KIỂM ĐỊNH CHẤT LƯỢNG (QUALITY GATES VALIDATION)

- [x] **Nội dung có căn cứ thực tế:** Bám sát mã nguồn và tài liệu dự án Racehorse.
- [x] **Logo Đại học FPT chính hãng:** Trích xuất từ XObject PDF mẫu, định dạng PNG trong suốt, giữ nguyên tỷ lệ $w/h = 2.566$, không méo hình, không vẽ lại.
- [x] **Đối chiếu trực quan với mẫu gốc:** Đã sinh ảnh so sánh song song $3090 \times 974$ pixel (`slide_01_comparison_vs_sample_01.png`), sai số pixel RMSE đạt **78.69** (mức chênh lệch tự nhiên do khác biệt chuỗi ký tự đề tài).
- [x] **Không tràn viền / Không cắt chữ (Geometry Linter):** Quét 18 phần tử; **0 lỗi out-of-bounds**.
- [x] **Kiểm định ngữ nghĩa (Semantic Linter):** **0 lỗi placeholder không mong muốn**, 0 mục review-required.
- [x] **Khả năng chỉnh sửa nguyên bản (OOXML Editability):** **17 hình khối vector (`<p:sp>`)**, **12 chuỗi văn bản (`<a:t>`)**, chỉ có **duy nhất 1 hình ảnh (`<p:pic>`)** là logo Đại học FPT. Toàn bộ chữ và hình khối đều chỉnh sửa tự do trong PowerPoint.
- [x] **Không ghi đè tài sản cũ:** Toàn bộ file được tạo trong thư mục riêng `slide_01_redesign/`.
- [x] **Chỉ thực hiện duy nhất Slide 01:** Không sinh Slide 02 hoặc toàn bộ deck khi chưa có sự phê duyệt tiếp theo.

---

## 4. DANH MỤC TẬP TIN & ĐƯỜNG DẪN TRUY CẬP

### 4.1. Tập tin cục bộ (Local Paths)
- PPTX: `C:\DEV\config-building\slide_01_redesign\racehorse_slide_01_redesign.pptx`
- Preview PNG (150 DPI): `C:\DEV\config-building\slide_01_redesign\slide_01_preview.png`
- Preview PNG (300 DPI): `C:\DEV\config-building\slide_01_redesign\slide_01_preview_300dpi.png`
- Ảnh so sánh song song: `C:\DEV\config-building\slide_01_redesign\slide_01_comparison_vs_sample_01.png`
- Logo FPT gốc: `C:\DEV\config-building\slide_01_redesign\fpt_university_logo.png`
- Script sinh slide: `C:\DEV\config-building\slide_01_redesign\generate_slide_01.js`

### 4.2. Đường dẫn GitHub (Sau khi Commit & Push)
- **Preview PNG:** `https://github.com/thangnx-mc/config-building/blob/main/slide_01_redesign/slide_01_preview.png`  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_redesign/slide_01_preview.png`
- **Editable PPTX:** `https://github.com/thangnx-mc/config-building/blob/main/slide_01_redesign/racehorse_slide_01_redesign.pptx`  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_redesign/racehorse_slide_01_redesign.pptx`
- **Ảnh so sánh song song (Comparison):** `https://github.com/thangnx-mc/config-building/blob/main/slide_01_redesign/slide_01_comparison_vs_sample_01.png`  
  *Raw URL:* `https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_redesign/slide_01_comparison_vs_sample_01.png`
- **Báo cáo Slide 01:** `https://github.com/thangnx-mc/config-building/blob/main/slide_01_redesign/SLIDE_01_REDESIGN_REPORT.md`
