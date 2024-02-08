# <h1>Cryptocurrency Tracker (CryptoDitto)</h1>

This project is a simple web application that provides users with real-time tracking of the Top 100 Cryptocurrencies. It allows users to view a list of cryptocurrencies, their details, edit existing entries, delete entries, and add new cryptocurrencies.

# <h1>Features</h1>
- Top 100 Cryptocurrencies: The main tab showcases the top 100 cryptocurrencies along with their current prices, market cap etc., providing users an overview of the cryptocurrency market.

- Trending Coins: This applicaiton also displays the 24H trending coins, helping users to stay updated with the latest trends.  

- Detailed Modal: Users can click on the Cryptocurrency in the main tab to view its details in a different tab. The modal displays addtional information such as the coin, symbol, prices, 24H High/Low, All Time High(ATH) data etc.

- POST/PUT/DELETE: Users can also add new cryptocurrencies to the list and edit existing or newly added cryptocurrencies to update their information. Additionally, they can delete cryptocurrencies from the list.

# <h1>Technologies</h1>
- React.js, Tailwind CSS, Zustand, Axios, React-Router-Dom.
- CoinGecko API


# <h1>Components</h1>
- Header: The Header component provides brand name and headlines.

- Cryptolist: Renders a list of cryptocurrencies with brief details. It provides options to edit or delete each cryptocurrency entry.

- Cryptoform: A reusable form for adding or editing cryptocurrency details. It allows users to input data such as name, symbol, current price.

- useStore: Provides a custom hook for managing application state using Zustand. It includes functions for setting, updating, and removing cryptocurrency data.

- Pagination: Helps users move between different pages of content.

- TopTrendingCoins: Provides the top 4 trending cryptocurrencies of the day, enabling users to explore more details with a single click.

- Cryptocrud: Manage cryptocurrency list, allowing users to add, edit, and remove cryptocurrencies, with pagination for easy navigation.
  
# <h1>Screenshots</h1>

<img width="1470" alt="Screenshot 2024-02-08 at 10 39 01 AM" src="https://github.com/OrihHiro/Gambittest/assets/147576847/f3b568f6-68e6-4d35-b2a7-d8aa1030c59b">

<img width="1328" alt="Screenshot 2024-02-08 at 10 39 19 AM" src="https://github.com/OrihHiro/Gambittest/assets/147576847/bb49766c-f5dc-4a80-a182-6c6f029d03c7">

<img width="1470" alt="Screenshot 2024-02-08 at 10 40 31 AM" src="https://github.com/OrihHiro/Gambittest/assets/147576847/7bd98eee-16b3-4d14-948e-e2aa23929638">



# <h1>Deployment</h1>
This section has moved here: https://cryptoditto.netlify.app/

