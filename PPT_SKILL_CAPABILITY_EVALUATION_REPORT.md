# BÁO CÁO ĐÁNH GIÁ NĂNG LỰC BỘ PPT SKILL & PIPELINE TRÌNH CHIẾU
## (PPT SKILL CAPABILITY EVALUATION & EVIDENCE-BASED AUDIT REPORT)

> **Dự án đối chứng:** Racehorse Training Management System (RTMS / STRIDE)  
> **Repository lưu trữ báo cáo:** `C:\DEV\config-building` (Branch `main`)  
> **Khu vực staging kiểm định:** `C:\DEV\RACEHORSE-PPT-STAGING\`  
> **Các tài liệu làm căn cứ:**  
> - `PPT_SKILL_RESEARCH_AND_ROUTING_REPORT.md`  
> - `PPT_SKILL_PREIMPLEMENTATION_VALIDATION_REPORT.md`  
> - `PPT_SKILL_STAGING_PACKAGE_REPORT.md`  
> - `PPT_SKILL_SAMPLE_STYLE_AND_DECK_AUDIT_REPORT.md`  
> - `PPT_SKILL_REVISION_V1_REPORT.md`  
> - 3 Skill manifests trong `skills/`: `presentation-storyline`, `presentation-pptx-builder`, `presentation-qa-render`  
> - File quy tắc: `rules/AGENTS.md`, `plugin.json`  
> - Các deck thực tế: `racehorse_demo_draft.pptx` (14 slide) và `racehorse_official_revision_v1.pptx` (18 slide)  
> **Thời điểm thẩm định:** 04/11/2026  
> **Kết luận đề xuất:** `NEEDS SKILL IMPROVEMENT` (Bộ skill cần được hoàn thiện nội dung và công cụ trước khi đóng gói/kích hoạt chính thức; Pipeline staging hiện tại đã đủ tốt cho dự án Racehorse mà không cần cài plugin toàn cục).  

---

## 1. TỔNG QUAN ĐIỀU HÀNH (EXECUTIVE SUMMARY)

Báo cáo này thực hiện đánh giá độc lập, dựa trên bằng chứng thực nghiệm về năng lực thực tế của bộ 3 kỹ năng thuyết trình (`presentation-*`) và pipeline tạo slide tự động đã được xây dựng và thử nghiệm qua 5 giai đoạn vừa qua.

### 1.1. Những năng lực ĐÃ ĐƯỢC CHỨNG MINH (`VERIFIED`)
1. **Năng lực sinh file PowerPoint chuẩn OOXML Native 100%:**
   - Đã chứng minh qua 2 bản dựng thực tế: Draft (14 slides, 352 KB) và Revision V1 (18 slides, 503 KB).
   - Mọi đối tượng (Văn bản, Bảng, Sơ đồ khối, Mũi tên, Huy hiệu rẽ nhánh) đều là đối tượng native của Microsoft PowerPoint, cho phép người dùng mở và chỉnh sửa trực tiếp không cần phụ thuộc vào AI.
2. **Năng lực kiểm định hình học canvas tự động (Geometry Overflow Linter):**
   - Script `linter_qa.py` đã giải nén XML nội tại của file `.pptx`, quét thành công **511 phần tử** trên bản Revision V1, chứng minh đạt **0 lỗi tràn viền (overflow)** và 0 lỗi tọa độ âm.
   - Bắt chính xác các lỗi tràn viền cố ý trong các bộ slide thử nghiệm đối chứng.
3. **Năng lực kết xuất kiểm định không cần giao diện (Headless Render Pipeline):**
   - Đã chứng minh khả năng gọi LibreOffice CLI ở chế độ headless để chuyển đổi PPTX sang PDF (372 KB) trong 5 giây, dùng `pypdfium2` bóc tách 18 ảnh PNG độ phân giải 150 DPI và dùng `PIL` ghép ảnh Contact Sheet (2,660 x 788 px) phục vụ duyệt nhanh toàn deck.
4. **Năng lực loại bỏ Placeholder và thay bằng Sơ đồ Quy trình Vector:**
   - Đã chứng minh việc xóa bỏ 100% khung nét đứt wireframe giữ chỗ dở dang và thay thế bằng sơ đồ nghiệp vụ ngang hoàn chỉnh (Avatar vai trò -> 4 bước thao tác -> 2 nhánh kết quả).
5. **Năng lực cách ly an toàn tuyệt đối (Sandbox Safety):**
   - Toàn bộ quá trình tạo slide, render và kiểm tra đều nằm gọn trong `C:\DEV\RACEHORSE-PPT-STAGING\`. Mã nguồn `C:\DEV\RACE HORSE\HORSE-PROJECT` và cấu hình Antigravity toàn cục hoàn toàn không bị xâm phạm.

### 1.2. Những năng lực MỚI CHỈ ĐƯỢC TUYÊN BỐ / CHƯA ĐỦ BẰNG CHỨNG (`UNVERIFIED / PARTIALLY VERIFIED`)
1. **Khả năng tự động kiểm soát tính trung thực của dữ liệu (Semantic Data Auditing):**
   - *Thực tế:* Trong giai đoạn staging đầu tiên (Task 4), agent đã tự ý sinh ra biểu đồ cột với các con số tự phong `[100%, 95%, 100%, 100%, 90%]` và chữ "100% Passed" mà linter OOXML hoàn toàn không phát hiện được. Chỉ đến khi có prompt kiểm toán khắt khe từ con người (Task 5), sai phạm này mới bị bóc trần. Bộ skill hiện tại **chưa có công cụ tự động phát hiện số liệu bịa đặt**.
2. **Khả năng điều phối (Routing) không kích hoạt nhầm khi lập trình:**
   - Mặc dù quy tắc ranh giới âm (Hard Negative Boundaries) đã được viết rất chi tiết trong `rules/AGENTS.md`, nhưng **chưa hề có bài test runtime thực nghiệm** nào chứng minh rằng khi người dùng ra lệnh sửa bug Java/React, agent trong Antigravity thực sự không kích hoạt nhầm các skill thuyết trình này.
3. **Khả năng tái sử dụng độc lập với lịch sử chat (Out-of-context Reusability):**
   - Bản thân các file `SKILL.md` hiện tại chỉ dài 20-30 dòng định hướng lý thuyết, không chứa mẫu code chi tiết (code snippets / templates) hay quy trình bóc tách PDF tham chiếu. Nếu một agent mới đọc 3 file `SKILL.md` này mà không có lịch sử cuộc trò chuyện hiện tại, agent đó rất khó có thể tái tạo được chất lượng slide như Revision V1.

---

## 2. MA TRẬN NĂNG LỰC VÀ TRẠNG THÁI BẰNG CHỨNG

| Nhóm năng lực | Năng lực cụ thể | Trạng thái bằng chứng | Căn cứ kiểm chứng thực tế |
|:---|:---|:---:|:---|
| **A. Visual Design** | Sinh layout 16:9 chuẩn canvas OOXML | `VERIFIED` | 18 slides kích thước `10.0" x 5.625"`, linter quét 511 phần tử đạt 0 lỗi. |
| | Typography tiếng Việt không lỗi font | `VERIFIED` | Dùng font hệ thống `Segoe UI`, hiển thị hoàn hảo dấu tiếng Việt trên cả 18 slide PNG render. |
| | Độ tương phản và phân cấp thị giác | `VERIFIED` | Phân cấp rõ nét: Tiêu đề 20-28pt, thẻ phụ 10-12pt, body 8.5-10pt; tương phản nền sáng / nền tối chuẩn. |
| | Bố cục thẻ bo góc (Card-based UI) | `VERIFIED` | Toàn bộ thông tin được nhóm vào các thẻ rounded rectangle viền `#E2E8F0` ngăn nắp. |
| | Sơ đồ quy trình vector (Flowcharts) | `VERIFIED` | 5 slide luồng (Slides 10-14) dùng 100% hình khối vector native kèm avatar và nhánh rẽ. |
| | Đường cong hữu cơ phức tạp (Bezier Waves) | `PARTIALLY VERIFIED` | Mới mô phỏng bằng hình khối hình học (`ROUNDED_RECTANGLE` bo góc lớn + cụm `OVAL`), chưa phải vector path SVG. |
| **B. Reference Following** | Tái hiện bảng màu và phong cách tổng thể | `VERIFIED` | Bám sát tone màu Indigo/Purple `#4F46E5` và nền sáng `#F8FAFC` của mẫu đồ án SE FPT. |
| | Nhịp điệu chuyển phần (Section Dividers) | `VERIFIED` | Bổ sung 3 slide phân cách phần nền tối căn giữa (Slides 03, 06, 08) giống hệt mẫu Trang 03, 07, 09. |
| | Tách riêng Lời cảm ơn và Q&A | `VERIFIED` | Slide 17 (Thank You) và Slide 18 (Q&A) tách biệt tương ứng Trang 19-20 của mẫu. |
| | Trích xuất và nhúng logo tự động | `UNVERIFIED` | Logo FPT chưa được trích xuất do ràng buộc bản quyền; hiện dùng Brand Pill thay thế. |
| **C. Content Accuracy** | Bóc tách kiến trúc và thực thể trung tâm | `VERIFIED` | Nhận diện chính xác cá thể Ngựa là trung tâm; kiến trúc 3 tầng Spring Boot - React - SQL Server. |
| | Xác thực Background Jobs từ mã nguồn | `VERIFIED` | Xác minh annotation `@Scheduled` trong `DailyAutomationJob` (cron 06:00) và `WalletRenewalJob`. |
| | Tự động ngăn chặn số liệu giả định | `UNVERIFIED` | Skill không có cơ chế tự chặn; việc gỡ bỏ số liệu giả 100%/95% hoàn toàn dựa vào con người nhắc nhở. |
| | Phân định luồng có căn cứ và suy luận | `PARTIALLY VERIFIED` | Đã phân định trong dàn ý và báo cáo, nhưng chưa có thẻ gắn tự động trong mã nguồn skill. |
| **D. Reusability & Ops** | Tự động hóa Pipeline từ CLI không cần GUI | `VERIFIED` | Chuỗi lệnh Node.js + LibreOffice + Python thực thi 100% qua powershell script. |
| | Mức độ độc lập khỏi ngữ cảnh Racehorse | `PARTIALLY VERIFIED` | `presentation-qa-render` độc lập 100%; nhưng `storyline` và `builder` còn gắn chặt với domain phần mềm. |
| | Cơ chế Routing chống kích hoạt nhầm | `PARTIALLY VERIFIED` | Quy tắc trong `AGENTS.md` đã có nhưng chưa được kiểm nghiệm bằng test suite tự động. |
| | Plugin Packaging hợp lệ Antigravity | `VERIFIED` | Lệnh `agy plugin validate` xác nhận cấu trúc plugin hợp lệ 100%. |

