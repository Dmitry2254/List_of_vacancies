console.log('Hello world!!!')

const button_forms = document.getElementById('SubmitAll');
const button_search = document.getElementById('btn_search');
const button_feedback = document.getElementById('btn_feedback');
const button_detailied = document.getElementById('btn_detailied');
const button_feedback1 = document.getElementById('btn_feedback1');
const button_detailied1 = document.getElementById('btn_detailied1');
const button_feedback2 = document.getElementById('btn_feedback2');
const button_detailied2 = document.getElementById('btn_detailied2');

button_forms.addEventListener('click', () => {
    document.getElementById('forma_part').submit();
    document.getElementById('forma_type_of_employment').submit();
    document.getElementById('forma_wage').submit();
    document.getElementById('forma_experience').submit();
    
    alert('Действие выполнено');
});

/* 
Задане №1
Создайте "конфигурацию приложения" и счетчик действий пользователя.
Требования 
1.Объявить const appConfig (объект), который содержит:
2. appTitle - название системы по предметной области,
3. defaultStatus - статус по умолчанию (например, new)
4. minValueForFilter - порог для фильтрации (например, 800)
5. Объявить let actionCount = 0
6. Увеличить actionCOunt 3 раза (любым способом: +=1, ++)
7. Изменить содержимое appConfig (например, поменять minValueForFilter), но не переназначать сам объект.
*/
const appConfig = {
    appTitle: 'Список вакансий',
    defaultStatus: 'new ',
    minValueForFilter: 800
}
appConfig.defaultStatus = 'NEW'
appConfig.minValueForFilter = 2000
console.log(appConfig)

let actionCount = 0 
for (; actionCount <3; ){
    actionCount++
}
console.log(`actionCount = ${actionCount}`)

/* 
Счетчик действий пользователя.
*/
let newActionCount = 0

button_search.addEventListener('click', ()=> {
    newActionCount++
    console.log(newActionCount)
});

button_feedback.addEventListener('click', () => {
    newActionCount++
    console.log(newActionCount)
});

button_detailied.addEventListener('click', () => {
    newActionCount++
    console.log(newActionCount)
});
/* button_feedback1.addEventListener('click', () => {
    newActionCount++
    console.log(newActionCount)
});

button_detailied1.addEventListener('click', () => {
    newActionCount++
    console.log(newActionCount)
});
button_feedback2.addEventListener('click', () => {
    newActionCount++
    console.log(newActionCount)
});

button_detailied2.addEventListener('click', () => {
    newActionCount++
    console.log(newActionCount)
}); */

/* 
Задание №2 
Смоделируйте минимум 6 сущностей предметной области в виде объектов.
Требования к каждому объекту:
•	Id (number)
•	Title (string)
•	Value (number) 
•	Status (string) 
•	CreatedAt (String YYYY-MM-DD)
*/

const admin = {
    id: 1,
    Title: 'Системный администратор',
    Value: 3, 
    Status: 'active',
    CreatedAt: '2026-02-24'
}
const HR_manager = {
    id: 10,
    Title: 'HR-менеджер',
    Value: 2,
    Status: 'active',
    CreatedAt: '2026-02-24'
}
const User = {
    id: 100,
    Title: 'Пользователь',
    Value: 1,
    Status: 'active',
    CreatedAt: '2026-02-24'
}
const User2 = {
    id: 101,
    Title: 'Пользователь',
    Value: 1,
    Status: 'not active',
    CreatedAt: '2026-02-24'
}
const Vacancy = {
    id: 1000,
    Title: "Стажер-разработчик Fullstack",
    Value: 36_000,
    status:'active',
    CreatedAt: '2026-02-24'
}
const Vacancy2 = {
    id: 1001,
    Title: "Джуниор Frontend",
    Value: 75_000,
    status:'active',
    CreatedAt: '2026-02-24'
}
const Vacancy3 = {
    id: 1002,
    Title: "Middle Fullstack",
    Value: 150_000,
    status:'active',
    CreatedAt: '2026-02-24'
}
console.log(admin, HR_manager, User, User2, Vacancy, Vacancy2, Vacancy3)

