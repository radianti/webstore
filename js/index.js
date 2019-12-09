/******* GLOBAL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const products = [
    {
      name: `Generic Product A`,
      description: `Oh look! A super generic product that no one would buy! Seriously who would buy this thing????`,
      colours: {red: `red`, white: `white`, blue: `blue`},
      sizes: {small: `S`, medium: `M`, large: `L`},
      rating: `4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>`,
      category: `clothing`,
      img: `img/product-a.png`,
      cost: 1200
    }, {
      name: `Generic Product B`,
      description: `Oh look! A super generic product that no one would buy! Seriously who would buy this thing????`,
      colours: {red: `red`, white: `white`, blue: `blue`},
      sizes: {small: `S`, medium: `M`, large: `L`},
      rating: `4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>`,
      category: `garbage`,
      img: `img/product-b.png`,
      cost: 1340
    }, {
      name: `Generic Product C`,
      description: `Oh look! A super generic product that no one would buy! Seriously who would buy this thing????`,
      colours: {red: `red`, white: `white`, blue: `blue`},
      sizes: {small: `S`, medium: `M`, large: `L`},
      rating: `4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>`,      
      category: `clothing`,
      img: `img/product-a.png`,
      cost: 980
    }, {
      name: `Generic Product D`,
      description: `Oh look! A super generic product that no one would buy! Seriously who would buy this thing????`,
      colours: {red: `red`, white: `white`, blue: `blue`},
      sizes: {small: `S`, medium: `M`, large: `L`},
      rating: `4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>`,
      category: `garbage`,
      img: `img/product-b.png`,
      cost: 1000
    }, {
      name: `Generic Product E`,
      description: `Oh look! A super generic product that no one would buy! Seriously who would buy this thing????`,
      colours: {red: `red`, white: `white`, blue: `blue`},
      sizes: {small: `S`, medium: `M`, large: `L`},
      rating: `4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span>`,
      category: `clothing`,
      img: `img/product-a.png`,
      cost: 990
    },
  ];
  
  
  /************* FUNCTIONS *************/
  // Stored functions that will run as part of this application
  
  // Function: getDurationFromMinutes
  // Parameters: minutes:Number
  // Returns: String: H hrs, M mins
  function getDurationFromMinutes(minutes) {
    
    return ``;
  }
  
  // Function: getProductAsHtmlString
  // Parameters: product:Object
  // Return: String of HTML (<article>)
  function getProductsAsHtmlString(product) {
  
    let greatDeal = ``; // start with blank as default
    if (product.cost < 1000) {
      greatDeal = `<small class="callout">ON SALE!!</small>`;
    }
    // Other ways you could use this...
    //    Sales, limited quantity, soldout
  
    return `<article class="product ${product.category}">
    <header>
      <img src="${product.img}" alt="Product Image" class="product-img">
    </header>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <form>
      <fieldset>
        <legend>Colours</legend>
        <ul>
          <li><label><input type="radio" name="colour" value="r"> <span>${product.colours.red}</span></label></li>
          <li><label><input type="radio" name="colour" value="w"> <span>${product.colours.white}</span></label></li>
          <li><label><input type="radio" name="colour" value="b"> <span>${product.colours.blue}</span></label></li>
        </ul>
      </fieldset>

      <fieldset>
        <legend>Sizes</legend>
        <ol>
          <li><label><input type="radio" name="size" value="s"> <span>${product.size.small}</span></label></li>
          <li><label><input type="radio" name="size" value="m"> <span>${product.size.medium}</span></label></li>
          <li><label><input type="radio" name="size" value="l"> <span>${product.size.large}</span></label></li>
        </ol>
      </fieldset>

      <footer>
        <dl>
          <dt>Rating</dt>
          <dd>${product.rating}</dd>
        </dl>
        <data value="39">${product.cost}</data>
        <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
        <button type="button"><span class="material-icons">favorite</span></button>
        <a href="#">see more</a>
      </footer>
    </form>
  </article>`;
  }
  
  // Add or remove ("toggle") the .column-view class on the layout
  // Function: switchLayout
  // Parameters: none
  // Return: none
  function switchLayout() {
    document.getElementById('products').classList.toggle('column-view');
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
   
    const onlyMatchingNames = products.filter(prod => prod.name.toLowerCase().includes(userIsLookingFor));
    renderProducts(onlyMatchingNames);
  }
  
  
  
  
  // Put all items of a supplied Array into the document
  // Function: renderProduct
  // Parameters: arr:Array
  // Return: none
  function renderProducts(arr) {
    // 1. map() the Array through getProductAsHtmlString into a new Array
    const arrOfHtml = arr.map(getProductAsHtmlString)
  
    // 2. join() the new Array into a single String of HTML
    const strOfHtml = arrOfHtml.join('\n')
  
    // 3. Put the String into the innerHTML of the document's #courses
    document.getElementById('products').innerHTML = strOfHtml;
  }
  
  
  
  /************* EXECUTABLE *************/
  // Execute functions that will access data
  
  
  console.table(products);
  
  // Render courses less than 1300
  const affordableCourses = products.filter(filterByPrice);
  renderCourses(affordableProducts);
  
  
  
  function checkCategory(event) {
    const userIsLookingFor = event.target.value;
  
    const onlyMatchingCategories = products.filter(prod => prod.category == userIsLookingFor);
    renderCourses(onlyMatchingCategories);
  }
  

  
  // Find the <input> field, run checkInput when a user changes the 'input'
  document.getElementById('productName').addEventListener('input', event => checkInput(event) )
  
  // Find the <select> field, run checkCategory when there's a 'change' to the drop down value
  document.getElementById('productCategory').addEventListener('change', event => checkCategory(event) )
  
  