
//Project Database
let projectDB = [
    // {projectSection:"",projectName: "", projectDescription:"", projectImages:[]},
    {projectSection:"Algorithms & Data Structures",projectName: "Trend Tracker", projectDescription:"The trend tracker assignment consists of constructing a vector-based data structure that tracks information about a collection of hashtags. The TrendTracker class has eight class methods: insert(string ht), size(), tweeted(string ht), popularity(string ht), top_trend(), top_three_thrends(vector&lt;string&gt; &amp;T), remove(string ht), top_k_trends(vector&lt;string&gt; &amp;T, int k).<br/><br/>&#x2022;Insert(string ht) - The insert method iterates the vector, looking for ht. If ht is found, the method ends early, doing nothing to the current vector. On the other hand, if ht is found, an empty entry is added to the vector. This method runs in O(n) time.<br/><br/>&#x2022;Size() - The size method returns the number of hashtags in the trend tracker. This utilizes the vector size method to run in constant time.<br/><br/>&#x2022;Tweeted(string ht) - The tweeted function acts as an incrementer for the trends. Similar to the insert function, the vector is traversed in linear time, looking for the string to modify.<br/><br/>&#x2022;Popularity(string ht) - This method returns the popularity integer belonging to the hashtag.<br/><br/>&#x2022;Top_trend() - The trend with the highest popularity integer is returned.<br/><br/>&#x2022;Top_three_trends(vector&lt;string&gt; &amp;T) - The top 3 trends with the highest popularity integers are stored in the T vector.<br/><br/>&#x2022;Remove(string ht) - Removes the given hashtag from the trend tracker vector.<br/><br/>&#x2022;Top_k_trends(vector&lt;string&gt; &amp;T, int k) - The top k trends with the highest popularity integers are stored in the T vector.<br/>", projectImages:["trendtracker.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Trend Tracker 2", projectDescription:"Although the previous TrendTracker is efficient enough for a couple thousand hashtags, it slows down as the size of the vector increases. This project uses an efficient two-vector-based data structure to speed up the base TrendTracker class. This faster class contains the same methods but using the help of the additional S integer vector, the running times are decreased. The S integer vector keeps track of the indices of the top trends and by populating the trend tracker in increasing order, a binary search can be performed to fetch a specific string in logarithmic time. Tweeted and Popularity can now be performed in O(log(n)); while top_three_trends is now a constant time function. Running it against 1.5 million hashtags, the program still has speedy execution times.", projectImages:["trendtracker2.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Linked Lists", projectDescription:"In this project, I experimented with linked lists to implement more complex data structure (stacks, queues, &amp; priority queues).<br/><br/>&#x2022;Stack - This class contained 5 methods: stack, empty, push, pop, and insertAt. The stack method served as a destructor to make sure there was no memory leak. It looped the stack in linear time, popping the elements until it was empty. The empty method returned a boolean indicating if the list was empty; this is done in constant time. To push or pop in a stack, the new element is appended or removed from the head of the list, so this method runs in constant time as well. To insert an element in a specific index, we must iterate the linked list until we find the specified element and break the link in the current sequence to insert the new element in the middle; at worst, the insertAt function takes linear time.<br/><br/>&#x2022;Queue - The queue class works similar to stack. However, in order to achieve similar constant times, the queue requires storing to pointers, one pointing to the head and one pointing to the rear. To enqueue, we append to the rear, and to dequeue, we remove from the head.<br/><br/>&#x2022;PriorityQueue - The PriorityQueue class works similar to Queue; however it extracts the minimum element to ensure fast access times for desired elements.", projectImages:["stack.png", "queue.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Auto Completer", projectDescription:"The autocompleter project simulates that of a smartphone's autocompleter feature. Given a substring, it provides the top three completions with the most frequency. This class uses an AVL binary search tree to provide speedy results. The search tree rebalances itself to insert in logarithmic time. Insertion works by firstly recursively inserting the new node; after that, the tree is rebalanced by performing the necessary rotations to keep the AVL rule always applicable (height difference between a right and left subtree cannot exceed one node).", projectImages:["autocompleter.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Auto Completer 2", projectDescription:"The previous autocompleter uses a balanced binary search tree. This leads to a O(log(n)) worst-case run time. This is a good time; however in modern times, this type of latency is not acceptable. In this project, I speed up the autocompleter class by using a different abstract data structure. To achieve a constant worst-case running time, I employ a trie data structure.<br/><br/>&#x2022;Insert - To insert a word in constant time, relative to the amount of saved words, we follow the trie, letter by letter, until we reach the end, marking the end as a valid word.<br/><br/>&#x2022;Completions - To recover valid completions in constant time, we follow the trie path and append possible completions to a vector when a node is marked as a valid word.", projectImages:["trie.jpg"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Priority Queue", projectDescription:"The purpose of this project was to implement a Min Priority Queue to use in later projects. All major operations, push, pop, and decrease_key, in this class run in O(log(n)) time. This Priority Queue uses a heap, represented by a vector of string to integer map, and an unordered map, mapping the string with the index it belongs to in the heap vector.<br/><br/>&#x2022;All operations work in a similar matter. To push, pop, or decrease priority, a new pair is appended to the heap. Since the order of priorities in the updated heap might not be in the correct order, the priority queue is now compromised. The heap is therefore reordered by taking advantage of the sorted nature of the vector. By using a binary search approach, the elements in the heap are swapped until the correct order is ensured. This leads to O(log(n)) operation times.", projectImages:["priorityQueue.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Maze", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Maze 2", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Algorithms & Data Structures",projectName: "Arbitrage", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

    {projectSection:"Neural Networks & Deep Learning",projectName: "DQN Boxing", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"], projectVideos:["boxingDQN.mp4"]},
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
    {projectSection:"Web Development",projectName: "URL Saver Script", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Web Development",projectName: "Playlist Sidebar Script", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},
    {projectSection:"Web Development",projectName: "AutoScroller Script", projectDescription:"Currently in the process of importing this project to this page.", projectImages:["robot.png"]},

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


function showProject(project){

    document.getElementById("projectName").innerText = project.projectName;

    document.getElementById("implementationImages").innerHTML = "";
    project.projectImages.forEach((image) =>{
        let img = document.createElement('img');
        img.src = "img/"+image;
        img.alt = "Project Screenshot";
        document.getElementById("implementationImages").appendChild(img);
    });

    document.getElementById("implementationDetails").innerHTML = project.projectDescription;

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

document.getElementsByClassName("projectMenu")[document.getElementsByClassName("projectMenu").length - 1].innerText = `Total Projects: ${projectDB.length}`;
populateMenus();
showProject(projectDB[0]);