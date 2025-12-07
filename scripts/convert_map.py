import os
from PIL import Image

try:
    img = Image.open('d:\\Ankush\\Projects\\Coffee App-Shalini\\src\\assets\\reference_map.gif')
    img.save('d:\\Ankush\\Projects\\Coffee App-Shalini\\src\\assets\\reference_map.png')
    print("Converted GIF to PNG successfully.")
except Exception as e:
    print(f"Error converting GIF: {e}")