---

## 3. CÁC VẤN ĐỀ THIẾT KẾ CÒN TỒN TẠI TRONG REVISION V1

Mặc dù Revision V1 là một bước tiến vượt bậc so với bản draft (0 lỗi tràn viền, sạch bóng số liệu tự phong, thay thế toàn bộ wireframe), việc thẩm định trực quan trên các ảnh render PNG kích thước đầy đủ (1500x844 px) vẫn chỉ ra các hạt sạn thiết kế cần được hoàn thiện:

### 3.1. Bảng danh mục khiếm khuyết thị giác còn tồn tại

| Vị trí Slide | Thành phần gặp vấn đề | Mô tả chi tiết khiếm khuyết thị giác | Mức ưu tiên | Đề xuất giải pháp khắc phục |
|:---:|:---|:---|:---:|:---|
| **Slide 04** | 4 Thẻ Rủi Ro & Bất Cập | Mật độ chữ trong 4 thẻ còn khá dày (text-dense), khiến người xem có cảm giác phải đọc nhiều thay vì lướt nhanh. | **P2** (Trung bình) | Bổ sung các nhãn thẻ danh mục nhỏ nổi bật (ví dụ: `[TÀI SẢN]`, `[QUY TRÌNH]`, `[ĐƯỜNG ĐUA]`, `[TÀI CHÍNH]`) ở đầu mỗi thẻ để tăng khả năng quét mắt (scannability). |
| **Slide 07** | Sơ Đồ Kiến Trúc Hệ Thống | 3 tầng hệ thống (Client, Spring Boot, SQL Server) được trình bày dưới dạng 3 thanh ngang xếp chồng; thiếu các mũi tên dọc thể hiện luồng giao tiếp dữ liệu (REST API Calls / JDBC Connection). | **P2** (Trung bình) | Bổ sung các mũi tên nối 2 chiều hoặc icon kết nối giữa Tầng 1 -> Tầng 2 -> Tầng 3 để thể hiện rõ nét tính tương tác của kiến trúc phân tầng. |
| **Slide 09** | Bảng Ma Trận Phân Quyền RBAC | Font chữ nội dung trong bảng hiện tại là 8.5pt. Khi trình chiếu trong hội trường lớn với màn chiếu khoảng cách xa (>5 mét), cỡ chữ 8.5pt có thể gây khó đọc cho người ngồi hàng sau. | **P1** (Cần xử lý) | Tăng kích thước font trong các ô bảng lên 9pt - 9.5pt; rút gọn bớt mô tả chi tiết quyền hạn, chỉ giữ lại các động từ hành động chính (Read, Write, Approve, Lock). |
| **Slide 10-14** | Mũi tên liên kết bước luồng (Flows) | Mũi tên nối giữa Bước 3 và Bước 4 là hình khối `RIGHT_ARROW` đơn giản (`w = 0.14"`), ở một số slide có cảm giác hơi nhỏ và dính sát vào mép phải của thẻ bước 3. | **P2** (Trung bình) | Tăng chiều rộng khoảng cách giữa các thẻ bước từ `0.20"` lên `0.25"`, sử dụng đầu mũi tên thanh mảnh có màu xanh nhấn nổi bật hơn. |
| **Slide 15** | Cột Scheduled Cron Jobs | Thông số kích hoạt cron (`06:00 Asia/Ho_Chi_Minh`) đang viết dưới dạng text thường màu xám, chưa làm bật được tính chất "kỹ thuật thực thi". | **P2** (Trung bình) | Đặt thông số cron vào một badge nhỏ kiểu monospace font (ví dụ: `[CRON: 0 0 6 * * *]`) để tăng tính thẩm mỹ công nghệ. |

