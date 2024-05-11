const userDataDiv = document.getElementById('userData');
const storedUserData = localStorage.getItem('userData');
const userData = JSON.parse(storedUserData);

if (userData) {
 userDataDiv.innerHTML = `
  <p>Your Matric Number is: ${userData.matric}</p>
  <p>Your Fullname is: ${userData.fullname}</p>
    <p>Your date of birth is : ${userData.date}</p>
      <p>Your department is: ${userData.Department}</p>
        <p>Your hostel name is: ${userData.hostel}</p>
 `;
}