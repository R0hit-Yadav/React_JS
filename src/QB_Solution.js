/*===>QB-353
Build basic react app that display “Hello World” in browser*/
/*App.js */
import React from 'react';

function App() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export default App;



/*===>QB-354
Create an ReactJS app which shows the how to pass and read data using props*/
import React from 'react';

function Greeting(props) {
    return (
        <div>
            <h2>{props.message}</h2>
        </div>
    );
}

export default Greeting;


import React from 'react';
import Greeting from './Greeting';

function App() {
    const greetingMessage = "Hello from Props!";

    return (
        <div>
            <h1>Passing and Reading Props in React</h1>
            <Greeting message={greetingMessage} />
        </div>
    );
}

export default App;



/*===>QB-355
Write a React code to print car’s brand name and its model name which are passed as props using JSON*/

import React from 'react';
function Car(props) {
    return (
        <div>
            <h2>Car Brand: {props.car.brand}</h2>
            <h3>Car Model: {props.car.model}</h3>
        </div>
    );
}
export default Car;


import React from 'react';
import Car from './Car';

function App() {
    const carData = 
    {
        brand: "Toyota",
        model: "Corolla"
    };

    return (
        <div>
            <h1>Car Information</h1>
            <Car car={carData} />
        </div>
    );
}

export default App;




/*===>QB-356
Write react js script to display alert box with text “Welcome to LJU” by clicking on button. */
import React from 'react';

function App() {
    const showAlert = () => 
    {
        alert("Welcome to LJU");
    };

    return (
        <div>
            <h1>Alert Box Example</h1>
            <button onClick={showAlert}>Click Me</button>
        </div>
    );
}
export default App;




/*===>QB-357
Write react js script to display values in console while changing it in text box*/
import React, { useState } from 'react';

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log(value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange} 
        placeholder="Type something..."
      />
    </div>
  );
};
export default TextInput;

import React from 'react';
import TextInput from './TextInput';

const App = () => {
  return (
    <div>
      <h1>Type in the Text Box</h1>
      <TextInput />
    </div>
  );
};
export default App;



/*===>QB-358
Write react js script to display alert box with text “welcome to lju” only on double click button*/
import React from 'react';

const WelcomeButton = () => {
  const handleDoubleClick = () => {
    alert('Welcome to LJU');
  };

  return (
    <div>
      <button onDoubleClick={handleDoubleClick}>
        Double Click Me
      </button>
    </div>
  );
};

export default WelcomeButton;


import React from 'react';
import WelcomeButton from './WelcomeButton';

const App = () => {
  return (
    <div>
      <h1>Double Click the Button</h1>
      <WelcomeButton />
    </div>
  );
};

export default App;




/*===>QB-359
Create react js app to display all array elements in h2 tag using map function*/
import React from 'react';

const App = () => {
  const elements = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];

  return (
    <div>
      {elements.map((element, index) => (
        <h2 key={index}>{element}</h2>
      ))}
    </div>
  );
};

export default App;



/*===>QB-360
Write a program to create ReactJS application having an array of strings and convert it in Uppercase using MAP method. */
import React from 'react';

const App = () => {
  // Initial array of strings
  const strings = ['hello', 'world', 'react', 'js'];

  // Convert each string to uppercase using the map method
  const uppercasedStrings = strings.map(str => str.toUpperCase());

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Uppercased Strings</h1>
      {uppercasedStrings.map((str, index) => (
        <h2 key={index}>{str}</h2>
      ))}
    </div>
  );
};

export default App;



/*===>QB-361
We have an array of numbers and we want to multiply each of these numbersby 5. 
Create react js app to display these multiplied numbers using map function.*/
import React from 'react';

const App = () => {
  // Initial array of numbers
  const numbers = [1, 2, 3, 4, 5];

  // Multiply each number by 5 using the map method
  const multipliedNumbers = numbers.map(num => num * 5);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Multiplied Numbers</h1>
      {multipliedNumbers.map((num, index) => (
        <h2 key={index}>{num}</h2>
      ))}
    </div>
  );
};

export default App;



/*===>QB-362
Create react app which displays 3 images using map function*/
import React from 'react';
import './App.css';

const App = () => {
  // Array of image paths
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
}

export default App;





/*===>QB-363
Write a ReactJS code in which we have apply filter to skip digit “3” from the array of 1 to 5 and
display all remaining digits of the array. */
import React from 'react';

const FilterArrayComponent = () => {
  // Array of numbers from 1 to 5
  const numbers = [1, 2, 3, 4, 5];

  // Filter out the digit 3
  const filteredNumbers = numbers.filter(num => num !== 3);

  return (
    <div>
      <h1>Filtered Numbers</h1>
      <ul>
        {filteredNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterArrayComponent;


import React from 'react';
import FilterArrayComponent from './FilterArrayComponent'; // Adjust the import path as needed

const App = () => {
  return (
    <div>
      <FilterArrayComponent />
    </div>
  );
};

export default App;




/*===>QB-364
Create react app to perform tasks as asked.
First create files as asked below in routing folder
1. Home.js - for the home page content
2. Shop.js - for the shop page content
3. Contact.js - for the contact page content
4. Nopage.js - for the page other than mentioned links
Create Main.js file which contains Links for Home, Shop and Product page. Also, add functionality of
page routing.
Finally call Main.js in App.js.
*/
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default Home;

import React from 'react';

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      <p>Explore our products here!</p>
    </div>
  );
};

export default Shop;


import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
    </div>
  );
};

