const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Function to download an image
const downloadImage = async (url, imagePath) => {
    try {
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream'
        });

        return new Promise((resolve, reject) => {
            response.data.pipe(fs.createWriteStream(imagePath))
                .on('finish', resolve)
                .on('error', reject);
        });
    } catch (error) {
        console.error(`Error downloading image ${url}: ${error}`);
    }
};

// Main function to download images for a set of card IDs
const downloadCards = async () => {
    const cardIds = [74889525, 50122883, 57902193, 60830240, 23587624]; // Replace with card IDs
    for (const cardId of cardIds) {
        const imageUrl = `https://images.ygoprodeck.com/images/cards/${cardId}.jpg`;
        const imagePath = path.join(__dirname, 'images', `${cardId}.jpg`);
        console.log(`Downloading image for Card ID: ${cardId}`);
        await downloadImage(imageUrl, imagePath);
    }
};

downloadCards().then(() => console.log('Download completed.'));