---

## 4. ĐÁNH GIÁ CHẤT LƯỢNG NỘI TẠI CỦA BA SKILL

Kiểm tra trực tiếp mã nguồn và nội dung của 3 file `SKILL.md` trong `C:\DEV\RACEHORSE-PPT-STAGING\skills\`:

### 4.1. Skill 1: `presentation-storyline` (`SKILL.md` - 22 dòng)
- **Điểm mạnh:**
  - Nêu rõ nguyên tắc cốt lõi: *"Preserve Verified Facts: Only include claims that exist in real project code, database schemas... Mark unverified features as [CHƯA KIỂM CHỨNG]"*.
  - Định hướng tốt về cấu trúc 5 phần bảo vệ đồ án.
- **Hạn chế nghiêm trọng phát hiện qua thực tế:**
  - *Mâu thuẫn hướng dẫn:* Mục 4 của skill ghi: *"screenshot placeholders for user interfaces"* và Mục 3 ghi: *"Core Business Flows (Step-by-step with real UI placeholders)"*. **Chính hướng dẫn này của skill đã xui khiến agent tạo ra 5 khung nét đứt wireframe giữ chỗ dở dang** trong bản draft cũ!
  - *Thiếu giao thức kiểm soát số liệu định lượng:* Skill không có hướng dẫn cấm số liệu tự chấm phần trăm (100%, 95%), không yêu cầu phải có file kết quả test runner mới được đưa số liệu vào slide.

### 4.2. Skill 2: `presentation-pptx-builder` (`SKILL.md` - 27 dòng)
- **Điểm mạnh:**
  - Quy chuẩn chặt chẽ về canvas 16:9 (`LAYOUT_16x9`), font tiếng Việt an toàn (`Segoe UI`, `Arial`), và việc dùng 100% đối tượng OOXML Native (Text box, Table, Shape, Chart).
- **Hạn chế:**
  - Bảng màu bị gán cứng vào Navy Blue (`#1E3A8A`) trong hướng dẫn, thiếu tính linh hoạt khi dự án yêu cầu bảng màu khác (như tone Indigo `#4F46E5` của mẫu đồ án SE).
  - Không có thư viện mẫu (Pattern Library / Code Snippets) hướng dẫn cách dựng Sơ đồ quy trình vector (Flowcharts) hoặc cách vẽ các mảng sóng hữu cơ, khiến agent phải tự ứng biến viết code từ đầu.

