import { findersRest } from "./abstract/fetch.js";

export const initModal = () => {

    const _createModal = () => {
        let str = '';
        findersRest('CaseTypes').then(data => data.forEach(element => str += `<option value="${element.id}">${element.name}</option>
            `));
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.classList.add('hide');
        modal.setAttribute('data-close', true);
        modal.insertAdjacentHTML('afterbegin', `
<div class="modal__block">
<h2 class="modal__header">Создание случая</h2>
<div class="modal__content">
    <form class="modal__submit" method="post" enctype="multipart/form-data">

        <label>
            <span>Вид случая:</span>
            <select name="caseType" required>
                ${str}
            </select>
        </label>
        
        <label>
            <span>Дата открытия:</span>
            <input name="openDate" type="date" required>
        </label>
        
        <label>
            <span>Дата закрытия:</span>
            <input name="closeDate" type="date">
        </label>

        <label>
            <span>Пациент:</span>
            <input class="patientFio" name="patientFio" type="text" required>
        </label>					

        <label>
            <span>Дата рождения:</span>
            <input name="patientBd" type="date" required>
        </label>

        <label>
            <span>Комментарий:</span>
            <textarea name="comment" maxlength="3000"></textarea>
        </label>

        <div class="modal__btn-block">
            <button class="btn modal__btn-submit">Сохранить</button>
        </div>

    </form>
</div>
<button class="modal__close" data-close="true">&times;</button>
</div>
`
        );
        document.body.appendChild(modal);
        return modal;
    }

    const $modal = _createModal();
    let destroyed = false;

    const modal = {
        open() {
            !destroyed && $modal.classList.remove('hide');
        },
        close() {
            $modal.classList.add('hide');
        },
        destroy() {
            $modal.parentNode.removeChild($modal);
            $modal.removeEventListener('click', listener);
            destroyed = true;
        }
    };

    const listener = e => {
        if (e.target.dataset.close) {
            modal.close();
        }
    }

    // const validateAndSave = async () => {

    //     const addCaseFormElements = $modal.querySelector('.modal__submit').elements;
    //     const valuesArray = [];
    //     [...addCaseFormElements].forEach(el => valuesArray[el.name]=el.value);

    //     const getResponse = async () => {
            
    //         response = await fetch(`${BASE_URL}c=validations&m=validate`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json;charset=utf-8'
    //                 },
    //             body: JSON.stringify(valuesArray)
    //         })
    //         .then(res => res.json());
    //         return JSON.parse(response);
    //     }

    //     const validations = await getResponse();
    //     validate(validations);
    // }

    $modal.addEventListener('click', listener);

    const saveButton = $modal.querySelector('.modal__btn-submit');
    //saveButton.addEventListener('click', validateAndSave);



    return modal;
    
}
