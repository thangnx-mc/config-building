# BÁO CÁO NGHIỆM THU REVISION V1 — DECK CHÍNH THỨC RACEHORSE (18 SLIDES)
## (RACEHORSE PRESENTATION DECK — OFFICIAL REVISION V1 AUDIT & VERIFICATION REPORT)

> **Dự án:** Racehorse Training Management System (RTMS / STRIDE)  
> **Repository cấu hình & báo cáo:** `C:\DEV\config-building` (Branch `main`)  
> **Khu vực staging thực thi:** `C:\DEV\RACEHORSE-PPT-STAGING\`  
> **Repository đối chứng mã nguồn:** `C:\DEV\RACE HORSE\HORSE-PROJECT` (Branch `develop`)  
> **File PPTX xuất bản:** `output\racehorse_official_revision_v1.pptx` (502,891 bytes, 18 slides)  
> **File PDF xuất bản:** `output\racehorse_official_revision_v1.pdf` (371,751 bytes)  
> **File ảnh Contact Sheet:** `output\racehorse_official_revision_v1_contact_sheet.png` (815,671 bytes)  
> **Thời điểm nghiệm thu:** 04/11/2026  
> **Trạng thái:** `REVISION V1 READY FOR STAKEHOLDER REVIEW` (Đã hoàn thành toàn bộ yêu cầu, vượt qua Quality Gate với 0 lỗi)  

---

## 1. TÓM TẮT CÁC THAY ĐỔI CỐT LÕI (SUMMARY OF CHANGES)

Dựa trên các phát hiện và khuyến nghị từ báo cáo kiểm toán phong cách `PPT_SKILL_SAMPLE_STYLE_AND_DECK_AUDIT_REPORT.md`, bản dựng Revision V1 (18 slides) đã được tạo lập thành công trong môi trường staging cô lập, đáp ứng nghiêm ngặt các tiêu chuẩn an toàn kỹ thuật và tính trung thực học thuật:

1. **Mở rộng cấu trúc từ 14 lên 18 slide có nhịp điệu chuyên nghiệp:**
   - Bổ sung 3 slide phân cách phần (`Section Dividers`: Slide 03, 06, 08) nền tối sang trọng để tạo khoảng nghỉ thị giác, giúp Hội đồng giám khảo dễ dàng theo dõi tiến độ báo cáo.
   - Tách riêng biệt Slide 17 (Thank You) và Slide 18 (Q&A) theo đúng cấu trúc của slide mẫu đồ án tốt nghiệp xuất sắc ngành SE (`4488_SP25SE136_GSP94_MinhTTH5_Slide.pdf`).

2. **Xóa bỏ 100% khung Wireframe Placeholder dở dang ở 5 Slide Luồng (Slides 10 - 14):**
   - Thay thế toàn bộ các khung nét đứt `[ KHUNG ĐẶT ẢNH CHỤP GIAO DIỆN THẬT ] ... (Chờ cập nhật screenshot)` bằng **Sơ đồ quy trình nghiệp vụ Vector nằm ngang** chuẩn OOXML Native.
   - Mỗi flow đều có Avatar vai trò thao tác, 4 thẻ bước nghiệp vụ liên kết mũi tên ngang (`RIGHT_ARROW`) kèm thẻ bảng/service tương ứng, và thanh thẩm định kết quả ở đáy với 2 nhánh rõ ràng: Nhánh lỗi/từ chối đỏ (`FEF2F2`) và Nhánh xác nhận xanh (`F0FDF4`).
   - Loại bỏ hoàn toàn sự phụ thuộc vào ảnh chụp màn hình UI mà vẫn bảo đảm tính trực quan, độ sắc nét tuyệt đối khi trình chiếu máy chiếu và khả năng chỉnh sửa trực tiếp 100% trên Microsoft PowerPoint.

3. **Gỡ bỏ triệt để biểu đồ tự chấm điểm và các tuyên bố chất lượng vô căn cứ (Slide 16):**
   - **Xóa bỏ hoàn toàn biểu đồ cột phần trăm tự tạo `[100, 95, 100, 100, 90]`** và dòng chữ khẳng định "RBAC Security Gate: 100% Passed" khỏi deck.
   - Thay thế bằng **4 Thẻ Chỉ Số Tài Sản Kỹ Thuật Thực Tế Đã Kiểm Chứng**: 27 kịch bản migration SQL Server, 20 gói phân hệ backend Java, 10+ chuyên trang giao diện React SPA và 23 yêu cầu chức năng nghiệp vụ (FR01 - FR23).
   - Đính chính sự thật công nghệ: Cơ sở dữ liệu thực tế là Microsoft SQL Server (`racehorse_local`, T-SQL, Hibernate `SQLServerDialect`), không phải PostgreSQL như bản draft cũ từng suy đoán.

4. **Chuẩn hóa thông tin Tác vụ tự động hóa chạy ngầm (Slide 15):**
   - Phân tách rõ ràng giữa:
     - *Scheduled Cron Jobs:* Nêu đích danh `DailyAutomationJob` (cron 06:00 Asia/Ho_Chi_Minh: nhắc lịch phòng ngừa + tổng hợp báo cáo ngày) và `WalletRenewalJob` (gia hạn ví định kỳ) đã được kiểm chứng bằng annotation `@Scheduled` trong mã nguồn.
     - *Event-Driven Handlers:* Các cơ chế kích hoạt theo sự kiện trong tầng service (Khóa huấn luyện khẩn cấp `is_training_locked = true`, Báo động sự cố Colic/sốt của Groom, Quyết toán phân bổ dòng tiền khi chốt giải). Tuyệt đối không gọi các event handler này là cron job ngầm.

5. **Kế thừa nhận diện phong cách từ PDF mẫu:**
   - Áp dụng bảng màu chủ đạo Indigo/Purple `#4F46E5` kết hợp Deep Indigo `#3730A3` và nền sáng `#F8FAFC`.
   - Bổ sung hoa văn mảng sóng bo góc mềm và các cụm hạt bong bóng tròn (`OVAL`) trang trí ở các góc chéo slide bìa, slide phân cách và slide kết thúc.
   - Bảo toàn bản quyền: Không đưa logo FPT University vào slide khi chưa có yêu cầu; thay thế bằng Brand Pill `RTMS · STRIDE` sắc nét ở đầu mỗi slide nội dung.

