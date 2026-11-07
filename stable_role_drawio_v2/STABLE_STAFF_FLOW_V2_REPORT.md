# BÁO CÁO THIẾT KẾ & ĐƠN GIẢN HÓA SƠ ĐỒ ĐIỀU HƯỚNG VAI TRÒ NHÂN VIÊN CHUỒNG (STABLE STAFF) — PHIÊN BẢN V2
**Mã nhiệm vụ:** `RH-DRAWIO-03`  
**Vai trò mục tiêu:** `STABLE_STAFF` (Nhân viên chuồng)  
**Định hướng thiết kế:** Đơn sắc tối giản (Monochrome Minimalist) · Bám sát chuẩn slide mẫu của nhóm trưởng và giảng viên  
**Mã nguồn đối chiếu:** `develop` — commit `e8b3b8f5d316bb390f7848aefd65174bdbc70e6e` (Chỉ đọc)  
**Tài liệu tham chiếu:**  
- Báo cáo phát hiện nghiệp vụ: [`stable_role_discovery/STABLE_ROLE_FEATURE_DISCOVERY_REPORT.md`](file:///C:/DEV/config-building/stable_role_discovery/STABLE_ROLE_FEATURE_DISCOVERY_REPORT.md)  
- Sơ đồ chi tiết tiền nhiệm V1: [`stable_role_drawio_v1/STABLE_STAFF_FLOW_V1.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v1/STABLE_STAFF_FLOW_V1.drawio) & [`STABLE_STAFF_FLOW_V1.png`](file:///C:/DEV/config-building/stable_role_drawio_v1/STABLE_STAFF_FLOW_V1.png)  
**Tập tin bàn giao mới (Thư mục `stable_role_drawio_v2/`):**
- Sơ đồ Draw.io V2 gốc (XML): [`STABLE_STAFF_FLOW_V2.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v2/STABLE_STAFF_FLOW_V2.drawio)
- Ảnh xuất độ nét cao V2 (Canva Ready PNG): [`STABLE_STAFF_FLOW_V2.png`](file:///C:/DEV/config-building/stable_role_drawio_v2/STABLE_STAFF_FLOW_V2.png)
- Ảnh so sánh trực quan V1 vs V2: [`STABLE_STAFF_FLOW_V2_COMPARISON.png`](file:///C:/DEV/config-building/stable_role_drawio_v2/STABLE_STAFF_FLOW_V2_COMPARISON.png)
- Báo cáo tài liệu thiết kế: [`STABLE_STAFF_FLOW_V2_REPORT.md`](file:///C:/DEV/config-building/stable_role_drawio_v2/STABLE_STAFF_FLOW_V2_REPORT.md)

---

## 1. TỔNG QUAN & BỐI CẢNH CHUYỂN ĐỔI (EXECUTIVE SUMMARY)

### 1.1. Lý do chuyển đổi từ Phiên bản V1 sang V2
Phiên bản tiền nhiệm **V1 (`STABLE_STAFF_FLOW_V1`)** được xây dựng với mục tiêu phản ánh toàn diện mọi ngóc ngách kỹ thuật đã phát hiện trong nhiệm vụ `RH-DRAWIO-01`. Mặc dù V1 đạt độ chính xác cao về mặt kiến trúc, nó gặp phải các hạn chế lớn khi trình bày thực tế:
- **Quá tải thị giác (Visual Overload):** 6 cột chức năng độc lập, 16 hộp tính năng chi tiết, 4 hộp bàn giao liên vai trò ngoại vi và bảng chú thích phức tạp khiến sơ đồ bị dày đặc thông tin.
- **Màu sắc phân mảnh (Multi-Color Clutter):** Việc sử dụng 6 gam màu khác biệt cho 6 phân hệ vô tình làm phân tán sự tập trung của hội đồng đánh giá và giảng viên.
- **Lệch chuẩn ngôn ngữ thiết kế của Trưởng nhóm (Leader Sample Deviation):** Ban giảng viên và nhóm trưởng yêu cầu sơ đồ phải theo phong cách **đơn sắc tối giản (Monochrome Minimalist)**, nền trắng, viền xám mảnh, đường nối vuông góc rõ ràng, giảm tải tối đa chữ giải thích, tập trung vào cấu trúc phân quyền và truy cập của tài khoản.

### 1.2. Mục tiêu trọng tâm của Phiên bản V2
Phiên bản **V2 (`STABLE_STAFF_FLOW_V2`)** tái cấu trúc toàn diện theo các tiêu chí:
1. **Phong cách đơn sắc tinh gọn (Clean Monochrome):** Nền trắng `#FFFFFF`, viền xám trung tính (`#94A3B8`, `#CBD5E1`), chữ màu đen than (`#0F172A`, `#1E293B`), đường nối xám đậm `#334155`. Tuyệt đối không sử dụng dải màu cầu vồng, gradient hay đổ bóng trang trí.
2. **Quy tụ thành 4 nhóm chức năng lớn:** Giảm từ 16 hộp chi tiết xuống còn **4 khu vực làm việc chính (Grouped Work Areas)** có kích thước đồng nhất.
3. **Luồng xác thực & điều hướng chuẩn xác:** Thể hiện rõ ràng chuỗi truy cập:  
   `STABLE STAFF → Đăng nhập → Xác thực tài khoản → Trang chủ → Đăng xuất`.
4. **Loại bỏ 100% chi tiết kỹ thuật không cần thiết:** Không hiển thị URL route (`/tasks`), mã API, phương thức HTTP, chú thích mô tả dài dòng hay tên bảng cơ sở dữ liệu.
5. **Hình học chuẩn mực 16:9:** Kích thước canvas 1920 × 1080 px (xuất siêu nét 3840 × 2160 px), 100% đường nối Orthogonal 90 độ, không có đường chéo, không giao cắt hộp tính năng.

---

## 2. BẢNG SO SÁNH ĐỐI CHIẾU KIẾN TRÚC: PHIÊN BẢN V1 VS V2

| Tiêu chí | Phiên bản V1 (`STABLE_STAFF_FLOW_V1`) | Phiên bản V2 (`STABLE_STAFF_FLOW_V2`) | Nhận xét cải tiến |
|---|---|---|---|
| **Mục đích sử dụng** | Tài liệu kiến trúc kỹ thuật nội bộ (Technical Architecture) | Trình chiếu Slide Canva cho Giảng viên (Presentation Flow) | Tối ưu hóa mạnh mẽ cho năng lực tiếp nhận thị giác trong 10-15 giây |
| **Bảng màu (Palette)** | Đa màu sắc (6 màu riêng biệt: xanh lá, lam, tím, vàng, đỏ, xanh mòng két) | **Đơn sắc tối giản (Monochrome):** Trắng, xám đá phiến, đen than | Loại bỏ hoàn toàn sự phân tâm thị giác, đồng nhất chuẩn slide mẫu |
| **Cấu trúc phân hệ** | 6 cột song song tương ứng 6 tab giao diện | **4 khu vực chức năng chính (Grouped Work Areas)** | Tinh gọn hóa logic, gom nhóm các tính năng có tính liên đới cao |
| **Số lượng hộp (Nodes)** | 24 hộp (bao gồm nút bàn giao ngoài) | **10 nút chính** (5 bước xác thực + 4 nhóm chức năng + 1 từ chối) | Giảm hơn 58% số lượng đối tượng, loại bỏ nghẽn thị giác |
| **Nội dung trong hộp** | Tiêu đề + mô tả tính năng 2-3 dòng + mã kỹ thuật | **Chỉ chứa tên vai trò, hành động hoặc nhóm tính năng** | Tuân thủ 100% quy tắc Box Content của yêu cầu |
| **Ranh giới liên vai trò** | Thể hiện chi tiết cả 4 vai trò ngoài (HLV, Thú y, Quản lý) | Lược bỏ ranh giới thứ cấp, tập trung 100% vào vai trò Nhân viên chuồng | Phản ánh đúng bản chất "Role-Based Access Flow" của tài khoản |
| **Tỷ lệ hiển thị** | 2000 × 1050 px (gần 2:1) | **Chuẩn tỷ lệ 16:9** (1920 × 1080 px, render 3840 × 2160 px) | Vừa khít khung hình slide Canva, không bị méo hoặc co kéo |

---

## 3. CẤU TRÚC 4 KHU VỰC CHỨC NĂNG CHÍNH (4 GROUPED WORK AREAS)

Tuân thủ nghiêm ngặt chỉ đạo tại Mục 4 của Yêu cầu nhiệm vụ, 16 tính năng phát hiện trong `RH-DRAWIO-01` được tổng hợp vào 4 khối tác nghiệp trình chiếu:

```
                      [ TRANG CHỦ ]
                            │
        TỪ TRANG CHỦ → CHỌN KHU VỰC CHỨC NĂNG
                            │
    ┌────────────────┬──────┴─────────┬────────────────┐
    │                │                │                │
┌───▼────────────┐ ┌─▼────────────┐ ┌─▼────────────┐ ┌─▼────────────┐
│  Nhiệm vụ &    │ │   Quản lý    │ │  Khẩu phần   │ │    Sự cố &   │
│   Huấn luyện   │ │    chuồng    │ │   & Cho ăn   │ │    Vật tư    │
│ ────────────── │ │ ──────────── │ │ ──────────── │ │ ──────────── │
│ • NV trong ngày│ │ • Ô chuồng & │ │ • Khẩu phần  │ │ • Báo cáo    │
│ • Chuẩn bị tập │ │   sinh hoạt  │ │   và điểm    │ │   sự cố      │
│                │ │              │ │   danh ăn    │ │ • Vật tư &   │
│                │ │              │ │              │ │   tồn kho    │
└────────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
```

### 3.1. Nhóm 1: Nhiệm vụ & Huấn luyện (Task & Training Operations)
- **Tên nhóm:** `Nhiệm vụ & Huấn luyện`
- **Tính năng thành phần:**
  1. `Nhiệm vụ trong ngày`: Bao gồm bảng tóm tắt 4 chỉ số ca trực, checklist nghiệm thu công việc có đính kèm ảnh minh chứng hiện trường và chăm sóc hạ nhiệt hồi phục sau buổi tập.
  2. `Chuẩn bị huấn luyện`: Tra cứu lịch huấn luyện của các ngựa được phân công, thực hiện quy trình kiểm tra thể trạng, thắng yên cương trang bị và xác nhận trạng thái sẵn sàng xuất phát (`READY`).
- **Căn cứ nghiệp vụ:** Cả hai mảng chức năng này đều gắn liền với lịch trình vận động hàng ngày của ngựa đua, được thực hiện liên tục trong ca trực sáng và chiều.

### 3.2. Nhóm 2: Quản lý chuồng (Stall & Boarding Management)
- **Tên nhóm:** `Quản lý chuồng`
- **Tính năng thành phần:**
  1. `Ô chuồng & Sinh hoạt`: Theo dõi trực quan sơ đồ tổng thể các dãy chuồng, quản lý mã nhận diện ngựa, tiếp nhận ngựa mới vào khu chờ, phân bổ ô chuồng trống đảm bảo quy tắc cách ly và di dời chuyển đổi ô chuồng khi có phát sinh.
- **Căn cứ nghiệp vụ:** Gom cụm toàn bộ không gian sống và cơ sở hạ tầng lưu trú của ngựa vào một điểm truy cập duy nhất, giúp người dùng dễ dàng thao tác mà không cần nhảy tab.

### 3.3. Nhóm 3: Khẩu phần & Cho ăn (Feeding & Nutrition Regimen)
- **Tên nhóm:** `Khẩu phần & Cho ăn`
- **Tính năng thành phần:**
  1. `Khẩu phần và điểm danh bữa ăn`: Áp dụng mẫu thực đơn dinh dưỡng đã được phê duyệt sẵn (tiêu chuẩn, dưỡng thương, thi đấu), thực hiện việc cân đo cám tinh, phân chia cỏ thô, khoáng chất và điểm danh xác nhận hoàn thành từng cữ ăn theo Daily Checklist.
- **Căn cứ nghiệp vụ:** Quy trình khép kín giữa chế độ dinh dưỡng được chỉ định và hành động cho ăn thực tế của nhân viên hiện trường.

### 3.4. Nhóm 4: Sự cố & Vật tư (Incidents & Inventory Replenishment)
- **Tên nhóm:** `Sự cố & Vật tư`
- **Tính năng thành phần:**
  1. `Báo cáo sự cố`: Tính năng phản ứng nhanh 1 chạm (1-Touch Incident Report) khi phát hiện dấu hiệu cấp cứu y tế (đau bụng Colic, sốt, chấn thương) và cập nhật nhật ký diễn biến hiện trường.
  2. `Vật tư & Tồn kho`: Kiểm kê thực tế số lượng thức ăn, thuốc thú y, đệm lót tại kho chuồng và lập phiếu đề xuất cấp bổ sung vật tư khi mức tồn chạm ngưỡng cảnh báo an toàn (`LOW_STOCK`).
- **Căn cứ nghiệp vụ:** Hai chức năng hậu cần và an toàn vận hành, kích hoạt khi có biến động bất thường về tài sản hoặc sức khỏe ngựa.

---

## 4. LUỒNG XÁC THỰC VÀ ĐIỀU HƯỚNG TẦNG ĐỈNH (TOP-LEVEL ACCOUNT FLOW)

Sơ đồ V2 triển khai cấu trúc luồng người dùng tuyến tính và rõ ràng ở nửa trên:

### 4.1. Chuỗi hành động chính
`[ STABLE STAFF ] ──> [ Đăng nhập ] ──> < Xác thực tài khoản > ──(Hợp lệ)──> [ Trang chủ ] ──> [ Đăng xuất ]`

1. **`STABLE STAFF` (Role Entry Point):** Đại diện cho chủ thể tài khoản Nhân viên chuồng tiếp cận hệ thống.
2. **`Đăng nhập` (Login Action):** Người dùng thực hiện đăng nhập vào cổng thông tin vận hành RTMS.
3. **`Xác thực tài khoản` (RBAC Verification):** Khối hình thoi quyết định điều hướng (Decision Diamond). Hệ thống kiểm tra vai trò người dùng trong hệ thống RBAC:
   - **Nhánh `Hợp lệ` (Valid Credentials & Role):** Điều hướng trực tiếp đến `Trang chủ`.
   - **Nhánh `Không hợp lệ` (Invalid / Unauthorized):** Rẽ hướng thẳng đứng lên trên với nét đứt màu xám dẫn tới nút **`Truy cập bị từ chối`**.
4. **`Trang chủ` (Dashboard):** Điểm tập kết trung tâm sau đăng nhập thành công.
5. **`Đăng xuất` (Logout Action):** Cho phép kết thúc phiên làm việc an toàn.

### 4.2. Khối chuyển tiếp điều hướng (Transition Badge)
Từ đáy khối `Trang chủ`, một đường nối thẳng đứng duy nhất đi qua nhãn điều hướng:
> **`TỪ TRANG CHỦ → CHỌN KHU VỰC CHỨC NĂNG`**

Sau đó tiếp cận thanh phân phối ngang (Distribution Bus Spine) tại tọa độ $y = 460$, rẽ vuông góc 90 độ xuống 4 khu vực chức năng chính. Cấu trúc này làm nổi bật tính chất: **Người dùng từ Trang chủ có thể tự do truy cập bất kỳ khu vực chức năng nào mà không bị ràng buộc theo thứ tự thời gian.**

---

## 5. BẢO ĐẢM CHẤT LƯỢNG HÌNH HỌC & ĐỒ HỌA (VISUAL QA & GEOMETRY)

| Yêu cầu kiểm soát | Thông số kỹ thuật V2 | Kết quả đạt được | Đánh giá |
|---|---|---|---|
| **Bảng màu đơn sắc** | Nền `#FFFFFF`, viền xám `#94A3B8`/`#CBD5E1`, chữ than `#0F172A`/`#1E293B`, đường nối `#334155` | 100% Monochrome, không có bất kỳ màu sắc lòe loẹt hay gradient nào | **ĐẠT XUẤT SẮC** |
| **Quy tắc đường nối** | 100% Orthogonal (Chỉ gồm các đoạn thẳng đứng và nằm ngang với góc gấp 90°) | Tuyệt đối không có đường chéo (Zero Diagonal). Không có đường cắt xuyên qua hộp hoặc chữ | **ĐẠT XUẤT SẮC** |
| **Độ thông thoáng (Whitespace)** | Khoảng cách giữa các cột $\ge 80\text{ px}$, khoảng cách giữa các hàng $\ge 60\text{ px}$ | Bố cục thoáng đãng, cân đối hoàn hảo hai bên trục đối xứng $x = 960$ | **ĐẠT XUẤT SẮC** |
| **Tỷ lệ khung hình** | Khung vẽ 1920 × 1080 px (Tỷ lệ 16:9) | Tương thích hoàn hảo với slide thuyết trình Canva tiêu chuẩn 16:9 | **ĐẠT XUẤT SẮC** |
| **Độ phân giải xuất ảnh** | Render qua Playwright Chromium/Edge với `device_scale_factor = 2` | File PNG đạt kích thước **3840 × 2160 px (Ultra 4K Crisp)**, dung lượng 190 KB | **ĐẠT XUẤT SẮC** |
| **Tính khả dụng Draw.io** | Định dạng XML `.drawio` chuẩn diagrams.net | Kéo thả, chỉnh sửa văn bản và di dời các node dễ dàng trong Draw.io | **ĐẠT XUẤT SẮC** |

---

## 6. DANH MỤC TẬP TIN BÀN GIAO & TÌNH TRẠNG KHO MÃ NGUỒN

### 6.1. Tập tin bàn giao mới trong `stable_role_drawio_v2/`
1. `STABLE_STAFF_FLOW_V2.drawio` (25.3 KB): Tệp XML Draw.io có thể chỉnh sửa trực tiếp trên diagrams.net.
2. `STABLE_STAFF_FLOW_V2.png` (190.7 KB): Ảnh kết xuất độ nét cao tỷ lệ 16:9 phục vụ chèn vào Canva slide.
3. `STABLE_STAFF_FLOW_V2_COMPARISON.png` (823.9 KB): Ảnh so sánh trực quan đối chiếu V1 vs V2 với tiêu đề chuẩn xác.
4. `STABLE_STAFF_FLOW_V2_REPORT.md`: Báo cáo tài liệu thiết kế và căn cứ nghiệp vụ chi tiết.

### 6.2. Tính toàn vẹn của các tài nguyên khác
- **Thư mục V1:** Toàn bộ tập tin trong `stable_role_drawio_v1/` (`STABLE_STAFF_FLOW_V1.drawio`, `STABLE_STAFF_FLOW_V1.png`, `STABLE_STAFF_FLOW_V1_REPORT.md`) được **bảo toàn nguyên vẹn 100%**, không bị xóa hay ghi đè.
- **Mã nguồn ứng dụng (`C:\DEV\RACE HORSE\HORSE-PROJECT`):** Được giữ ở chế độ chỉ đọc nghiêm ngặt, không có bất kỳ thay đổi nào phát sinh.
- **Tập tin tạm thời:** Các script tạo hình ảnh trung gian đã được dọn dẹp sạch sẽ khỏi môi trường.
