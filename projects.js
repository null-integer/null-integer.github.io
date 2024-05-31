
//Project Database
let projectDB = [
    // {projectSection:"",projectName: "", projectDescription:"", projectImages:[]},
    {projectSection:"Algorithms & Data Structures",projectName: "Trend Tracker", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Trend Tracker 2", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Linked Lists", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Auto Completer", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Auto Completer 2", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Priority Queue", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Maze", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Maze 2", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Arbitrage", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

    {projectSection:"Neural Networks & Deep Learning",projectName: "DQN Boxing", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Neural Networks & Deep Learning",projectName: "MNIST CNN", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Neural Networks & Deep Learning",projectName: "Binary Classification", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Neural Networks & Deep Learning",projectName: "Lunar Lander", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

    {projectSection:"Web Development",projectName: "Server Side Shopping", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Web Development",projectName: "Working with a Database", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Web Development",projectName: "Session & Security", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Web Development",projectName: "Javascript & DOM", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Web Development",projectName: "AJAX", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Web Development",projectName: "React", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Web Development",projectName: "ORM", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

    {projectSection:"Mobile Development",projectName: "TrueVault", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

    {projectSection:"Data Mining",projectName: "Decision Tree", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Data Mining",projectName: "Aprori Algorithm", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

    {projectSection:"Computer Architecture",projectName: "Assembly Fibonacci", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Computer Architecture",projectName: "Cuda Vector Sum", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Computer Architecture",projectName: "Hybrid Sorting", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Computer Architecture",projectName: "World Cities", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

    {projectSection:"Digital Image Processing",projectName: "2D FFT", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Digital Image Processing",projectName: "Laplacian Filtering", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

    {projectSection:"Robotics Programming",projectName: "Rotation Matrices", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Robotics Programming",projectName: "Autonomous Mobile Robots", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Robotics Programming",projectName: "PacMan Maze", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Robotics Programming",projectName: "EKF", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

];

document.getElementsByClassName("projectMenu")[document.getElementsByClassName("projectMenu").length - 1].innerText = `Total Projects: ${projectDB.length}`;

function showProject(project){

    document.getElementById("projectName").innerText = project.projectName;

    project.projectImages.forEach((image) =>{
        let img = document.createElement('img');
        img.src = "img/"+image;
        img.alt = "Project Screenshot";
        document.getElementById("implementationImages").appendChild(img);
    });

    document.getElementById("implementationDetails").innerText = project.projectDescription;

}

//Add all the projects to their respective menus
function populateMenus(){
    console.log("Menus are populated");
    projectDB.forEach((project) =>{

        //creating a div node for the project
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `&#8627;${project.projectName}<br/>`;
        projectDiv.addEventListener("click", function(){showProject(project)}); 
        document.getElementById(project.projectSection).appendChild(projectDiv);
    
    });
}


populateMenus();
