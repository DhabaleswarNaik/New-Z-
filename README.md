# New-Z

## Description

NewsApp is a React-based application that allows users to browse top news headlines from different categories and countries. The application fetches news data from the NewsAPI and displays it in a user-friendly interface with infinite scroll functionality.

## Features

- Browse top news headlines by category (General, Entertainment, Sports, Health, Tech, Business)
- Switch between different countries to view local news
- Infinite scroll to load more articles as you scroll down
- Responsive design for optimal viewing on all devices

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/New-Z.git
    cd NewsApp
    ```

2. **Install the dependencies**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then run the following command to install all necessary npm packages:

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add your NewsAPI key:

    ```plaintext
    REACT_APP_NEWS_API_KEY=your_newsapi_key
    ```

    Replace `your_newsapi_key` with your actual API key from [NewsAPI](https://newsapi.org/).

4. **Start the development server**

    Run the following command to start the app in development mode:

    ```bash
    npm start
    ```

    The app should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- To view news articles, navigate to the desired category and country using the URL format `http://localhost:3000/:country/:category`, where `:country` is the country code (e.g., `us`, `in`) and `:category` is the news category (e.g., `general`, `sports`).

## Project Structure

- `src/`
  - `components/`
    - `News.js`: Main component to display news articles
    - `NewsItem.js`: Component to display individual news article
    - `Loading.js`: Loading spinner component
  - `App.js`: Main application component
  - `index.js`: Entry point for the React application
  - `App.css`: Styling for the application

## Dependencies

- React
- React Router DOM
- PropTypes
- Infinite Scroll

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.

## Acknowledgements

- [NewsAPI](https://newsapi.org/) for providing the news data