---

## 2. BẢNG ĐỐI CHIẾU MAPPING TỪ 14 SLIDE CŨ SANG 18 SLIDE MỚI

| Slide Mới (Rev V1) | Tiêu đề Slide Mới | Nguồn gốc từ Bản Draft 14 Slide | Thay đổi cốt lõi & Cải tiến chất lượng |
|:---:|:---|:---:|:---|
| **Slide 01** | Bìa: Racehorse Training Management System | Kế thừa Slide 01 | Nền xanh chàm sâu `#1E1B4B`, hoa văn sóng góc và bong bóng trang trí; bổ sung 3 thẻ metadata kiến trúc, tác nhân, phạm vi. |
| **Slide 02** | Mục Lục Chương Trình Báo Cáo | Kế thừa Slide 02 | Bố cục 2 cột: Cột trái tóm tắt giá trị RTMS trên nền tối; Cột phải gồm 5 thẻ số thứ tự 01-05 bo tròn mềm mại. |
| **Slide 03** | Section Divider 01: Bài Toán Nghiệp Vụ | **BỔ SUNG MỚI** | Slide phân cách phần nền tối, tạo khoảng nghỉ thị giác theo chuẩn mẫu giảng viên (Trang 03). |
| **Slide 04** | Rủi Ro & Bất Cập Vận Hành Truyền Thống | Tinh chỉnh Slide 03 | Ma trận 4 rủi ro: Giá trị ngựa lớn, Sổ tay rời rạc, Xung đột làn chạy, Chi phí đồng sở hữu. Không đưa số liệu định lượng giả mạo. |
| **Slide 05** | Mô Hình Quản Trị Lấy Ngựa Làm Trung Tâm | Tinh chỉnh Slide 04 | Thực thể Ngựa đặt ở trung tâm bo góc mềm; 5 phân hệ vệ tinh liên kết xung quanh với màu sắc phân biệt rõ ràng. |
| **Slide 06** | Section Divider 02: Kiến Trúc Kỹ Thuật | **BỔ SUNG MỚI** | Slide phân cách phần nền tối, chuyển tiếp sang công nghệ và dữ liệu (Mẫu Trang 07). |
| **Slide 07** | Mô Hình Kiến Trúc Phân Tầng Thực Tế | Tinh chỉnh Slide 05 | Thể hiện 3 tầng Client-Server thực tế: React SPA (10 trang) -> Spring Boot 3 REST API (20 packages) -> SQL Server (27 migrations). |
| **Slide 08** | Section Divider 03: Tác Nhân & Bảo Mật | **BỔ SUNG MỚI** | Slide phân cách phần nền tối, chuyển tiếp sang đối tượng người dùng và phân quyền RBAC (Mẫu Trang 09). |
| **Slide 09** | Năm Vai Trò Nghiệp Vụ & Ma Trận RBAC | Tinh chỉnh Slide 06 | Hàng trên gồm 5 Avatar đại diện 5 vai trò; Hàng dưới là Bảng Native Table OOXML có độ tương phản cao, dễ đọc khi chiếu. |
| **Slide 10** | Flow 1: Tiếp Nhận & Phả Hệ (FR01-FR02) | **VIẾT LẠI Slide 07** | **XÓA BỎ KHUNG WIREFRAME**. Dựng sơ đồ vector 4 bước liên kết mũi tên ngang: Mã chip -> Phả hệ 3 đời -> Đồng sở hữu -> Cloudinary. |
| **Slide 11** | Flow 2: Huấn Luyện & Đặt Làn (FR03-FR07) | **VIẾT LẠI Slide 08** | **XÓA BỎ KHUNG WIREFRAME**. Sơ đồ vector thể hiện luồng đặt làn chạy đường đua và thuật toán chống xung đột khung giờ. |
| **Slide 12** | Flow 3: Thú Y & Khóa Huấn Luyện (FR08-FR12) | **VIẾT LẠI Slide 09** | **XÓA BỎ KHUNG WIREFRAME**. Sơ đồ vector thể hiện luồng khám bệnh, sơ đồ chấn thương và kích hoạt Lệnh khóa y tế khẩn. |
| **Slide 13** | Flow 4: Chuồng Trại & Báo Sự Cố (FR13-FR17) | **VIẾT LẠI Slide 10** | **XÓA BỎ KHUNG WIREFRAME**. Sơ đồ vector thể hiện bản đồ chuồng 1 ngựa/ô, định mức khẩu phần ăn và cấp cứu Colic hiện trường. |
| **Slide 14** | Flow 5: Giải Đua & Quyết Toán Ví (FR18-FR23) | **VIẾT LẠI Slide 11** | **XÓA BỎ KHUNG WIREFRAME**. Sơ đồ vector thể hiện luồng đăng ký giải, kiểm tra điều kiện FIT và tự động chia thưởng ví theo tỷ lệ. |
| **Slide 15** | Cơ Chế Tác Vụ Tự Động Hóa Chạy Ngầm | Tinh chỉnh Slide 12 | 2 Cột thẻ rõ ràng: Scheduled Cron Jobs (`DailyAutomationJob` 06:00, `WalletRenewalJob`) vs Event Handlers tức thời. Không đưa mốc 15m/30m giả. |
| **Slide 16** | Quy Mô Triển Khai & Tài Sản Kỹ Thuật | **VIẾT LẠI TOÀN BỘ Slide 13** | **XÓA BỎ BIỂU ĐỒ % VÀ CHỮ 100% PASSED**. Thay bằng 4 thẻ tài sản thực tế: 27 SQL Migrations, 20 Packages, 10+ Pages, 23 FRs. |
| **Slide 17** | Lời Cảm Ơn Hội Đồng & Giảng Viên | Tách từ Slide 14 | Nền xanh chàm sâu sang trọng, hoa văn sóng đồng bộ trang bìa. Lời tri ân gửi Hội đồng chấm và Quý Thầy Cô hướng dẫn. |
| **Slide 18** | Phiên Thảo Luận & Hỏi Đáp (Q & A) | Tách từ Slide 14 | Slide độc lập mời đặt câu hỏi phản biện chuyên môn; sẵn sàng demo trực tiếp Spring Boot và SQL Server theo yêu cầu. |

