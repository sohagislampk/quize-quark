import React from 'react';

const Blog = () => {
    return (
        <div className='mx-8 md:mx-16 text-left my-10'>
            <div> <h1 className='text-2xl font-semibold mt-8 mb-3'>Question : What is the purpose of use React Router ?</h1>
                <p><strong>Answer :</strong> React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                    By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p></div>
            <div>
                <h1 className='text-2xl font-semibold mt-8 mb-3'>Question : How Does Context API Work in React ?</h1>
                <p><strong>Answer :</strong> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-8 mb-3'>Question : What is useRef hook and How Does it Works in React ?</h1>
                <p><strong>Answer :</strong> The useRef hook is the new addition in React 16.8.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
                <p>One of the most common use case of useRef hook is to access DOM elements (NOT custom React component). For example if you want to access an input element after it has been mounted to the DOM, instead of using document.getElementById, document.querySelector or any other method for selecting DOM elements like in vanilla javascript, you can use useRef hook.</p>
                <p>There are situations where you might want to persist certain values in consecutive renders. Instead of storing these values in state which might cause unnecessary renders, you can store it as the value of useRef's current property since react guarantees that this value is persisted between re-renders. Furthermore, if you want to determine state value from previous state values, it is advisable to use useRef hook to persist them. This is very helpful because in functional components, state is not merged but completely replaced.</p>
            </div>
        </div>
    );
};

export default Blog;