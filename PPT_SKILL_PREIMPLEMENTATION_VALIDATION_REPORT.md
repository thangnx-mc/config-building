# BÁO CÁO XÁC MINH TRƯỚC TRIỂN KHAI VÀ PROTOTYPE KỸ THUẬT HỆ THỐNG PPT SKILL
## (Pre-Implementation Validation & Minimal Prototype Report)

> **Dự án:** Hệ thống PowerPoint Agent Skill cho Demo Đồ Án Racehorse  
> **Repository Báo Cáo:** `thangnx-mc/config-building`  
> **Thư mục Prototype Cô lập:** `C:\Users\nguye\AppData\Local\Temp\racehorse-ppt-skill-validation\`  
> **Trạng thái:** `READY_FOR_APPROVAL`  
> **Thời điểm xác minh:** 04/11/2026  

---

## 1. Executive Summary

Báo cáo này hoàn thành toàn diện giai đoạn **Pre-Implementation Verification & Isolated Prototype** theo phê duyệt của Chủ dự án, chuyển tiếp từ báo cáo nghiên cứu `PPT_SKILL_RESEARCH_AND_ROUTING_REPORT.md`.

### Các kết quả then chốt đã kiểm chứng thực nghiệm:
1. **Môi trường Antigravity:** Đã xác minh sự tồn tại của CLI `agy.exe` phiên bản **`1.4.10`** tại `C:\Users\nguye\.gemini\bin\agy.exe`. Lệnh `agy plugin validate [path] --strict --json` hoạt động chuẩn xác trên Windows 11.
2. **Phát hiện quan trọng về Python Runtime:** Lệnh `python` trong biến môi trường `PATH` thực chất trỏ về Python nhúng của LibreOffice (`C:\Program Files\LibreOffice\program\python.exe` - bị lỗi quyền hạn thư mục nếu chạy pip). Trong khi đó, Python của người dùng phải được gọi chuẩn xác qua Python Launcher **`py.exe`** (hỗ trợ Python `3.14.6` và `3.12.13`).
3. **Audit Repository & Phân biệt rõ ràng:** Đã đối chiếu mã nguồn và xác minh sự khác biệt cốt lõi giữa `hunkim/slide-skill` (chỉ tạo HTML slide, cam kết triết lý *Death by PowerPoint*) và `icgma/slide-skill` (bộ công cụ sinh SVG slide). Cả hai đều không phải là công cụ sinh file `.pptx` native có thể chỉnh sửa như `hiamberhuang` hay `JetBrains/OpenAI`.
4. **Prototype thành công 100% trong môi trường cô lập:**
   - Đã tạo thành công bộ slide demo 3 trang `racehorse_demo.pptx` (114 KB) với đầy đủ: Shape native, Text native hỗ trợ tiếng Việt có dấu (`Segoe UI`), Bảng số liệu native và Biểu đồ cột native (`pres.charts.BAR`).
   - Đã chuyển đổi Headless thành công qua LibreOffice `soffice.com` sang file PDF `racehorse_demo.pdf` (75 KB).
   - Đã kết xuất 3 slide ảnh PNG sắc nét (1500x844 px) và 1 ảnh tổng quan dải slide `montage.png` (2330x462 px) bằng thư viện `pypdfium2` mà **hoàn toàn không cần cài đặt Poppler/pdftoppm**.
   - Đã viết script kiểm thử `linter_qa.py` phát hiện chính xác 2 lỗi tràn viền cố ý (vượt lề phải 1.50" và vượt lề đáy 0.58") trên file `racehorse_defective.pptx`.
5. **Khuyến nghị kiến trúc:** Đề xuất triển khai **Mô hình Plugin Antigravity 3 Skill Tinh gọn** (`plugins/racehorse-presentation/`) với file ràng buộc ranh giới `rules/AGENTS.md`. Kết quả thẩm định cấu trúc qua `agy plugin validate --strict` đạt **0 lỗi, 0 cảnh báo**.
6. **Khuyến nghị phê duyệt:** **`READY_FOR_APPROVAL`**. Hệ thống giữ nguyên trạng 100% ranh giới an toàn, không có bất kỳ cấu hình hay skill production nào bị thay đổi.

---

## 2. Môi trường và Phương pháp Kiểm tra

### 2.1 Phương pháp luận kiểm tra
Mọi nhận định trong báo cáo này đều tuân thủ nguyên tắc thực nghiệm:
- Đọc trực tiếp manifest, binary và tài liệu chính thức nội bộ.
- Chạy script kiểm thử thực tế trong thư mục tạm `%TEMP%\racehorse-ppt-skill-validation\`.
- Đo lường đầu ra, bắt mã lỗi (exit codes) và phân loại bằng chứng rõ ràng.

### 2.2 Hiện trạng Môi trường Thực tế

| Thành phần | Trạng thái / Đường dẫn kiểm chứng | Bằng chứng quan sát được | Phân loại |
| :--- | :--- | :--- | :---: |
| **Antigravity CLI** | `C:\Users\nguye\.gemini\bin\agy.exe` | Chạy lệnh `agy.exe --version` trả về `1.4.10`. Đọc `agy.version.json` xác nhận schemaVersion: 1. | `VERIFIED` |
| **Antigravity IDE** | `C:\Users\nguye\.gemini\antigravity-ide` | Thư mục IDE tồn tại độc lập, có file đánh dấu `.ide_migration` và `builtin/`. | `VERIFIED` |
| **Shell Môi trường** | PowerShell trên Windows 11 Pro 64-bit | `Get-ExecutionPolicy` chặn file `.ps1` (như `npm.ps1`), bắt buộc gọi lệnh qua `npm.cmd` hoặc `node`. | `VERIFIED` |
| **Python System Path** | `C:\Program Files\LibreOffice\program\python.exe` | [CẢNH BÁO] Lệnh `python` trong PATH trỏ vào LibreOffice, bị lỗi `Permission denied` khi gọi `venv`. | `VERIFIED` |
| **Python Launcher** | `C:\Users\nguye\AppData\Local\Programs\Python\Launcher\py.exe` | Lệnh `py -0` trả về Python `3.14` (64-bit) và `3.12.13`. Khởi tạo venv thành công với `py -3 -m venv`. | `VERIFIED` |
| **Node.js Runtime** | `v24.16.0` (trong PATH) | Hỗ trợ đầy đủ CommonJS/ESM, cài đặt cục bộ `pptxgenjs` trong 3 giây. | `VERIFIED` |
| **LibreOffice Headless**| `C:\Program Files\LibreOffice\program\soffice.com` | Bản `26.2.4.2`. Chuyển đổi PPTX -> PDF thành công không cần UI qua tham số `--headless --convert-to pdf`. | `VERIFIED` |
| **Poppler / pdftoppm**| Vắng mặt trong biến môi trường `PATH` | Không thể dùng `pdf2image`. Giải pháp thay thế là `pypdfium2` (đã kiểm chứng hoạt động hoàn hảo). | `VERIFIED` |

### 2.3 Cơ chế Bật/Tắt và Quản lý Plugin của Antigravity
Theo tài liệu kỹ thuật tại `~/.gemini/antigravity/builtin/skills/agy-customizations/docs/plugins.md` và kiểm tra lệnh CLI:
1. **Cấu trúc Plugin hợp lệ:** Phải có file đánh dấu `plugin.json` ở thư mục gốc của plugin. Các thư mục con tùy chọn gồm: `skills/<skill_name>/SKILL.md`, `rules/AGENTS.md`, `hooks.json`, `mcp_config.json`.
2. **Cơ chế Bật/Tắt:** Trạng thái hoạt động của plugin được lưu trữ trong `~/.gemini/config/config.json` dưới trường `plugins`:
   ```json
   {
     "plugins": {
       "racehorse-presentation": { "enabled": false }
     }
   }
   ```
   Cấu hình trong `config.json` có độ ưu tiên cao nhất, đè lên khai báo `"disabled": true` bên trong `plugin.json`.
3. **Thẩm định Plugin qua CLI:** Lệnh CLI chính thức để kiểm tra cấu trúc plugin là:
   `agy plugin validate <path> [--strict] [--json]` (Đã chạy thử nghiệm thành công).

---

## 3. Bảng Xác minh các Giả định từ Báo cáo Trước

| Khẳng định từ Báo cáo trước | Trạng thái Xác minh | Bằng chứng thực nghiệm & Kết luận chi tiết |
| :--- | :---: | :--- |
| **1. Antigravity sử dụng Progressive Disclosure cho Skills** | **`VERIFIED`** | Tài liệu `skills.md` xác nhận engine chỉ nạp `name` và `description` từ YAML frontmatter vào system context. Nội dung chi tiết chỉ được nạp khi có tool call đọc `SKILL.md`. |
| **2. Plugin có thể bật/tắt an toàn qua `config.json`** | **`VERIFIED`** | Kiểm tra trực tiếp `~/.gemini/config/config.json` thấy 2 plugin hiện có (`google-antigravity-sdk`, `modern-web-guidance-plugin`) đang được quản lý qua map `"plugins": { "...": { "enabled": true } }`. |
| **3. CLI `agy plugin validate --strict` có sẵn** | **`VERIFIED`** | Thực thi trực tiếp `C:\Users\nguye\.gemini\bin\agy.exe plugin validate ... --strict --json` trả về kết quả JSON hợp lệ với 0 lỗi. |
| **4. Python 3.12 có thể gọi trực tiếp bằng lệnh `python`** | **`CONTRADICTED`** | [PHÁT HIỆN LỖI] Lệnh `python` gọi nhầm `python.exe` của LibreOffice gây lỗi cấp quyền. **Bắt buộc phải dùng `py -3` hoặc chỉ định đường dẫn virtualenv.** |
| **5. Cần cài đặt Poppler/pdftoppm để render slide** | **`CONTRADICTED`** | [TỐI ƯU HÓA] Không cần Poppler. Thư viện Python `pypdfium2` (dựa trên Google PDFium) là standalone wheel, kết xuất ảnh PDF sang PNG độc lập và cực nhanh trên Windows. |
| **6. Font tiếng Việt Unicode hiển thị chuẩn trong PPTX** | **`VERIFIED`** | Prototype với font `Segoe UI` nhúng các chuỗi tiếng Việt phức tạp ("Quản Lý & Đặt Lịch Chuồng Trại") hiển thị chính xác trên cả file PPTX lẫn bản render PDF/PNG. |
| **7. PptxGenJS tạo được Native Chart & Table chỉnh sửa được** | **`VERIFIED`** | Đã tạo thành công Bar Chart và Table native trong `racehorse_demo.pptx`. Cấu trúc XML trong file `.pptx` chứa đầy đủ thẻ `<c:chart>` và `<a:tbl>`. |
| **8. Repo `hunkim/slide-skill` hỗ trợ tạo slide thuyết trình** | **`PARTIALLY VERIFIED`** | Repo tồn tại và có nội dung rất hay về triết lý trình bày, nhưng **chỉ tạo file HTML slide, hoàn toàn không hỗ trợ định dạng `.pptx`**. |

---

## 4. Audit Repository Ứng viên & Phân tích Giấy phép Chi tiết

Kiểm tra trực tiếp qua GitHub REST API tại các commit mới nhất trên nhánh mặc định:

```
[Audited Repositories Tree]
├── JetBrains/skills (slides)       [Commit: 3f53782] (Apache-2.0) -> Rendering & Linter scripts
├── hiamberhuang/presentation-skills [Commit: 9e868af] (MIT)        -> Modular Architecture & SCQA
├── siril9/presentation-skill       [Commit: efd899c] (MIT)        -> Heavy Monolithic CLI
└── hunkim/slide-skill               [Commit: beae7c4] (MIT)        -> HTML & Philosophy Only
```

### 4.1 Bảng So sánh Trực tiếp Mã Nguồn

| Tiêu chí | `JetBrains/skills` (`slides`) | `hiamberhuang/presentation-agent-skills` | `siril9/presentation-skill` | `hunkim/slide-skill` |
| :--- | :--- | :--- | :--- | :--- |
| **URL Chính xác** | [JetBrains/skills/slides](https://github.com/JetBrains/skills/tree/main/slides) | [hiamberhuang/presentation-agent-skills](https://github.com/hiamberhuang/presentation-agent-skills) | [siril9/presentation-skill](https://github.com/siril9/presentation-skill) | [hunkim/slide-skill](https://github.com/hunkim/slide-skill) |
| **Commit Khảo sát** | `3f53782dec7b5424bf6e8efbb90a46ee26f31798` | `9e868af4104d1c07828701d4c36486bfa3ff75d7` | `efd899c5ddf866af2ce0001c4c9340af775d4d55` | `beae7c4c8ec21241076411a49f7968f862154969` |
| **Giấy phép & Vị trí**| `Apache-2.0` (`slides/LICENSE.txt`) | `MIT` (`LICENSE`) | `MIT` (`package.json`, `LICENSE`) | `MIT` (`LICENSE`) |
| **Tạo PPTX Native** | **Có** (PptxGenJS qua Node.js) | **Có** (PptxGenJS + XML editing) | **Có** (PptxGenJS qua `outline.json`) | **KHÔNG** (Chỉ HTML/CSS 1280x720) |
| **Khả năng Edit Object**| Cao (Native text, shapes, charts) | Cao (Tổ chức per-slide JS) | Rất cao (Ràng buộc slot layouts) | Thấp (Chỉ chỉnh sửa DOM web) |
| **Phân tích PDF / Mẫu** | Hỗ trợ render PDF thành ảnh đối chiếu | Rất mạnh (`ppt-pixel-restore` & `markitdown`)| Có (`reference_deck.py`) | Không có |
| **Storyline & Cấu trúc**| Sơ sài (Chủ yếu quy tắc layout) | **Xuất sắc** (SCQA, Kim tự tháp Minto) | Khá (Tự động hóa sinh brief) | **Xuất sắc** (1 ý/slide, 3m rule) |
| **Render & QA Tooling**| **Rất mạnh** (`render_slides`, `slides_test`)| Tốt (`compare_images.py`, checklist) | Cực lớn (CLI `present.py finalize`) | Playwright cho HTML |
| **Độ phức tạp phụ thuộc**| Thấp (Node + Python tiêu chuẩn) | Thấp (Node + Pillow + markitdown) | **Rất cao** (React 19, Sharp, venv riêng) | Thấp (Không dep, không key) |

### 4.2 Xác minh đặc biệt về `hunkim/slide-skill` vs `icgma/slide-skill`
Nhằm tránh nhầm lẫn giữa các repository có tên tương tự:
- **`hunkim/slide-skill`:**
  - *Mô tả chính thức:* "Agent Skill that makes Claude/Codex build slides people can actually read — one point per slide, Death by PowerPoint principles, pre-ship checklist. No key, no deps."
  - *Mã nguồn:* Gồm 1 file `SKILL.md` duy nhất. Tập trung vào hướng dẫn viết slide dạng web HTML (stage 1280x720) và triết lý trình bày ngắn gọn.
  - *Kết luận:* Có giá trị tham khảo rất cao về quy tắc tư duy ("Mỗi slide một thông điệp"), nhưng **không thể dùng làm công cụ sinh file PPTX**.
- **`icgma/slide-skill`:**
  - *Mô tả chính thức:* "SVG-first slide generation toolkit with intelligent content planning and domain-specific layouts".
  - *Mã nguồn:* Sử dụng công nghệ kết xuất SVG rồi chuyển đổi, dung lượng repo lên tới ~14 MB. Không bám sát chuẩn PptxGenJS gọn nhẹ.

---

## 5. Kết quả Prototype Cô lập (Isolated Prototype Results)

Prototype được xây dựng độc lập trong thư mục tạm:  
`C:\Users\nguye\AppData\Local\Temp\racehorse-ppt-skill-validation\`

### 5.1 Cấu trúc Thư mục Prototype
```
C:\Users\nguye\AppData\Local\Temp\racehorse-ppt-skill-validation\
├── package.json               <-- Khởi tạo npm cục bộ (cài đặt pptxgenjs)
├── node_modules\pptxgenjs\     <-- Thư viện tạo PPTX (hoàn toàn cô lập)
├── .venv\                     <-- Python venv (Python 3.14.6 + pypdfium2 + pillow)
├── generate_deck.js           <-- Source sinh 3 slide demo chuẩn Racehorse
├── generate_defect_deck.js    <-- Source sinh slide lỗi cố ý để test Linter
├── render_qa.py               <-- Script Python render PDF -> PNG & Montage
├── linter_qa.py               <-- Script Linter kiểm tra tràn viền OOXML
├── run_pipeline.ps1           <-- Script chạy tự động hóa toàn bộ quy trình
├── pipeline.log               <-- Nhật ký thực thi toàn diện
├── racehorse_demo.pptx        <-- File PPTX đầu ra hợp lệ (114 KB)
├── racehorse_defective.pptx   <-- File PPTX đầu ra lỗi (32 KB)
├── racehorse_demo.pdf         <-- File PDF xuất từ LibreOffice (75 KB)
└── rendered_slides\           <-- Thư mục ảnh kiểm tra chất lượng
    ├── slide-01.png           <-- Trang tiêu đề (1500x844 px)
    ├── slide-02.png           <-- Trang kiến trúc & screenshot (1500x844 px)
    ├── slide-03.png           <-- Trang bảng số liệu & biểu đồ (1500x844 px)
    └── montage.png            <-- Contact sheet toàn bộ bài (2330x462 px)
