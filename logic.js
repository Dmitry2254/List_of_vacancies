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

