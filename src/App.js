import React, { useState } from 'react';
import NewsFeed from './components/NewsFeed';
import './App.css';

const App = () => {
    const [category, setCategory] = useState('general');

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className="App">
            <div className="navbar">
                <h1>Welcome to My News Homepage</h1>
                <div className="category-buttons">
                    <button onClick={() => handleCategoryChange('general')}>General</button>
                    <button onClick={() => handleCategoryChange('business')}>Business</button>
                    <button onClick={() => handleCategoryChange('technology')}>Technology</button>
                    <button onClick={() => handleCategoryChange('sports')}>Sports</button>
                    <button onClick={() => handleCategoryChange('entertainment')}>Entertainment</button>
                </div>
            </div>
            <main>
                <NewsFeed category={category} />
            </main>
        </div>
    );
};

export default App;
