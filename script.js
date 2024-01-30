function handleNoButtonMouseover() {
    const button = this;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const section = document.getElementById('valentineQuestion');
    const rect = section.getBoundingClientRect();

    const sectionX = rect.left + window.scrollX;
    const sectionY = rect.top + window.scrollY;
    const sectionWidth = rect.width;
    const sectionHeight = rect.height;

    const maxX = sectionX + sectionWidth - buttonWidth;
    const maxY = sectionY + sectionHeight - buttonHeight;

    const x = Math.max(sectionX, Math.min(maxX, Math.random() * (maxX - sectionX) + sectionX));
    const y = Math.max(sectionY, Math.min(maxY, Math.random() * (maxY - sectionY) + sectionY));

    button.style.left = x + 'px';
    button.style.top = y + 'px';
    button.style.position = 'absolute';
}

function handleRevealButtonClick() {
    document.getElementById('surpriseMessage').style.display = 'block';
    this.style.display = 'none'; // Hide the button after clicking
}

function handleYesButtonClick() {
    document.getElementById('responseMessage').style.display = 'block';
    document.getElementById('responseMessage').innerText = 'Oh Lala Muuuuuahhhhh! 💖';
    document.getElementById('noButton').style.display = 'none';
    this.style.display = 'none';

    // Trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function incrementLoveMeter() {
    var meterFill = document.getElementById('meterFill');
    var width = 0;
    var interval = setInterval(function frame() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            meterFill.style.width = width + '%';
        }
    }, 20);
}

function createHeart() {
    var heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000); // Remove heart after 5 seconds
}
function addImageHoverEffects() {
    const images = document.querySelectorAll('#photoGallery img');
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.5s ease-in-out';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateSelectOptions();
    document.getElementById('createBouquetButton').addEventListener('click', createBouquet);
});

function populateSelectOptions() {
    // Example data, you can replace these with your own options
    const flowers = ['Roses', 'Lilies', 'Orchids'];
    const vases = ['Glass', 'Ceramic'];
    const decorations = ['Ribbons', 'Pearls'];

    populateSelect('flowerSelect', flowers);
    populateSelect('vaseSelect', vases);
    populateSelect('decorationSelect', decorations);
}

function populateSelect(selectId, options) {
    const select = document.getElementById(selectId);
    options.forEach(option => {
        let opt = document.createElement('option');
        opt.value = option;
        opt.innerHTML = option;
        select.appendChild(opt);
    });
}

function createBouquet() {
    const flower = document.getElementById('flowerSelect').value;
    const vase = document.getElementById('vaseSelect').value;
    const decoration = document.getElementById('decorationSelect').value;

    const imageName = flower + ',' + vase + ',' + decoration + '.png';
    const imagePath =  imageName;

    const resultDiv = document.getElementById('bouquetResult');
    resultDiv.innerHTML = `<p>Your Bouquet: ${flower} in a ${vase} vase with ${decoration}.</p>
                           <img src="${imagePath}" alt="Bouquet Image">`;
    resultDiv.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    addImageHoverEffects();
});

document.getElementById('noButton').addEventListener('mouseover', handleNoButtonMouseover);
document.getElementById('revealButton').addEventListener('click', handleRevealButtonClick);
document.getElementById('yesButton').addEventListener('click', handleYesButtonClick);
document.getElementById('loveMeterButton').addEventListener('click', incrementLoveMeter);

setInterval(createHeart, 300);