---

## 3. NHỮNG ĐIỂM KẾ THỪA TỪ PDF MẪU GIẢNG VIÊN

Bài thuyết trình đồ án mẫu ngành Kỹ thuật phần mềm (`4488_SP25SE136_GSP94_MinhTTH5_Slide.pdf`) có 20 trang, đạt tính sư phạm và thẩm mỹ cao. Bản Revision V1 đã kế thừa các tinh hoa thiết kế sau:

1. **Ngôn ngữ hình học hữu cơ (Organic Waves & Bubble Accents):**
   - Mẫu giảng viên sử dụng các mảng trang trí cong mềm mại ở góc chéo slide và các hạt bong bóng tròn nhỏ rải rác xung quanh.
   - Bản Revision V1 tái hiện chính xác cảm xúc thị giác này bằng các hình khối chuẩn OOXML Native (`ROUNDED_RECTANGLE` bo góc lớn kết hợp các cụm `OVAL` bán kính 0.14" đến 0.25" có độ trong suốt nhẹ) tại Slides 01, 03, 06, 08, 17, 18.
2. **Nhịp điệu chuyển phần bằng Section Dividers:**
   - Kế thừa các trang phân cách phần của mẫu (Trang 03, 07, 09) bằng cách chèn 3 slide phân cách nền xanh chàm sâu `#1E1B4B` có huy hiệu `PHẦN 01`, `PHẦN 02`, `PHẦN 03` căn giữa, tạo điểm nhấn cấu trúc rõ rệt.
