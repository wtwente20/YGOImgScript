const axios = require('axios');
const fs = require('fs');
const path = require('path');

// Function to add delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

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

// Main function to download images for all cards
const downloadAllImages = async () => {
    try {
        // Fetch the list of all cards
        const cardsResponse = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const cards = cardsResponse.data.data;

        for (const card of cards) {
            // Assuming each card has a unique ID and an image
            const imageUrl = `https://images.ygoprodeck.com/images/cards/${card.id}.jpg`;
            const imagePath = path.join(__dirname, 'images', `${card.id}.jpg`);
            console.log(`Downloading image for Card ID: ${card.id}`);
            await downloadImage(imageUrl, imagePath);

            // Delay to respect the rate limit (50ms per request)
            await delay(50);
        }

        console.log('Download completed.');
    } catch (error) {
        console.error(`Error fetching card list: ${error}`);
    }
};

downloadAllImages();