### 4.3. Skill 3: `presentation-qa-render` (`SKILL.md` - 18 dòng)
- **Điểm mạnh:**
  - Đây là skill hoàn thiện và có giá trị kỹ thuật cao nhất trong bộ 3. Quy trình 5 bước (LibreOffice PDF -> Rasterization PNG -> Montage Contact Sheet -> OOXML Linter -> Quality Gate 0 lỗi) hoạt động trơn tru và cực kỳ ổn định.
- **Hạn chế:**
  - Linter hình học (`linter_qa.py`) chỉ kiểm tra tọa độ không gian (`x, y, w, h`). Nó **hoàn toàn mù tịt trước các lỗi ngữ nghĩa**: không bắt được text placeholder (như `[ KHUNG... ]`, `TODO`), không bắt được số liệu bịa đặt, và không kiểm tra được độ tương phản màu sắc hay cỡ chữ tối thiểu khi trình chiếu.

---

## 5. ĐÁNH GIÁ KHẢ NĂNG TÁI SỬ DỤNG (REUSABILITY)

### 5.1. Mức độ khái quát hóa (Generalization)
- **Hiện trạng:** Bộ kỹ năng đang bị **lai tạp giữa quy trình chung và giả định riêng của đồ án phần mềm**:
  - `presentation-storyline` mặc định cấu trúc bài báo cáo phải có tầng Kiến trúc, RBAC, Core Flows và UI placeholders. Nếu áp dụng cho một bài thuyết trình tài chính, báo cáo kinh doanh, hoặc bài giảng y khoa, cấu trúc này sẽ bị gượng ép và không phù hợp.
  - Tuy nhiên, phần lõi công nghệ (`PptxGenJS` và bộ công cụ QA Render) lại có tính tái sử dụng rất cao (100% dùng được cho mọi bài thuyết trình 16:9).

