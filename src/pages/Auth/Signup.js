import React from 'react';

const Signup = () => {
    return (
        <div className="main-content">
            <h2>Signup Page</h2>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