/* 
Задание №3
Смоделируйте ввод порога фильтрации как строки и корректно преобразуйте его в число.
Требования:
1.	Создать const inputMinValue = “800”
2.	Преобразовать в число const minValue  = Number (inputMinValue);
3.	Если Number.isNaN(minValue) – вывести сообщение об ошибке.
4.	Иначе – вывести в консоль minValue.
*/

const inputMinValue = '800'
const minValue = Number(inputMinValue)

if (Number.isNaN(minValue)) {
    console.log("Сообщаю об ошибке")
}
else {
    console.log(minValue)
}

/* 
Задание №4 
проверить «доступ» к операции в зависимости от параметров.
Требования:
1.	Создать:
2.	Const UserAge = 19;
3.	Const isBlocked = false;
4.	Рассчитать:
5.	Const has Access = userAge >= 18 && userAge < 65 && !isBlocked;
6.	Вывести has Access в консоль
*/

const userAge = 19
const isBlocked = false

const has_Access = userAge >= 18 && userAge < 65 && !isBlocked
console.log(has_Access)

/* 
Задание №5
сформировать текст «Описания статуса» для сущности предметной области. 
Требования:
1.	Взять одну сущность предметной области (любой объект)
2.	Через switch (item.status) вывести:
3.	«Новая запись» для new 
4.	«Завершено» для done 
5.	Неизвестный статус для других
6.	Дополнительно через if/else вывести категорию по value:
7.	>= 1000 – высокое значение
8.	>= 700 – среднее значение 
9.	Иначе – низкое значение
*/

switch (Vacancy2) {
    case Vacancy2.status === "new" || Vacancy2.status === "New":
    {
        console.log("Новая запись")
            if (Vacancy2.Value >=1000)
            {
                console.log("Высокое значение")
            }
            else if (Vacancy2.Value >= 700)
            {
                console.log("Среднее значение")
            }
            else 
            {
                console.log("Низкое значение")
            }
        break
    }
    case Vacancy2.status === "done":
        {
            console.log("Завершено")
                if (Vacancy2.Value >=1000)
                {
                    console.log("Высокое значение")
                }
                else if (Vacancy2.Value >= 700)
                {
                    console.log("Среднее значение")
                }
                else 
                {
                    console.log("Низкое значение")
                }
            break
        }
    default:
        {
            console.log("Неизвестный стутус")
                if (Vacancy2.Value >=1000)
                {
                    console.log("Высокое значение")
                }
                else if (Vacancy2.Value >= 700)
                {
                    console.log("Среднее значение")
                }
                else 
                {
                    console.log("Низкое значение")
                }
            break
        }
}

/* 
Задание №6 
Реализовать повторяющееся действие и подсчитать количество сущностей со статусом new
Требования:
Выполнить повторение действий с использование цикла
Если status === new – увеличить счетчик
Вывести результат в консоль
*/

let counterNew = 0 

for (const item of [admin, User, User2, Vacancy, Vacancy2, Vacancy3]) {
    counterNew += (item.status === 'New' || item.status === 'new' || item.status === 'NEW') === true
}
console.log(counterNew)

