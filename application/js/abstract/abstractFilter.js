import { findersRest } from '../abstract/fetch.js';



export const initFilterContainer = (...finders) => {

    const fetchAndRenderFinder = (name, finderCode) => {

        let result = '';
    
        return findersRest(finderCode)
            .then(data => data.forEach(element => result += `<option value="${element.id}">${element.name}</option>
        `
            ))
            .then(() => {
                return result != undefined && result != null && result != '' ? `
<label for="${finderCode.toLowerCase()}">${name}: </label>
    <select class="filter ${finderCode.toLowerCase()}" name="${finderCode.toLowerCase()}" id="${finderCode.toLowerCase()}">
        <option label=" " value=""></option>
        ${result}
    </select>
    ` : ''
            });
    }


    document.querySelector('.main').insertAdjacentHTML('afterbegin',`
    <div class="filters">
        <div class="filter-tabs">
    
            <label for="fromdate">Дата открытия от:</label>
            <input class="filter fromdate" type="date" name="fromdate" id="fromdate">
    
            <div class="filter-buttons">
                <button class="filter-button do-filter">Применить фильтры</button>
                <button class="filter-button cancel-filter">Сбросить фильтры</button>
            </div>
        </div>
    </div> 
    `);

    finders.forEach(finder => fetchAndRenderFinder(finder.name, finder.code)
        .then(data => document.querySelector('.filter-tabs').insertAdjacentHTML('afterbegin',data)));

    document.querySelector('.cancel-filter').addEventListener('click', e => {
        document.querySelectorAll('.filter').forEach(filter => filter.value = '');
    });
    
}