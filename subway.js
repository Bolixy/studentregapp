const userSets= document.getElementById('Data');
const storedUser= localStorage.getItem('dataSet');
const dataSets = JSON.parse(storedUser);

if (dataSets) {
 userSets.innerHTML = `
  <p>Your Matric Number is: ${dataSets.matric}</p>
  <p>Your Fullname is: ${dataSets.fullname}</p>
    <p>Your programme type is : ${dataSets.programme}</p>
      <p>Your department is: ${dataSets.Department}</p>
        <p>Your last institution  name is: ${dataSets.school}</p>
 `;
}