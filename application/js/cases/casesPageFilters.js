import { initFilterContainer } from '../abstract/abstractFilter.js';


export const initCasesPageFilters = () => {

    initFilterContainer(
                        {
                            name: 'Вид случая',
                            code: 'CaseTypes'
                        }
    );

}