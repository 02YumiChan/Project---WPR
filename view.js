//GET & SAVE DATA
//===============================
//Get issues from localStorage
function getIssues() {
    return JSON.parse(localStorage.getItem("issues")) || [];
}

//Save issues to localStorage
function saveIssues(issues){
    localStorage.setItem("issues", JSON.stringify(issues));
}

//============================
//DASHBOARD
//============================
//Load all issues into dashboard
function loadIssues() {
    const issues = getIssues();


//Clear UI
document.getElementById("open-list").innerHTML = "";
document.getElementById("overdue-list").innerHTML = "";
document.getElementById("resolved-list").innerHTML = "";

//Loop through issues
issues.forEach(issue => {
    const card = createIssueCard(issue);

    //Group by Status
    if (issue.status === "open"){
        document.getElementById("open-list").appendChild(card);
    } else if (issue.status === "overdue"){
        document.getElementById("overdue-list").appendChild(card);
    } else {
        document.getElementById("resolved-list").appendChild(card);
    }
});
}

//Create UI card
function createIssueCard(issue){
    const div = document.createElement("div");
    div.className = "card p-2 mb-2";

    div.innerHTML = `
  <h5>${issue.summary}</h5>
  <p><strong>Priority:</strong> ${issue.priority}</p>
  <p><strong>Assigned:</strong> ${issue.assignedTo || "Unassigned"}</p>
  <button onclick="viewIssue('${issue.id}')" class="btn btn-primary btn-sm">View</button>
`;

    return div;
}
//========================
//NAVIGATION
//========================
//Go to issue page
function viewIssue(id){
    window.location.href = `issue.html?id=${id}`;
}

//Go to edit page
function goToEdit(id){
    window.location.href= `edit.html?id=${id}`;
}

//=========================
//VIEW SINGLE ISSUE
//=========================
//Find issue by ID
function getIssueById(id){
    return getIssues().find(issue => issue.id === id);
}

//Display issue details
function displayIssue(){
    const id= new URLSearchParams(window.location.search).get("id");
    const issue = getIssueById(id);

    document.getElementById("issueDetails").innerHTML= ` 
    <h2>${issue.summary}</h2> 
    <p>${issue.description}</p>
    <p>Status: ${issue.status}</p>
    <p>Priority: ${issue.priority}</p>
    <p>Assignment: ${issue.assignedTo}</p>
    <p>Project: ${issue.projectId}</p>
    <p>Target Date: ${issue.targetDate}</p>
    <p>Resolved Date: ${issue.resolvedDate || "Not resolved"}</p>
    <p>Resolution: ${issue.resolutionSummary || "N/A"}</p>
    <button onclick= "goToEdit('${issue.id}')" class= "btn btn-warning">Edit</button>
 `;
}

//=======================
//EDIT ISSUE
//=======================
//Load issue into form
function loadEditForm(){
    const id= new URLSearchParams(window.location.search).get("id");
    const issue = getIssueById(id);

    document.getElementById("summary").value = issue.summary;
    document.getElementById("status").value = issue.status;
    document.getElementById("priority").value = issue.priority;
    document.getElementById("resolution").value = issue.resolutionSummary || "";
    document.getElementById("resolvedDate").value = issue.resolvedDate || "";
}

//Update issue
function updateIssue()
{
    const id = new URLSearchParams(window.location.search).get('id');
    let issues = getIssues();

    issues = issues.map(issue =>
    {
        if (issue.id === id) 
        {
        return{
            ...issue,
            summary: document.getElementById("summary").value,
            status: document.getElementById("status").value,
            priority: document.getElementById("priority").value,
            resolutionSummary: document.getElementById("resolution").value,
            resolvedDate: document.getElementById("resolvedDate").value,
            };    
        }
        return issue;
    });
    saveIssues(issues);

    alert("Updated!");
    window.location.href= "index.html";
}

//=======================
//OVERDUE LOGIC
//=======================

function updateOverdueStatus()
{
    let issues = getIssues();
    const today = new Date();

    issues.forEach(issue=> 
    {
            if (issue.status !== "resolved") 
            {
               const target = new Date(issue.targetDate); 
               if (target < today) 
                {
                    issue.status = "overdue";
                }
            }
        });

    saveIssues(issues);
}