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


/* 
Лабораторная работа №4
Блок А - регулярные выражения: проверка формата
Задача А1
Создать функцию isValidDateYMD(s), которая:
Принимает строку s
проверяет формат строго YYYY-MM-DD с помощью RegExp
возвращает true/false
продемотрировать 3 теста: Корректный формат, неверный формат, пустая строка
*/
function isValidDateYMD(s) {
    const validDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    return validDate.test(s)
}
console.log(`Корректный формат (2026-03-31): ${isValidDateYMD("2026-03-31")}`) 
console.log(`Неверный формат (2222-22-22): ${isValidDateYMD("2222-22-22")}`) 
console.log(`Пустой формат строки: ${isValidDateYMD("")}`)
/* 
Задача А2
Создать функцию isValidTitle(s), которая 
Принимает строку s 
Запрещается ввод "Служебных" символов: <,>,{,},;
Использует RegExp и возвращает true/false
Продемонстрировать 3 теста: обычная строка, строка с <, строка с ;
*/
function isValidTitle (s) {
    const validTitle = /[\u003c\u003e\u007b\u007d\u003b]/
    return !validTitle.test(s)
}
console.log(`обычная строка: ${isValidTitle('обычная строка')}`)
console.log(`строка с <: ${isValidTitle('строка с <')}`)
console.log(`строка с ;: ${isValidTitle('строка с ;')}`)
/* 
Блок В - регулярные выражения: извлечение и нормализация
Задача В1
Создать функцию extractIds(text), которая:
Принимает строку text
Извлекает все числа из строки с помощью match(/\d+/g)
Возвращает массив числе (не строк)
Продемонстрировать на строке: id=5, id=12, id=30
*/
function extractIds(text) {
  const matches = text.match(/\d+/g)
  if (!matches) {
    return []
  }
  return matches.map(Number)
}
const inputString = "id=5, id=12, id=30"
const results = extractIds(inputString)
console.log(results)
/* 
Задача В2
Создать функцию normalizeSpaces(s), которая:
Заменяет любые последовательности пробельных символов на один пробел
Обрезает пробелы по краям
Использует replace(/\s+/g, "")
Продемонстрировать на строке " A B\t\tC "
*/
function normalizeSpaces(s) {
  return s.trim().replace(/\s+/g, " ")
}
console.log(`Демонтрация на строке " A B\t\tC ": ${normalizeSpaces("  A   B\t\tC  ")}`)
/* 
Блок C — формы и валидация: модель ошибок
Задача C1. 
Создать функцию validateRequired(value, fieldName), которая:
принимает value (строка) и fieldName (строка);
возвращает null, если значение непустое после trim();
возвращает строку ошибки вида: "Поле <fieldName> обязательно" — если пустое;
продемонстрировать на пустой строке и на строке " ok "
*/
function validateRequired(value, fieldName) {
  if (value.trim().length > 0) {
    return null
  }
  return `Поле ${fieldName} обязательно`
}
console.log(validateRequired("  ", "Имя"))
console.log(validateRequired(" ok ", "Имя"))
/* 
Задача C2. 
Создать функцию validateNumberRange(n, min, max, fieldName), которая:
принимает число n, границы min/max, имя поля;
возвращает null, если n — число и в диапазоне;
возвращает строку ошибки, если n не число (NaN) или вне диапазона;
продемонстрировать на значениях 10, -1, NaN.
*/
function validateNumberRange(n, min, max, fieldName) {
  if (typeof n !== 'number' || isNaN(n) || n < min || n > max) {
    return `Поле ${fieldName} должно быть числом от ${min} до ${max}`
  }
  return null
}
console.log(validateNumberRange(10, 0, 100, "Возраст"))  
console.log(validateNumberRange(-1, 0, 100, "Возраст"))   
console.log(validateNumberRange(NaN, 0, 100, "Возраст"))
/* 
Блок D — функции обработки данных: чистые функции
Задача D1. 
Создать функцию buildRecordFromForm(raw), которая:
принимает объект “сырого ввода” raw вида: { title: string, value: string, status: string, createdAt: string }
нормализует title через normalizeSpaces(...);
преобразует value в число;
возвращает новый объект записи без id (id будет назначаться отдельно);
продемонстрировать в консоли, что value стал числом, а title нормализован.
*/
// Используем функцию из предыдущего шага
function normalizeSpaces(s) {
  return s.trim().replace(/\s+/g, " ")
}
function buildRecordFromForm(raw) {
  return {
    title: normalizeSpaces(raw.title),
    value: Number(raw.value),
    status: raw.status,
    createdAt: raw.createdAt
  }
}
const rawInput = {
  title: "  Новая    запись\tтест  ",
  value: "150",
  status: "active",
  createdAt: "2026-03-31"
}
const records = buildRecordFromForm(rawInput)
console.log(records)
console.log(typeof records.value)
/* 
Задача D2. 
Создать функцию collectErrors(record), которая:
принимает объект записи (уже после преобразований);
использует функции из блоков A/C для проверок;
возвращает массив строк ошибок (пустой массив, если ошибок нет);
продемонстрировать минимум 2 кейса: валидный объект и объект с ошибками.
*/
// Вспомогательные функции из блоков A и C
function validateRequired(value, fieldName) {
  return (value && value.trim().length > 0) ? null : `Поле ${fieldName} обязательно`
}
function validateNumberRange(n, min, max, fieldName) {
  if (typeof n !== 'number' || isNaN(n) || n < min || n > max) {
    return `Поле ${fieldName} должно быть числом от ${min} до ${max}`
  }
  return null
}
function collectErrors(record) {
  const errors = []
  const titleError = validateRequired(record.title, "Заголовок")
  if (titleError) errors.push(titleError)
  const valueError = validateNumberRange(record.value, 1, 1000, "Значение")
  if (valueError) errors.push(valueError)
  return errors
}
const validRecord = { title: "Продажи", value: 500 }
console.log("Кейс 1 (валидный):", collectErrors(validRecord))
const invalidRecord = { title: "  ", value: -10 }
console.log("Кейс 2 (ошибки):", collectErrors(invalidRecord))
/* 
Блок E — асинхронность: Promise и async/await (2 задачи)
Задача E1. 
Создать функцию delay(ms), которая:
возвращает Promise, выполняющийся через ms миллисекунд;
продемонстрировать, что код “ждёт” через await delay(500) и затем печатает в консоль "done".
*/
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
async function run() {
  console.log("start")
  await delay(500)
  console.log("done")
}
run()
/* 
Задача E2. 
Создать async функцию safeFetchJson(url) (по образцу из теории), которая:
возвращает объект { ok: true, data } или { ok: false, error, details };
продемонстрировать вызов на тестовом URL (любой публичный JSON) или на заведомо некорректном URL (чтобы показать обработку ошибки);
вывести результат в консоль.
*/
async function safeFetchJson(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      return {
        ok: false,
        error: "Ошибка HTTP",
        details: `Статус: ${response.status} ${response.statusText}`
      };
    }
    const data = await response.json()
    return { ok: true, data }
  } catch (err) {
    return {
      ok: false,
      error: "Ошибка выполнения запроса",
      details: err.message
    }
  }
}
async function runDemo() {
  console.log("Запрос 1 (Успех):")
  const success = await safeFetchJson('https://www.weatherapi.com/')
  console.log(success)
  console.log("Запрос 2 (Ошибка):")
  const failure = await safeFetchJson('https://gerasimovdima.com')
  console.log(failure)
}
runDemo()
/* 
Блок F — обработка JSON и контроль ошибок
Задача F1. 
Создать функцию tryParseJson(text), которая:
принимает строку text;
возвращает { ok: true, data }, если JSON.parse успешен;
возвращает { ok: false, error }, если парсинг не удался;
продемонстрировать на корректном JSON ('{"a":1}') и некорректном ('{a:1}').
*/
function tryParseJson(text) {
  try {
    const data = JSON.parse(text)
    return { ok: true, data }
  } catch (error) {
    return { ok: false, error: error.message }
  }
}
const validResult = tryParseJson('{"a":1}')
console.log('Успешный парсинг:', validResult)
const invalidResult = tryParseJson('{a:1}')
console.log('Ошибка парсинга:', invalidResult)
/* 
Задача F2. 
Создать функцию normalizeApiValue(x), которая:
принимает значение x (может быть строкой, числом, null);
возвращает число:
если x — число → вернуть его;
если x — строка с числом → преобразовать;
иначе → вернуть 0;
продемонстрировать на 10, "20", null, "abc".
*/
function normalizeApiValue(x) {
  if (typeof x === 'number' && !isNaN(x)) {
    return x
  }
  const parsed = parseFloat(x)
  return isNaN(parsed) ? 0 : parsed
}
console.log(`Число: ${normalizeApiValue(10)}`)
console.log(`Строка 20: ${normalizeApiValue("20")}`)
console.log(`Null: ${normalizeApiValue(null)}`)
console.log(`Строка abc: ${normalizeApiValue("abc")}`)

