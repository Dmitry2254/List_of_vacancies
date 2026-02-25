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
button_feedback1.addEventListener('click', () => {
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
});

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