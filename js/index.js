/******* GLOBAL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const courses = [
    {
      name: `Usability Testing 1`,
      code: `INTR2014`,
      instructor: `Nastaran Dadashi`,
      start: {semester: `Fall`, year: 2019},
      weeks: 15,
      breaks: `Yes`,
      duration: 180,
      category: `design`,
      img: `img/generic.png`,
      cost: 1200
    }, {
      name: `3D Visualization`,
      code: `INTR2015`,
      instructor: `Izzy Rashid`,
      start: {semester: `Fall`, year: 2019},
      weeks: 15,
      breaks: `Yes`,
      duration: 180,
      category: `design`,
      img: `img/logo.png`,
      cost: 1340
    }, {
      name: `Interface Development 1`,
      code: `INTR2002`,
      instructor: `Rocco Panacci`,
      start: {semester: `Fall`, year: 2019},
      weeks: 15,
      breaks: `Yes`,
      duration: 180,
      category: `development`,
      img: null,
      cost: 980
    }
  ];
  
  
  /************* FUNCTIONS *************/
  // Stored functions that will run as part of this application
  
  // Function: getDurationFromMinutes
  // Parameters: minutes:Number
  // Returns: String: H hrs, M mins
  function getDurationFromMinutes(minutes) {
    
    return ``;
  }
  
  // Function: getCourseAsHtmlString
  // Parameters: course:Object
  // Return: String of HTML (<article>)
  function getCourseAsHtmlString(course) {
  
    let greatDeal = ``; // start with blank as default
    if (course.cost < 1000) {
      greatDeal = `<small class="callout">Great deal!!</small>`;
    }
    // Other ways you could use this...
    //    Sales, limited quantity, soldout
  
    return `<article class="course ${course.category}">
      <h3>${course.name} ${greatDeal}</h3>
      <img src="${course.img}" alt="Logo for ${course.name}" class="product-img">
      <ul class="course-info">
        <li>Course Code: <strong>${course.code}</strong></li>
        <li>Instructor: <strong>${course.instructor}</strong></li>
        <li>Start: <strong>${course.start.semester} ${course.start.year}</strong></li>
        <li>
          Weeks: <strong>${course.weeks}</strong>
          <ul>
            <li>Includes Break: <strong>${course.break}</strong></li>
          </ul>
        </li>
        <li>Duration: <strong>${course.duration}</strong></li>
      </ul>
      <div class="course-cost">${course.cost}</div>
    </article>`;
  }
  
  // Add or remove ("toggle") the .column-view class on the layout
  // Function: switchLayout
  // Parameters: none
  // Return: none
  function switchLayout() {
    document.getElementById('courses').classList.toggle('column-view');
  }
  
  // Only include products under 1300
  // Function: filterByPrice
  // Parameters: prod:Object
  // Return: true if less than 1300, false otherwise
  function filterByPrice(prod) {
    return prod.cost < 1500;
  }
  
  
  // Event listener, will run with each keystroke
  function checkInput(event) {
    const userIsLookingFor = event.target.value.toLowerCase();
   
    const onlyMatchingNames = courses.filter(prod => prod.name.toLowerCase().includes(userIsLookingFor));
    renderCourses(onlyMatchingNames);
  }
  
  
  
  
  // Put all items of a supplied Array into the document
  // Function: renderCourses
  // Parameters: arr:Array
  // Return: none
  function renderCourses(arr) {
    // 1. map() the Array through getCourseAsHtmlString into a new Array
    const arrOfHtml = arr.map(getCourseAsHtmlString)
  
    // 2. join() the new Array into a single String of HTML
    const strOfHtml = arrOfHtml.join('\n')
  
    // 3. Put the String into the innerHTML of the document's #courses
    document.getElementById('courses').innerHTML = strOfHtml;
  }
  
  
  
  /************* EXECUTABLE *************/
  // Execute functions that will access data
  
  
  console.table(courses);
  
  // Render courses less than 1300
  const affordableCourses = courses.filter(filterByPrice);
  renderCourses(affordableCourses);
  
  
  
  function checkCategory(event) {
    const userIsLookingFor = event.target.value;
  
    const onlyMatchingCategories = courses.filter(prod => prod.category == userIsLookingFor);
    renderCourses(onlyMatchingCategories);
  }
  
  
  
  // Find the layout <button>, add a "listener" to wait for a click, then call switchLayout()
  document.getElementById('layout').addEventListener('click', event => switchLayout() )
  
  // Find the <input> field, run checkInput when a user changes the 'input'
  document.getElementById('courseName').addEventListener('input', event => checkInput(event) )
  
  // Find the <select> field, run checkCategory when there's a 'change' to the drop down value
  document.getElementById('courseCategory').addEventListener('change', event => checkCategory(event) )
  
  