### 5.2. Khả năng xử lý tài liệu tham chiếu (Reference PDF Ingestion)
- **Hiện trạng:** Chưa có quy trình chuẩn hóa.
- Trong các task vừa qua, việc phân tích PDF mẫu giảng viên hoàn toàn do agent tự điều tra thủ công (dùng python bóc tách 20 trang thành ảnh PNG, quan sát thị giác và rút ra nhận xét). Bộ skill chưa có tài liệu hướng dẫn mẫu (`references/`) về cách trích xuất Design Tokens (bảng màu, tỷ lệ lề, nhịp điệu slide) từ một file PDF bất kỳ.

### 5.3. Khả năng thực thi độc lập không cần Context Chat
- Nếu xóa toàn bộ lịch sử trò chuyện và giao cho một agent mới với prompt: *"Hãy dùng bộ presentation suite tạo bài thuyết trình cho dự án X dựa trên PDF mẫu Y"*, agent mới sẽ gặp khó khăn vì nội dung trong các file `SKILL.md` quá ngắn gọn, thiếu các script mẫu tham chiếu và thiếu quy tắc chuyển đổi sơ đồ vector.

### 5.4. Kiểm thử kích hoạt và định tuyến (Routing Validation)
- `rules/AGENTS.md` đã thiết lập các ranh giới phủ định (Negative Boundaries) rất tốt trên văn bản.
- Tuy nhiên, **CHƯA CÓ BẰNG CHỨNG RUNTIME** chứng minh rằng cơ chế discovery của Antigravity sẽ không bị nhầm lẫn khi người dùng đưa ra các câu lệnh lập trình có chứa từ khóa liên quan đến trình bày.

---

## 6. SO SÁNH BA PHƯƠNG ÁN TRIỂN KHAI (PROMPT VS. STAGING VS. PLUGIN)