/* 
Предметная область ЛР№4
*/

const form = document.getElementById('recordForm')
const errorContainer = document.getElementById('formErrors')
const message = document.getElementById('message')
const btnJSON = document.getElementById('btnJSON')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    errorContainer.innerHTML = ''
    message.textContent = ''

    const data = {
        title: document.getElementById('titleInput').value.trim().replace(/\s+/g, ' '),
        salary: Number(document.getElementById('salaryInput').value),
        city: document.getElementById('cityInput').value.trim(),
        employment: document.getElementById('employment').value,
        experience: document.getElementById('experience').value,
        description: document.getElementById('descriptionInput').value.trim(),
        createdAt: document.getElementById('createdAtInput').value.trim()
    }

    const errors = validateVacancy(data)

    if (errors.length) {
        errors.forEach(err => {
            const p = document.createElement('p')
            p.textContent = err
            errorContainer.appendChild(p)
        })
        message.textContent = 'Исправь ошибки в форме'
        return
    }

    addVacancy(vacancys, data)

    form.reset()
    message.textContent = 'Успешно сохранено'
})

btnJSON.addEventListener('click', async () => {
    message.textContent = 'Загрузка'

    try {
        const data = await loadVacancies()

        data.forEach(item => {
        if (vacancys.length > 0) {
            const maxId = Math.max(...vacancys.map(v => v.id))
            item.id = maxId + 1
        } else {
            item.id = 1
        }

        vacancys.push(item)
        })

        message.textContent = 'JSON успешно загружен!'

    } catch (err) {
        message.textContent = 'Ошибка в загрузке JSON'
    }
})