3. **Mô hình Sơ đồ Quy trình Vector thay cho Screenshot:**
   - Đây là phát hiện quan trọng nhất từ mẫu: Mẫu giảng viên ở các trang luồng chính (Trang 11 đến 15) **không dùng screenshot ứng dụng** mà dùng sơ đồ vector gồm Avatar người dùng, icon thao tác và huy hiệu duyệt/từ chối.
   - Bản Revision V1 đã áp dụng triệt để mô thức này cho toàn bộ 5 luồng cốt lõi (Slides 10-14).
4. **Tách riêng biệt Thank You và Q&A:**
   - Mẫu giảng viên dành riêng Trang 19 cho Lời cảm ơn và Trang 20 cho Q&A. Revision V1 tách bạch tương ứng ở Slide 17 và Slide 18.

---

## 4. CÁC THAY ĐỔI VỀ NỘI DUNG VÀ XỬ LÝ SỐ LIỆU THEO NGUYÊN TẮC BẰNG CHỨNG

Thực hiện nghiêm ngặt nguyên tắc kỷ luật kỹ thuật và phòng ngừa thông tin giả tạo:

### 4.1. Bóc trần và loại bỏ số liệu giả định tại Slide 16 (Slide 13 cũ)
- Trong bản draft cũ, script generator tự ý chèn mảng:
  `values: [100, 95, 100, 100, 90]` mang tên "Tỷ lệ hoàn thiện (%)" và ghi chú "RBAC Security Gate: 100% Passed".