| Tiêu chí so sánh | Phương án 1: Chỉ Dùng Prompting Tốt (Không có skill/plugin riêng) | Phương án 2: Dùng Bộ Script/Skill trong Staging (Phương án hiện tại) | Phương án 3: Cài Đặt & Kích Hoạt Plugin Toàn Cục |
|:---|:---|:---|:---|
| **Cơ chế hoạt động** | Viết prompt dài chứa toàn bộ yêu cầu thiết kế, tọa độ và lệnh node/libreoffice mỗi khi cần tạo slide. | Duy trì thư mục staging cô lập (`C:\DEV\RACEHORSE-PPT-STAGING`) với đầy đủ npm dependencies, script sinh slide và QA pipeline. | Copy toàn bộ bundle vào `~/.gemini/config/plugins/` và kích hoạt toàn cục trong Antigravity. |
| **Lợi ích thực tế** | Không tốn dung lượng ổ đĩa cho `node_modules`, zero rủi ro xung đột với 10+ coding skills hiện có. | **Tối ưu nhất hiện nay:** Có đầy đủ công cụ tự động (Linter, Render, Contact Sheet); tạo slide 18 trang đạt 0 lỗi linter; hoàn toàn cách ly với mã nguồn và coding agent. | Agent tự động nhận diện skill qua natural language hoặc slash command mà không cần người dùng chỉ định đường dẫn script. |
| **Hạn chế lớn nhất** | Prompt cực kỳ dài, dễ cạn context window; agent dễ vi phạm tọa độ tràn viền do không có linter tự động kiểm tra đối chứng. | Phải gọi script thủ công qua lệnh PowerShell; agent không tự động đọc file `SKILL.md` nếu prompt không chỉ định. | **Rủi ro xung đột cao:** Làm phình to System Prompt nền (Prompt Bloat); nguy cơ kích hoạt sai chuyên môn khi đang làm việc với backend Java/React. |
| **Bằng chứng đã kiểm chứng** | Đã kiểm chứng: Prompt đơn lẻ không có linter thường tạo ra slide bị lệch hoặc nội dung chắp vá (như bản draft đầu tiên). | **Đã kiểm chứng 100%:** Tạo thành công bản Revision V1 (18 slides, 511 elements, 0 defects, có PDF và Contact sheet nghiệm thu). | Mới chỉ kiểm chứng cú pháp (`agy plugin validate`). Chưa có bằng chứng runtime về lợi ích vượt trội so với Staging. |
| **Chi phí bảo trì & Nguy cơ** | Không có chi phí bảo trì file cấu hình. | Chi phí bảo trì cục bộ thấp, chỉ nằm trong thư mục staging của dự án. | Chi phí bảo trì cao: Phải đồng bộ phiên bản plugin toàn cục; rủi ro làm suy giảm hiệu năng của các coding skills quan trọng. |
| **Điều kiện đáng lựa chọn** | Phù hợp cho các bài slide 3-5 trang rất đơn giản, không yêu cầu đo lường chất lượng hay bám sát PDF mẫu. | **ĐƯỢC KHUYẾN NGHỊ LỰA CHỌN:** Phù hợp cho các đồ án kỹ thuật phức tạp cần độ chính xác cao về nội dung, kiểm soát chặt chẽ tọa độ và an toàn tuyệt đối cho codebase. | Chỉ nên cân nhắc khi người dùng có nhu cầu sinh slide hàng ngày trên hàng chục repository khác nhau và đã có test routing âm tính 100%. |

---

## 7. KẾT LUẬN VÀ ĐỀ XUẤT BƯỚC TIẾP THEO

### 7.1. Kết luận chính thức (Official Verdict)
**TRẠNG THÁI: `NEEDS SKILL IMPROVEMENT` (Cần Cải Thiện Kỹ Năng)**
*(Đồng thời: `PROMPT/PIPELINE STAGING SUFFICIENT` cho nhu cầu hiện tại của dự án Racehorse).*

