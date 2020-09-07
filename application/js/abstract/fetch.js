const BASE_URL = 'http://localhost:4747/gabella?';

const commonRest = async (c, m, method, queryString) => {
    const response = await fetch(`${BASE_URL}c=${c}&m=${m}${queryString}`,{method: method})
        .then(res => res.json());
    return JSON.parse(response);
}

export const casesRest = async (caseType, fromDate) => {
    let queryString = `&caseType=${caseType != '' && caseType != undefined ? caseType : ''}&fromDate=${fromDate != '' && fromDate != undefined ? fromDate : ''}`;
    let result = await commonRest('cases','getFiltered', 'GET', queryString);
    return result;
}

export const findersRest = async (finderCode) => {
    let result = await commonRest('finders','getFinder','GET', `&finderCode=${finderCode}`);
    return result;
}

export const patientRest = async () => {
    let result = await commonRest('patients', 'getPatient', 'GET', '&fio=Фроскин Фроска Молодецович&bd=1992-07-23');
    return result;
}