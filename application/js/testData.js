const testRestFilters = () => [{id: 1, name: 'Поликлинический'}, {id: 2, name: 'Госпитализации'}, {id: 3, name: 'Неотложной помощи'}];
const testValidations = () => [{validationLevel: "error", validationText:"Ошибка!!!"},{validationLevel: undefined, validationText: "Дата закрытия случая не может быть меньше даты открытия!"},{validationLevel: "warning", validationText: "В Вашем МО не оказывается неотложная помощь!"},{validationLevel: "error", validationText: "Дата открытия случая не может быть больше текущей даты!"}];
const testCasesData = () => [
    {uid: "1", casetype: "Поликлинический", opendate: "01.05.2020", closedate: "20.05.2020", patientfio: "Васин Вася Васянович", patientbd: "01.01.1990", comment: "блаблаблаблабла"},
    {uid: "2", casetype: "Госпитализации", opendate: "01.01.2020", closedate: "открыт", patientfio: "Иванов Иван Иванович", patientbd: "21.07.1989", comment: ""},
    {uid: "3", casetype: "Поликлинический", opendate: "03.03.2020", closedate: "20.05.2020", patientfio: "Петров Петр Петрович", patientbd: "11.03.1965", comment: ""},
    {uid: "4", casetype: "Госпитализации", opendate: "25.05.2020", closedate: "20.05.2020", patientfio: "Фроскин Фроска Молодецович", patientbd: "23.07.1992", comment: "ваще крутой дядька он"},
    {uid: "5", casetype: "Скорой помощи", opendate: "06.05.2020", closedate: "открыт", patientfio: "Габеллян Арменка", patientbd: "14.03.1995", comment: ""},
    {uid: "1", casetype: "Поликлинический", opendate: "01.05.2020", closedate: "20.05.2020", patientfio: "Васин Вася Васянович", patientbd: "01.01.1990", comment: "блаблаблаблабла"},
    {uid: "2", casetype: "Госпитализации", opendate: "01.01.2020", closedate: "открыт", patientfio: "Иванов Иван Иванович", patientbd: "21.07.1989", comment: ""}
    ];