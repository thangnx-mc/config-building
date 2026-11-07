# BÁO CÁO THIẾT KẾ LƯU ĐỒ NGHIỆP VỤ CHUẨN VAI TRÒ NHÂN VIÊN CHUỒNG (STABLE STAFF) — PHIÊN BẢN V3
**Mã nhiệm vụ:** `RH-DRAWIO-04`  
**Vai trò mục tiêu:** `STABLE_STAFF` (Nhân viên chuồng)  
**Định hướng thiết kế:** Lưu đồ nghiệp vụ chuẩn (Conventional Business Flowchart)  
**Mã nguồn đối chiếu:** `develop` — commit `e8b3b8f5d316bb390f7848aefd65174bdbc70e6e` (Chỉ đọc)  
**Tài liệu tham chiếu:**  
- Báo cáo phát hiện nghiệp vụ: [`stable_role_discovery/STABLE_ROLE_FEATURE_DISCOVERY_REPORT.md`](file:///C:/DEV/config-building/stable_role_discovery/STABLE_ROLE_FEATURE_DISCOVERY_REPORT.md)  
- Sơ đồ chi tiết V1: [`stable_role_drawio_v1/STABLE_STAFF_FLOW_V1.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v1/STABLE_STAFF_FLOW_V1.drawio)  
- Sơ đồ tối giản V2: [`stable_role_drawio_v2/STABLE_STAFF_FLOW_V2.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v2/STABLE_STAFF_FLOW_V2.drawio)  
**Tập tin bàn giao mới (Thư mục `stable_role_drawio_v3/`):**
- Sơ đồ Draw.io V3 gốc (XML): [`STABLE_STAFF_FLOW_V3.drawio`](file:///C:/DEV/config-building/stable_role_drawio_v3/STABLE_STAFF_FLOW_V3.drawio)
- Ảnh xuất độ nét cao V3 (Canva Ready PNG): [`STABLE_STAFF_FLOW_V3.png`](file:///C:/DEV/config-building/stable_role_drawio_v3/STABLE_STAFF_FLOW_V3.png)
- Ảnh so sánh trực quan V2 vs V3: [`STABLE_STAFF_FLOW_V3_COMPARISON.png`](file:///C:/DEV/config-building/stable_role_drawio_v3/STABLE_STAFF_FLOW_V3_COMPARISON.png)
- Báo cáo tài liệu thiết kế: [`STABLE_STAFF_FLOW_V3_REPORT.md`](file:///C:/DEV/config-building/stable_role_drawio_v3/STABLE_STAFF_FLOW_V3_REPORT.md)

---

## 1. TỔNG QUAN & BỐI CẢNH TÁI THIẾT KẾ (EXECUTIVE SUMMARY)

### 1.1. Lý do loại bỏ phong cách V2 và chuyển sang V3
Mặc dù Phiên bản **V2 (`STABLE_STAFF_FLOW_V2`)** đã giải quyết được vấn đề quá tải màu sắc của V1 bằng bảng màu đơn sắc, nhóm dự án đã **chính thức bác bỏ phong cách trình bày dạng infographic (infographic-like presentation)** của V2 vì các lý do:
- **Lạm dụng khối chứa lớn (Group Containers):** Việc bao bọc các tính năng vào 4 thẻ chứa lớn có đường viền và nhãn nhóm tạo cảm giác giống giao diện bảng điều khiển (dashboard illustration) hơn là một lưu đồ quy trình nghiệp vụ.
- **Hộp lồng nhau (Nested Sub-boxes):** Việc đặt các hộp tính năng con bên trong các hộp nhóm vi phạm nguyên lý tinh gọn của lưu đồ truyền thống, gây phức tạp thị giác không cần thiết.
- **Yếu tố trang trí dư thừa:** Bảng chú thích (Legend) ở chân trang, nhãn chuyển tiếp điều hướng (`TỪ TRANG CHỦ → CHỌN KHU VỰC CHỨC NĂNG`), và ghi chú bản quyền chân trang làm xao nhãng nội dung chính của quy trình.

### 1.2. Nguyên lý cốt lõi của Phiên bản V3
Phiên bản **V3 (`STABLE_STAFF_FLOW_V3`)** được thiết kế lại thành **một lưu đồ nghiệp vụ truyền thống thuần túy (Conventional Business Flowchart)**:
1. **Sử dụng 100% ký hiệu lưu đồ chuẩn (Standard Flowchart Symbols):**
   - Hình bầu dục (Oval / Terminator) cho điểm Bắt đầu và Kết thúc.
   - Hình chữ nhật sắc cạnh 90° (Rectangle / Process) cho toàn bộ các bước xử lý và khu vực tác nghiệp.
   - Hình thoi (Diamond / Decision) cho bước kiểm tra điều kiện xác thực tài khoản.
2. **Loại bỏ triệt để các thành phần trang trí:**
   - Không có khung chứa nhóm lớn (No group containers).
   - Không có hộp con lồng nhau (No nested sub-boxes).
   - Không có bảng chú thích chân trang (No legend).
   - Không có hộp nhãn điều hướng trung gian.
   - Tiêu đề sơ đồ là dòng văn bản thuần túy, giản dị và không phô trương.
3. **Phân nhánh độc lập tuyệt đối từ Trang chủ:** 4 khu vực chức năng lớn là các điểm đến độc lập, kết nối trực tiếp từ Trang chủ qua thanh phân phối nhánh vuông góc, không tạo chuỗi nối tiếp giả tạo.
4. **Hành động Đăng xuất độc lập:** Đăng xuất được biểu diễn thành nhánh kết thúc phiên độc lập, không phải là bước bắt buộc kế tiếp của Trang chủ.

---

## 2. BẢNG ĐỐI CHIẾU TIÊU CHUẨN THIẾT KẾ: V1, V2 VÀ V3

| Tiêu chuẩn | Phiên bản V1 | Phiên bản V2 | Phiên bản V3 (Chuẩn Flowchart) |
|---|---|---|---|
| **Phong cách hình ảnh** | Kiến trúc kỹ thuật chi tiết (Technical Architecture) | Minh họa trình bày đa hộp (Infographic Presentation) | **Lưu đồ nghiệp vụ chuẩn (Business Flowchart)** |
| **Ký hiệu hình học** | Hộp bo góc nhiều màu, thẻ bàn giao ngoài nét đứt | Hộp lồng nhau bên trong 4 khung chứa lớn | **Hình khối chuẩn: Oval (Terminator), Rectangle (Process), Diamond (Decision)** |
| **Khung chứa nhóm** | 6 cột điều hướng | 4 khung chứa nhóm lớn bao quanh các hộp con | **HOÀN TOÀN KHÔNG CÓ (Zero Containers)** |
| **Bảng màu (Palette)** | 6 màu sặc sỡ | Đơn sắc tối giản (nhiều lớp viền xám) | **Đơn sắc chuẩn mực: Nền trắng, viền đen than `#1E293B`, chữ `#0F172A`** |
| **Bảng chú thích (Legend)** | Khung chú thích màu chi tiết | Khung chú thích 5 loại ký hiệu | **LOẠI BỎ HOÀN TOÀN (Không có Legend)** |
| **Đường nối & Mũi tên** | Đa dạng nét liền / nét đứt | Nét liền và nét đứt mỏng | **100% đường nối Orthogonal 90° với mũi tên chuẩn flowchart** |
| **Tỷ lệ & Kích thước** | 2000 × 1050 px | 1920 × 1080 px (16:9) | **1920 × 1080 px (16:9 Canva Ready)** |

---

## 3. PHÂN LOẠI KÝ HIỆU LƯU ĐỒ CHUẨN TRONG V3

Toàn bộ các nút chức năng trên sơ đồ V3 tuân thủ nghiêm ngặt tiêu chuẩn ANSI/ISO về lưu đồ nghiệp vụ:

### 3.1. Ký hiệu Terminator — Hình bầu dục (Oval)
Dùng để biểu thị điểm bắt đầu hoặc điểm kết thúc của một luồng xử lý hoặc phiên làm việc:
1. **`Bắt đầu`:** Điểm khởi đầu luồng truy cập của người dùng.
2. **`Kết thúc`:** Điểm kết thúc xử lý khi tài khoản bị từ chối truy cập do thông tin hoặc vai trò không hợp lệ.
3. **`Kết thúc phiên`:** Điểm kết thúc phiên làm việc sau khi người dùng thực hiện hành động Đăng xuất.

### 3.2. Ký hiệu Process — Hình chữ nhật (Rectangle)
Dùng để biểu thị một hành động xử lý, một trạng thái màn hình hoặc một khu vực tác nghiệp chức năng:
1. **`Đăng nhập`:** Người dùng cung cấp thông tin đăng nhập vào hệ thống.
2. **`Truy cập bị từ chối`:** Trạng thái xử lý khi việc xác thực tài khoản thất bại.
3. **`Trang chủ`:** Bảng điều khiển trung tâm sau khi đăng nhập thành công.
4. **`Đăng xuất`:** Hành vi chủ động thoát khỏi phiên đăng nhập.
5. **`Nhiệm vụ & Huấn luyện`:** Điểm đến tác nghiệp phân hệ ca trực và chuẩn bị luyện tập.
6. **`Quản lý chuồng`:** Điểm đến tác nghiệp phân hệ quản lý ô chuồng và sinh hoạt của ngựa.
7. **`Khẩu phần & Cho ăn`:** Điểm đến tác nghiệp phân hệ chế độ ăn và điểm danh cữ ăn.
8. **`Sự cố & Vật tư`:** Điểm đến tác nghiệp phân hệ báo cáo khẩn cấp và đề xuất bổ sung vật tư.

### 3.3. Ký hiệu Decision — Hình thoi (Diamond)
Dùng để kiểm tra điều kiện logic và rẽ nhánh luồng quy trình:
- **`Xác thực tài khoản`:** Kiểm tra thông tin định danh và phân quyền vai trò `STABLE_STAFF`.
  - Nhánh **`Hợp lệ` (Yes):** Tiếp tục dẫn sang `Trang chủ`.
  - Nhánh **`Không hợp lệ` (No):** Rẽ hướng thẳng đứng lên trên dẫn tới `Truy cập bị từ chối` $\rightarrow$ `Kết thúc`.

---

## 4. KIẾN TRÚC ĐIỀU HƯỚNG VÀ BỐ CỤC KHÔNG GIAN (16:9 LAYOUT)

Sơ đồ được thiết kế với cấu trúc 2 tầng không gian rõ ràng, cân xứng hoàn hảo quanh trục giữa $x = 960$:

```
                       [ TIÊU ĐỀ THUẦN TÚY (PLAIN TEXT) ]

                                  [ Truy cập bị từ chối ] ──> ( Kết thúc )
                                             ▲
                                      Không hợp lệ
                                             │
( Bắt đầu ) ──> [ Đăng nhập ] ──> < Xác thực tài khoản > ──(Hợp lệ)──> [ Trang chủ ] ──> [ Đăng xuất ] ──> ( Kết thúc phiên )
                                                                              │
                                                                       (Thanh phân phối)
                     ┌───────────────────────┬────────────────────────┬───────┴───────────────┐
                     │                       │                        │                       │
                     ▼                       ▼                        ▼                       ▼
          [ Nhiệm vụ & Huấn luyện ]   [ Quản lý chuồng ]     [ Khẩu phần & Cho ăn ]    [ Sự cố & Vật tư ]
```

### 4.1. Tầng 1: Luồng xác thực & Quản trị phiên (Authentication & Session Flow)
- Nằm ở nửa trên khung vẽ ($y = 125 \div 315$).
- Luồng chính di chuyển tuyến tính từ trái sang phải: `Bắt đầu` $\rightarrow$ `Đăng nhập` $\rightarrow$ `Xác thực tài khoản` $\rightarrow$ `Trang chủ` $\rightarrow$ `Đăng xuất` $\rightarrow$ `Kết thúc phiên`.
- Nhánh từ chối xử lý đặt ngay trên đỉnh hình thoi, tạo hành lang luồng xử lý lỗi tách biệt và gọn gàng.

### 4.2. Tầng 2: 4 Điểm đến chức năng độc lập (Functional Destinations)
- Nằm ở nửa dưới khung vẽ ($y = 600 \div 680$).
- Từ đáy khối `Trang chủ` ($x = 960$), một đường trục đứng duy nhất dẫn xuống thanh phân phối ngang tại $y = 500$.
- Từ thanh phân phối, 4 nhánh rẽ vuông góc 90° đi thẳng vào 4 khối chữ nhật tác nghiệp:
  1. `Nhiệm vụ & Huấn luyện` ($x = 160 \div 470$)
  2. `Quản lý chuồng` ($x = 590 \div 900$)
  3. `Khẩu phần & Cho ăn` ($x = 1020 \div 1330$)
  4. `Sự cố & Vật tư` ($x = 1450 \div 1760$)
- Tất cả 4 khối có kích thước **đồng nhất tuyệt đối: 310 × 80 px**, khoảng cách đệm (gap) đều đặn 120 px, tạo cảm giác trật tự và cân xứng thị giác cao.

---

## 5. BẢO ĐẢM HÌNH HỌC & ĐƯỜNG NỐI CHUẨN TỐI ĐA (GEOMETRIC QA)

| Tiêu chuẩn kiểm tra | Quy cách V3 | Kết quả thẩm định |
|---|---|---|
| **Đường nối vuông góc (Orthogonal)** | 100% đoạn nối là đường thẳng đứng hoặc nằm ngang có góc gấp 90° | **ĐẠT:** Tuyệt đối không có đường xiên chéo nào |
| **Giao cắt hình khối (Collisions)** | Không có đường nối nào cắt xuyên qua bất kỳ hình khối hoặc văn bản nào | **ĐẠT:** Toàn bộ đường nối đi qua hành lang khoảng trắng mở |
| **Nhãn quyết định (Branch Labels)** | Đặt sát bên cạnh đường nối tương ứng (`Hợp lệ`, `Không hợp lệ`) | **ĐẠT:** Rõ ràng, dễ đọc, không đè lên nét vẽ |
| **Độ phân giải & Tỷ lệ** | Khung vẽ chuẩn 1920 × 1080 (16:9), kết xuất Playwright 2x (3840 × 2160) | **ĐẠT:** Siêu nét, vừa khít slide mẫu Canva của giảng viên |
| **Khả năng biên tập Draw.io** | Định dạng XML `.drawio` chuẩn diagrams.net, các nút và cạnh liên kết động | **ĐẠT:** Mở và chỉnh sửa trực tiếp không lỗi |

---

## 6. KẾT LUẬN & TRẠNG THÁI BÀN GIAO

Nhiệm vụ `RH-DRAWIO-04` đã hoàn thành trọn vẹn yêu cầu chuyển đổi:
- Đã loại bỏ hoàn toàn phong cách minh họa infographic của V2.
- Đã xác lập thành công **Lưu đồ nghiệp vụ chuẩn V3** cho vai trò `STABLE_STAFF`.
- Toàn bộ các hiện vật V1 (`stable_role_drawio_v1/`) và V2 (`stable_role_drawio_v2/`) được **bảo toàn nguyên vẹn**.
- Mã nguồn ứng dụng `HORSE-PROJECT` được bảo vệ tuyệt đối ở chế độ chỉ đọc.
