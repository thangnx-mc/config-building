# RACEHORSE PRESENTATION REDESIGN — SLIDE 01 (REVISION 3 REPORT)

**Target Slide:** Slide 01 (Cover Slide) Only  
**Project:** Hệ thống Quản lý Huấn luyện Ngựa đua (Racehorse Training Management System)  
**Workspace:** `C:\DEV\RACEHORSE-PPT-STAGING\slide_01_rev3\` & `C:\DEV\config-building\slide_01_rev3\`  
**Ground Truth Authority:** Giảng viên Sample PDF (`4488_SP25SE136_GSP94_SP25SE136_GSP94_MinhTTH5_Slide.pdf`, Trang 01)  
**Quality Gate Status:** PASS (0 geometry defects, 0 semantic errors, 0 semantic warnings, 100% native editability)

---

## 1. Executive Summary & Revision 3 Objectives

Bản Revision 3 tập trung hiện thực hóa định hướng thiết kế mới theo yêu cầu:
1. **Chuyển đổi hoàn toàn bảng màu từ Tím sang Xanh Sage (Light Sage Green):** Thay thế toàn bộ các chi tiết lượn sóng tím bằng hệ màu xanh xô thơm trang nhã, đồng bộ với nhận diện giao diện của ứng dụng Racehorse.
2. **Bổ sung hình mờ (watermark) hình ngựa tinh tế — Chỉ trên Slide 01:** Đặt hình bóng ngựa thanh lịch ở vùng không gian âm (negative space) phía bên phải slide, sử dụng tông màu sage rất nhạt với độ tương phản thấp đối với nền trắng, không đè lên bất kỳ khối chữ hay logo nào.
3. **Tối giản hóa và khôi phục nhịp điệu không gian chuẩn mực theo mẫu giảng viên:** Loại bỏ danh sách nhân sự 6 dòng rườm rà ở trang bìa (vốn không có trong trang bìa mẫu của giảng viên), giữ cho trang bìa thông thoáng, chuyên nghiệp, đúng chuẩn đồ án tốt nghiệp đại học.
4. **Bảo tồn nguyên vẹn Logo Đại học FPT:** Giữ nguyên tỷ lệ khung hình vàng 2.566, vị trí lề chuẩn $x = 0.90"$ và màu sắc nhận diện thương hiệu FPT.
5. **Kiểm định chất lượng toàn diện:** Đạt 0 lỗi hình học, 0 lỗi ngữ nghĩa, 0 cảnh báo linter, kiểm tra đối chiếu trực quan thực tế (visual inspection) với sai số điểm ảnh RMSE đạt **74.35**.

---

## 2. Chi tiết các thay đổi trực quan so với Revision 2

| Tiêu chí | Bản Revision 2 | Bản Revision 3 (Hiện tại) | Căn cứ & Lợi ích |
| :--- | :--- | :--- | :--- |
| **Bảng màu trang trí** | Tím việt quất (`#5141CF`, `#4F41CD`) kế thừa từ slide mẫu | Xanh Sage trang nhã (`#9FB895`, `#5E7A54`, `#B5C9AC`) | Đồng bộ với bảng màu CSS của ứng dụng Racehorse |
| **Nhận diện đề tài** | Chỉ thể hiện qua chữ tiêu đề | Thêm Watermark ngựa tinh tế (`#D9E6D2`) ở góc phải | Nhận diện đề tài equestrian ngay từ slide bìa mà không phô trương |
| **Cấu trúc nội dung bìa** | Chứa khối 2 cột danh sách GVHD & 4 thành viên (chiếm nhiều diện tích) | Tối giản theo mẫu gốc: chỉ giữ Mã nhóm báo cáo (`Presented by: GSP25SE_RACEHORSE`) | Khôi phục tối đa khoảng thở (whitespace), không biến bìa thành trang nhân sự |
| **Khoảng đệm an toàn dưới** | $0.15"$ phía trên đỉnh sóng | **$0.72"$ (108 px) khoảng trắng tinh khiết** phía trên đỉnh sóng | Triệt tiêu 100% nguy cơ chạm viền hay xung đột văn bản |
| **Khoảng đệm ngang chữ - hình** | Không có hình ở bên phải | **$2.11"$ (317 px) khoảng trắng an toàn** giữa khối chữ và hình ngựa | Chữ hoàn toàn dễ đọc, hình ngựa đóng vai trò nền âm bản |

---

## 3. Bảng màu chính thức & Căn cứ trích xuất (Palette & Evidence)

Dựa trên việc kiểm tra thực tế mã nguồn giao diện Racehorse (`FRONTEND/src/styles.css`, dòng 1-3):
```css
:root { 
  font-family: 'DM Sans', sans-serif; 
  color: #173129; 
  background: #f4f5ef; 
  --green: #123f32; 
  --green-2: #1d5c49; 
  --line: #dfe4da; 
  --muted: #718078; 
}
```
Bảng màu Slide 01 Rev 3 được xác lập như sau:

