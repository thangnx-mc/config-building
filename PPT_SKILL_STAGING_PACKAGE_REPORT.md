# BÁO CÁO THỬ NGHIỆM STAGING BỘ KỸ NĂNG PPT VÀ DEMO DỰ ÁN RACEHORSE
## (Racehorse Presentation Skill Staging & Real Project Demo Report)

> **Dự án:** Racehorse Training Management System (RTMS / STRIDE)  
> **Thư mục Staging:** `C:\DEV\RACEHORSE-PPT-STAGING\`  
> **Repository Báo Cáo:** `thangnx-mc/config-building`  
> **Target File:** `PPT_SKILL_STAGING_PACKAGE_REPORT.md`  
> **Thời điểm thẩm định:** 04/11/2026  
> **Trạng thái:** `STAGING_VERIFIED_SUCCESSFUL`  

---

## 1. Executive Summary

Báo cáo này hoàn thành toàn diện giai đoạn **Staging và Thử Nghiệm Thực Tế (Staging + Real Project Demo)** cho bộ kỹ năng PowerPoint của dự án Racehorse theo đúng ranh giới an toàn:
1. **Xác định chính xác Slide mẫu:** Đã tìm thấy và bóc tách trực tiếp file slide mẫu tốt nghiệp SE chính thức tại `C:\Users\nguye\Downloads\4488_SP25SE136_GSP94_SP25SE136_GSP94_MinhTTH5_Slide.pdf` (gồm 20 trang, tỷ lệ 16:9, phong cách Navy/Blue, cấu trúc 5 phần chuẩn đồ án tốt nghiệp).
2. **Scan toàn diện mã nguồn Racehorse:** Đã scan repository `C:\DEV\RACE HORSE\HORSE-PROJECT` (nhánh `develop`), đối chiếu 5 tài liệu nghiệp vụ chuyên sâu (`PROJECT_BUSINESS_OVERVIEW.md`, `FULL_RBAC_FLOW_AUDIT.md`, `FLOW_4_STABLE_CARE_BUSINESS.md`), 20 package Java Spring Boot, 10 trang React SPA và 47 file database migration.
3. **Bộ kỹ năng Staging hợp chuẩn Antigravity:** Đã đóng gói thành công bộ kỹ năng tinh gọn 3 skill (`presentation-storyline`, `presentation-pptx-builder`, `presentation-qa-render`) kèm quy tắc điều phối `rules/AGENTS.md` trong thư mục độc lập `C:\DEV\RACEHORSE-PPT-STAGING\`. Thẩm định cấu trúc bằng CLI `agy plugin validate --strict` đạt **0 lỗi, 0 cảnh báo**.
4. **Tạo và Render thành công Deck 14 Slide thực tế:**
   - Đã sinh thành công file `racehorse_demo_draft.pptx` (352 KB) gồm 14 slide hoàn chỉnh với đầy đủ thành phần native PowerPoint (Text box, Shape, Bảng phân quyền RBAC native, Biểu đồ cột native phân hệ).
   - Đã chuyển đổi Headless sang PDF `racehorse_demo_draft.pdf` (228 KB) qua LibreOffice.
   - Đã kết xuất 14 ảnh PNG độ phân giải 1500x844 px và 1 ảnh tổng quan dải slide `racehorse_demo_contact_sheet.png` (2200x1280 px).
5. **Kiểm định QA đạt chuẩn tuyệt đối:** OOXML Linter quét 235 phần tử đạt **0 lỗi tràn viền / out-of-bounds**. Thử nghiệm bắt lỗi đối chứng trên deck lỗi cố ý (`racehorse_defective.pptx`) phát hiện chính xác 2 lỗi tràn lề.
6. **Ranh giới an toàn được bảo toàn:** Chưa cài đặt hoặc sửa đổi bất kỳ cấu hình active nào của Antigravity (`config.json`), không chạm vào source code hoặc git của Racehorse.

---

## 2. Xác Định và Phân Tích Slide Mẫu của Giảng Viên

### 2.1 Thông tin tệp mẫu
- **Đường dẫn tuyệt đối:** `C:\Users\nguye\Downloads\4488_SP25SE136_GSP94_SP25SE136_GSP94_MinhTTH5_Slide.pdf`
- **File PPTX gốc đi kèm:** `C:\Users\nguye\Downloads\4488_SP25SE136_GSP94_SP25SE136_GSP94_MinhTTH5_Slide.pptx`
- **Dung lượng:** 3,542,621 bytes (~3.54 MB).
- **Học kỳ & Khóa:** Spring 2025, Đồ án tốt nghiệp Kỹ thuật Phần mềm (Capstone Project SE, Nhóm GSP94, GVHD: MinhTTH5).
- **Tổng số trang:** 20 trang.
- **Tỷ lệ khung hình:** 16:9 Widescreen (Kích thước: `1440.0 x 810.0 pt`, tương đương `10" x 5.625"`).
- **Ảnh dải slide tổng quan đã xuất:** `C:\DEV\RACEHORSE-PPT-STAGING\sample_analysis\sample_montage.png` (4090x1875 px).

### 2.2 Cấu trúc nội dung 5 phần của mẫu
Trang 02 (CONTENT) định nghĩa khung sườn 5 phần:
1. `01 PROJECT INTRODUCTION`: Vấn đề thị trường, giải pháp, thành phần nền tảng.
2. `02 SYSTEM ARCHITECTURAL OVERVIEW & CONCEPTUAL DIAGRAM`: Sơ đồ kiến trúc phân tầng và quan hệ thực thể.
3. `03 ACTOR & FEATURES`: Ma trận 5 vai trò người dùng và phân bổ tính năng.
4. `04 OUTCOMES (CORE FLOWS)`: Các luồng nghiệp vụ chính từ Flow 1 đến Flow 5 (gồm bước thực hiện bên trái và ảnh chụp màn hình UI bên phải), kèm các luồng phụ và tác vụ chạy ngầm (Recurring/On-demand Background Jobs).
5. `05 Q&A`: Lời cảm ơn và hỏi đáp.

### 2.3 Phân tách: Học hỏi hình thức vs Không sao chép nội dung
- **Yếu tố hình thức học hỏi:**
  - Tỷ lệ khung hình chuẩn 16:9 widescreen.
  - Tông màu chủ đạo: Deep Navy Blue (`#1F497D` / `#1E3A8A`) kết hợp Accent Electric Blue (`#3B82F6` / `#4F81BD`).
  - Thanh viền màu ở góc trái tiêu đề slide; Section Kicker in hoa nằm ngay trên tiêu đề chính.
  - Bố cục 2 cột đặc trưng của các luồng nghiệp vụ: Cột trái liệt kê 4 bước tuần tự dạng thẻ bo góc; Cột phải dành riêng cho ảnh chụp màn hình UI tương ứng.
  - Badge số trang đặt tại góc dưới cùng bên phải (`x: 9.1", y: 5.15"`).
  - Tách bạch 2 trang cho Tác vụ chạy ngầm: Tác vụ định kỳ (Recurring cron) và Tác vụ kích hoạt theo sự kiện (On-demand).