- **Hành động xử lý:** Xóa bỏ 100% biểu đồ này và cụm từ "100% Passed".
- **Thay thế bằng số liệu thực tế được kiểm chứng:**
  - *27 Migration Scripts:* Đếm trực tiếp trong thư mục `C:\DEV\RACE HORSE\HORSE-PROJECT\DATABASE\`. Bộ kịch bản T-SQL gồm 11 file tuần tự (`00` đến `10`) và 16 file bản vá nâng cấp (`32` đến `47`). Đính chính rằng hệ sinh thái sử dụng **Microsoft SQL Server**, không phải PostgreSQL.
  - *20 Backend Java Packages:* Đếm trực tiếp 20 package domain dưới `com.racehorse` (`admin`, `audit`, `auth`, `automation`, `caretask`, `common`, `finance`, `health`, `horse`, `incident`, `inventory`, `media`, `medical`, `notification`, `nutrition`, `racing`, `reporting`, `stable`, `training`, `wallet`).
  - *10+ Frontend Specialized Pages:* Đếm trực tiếp các component chuyên trang trong `FRONTEND/src/` (`AdminPages`, `VetPage`, `TrainingSchedulePage`, `StableCarePage`, `FitnessPage`, `FinanceReportsPage`, `WalletPage`...).
  - *23 Functional Requirements:* Ánh xạ chính xác dải yêu cầu `FR01` đến `FR23` được ghi nhận trong `PROJECT_COMPREHENSIVE_SUMMARY.md` và `FULL_RBAC_FLOW_AUDIT.md`.

### 4.2. Chuẩn hóa Background Jobs tại Slide 15 (Slide 12 cũ)
- Quét toàn bộ repository chỉ ghi nhận **2 Java classes** có annotation `@Scheduled`:
  1. `DailyAutomationJob.java`: Cấu hình `@Scheduled(cron="${app.jobs.daily-cron}", zone="${app.club-time-zone}")`. File `application.properties` thiết lập:
     `app.jobs.daily-cron=${DAILY_JOB_CRON:0 0 6 * * *}` và `app.club-time-zone=${CLUB_TIME_ZONE:Asia/Ho_Chi_Minh}`. Job chạy lúc **06:00 hàng ngày** để:
     - `remindPreventiveCare(today)`: Tạo notification nhắc lịch tiêm phòng/chăm sóc đến hạn cho BSTY và HLV.
     - `createOwnerReports(today.minusDays(1))`: Kết xuất báo cáo hoạt động ngày gửi cho chủ ngựa.
  2. `WalletRenewalJob.java`: Cấu hình `@Scheduled` quét và gia hạn các gói ví dịch vụ định kỳ cho chủ ngựa (`renewDuePlans`).
- Không có bất kỳ cấu hình cron 15 phút hay 30 phút nào trong code. Slide 15 đã được hiệu chỉnh để phản ánh chính xác cấu hình 06:00 hàng ngày và phân biệt rõ rệt với các Event Handlers tức thời.

---

## 5. DANH SÁCH BẰNG CHỨNG ĐÃ KIỂM TRA (VERIFIED EVIDENCE IN REPO)

Toàn bộ các nội dung kỹ thuật trong deck Revision V1 đều được kiểm tra trực tiếp từ các file sau:
1. `C:\DEV\RACE HORSE\HORSE-PROJECT\BACKEND\src\main\resources\application.properties`: Xác minh cấu hình server port 8080, dialect `SQLServerDialect`, URL `jdbc:sqlserver://localhost:1433;databaseName=racehorse_local`, cron `0 0 6 * * *`, múi giờ `Asia/Ho_Chi_Minh`.
2. `C:\DEV\RACE HORSE\HORSE-PROJECT\DATABASE\00_create_database.sql` đến `47_custom_preventive_care_type.sql`: Xác minh 27 file kịch bản SQL Server T-SQL thực tế.
3. `C:\DEV\RACE HORSE\HORSE-PROJECT\BACKEND\src\main\java\com\racehorse\automation\DailyAutomationJob.java`: Xác minh logic nhắc lịch phòng ngừa và sinh báo cáo chủ ngựa.
4. `C:\DEV\RACE HORSE\HORSE-PROJECT\BACKEND\src\main\java\com\racehorse\wallet\WalletRenewalJob.java`: Xác minh logic gia hạn gói ví.
5. `C:\DEV\RACE HORSE\HORSE-PROJECT\PROJECT_COMPREHENSIVE_SUMMARY.md`: Xác minh danh mục 23 yêu cầu chức năng (FR01 - FR23).
6. `C:\DEV\RACE HORSE\HORSE-PROJECT\FULL_RBAC_FLOW_AUDIT.md`: Xác minh cấu trúc 5 vai trò người dùng và ma trận phân quyền.

