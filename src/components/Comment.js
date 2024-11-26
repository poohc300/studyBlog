import React, { useState } from 'react';

const Comment = ({ username, content }) => {
    return (
        <div className="comment">
            <strong>{username}</strong>
            <p>{content}</p>
        </div>
    );
};

const CommentForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ username, content });
        setUsername('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="comment-form">
            <input
                type="text"
                placeholder="Your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <textarea
                placeholder="Your comment"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export { Comment, CommentForm };