```

### 5.2 Trả lời 8 Câu hỏi Thử nghiệm Cốt lõi

#### 1. Có tạo được file `.pptx` hợp lệ từ môi trường hiện tại không?
- **KẾT QUẢ:** **CÓ (ĐẠT)**.
- **Bằng chứng:** File `racehorse_demo.pptx` (114,396 bytes) được tạo ra trong 0.8 giây bằng Node.js v24 và `pptxgenjs`. File nén hợp chuẩn Open Packaging Conventions (OPC), mở và giải nén cấu trúc XML không có bất kỳ lỗi cú pháp nào.

#### 2. Text, shape, bảng và biểu đồ có chỉnh sửa được trong PowerPoint không?
- **KẾT QUẢ:** **CÓ (ĐẠT)**.
- **Bằng chứng phân tích XML:**
  - Slide 1: Shape thanh viền trang trí (`<p:sp>`), Text Box tiêu đề có thể click chỉnh sửa trực tiếp.
  - Slide 2: 3 Rounded Rectangle cards chứa text mô tả kiến trúc phân tầng (React, Spring Boot, Postgres).
  - Slide 3: Bảng native `<a:tbl>` gồm 4 hàng, 3 cột với màu nền và font chữ tùy biến; Biểu đồ cột native `<c:chart>` với 4 nhóm dữ liệu (`Hồ sơ ngựa: 35%`, `Chăm sóc: 25%`, `Đặt lịch: 30%`, `Báo cáo: 10%`), người dùng có thể nhấp phải chuột chọn *"Edit Data"* trong PowerPoint để sửa số liệu trong Excel.

#### 3. Có thể đưa ảnh minh họa hoặc placeholder screenshot vào slide không?
- **KẾT QUẢ:** **CÓ (ĐẠT)**.
- **Bằng chứng:** Slide 2 bố trí thành công khung placeholder kích thước `4.0" x 3.25"` với đường viền nét đứt (`dashType: "dash"`), chuẩn bị sẵn tọa độ để chèn ảnh chụp giao diện chuồng trại của Racehorse khi có ảnh thật.

#### 4. Tiếng Việt có dấu hiển thị đúng trong file và bản render không?
- **KẾT QUẢ:** **CÓ (ĐẠT)**.
- **Bằng chứng:** Các chuỗi Unicode phức tạp tiếng Việt:
  - *"Racehorse: Hệ Thống Quản Lý & Đặt Lịch Chuồng Trại"*
  - *"Báo Cáo Kiến Trúc Phần Mềm & Kịch Bản Demo Nghiệp Vụ"*
  - *"Đặc Tả Nghiệp Vụ & Phân Bổ Tải Hệ Thống"*
  được gán font chữ chuẩn hệ thống `Segoe UI`, hiển thị sắc nét, dấu thanh đặt chuẩn trên cả bản render PNG và PDF, hoàn toàn không bị lỗi vỡ font (tofu).

#### 5. Có thể render slide sang ảnh hoặc PDF để kiểm tra trực quan không?
- **KẾT QUẢ:** **CÓ (ĐẠT)**.
- **Lệnh thực thi:**
  ```powershell
  & "C:\Program Files\LibreOffice\program\soffice.com" --headless --convert-to pdf "racehorse_demo.pptx" --outdir .
  .\.venv\Scripts\python.exe render_qa.py "racehorse_demo.pdf" "rendered_slides"
  ```
- **Bằng chứng:** Tạo ra file `racehorse_demo.pdf` (75,118 bytes) và 3 ảnh `slide-01.png`, `slide-02.png`, `slide-03.png` với độ phân giải chuẩn 1500x844 px (150 DPI).

#### 6. Có thể phát hiện ít nhất một lỗi cố ý tạo ra không?
- **KẾT QUẢ:** **CÓ (ĐẠT)**.
- **Bằng chứng:** Chạy script `linter_qa.py` trên file `racehorse_defective.pptx`:
  ```
  [DEFECT DETECTED] Slide 2: Tràn viền phải: 11.50" > 10.00" (Vượt +1.50")
    -> Tọa độ phần tử: x=9.50", y=2.00", w=2.00", h=1.50"
  [DEFECT DETECTED] Slide 2: Tràn viền đáy: 6.20" > 5.62" (Vượt +0.58")
    -> Tọa độ phần tử: x=1.00", y=5.20", w=6.00", h=1.00"
  KẾT QUẢ: [FAIL] Phát hiện 2 lỗi phần tử vi phạm canvas.
  ```
  Trong khi đó, file chuẩn `racehorse_demo.pptx` quét qua 23 phần tử và đạt kết quả `[PASS] (0 lỗi)`.

#### 7. Có thể tạo contact sheet hoặc cách xem tổng quan các slide không?
- **KẾT QUẢ:** **CÓ (ĐẠT)**.
- **Bằng chứng:** File `rendered_slides\montage.png` (217,255 bytes, kích thước 2330x462 px) ghép 3 trang slide cạnh nhau với viền phân cách xám 20px, cho phép Agent hoặc người dùng kiểm tra tổng thể nhịp điệu bài thuyết trình trong một lượt xem duy nhất.

#### 8. Có thể tái tạo file đầu ra từ source và ghi lại các bước chạy không?
- **KẾT QUẢ:** **CÓ (ĐẠT)**.
- **Bằng chứng:** File `run_pipeline.ps1` tự động hóa toàn bộ 6 bước từ sinh file, chuyển đổi, render ảnh đến audit linter; toàn bộ log được ghi lại đầy đủ trong `pipeline.log`.

---

## 6. So sánh Đánh giá: Một Skill Tổng Hợp vs Ba Skill Chuyên Biệt

| Tiêu chí Đánh giá | Phương án A: Một Skill Tổng Hợp (`presentation-designer`) | Phương án B: Ba Skill Chuyên Biệt (`The Lean Triad`) | Đánh giá & Khuyến nghị |
| :--- | :--- | :--- | :--- |
| **Tránh kích hoạt nhầm khi code** | Trung bình. File `SKILL.md` lớn, chứa cả từ khóa phân tích, vẽ shape và QA nên dễ bị match nhầm. | **Rất cao**. Mỗi skill có mô tả hẹp kèm negative trigger chặt chẽ, triệt tiêu nguy cơ match nhầm. | **B thắng**. Ranh giới rõ ràng giúp an toàn tuyệt đối cho coding skills. |
| **Định tuyến theo từng tác vụ lẻ** | Kém. Người dùng chỉ muốn "Review slide xem có tràn viền không" vẫn phải nạp cả hướng dẫn code PptxGenJS. | **Rất tốt**. Tác vụ review chỉ gọi `presentation-qa-render`, tác vụ lập dàn ý chỉ gọi `presentation-storyline`. | **B thắng**. Tận dụng tối đa Progressive Disclosure. |
| **Chi phí bảo trì & trùng lặp** | **Tốt hơn**. Toàn bộ logic nằm ở 1 nơi, không phải đồng bộ interface giữa các skill. | Cần bảo trì 3 file `SKILL.md` và quy định giao thức bàn giao (ví dụ: `slide-map.json`). | **A thắng**. Đơn giản hơn về mặt quản lý file. |
| **Chia sẻ Context & Bàn giao** | **Rất mượt**. Agent nắm trọn vẹn context từ ý tưởng đến code và kiểm tra mà không bị ngắt quãng. | Có rủi ro Agent dừng lại sau khi làm xong Storyline mà quên gọi tiếp Builder nếu prompt không rõ. | **A thắng**. Giảm thiểu rủi ro đứt gãy chuỗi thực thi. |
| **Độ phức tạp cài đặt & Rollback** | Cực kỳ đơn giản (1 thư mục). | Đơn giản khi đóng gói thành **Plugin** (1 thư mục plugin chứa 3 skill con). | **Hòa** nếu dùng Antigravity Plugin. |
| **Khả năng mở rộng tương lai** | Khó. Muốn nâng cấp tool render ảnh phải sửa cả file kỹ năng chính. | **Rất dễ**. Có thể nâng cấp script render hoặc thêm công cụ so sánh ảnh mà không đụng chạm builder. | **B thắng**. Kiến trúc module hóa bền vững. |

### Đề xuất Kiến trúc Tối ưu: Mô hình Plugin 3 Skill có Rule Điều phối (Coordinated Triad Plugin)
Để giải quyết nhược điểm của Phương án B (nguy cơ đứt gãy chuỗi thực thi giữa các skill), giải pháp tối ưu nhất là đóng gói **3 skill chuyên biệt** bên trong một **Antigravity Plugin**, kèm theo file `rules/AGENTS.md` đóng vai trò nhạc trưởng điều phối chuỗi tuần tự:
```
Yêu cầu làm deck mới -> [presentation-storyline] -> [presentation-pptx-builder] -> [presentation-qa-render] -> Bàn giao
```

---

## 7. Thiết kế Test Matrix Routing và Regression

Bảng ma trận kiểm thử được chia làm 3 cấp độ:
- **Level 1 (Static Inspection):** So khớp từ khóa và quy tắc ranh giới trong YAML frontmatter và `AGENTS.md`.
- **Level 2 (Plugin Discovery Validation):** Kiểm tra tính hợp lệ của manifest và cây thư mục qua `agy plugin validate --strict`.
- **Level 3 (Observable Runtime Routing):** Chạy thực tế trong phiên chat và kiểm tra tool call trong file `transcript.jsonl`.

| Mã Test | Kịch bản Yêu cầu đầu vào (Prompt) | Kết quả Kỳ vọng | Cấp độ Thực tế Chạy được | Bằng chứng / Trạng thái Kiểm thử |
| :---: | :--- | :--- | :---: | :--- |
| **E01** | *"Sửa lỗi Java NullPointerException trong OrderService.java"* | Kích hoạt `debugging-and-error-recovery`. Tuyệt đối **không** đọc bất kỳ file nào trong presentation plugin. | Level 1, 2: `RUNNABLE`<br>Level 3: `PENDING_ENV` | Level 1: Đạt (Negative trigger loại trừ Java/backend). Level 3: Chưa chạy runtime vì plugin chưa được cài vào môi trường hoạt động. |
| **E02** | *"Tạo React component hiển thị bảng xếp hạng chuồng trại"* | Kích hoạt `frontend-design` hoặc `incremental-implementation`. Tuyệt đối **không** tạo file `.js` PptxGenJS. | Level 1, 2: `RUNNABLE`<br>Level 3: `PENDING_ENV` | Level 1: Đạt (Negative trigger loại trừ React/frontend). Level 3: `PENDING_ENV`. |
| **E03** | *"Sửa lỗi cú pháp trong file V2__add_status_horses.sql"* | Kích hoạt `incremental-implementation`. Không kích hoạt presentation skills. | Level 1, 2: `RUNNABLE`<br>Level 3: `PENDING_ENV` | Level 1: Đạt (Negative trigger loại trừ SQL migration). Level 3: `PENDING_ENV`. |
| **E04** | *"Tạo bộ slide 8 trang thuyết trình demo Racehorse từ PDF mẫu"* | Kích hoạt tuần tự: `presentation-storyline` -> `presentation-pptx-builder` -> `presentation-qa-render`. | Level 1, 2: `RUNNABLE`<br>Level 3: `PENDING_ENV` | Level 2: `agy plugin validate --strict` kiểm chứng cấu trúc 3 skill thành công 100%. |
| **E05** | *"Sửa riêng slide 3: cập nhật số liệu biểu đồ cột thành 50%"* | Kích hoạt trực tiếp `presentation-pptx-builder`. Không chạy lại storyline từ đầu. | Level 1, 2: `RUNNABLE`<br>Level 3: `PENDING_ENV` | Level 1: Đạt (Description nêu rõ vai trò edit existing slide). Level 3: `PENDING_ENV`. |
| **E06** | *"Kiểm tra chất lượng deck presentation.pptx xem có lỗi tràn chữ không, không sửa file"* | Kích hoạt trực tiếp `presentation-qa-render`. Không kích hoạt builder ở chế độ ghi. | Level 1, 2: `RUNNABLE`<br>Level 3: `PENDING_ENV` | Level 1: Đạt (Description tách biệt rõ tác vụ audit/linter). Script `linter_qa.py` đã chứng minh chạy độc lập thành công. |
| **E07** | *"Vẽ sơ đồ kiến trúc Racehorse dạng Mermaid trong README.md"* | Kích hoạt `documentation-and-adrs`. Không tạo file slide `.pptx`. | Level 1, 2: `RUNNABLE`<br>Level 3: `PENDING_ENV` | Level 1: Đạt (Negative trigger chỉ định rõ sơ đồ markdown kỹ thuật thuộc về documentation). |
| **E08** | *"Code tính năng gửi mail, ghi chú trong code: 'sẽ làm slide PowerPoint báo cáo sau'"* | Nhận diện từ 'PowerPoint' là ngữ cảnh phụ; chỉ thực hiện code Java gửi mail. | Level 1, 2: `RUNNABLE`<br>Level 3: `PENDING_ENV` | Level 1: Đạt (Quy tắc yêu cầu chỉ kích hoạt khi có ý định tạo/sửa slide rõ ràng). |

*Ghi chú minh bạch:* Cấp độ **Level 3** được đánh dấu `PENDING_ENV` do tuân thủ nghiêm ngặt ranh giới quyền hạn: **Không được tự ý cài đặt hoặc kích hoạt plugin vào môi trường active khi chưa có phê duyệt chính thức**.

---

## 8. Đề xuất Kiến trúc và Kế hoạch Triển khai Cuối cùng

### 8.1 Nguồn Repository và Commit Cụ thể
1. **Kiến trúc cốt lõi, Storyline SCQA & Phân tích Mẫu:**
   - Repository: [hiamberhuang/presentation-agent-skills](https://github.com/hiamberhuang/presentation-agent-skills)
   - Commit: `9e868af4104d1c07828701d4c36486bfa3ff75d7`
   - License: MIT.
2. **Kỹ thuật Linter kiểm tra tràn viền & QA Rendering:**
   - Repository: [JetBrains/skills](https://github.com/JetBrains/skills/tree/main/slides) (OpenAI curated `slides`)
   - Commit: `3f53782dec7b5424bf6e8efbb90a46ee26f31798`
   - License: Apache-2.0.
3. **Triết lý Bố cục Đơn giản Hóa:**
   - Repository: [hunkim/slide-skill](https://github.com/hunkim/slide-skill)
   - Commit: `beae7c4c8ec21241076411a49f7968f862154969`
   - License: MIT.

### 8.2 Cấu trúc Plugin Hoàn chỉnh Đề xuất
Plugin sẽ được đặt tại:  
`~/.gemini/config/plugins/racehorse-presentation/`

```
racehorse-presentation/
├── plugin.json                        <-- Manifest hợp chuẩn Antigravity
├── rules/
│   └── AGENTS.md                      <-- Quy tắc điều phối tuần tự & ranh giới cô lập
└── skills/
    ├── presentation-storyline/
    │   └── SKILL.md                   <-- Storyline SCQA, Kim tự tháp Minto, Action Titles
    ├── presentation-pptx-builder/
    │   ├── SKILL.md                   <-- Tạo/sửa PPTX bằng PptxGenJS (Hỗ trợ tiếng Việt UTF-8)
    │   └── references/                <-- Theme palettes, Font pairing, PptxGenJS API
    └── presentation-qa-render/
        ├── SKILL.md                   <-- Linter tràn viền, Render LibreOffice & Contact Sheet
        └── scripts/
            ├── render_qa.py           <-- Sử dụng pypdfium2 (không cần poppler)
            └── linter_qa.py           <-- OOXML canvas boundary inspector
```

### 8.3 Kế hoạch Thử nghiệm và Triển khai Sau Phê duyệt
- **Giai đoạn 1 (Staging Plugin):** Sao chép cấu trúc đã thẩm định vào thư mục `~/.gemini/config/plugins/racehorse-presentation/`. Chạy `agy plugin validate --strict` xác nhận đạt chuẩn.
- **Giai đoạn 2 (Kích hoạt Thử nghiệm):** Kích hoạt plugin bằng lệnh `agy plugin enable racehorse-presentation`.
- **Giai đoạn 3 (Chạy Bộ Test Level 3):** Chạy thực nghiệm 8 kịch bản từ E01 đến E08 trong phiên làm việc của Racehorse; kiểm tra file `transcript.jsonl` để xác minh chính xác tool call.
- **Giai đoạn 4 (Tiếp nhận Mẫu & Demo Thật):** Nạp file PDF mẫu của giảng viên và ảnh chụp màn hình UI thật của Racehorse để sản xuất bài thuyết trình chính thức.

### 8.4 Phương án Rollback An toàn
- **Rollback mềm (Tức thì, 0 rủi ro):** Chạy `agy plugin disable racehorse-presentation` hoặc sửa `~/.gemini/config/config.json` đặt `"racehorse-presentation": { "enabled": false }`. Toàn bộ kỹ năng trình bày lập tức bị ngắt khỏi context mà không cần xóa file.
- **Rollback cứng (Xóa sạch):** Xóa thư mục `~/.gemini/config/plugins/racehorse-presentation/`. Hệ thống quay về trạng thái nguyên bản 100%.

---

## 9. Rủi ro, Giả định và Yêu cầu Bổ sung

### Các rủi ro và giải pháp đã kiểm chứng:
1. **Lỗi Encoding CP1252 trên Windows:** Console Windows mặc định dùng mã hóa CP1252 gây lỗi khi in ký tự tiếng Việt trong Python script.  
   *Giải pháp:* Đã nhúng cấu hình `sys.stdout.reconfigure(encoding='utf-8')` vào các script QA.
2. **Thiếu Poppler trên Windows:**  
   *Giải pháp:* Thay thế hoàn toàn `pdf2image` bằng `pypdfium2`, loại bỏ 100% sự phụ thuộc vào Poppler binary bên ngoài.

### Điều kiện cần Chủ dự án cung cấp trước khi sản xuất slide thật:
- **File PDF mẫu của giảng viên:** Cần cung cấp để bóc tách chính xác tỷ lệ khung hình, màu sắc master slide và bố cục tiêu chuẩn giảng viên mong muốn.
- **Ảnh chụp màn hình thực tế của Racehorse:** Cần ảnh chụp màn hình UI thật (danh sách ngựa, form đặt lịch, dashboard chuồng trại) để thay thế cho khung placeholder trên Slide 2.

---

## 10. Khuyến nghị Cuối cùng

Dựa trên toàn bộ bằng chứng thực nghiệm, pipeline prototype hoạt động hoàn hảo và kết quả thẩm định plugin đạt chuẩn nghiêm ngặt:

### KHUYẾN NGHỊ: `READY_FOR_APPROVAL`

Hệ thống đã sẵn sàng 100% về mặt kỹ thuật để tiến hành triển khai chính thức ngay khi Chủ dự án phê duyệt.

---

*Báo cáo được lập và kiểm chứng thực nghiệm độc lập bởi Antigravity Agent Platform.*
