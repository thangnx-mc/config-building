# BÁO CÁO THỬ NGHIỆM KỸ NĂNG PPT TRÊN CHỦ ĐỀ PHI KỸ THUẬT
## (PPT SKILL CROSS-DOMAIN PILOT — 5-SLIDE CONTROLLED TEST REPORT)

> **Chủ đề thử nghiệm:** “Lập kế hoạch học tập hiệu quả trong một tuần” (Effective Weekly Study Planning)  
> **Đối tượng người nghe:** Sinh viên đại học (University Students)  
> **Repository lưu trữ báo cáo:** `C:\DEV\config-building` (Branch `main`)  
> **Thư mục lưu trữ artifact thử nghiệm:** `C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot\`  
> **Thời điểm thực hiện:** 04/11/2026  
> **Bản chất nhiệm vụ:** Thử nghiệm năng lực có kiểm soát (Controlled Capability Test), không sửa đổi cấu hình hệ thống hay mã nguồn dự án.

---

## 1. TỔNG QUAN VÀ ĐỐI TƯỢNG SỬ DỤNG CÔNG CỤ (SKILLS & SCRIPTS USED)

Thử nghiệm được tiến hành nhằm xác minh xem bộ kỹ năng thuyết trình hiện có trong môi trường staging (`C:\DEV\RACEHORSE-PPT-STAGING\`) có khả năng tạo ra một bài trình chiếu hoàn chỉnh, mạch lạc, dễ đọc trên một chủ đề hoàn toàn không liên quan đến phần mềm hay không, trong khi vẫn kế thừa các nguyên lý thị giác từ slide mẫu của giảng viên.

### 1.1. Các kỹ năng (Skills) tham gia quy trình
1. **`presentation-storyline`** (`skills/presentation-storyline/SKILL.md`): Cung cấp nguyên lý phân cấp cấu trúc thông tin: 1 thông điệp chủ đạo trên mỗi slide (Action Title), đóng gói thông tin vào các khối chứa thị giác (visual containers) và phân đoạn nhịp điệu bài báo cáo.
2. **`presentation-pptx-builder`** (`skills/presentation-pptx-builder/SKILL.md`): Cung cấp tiêu chuẩn kỹ thuật tạo slide qua Node.js/PptxGenJS (tỷ lệ 16:9, font tiếng Việt `Segoe UI`, bảng biểu và hình khối native OOXML, hệ màu Indigo/Navy).
3. **`presentation-qa-render`** (`skills/presentation-qa-render/SKILL.md`): Quy định chu trình kết xuất không đầu (Headless LibreOffice -> PDF -> PNG 150 DPI -> Contact Sheet) và kiểm định chất lượng tự động bằng linter.

### 1.2. Các script và công cụ thực thi
- **Script sinh slide:** `cross_domain_pilot/generate_cross_domain_pilot.js` (Sử dụng thư viện `PptxGenJS` có sẵn trong staging `node_modules`).
- **Script kết xuất hình ảnh & Contact Sheet:** `cross_domain_pilot/render_cross_domain_pilot.py` (Sử dụng `pypdfium2` và `PIL`).
- **Bộ công cụ kiểm định:**
  - `skills/presentation-qa-render/scripts/unified_qa_runner.py` (Điều phối kiểm định thống nhất).
  - `skills/presentation-qa-render/scripts/linter_qa.py` (Kiểm định hình học canvas OOXML).
  - `skills/presentation-qa-render/scripts/semantic_linter.py` (Kiểm định ngữ nghĩa, từ khóa nháp, cỡ chữ và tương phản WCAG AA).
- **Công cụ chuyển đổi tài liệu:** LibreOffice Headless CLI v26.2.4.2 (`soffice.com`).

---

## 2. QUY TRÌNH TÁI LẬP LỆNH THỰC THI (REPRODUCIBLE COMMANDS)

Toàn bộ quy trình được tái lập độc lập bằng các dòng lệnh sau trên môi trường Windows PowerShell:

```powershell
# 1. Sinh file PowerPoint native (5 slides)
node "C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot\generate_cross_domain_pilot.js" `
     "C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot\cross_domain_pilot.pptx"

# 2. Chuyển đổi sang PDF bằng LibreOffice Headless
& "C:\Program Files\LibreOffice\program\soffice.com" --headless --convert-to pdf `
  "C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot\cross_domain_pilot.pptx" `
  --outdir "C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot"

# 3. Kết xuất ảnh PNG 150 DPI từng slide và ghép ảnh Contact Sheet (5x1 grid)
& "C:\Users\nguye\AppData\Local\Temp\racehorse-ppt-skill-validation\.venv\Scripts\python.exe" `
  "C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot\render_cross_domain_pilot.py"

