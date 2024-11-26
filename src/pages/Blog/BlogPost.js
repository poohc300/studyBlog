import React from 'react';
import { Comment, CommentForm } from '../../components/Comment';

const BlogPost = ({ post }) => {
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = (comment) => {
        setComments([...comments, comment]);
    };

    return (
        <div className="main-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <CommentForm onSubmit={handleCommentSubmit} />
            <div className="comments">
                {comments.map((comment, index) => (
                    <Comment key={index} {...comment} />
                ))}
            </div>
        </div>
    );
};

export default BlogPost;