**Lý do hỗ trợ kết luận:**
1. Pipeline staging hiện tại (`C:\DEV\RACEHORSE-PPT-STAGING`) với thư viện `PptxGenJS`, script `generate_racehorse_revision_v1.js`, LibreOffice và `linter_qa.py` đã hoàn toàn đủ mạnh để đáp ứng bài bảo vệ đồ án Racehorse với chất lượng xuất sắc mà **KHÔNG CẦN CÀI ĐẶT BẤT KỲ PLUGIN TOÀN CỤC NÀO**.
2. Tuy nhiên, nếu xét về tư cách một **bộ kỹ năng độc lập, tái sử dụng được cho cộng đồng hoặc cho các dự án khác**, bộ 3 skill hiện tại chưa đạt độ hoàn thiện:
   - `presentation-storyline` vẫn còn chứa chỉ dẫn sai lầm về việc tạo "wireframe placeholders".
   - Bộ skill thiếu cơ chế kiểm soát số liệu tự phong (chống hallucination về phần trăm hoàn thiện).
   - Linter QA mới chỉ kiểm tra tọa độ hình học, chưa kiểm tra ngữ nghĩa nội dung.

### 7.2. Đề xuất ba phép thử có giá trị cao nhất (Top 3 Highest-Value Tests)
*(Khuyến nghị cho giai đoạn nâng cấp tiếp theo; không thực hiện trong task này):*

1. **Phép thử 1: Kiểm thử Định tuyến Phủ định Runtime (Negative Routing Automated Test)**
   - *Mục tiêu:* Chạy một chuỗi 10 câu lệnh lập trình điển hình (ví dụ: *"Hãy viết unit test cho InjuryService.java"*, *"Sửa CSS trang VetPage"*, *"Viết migration SQL cho bảng stalls"*) để đo lường xem agent có tự ý kích hoạt bất kỳ skill thuyết trình nào hay không.
   - *Tiêu chuẩn đạt:* Tỷ lệ kích hoạt sai chuyên môn = 0%.
2. **Phép thử 2: Kiểm thử Thuyết trình Phi Phần Mềm (Non-Software Domain Pilot)**
   - *Mục tiêu:* Thử nghiệm tạo một bài slide 5 trang về một chủ đề hoàn toàn không liên quan đến công nghệ (ví dụ: *"Kế hoạch tiếp thị trang trại ngựa đua"* hoặc *"Báo cáo tài chính thường niên"*) để kiểm tra xem skill có bị gượng ép nhồi nhét RBAC/Architecture vào hay không.
   - *Tiêu chuẩn đạt:* Dàn ý hoàn toàn tự nhiên theo logic kinh doanh, không có khái niệm kỹ thuật phần mềm.
3. **Phép thử 3: Nâng cấp Semantic Linter cho `linter_qa.py` (Linter Ngữ Nghĩa)**
   - *Mục tiêu:* Bổ sung vào script linter các biểu thức chính quy (regex) tự động quét text XML để bắt các từ khóa rác: `[ KHUNG... ]`, `TODO`, `DRAFT`, `Chờ cập nhật`, và các con số phần trăm trần trụi (`100%`, `95%`) không có chú thích nguồn.
   - *Tiêu chuẩn đạt:* Linter tự động cảnh báo lỗi đỏ khi phát hiện text giữ chỗ hoặc số liệu tự chấm.

---

## 8. GIỚI HẠN ĐÁNH GIÁ VÀ CÁC ĐIỀU CHƯA THỰC HIỆN

1. **Giới hạn môi trường đánh giá:** Báo cáo này được thực hiện dựa trên việc phân tích mã nguồn, file cấu hình, log thực thi và ảnh render hiện có trong staging. Không thực hiện chạy lại lệnh tạo slide mới để tuân thủ nguyên tắc an toàn READ-ONLY của task.
2. **Chưa thực hiện đo lường hiệu năng thời gian thực:** Chưa đo tải bộ nhớ (RAM/CPU) khi LibreOffice headless chuyển đổi các file slide có dung lượng lớn (>50MB hoặc >100 slides).
3. **Chưa có phản hồi từ Hội đồng người dùng thật:** Toàn bộ đánh giá về độ tương phản và khả năng đọc từ xa dựa trên phân tích độ phân giải 150 DPI trên máy tính; chưa được chiếu thực nghiệm trên máy chiếu quang học thực tế của hội trường FPT University.
