import os
import io
import requests
from PIL import Image
from duckduckgo_search import DDGS

os.makedirs('public/images/results', exist_ok=True)
pairs_needed = 4
downloaded = 0

ddgs = DDGS()
results = ddgs.images(
    keywords="exterior luxury home soft wash before after split",
    max_results=30,
)

for idx, r in enumerate(results):
    if downloaded >= pairs_needed:
        break
    url = r['image']
    try:
        # Avoid problematic URLs
        if any(x in url.lower() for x in ['pinterest', 'istock', 'shutterstock', '123rf']):
            continue

        resp = requests.get(url, timeout=5)
        resp.raise_for_status()
        img = Image.open(io.BytesIO(resp.content)).convert("RGB")
        
        # Must be wider than tall to be a side-by-side split
        w, h = img.size
        # We need it to be at least moderately wide (like 1.5 ratio)
        if w > h * 1.3:
            left_box = (0, 0, w//2, h)
            right_box = (w//2, 0, w, h)
            
            img_before = img.crop(left_box)
            img_after = img.crop(right_box)
            
            # Save them
            img_before.save(f"public/images/results/extra-{downloaded}-before.jpg", "JPEG", quality=85)
            img_after.save(f"public/images/results/extra-{downloaded}-after.jpg", "JPEG", quality=85)
            print(f"Downloaded and split {url}")
            downloaded += 1
    except Exception as e:
        print(f"Failed {url}: {e}")

print(f"Finished. Downloaded {downloaded} pairs.")