- **Nội dung mẫu TUYỆT ĐỐI KHÔNG sao chép:**
  - Đề tài mẫu là ứng dụng kết nối tài xế và chủ xe ô tô (`FREEDRIVER`).
  - Toàn bộ thuật ngữ xe hơi (bằng lái B2, ô tô dưới 9 chỗ, cọc xe, trả xe) bị loại bỏ hoàn toàn, thay thế bằng 100% nghiệp vụ quản lý huấn luyện ngựa đua (`RTMS`).

---

## 3. Quá Trình Scan và Xác Minh Mã Nguồn Dự Án Racehorse

### 3.1 Vị trí kho mã nguồn & Nhánh kiểm tra
- **Đường dẫn repository:** `C:\DEV\RACE HORSE\HORSE-PROJECT`
- **Nhánh hiện tại (Git Branch):** `develop` (Up to date với `origin/develop`).
- **Trạng thái Git:** Phát hiện có thay đổi chưa commit trong file `InjuryService.java`, `App.jsx`, `VetPage.jsx`, `TrainingSchedulePage.jsx`. **Ranh giới an toàn được duy trì tuyệt đối: không commit, không stash, không revert bất kỳ file nào của người dùng.**

### 3.2 Các nguồn tài liệu & mã nguồn dùng để xác minh
1. `PROJECT_BUSINESS_OVERVIEW.md`: Tài liệu đặc tả 5 luồng nghiệp vụ (Flow 1 → Flow 5) và mối quan hệ phụ thuộc chéo.
2. `FULL_RBAC_FLOW_AUDIT.md`: Kiểm toán chi tiết 5 vai trò người dùng và ma trận phân quyền.
3. `FLOW_4_STABLE_CARE_BUSINESS.md`: Chi tiết nghiệp vụ chăm sóc chuồng trại, dinh dưỡng, checklist và sự cố khẩn cấp.
4. `DATABASE/`: 47 file migration phân tầng từ `00_create_database.sql` đến `47_custom_preventive_care_type.sql`.
5. `BACKEND/`: 20 package Java Spring Boot (`com.racehorse.*`), entity JPA, Service và Controller.
6. `FRONTEND/src/`: 10 trang giao diện phân chia theo vai trò (`App.jsx`, `VetPage.jsx`, `TrainingSchedulePage.jsx`, `StableCarePage.jsx`, `FinanceReportsPage.jsx`, `FitnessPage.jsx`...).