/* 
Лабораторная работа №3 
Блок А - функции
Задача А1
Создать функцию calcTotal(a,b), которая:
принимает два числа a и b
Возвращает их сумму
Выводит результат в консоль
*/
const calcTotal = (a,b) => {
    return a + b
}
console.log(`Результат функции calcTotal: ${calcTotal(2,3)}`)
/* 
Задача А2
Создать функцию formatRecord(id, title, status), которая:
принимает id(number), title(string), status(stirng)
вовращает строку формата "#<id> <titile> [<status>]"
продимострировать вызов функции в консоль
*/
const formatRecord = (id, title, status) => {
    return `#${id} ${title} [${status}]`
}
console.log(`Результат выполнения функции formatRecord ${formatRecord(Number(1), ("Тут какая-то информация"), ("new"))}`)
/* 
Блок В - массивы
Задача В1
Создать массив числе values = [1200, 500, 800, 1500] и:
посчитать сумму всех элементов циклом for
вывести сумму в консоль
*/
values = [1200, 500, 800, 1500]
let sumValues = 0
for (let counter of values) {
    sumValues += counter
}
console.log(`Сумма числе массива values: ${sumValues}`)
/* 
Задача B2.
На том же массиве values:
отфильтровать значения >= 800 с помощью filter;
вывести новый массив в консоль.
*/
let filterValues = [...values]
console.log(`Отфильтрованные значения в массиве Values ${filterValues.filter(num => num >= 800)}`)
/* 
Блок C — объекты
Задача C1.
Создать объект record, содержащий поля:
id (number),
title (string),
value (number),
status (string),
createdAt (string).
Вывести объект в консоль и затем:
изменить status на другое значение;
снова вывести объект в консоль.
*/
let record = {
    id: 1,
    title: "Какой-то заголовок",
    value: 1234567890,
    status: "new",
    createdAt: "15.03.2026"
}
console.log(record)
record.status = 'old'
console.log(record)
/* 
Задача C2.
Создать функцию isNew(record), которая:
принимает объект записи;
возвращает true, если record.status === "new", иначе false;
продемонстрировать работу функции в консоли на 2 объектах с разными статусами.
*/
recordNew = {...record}
recordNew.status = 'new'
function isNew(record) {
    if (record.status === "new") {
        return true
    }
    else {
        return false
    }
}
console.log(`Результат первого объекта: ${isNew(record)}`)
console.log(`Результат второго объекта: ${isNew(recordNew)}`)
/* 
Блок D — методы обработки данных
Задача D1.
Создать массив объектов testItems из 4 записей (произвольных) и:
найти запись с заданным id через find;
вывести найденный объект в консоль (или null, если не найдено).
*/
testItems = [
    {id:1, title: 'Администратор', value: 10},
    {id:2, title: 'HR-менеджер', value: 100},
    {id:3, title: 'Пользователь', value: 1000},
    {id:4, title: 'Вакансия', value: 10000}
]
const result = testItems.find(item => item.id === 1)
console.log(result||null)
/* 
Задача D2.
На массиве testItems:
посчитать статистику через reduce: количество записей и сумму value;
вывести объект статистики в консоль.
*/
const stats = testItems.reduce((numOfEntries, sumValues) => {
    numOfEntries.count++
    numOfEntries.totalValue += sumValues.value
    return numOfEntries
}, { count: 0, totalValue: 0 })

console.log(stats)
/* 
Задача E2. В logic.js создать функцию helloFromLogic(), которая возвращает строку "logic works".
В script.js:
вызвать helloFromLogic() и вывести результат в консоль.
*/
const resultLogic = helloFromLogic()
console.log(`Вызов функции из файла logic.js: ${resultLogic}`)
/* 
Блок F — DOM (2 задачи)
Задача F1. В index.html создать элемент:
<div id="message"></div>
В script.js:
получить его через getElementById;
установить textContent = "DOM работает".
*/
const domElement = document.getElementById('message1')
domElement.textContent = 'DOM работает'
/* 
Задача F2. В index.html создать контейнер:
<div id="demoList"></div>
В script.js:
создать 3 элемента <p> через createElement;
заполнить их текстом;
вставить в #demoList через appendChild.
*/
const demoListDOM = document.getElementById('demoList')

for (let i = 0; i <=2; i++) {
    const textDemoListDOM = document.createElement('p')
    textDemoListDOM.textContent = 'Какой-то текст'
    demoListDOM.appendChild(textDemoListDOM)
}

// дальше предметная область / DOM

const btnAll = document.getElementById('btnAll')
const btnNew = document.getElementById('btnNew')
const btnSort = document.getElementById('btnSort')
const btnStats = document.getElementById('btnStats')
const btnDeletet = document.getElementById('btnDeletet')


