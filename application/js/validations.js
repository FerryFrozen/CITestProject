export const initValidations = () => {

    const validationWrapper = document.querySelector('.validation-wrapper');

    const validationIsSet = v => v.validationLevel != undefined && v.validationLevel != null && v.validationLevel != '' && v.validationText != undefined && v.validationText != null && v.validationText != '';

    const wrapValidation = v => {
        return validationIsSet(v) ?
    `
    <div class="validation-item ${v.validationLevel}">
        <p>${v.validationText}</p>
    </div>`
    : '';
    };

    const getAllValidations = (vs) => {
        let res = '';
        console.log(vs);
        vs.forEach(v => res += wrapValidation(v));
        return res;
    };

    const validate = (vs) => {
        //TODO: rework with real data
        validationWrapper.textContent = '';
        validationWrapper.insertAdjacentHTML('afterbegin', getAllValidations(vs));
        validationWrapper.classList.remove('hide');
        setTimeout(() => validationWrapper.classList.add('hide'), 5000);
    };

}