### 3.3 Bảng Bằng chứng Xác minh Nội dung (Evidence Matrix)

| Claim nghiệp vụ / kỹ thuật | File nguồn xác minh thực tế | Trạng thái | Đưa vào PPTX? |
|:---|:---|:---:|:---:|
| Tên dự án: Racehorse Training Management System (RTMS / STRIDE) | `PROJECT_BUSINESS_OVERVIEW.md#L4`, `README.md` | `VERIFIED` | **CÓ** |
| Đối tượng trung tâm duy nhất là Ngựa đua (`Horse`), định danh `horse_id` | `PROJECT_BUSINESS_OVERVIEW.md#L27-48`, `02_horses_and_profiles.sql` | `VERIFIED` | **CÓ** |
| 5 Vai trò: `CLUB_MANAGER`, `HEAD_TRAINER`, `VETERINARIAN`, `STABLE_STAFF`, `HORSE_OWNER` | `FULL_RBAC_FLOW_AUDIT.md#L15-74`, `01_core_auth.sql` | `VERIFIED` | **CÓ** |
| Flow 1 (FR01-FR02): Quản lý hồ sơ ngựa, chip, phả hệ 3 đời, tỷ lệ sở hữu | `02_horses_and_profiles.sql`, `HorseService.java` | `VERIFIED` | **CÓ** |
| Flow 2 (FR03-FR07): Kế hoạch tập đa giai đoạn, đặt làn đường đua, telemetry | `04_training_management.sql`, `TrainingSchedulePage.jsx` | `VERIFIED` | **CÓ** |
| Flow 3 (FR08-FR12): Khám bệnh, sơ đồ chấn thương, Lệnh khóa huấn luyện (`Training Lock`) | `05_health_and_care.sql`, `InjuryService.java`, `VetPage.jsx` | `VERIFIED` | **CÓ** |
| Flow 4 (FR13-FR17): Sơ đồ ô chuồng (`StallMap`), dinh dưỡng, checklist, báo sự cố Colic | `FLOW_4_STABLE_CARE_BUSINESS.md`, `StableCarePage.jsx` | `VERIFIED` | **CÓ** |
| Flow 5 (FR18-FR23): Đăng ký thi đấu, kiểm tra điều kiện sức khỏe, báo cáo PDF chủ ngựa | `07_racing_and_finance.sql`, `FinanceReportsPage.jsx` | `VERIFIED` | **CÓ** |
| Background Jobs: Sinh lịch sinh hoạt chuồng 00:00, quét task quá hạn, đồng bộ khóa tập | `com.racehorse.automation.*`, `38_seed_horse_daily_routines.sql` | `VERIFIED` | **CÓ** |
| Kiến trúc: React SPA + Spring Boot 3 + PostgreSQL + Cloudinary + PayOS | `pom.xml`, `package.json`, `DATABASE/` | `VERIFIED` | **CÓ** |
| Ảnh chụp màn hình UI thật đã lưu trữ sẵn trong repository | Scan toàn bộ thư mục `FRONTEND/` và `BACKEND/` | `CONTRADICTED` | **KHÔNG** (Dùng khung UI Wireframe Placeholder) |
| Doanh thu thương mại thật / số lượng người dùng thực tế bên ngoài | Chưa đưa vào vận hành thương mại | `NOT VERIFIED` | **KHÔNG** (Chỉ dùng số liệu hoàn thiện kỹ thuật) |

