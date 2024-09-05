import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsFeed.css';

const NewsFeed = ({ category }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError(null);
            try {
                const apiKey = process.env.REACT_APP_GNEWS_API_KEY;
                const response = await axios.get(
                    `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${apiKey}`
                );
                setNews(response.data.articles);
            } catch (err) {
                setError('Error fetching news');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className="news-feed">
            <h1 className="news-title">Latest {category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
            <ul className="news-list">
                {news.length === 0 ? (
                    <p className="no-news">No news available for this category.</p>
                ) : (
                    news.map((article, index) => (
                        <li key={index} className="news-item">
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                                <div className="news-image-container">
                                    {article.image && <img src={article.image} alt={article.title} className="news-image" />}
                                </div>
                                <div className="news-content">
                                    <h3 className="news-title">{article.title}</h3>
                                    <p className="news-description">{article.description}</p>
                                    <p className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
                                </div>
                            </a>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default NewsFeed;
