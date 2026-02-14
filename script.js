console.log('Hello world!!!')

const button_forms = document.getElementById('SubmitAll');
const button_search = document.getElementById('btn_search');
const button_feedback = document.getElementById('btn_feedback');
const button_detailied = document.getElementById('btn_detailied');

button_forms.addEventListener('click', () => {
    document.getElementById('forma_part').submit();
    document.getElementById('forma_type_of_employment').submit();
    document.getElementById('forma_wage').submit();
    document.getElementById('forma_experience').submit();
    
    alert('Действие выполнено');
});

button_search.addEventListener('click', () => {
    alert('Действие выполнено');
});

button_feedback.addEventListener('click', () => {
    alert('Действие выполнено');
});

button_detailied.addEventListener('click', () => {
    alert('Действие выполнено');
});

