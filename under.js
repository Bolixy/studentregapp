const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 const matric = document.getElementById('matric').value;
 const fullname= document.getElementById('fullname').value;
 const  date= document.getElementById('date').value;
 const Department = document.getElementById('Department').value;
 const hostel = document.getElementById('hostel').value;
 const userData = { matric, fullname, date, Department, hostel };
 localStorage.setItem('userData', JSON.stringify(userData));
 window.location.href = 'sub.html';
});