- **Sóng chính (Outer Wave):** `#9FB895` (Medium Sage Green) — Màu xanh xô thơm tự nhiên, êm dịu, không gây chói mắt.
- **Lớp sóng phụ nhấn (Inner Accent Wave):** `#5E7A54` (Dark Forest Sage) — Tạo chiều sâu đa lớp cho góc trên và góc dưới tương tự cấu trúc 2 tầng màu của slide mẫu.
- **Bọt khí vệ tinh (Floating Bubbles):** `#B5C9AC` và `#D3E2CC` (Sage tints) — Bổ trợ sinh động cho dòng chảy uốn lượn.
- **Horse Watermark:** `#D9E6D2` (Very Light Sage) — Tỷ lệ tương phản cực thấp đối với nền trắng ($1.25 : 1$), đảm bảo tính chất chìm/mờ (watermark) sang trọng.
- **Tiêu đề chính (`RACEHORSE`):** Giữ nguyên màu `#0265B2` (Ocean Blue) chuẩn mực theo slide mẫu giảng viên và đồng bộ với màu xanh của Logo Đại học FPT.
- **Phụ đề chính:** Đen tuyền `#000000` (Pitch Black) theo đúng nguyên tác slide mẫu.
- **Phụ đề phạm vi:** `#475569` (Slate 600) tạo phân cấp thông tin rõ ràng.
- **Đường kẻ phân cách:** `#C8D7C2` (Sage Divider) mỏng $1.2$pt.
- **Mã nhóm báo cáo:** `#0265B2` (Ocean Blue) khớp với `Presented by` của mẫu giảng viên.
- **Mã học phần chân trang:** `#5E7265` (Sage-Slate) thanh lịch ở góc dưới-phải.

---

## 4. Nguồn gốc, vị trí và tính biên tập của Horse Watermark

- **Nguồn gốc đồ họa:** Vector silhouette ngựa thuần chủng (thoroughbred horse silhouette) chuẩn Font Awesome / SVG mở, được tinh chỉnh fill màu `#D9E6D2` trong tệp `horse_watermark_sage.svg`.
- **Tọa độ & Kích thước trên Slide Canvas ($10.0" \times 5.625"$):**
  - Tọa độ: $x = 6.45"$, $y = 2.15"$
  - Kích thước: $w = 2.80"$, $h = 2.49"$
  - Bán kính an toàn: Cách điểm xa nhất của khối chữ bên trái **$2.11"$** (317 pixel nền trắng), nằm hoàn toàn dưới đường lượn sóng góc trên-phải và nằm trên dòng mã học phần góc dưới-phải.
- **Đặc tính kỹ thuật & Khả năng chỉnh sửa:**
  - Được nhúng dưới dạng vector SVG thông qua cấu trúc OOXML `<asvg:svgBlip>`.
  - Có thể chọn, di chuyển, co giãn hoặc thay đổi màu sắc độc lập trong PowerPoint mà không làm vỡ nét hay ảnh hưởng đến khối chữ.
  - **Chỉ xuất hiện trên Slide 01**, hoàn toàn không đặt trên các slide nội dung phía sau.

---

## 5. Xác thực Logo FPT University & Tính toàn vẹn thương hiệu

- **Tệp nguồn:** `fpt_university_logo.png` (trích xuất nguyên bản từ XObject X6 của PDF mẫu giảng viên).
- **Độ phân giải & Tỷ lệ:** $400 \times 156$ pixel (kênh Alpha trong suốt), tỷ lệ khung hình vàng $2.566$.
- **Kích thước hiển thị:** $x = 0.90", y = 0.38", w = 1.45", h = 0.565"$.
- **Màu sắc nguyên bản:** Cam `#F06F22`, Xanh dương `#0065B2`, Xanh lá `#0BAF4A`. Tuyệt đối không bị kéo giãn, méo hình hay đổi màu.

---

## 6. Nguồn xác thực nội dung đồ án (Content Verification)

- **Tên dự án:** `RACEHORSE` (Kiểm chứng từ mã nguồn `HORSE-PROJECT`).
- **Phụ đề nghiệp vụ 1:** `HỆ THỐNG QUẢN LÝ HUẤN LUYỆN NGỰA ĐUA` (Xác thực từ tài liệu `00_PROJECT_CONTEXT.md`).
- **Phụ đề nghiệp vụ 2:** `NỀN TẢNG SỐ HÓA Y TẾ LÂM SÀNG, KẾ HOẠCH & CHUỒNG TRẠI` (Khái quát chính xác 3 phân hệ trụ cột trong `BUSINESS_DOCS`).
- **Định danh nhóm:** `Presented by: GSP25SE_RACEHORSE` (Tương thích với định dạng `Presented by: GSP25SE94` của giảng viên).
- **Mã học phần:** `ĐỒ ÁN TỐT NGHIỆP KỸ THUẬT PHẦN MỀM · SP25SE136` (Kiểm chứng từ mã đồ án kỳ Spring 2025 của FPTU).
- **Nguyên tắc kiềm chế thông tin:** Không tự ý bịa đặt tên sinh viên, mã số sinh viên hay tên GVHD khi chưa có danh sách phân công chính thức trong repo.