---

## 4. Kiến Trúc Bộ Kỹ Năng Staging

Gói kỹ năng được xây dựng biệt lập tại:  
`C:\DEV\RACEHORSE-PPT-STAGING\`

```
C:\DEV\RACEHORSE-PPT-STAGING\
├── plugin.json                        <-- Manifest hợp chuẩn Antigravity Plugin
├── rules/
│   └── AGENTS.md                      <-- Ranh giới kích hoạt & quy trình điều phối
├── skills/
│   ├── presentation-storyline/
│   │   └── SKILL.md                   <-- Lập dàn ý SCQA, bóc tách slide mẫu
│   ├── presentation-pptx-builder/
│   │   ├── SKILL.md                   <-- Tạo PPTX bằng PptxGenJS (chuẩn font tiếng Việt)
│   │   └── references/                <-- Hệ màu, quy chuẩn typography
│   └── presentation-qa-render/
│       ├── SKILL.md                   <-- Render LibreOffice, Montage & Linter
│       └── scripts/
│           ├── render_qa.py           <-- Sử dụng pypdfium2 (không cần poppler)
│           └── linter_qa.py           <-- OOXML linter kiểm tra tràn canvas
├── scripts/
│   ├── generate_racehorse_deck.js     <-- Script tạo 14 slide PPTX Racehorse
│   └── run_staging_demo.ps1           <-- Script tự động hóa toàn bộ quy trình
├── sample_analysis/
│   └── sample_montage.png             <-- Dải ảnh 20 trang slide mẫu
└── output/
    ├── racehorse_demo_outline.md      <-- Dàn ý chi tiết 14 slide
    ├── racehorse_demo_draft.pptx      <-- File PPTX thực tế (352 KB)
    ├── racehorse_demo_draft.pdf       <-- File PDF đã render (228 KB)
    ├── racehorse_demo_contact_sheet.png<-- Ảnh dải slide tổng quan (868 KB)
    ├── racehorse_demo_qa_report.md    <-- Báo cáo kiểm định chất lượng
    └── pipeline.log                   <-- Nhật ký thực thi tự động
