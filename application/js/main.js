import { initCasesPageFilters } from './cases/casesPageFilters.js';
import { initValidations } from './validations.js';
import { initModal } from './modal.js';
import { casesTable } from './cases/casesPageMainTable.js';

//basic functionality section
const caseAddButton = document.querySelector('.case-add');
const caseDeleteButton = document.querySelector('.case-delete');

const $ = {};

//end of basic functionality section

/////////////////////////////////////////////////////////////////////////////////////

//filters section

$.filters = initCasesPageFilters;

//end of filters section

/////////////////////////////////////////////////////////////////////////////////////

//validation section

$.validate = initValidations;

//end of validation section

/////////////////////////////////////////////////////////////////////////////////////

//modal section

$.modal = initModal;

//end of modal section

////////////////////////////////////////////////////////////////////////////////////

//table section

$.casesTable = casesTable;

//end of table section

///////////////////////////////////////////////////////////////////////////////////

//action section

const pageInit = () => {

    $.filters();

    const modal = $.modal();

    const casesTable = $.casesTable();

    caseAddButton.addEventListener('click', e => {
        console.log('Case adding...');
        modal.open();
    });

    caseDeleteButton.addEventListener('click', e => console.log('Case deleting...'));

}
//end of action section

pageInit();