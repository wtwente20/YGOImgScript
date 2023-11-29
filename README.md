# YGOImgScript
Script to pull all card images or by id

# Yu-Gi-Oh! Card Image Downloader

## Overview
This script is designed to download all available images of Yu-Gi-Oh! cards from the official Yu-Gi-Oh! card database. It adheres to the API's rate limits to avoid any service disruptions. The script fetches card details including their unique IDs and then downloads the corresponding card images, storing them locally.

## Prerequisites
Before running the script, ensure you have the following installed:
- Node.js
- npm (usually comes with Node.js)

## Installation
**Clone the Repository**:
git clone https://github.com/wtwente20/YGOImgScript

**Navigate to the Project Directory**:
cd [Your Project Directory]

**Install Dependencies**:
npm install

## Usage
To run the script, use the following command in the terminal:

node downloadImages.js

This will start the process of downloading all Yu-Gi-Oh! card images into the `images` folder within the project directory.

### Important Notes
- The script includes a delay between requests to respect the API's rate limit of 20 requests per second.
- Ensure you have sufficient storage space available, as the script will download a large number of images.
- The download process might take a significant amount of time depending on your internet speed and the total number of cards.

## Contributing
Feel free to fork this repository and submit pull requests. You can also open issues for any bugs found or enhancements.

## Acknowledgments
- Yu-Gi-Oh! API for providing the card data.