const vacancyList = document.querySelector('.Vacancys_list') 

btnAll.addEventListener('click', () => {
    const numberOfObjectsVacancys = vacancys.length
    
    for (let counter = 0; counter < numberOfObjectsVacancys; counter++){ 
        const wrapperElement = document.createElement('div')
        wrapperElement.classList.add('Vacancy')
        vacancyList.appendChild(wrapperElement)

        // Название вакансии
        const titleDivElement = document.createElement('div')
        titleDivElement.classList.add('Vacancy_name')
        const linkElement = document.createElement('a')
        linkElement.classList.add('Vacancy_name_link')
        linkElement.href = '#'
        linkElement.textContent = vacancys[counter].title
        
        titleDivElement.appendChild(linkElement)
        wrapperElement.appendChild(titleDivElement)

        // Зарплата вакансии
        const maneyElement = document.createElement('div')
        maneyElement.classList.add('Vacancy_maney')
        const maneyTextElement = document.createElement('p')
        maneyTextElement.classList.add('Vacancy_maney_p')
        maneyTextElement.textContent =`От ${vacancys[counter].salary} р за месяц`
        
        maneyElement.appendChild(maneyTextElement)
        wrapperElement.appendChild(maneyElement)

        //Город вакансии 
        const cityElement = document.createElement('div')
        cityElement.classList.add('Vacancy_locate')
        const cityTextElement = document.createElement('p')
        cityTextElement.classList.add('Vacancy_locate_p')
        cityTextElement.textContent = vacancys[counter].city
        
        cityElement.appendChild(cityTextElement)
        wrapperElement.appendChild(cityElement)

        //Тип занятости вакансии
        const employmentElement = document.createElement('div')
        employmentElement.classList.add('Vacancy_type_of_employment')
        const employmentTextElement = document.createElement('p')
        employmentTextElement.classList.add('Vacancy_type_of_employment_p')
        employmentTextElement.textContent = vacancys[counter].employment
        
        employmentElement.appendChild(employmentTextElement)
        wrapperElement.appendChild(employmentElement)

        // Опыт вакансии
        const experienceElement = document.createElement('div')
        experienceElement.classList.add('Vacancy_experience')
        const experienceTextElement = document.createElement('p')
        experienceTextElement.classList.add('Vacancy_experience_p')
        experienceTextElement.textContent = vacancys[counter].experience
       
        experienceElement.appendChild(experienceTextElement)
        wrapperElement.appendChild(experienceElement)

        // Описание вакансии
        const descriptionElement = document.createElement('div')
        descriptionElement.classList.add('Vacancy_Description')
        const descriptionTextElement = document.createElement('p')
        descriptionTextElement.classList.add('Vacancy_Description_text')
        descriptionTextElement.textContent = vacancys[counter].description
        
        descriptionElement.appendChild(descriptionTextElement)
        wrapperElement.appendChild(descriptionElement)

        //Кнопки вакансии
        const btnDivElement = document.createElement('div')
        btnDivElement.classList.add('Vacancy_buttons')
        const btnFeedbackElement = document.createElement('button')
        btnFeedbackElement .classList.add('btn_feedback')
        btnFeedbackElement.textContent = 'Откликнуться'
        const btnDeleteElement = document.createElement('button')
        btnDeleteElement.classList.add('btn_delete')
        btnDeleteElement.textContent = 'Удалить'
        
        btnDeleteElement.addEventListener('click', () => {
            wrapperElement.remove();
            console.log('Сработала кнопка (Удалить)')
        })

        btnDivElement.appendChild(btnFeedbackElement)
        btnDivElement.appendChild(btnDeleteElement)
        wrapperElement.appendChild(btnDivElement)
         
    }
    console.log('Сработала кнопка (Показать все)')
});

