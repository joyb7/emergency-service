1. Difference between getElementById,getElementsByClassName and querySelector/querySelectorAll

a)getElementById("ID")- Returns one element (the first with that ID).
b)getElementsByClassName("class") → Returns an HTMLCollection (live, array-like) of all elements with that class.
c)querySelector("selector") → Returns the first element that matches any CSS selector.
d)querySelectorAll("selector") → Returns a NodeList (static, array-like) of all matching elements

2) How do you create and insert a new element into the DOM?
    let newDiv = document.createElement("div");  
    newDiv.textContent = "Hello World";          
    document.body.appendChild(newDiv);            
3) What is Event Bubbling and how does it work?
ans: Event Bubbling → When an event is triggered on a child element, it bubbles up to its parent, then grandparent, until   document.
Example: Clicking a <button> inside a <div> will first trigger the button’s click event, then the div’s, then body’s, etc.

4)What is Event Delegation in JavaScript? Why is it useful?
ans:- Event Delegation = Attaching a single event listener on a parent element to handle events from its child elements (using bubbling).

Useful when:

Many child elements exist (efficient).

Child elements are dynamically added later

5)Difference between preventDefault() and stopPropagation()

ans:-preventDefault() → Prevents the default browser action (e.g., stop form from submitting, stop link from opening).

stopPropagation() → Stops the event from bubbling up to parent elements.