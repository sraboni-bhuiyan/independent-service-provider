import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3 className='text-center mt-5'>A few Question & Answers</h3>
            <p className='fw-bold'>1. Difference between authorization and authentication</p>
            <p>Ans: 
                <ul>
                    <li>Authentication is the process of verifying who a user is. Authorization determines validation of user roles, permissions and privileges.</li>
                    <li>Authentication is done before authorization. And usually authorization is done after successful authentication.</li>
                    <li>While authentication is visible to users, authorization is not visible.</li>
                    <li>Data is transmitted through Token IDs for authentication. On the other hand, data is transmitted through access tokens for authorization.</li>
                </ul>
            </p>
            <p className='fw-bold'>2. Why are you using firebase? What other options do you have to implement authentication?</p>
            <p>Ans: With Firebase, we can outsource our entire authentication system to Firebase. Firebase Authentication makes it easier to get users signed-in without having to understand the complexities behind implementing the authentication system.Implementing Firebase Authentication is relatively fast and easy.</p>
            <p>The alternatives to Firebase for implementing authentication:
                <ul>
                    <li>AWS Amplify</li>
                    <li>Back4App</li>
                    <li>Parse</li>
                    <li>Kuzzle</li>
                    <li>Backendless</li>
                </ul>
            </p>
            <p className='fw-bold'>3. What other services does firebase provide other than authentication</p>
            <p>Ans: 
                <ul>
                    <li>Real time database</li>
                    <li>Dynamic links</li>
                    <li>Cloud messaging</li>
                    <li>File storage</li>
                    <li>Hosting service</li>
                </ul>
            </p>
        </div>
    );
};

export default Blog;