# 4. Chạy kiểm định chất lượng toàn diện (Unified Geometry & Semantic QA)
& "C:\Users\nguye\AppData\Local\Temp\racehorse-ppt-skill-validation\.venv\Scripts\python.exe" `
  "C:\DEV\RACEHORSE-PPT-STAGING\skills\presentation-qa-render\scripts\unified_qa_runner.py" `
  "C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot\cross_domain_pilot.pptx"
```

---

## 3. DANH MỤC TẬP TIN ARTIFACTS ĐÃ TẠO (ARTIFACT PATHS)

Tất cả các sản phẩm của bài thử nghiệm đều được cô lập tuyệt đối bên trong thư mục:
`C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot\`

| Tập tin artifact | Kích thước | Độ phân giải / Quy cách | Mô tả nội dung |
|:---|:---:|:---:|:---|
| `cross_domain_pilot.pptx` | 181,944 bytes | 16:9 ($10.0" \times 5.625"$) | 5 slide PowerPoint OOXML native 100%, có thể chỉnh sửa trực tiếp trên Microsoft PowerPoint. |
| `cross_domain_pilot.pdf` | 173,037 bytes | 5 trang vector | File PDF xuất từ LibreOffice, phục vụ kết xuất ảnh và trình chiếu dự phòng. |
| `cross_domain_pilot_contact_sheet.png` | 322,566 bytes | $2,220 \times 276\text{ px}$ | Ảnh ghép toàn cảnh 5 slide dạng dải ngang (5 cột $\times$ 1 hàng), nền `#F1F5F9`. |
| `slide_01.png` | 148,456 bytes | $1,500 \times 844\text{ px}$ | Bìa & Thông điệp cốt lõi (Nền Indigo tối `#1E1B4B`, hoa văn sóng và bong bóng). |
| `slide_02.png` | 200,687 bytes | $1,500 \times 844\text{ px}$ | Ba cạm bẫy lập kế hoạch (3 thẻ so sánh nguyên nhân & hệ quả thực tế). |
| `slide_03.png` | 216,262 bytes | $1,500 \times 844\text{ px}$ | Quy trình 4 bước thiết lập tuần học tập (Sơ đồ luồng ngang 4 thẻ tiến trình). |
| `slide_04.png` | 197,468 bytes | $1,500 \times 844\text{ px}$ | Ví dụ minh họa thời gian biểu tuần (Bảng native 4 cột $\times$ 4 hàng, có nhãn minh họa). |
| `slide_05.png` | 212,040 bytes | $1,500 \times 844\text{ px}$ | Ba bước hành động & Chìa khóa kỷ luật (3 thẻ hành động + Banner đúc kết). |
| `cross_domain_pilot_qa_report.md` | 4,210 bytes | Markdown | Báo cáo chi tiết các phát hiện từ linter và đánh giá thị giác từng slide. |

---

## 4. KẾT QUẢ KIỂM ĐỊNH KHÁCH QUAN (OBJECTIVE TEST RESULTS)

Kết quả chạy script `unified_qa_runner.py` trên tập tin `cross_domain_pilot.pptx`:

```
================================================================================
UNIFIED PRESENTATION QA AUDIT (GEOMETRY + SEMANTIC LINTER)
Target Deck: C:\DEV\RACEHORSE-PPT-STAGING\cross_domain_pilot\cross_domain_pilot.pptx
================================================================================
1. GEOMETRY DEFECTS: [PASS] 0 lỗi tràn viền/out-of-bounds (Đã quét 131 phần tử)
2. SEMANTIC ERRORS:   [PASS] 0 lỗi placeholder / từ khóa nháp
3. SEMANTIC WARNINGS: 65 cảnh báo cỡ chữ thứ cấp & tương phản màu thẻ nhỏ
4. REVIEW REQUIRED:   2 mục phát hiện ký hiệu tỷ lệ cần con người thẩm duyệt
5. UNSUPPORTED CHECKS: 3 danh mục giới hạn kỹ thuật được ghi nhận minh bạch
--------------------------------------------------------------------------------
KẾT LUẬN TOÀN DIỆN: [PASS QUALITY GATE]
```

