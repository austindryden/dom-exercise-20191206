function linkPlacer(linkPath){
    // debugger;
    const links = document.createElement("a");
    links.href = linkPath;
    links.textContent = linkPath + ` `;
    linkContainer.appendChild(links);
}

function anchorFromObject(obj){
    let link = anchorFromLinkPath(obj.url);
    link.textContent = obj.text;
    return link;
}

function anchorFromLinkPath(link){
    // They pass a string like "https://altavista.com"
    // Gives back a DOM element equivalent of
    // <a href = "https://altavista.com">https://altavista.com</a>
    const links = document.createElement("a");
    links.href = link;
    links.textContent = link;
    return links;
}

function anchorWithFormattedText(anchor){
    anchor.textContent = anchor.textContent.slice(8);
    return anchor;
}

function appendBreak(){
    const breakElement = document.createElement(`br`);
    linkContainer.appendChild(breakElement);
}

function appendLi(){
    const liElement = document.createElement(`li`);
    linkContainer.appendChild(liElement);
}

function appendElementToContainer(element){
    //takes a DOM element equivalent of
    //<a href = "https://altavista.com">https://altavista.com</a>
    // and append it as a child to linkContainer
    // appendLi();
    linkContainer.appendChild(element);
    appendBreak();
}

function listItemWithAnchor(anchor){
    let li = document.createElement(`li`);
    li.appendChild(anchor);
    return li;
}

function listWithListItems(listItemArray){
    const ul = document.createElement('ul');
    for(let item of listItemArray){
        ul.appendChild(item);
    }
    return ul;
}

//how to write an event handling function
//aka an event handler
// aka event handling callback
// aka event callback
// what is that?
// -its a function
// -it will be called by the Browser, not by you
// - the browser will pass all the info about the event
//      -was it a left click? right click?
//      -was user holding down shift key?
//      - what are the X and Y coordinates on the page when clicked?

function exampleCallback(event){
    debugger;
    //Don't let the browser do the default behavior.
    //for anchor tags, thats going to the URL.
    // for forms, it sends user input to a server.
    event.preventDefault();
    console.log("You clicked!");
    console.log(event.target);
    console.log(event.target.href);
    console.log(event.target.textContent);
    event.target.textContent = "blahh";
    link.addEventListener("click", exampleCallback);
}

const oneAddress = "https://google.com";
const linkContainer = document.querySelector(".js-link-container");
const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];
const addressesObj =[
    {url:"https://google.com",
    text: "gooogler"},
    {url:"https://bing.com",
    text: "bing a ding ding"},
    {url:"https://duckduckgo.com",
    text:"untitled duck searcher"}
];

// transform addresses into anchor elements
// addresses
//     .map(anchorFromLinkPath)
//     .map(anchorWithFormattedText)
//     .map(appendElementToContainer)
// ;

// const a = anchorFromLinkPath(oneAddress);
// const li = listItemWithAnchor(a);
// const ul = listWithListItems([li]);
// appendElementToContainer(ul);

appendElementToContainer(
    listWithListItems(
        addresses
        .map(anchorFromLinkPath)
        .map(anchorWithFormattedText)
        .map(listItemWithAnchor)))
;