btnNew.addEventListener('click', () => {
    const NewnVacansys = cheakNewnVacansys(vacancys)

    for (let counter = 0; counter < NewnVacansys.length; counter++) { 
        
        const currentVacancy = NewnVacansys[counter]

        const wrapperElement = document.createElement('div')
        wrapperElement.classList.add('Vacancy')
        vacancyList.appendChild(wrapperElement)

        // Название вакансии
        const titleDivElement = document.createElement('div')
        titleDivElement.classList.add('Vacancy_name')
        const linkElement = document.createElement('a')
        linkElement.classList.add('Vacancy_name_link')
        linkElement.href = '#'
        linkElement.textContent = currentVacancy.title 
        
        titleDivElement.appendChild(linkElement)
        wrapperElement.appendChild(titleDivElement)

        // Зарплата вакансии
        const maneyElement = document.createElement('div')
        maneyElement.classList.add('Vacancy_maney')
        const maneyTextElement = document.createElement('p')
        maneyTextElement.classList.add('Vacancy_maney_p')
        maneyTextElement.textContent = `От ${currentVacancy.salary} р за месяц`
        
        maneyElement.appendChild(maneyTextElement)
        wrapperElement.appendChild(maneyElement)

        // Город вакансии 
        const cityElement = document.createElement('div')
        cityElement.classList.add('Vacancy_locate')
        const cityTextElement = document.createElement('p')
        cityTextElement.classList.add('Vacancy_locate_p')
        cityTextElement.textContent = currentVacancy.city
        
        cityElement.appendChild(cityTextElement)
        wrapperElement.appendChild(cityElement)

        // Тип занятости вакансии
        const employmentElement = document.createElement('div')
        employmentElement.classList.add('Vacancy_type_of_employment')
        const employmentTextElement = document.createElement('p')
        employmentTextElement.classList.add('Vacancy_type_of_employment_p')
        employmentTextElement.textContent = currentVacancy.employment
        
        employmentElement.appendChild(employmentTextElement)
        wrapperElement.appendChild(employmentElement)

        // Опыт вакансии
        const experienceElement = document.createElement('div')
        experienceElement.classList.add('Vacancy_experience')
        const experienceTextElement = document.createElement('p')
        experienceTextElement.classList.add('Vacancy_experience_p')
        experienceTextElement.textContent = currentVacancy.experience
       
        experienceElement.appendChild(experienceTextElement)
        wrapperElement.appendChild(experienceElement)

        // Описание вакансии
        const descriptionElement = document.createElement('div')
        descriptionElement.classList.add('Vacancy_Description')
        const descriptionTextElement = document.createElement('p')
        descriptionTextElement.classList.add('Vacancy_Description_text')
        descriptionTextElement.textContent = currentVacancy.description
        
        descriptionElement.appendChild(descriptionTextElement)
        wrapperElement.appendChild(descriptionElement)

        // Кнопки вакансии
        const btnDivElement = document.createElement('div')
        btnDivElement.classList.add('Vacancy_buttons')
        
        const btnFeedbackElement = document.createElement('button')
        btnFeedbackElement.classList.add('btn_feedback')
        btnFeedbackElement.textContent = 'Откликнуться'
        
        const btnDeleteElement = document.createElement('button')
        btnDeleteElement.classList.add('btn_delete')
        btnDeleteElement.textContent = 'Удалить'
        
        btnDeleteElement.addEventListener('click', () => {
            wrapperElement.remove();
            console.log('Сработала кнопка (Удалить)')
        })

        btnDivElement.appendChild(btnFeedbackElement)
        btnDivElement.appendChild(btnDeleteElement)
        wrapperElement.appendChild(btnDivElement)
    }
    
    console.log('Сработала кнопка (Показать NEW)')
})


