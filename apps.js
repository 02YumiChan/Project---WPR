document.getElementById('addPersonForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newPerson = {
        id : generatedId('p'),
        name : document.getElementById('personName').value,
        surname : document.getElementById('personSurname').value,
        email: document.getElementById('personEmail').value,
        username: document.getElementById('personUsername').value,


    };
    const people = getFromStorage('people');
    people.push(newPerson);
    saveToStorage('people', people);
    renderPeople(); // refreshes the list

});

//  This displays people in a Table List //

function renderPeople() {
    const people = getFromStorage('people');
    const container = document.getElementById('peopleList');
    container.innerHTML = '';

    people.forEach(person => {

        const row = 
        <tr>
            <td>${person.id}</td>
            <td>${person.name} ${person.surname}</td>
            <td>${person.email}</td>
            <td>${person.username}</td>


        </tr>;
        container.innerHTML += row;
        
    });
}

// Creating a folder to add projects and display them//
 
function addProject(name) {
    const projects = getFromStorage('projects');
    projects.push({id: generatedId('proj'), name});
    saveToStorage('projects', projects);
    renderProjects();
}

function renderProjects() {
    const projects = getFromStorage('projects');
    const container = document.getByElementById('projectList');
    container.innerHTML = '';
    projects.forEach(p=> {
        container.innerHTML += <li>${p.id} - ${p.name}</li>;

    });
}
