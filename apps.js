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

//Populating the select statements with data
function populatesSelectOptions(){
    const people = getFromStorage('people');
    const projects = getFromStorage('projects');

    const reporter = document.getElementById('reporter');
    const assignment = document.getElementById('assignment');
    const projectSelect = document.getElementById('project');
    
    reporter.innerHTML = '';
    assignment.innerHTML = '<option value="">-- Unassigned --</option>';
        projectSelect.innerHTML = '';

    people.forEach(pe => {
        const label = '${pe.name} ${pe.surname} ${pe.username}'
        reporter.appendChild(new Option(label, pe.id));
        assignment.appendChild(new Option(label, pe.id));
    })
    projects.forEach(pr =>{
        projectSelect.appendChild(new Option(pr.name, pr.id));
    });
}

//The issue form handler
document.getElementById('ticketForm').addEventListener('submit', function(e){
    e.preventDefault();
    const issues = getFromStorage('issues') || [];
    const newIssue = {
        id: generatedId('issue'),
        summary: document.getElementById('summary').value.trim(),
        description: document.getElementById('description').value.trim(),
        reporter: document.getElementById('reporter').value,
        assignment: document.getElementById('assignment').value,
        project: document.getElementById('project').value,
        entryDate: document.getElementById('entryDate').value,
        targetResolutionDate: document.getElementById('targetDate').value,
        actualResolutionDate: document.getElementById('actualDate').value,
        status: document.getElementById('status').value,
        priority: document.getElementById('priority').value,
        resolutionSummary: document.getElementById('resolutionSummary').value.trim()
    }
        issues.push(newIssue);
        saveToStorage('issues', issues);
        renderIssues();
        alert('Ticket Issue Created');
        populatesSelectOptions();
});
//Determines the status of an issue
function determineStatus(issue){
    if (issue.status === 'resolved' || issue.actualDate) return 'resolved';
    if (issue.targetDate) {
        const now = new Date();
        const targetDate = issue.targetDate;
        if (now > targetDate) return 'overdue';
    }
    return open;
    
}

//