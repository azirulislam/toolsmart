import React from 'react';

const Blogs = () => {
    return (
        <div>
            
            <div className='p-20'>
            <h2 className='text-red-500 text-2xl'>About the ways to manage a state in a React application.</h2>
            <p> Ans: There are four ways to manage state in a React application.That is Local state, Global state, Server state, URL state.Local state is most often managed in React using the useState hook.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.To manage your global state, reach for tried and tested third-party libraries.</p>

            <h2 className='text-red-500 text-2xl'>How does prototypical inheritance work?</h2>
            <p> Ans: Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.Difference between Function.prototype.apply and Function.prototype.call. Explain sub-classes and inheritance in ES6.</p>

            <h2 className='text-red-500 text-2xl'>How will you improve the performance of a React Application?</h2>
            <p>Ans: Work with and write semantic HTML tags.Work with and write CSS selectors. Implement a CSS reset. Understand the box model and how to reset to border-box.Understand flexbox. Work with and implement responsive web principles including the proper user of media queries.</p>

            <h2 className='text-red-500 text-2xl'>Why you do not set the state directly in React?</h2>
            <p>Ans: We can not update the state directly because of the following reasons: If we update it directly, calling the setState() afterward may just replace the update you made.
            When we directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.  You will lose control of the state across all components.</p>

            <h2 className='text-red-500 text-2xl'>What is a unit test? Why should write unit tests?</h2>
            <p>Ans: Unit testing is an essential instrument in the toolbox of any serious software developer.Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.we write unit tests so they can repeatedly run them and check that no bugs have been introduced. If unit tests are slow,we are likely to skip running them on our own machines.</p>
        </div>
        </div>
    );
};

export default Blogs;