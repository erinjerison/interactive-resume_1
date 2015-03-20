// bio info
var bio = {
		"name": "Erin Jerison",
		"role": "Front-end developer and technical writer",
		"welcomeMessage": "I write things that are technical and complicated",
		"bioPic": "./images/bioPic.jpg",
		"skills": [" writing", " editing", " course development", " light development", " e-learning"],
		"contacts": {
			"email": "erin@erinjerison.com",
			"mobile": "650.561.6043",
			"github": "erinjerison",
			"location": "Ithaca, NY"
		}
}

// function to encapsulate bio info
bio.display = function() {
	var formatEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#header").append(formatEmail);
	var formatMobile = HTMLmobile.replace("%data%", bio.contacts["mobile"]);
	$("#header").append(formatMobile);
	var formatGithub = HTMLgithub.replace("%data%",bio.contacts["github"]);
	$("#header").append(formatGithub);
	var formatTwitter = HTMLtwitter.replace("%data%",bio.contacts["twitter"]);
	$("#header").append(formatTwitter);
	var formatLocation = HTMLlocation.replace("%data%",bio.contacts["location"]);
	$("#header").append(formatLocation);
	var placePhoto = HTMLbioPic.replace("%data%", bio["bioPic"]);
	$("#header").append(placePhoto);
	var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
	$("#header").append(formattedName);
	var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);
	$("#header").append(formattedRole);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcomeMessage"]);
	$("#header").append(formattedWelcome);
	$("#footerContacts").append(formatEmail);
	$("#footerContacts").append(formatMobile);
	$("#footerContacts").append(formatGithub);
	$("#footerContacts").append(formatTwitter);
}
// call the function to actually display bio
bio.display();

//check to see if bio has info; if so, populate skills
if (Object.keys(bio).length != 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
};

// work info
var work = {
		"jobs": [
		{
			"title": "Lead writer",
			"dates": "2009 - 2015",
			"employer": "IBM",
			"location": "San Jose, CA (and remotely from Ithaca, NY)",
			"desc": "- Creating embedded and external content for query tuning and database administration tasks for a database management product. Deliverables include progressively disclosed content (UI strings, tooltips, hovers, messages, context-sensitive help) and external help center topics and articles.<br />- Spearheaded new types of content delivery and media, including: online tutorials, scenario-based writing, post-sales technical overview content, video instruction and online demos.<br />- Edit all product messages from writing and development teams to ensure completeness and adherence to corporate message standards.<br />- Coordinated transfer of documentation writing responsibilities to team of software developers: handled scheduling, provided DITA training and writing guideline education, and edited all content.<br />- Edit documentation content for team of writers. Edit articles by database experts for external publication."
		},
		{
			"title": "$5,000 Crouse Internship in Professional Writing",
			"dates": 2008,
			"employer": "Purdue University - Department of Professional Writing",
			"location": "West Lafayette, IN",
			"desc": "- Scanned existing book into digital format for which original copy was lost.<br />-Ran OCR software against PDF to make editable version."
		},
		{
			"title": "Podcasting project manager",
			"dates": 2008,
			"employer": "Purdue University - Department of Professional Writing; TCHA",
			"location": "Lafayette and West Lafayette, IN",
			"desc": "- Coordinated a team of five students to organize and produce a set of 6 podcasts about various aspects of Lafayette-West Lafayette history.<br />- Used Audacity to create, mix, & produce sound files.<br />- Developed customized Audacity documentation to support future podcast efforts by the historical society.<br />- Transcripts and recordings available on archive of Student Engagement and Activism (@SEA) website."
		}
		]
};
// function to call later to display work info
work.display = function() {
	for (job in work.jobs) {
		// create a new div that will contain each job
		$("#workExperience").append(HTMLworkStart);

		// create variables to format each employer's info
		var formatEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formatTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formatEmplDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formatEmplLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formatDesc = HTMLworkDescription.replace("%data%", work.jobs[job].desc);

		// concatenate employer and job title
		var workEntry = formatEmployer + formatTitle;

		// display them
		$(".work-entry:last").append(workEntry);
		$(".work-entry:last").append(formatEmplLoc);
		$(".work-entry:last").append(formatEmplDates);
		$(".work-entry:last").append(formatDesc);
	};
};
// invoke work.display to show it onscreen
work.display();

// education info
var education = {
		// nest some objects to store my educational history
		// use an array to store this data
		"schools": [
		{
			"name": "Purdue University",
			"location": "West Lafayette, IN",
			"degree": "B.A.",
			"majors": "English - Professional Writing (Print & Digital Publishing concentration)",
			"years": "2004 - 2008",
			"URL": "http://www.purdue.edu"
		},
		{
			"name": "Udacity",
			"location": "Mountain View, CA",
			"degree": "Nanodegree",
			"majors": "Front-End Web Developer",
			"years": "2015 - present",
			"URL": "http://www.udacity.com"
		}
		],
		"onlineCourses": [
		{
			"title": "HTML & CSS",
			"school": "Udacity",
			"dates": 2015,
			"URL": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"URL": "https://www.udacity.com/course/progress#!/c-ud804-nd"
		}
		]
};
// function to encapsulate school info to call later and display it
education.display = function() {
	for (school in education.schools) {
		// create a new div that will contain each school
		$("#education").append(HTMLschoolStart);

		// create variables to format each employer's info
		var formatSchName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formatDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formatSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formatSchDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		var formatSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		// display it
		$(".education-entry:last").append(formatSchName);
		$(".education-entry:last").append(formatSchDates);
		$(".education-entry:last").append(formatSchLoc);
		$(".education-entry:last").append(formatSchMaj);
		$(".education-entry:last").append(formatDegree);
	};

	// grab/display online classes label
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		// create variables to format each employer's info
		var formatCsName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formatCsSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formatCsDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formatCsURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);

		var formatNameAndSchool = formatCsName + formatCsSchool;

		// display them
		$(".education-entry:last").append(formatNameAndSchool);
		$(".education-entry:last").append(formatCsDate);
		$(".education-entry:last").append(formatCsURL);
	};
}

