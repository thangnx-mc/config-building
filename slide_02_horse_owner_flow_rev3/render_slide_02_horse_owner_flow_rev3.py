import os
import sys
import pypdfium2 as pdfium
from PIL import Image, ImageDraw
import math

sys.stdout.reconfigure(encoding='utf-8')

staging_dir = r"C:\DEV\RACEHORSE-PPT-STAGING\slide_02_horse_owner_flow_rev3"
repo_dir = r"C:\DEV\config-building\slide_02_horse_owner_flow_rev3"
pdf_path = os.path.join(staging_dir, "racehorse_slide_02_horse_owner_flow_rev3.pdf")
rev2_preview_path = r"C:\DEV\RACEHORSE-PPT-STAGING\slide_02_horse_owner_flow_rev2\slide_02_horse_owner_flow_rev2_preview.png"
sample_p11_path = r"C:\DEV\RACEHORSE-PPT-STAGING\extracted_assets\sample_slide_11.png"

print(f"Loading Slide 02 Rev 3 PDF from: {pdf_path}")
pdf = pdfium.PdfDocument(pdf_path)
page = pdf[0]

# 1. Render Preview PNG at 150 DPI (1500 x 844)
bitmap = page.render(scale=150/72)
preview_img = bitmap.to_pil()
preview_path_staging = os.path.join(staging_dir, "slide_02_horse_owner_flow_rev3_preview.png")
preview_path_repo = os.path.join(repo_dir, "slide_02_horse_owner_flow_rev3_preview.png")
preview_img.save(preview_path_staging)
preview_img.save(preview_path_repo)
print(f"[SUCCESS] Saved Preview PNG: {preview_path_staging} ({preview_img.size})")

# 2. Render Ultra High-Res at 300 DPI (3000 x 1688)
bitmap_300 = page.render(scale=300/72)
highres_img = bitmap_300.to_pil()
highres_path_staging = os.path.join(staging_dir, "slide_02_horse_owner_flow_rev3_preview_300dpi.png")
highres_path_repo = os.path.join(repo_dir, "slide_02_horse_owner_flow_rev3_preview_300dpi.png")
highres_img.save(highres_path_staging)
highres_img.save(highres_path_repo)
print(f"[SUCCESS] Saved 300 DPI PNG: {highres_path_staging} ({highres_img.size})")

# 3. Side-by-Side Visual Comparison: REV 2 (LEFT) vs REV 3 (RIGHT)
rev2_img = Image.open(rev2_preview_path).convert("RGB")
norm_w, norm_h = 1500, 844

r2_norm = rev2_img.resize((norm_w, norm_h), Image.Resampling.LANCZOS)
r3_norm = preview_img.resize((norm_w, norm_h), Image.Resampling.LANCZOS)

comp_w = norm_w * 2 + 90
comp_h = norm_h + 130
comp_rev = Image.new("RGB", (comp_w, comp_h), color=(241, 245, 249))
draw_rev = ImageDraw.Draw(comp_rev)

title_rev = "RACEHORSE SLIDE 02 EVOLUTION — REVISION 2 (LEFT) vs REVISION 3 MINIMALIST (RIGHT)"
draw_rev.text((30, 25), title_rev, fill=(15, 23, 42))

comp_rev.paste(r2_norm, (30, 80))
comp_rev.paste(r3_norm, (norm_w + 60, 80))

draw_rev.rectangle([30, 80, 30 + norm_w, 80 + norm_h], outline=(100, 116, 139), width=2)
draw_rev.rectangle([norm_w + 60, 80, norm_w + 60 + norm_w, 80 + norm_h], outline=(94, 122, 84), width=3)

comp_rev_staging = os.path.join(staging_dir, "slide_02_horse_owner_flow_rev3_comparison_vs_rev2.png")
comp_rev_repo = os.path.join(repo_dir, "slide_02_horse_owner_flow_rev3_comparison_vs_rev2.png")
comp_rev.save(comp_rev_staging)
comp_rev.save(comp_rev_repo)
print(f"[SUCCESS] Saved Comparison vs Rev 2: {comp_rev_staging} ({comp_rev.size})")

# 4. Side-by-Side Visual Comparison vs Lecturer Sample Slide 11
sample_img = Image.open(sample_p11_path).convert("RGB")
s_norm = sample_img.resize((norm_w, norm_h), Image.Resampling.LANCZOS)

d1 = list(s_norm.get_flattened_data())
d2 = list(r3_norm.get_flattened_data())
total_sq = sum(((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2 + (p1[2]-p2[2])**2)/3.0 for p1, p2 in zip(d1, d2))
rmse = math.sqrt(total_sq / len(d1))
print(f"Pixel RMSE vs Sample Slide 11: {rmse:.2f}")

comp_sample = Image.new("RGB", (comp_w, comp_h), color=(241, 245, 249))
draw_sample = ImageDraw.Draw(comp_sample)

title_sample = f"RACEHORSE SLIDE 02 REV 3 AUDIT — LECTURER SAMPLE SLIDE 11 (LEFT) vs RACEHORSE REV 3 MINIMALIST (RIGHT) | RMSE: {rmse:.2f}"
draw_sample.text((30, 25), title_sample, fill=(15, 23, 42))

comp_sample.paste(s_norm, (30, 80))
comp_sample.paste(r3_norm, (norm_w + 60, 80))

draw_sample.rectangle([30, 80, 30 + norm_w, 80 + norm_h], outline=(100, 116, 139), width=2)
draw_sample.rectangle([norm_w + 60, 80, norm_w + 60 + norm_w, 80 + norm_h], outline=(94, 122, 84), width=3)

comp_sample_staging = os.path.join(staging_dir, "slide_02_horse_owner_flow_rev3_comparison_vs_sample.png")
comp_sample_repo = os.path.join(repo_dir, "slide_02_horse_owner_flow_rev3_comparison_vs_sample.png")
comp_sample.save(comp_sample_staging)
comp_sample.save(comp_sample_repo)
print(f"[SUCCESS] Saved Comparison vs Sample P11: {comp_sample_staging} ({comp_sample.size})")

# Copy PPTX to repo
pptx_staging = os.path.join(staging_dir, "racehorse_slide_02_horse_owner_flow_rev3.pptx")
pptx_repo = os.path.join(repo_dir, "racehorse_slide_02_horse_owner_flow_rev3.pptx")
with open(pptx_staging, "rb") as f_src, open(pptx_repo, "wb") as f_dst:
    f_dst.write(f_src.read())
print(f"[SUCCESS] Synchronized PPTX to repo: {pptx_repo}")

# Copy PDF to repo
pdf_repo = os.path.join(repo_dir, "racehorse_slide_02_horse_owner_flow_rev3.pdf")
with open(pdf_path, "rb") as f_src, open(pdf_repo, "wb") as f_dst:
    f_dst.write(f_src.read())
print(f"[SUCCESS] Synchronized PDF to repo: {pdf_repo}")
