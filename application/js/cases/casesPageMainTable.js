import {renderTable} from '../abstract/abstractTable.js';
import { casesRest } from '../abstract/fetch.js';


export const casesTable = () => {




    const _renderCasesTable = (data) => {

            const casesOptions = [
                {colWidth: "10%", colName: "Номер случая"},
                {colWidth: "15%", colName: "Вид случая"},
                {colWidth: "10%", colName: "Дата открытия"},
                {colWidth: "10%", colName: "Дата закрытия"},
                {colWidth: "20%", colName: "ФИО пациента"},
                {colWidth: "10%", colName: "Дата рождения"},
                {colName: "Комментарий"}
            ];
    
            const casesRowMapper = element => `
<tr>
    <td align="center">${element.uid != null ? element.uid : ''}</td>
    <td align="center">${element.casetype != null ? element.casetype : ''}</td>
    <td align="center">${element.opendate != null ? element.opendate : ''}</td>
    <td align="center">${element.closedate != null ? element.closedate : ''}</td>
    <td align="center">${element.patientfio != null ? element.patientfio : ''}</td>
    <td align="center">${element.patientbd != null ? element.patientbd : ''}</td>
    <td align="center">${element.comment != null ? element.comment : ''}</td>
</tr>
`; 
            return renderTable(casesOptions, data, casesRowMapper);
    }






    const _refresh = (casetype, fromdate) => {

        return casesRest(casetype, fromdate)
            .then(data => _renderCasesTable(data));

    }



    const _casesTable = () => {

        const cases = document.querySelector('.cases table');

        _refresh()
            .then(data => cases.innerHTML = data);

        return cases;

    }

        

    const $casesTable = _casesTable();

    const casesTable = {

        refresh(casetype, fromdate) {
            _refresh(casetype, fromdate)
                .then(data => $casesTable.innerHTML = data);
        }
        ,
        show() {
            console.log($casesTable);
        }
    }

    document.querySelector('.do-filter').addEventListener('click', e => {
        casesTable.refresh(document.querySelector('.filter.casetypes').value, document.querySelector('.filter.fromdate').value);
    })

    return casesTable;

}