### 4.1. Kiểm tra hình học canvas (`linter_qa.py`)
- `[FACT]` Quét thành công **131 phần tử** vector, khối chữ và bảng.
- `[FACT]` **0 lỗi tràn viền phải** ($x + w \le 10.00"$).
- `[FACT]` **0 lỗi tràn viền đáy** ($y + h \le 5.625"$).
- `[FACT]` **0 lỗi tọa độ âm**. Tọa độ x dao động từ $0.8"$ đến $9.2"$, lề an toàn tối thiểu hai bên là $0.8"$.

### 4.2. Kiểm tra ngữ nghĩa (`semantic_linter.py`)
- `[FACT]` **0 lỗi placeholder/nháp (`SEMANTIC_ERROR`):** Không có bất kỳ chuỗi `TODO`, `DRAFT`, `TBD`, `[KHUNG...]`, `Chờ cập nhật`.
- `[FACT]` **65 cảnh báo định dạng (`SEMANTIC_WARNING`):**
  - Cỡ chữ $9.5\text{ pt}$ xuất hiện trên các huy hiệu (Badge/Pill) nhỏ như `"KỸ NĂNG SINH VIÊN"`, `"CẠM BẪY 01"`, `"BƯỚC 01"`. Đây là cỡ chữ có chủ đích cho nhãn phụ, nằm trên ngưỡng nguy hiểm ($8.0\text{ pt}$).
  - Tỷ lệ tương phản $3.08:1$ trên huy hiệu Cạm bẫy 01 (chữ đỏ `#EF4444` trên nền hồng nhạt `#FEE2E2`).
- `[FACT]` **2 mục cần thẩm định nguồn (`REVIEW_REQUIRED`):**
  1. Slide 2: Chuỗi `"100%"` trong câu `"Lên lịch kín 100% các giờ trống trong ngày..."`.
  2. Slide 5: Chuỗi `"80%"` trong câu `"Nếu hoàn thành được 80% kế hoạch đề ra..."`.
  - `[INFERENCE]` Đây là hai trường hợp False Positive đã được dự liệu trước. Regex của linter bắt tất cả các ký tự `%` để chống số liệu bịa đặt. Linter đã thực hiện đúng chức năng: gắn cờ `REVIEW_REQUIRED` để người dùng thẩm duyệt chứ không tự tiện coi là số liệu giả.

---

## 5. ĐÁNH GIÁ THỊ GIÁC VÀ BỐ CỤC (VISUAL REVIEW FINDINGS)

Đánh giá dựa trên việc quan sát trực tiếp 5 slide PNG kích thước lớn ($1500 \times 844\text{ px}$) và Contact Sheet:

1. **Phân cấp kiểu chữ (Typographic Hierarchy):**
   - Tiêu đề slide (Action Title) dùng cỡ chữ $20\text{ pt} - 26\text{ pt}$ in đậm, màu đen than `#1E293B` hoặc trắng `#FFFFFF`, truyền tải ngay thông điệp chính.
   - Thẻ chủ đề (Academic Tag Pill) đặt góc trên bên trái cỡ $9.5\text{ pt}$ in hoa, tạo điểm tựa thị giác chuẩn mực.
   - Nội dung thân bài trong thẻ dùng cỡ $10\text{ pt} - 10.5\text{ pt}$, giãn dòng rộng rãi, không bị dính chữ.
2. **Khoảng cách và sự nhất quán (Spacing & Alignment):**
   - Tất cả các slide đều tuân thủ lề trái chuẩn $0.8"$, lề trên $0.35"$, độ rộng khối nội dung chính $8.4"$.
   - Các thẻ đa cột (3 cột ở Slide 2 & 5; 4 cột ở Slide 3) có khoảng cách cột đều đặn từ $0.15"$ đến $0.25"$, bán kính bo góc đồng nhất $0.18" - 0.2"$.
3. **Bảng màu kiềm chế (Restrained Color Palette):**
   - Kế thừa thành công hệ màu chàm/tím xanh của đồ án mẫu FPT: Indigo `#4F46E5`, Dark Navy `#1E1B4B`, Slate `#1E293B`, Nền xám nhạt `#F8FAFC`.
   - Chỉ dùng màu nhấn chức năng khi có mục đích: Đỏ `#EF4444` cho cảnh báo, Hổ phách `#D97706` cho lưu ý, Xanh lá `#059669` cho bước thực hành.
4. **Cấu trúc chứa thông tin (Cards & Containers):**
   - Slide 2 trình bày 3 cạm bẫy dưới dạng 3 thẻ so sánh trực quan Nguyên nhân $\rightarrow$ Hệ quả.
   - Slide 3 mô phỏng quy trình 4 bước nằm ngang liền mạch bằng các thẻ bước có mã màu riêng biệt.
   - Slide 4 sử dụng bảng bản địa (Native Table) 4 cột $\times$ 4 hàng với dòng tiêu đề màu tối sang trọng, kèm huy hiệu nổi bật ghi rõ: `"VÍ DỤ MINH HỌA THAM KHẢO · KHÔNG PHẢI QUY ĐỊNH BẮT BUỘC HAY SỐ LIỆU ĐO LƯỜNG THỰC NGHIỆM"`.
   - Slide 5 kết thúc bằng 3 thẻ hành động cụ thể và một banner chân trang truyền cảm hứng.
5. **Khả năng đọc ở kích thước trình chiếu (Readability):**
   - Không xuất hiện tình trạng co chữ, tràn dòng ngoài khung thẻ hoặc chồng lấn văn bản. Dấu tiếng Việt hiển thị hoàn hảo nhờ font hệ thống `Segoe UI`.

---

## 6. CAN THIỆP THỦ CÔNG & TRI THỨC NGOÀI SKILL (MANUAL INTERVENTIONS)

Trong quá trình thực hiện bài thử nghiệm, những điểm sau đã đòi hỏi sự can thiệp và tri thức chưa được mã hóa đầy đủ trong các file skill:

1. **Thích ứng cấu trúc bài thuyết trình (Storyline Adaptation):**
   - `[FACT]` File `skills/presentation-storyline/SKILL.md` mặc định cứng một khung bảo vệ đồ án phần mềm 5 phần: *Project Intro -> System Architecture & Data Model -> RBAC -> Core Business Flows & UI Placeholders -> Summary & Q&A*.
   - `[OBSERVATION]` Khung này không thể áp dụng cho đề tài kỹ năng sinh viên phi kỹ thuật.
   - `[MANUAL STEP]` Người thực hiện phải tự ánh xạ các nguyên lý tư duy cấp cao (Action Title, đóng gói thông tin vào Card, quy trình ngang) sang cấu trúc bài giảng thông thường: *Thông điệp cốt lõi -> Thực trạng & Cạm bẫy -> Khung phương pháp 4 bước -> Thời khóa biểu minh họa -> Bước hành động cụ thể*.
2. **Kỹ thuật sinh bảng native trong PptxGenJS:**
   - `[FACT]` File `presentation-pptx-builder/SKILL.md` chỉ ghi chung chung `slide.addTable()`.
   - `[MANUAL STEP]` Cần phải cấu hình thủ công mảng `colW: [1.6, 2.26, 2.26, 2.28]`, định dạng màu nền từng ô `fill`, căn lề `align: "center"` và viền `border: { pt: 1, color: "CBD5E1" }` trong script Node.js.
3. **Phân định rõ ràng bản chất minh họa (Disclaimers):**
   - `[MANUAL STEP]` Chủ động bổ sung huy hiệu cảnh báo trên Slide 4 để tránh việc linter hoặc người đọc hiểu nhầm đây là số liệu thống kê nghiên cứu xã hội học.

---

## 7. BẰNG CHỨNG VỀ CÁC GIẢ ĐỊNH ĐẶC THÙ NGÀNH (DOMAIN-SPECIFIC ASSUMPTIONS)

Khi kiểm tra lại mã nguồn và tài liệu của bộ 3 skill trong staging, các giả định mang tính phụ thuộc chặt chẽ vào mảng kỹ thuật phần mềm đã được phát hiện cụ thể:

1. **Trong `skills/presentation-storyline/SKILL.md`:**
   - Dòng 4: `"Plan, structure, and architect decision-ready presentation storylines and slide maps for software demos."` (Chỉ định rõ cho demo phần mềm).
   - Dòng 14: `"Only include claims that exist in real project code, database schemas, or verified business specifications."` (Giả định luôn có source code và DB schema để đối chiếu).
   - Dòng 16-21: Khung 5 phần chứa các khái niệm chuyên ngành sâu: `System Architecture`, `Data Model`, `RBAC`, `UI placeholders`.
2. **Trong `rules/AGENTS.md`:**
   - Dòng 20: `"Đối chiếu bằng chứng từ tài liệu và mã nguồn thật của Racehorse."` (Gắn chặt với tên dự án Racehorse).
3. **Trong `plugin.json`:**
   - Tên gói được định danh là `"racehorse-presentation-suite"`.

---

## 8. KẾT LUẬN VỀ KHẢ NĂNG TÁI SỬ DỤNG ĐA MIỀN (REUSE VERIFICATION STATUS)

Dựa trên bằng chứng thực nghiệm thu thập được từ đợt kiểm thử:

| Phân hệ / Khía cạnh | Trạng thái xác minh | Căn cứ thực nghiệm |
|:---|:---:|:---|
| **Pipeline Kỹ thuật & Render** (PptxGenJS + Headless LibreOffice + pypdfium2 + PIL) | `VERIFIED` | Hoạt động trơn tru 100% trên đề tài phi kỹ thuật. Sinh file PPTX 182 KB, PDF 173 KB, 5 ảnh slide PNG 150 DPI và Contact Sheet sắc nét mà không gặp bất kỳ lỗi runtime nào. |
| **Công cụ Kiểm định Hình học** (`linter_qa.py`) | `VERIFIED` | Quét chính xác 131 phần tử, xác nhận 0 lỗi tràn viền, áp dụng hiệu quả cho mọi chủ đề không phụ thuộc nội dung. |
| **Công cụ Kiểm định Ngữ nghĩa** (`semantic_linter.py`) | `PARTIALLY VERIFIED` | Bắt tốt các từ khóa nháp, cỡ chữ nhỏ và tương phản WCAG; tuy nhiên regex bắt tỷ lệ `%` gây ra 2 False Positives do chưa phân biệt được ngữ cảnh đời thường với số liệu phần mềm. |
| **Kỹ năng Cấu trúc Dàn ý** (`presentation-storyline`) | `PARTIALLY VERIFIED` | Các nguyên tắc trình bày thị giác (Action Title, Card-based UI, Horizontal Flow) chuyển giao xuất sắc sang đề tài mới; tuy nhiên tài liệu hướng dẫn (`SKILL.md`) hiện đang bị trói chặt vào khung phần mềm (Architecture, RBAC, Code). |
| **Khả năng tự động hóa không cần con người hướng dẫn (Zero-intervention)** | `UNVERIFIED` | Nếu một agent mới tiếp nhận yêu cầu đề tài đời thường mà chỉ đọc duy nhất 3 file `SKILL.md` hiện tại, agent đó sẽ bối rối do xung đột giữa đề tài người dùng yêu cầu với các ràng buộc về Architecture/RBAC trong hướng dẫn. |

---

## 9. KHUYẾN NGHỊ ĐIỀU CHỈNH KỸ NĂNG (RECOMMENDATIONS)

1. **Đối với dự án Racehorse hiện tại:**
   - Giữ nguyên toàn bộ cấu hình và script trong `C:\DEV\RACEHORSE-PPT-STAGING\`. Bộ công cụ đã đáp ứng hoàn hảo cho mục tiêu đồ án tốt nghiệp Racehorse.
2. **Đối với định hướng xây dựng bộ PPT Skill dùng chung (General-Purpose Suite):**
   - **Tách tầng Storyline thành 2 cấp độ:**
     - *Cấp độ 1 (Core Foundation):* Hướng dẫn nguyên lý tổng quát (Tiêu đề hành động, Thẻ trực quan, Quy trình ngang, Bảng biểu so sánh, Nhịp điệu chuyển tiếp).
     - *Cấp độ 2 (Domain Extensions):* Tách các mẫu chuyên biệt (Software Defense Deck, Pitch Deck Kinh doanh, Bài giảng Kỹ năng mềm) thành các tài liệu tham chiếu (`references/software_deck.md`, `references/educational_deck.md`).
   - **Tối ưu hóa Semantic Linter:** Bổ sung ngoại lệ phân tích ngữ cảnh cho các con số phần trăm mang tính định hướng tư duy hoặc câu điều kiện thông thường, giúp giảm bớt cảnh báo không cần thiết.