btnSort.addEventListener('click', () => {

    const SortVacansys = getSortVacancysSalary(vacancys)

    for (let counter = 0; counter < SortVacansys.length; counter++) { 
        const currentVacancy = SortVacansys[counter]

        const wrapperElement = document.createElement('div')
        wrapperElement.classList.add('Vacancy')
        vacancyList.appendChild(wrapperElement)

        // Название вакансии
        const titleDivElement = document.createElement('div')
        titleDivElement.classList.add('Vacancy_name')
        const linkElement = document.createElement('a')
        linkElement.classList.add('Vacancy_name_link')
        linkElement.href = '#'
        linkElement.textContent = currentVacancy.title
        titleDivElement.appendChild(linkElement)
        wrapperElement.appendChild(titleDivElement)

        // Зарплата вакансии
        const maneyElement = document.createElement('div')
        maneyElement.classList.add('Vacancy_maney')
        const maneyTextElement = document.createElement('p')
        maneyTextElement.classList.add('Vacancy_maney_p')
        maneyTextElement.textContent = `От ${currentVacancy.salary} р за месяц`
        maneyElement.appendChild(maneyTextElement)
        wrapperElement.appendChild(maneyElement)

        // Город вакансии 
        const cityElement = document.createElement('div')
        cityElement.classList.add('Vacancy_locate')
        const cityTextElement = document.createElement('p')
        cityTextElement.classList.add('Vacancy_locate_p')
        cityTextElement.textContent = currentVacancy.city
        cityElement.appendChild(cityTextElement)
        wrapperElement.appendChild(cityElement)

        // Тип занятости вакансии
        const employmentElement = document.createElement('div')
        employmentElement.classList.add('Vacancy_type_of_employment')
        const employmentTextElement = document.createElement('p')
        employmentTextElement.classList.add('Vacancy_type_of_employment_p')
        employmentTextElement.textContent = currentVacancy.employment
        employmentElement.appendChild(employmentTextElement)
        wrapperElement.appendChild(employmentElement)

        // Опыт вакансии
        const experienceElement = document.createElement('div')
        experienceElement.classList.add('Vacancy_experience')
        const experienceTextElement = document.createElement('p')
        experienceTextElement.classList.add('Vacancy_experience_p')
        experienceTextElement.textContent = currentVacancy.experience
        experienceElement.appendChild(experienceTextElement)
        wrapperElement.appendChild(experienceElement)

        // Описание вакансии
        const descriptionElement = document.createElement('div')
        descriptionElement.classList.add('Vacancy_Description')
        const descriptionTextElement = document.createElement('p')
        descriptionTextElement.classList.add('Vacancy_Description_text')
        descriptionTextElement.textContent = currentVacancy.description
        descriptionElement.appendChild(descriptionTextElement)
        wrapperElement.appendChild(descriptionElement)

        // Кнопки вакансии
        const btnDivElement = document.createElement('div')
        btnDivElement.classList.add('Vacancy_buttons')
        
        const btnFeedbackElement = document.createElement('button')
        btnFeedbackElement.classList.add('btn_feedback')
        btnFeedbackElement.textContent = 'Откликнуться'
        
        const btnDeleteElement = document.createElement('button')
        btnDeleteElement.classList.add('btn_delete')
        btnDeleteElement.textContent = 'Удалить'
        
        btnDeleteElement.addEventListener('click', () => {
            wrapperElement.remove()
            console.log('Сработала кнопка (Удалить)')
        });

        btnDivElement.appendChild(btnFeedbackElement)
        btnDivElement.appendChild(btnDeleteElement)
        wrapperElement.appendChild(btnDivElement)
    }
    
    console.log('Сработала кнопка (Сортировать по salary ↓)')
})

btnStats.addEventListener('click', () => {
    const stats = buildVacancyStats(vacancys);
    
    const wrapperElement = document.getElementById('message');
    const messageTextElement = document.createElement('p');
    
    messageTextElement.textContent =
        `Всего записей: ${stats.totalCount}\n` +
        `Сумма salary: ${stats.sumSalary}\n` +
        `Максимум salary: ${stats.maxSalary}\n` +
        `Количество забаненых вакансий: ${stats.banCount}`;
    
    wrapperElement.appendChild(messageTextElement);
    console.log('Сработала кнопка "Показать статистику"')
});
