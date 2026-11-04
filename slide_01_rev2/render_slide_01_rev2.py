import os
import sys
import pypdfium2 as pdfium
from PIL import Image, ImageDraw
import math

sys.stdout.reconfigure(encoding='utf-8')

staging_dir = r"C:\DEV\RACEHORSE-PPT-STAGING\slide_01_rev2"
repo_dir = r"C:\DEV\config-building\slide_01_rev2"
pdf_path = os.path.join(staging_dir, "racehorse_slide_01_rev2.pdf")
sample_p1_path = r"C:\DEV\RACEHORSE-PPT-STAGING\template_reproduction_test\sample_pages\page_01.png"

print(f"Loading Slide 01 Rev 2 PDF from: {pdf_path}")
pdf = pdfium.PdfDocument(pdf_path)
page = pdf[0]

# 1. Render Preview PNG at 150 DPI (1500 x 844)
bitmap = page.render(scale=150/72)
preview_img = bitmap.to_pil()
preview_path_staging = os.path.join(staging_dir, "slide_01_rev2_preview.png")
preview_path_repo = os.path.join(repo_dir, "slide_01_rev2_preview.png")
preview_img.save(preview_path_staging)
preview_img.save(preview_path_repo)
print(f"[SUCCESS] Saved Preview PNG: {preview_path_staging} ({preview_img.size})")

# Also render ultra high-res 300 DPI (3000 x 1688)
bitmap_300 = page.render(scale=300/72)
highres_img = bitmap_300.to_pil()
highres_path_staging = os.path.join(staging_dir, "slide_01_rev2_preview_300dpi.png")
highres_path_repo = os.path.join(repo_dir, "slide_01_rev2_preview_300dpi.png")
highres_img.save(highres_path_staging)
highres_img.save(highres_path_repo)
print(f"[SUCCESS] Saved 300 DPI PNG: {highres_path_staging} ({highres_img.size})")

# 2. Side-by-Side Visual Comparison against Sample Page 01
sample_img = Image.open(sample_p1_path).convert("RGB")
norm_w, norm_h = 1500, 844

s_norm = sample_img.resize((norm_w, norm_h), Image.Resampling.LANCZOS)
d_norm = preview_img.resize((norm_w, norm_h), Image.Resampling.LANCZOS)

# Calculate RMSE
d1 = list(s_norm.getdata())
d2 = list(d_norm.getdata())
total_sq = sum(((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2 + (p1[2]-p2[2])**2)/3.0 for p1, p2 in zip(d1, d2))
rmse = math.sqrt(total_sq / len(d1))
print(f"Pixel RMSE vs Sample Page 01: {rmse:.2f}")

comp_w = norm_w * 2 + 90
comp_h = norm_h + 130
comp = Image.new("RGB", (comp_w, comp_h), color=(241, 245, 249))
draw = ImageDraw.Draw(comp)

title = f"SLIDE 01 REV 2 VISUAL AUDIT — LECTURER SAMPLE (LEFT) vs RACEHORSE REV 2 (RIGHT) | RMSE: {rmse:.2f}"
draw.text((30, 20), title, fill=(15, 23, 42))

comp.paste(s_norm, (30, 80))
comp.paste(d_norm, (norm_w + 60, 80))

draw.rectangle([30, 80, 30 + norm_w, 80 + norm_h], outline=(100, 116, 139), width=2)
draw.rectangle([norm_w + 60, 80, norm_w + 60 + norm_w, 80 + norm_h], outline=(79, 70, 229), width=3)

comp_path_staging = os.path.join(staging_dir, "slide_01_rev2_comparison_vs_sample_01.png")
comp_path_repo = os.path.join(repo_dir, "slide_01_rev2_comparison_vs_sample_01.png")
comp.save(comp_path_staging)
comp.save(comp_path_repo)
print(f"[SUCCESS] Saved Comparison Image: {comp_path_staging} ({comp.size})")
