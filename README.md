My React application that fetches and displays the latest news from various categories. Users can view news articles categorized into General, Business, Technology, Sports, and Entertainment. The application features a stylish navbar with category buttons and a news feed that updates based on the selected category.



![Screenshot 2024-08-23 023502](https://github.com/user-attachments/assets/dfe44285-3045-4ad0-8174-b2af153a7a98)

![Screenshot 2024-08-23 023517](https://github.com/user-attachments/assets/27d3a40c-d595-4b9f-9ff8-6ee6d896d64c)



![Screenshot 2024-08-23 023537](https://github.com/user-attachments/assets/c477b8a3-5ae6-460a-bdf6-7d3b663ed0c8)


Category-wise News: Fetch and display news articles from different categories.
Responsive Design: Modern and attractive user interface with a deep blue navbar and styled buttons.
Latest News: Retrieves and shows the latest headlines from NewsAPI.
Technologies Used
Frontend: React.js
Styling: CSS
API: NewsAPI (for fetching news articles)
Setup
Clone the Repository


git clone https://github.com/mahmoodalisha/NewsInShorts.git
Navigate to the Project Directory


Configure API Key

Replace YOUR_API_KEY in the NewsFeed.js file with your actual NewsAPI key.

javascript

const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=5&apiKey=YOUR_API_KEY`
);
Run the Application


npm start
The application will start and be accessible at http://localhost:3000.

Usage
Navbar: Use the category buttons to filter news articles by category.
News Feed: View the latest headlines and details for the selected category.


Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request with your proposed changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any inquiries, please contact Alisha.
