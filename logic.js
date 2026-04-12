function helloFromLogic() {
  return "logic works"
}

function cheakBanVacansys (vacancys) {
  return vacancys.filter (vacancy => vacancy.status === "ban")
}

function cheakNewnVacansys (vacancys) {
  return vacancys.filter(vacancy => vacancy.status === "new")
}

function findVacancysByID (list,id) {
  return list.find(item => item.id === id)
}

function getSortVacancysSalary (vacancys) {
  return [...vacancys].sort((a, b) => a.salary - b.salary)
}

function buildVacancyStats (vacancys) {
  return vacancys.reduce((acc, item) => {
    acc.totalCount += 1
    acc.sumSalary += item.salary
    if (item.salary > acc.maxSalary) {
      acc.maxSalary = item.salary
    }
    if (item.status === "ban") {
      acc.banCount += 1
    }
    return acc
  }, { 
    totalCount: 0, sumSalary: 0, maxSalary: 0, banCount: 0, 
  })
}

// ЛР 4 функции для проверки ввода в форме

function getNextId(items) {
    if (items.length > 0) {
        const maxId = Math.max(...items.map(i => i.id))
        return maxId + 1
    } else {
        return 1
    }
}

function validateVacancy(data) {
    const errors = []

    if (!data.title) {
        errors.push('Название вакансии обязательно.')
    } else if (/[<>{};]/.test(data.title)) {
        errors.push('Название содержит запрещенные символы.')
    }

    if (isNaN(data.salary) || data.salary < 0 || data.salary > 1000000) {
        errors.push('Зарплата должна быть от 0 до 1 000 000.')
    }

    const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    if (!dateRegex.test(data.createdAt)) {
        errors.push('Дата должна быть YYYY-MM-DD')
    } else if (isNaN(Date.parse(data.createdAt))) {
        errors.push('Некорректная дата')
    }

    if (!data.city) errors.push('Укажите город')
    if (!data.employment) errors.push('Выберите тип занятости')

    return errors
}

function addVacancy(items, data) {
    const newItem = {
        ...data,
        id: getNextId(items),
        status: 'new'
    }

    items.push(newItem)
    return newItem
}

async function loadVacancies() {
    try {
        const res = await fetch('./newData.json')

        if (!res.ok) {
            throw new Error('Не удалось загрузить JSON')
        }

        const data = await res.json()

        return data.map(item => ({
            title: item.title.trim().replace(/\s+/g, ' '),
            salary: Number(item.salary),
            city: item.city.trim(),
            employment: item.employment,
            experience: item.experience || 'Без опыта',
            description: item.description,
            status: item.status || 'new',
            createdAt: item.createdAt
        }))

    } catch (err) {
        console.error('Ошибка fetch:', err)
        throw err
    }
}
