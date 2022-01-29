const pagination = document.querySelector('.pagination');
let inner = '';
for(let i = 1; i < 10; i++){
    inner += `
        <li class="page_item">
            <a class="page_link">${i}</a>
        </li>
    `
}
pagination.innerHTML = `
    <ul>
        <li class="page_item"><a class="page_link"><</a></li>
        ${inner}
        <li class="page_item"><a class="page_link">></a></li>
    </ul>
`;