education.display();

// project info
var projects = {
		"projects": [
		{
			"title": "Tippecanoe County historical podcasts",
			"dates": 2008,
			"description": "Series of podcasts detailing Tippecanoe County History",
			"images": "http://placekitten.com/197/148"
		},
		{
			"title": "Responsive HTML portfolio",
			"dates": 2015,
			"description": "Portfolio made using responsive HTML techniques",
			"images": "http://placekitten.com/197/148"
		},
		{
			"title": "JavaScript resume",
			"dates": 2015,
			"description": "Resume made using JavaScript and HTML",
			"images": "http://placekitten.com/197/148"
		}
		]
};

// Encapsulating functions -- append all projects to the project list.
projects.display = function() {
	for (project in projects.projects) {
		// create a new div to contain the projects.
		$("#projects").append(HTMLprojectStart);

		// create variables to format proj info
		var formatPjName = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formatPjDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formatPjDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formatPjImg = HTMLprojectImage.replace("%data%", projects.projects[project].images);

		// display the information
		$(".project-entry:last").append(formatPjName);
		$(".project-entry:last").append(formatPjDate);
		$(".project-entry:last").append(formatPjDesc);
		$(".project-entry:last").append(formatPjImg);
	}
}

projects.display();

/*
 internationalization - take in a string of 2 names,
 return "internationalized" version in this style:
 Firstname LASTNAME
 first, display internationalizeButton
*/
$("#main").append(internationalizeButton);
// then create inName function to create internationalized version
function inName(name) {
	// pull in original name using original_name
	var origName = bio.name;
	// split the last name from the first name
	var splitName = origName.split(" ");
	// split names into separate strings
	var firstName = splitName[0].toString();
	// make the first name use standard capitalization (Firstname)
	firstName = splitName[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	var lastName = splitName[1].toString();
	// capitalize last name
	lastName = lastName.toUpperCase();
	// create new full name
	origName = firstName + " " + lastName;
	return origName;
};
// call the function -- whenever the user clicks that internationalize button, it'll work
inName(bio.name);

// as seen by others section
var asSeen = {
		"references": [
		{
			"name": "Peter Wansch",
			"position": "Director of Engineering",
			"company": "salesforce.com",
			"text": "I've had the pleasure to work with Erin when I was the product and development manager for the InfoSphere Data Architect product. Erin had an excellent, technical understanding of the product and delivered quality documentation for new product features but what stood out was her interest and drive to interact with the customers so she could understand what was important to them and focus her efforts in organizing information and reducing gaps to where it was most impactful. I highly recommend Erin as a technical writer."
		},
		{
			"name": "Shannon Rouiller",
			"position": "Information Architect and Technical Editor for IBM Analytics",
			"company": "IBM",
			"text": "I work with Erin as her information architect and technical editor. She is smart and efficient. Erin is a good writer, and she can quickly learn, use, and document any technical product we throw at her. One of her tutorials won an STC award of excellence and earned one of our highest quality scores. Erin is a team player and always willing to help out or take on extra assignments, especially those that will improve the user experience, such as scenarios, videos, and improvements to embedded assistance."
		},
		{
			"name": "Brett Johnson",
			"position": "Technical Writer - Google Cloud Platform Developer Relations",
			"company": "Google",
			"text": "Erin gets the job done, every time, the right way, the first time, and does it faster than expected. She contributes to our team in a broad range of deliverables beyond our normal documentation, including video demos, developWorks articles, and a getting started eBook. Without a doubt, Erin is one of our most valuable writers and an absolute pleasure to work with."
		},
		{
			"name": "Michael Salvo",
			"position": "Associate Professor and Director of Professional Writing",
			"company": "Purdue University",
			"text": "Erin was an excellent student. More importantly, she has been a very supportive working with current students as a mentor to help them understand the challenges of professional life after graduation. The Professional Writing Program at Purdue is fortunate to count Erin [Jerison] among its distinguished alumni."
		},
		{
			"name": "Jennifer Bay",
			"position": "Associate Professor",
			"company": "Purdue University",
			"text": "Erin was a fantastic student. She is a diligent worker and creative problem solver. She is one of the most successful graduates of our program in recent years."
		}
		]
};

asSeen.display = function() {
	for (reference in asSeen.references) {
		// div to store references
		$("#asSeen").append(HTMLrefStart);

		// create variables to format proj info
		var formatRefName = HTMLrefName.replace("%data%", asSeen.references[reference].name);
		var formatRefPos = HTMLrefTitle.replace("%data%", asSeen.references[reference].position);
		var formatRefCo = HTMLrefCompany.replace("%data%", asSeen.references[reference].company);
		var formatRefText = HTMLrefText.replace("%data%", asSeen.references[reference].text);

		var formatNameAndPosition = formatRefName + ", " + formatRefPos;

		// display the information
		$(".reference-entry:last").append(formatNameAndPosition);
		$(".reference-entry:last").append(formatRefCo);
		$(".reference-entry:last").append(formatRefText);
	};
}

asSeen.display();

// Add a map that is autopopulated by the places I've lived and worked
$("#mapDiv").append(googleMap);

clickLocations = [];

function logClicks(x, y) {
	$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;
		logClicks(x, y);
	});
	console.log('x location: ' + x + '; y location: ' + y);
}
