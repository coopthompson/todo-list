export const listFactory = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority}
}



export const pushList = (list) => {   
    allLists.push(list);
    console.log(allLists);
    for (let i = 0; i < allLists.length; i++) {
        const visibleList = document.createElement('div')
        visibleList.classList.add('list-style')
        const removeButton = document.createElement('button')
        removeButton.textContent = 'X'
        removeButton.classList.add('remove')
        visibleList.appendChild(removeButton)
        const main = document.querySelector('.main-style')
        for(const value in list) {
            let listPart = document.createElement('p');
            listPart.textContent = list[value];
            visibleList.appendChild(listPart);
            main.appendChild(visibleList)
            listPart = ''
        } 
    }

}