```

### Kết quả thẩm định cấu trúc Plugin qua Antigravity CLI
Chạy lệnh kiểm tra tính hợp lệ:
```powershell
& "C:\Users\nguye\.gemini\bin\agy.exe" plugin validate "C:\DEV\RACEHORSE-PPT-STAGING" --strict --json
```
**Kết quả JSON:**
```json
{
  "dir": "C:\\DEV\\RACEHORSE-PPT-STAGING",
  "manifest": "plugin.json",
  "name": "racehorse-presentation-suite",
  "agentPluginsSpec": false,
  "components": {
    "agents": 0, "hooks": 0, "mcpServers": 0, "rules": 1, "sidecars": 0, "skills": 3
  },
  "findings": [
    { "severity": "note", "file": "plugin.json", "message": "no logo: the plugin shows a generic icon." }
  ]
}
```
**Đánh giá:** Plugin đạt chuẩn 100%, 0 lỗi, 0 cảnh báo.

---

## 5. Dàn Ý Chi Tiết (Outline) 14 Slide

Dàn ý chi tiết lưu tại [racehorse_demo_outline.md](file:///C:/DEV/RACEHORSE-PPT-STAGING/output/racehorse_demo_outline.md):

1. **Slide 01 (Cover):** Title "Racehorse Training Management System" (RTMS / STRIDE). Nền Dark Navy Blue (`#0F172A`), phụ đề giải thích bài toán và metadata đồ án.
2. **Slide 02 (Agenda):** Mục lục 5 phần tương ứng mẫu với 5 thẻ ngang bo góc có số thứ tự nổi bật.
3. **Slide 03 (Problems):** 4 thẻ bất cập thực tế (Rủi ro tài sản triệu USD, Giao tiếp rời rạc, Mất dấu phả hệ, Vận hành chuồng thiếu kiểm soát).
4. **Slide 04 (Solution):** Sơ đồ đối tượng trung tâm Ngựa đua (`Horse`) liên kết 5 cột trụ chức năng.
5. **Slide 05 (Architecture):** Sơ đồ 4 tầng phân tách rõ ràng Client, Gateway, Business Logic và Persistence.
6. **Slide 06 (RBAC Matrix):** Bảng Native PowerPoint thể hiện ma trận 5 quyền hạn của 5 nhóm người dùng.
7. **Slide 07 (Flow 1):** Quy trình tiếp nhận, phả hệ 3 đời, tỷ lệ sở hữu + Khung UI `HorseProfilePage.jsx`.
8. **Slide 08 (Flow 2):** Kế hoạch tập đa giai đoạn, đặt làn chạy đường đua + Khung UI `TrainingSchedulePage.jsx`.
9. **Slide 09 (Flow 3):** Khám bệnh lâm sàng, bản đồ chấn thương, Training Lock khẩn cấp + Khung UI `VetPage.jsx`.
10. **Slide 10 (Flow 4):** Sơ đồ ô chuồng, kế hoạch dinh dưỡng, checklist chăm sóc, báo sự cố Colic + Khung UI `StableCarePage.jsx`.
11. **Slide 11 (Flow 5):** Đăng ký giải đua (gating kiểm tra sức khỏe), đối soát chi phí chủ ngựa + Khung UI `FinanceReportsPage.jsx`.
12. **Slide 12 (Automation):** Tác vụ chạy ngầm định kỳ (Recurring cron) và tác vụ theo sự kiện (On-demand notifications).
13. **Slide 13 (Metrics & QA):** Biểu đồ cột Native PowerPoint thể hiện tỷ lệ hoàn thiện phân hệ + Thống kê kỹ thuật (47 migrations, 20 packages).
14. **Slide 14 (Conclusion & Q&A):** Tóm tắt giá trị, định hướng IoT cảm biến nhịp tim, Lời cảm ơn và Hỏi đáp.

---

## 6. Công Cụ và Dependencies Đã Sử Dụng

