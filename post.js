const form = document.getElementById('theForm');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 const matric = document.getElementById('matric').value;
 const fullname= document.getElementById('fullname').value;
 const  programme= document.getElementById('programme').value;
 const Department = document.getElementById('department').value;
 const school = document.getElementById('school').value;
 const dataSet = { matric, fullname, programme , Department, school };
 localStorage.setItem('dataSet', JSON.stringify(dataSet));
 window.location.href = 'subway.html';
});
