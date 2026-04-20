// Person Object //
{
    "id" - "tilly1",
    "name" -"Janee",
    "surname" - "Tilbery",
    "email" - "Janee.tilbery@icloud.com ",
    "username" - "JaneTilbery",
    "profilePicture"- "url_or_based64_otimal"

}

// Project Object //

{
    "id" - "tilly1",
    "name" - "Website Redesign"

}

// Bug/Issue Object //

 {
    "id"- "bug001",
     "summary"- "Login button not working",
    "description" - "Detailed description...",
   "reported by" - "tilly1",
    "dateIdentified" - "2025-01-10",
    "project"- "proj001",
    "assignedTo"- "p002",
     "status" - "open",
    "priority" -"high",
    "targetResolutionDate" - "2025-01-20",
    "actualResolutionDate" - "null",
    "resolutionSummary" - ""
}


// localStorage helper functions //

// Save any entity to the localStorage //

function saveToStorage(key, data){
    localStorage.setItem(key, JSON.stringify(data));
    return data? JSON.parse(data): [];

}

// Generates a simple unique ID //
 function generatedId(prefix){
    return prefix + Date.now();

 }


 // Seeding default data //

 function seedData() {
    // Only allow seed if it is empty
    if (getFromStorage('people').length === 0){
        const people = [
             { id: 'p001', name:'Jane', surname:'Tilberly', email:'janeTibery@icloud.com', username:'janeTilly'},
             { id: 'p002', name:'Juliet', surname:'Doe', email:'julietDoe@icloud.com', username: 'julietDoe'},
             // Gonna add more
        ];
        saveToStorage('people', people);
    }

    if (getFromStorage('projects').length === 0) {
        const projects = [
            { id :'pr001', name:'Website Redesign'},
            { id :'pr002', name:'Mobile App'},
            // Adding more soon 

        
        ];
        saveToStorage('projects', projects);
    }
 }

 // Only call when the app loads
 seedData();