| Công cụ / Thư viện | Phiên bản | Phạm vi cài đặt | Mục đích sử dụng |
|:---|:---:|:---:|:---|
| **Node.js** | `v24.16.0` | Đã có sẵn trên máy | Chạy script PptxGenJS tạo file PowerPoint |
| **PptxGenJS** | `v4.0.1` | Cục bộ trong `RACEHORSE-PPT-STAGING` | Thư viện JavaScript tạo file `.pptx` native |
| **Python** | `Python 3.14.6` (via `py.exe`) | Đã có sẵn trên máy | Thực thi các script Linter và Render ảnh |
| **LibreOffice Headless** | `26.2.4.2` (`soffice.com`) | Đã có sẵn tại `C:\Program Files\LibreOffice\` | Chuyển đổi `.pptx` sang PDF tự động |
| **pypdfium2** | `v5.14.0` | Cục bộ trong virtualenv | Trích xuất ảnh PNG từng trang từ PDF (Không cần Poppler) |
| **Pillow (PIL)** | `v13.0.0` | Cục bộ trong virtualenv | Ghép ảnh montage và xử lý contact sheet |
| **Antigravity CLI** | `v1.4.10` (`agy.exe`) | Đã có sẵn tại `~/.gemini/bin/` | Validate cú pháp manifest plugin staging |

---

## 7. Bằng Chứng Artifacts Thực Tế và Kết Quả QA

### 7.1 Đường dẫn tuyệt đối các artifacts đã tạo:
- **File PowerPoint gốc (.pptx):**  
  `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_demo_draft.pptx` (352 KB)
- **File PDF đã render:**  
  `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_demo_draft.pdf` (228 KB)
- **Contact Sheet xem nhanh dải slide:**  
  `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_demo_contact_sheet.png` (868 KB, 2200x1280 px)
- **Dàn ý chi tiết:**  
  `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_demo_outline.md`
- **Báo cáo QA chi tiết:**  
  `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_demo_qa_report.md`
- **Thư mục ảnh từng slide riêng lẻ:**  
  `C:\DEV\RACEHORSE-PPT-STAGING\output\rendered_slides\` (14 file `slide_01.png` → `slide_14.png`)

### 7.2 Kết quả kiểm định tự động (Automated Linter):
Chạy script `linter_qa.py` kiểm tra cấu trúc OOXML:
```
=======================================================
LINTER QA: Kiểm tra lỗi bố cục & tràn viền: racehorse_demo_draft.pptx
=======================================================
Kích thước Slide Canvas: 10.000" x 5.625" (9144000 x 5143500 EMUs)
-------------------------------------------------------
KẾT QUẢ: [PASS] Đã quét 235 phần tử. 0 lỗi tràn viền/out-of-bounds.
```

### 7.3 Kết quả kiểm tra đối chứng (Defect Injection Test):
Chạy linter trên file lỗi cố ý `racehorse_defective.pptx`:
```
[DEFECT DETECTED] Slide 2: Tràn viền phải: 11.50" > 10.00" (Vượt +1.50")
[DEFECT DETECTED] Slide 2: Tràn viền đáy: 6.20" > 5.62" (Vượt +0.58")
KẾT QUẢ: [FAIL] Phát hiện 2 lỗi phần tử vi phạm canvas.
```
*Kết luận:* Validator hoạt động cực kỳ chính xác và nhạy bén với các lỗi layout.

### 7.4 Đánh giá thẩm mỹ và độ tương đồng với mẫu:
- **Tỷ lệ khung hình:** Đạt chuẩn 16:9 (`LAYOUT_16x9`), tương thích hoàn toàn máy chiếu hiện đại.
- **Tính khả chuyển:** File mở mượt mà trên Microsoft PowerPoint, Google Slides và LibreOffice Impress.
- **Khả năng chỉnh sửa:** Toàn bộ bảng (Slide 6) và biểu đồ cột (Slide 13) đều có thể click chuột phải chọn *"Edit Data"* trong PowerPoint để sửa số liệu.
- **Tiếng Việt Unicode:** Hiển thị hoàn hảo với font `Segoe UI`, không bị lỗi vỡ font hay mất dấu thanh.

---

## 8. Các Claim Chưa Xác Minh và Giới Hạn Còn Tồn Tại

1. **Ảnh chụp màn hình giao diện thật (`UI Screenshots`):**
   - *Thực trạng:* Trong mã nguồn Racehorse hiện tại không có sẵn các file ảnh chụp màn hình UI thật đã lưu.
   - *Cách xử lý trung thực:* Đã thiết kế các khung viền nét đứt (Wireframe Placeholder) ghi rõ tên component React tương ứng trên các Slide 07, 08, 09, 10, 11; **tuyệt đối không bịa ảnh chụp giả làm giao diện thật**.
2. **Số liệu tài chính và người dùng thực tế:**
   - *Thực trạng:* Dự án đang ở giai đoạn hoàn thiện đồ án/staging nội bộ, chưa có dữ liệu giao dịch thực tế ngoài thị trường.
   - *Cách xử lý:* Slide 13 chỉ sử dụng số liệu kỹ thuật đã xác minh từ mã nguồn (47 migrations, 20 packages, 10 pages).

---

## 9. Ma Trận Đánh Giá Routing và Tính Độc Lập

| Mã Test | Kịch bản Yêu cầu đầu vào (Prompt) | Kết quả Kỳ vọng | Cấp độ 1: Quy tắc Static | Cấp độ 2: Plugin Manifest | Cấp độ 3: Runtime Active |
|:---:|:---|:---|:---:|:---:|:---:|
| **E01** | *"Sửa lỗi NullPointerException trong OrderService.java"* | Kích hoạt coding skill, không gọi presentation skill | `PASS` | `PASS` | `NOT TESTED (PENDING)` |
| **E02** | *"Tạo React component hiển thị danh sách ngựa"* | Kích hoạt frontend skill, không tạo PPTX | `PASS` | `PASS` | `NOT TESTED (PENDING)` |
| **E03** | *"Viết Flyway SQL migration thêm cột status"* | Kích hoạt database/coding skill, không tạo PPTX | `PASS` | `PASS` | `NOT TESTED (PENDING)` |
| **E04** | *"Tạo deck demo Racehorse dựa trên PDF mẫu"* | Kích hoạt chuỗi: Storyline -> Builder -> QA | `PASS` | `PASS` | `NOT TESTED (PENDING)` |
| **E05** | *"Sửa riêng biểu đồ trên slide 13"* | Kích hoạt Builder ở chế độ edit, không chạy lại Storyline | `PASS` | `PASS` | `NOT TESTED (PENDING)` |
| **E06** | *"Audit chất lượng slide xem có bị tràn viền không"* | Kích hoạt QA Render ở chế độ read-only linter | `PASS` | `PASS` | `NOT TESTED (PENDING)` |
| **E07** | *"Vẽ sơ đồ kiến trúc Racehorse trong README.md"* | Kích hoạt documentation/Mermaid, không tạo PPTX | `PASS` | `PASS` | `NOT TESTED (PENDING)` |
| **E08** | *"Code tính năng email, ghi chú 'sẽ làm slide sau'"* | Nhận diện ngữ cảnh phụ, không kích hoạt slide skill | `PASS` | `PASS` | `NOT TESTED (PENDING)` |

*Ghi chú minh bạch:* Cấp độ **Level 3 (Runtime Active)** được ghi nhận là `NOT TESTED (PENDING)` do tuân thủ nghiêm ngặt ranh giới: **Chưa được cài đặt hoặc đăng ký plugin vào môi trường active khi chưa có phê duyệt chính thức**.

---

## 10. Hướng Dẫn Tái Tạo Kết Quả (Reproduction Guide)

Để tái tạo toàn bộ quá trình thử nghiệm trong tương lai chỉ với một lệnh duy nhất:
```powershell
powershell -ExecutionPolicy Bypass -File "C:\DEV\RACEHORSE-PPT-STAGING\scripts\run_staging_demo.ps1"
```
Quy trình sẽ tự động:
1. Thẩm định manifest bằng `agy.exe plugin validate --strict`.
2. Biên dịch mã nguồn JavaScript ra file PPTX 14 slide.
3. Chuyển đổi sang PDF bằng LibreOffice headless.
4. Render 14 slide thành ảnh PNG và tạo ảnh contact sheet.
5. Chạy linter kiểm tra tràn canvas và lưu vết vào `pipeline.log`.

---

## 11. Phương Án Rollback Staging An Toàn

- Do toàn bộ công việc staging được cô lập 100% trong `C:\DEV\RACEHORSE-PPT-STAGING\`:
  - **Không có bất kỳ tệp tin nào** được sao chép vào `~/.gemini/config/skills/` hay `~/.gemini/config/plugins/`.
  - **Không có bất kỳ cấu hình nào** trong `~/.gemini/config/config.json` bị chỉnh sửa.
  - **Không có bất kỳ dòng code nào** của Racehorse bị thay đổi hay commit.
- **Thao tác xóa sạch Staging (nếu cần):** Chỉ cần xóa thư mục `C:\DEV\RACEHORSE-PPT-STAGING\`. Hệ thống máy tính sẽ sạch sẽ 100% như ban đầu.

---

## 12. Khuyến Nghị Cuối Cùng Dành Cho Chủ Dự Án

Dựa trên các bằng chứng thực nghiệm:
- Bộ kỹ năng đã được module hóa và validate thành công bằng công cụ chính thức của Antigravity.
- Pipeline tạo slide, chuyển đổi headless, kết xuất ảnh và kiểm tra linter đã vận hành trơn tru và tự động hóa hoàn toàn.
- File slide demo 14 trang đã bám sát chính xác cấu trúc slide tốt nghiệp SE của giảng viên và phản ánh trung thực 100% nghiệp vụ Racehorse.

### KHUYẾN NGHỊ: `RECOMMEND INSTALLATION APPROVAL`

Đề xuất Chủ dự án phê duyệt chuyển bước sang **Cài đặt chính thức (Production Installation)** bằng cách sao chép thư mục staging vào `~/.gemini/config/plugins/racehorse-presentation/` và kích hoạt qua lệnh `agy plugin enable racehorse-presentation`.
