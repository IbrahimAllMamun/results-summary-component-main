import data from './data.json' assert {type: 'json'};

let info = document.getElementById('info')
for (let i in range(0,data.length)){
    info.innerHTML +=  `
    <li class="category category-${data[i].category.toLowerCase()}">
        <div class="label">
        <img src="${data[i].icon}" alt="${data[i].category.lower}">  
        <h3>${data[i].category}</h3>
        </div>
        <div class="score">${data[i].score} <span>/ 100</span></div>
    </li>
  `
}

function range(start, end) {
  return Array.apply(0, Array(end))
    .map((element, index) => index + start);
}
