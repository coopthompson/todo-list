import './page.css'
import { listFactory, pushList } from './todo';

let allLists = [];
let tempList = listFactory('Title', 'Description', 'Date due', 'Priority')

function gridCreate () {
    function headCreate () {
        const header = document.createElement('div');
        header.classList.add('header-style');
        const todo = document.createElement('h2');
        const list = document.createElement('button');
        const listsBox = document.createElement('div');
        listsBox.classList.add('box')
        list.textContent = '+'
        header.appendChild(todo);
        header.appendChild(list);
        header.appendChild(listsBox);
        list.addEventListener('click', () => {
            pushList(tempList);
        })
        return header;
    }

    function mainCreate() {
        const main = document.createElement('div');
        main.classList.add('main-style');
        return main;
    }
    const websiteGrid = document.querySelector('div');
    websiteGrid.classList.add('grid-layout');
    websiteGrid.appendChild(headCreate());
    websiteGrid.appendChild(mainCreate());
    return websiteGrid;
};



gridCreate()



// const list2 = listFactory('4','test','test','test')
