---

## 6. KẾT QUẢ KIỂM ĐỊNH QA VÀ ĐƯỜNG DẪN ARTIFACT STAGING

Toàn bộ quy trình sinh file, kiểm tra và kết xuất đã được thực thi khép kín trong staging:

```
Pipeline Execution Log:
1. node generate_racehorse_revision_v1.js -> 18 Slides generated (502 KB)
2. python linter_qa.py -> 511 elements scanned, 0 out-of-bounds defects (PASS)
3. soffice --convert-to pdf -> racehorse_official_revision_v1.pdf generated (372 KB)
4. python render_revision_v1.py -> 18 PNG images (150 DPI) + Contact Sheet generated (816 KB)
```

### Danh mục Artifacts Staging chính thức:
- **Tập tin PPTX:** `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_official_revision_v1.pptx`
- **Tập tin PDF:** `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_official_revision_v1.pdf`
- **Ảnh Contact Sheet:** `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_official_revision_v1_contact_sheet.png`
- **Dàn ý chi tiết:** `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_official_revision_v1_outline.md`
- **Báo cáo QA:** `C:\DEV\RACEHORSE-PPT-STAGING\output\racehorse_official_revision_v1_qa_report.md`
- **Thư mục ảnh PNG:** `C:\DEV\RACEHORSE-PPT-STAGING\output\rendered_revision_v1\slide_01.png` đến `slide_18.png`

Các artifact của bản draft cũ (`racehorse_demo_draft.*`) được **bảo toàn nguyên vẹn**, không bị ghi đè hay xóa bỏ.

---

## 7. NHỮNG ĐIỂM CÒN THIẾU BẰNG CHỨNG (LIMITATIONS & UNKNOWNS)

1. **Chưa có Báo cáo Test Coverage tự động (JaCoCo / SonarQube):**
   - Trong repository chưa tích hợp plugin sinh báo cáo đo lường độ phủ kiểm thử tự động ra file XML/HTML. Do đó, Slide 16 chỉ dừng lại ở việc thống kê số lượng tài sản mã nguồn đã kiểm chứng, không đưa ra tỷ lệ % kiểm thử.
2. **Chưa có Thư viện ảnh chụp màn hình UI thật được xuất bản sẵn:**
   - Trong repo không có thư mục lưu trữ ảnh chụp màn hình UI. Việc chuyển đổi 5 slide luồng sang Sơ đồ Vector quy trình đã khắc phục hoàn toàn hạn chế này mà không làm giảm tính chuyên nghiệp của bài thuyết trình.
3. **Môi trường cục bộ:**
   - PayOS gateway trong môi trường dev cục bộ đang để chế độ mock (`app.payos.gateway=fake`). Khi triển khai production, cần cấu hình khóa API PayOS thật.

---

## 8. CÁC QUYẾT ĐỊNH CẦN NGƯỜI PHỤ TRÁCH DUYỆT (DECISIONS FOR OWNER)

1. **Phê duyệt Sơ đồ Vector Luồng thay thế Screenshot:**
   - Người phụ trách dự án xem xét ảnh Contact Sheet của Revision V1 để đánh giá mức độ rõ ràng, trực quan của 5 sơ đồ quy trình vector (Slides 10-14). Nếu đồng ý, giải pháp này sẽ được chọn làm phương án chính thức cho buổi bảo vệ đồ án.
2. **Quyết định về việc bổ sung Logo FPT University:**
   - Hiện tại deck sử dụng Brand Pill `RTMS · STRIDE` trung tính. Nếu người phụ trách xác nhận có quyền sử dụng và mong muốn xuất hiện logo FPT Education ở góc trên bên trái canvas như mẫu, agent sẽ bổ sung trong bản Revision V2.
3. **Quyết định về việc tích hợp Code Coverage:**
   - Nếu nhóm phát triển chạy lệnh `mvn test jacoco:report` và có kết quả kiểm thử thực tế, chỉ số đó có thể được bổ sung chính danh vào Slide 16 trước ngày bảo vệ.
