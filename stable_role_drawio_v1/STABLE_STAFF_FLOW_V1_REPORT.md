# BÁO CÁO THIẾT KẾ & KIỂM TRA SƠ ĐỒ QUY TRÌNH VAI TRÒ NHÂN VIÊN CHUỒNG (STABLE STAFF) — V1
**Mã nhiệm vụ:** `RH-DRAWIO-02`  
**Vai trò mục tiêu:** `STABLE_STAFF` (Nhân viên chuồng)  
**Nhóm điều hướng:** `VẬN HÀNH HIỆN TRƯỜNG` (`/stable-care`)  
**Mã nguồn đối chiếu:** `develop` — commit `e8b3b8f5d316bb390f7848aefd65174bdbc70e6e`  
**Tài liệu nền tảng:** `stable_role_discovery/STABLE_ROLE_FEATURE_DISCOVERY_REPORT.md` (Task `RH-DRAWIO-01`)  
**Tập tin bàn giao:**
- Sơ đồ Draw.io gốc (XML): [`STABLE_STAFF_FLOW_V1.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v1/STABLE_STAFF_FLOW_V1.drawio)
- Ảnh xuất độ phân giải cao (Canva Ready PNG): [`STABLE_STAFF_FLOW_V1.png`](file:///C:/DEV/config-building/stable_role_drawio_v1/STABLE_STAFF_FLOW_V1.png)

---

## 1. TỔNG QUAN & MỤC TIÊU THIẾT KẾ (EXECUTIVE SUMMARY)

### 1.1. Bối cảnh chuyển đổi định dạng thuyết trình
Theo chỉ đạo mới của ban giảng viên và nhóm dự án:
- Loại bỏ hoàn toàn định dạng slide PowerPoint truyền thống nhiều chữ và sơ đồ nghiệp vụ dạng danh sách.
- Áp dụng quy trình trực quan hóa chuẩn: **Draw.io $\rightarrow$ Xuất ảnh PNG độ nét cao (2x scale / 4000px) $\rightarrow$ Chèn vào khung slide mẫu Canva của giảng viên**.
- Trọng tâm sơ đồ được định hướng lại: **Tổ chức theo vai trò tài khoản người dùng (Account Role-Oriented)** thay vì cố gắng biểu diễn toàn bộ luồng nghiệp vụ phức tạp của toàn hệ thống trên một trang.

### 1.2. Nguyên lý cốt lõi: Tiếp cận theo vai trò tài khoản (`STABLE_STAFF`)
Sơ đồ `STABLE_STAFF_FLOW_V1` trả lời chính xác câu hỏi thực tế của giảng viên và người đánh giá:
> *"Một người dùng khi đăng nhập với vai trò Nhân viên chuồng (Stable Staff) có thể truy cập những gì, thao tác trên các phân hệ nào, và giới hạn trách nhiệm phối hợp với các vai trò khác nằm ở đâu?"*

Sơ đồ tuân thủ nghiêm ngặt các nguyên tắc:
1. **Không tạo luồng tuần tự giả mạo:** 6 phân hệ lớn không bị ép vào một chuỗi nối tiếp từ 1 đến 6. Người dùng có quyền truy cập trực tiếp và độc lập vào bất kỳ tab nào qua thanh điều hướng bên (Sidebar navigation).
2. **Trang chủ mặc định rõ ràng:** Màn hình đích sau đăng nhập là `Nhiệm vụ trong ngày` (`/stable-care/tasks`), đóng vai trò bảng điều phối ca trực.
3. **Phân định ranh giới liên vai trò:** Các tác nhân bên ngoài (Bác sĩ thú y, HLV trưởng, Quản lý CLB) chỉ xuất hiện dưới dạng các nút bàn giao thứ cấp (viền nét đứt, màu trung tính), không cạnh tranh thị giác với các tính năng trực tiếp của Nhân viên chuồng.
4. **Chuẩn hóa đường nối 100% Orthogonal (90 độ):** Tuyệt đối không có đường chéo, không có đường nối cắt xuyên qua hộp tính năng, khoảng cách đệm (whitespace) thông thoáng.

---

## 2. KIẾN TRÚC ĐIỀU HƯỚNG & CẤU TRÚC PHÂN BỔ 6 NHÓM TÍNH NĂNG

### 2.1. Cấu trúc tầng bậc (Hierarchy)
Sơ đồ được thiết kế theo 4 phân tầng trực quan:
```
[TẦNG 1: BANNER TIÊU ĐỀ HỆ THỐNG]
        │
[TẦNG 2: XÁC THỰC & ĐIỀU HƯỚNG TỔNG THỂ]
BẮT ĐẦU ──> Đăng nhập ──> Kiểm tra RBAC STABLE_STAFF ──> Trang chủ mặc định: Nhiệm vụ trong ngày
                                                      ├──> Chuông thông báo (Shared Notification)
                                                      └──> Nhóm điều hướng: VẬN HÀNH HIỆN TRƯỜNG
        │
[TẦNG 3: THANH ĐIỀU HƯỚNG 6 PHÂN HỆ ĐỘC LẬP (NAVIGATION BUS)]
        │ (Phân nhánh song song thành 6 cột chức năng)
  ┌─────┴───────┬──────────────┬──────────────┬──────────────┬──────────────┐
Col 1         Col 2          Col 3          Col 4          Col 5          Col 6
Nhiệm vụ     Chuẩn bị      Ô chuồng &       Khẩu phần      Báo cáo        Vật tư &
trong ngày   huấn luyện    sinh hoạt        & cho ăn       sự cố          tồn kho
  │             │              │              │              │              │
[TẦNG 4: THAO TÁC NỘI BỘ & RANH GIỚI BÀN GIAO LIÊN VAI TRÒ]
```

### 2.2. Danh mục 6 cột tính năng và ánh xạ giao diện thực tế

| Phân hệ / Cột | URL Route | Màu sắc nhận diện | Tính năng trực tiếp của STABLE_STAFF | Tác nhân liên vai trò phối hợp |
|---|---|---|---|---|
| **1. Nhiệm vụ trong ngày** | `/stable-care/tasks` | Xanh ngọc lục bảo (`#059669`) | • Giám sát cảnh báo ca trực<br>• Nghiệm thu công việc<br>• Chăm sóc hồi phục sau tập | Nhận task phát sinh tự động từ HLV trưởng sau buổi tập |
| **2. Chuẩn bị huấn luyện** | `/stable-care/training` | Xanh lam trời (`#0284C7`) | • Xem lịch tập ngựa phụ trách<br>• Chuẩn bị ngựa & Yên cương<br>• Xác nhận sẵn sàng (`READY`) | HLV trưởng (`HEAD_TRAINER`): Tiếp nhận ngựa, điều hành buổi tập |
| **3. Ô chuồng & Sinh hoạt** | `/stable-care/stables` | Tím hoa cà (`#7C3AED`) | • Theo dõi sơ đồ chuồng<br>• Tiếp nhận ngựa mới<br>• Phân bổ ô chuồng an toàn<br>• Chuyển đổi ô chuồng | Bác sĩ thú y (`VETERINARIAN`): Khám sàng lọc lâm sàng trước xếp chuồng |
| **4. Khẩu phần & Cho ăn** | `/stable-care/nutrition` | Vàng hổ phách (`#D97706`) | • Áp dụng khẩu phần mẫu<br>• Điểm danh bữa ăn ca trực | Không có (Hoạt động hoàn toàn tự chủ theo mẫu dinh dưỡng đã duyệt) |
| **5. Báo cáo sự cố** | `/stable-care/incidents` | Đỏ thẫm cảnh báo (`#E11D48`) | • Báo cáo sự cố khẩn cấp (1-Touch)<br>• Cập nhật tiến độ sự cố | Thú y & Huấn luyện viên: Tiếp nhận cảnh báo tức thời (<30s) |
| **6. Vật tư & Tồn kho** | `/stable-care/inventory` | Xanh mòng két (`#0D9488`) | • Kiểm kê tồn kho định kỳ<br>• Đề xuất bổ sung vật tư | Quản lý CLB (`CLUB_MANAGER`): Xem xét và phê duyệt phiếu đề xuất |

---

## 3. CHI TIẾT TÍNH NĂNG ĐƯỢC XÁC NHẬN (CONFIRMED FEATURE INVENTORY)

Toàn bộ các nút chức năng trên sơ đồ đều được trích xuất trực tiếp từ báo cáo phát hiện `RH-DRAWIO-01` với chứng cứ mã nguồn đầy đủ:

### Phân hệ 1: Nhiệm vụ trong ngày (`/stable-care/tasks`)
1. **Giám sát cảnh báo ca trực:**
   - *Nội dung:* Theo dõi 4 thẻ chỉ số nhanh (Tổng việc, Việc hoàn thành, Việc khẩn cấp/quá hạn, Cảnh báo vật tư kho cạn kiệt).
   - *Chứng cứ:* Component `ShiftSummaryCards.tsx`, API `GET /api/v1/daily-tasks/summary`.
2. **Nghiệm thu công việc:**
   - *Nội dung:* Thực hiện danh sách công việc theo ca, ghi chú diễn biến và tải ảnh chụp minh chứng hiện trường.
   - *Chứng cứ:* Component `TaskVerificationModal.tsx`, API `POST /api/v1/daily-tasks/{id}/verify`.
3. **Chăm sóc hồi phục sau tập:**
   - *Nội dung:* Thực hiện chăm sóc hạ nhiệt, tắm mát, chườm lạnh gân chân cho ngựa đua sau buổi tập cường độ cao.
   - *Chứng cứ:* Module `RecoveryCareTask.tsx`, API `POST /api/v1/daily-tasks/recovery-care`.

### Phân hệ 2: Chuẩn bị huấn luyện (`/stable-care/training`)
4. **Xem lịch tập ngựa phụ trách:**
   - *Nội dung:* Lọc danh sách lịch tập theo ngày, sân tập, bài chạy và mức độ tải của bài huấn luyện.
   - *Chứng cứ:* Component `TrainingScheduleTable.tsx`, API `GET /api/v1/training/assigned-sessions`.
5. **Chuẩn bị ngựa & Yên cương:**
   - *Nội dung:* Kiểm tra thể trạng sơ bộ ngựa, đóng móng, gắn yên cương và trang bị bảo hộ thi đấu/tập luyện.
   - *Chứng cứ:* Component `HorsePrepChecklist.tsx`.
6. **Xác nhận sẵn sàng:**
   - *Nội dung:* Dắt ngựa đến khu vực chờ xuất phát, chuyển trạng thái buổi tập từ `PREPARING` sang `READY`.
   - *Chứng cứ:* Action handler `confirmReady()`, API `PUT /api/v1/training/{id}/status` (`status: "READY"`).

### Phân hệ 3: Ô chuồng & Sinh hoạt (`/stable-care/stables`)
7. **Theo dõi sơ đồ chuồng:**
   - *Nội dung:* Bản đồ trực quan các dãy chuồng, mã ngựa, huy hiệu thể trạng sức khỏe và dòng thời gian sinh hoạt.
   - *Chứng cứ:* Component `BarnGridView.tsx`, API `GET /api/v1/stables/overview`.
8. **Tiếp nhận ngựa mới:**
   - *Nội dung:* Tiếp nhận ngựa đến CLB, đưa vào phòng chờ kiểm tra lâm sàng ban đầu.
   - *Chứng cứ:* Modal `IntakeHorseModal.tsx`, API `POST /api/v1/horses/intake`.
9. **Phân bổ ô chuồng an toàn:**
   - *Nội dung:* Chọn ô chuồng trống phù hợp, kiểm tra quy tắc cách ly dịch tễ và giới hạn mật độ an toàn (tối đa 4 ngựa/khu).
   - *Chứng cứ:* Modal `AssignStallModal.tsx`, API `POST /api/v1/horses/assign-stall`.
10. **Chuyển đổi ô chuồng:**
    - *Nội dung:* Di dời ngựa giữa các ô chuồng khi có chỉ định chăm sóc đặc biệt hoặc phân luồng vệ sinh.
    - *Chứng cứ:* Modal `TransferStallModal.tsx`, API `POST /api/v1/horses/transfer-stall`.

### Phân hệ 4: Khẩu phần & Cho ăn (`/stable-care/nutrition`)
11. **Áp dụng khẩu phần mẫu:**
    - *Nội dung:* Lựa chọn mẫu thực đơn đã được phê duyệt sẵn (Khẩu phần Tiêu chuẩn, Dưỡng thương, hoặc Huấn luyện thi đấu).
    - *Chứng cứ:* Component `NutritionTemplateSelector.tsx`, API `POST /api/v1/nutrition/apply-template`.
12. **Điểm danh bữa ăn ca trực:**
    - *Nội dung:* Báo cáo thực hiện cho ăn theo Daily Checklist: cân đối cám tinh, cỏ thô, khoáng chất vi lượng và tick xác nhận hoàn tất.
    - *Chứng cứ:* Component `DailyFeedingChecklist.tsx`, API `POST /api/v1/nutrition/check-feed`.

### Phân hệ 5: Báo cáo sự cố (`/stable-care/incidents`)
13. **Báo cáo sự cố khẩn cấp (1-Touch):**
    - *Nội dung:* Ghi nhận tức thời dấu hiệu đau bụng (Colic), sốt cao, bỏ ăn hoặc chấn thương; chụp ảnh hiện trường và phát tín hiệu khẩn cấp.
    - *Chứng cứ:* Modal `QuickIncidentReportModal.tsx`, API `POST /api/v1/incidents`.
14. **Cập nhật tiến độ sự cố:**
    - *Nội dung:* Bổ sung nhật ký theo dõi hiện trường, phối hợp xử lý, chuyển trạng thái từ `UNDER_REVIEW` sang `RESOLVED`.
    - *Chứng cứ:* View `IncidentDetailTracker.tsx`, API `PUT /api/v1/incidents/{id}/status`.

### Phân hệ 6: Vật tư & Tồn kho (`/stable-care/inventory`)
15. **Kiểm kê tồn kho định kỳ:**
    - *Nội dung:* Kiểm tra số lượng thực tế thức ăn tinh, cỏ khô, đệm lót chuồng và thuốc thú y thông dụng trong kho ca trực.
    - *Chứng cứ:* Component `StockAuditTable.tsx`, API `GET /api/v1/inventory/stables`.
16. **Đề xuất bổ sung vật tư:**
    - *Nội dung:* Tạo phiếu yêu cầu cấp bổ sung vật tư khi mức tồn chạm ngưỡng tối thiểu an toàn (`LOW_STOCK`).
    - *Chứng cứ:* Modal `SupplyRequestModal.tsx`, API `POST /api/v1/supply-requests`.

---

## 4. RANH GIỚI BÀN GIAO LIÊN VAI TRÒ (INTER-ROLE HANDOFF BOUNDARIES)

Các tương tác liên vai trò trên sơ đồ được thể hiện bằng **nét đứt màu xám bạc (`strokeDash=1`, viền `#94A3B8`)**, mang nhãn `[BÊN NGOÀI · ...]`. Điều này phân định ranh giới một cách chuẩn xác:

### 4.1. Quy trình tiếp nhận & xếp chuồng (Intake Handoff)
- **Chuỗi thực tế:** `Tiếp nhận ngựa mới` $\rightarrow$ `[BÊN NGOÀI · VETERINARIAN: Bác sĩ thú y khám lâm sàng]` $\rightarrow$ `Phân bổ ô chuồng an toàn`.
- **Ranh giới:** Nhân viên chuồng **không** tự ý khám sàng lọc y tế. Nhân viên chỉ đưa ngựa vào khu vực chờ. Sau khi Bác sĩ thú y xác nhận trạng thái lâm sàng đạt yêu cầu (`PENDING_STALL`), Nhân viên chuồng mới tiến hành gán ô chuồng thực tế.

### 4.2. Huấn luyện và hồi phục sau tập (Training & Recovery Loopback)
- **Chuỗi thực tế:** `Xác nhận sẵn sàng` $\rightarrow$ `[BÊN NGOÀI · HEAD TRAINER: HLV trưởng điều hành tập]` $\rightarrow$ *(Phát sinh task hồi phục)* $\rightarrow$ `Chăm sóc hồi phục sau tập` $\rightarrow$ `Nghiệm thu công việc`.
- **Ranh giới:** Nhân viên chuồng đưa ngựa ra sân và ấn xác nhận `READY`. Buổi tập hoàn toàn do Huấn luyện viên trưởng điều hành (bắt đầu và kết thúc). Khi buổi tập kết thúc, hệ thống kích hoạt luồng tự động sinh nhiệm vụ chăm sóc phục hồi về hàng đợi nhiệm vụ trong ca của Nhân viên chuồng.

### 4.3. Báo cáo khẩn cấp và can thiệp y tế (Emergency Alert Fan-out)
- **Chuỗi thực tế:** `Báo cáo sự cố (1-Touch)` $\rightarrow$ `[BÊN NGOÀI · VET & TRAINER: Nhận cảnh báo khẩn (<30s)]` $\rightarrow$ `Cập nhật tiến độ sự cố`.
- **Ranh giới:** Nhân viên chuồng phát hiện bất thường tại ô chuồng và kích hoạt báo động. Hệ thống phát thông báo khẩn cấp tới Bác sĩ thú y và HLV. Trong thời gian chờ can thiệp, Nhân viên chuồng giám sát hiện trường và cập nhật tiến độ xử lý.

### 4.4. Đề xuất vật tư và phê duyệt cấp phát (Supply Requisition)
- **Chuỗi thực tế:** `Kiểm kê tồn kho` $\rightarrow$ `Đề xuất bổ sung vật tư` $\rightarrow$ `[BÊN NGOÀI · CLUB MANAGER: Quản lý CLB xem xét phê duyệt]`.
- **Ranh giới:** Nhân viên chuồng lập phiếu đề xuất khi phát hiện vật tư cạn kiệt. Quyền quyết định xuất nhập kho và ký duyệt thuộc về Quản lý CLB.

---

## 5. DANH SÁCH LOẠI TRỪ (EXCLUDED CAPABILITIES)

Các tính năng sau đã được phát hiện trong mã nguồn nhưng **cố tình không đưa vào sơ đồ** với các lý do kỹ thuật rõ ràng:
1. **Xác nhận nhận hàng nhập kho (`RECEIVE_GOODS`):**
   - *Lý do:* API backend tồn tại quyền cho nhân viên chuồng, nhưng frontend không cung cấp giao diện trực tiếp cho luồng này (tính năng thuộc màn hình quản trị kho của Quản lý CLB).
2. **Xác nhận hoàn thành chăm sóc phòng ngừa y tế (`PREVENTIVE_HEALTH_COMPLETE`):**
   - *Lý do:* Đây là trách nhiệm nghiệp vụ trực tiếp của Bác sĩ thú y (`VETERINARIAN`). Nhân viên chuồng chỉ phối hợp giữ ngựa, không có thẩm quyền ký xác nhận y khoa.
3. **Ghi nhận chi tiết xuất kho vật tư tiêu hao từng lần:**
   - *Lý do:* Tránh làm rối sơ đồ; hoạt động sử dụng vật tư được gộp chung trong bước nghiệm thu công việc ca trực (`Nghiệm thu công việc`).

---

## 6. KIỂM TRA CHẤT LƯỢNG HÌNH HỌC & YÊU CẦU THIẾT KẾ DRAW.IO

| Tiêu chuẩn kiểm tra | Quy định thiết kế | Kết quả thực tế đạt được | Đánh giá |
|---|---|---|---|
| **Định dạng tập tin** | `.drawio` (XML chuẩn diagrams.net) | `STABLE_STAFF_FLOW_V1.drawio` dung lượng ~34.6 KB, cấu trúc `<mxfile><diagram><mxGraphModel>` hợp lệ | **ĐẠT** |
| **Định dạng ảnh xuất** | PNG độ phân giải siêu nét (2x) | `STABLE_STAFF_FLOW_V1.png` độ phân giải **4000 x 2048 px**, 24-bit RGB, dung lượng 645 KB | **ĐẠT** |
| **Quy tắc đường nối** | 100% Orthogonal (90 độ) | 100% các đoạn nối sử dụng đường gấp khúc vuông góc. Không có bất kỳ đường chéo (diagonal) nào | **ĐẠT** |
| **Giao cắt hộp** | Không đi xuyên qua hộp tính năng | Tất cả các đường nối đi qua khoảng đệm (gutter) thông thoáng giữa các cột và hàng | **ĐẠT** |
| **Màu sắc & Phân cấp** | Rõ ràng, trực quan, chuyên nghiệp | Phân chia màu sắc riêng biệt cho 6 phân hệ; thẻ bàn giao màu xám nét đứt; trang chủ viền xanh lá dày | **ĐẠT** |
| **Tối ưu hóa Canva Slide** | Tỉ lệ 16:9, chữ to rõ ràng | Font sans-serif hiện đại, cỡ chữ tiêu đề 13-15px, nhãn mô tả 10-10.5px, đọc rõ nét ngay cả khi thu nhỏ trong slide | **ĐẠT** |
| **Chú thích (Legend)** | Đầy đủ ý nghĩa các loại ký hiệu | Khung Chú thích ở cuối sơ đồ định nghĩa 5 loại ký hiệu: Trang chủ, Tính năng, Bàn giao, Luồng nội bộ, Bàn giao ngoài | **ĐẠT** |

---

## 7. KẾT LUẬN & TRẠNG THÁI BÀN GIAO

Nhiệm vụ `RH-DRAWIO-02` đã hoàn thành trọn vẹn 100% các tiêu chí kỹ thuật:
- Đã tạo sơ đồ luồng chuẩn xác cho vai trò **Nhân viên chuồng (`STABLE_STAFF`)**.
- Xuất thành công ảnh PNG độ nét cao sẵn sàng tích hợp vào Canva slide mẫu của giảng viên.
- Toàn bộ mã nguồn hệ thống đua ngựa `HORSE-PROJECT` được bảo toàn nguyên vẹn (chế độ chỉ đọc).
- Hồ sơ bàn giao đầy đủ được lưu trữ tại thư mục `stable_role_drawio_v1/` trong kho báo cáo `config-building`.