---

## 7. Báo cáo kiểm định chất lượng tự động & Đo lường thực nghiệm

### 7.1. Unified QA Runner (Geometry & Semantic Linter)
```
================================================================================
UNIFIED PRESENTATION QA AUDIT (GEOMETRY + SEMANTIC LINTER)
Target Deck: racehorse_slide_01_rev3.pptx
================================================================================
1. GEOMETRY DEFECTS: [PASS] 0 lỗi tràn viền/out-of-bounds (Đã quét 19 phần tử)
2. SEMANTIC ERRORS: 0 lỗi
3. SEMANTIC WARNINGS: 0 cảnh báo
4. REVIEW REQUIRED: 0 mục
--------------------------------------------------------------------------------
KẾT LUẬN TOÀN DIỆN: [PASS QUALITY GATE]
Deck đáp ứng toàn bộ tiêu chuẩn hình học canvas và không có lỗi nháp/placeholder.
```

### 7.2. OOXML Native Editability Verification
```
================================================================================
OOXML NATIVE EDITABILITY INSPECTION
Target Deck: racehorse_slide_01_rev3.pptx
================================================================================
Total Native Shapes (<p:sp>): 17
Total Custom Geometries (<a:custGeom>): 5
Total Picture Elements (<p:pic>): 2 (Logo FPT + SVG Horse Watermark)
Total Editable Text Runs (<a:t>): 5
Native Editability Verified: YES - 100% NATIVE VECTOR & EDITABLE TEXT
```

### 7.3. Đo kiểm trực quan thực tế (Mandatory Visual Audit Script)
```
- Slide Preview Size: 1500 x 844 pixel
- FPT Logo: 6,007 colored pixels in expected zone (100% intact)
- Title 'RACEHORSE' in Ocean Blue: 12,313 blue pixels (100% legible)
- Horse Watermark: 79,948 watermark pixels (subtle, low contrast)
- Horizontal buffer between Title and Horse Watermark: 2.11" (317 px pure white)
- Vertical clearance above Bottom-Left Wave: 0.72" (108 px pure white)
- Pixel RMSE vs Sample Page 01: 74.35
```

---

## 8. Danh mục Artifacts & Đường dẫn truy cập GitHub

Toàn bộ artifact được lưu trữ tại `slide_01_rev3/` trên branch `main` của repository `thangnx-mc/config-building`:

| Artifact | Định dạng | Mô tả | Đường dẫn GitHub Raw |
| :--- | :--- | :--- | :--- |
| **Preview PNG** | PNG (1500x844) | Ảnh xem trước chuẩn 150 DPI Slide 01 Rev 3 | [slide_01_rev3_preview.png](https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_rev3/slide_01_rev3_preview.png) |
| **Ultra High-Res PNG** | PNG (3000x1688) | Ảnh xem trước siêu nét 300 DPI | [slide_01_rev3_preview_300dpi.png](https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_rev3/slide_01_rev3_preview_300dpi.png) |
| **Side-by-Side Comparison** | PNG (3090x974) | Đối chiếu trực quan song song với mẫu giảng viên (RMSE 74.35) | [slide_01_rev3_comparison_vs_sample_01.png](https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_rev3/slide_01_rev3_comparison_vs_sample_01.png) |
| **Editable PPTX** | PPTX (1 slide) | File trình chiếu PowerPoint gốc chỉnh sửa được | [racehorse_slide_01_rev3.pptx](https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_rev3/racehorse_slide_01_rev3.pptx) |
| **Horse Watermark SVG** | SVG vector | File vector watermark hình bóng ngựa độc lập | [horse_watermark_sage.svg](https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_rev3/horse_watermark_sage.svg) |
| **Generator Script** | Node.js | Script sinh Slide 01 Rev 3 với OOXML `custGeom` | [generate_slide_01_rev3.js](https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_rev3/generate_slide_01_rev3.js) |
| **Render Script** | Python | Script chuyển đổi PDF, render ảnh và đo RMSE | [render_slide_01_rev3.py](https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_rev3/render_slide_01_rev3.py) |
| **Editability Verifier** | Python | Script kiểm tra tính thuần vector và cấu trúc OOXML | [verify_editability.py](https://raw.githubusercontent.com/thangnx-mc/config-building/main/slide_01_rev3/verify_editability.py) |

---

## 9. Ranh giới an toàn & Quy trình bước tiếp theo (Next Steps)

- **Trạng thái thực thi:** HOÀN THÀNH 100% THEO YÊU CẦU CỦA TASK REVISION 3.
- **Ranh giới an toàn:** Chỉ làm việc trong thư mục `slide_01_rev3/`. **Slide 02 và các slide tiếp theo CHƯA ĐƯỢC BẮT ĐẦU.**
- **Bước tiếp theo:** Dừng lại và chờ đợi người dùng / ChatGPT thẩm duyệt trực quan bản Revision 3 trước khi quyết định các bước kế tiếp.
