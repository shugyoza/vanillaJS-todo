/*
    // create header section to contain title
    const header = document.createElement("section");
        header.className = "header";
        // create title
        const title = document.createElement("h1");
            title.innerText = "Vanilla JS ToDo List";
            title.className = "title";
        // add title node into header node
        header.appendChild(title);

        // create section to contain input field and add button
        const inputSection = document.createElement("section");
        // adding class into inputSection node
        inputSection.className = "section__input";
            // create input field
            const inputField = document.createElement("input");
                // add placeholder
                inputField.setAttribute("placeholder", "Title...");
                // add class to inputField
                inputField.className = "input__addItem";
            // add input node into inputSection node
            inputSection.appendChild(inputField);

            // create add button
            const addButton = document.createElement("button");
                // add text to button
                addButton.innerText = "Add";
                // add class to button
                addButton.className = "btn___addItem";
            // add the button node on to the inputSection node
            inputSection.appendChild(addButton)

        header.appendChild(inputSection);

    // create the list section to contain todo items
    const listSection = document.createElement("section");
        listSection.className = "list";

main.appendChild(header); */

/*
// Function to fetch data from backend
const getItems = (url, path, id = '') => {
    return fetch(`${url}/${path}/${id}`)
    .then((response) => response.json())
}
// Function to delete data and persist it to backend
const deleteItem = (id) => {
    return fetch(`${url}/${path}/${id}`, {
        method: 'DELETE',
    })
} */

/*
// VIEW

const addNode = (parentNode, childHTMLTag, itemData) => {
    const childNode = document.createElement(childHTMLTag);
    // childNode.className = `list-item`;
    // childNode.id = `list-item-${itemData.id ? itemData.id : Date.now()}`;
    // adding text into the childNode
    addTextToNode(childNode, childHTMLTag, itemData.title);
    parentNode.appendChild(childNode);
    return childNode;
};

const createListNodes = (list, parentNode, childHTMLTag) => {
    list.forEach((obj) => {
        const itemSection = document.createElement("section");
            itemSection.className = "list-item"
        const deleteBtn = document.createElement("button");
            deleteBtn.className = "btn-delete";
            deleteBtn.innerText = 'X';
        dv.appendChild(deleteBtn);

        const childNode = document.createElement(childHTMLTag);
            childNode.className = "list-item-text";
            childNode.id = `list-item-${obj.id ? obj.id : Date.now()}`;
            childNode.innerText = obj.title;
        dv.appendChild(childNode);

        parentNode.appendChild(dv);
    });
    return parentNode;
};



const render = (containerNode, listNode) => {
    return containerNode.appendChild(listNode);
}


// Model
class State {

    #todoList = [];

    get todoList() {
        return this.#todoList;
    }

    set todoList(newTodoList) {
        this.#todoList = [...newTodoList];

        const parentEl = listSection;
        const childTag = "button";
        const listNodes = createListNodes(this.#todoList, parentEl, childTag);

        const containerEl = main;
        render(containerEl, listNodes);

        const deleteBtnClass = "btn-delete";
        const deleteBtns = document.querySelectorAll(`.${deleteBtnClass}`);
        deleteBtns.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                this.#todoList = this.#todoList.filter((todo) => +todo.id !== +event.target.id)
            })
        })
    }
}


// Controller

const init = async (url, path, id) => {

    // create a new state
    const state = new State();

    // populate the todoList from backend
    state.todoList = await getItems(url, path, id);

    // create the chain of html nodes for the todo list
    const itemsList = createListNodes(state.todoList, listSection, "button");
    // render it on client;
    render(main, itemsList);

    return;
}

/*
    const execute = async (url, path, id) => {
        await init(url, path, id)
        .then((res) => addInputListener("click", "button", addOne, "btn~addItem"))
        .then((res) => listSectionListener("click", "section", editOne, "section~list"))
    }
*/

/*
// trigger
const url = "https://jsonplaceholder.typicode.com"
    , path = "todos";

console.log(init(url, path));
// console.log(Controller.init(url, path));

*/
/*
// Static Lay-out
const main = document.querySelector("main")
    , header = view.addOneNode(main, "section", "header")
        , title = view.addOneNode(header, "h1", "title", undefined, undefined, "Vanilla JS ToDo List")

        , inputSection = view.addOneNode(header, "section", "section__input")
            , inputField = view.addOneNode(inputSection, "input", "input__addItem", "addItem", "input").placeholder = "Title..."
            , addButton = view.addOneNode(inputSection, "button", "btn__addItem", "addItem", "btn", "Add")
    // this listSection must exist and hooked to main so that callback can grab it and add event listener
    , listSection = view.addOneNode(main, node.list.section.tag, node.list.section.className, node.list.section.id, node.list.section.prefix); // "section", "section__list", "list", "section");
*/

/*
const url = "https://boilerplate-project-exercisetracker.shugyoza.repl.co/api" // "https://jsonplaceholder.typicode.com"
    , path = "users" // "todos"; */

    /*
    // the text doew not render at all with this
    const addOne = async (newDocument) => {
        return await fetch(`${url}/${path}`, {
            method: 'POST',
            body: JSON.stringify(newDocument),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
        });
    } */