export default Contact;

import React from 'react';

const Nopage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default Nopage;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routing/Home';
import Shop from './routing/Shop';
import Contact from './routing/Contact';
import Nopage from './routing/Nopage';

const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;


import React from 'react';
import Main from './Main';

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;





/*===>QB-365
Create React app to pass student name, roll number, t1 marks and t2 marks of 2 students to component
and read the information and display in table format. Use Props*/
import React from 'react';

// Component to display student information in a table
const StudentTable = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
          <th>Term 1 Marks</th>
          <th>Term 2 Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.rollNumber}</td>
            <td>{student.t1Marks}</td>
            <td>{student.t2Marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;


import React from 'react';
import StudentTable from './StudentTable';

const App = () => {
  // Array of student objects
  const students = [
    { name: 'Alice', rollNumber: 'A101', t1Marks: 85, t2Marks: 90 },
    { name: 'Bob', rollNumber: 'B202', t1Marks: 78, t2Marks: 82 }
  ];

  return (
    <div className="App">
      <h1>Student Information</h1>
      <StudentTable students={students} />
    </div>
  );
};

export default App;




/*===>QB-366
Create react app and use routing functionality of react to perform the tasks as asked.
Create one file named Main.js which contains links for home and about page and routing functionality.
In Home.js file add one image and heading(h1) "LJ University"
In About.js file add branch list (CSE,IT,CE). 
*/
import React from 'react';
import universityImage from './university.jpg'; // Make sure to add your image in the `src` directory

const Home = () => {
  return (
    <div>
      <h1>LJ University</h1>
      <img src={universityImage} alt="LJ University" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default Home;


import React from 'react';

const About = () => {
  const branches = ['CSE', 'IT', 'CE'];

  return (
    <div>
      <h1>About Us</h1>
      <ul>
        {branches.map((branch, index) => (
          <li key={index}>{branch}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;


import React from 'react';
import Main from './Main';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;




/*===>QB-367
Write a ReactJS code in which we have apply filter to skip digits which are less than “10” from the
array and display all remaining digits of the array [3,5,11,4,17,8,21,2,26,13,8]. */
import React from 'react';
import './App.css';

const App = () => {
  // Array of numbers
  const numbers = [3, 5, 11, 4, 17, 8, 21, 2, 26, 13, 8];

  // Filter out numbers less than 10
  const filteredNumbers = numbers.filter(num => num >= 10);

  return (
    <div className="App">
      <h1>Filtered Numbers</h1>
      <ul>
        {filteredNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;




/*===>QB-368
Create React app to pass color(red), background color(yellow), font size(25px) and font style(italic) as
properties to component and apply css to "Lj Students" text written in p tag. use Props*/
import React from 'react';

// Component that receives styling props
const StyledText = ({ color, backgroundColor, fontSize, fontStyle }) => {
  const style = {
    color: color,
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    fontStyle: fontStyle,
    padding: '10px', // Optional padding for better visibility
    borderRadius: '5px' // Optional border radius for aesthetics
  };

  return (
    <p style={style}>Lj Students</p>
  );
};

export default StyledText;

import React from 'react';
import StyledText from './StyledText';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Styled Text Example</h1>
      <StyledText
        color="red"
        backgroundColor="yellow"
        fontSize="25px"
        fontStyle="italic"
      />
    </div>
  );
};

export default App;




/*===>QB-369
Write react js script to perform the tasks as asked below.
Add an array of objects which contains name and age of people.
Apply filter to find people with age less than 40. And display name of all people using map function. 
*/
import React from 'react';
import './App.css';

const App = () => {
  // Array of people objects
  const people = [
    { name: 'Alice', age: 29 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 42 },
    { name: 'David', age: 38 },
    { name: 'Eve', age: 31 }
  ];

  // Filter people with age less than 40
  const filteredPeople = people.filter(person => person.age < 40);

  return (
    <div className="App">
      <h1>People Under 40</h1>
      <ul>
        {filteredPeople.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;




/*===>QB-370
Write react js script to perform the tasks as asked below.
Add an array of objects which contains name and branch(CSE,IT,CE) of students.
Apply filter to find students who are from CSE branch. And display name of all studens of CSE branch
using map function*/
import React from 'react';
import './App.css';

const App = () => {
  // Array of student objects
  const students = [
    { name: 'Alice', branch: 'CSE' },
    { name: 'Bob', branch: 'IT' },
    { name: 'Charlie', branch: 'CSE' },
    { name: 'David', branch: 'CE' },
    { name: 'Eve', branch: 'CSE' }
  ];

  // Filter students who are from the CSE branch
  const cseStudents = students.filter(student => student.branch === 'CSE');

  return (
    <div className="App">
      <h1>CSE Students</h1>
      <ul>
        {cseStudents.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;




/*QB-371*/



/*QB-372*/




/*QB-373*/



/*QB-374*/



/*QB-375*/



/*QB-376*/



/*QB-377*/



/*QB-378*/


/*QB-379*/



/*QB-380*/



/*QB-381*/



/*QB-382*/