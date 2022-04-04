import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-text'>
            <h2>Question: What is Context API?</h2>
            <p>Answer: The context API is the way for a react app to generate global variables which can be passed around. The variation to prop drilling or moving props from grandparent to child to parent and so on. React.creatContext() returns a consumer and a provider. Provider is a component that provides the state to its children. It holds the store and be the parent of all components that may need that store. Consumer requires a function as a child. The function receives the context value and returns a react node.</p>
            <h2>Question: What is semantic tag? explain with example.</h2>
            <p>Answer: Semantic tag makes the code easier to write and understand for the developer as well as instructs the browser on how to treat them. When a page is well designed visually, it is easy to identify the different parts of web page. By using semantic element, google understands which is the most important content. It gives to the browser an explicit instruction to prioritize content. The example of semantic elements are header,main,nav,section,article,footer etc.</p>
        </div>
    );
};

export default Blogs;