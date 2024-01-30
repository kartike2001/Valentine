import os

# List of original filenames
original_filenames = [
    "DALL·E 2024-01-30 17.29.51 - A bouquet of Roses in a Glass vase adorned with Ribbons.png",
    "DALL·E 2024-01-30 17.29.54 - A bouquet of Roses in a Glass vase adorned with Pearls.png",
    "DALL·E 2024-01-30 17.29.56 - A bouquet of Roses in a Ceramic vase adorned with Ribbons.png",
    'DALL·E 2024-01-30 17.29.59 - A bouquet of Roses in a Ceramic vase adorned with Pearls.png',
    'DALL·E 2024-01-30 17.30.02 - A bouquet of Lilies in a Glass vase adorned with Ribbons.png',
    'DALL·E 2024-01-30 17.30.05 - A bouquet of Lilies in a Glass vase adorned with Pearls.png',
    'DALL·E 2024-01-30 17.30.09 - A bouquet of Lilies in a Ceramic vase adorned with Ribbons.png',
    'DALL·E 2024-01-30 17.30.11 - A bouquet of Lilies in a Ceramic vase adorned with Pearls.png',
    'DALL·E 2024-01-30 17.30.14 - A bouquet of Orchids in a Glass vase adorned with Ribbons.png',
    'DALL·E 2024-01-30 17.30.28 - A bouquet of Orchids in a Glass vase adorned with Pearls.png',
    'DALL·E 2024-01-30 17.30.30 - A bouquet of Orchids in a Ceramic vase adorned with Ribbons.png',
    'DALL·E 2024-01-30 17.30.32 - A bouquet of Orchids in a Ceramic vase adorned with Pearls.png'
]

def parse_filename(filename):
    # Extract the relevant parts from the filename
    parts = filename.split(" - ")[1]  # Split and take the part after the date and time
    flower, rest = parts.split(" in a ")  # Split into flower and the rest
    vase, decor = rest.split(" vase adorned with ")
    flower = flower.replace("A bouquet of ", "")  # Clean up flower name
    decor = decor.replace(".png", "")  # Remove the file extension from decor
    return flower, vase, decor

def new_filename_format(flower, vase, decor):
    # Format the new filename
    return f"{flower},{vase},{decor}.png"

# Process each file
for filename in original_filenames:
    flower, vase, decor = parse_filename(filename)
    new_filename = new_filename_format(flower, vase, decor)
    print(f"Renaming '{filename}' to '{new_filename}'")
    # Uncomment the line below to actually rename the files
    os.rename(filename, new_filename)
