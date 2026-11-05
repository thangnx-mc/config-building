import os
import pypdfium2 as pdfium
from PIL import Image, ImageDraw, ImageFont

staging_dir = r"C:\DEV\RACEHORSE-PPT-STAGING\slide_02_horse_owner_flow_rev4"
pdf_path = os.path.join(staging_dir, "racehorse_slide_02_horse_owner_flow_rev4.pdf")

# 1. Render 150 DPI preview
doc = pdfium.PdfDocument(pdf_path)
page = doc[0]

# scale = dpi / 72
scale_150 = 150.0 / 72.0
bm_150 = page.render(scale=scale_150)
img_150 = bm_150.to_pil()
preview_path = os.path.join(staging_dir, "slide_02_horse_owner_flow_rev4_preview.png")
img_150.save(preview_path)
print(f"[SUCCESS] Rendered 150 DPI: {preview_path} ({img_150.size})")

# 2. Render 300 DPI high-res preview
scale_300 = 300.0 / 72.0
bm_300 = page.render(scale=scale_300)
img_300 = bm_300.to_pil()
preview_300_path = os.path.join(staging_dir, "slide_02_horse_owner_flow_rev4_preview_300dpi.png")
img_300.save(preview_300_path)
print(f"[SUCCESS] Rendered 300 DPI: {preview_300_path} ({img_300.size})")

# 3. Create Side-by-Side comparison vs Rev 3
rev3_preview_path = r"C:\DEV\RACEHORSE-PPT-STAGING\slide_02_horse_owner_flow_rev3\slide_02_horse_owner_flow_rev3_preview.png"
if os.path.exists(rev3_preview_path):
    img_rev3 = Image.open(rev3_preview_path)
    # Ensure matching heights
    target_h = 750
    w_rev3 = int(img_rev3.width * (target_h / img_rev3.height))
    r_rev3 = img_rev3.resize((w_rev3, target_h), Image.Resampling.LANCZOS)
    
    w_rev4 = int(img_150.width * (target_h / img_150.height))
    r_rev4 = img_150.resize((w_rev4, target_h), Image.Resampling.LANCZOS)
    
    header_h = 80
    comp_w = w_rev3 + w_rev4 + 30
    comp_h = target_h + header_h + 30
    
    comp_rev3 = Image.new("RGB", (comp_w, comp_h), (248, 250, 252))
    d = ImageDraw.Draw(comp_rev3)
    
    # Titles
    d.rectangle([0, 0, comp_w, header_h], fill=(30, 41, 59))
    d.text((30, 25), "PREVIOUS: Slide 02 Rev 3 (Diagonal Connector Issue)", fill=(203, 213, 225))
    d.text((w_rev3 + 45, 25), "REVISED: Slide 02 Rev 4 (Orthogonal Connectors + Icon Flow)", fill=(74, 222, 128))
    
    comp_rev3.paste(r_rev3, (15, header_h + 15))
    comp_rev3.paste(r_rev4, (w_rev3 + 30, header_h + 15))
    
    comp_rev3_path = os.path.join(staging_dir, "slide_02_horse_owner_flow_rev4_comparison_vs_rev3.png")
    comp_rev3.save(comp_rev3_path)
    print(f"[SUCCESS] Created comparison vs Rev 3: {comp_rev3_path}")

# 4. Create Side-by-Side comparison vs Lecturer Sample Page 11
sample_p11_path = r"C:\DEV\RACEHORSE-PPT-STAGING\extracted_assets\sample_slide_11.png"
if not os.path.exists(sample_p11_path):
    sample_p11_path = r"C:\DEV\RACEHORSE-PPT-STAGING\extracted_assets\p11_inspected.png"

if os.path.exists(sample_p11_path):
    img_sample = Image.open(sample_p11_path)
    target_h = 750
    w_sample = int(img_sample.width * (target_h / img_sample.height))
    r_sample = img_sample.resize((w_sample, target_h), Image.Resampling.LANCZOS)
    
    w_rev4 = int(img_150.width * (target_h / img_150.height))
    r_rev4 = img_150.resize((w_rev4, target_h), Image.Resampling.LANCZOS)
    
    header_h = 80
    comp_w = w_sample + w_rev4 + 30
    comp_h = target_h + header_h + 30
    
    comp_sample = Image.new("RGB", (comp_w, comp_h), (248, 250, 252))
    d = ImageDraw.Draw(comp_sample)
    
    d.rectangle([0, 0, comp_w, header_h], fill=(15, 23, 42))
    d.text((30, 25), "LECTURER BENCHMARK: Sample Presentation Page 11", fill=(203, 213, 225))
    d.text((w_sample + 45, 25), "RACEHORSE IMPLEMENTATION: Slide 02 Rev 4", fill=(74, 222, 128))
    
    comp_sample.paste(r_sample, (15, header_h + 15))
    comp_sample.paste(r_rev4, (w_sample + 30, header_h + 15))
    
    comp_sample_path = os.path.join(staging_dir, "slide_02_horse_owner_flow_rev4_comparison_vs_sample.png")
    comp_sample.save(comp_sample_path)
    print(f"[SUCCESS] Created comparison vs Lecturer Sample P11: {comp_sample_path}")
