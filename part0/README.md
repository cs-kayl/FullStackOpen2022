# FullStackOpen2022

## Part 0 Fundamentals of web apps
In this part, we will familiarize ourselves with the practicalities of taking the course. After that we will have an overview of the basics of web development, and also talk about the advances in web application development during the last few decades


## Notes

### What is the 1st rule of web development?
Always keep the Developer Console open on your web browser. On macOS, open the console by pressing F12 or option-cmd-i simultaneously. On Windows or Linux, open the console by pressing F12 or ctrl-shift-i simultaneously. The console can also be opened via the context menu.

Remember to always keep the Developer Console open when developing web applications.

Make sure that the Network tab is open, and check the Disable cache option as shown. Preserve log can also be useful: it saves the logs printed by the application when the page is reloaded.

NB: The most important tab is the Console tab. However, in this introduction we will be using the Network tab quite a bit.


### What is the Document Object Model?
We can think of HTML-pages as implicit tree structures.

The functioning of the browser is based on the idea of depicting HTML elements as a tree.

It is an Application Programming Interface (API) which enables programmatic modification of the element trees corresponding to web-pages.

The JavaScript code introduced in the previous chapter used the DOM-API to add a list of notes to the page. 

The topmost node of the DOM tree of an HTML document is called the document object. We can perform various operations on a web-page using the DOM-API. You can access the document object by typing document into the Console-tab.