/*===>QB-422
Create a program to build React app having buttons to increment and decrement the number by
clicking that respective button. Also, increment of the number should be performed only if number is
less than 10 and decrement of the number should be performed if number is greater than 0. 
*/
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={styles.button}>Increment</button>
      <button onClick={decrement} style={styles.button}>Decrement</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Counter;


import React from 'react';
import Counter from './Counter';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;




/*===>QB-423
Write a program to build React app to perform the tasks as asked below.
•Add three buttons “Change Text”, “Change Color”, “Hide/Show”.
•Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag.
•By clicking on “Change text” button text should be changed to “Welcome students” and vice versa.
•By clicking on “Change Color” button change color of text to “blue” and vice versa. This color
change should be performed while double clicking on the button.
•Initially button text should be “Hide”. While clicking on it the button text should be changed to
“Show” and text “React Js Hooks” will not be shown.
*/
import React, { useState } from 'react';

const LJUniversity = () => {
  // State hooks
  const [text, setText] = useState('LJ University');
  const [isWelcomeText, setIsWelcomeText] = useState(false);
  const [color, setColor] = useState('red');
  const [isBlueColor, setIsBlueColor] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Handlers
  const handleChangeText = () => {
    if (isWelcomeText) {
      setText('LJ University');
    } else {
      setText('Welcome students');
    }
    setIsWelcomeText(!isWelcomeText);
  };

  const handleChangeColor = () => {
    if (isBlueColor) {
      setColor('red');
    } else {
      setColor('blue');
    }
    setIsBlueColor(!isBlueColor);
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={styles.container}>
      <h1 style={{ color }}>{text}</h1>
      {isVisible && <h2>React Js Hooks</h2>}
      <button onClick={handleChangeText} style={styles.button}>Change Text</button>
      <button onDoubleClick={handleChangeColor} style={styles.button}>Change Color</button>
      <button onClick={handleToggleVisibility} style={styles.button}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default LJUniversity;

import React from 'react';
import LJUniversity from './LJUniversity';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <LJUniversity />
    </div>
  );
};

export default App;




/*===>QB-424
Write a program to build React app having a button which changes image by clicking it. (Add two
images)*/
import React, { useState } from 'react';

const ImageSwitcher = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  const handleImageChange = () => {
    setIsFirstImage(!isFirstImage);
  };

  return (
    <div style={styles.container}>
      <img
        src={isFirstImage ? 'image1.jpg' : 'image2.jpg'}
        alt="Switchable"
        style={styles.image}
      />
      <button onClick={handleImageChange} style={styles.button}>
        Change Image
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default ImageSwitcher;

import React from 'react';
import ImageSwitcher from './ImageSwitcher';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ImageSwitcher />
    </div>
  );
};

export default App;




/*===>QB-425
Write a program to build React app having 2 input text fields (First name and last name) and display
the entered value on the same page.
*/
import React, { useState } from 'react';

const NameDisplay = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div style={styles.container}>
      <h1>Name Display</h1>
      <div style={styles.inputGroup}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          style={styles.input}
        />
      </div>
      <div style={styles.display}>
        <h2>Entered Name:</h2>
        <p>{`${firstName} ${lastName}`}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  inputGroup: {
    margin: '10px 0',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  display: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
};

export default NameDisplay;


import React from 'react';
import NameDisplay from './NameDisplay';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NameDisplay />
    </div>
  );
};

export default App;




/*===>QB-426
Write a program to build React app for task todo list.
•Add 1 input field and button and by clicking on button display entered task on the same page.
•Also, add delete button with each added task to delete the task. 
*/
import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>Add</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.listItem}>
            {task}
            <button onClick={() => handleDeleteTask(index)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '10px',
    margin: '5px 0',
    width: '300px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    border: 'none',
    color: 'white',
    padding: '5px 10px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default TodoList;


import React from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;




/*===>QB-427
Write a program to build React app having text and button to show and hide the text.*/
import React, { useState } from 'react';

const ShowHideText = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const handleToggleText = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div style={styles.container}>
      <button onClick={handleToggleText} style={styles.button}>
        {isTextVisible ? 'Hide' : 'Show'} Text
      </button>
      {isTextVisible && <p style={styles.text}>This is some text to show and hide.</p>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  text: {
    marginTop: '20px',
    fontSize: '18px',
  },
};

export default ShowHideText;

import React from 'react';
import ShowHideText from './ShowHideText';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <ShowHideText />
    </div>
  );
};

export default App;




/*===>QB-428
Write a program to build React app having 2 input number fields (Number 1 and Number 2) and
display the entered value on the same page. And then click on add button to calculate the addition of
two numbers. Display the addition in h2 tag.
*/
import React, { useState } from 'react';

const AddNumbers = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState(null);

  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  };

  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  };

  const handleAddNumbers = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if (!isNaN(num1) && !isNaN(num2)) {
      setSum(num1 + num2);
    } else {
      setSum('Invalid input');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Add Numbers</h1>
      <div style={styles.inputGroup}>
        <label htmlFor="number1">Number 1:</label>
        <input
          type="number"
          id="number1"
          value={number1}
          onChange={handleNumber1Change}
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="number2">Number 2:</label>
        <input
          type="number"
          id="number2"
          value={number2}
          onChange={handleNumber2Change}
          style={styles.input}
        />
      </div>
      <button onClick={handleAddNumbers} style={styles.button}>Add</button>
      {sum !== null && <h2 style={styles.result}>Sum: {sum}</h2>}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  inputGroup: {
    margin: '10px 0',
  },
  input: {
    marginLeft: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  result: {
    marginTop: '20px',
    color: 'green',
  },
};

export default AddNumbers;


import React from 'react';
import AddNumbers from './AddNumbers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AddNumbers />
    </div>
  );
};

export default App;




/*===>QB-429
Write a program to build React app to perform the tasks as asked below.
•Add a button “Change Text”.
•Add “Hello” text in h2 tag.
•By clicking on “Change text” button text should be changed to “How are you?” and vice versa*/
import React, { useState } from 'react';

const ChangeText = () => {
  const [text, setText] = useState('Hello');

  const handleChangeText = () => {
    setText((prevText) => (prevText === 'Hello' ? 'How are you?' : 'Hello'));
  };

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={handleChangeText}>Change Text</button>
    </div>
  );
};

export default ChangeText;

import React from 'react';
import ChangeText from './ChangeText';

const App = () => {
  return (
    <div className="App">
      <ChangeText />
    </div>
  );
};

export default App;




/*===>QB-430
Write a ReactJS script to create a digital clock running continuously. (useEffect)*/
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Digital Clock</h1>
      <h2>{formatTime(time)}</h2>
    </div>
  );
};

export default DigitalClock;


import React from 'react';
import DigitalClock from './DigitalClock';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <DigitalClock />
    </div>
  );
};

export default App;



/*===>QB-431
Write a ReactJS script to understand concept of empty array of useEffect. */
import React, { useState, useEffect } from 'react';

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or updated.');
    // This effect runs only once after the initial render.
    document.title = `Count: ${count}`;

    // Cleanup function (if needed)
    return () => {
      console.log('Cleanup on component unmount');
    };
  }, []); // Empty dependency array

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseEffectDemo;


import React from 'react';
import UseEffectDemo from './UseEffectDemo';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <UseEffectDemo />
    </div>
  );
};

export default App;




/*===>QB-432
Write a reactJS program to perform the tasks as asked below.
•Create one main file (parent file) name Comp.js and other 3 component files Comp1.js, Comp2.js,
Comp3.js.
•Pass Number1 and Number 2 from Comp.js file to Comp3.js file. Calculate multiplication of the
numbers using useContext.
*/
import React, { createContext, useState, useContext } from 'react';

// Create a Context
const NumberContext = createContext();

// Create a Context Provider component
export const NumberProvider = ({ children }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [product, setProduct] = useState(0);

  const calculateProduct = () => {
    setProduct(number1 * number2);
  };

  return (
    <NumberContext.Provider
      value={{ number1, setNumber1, number2, setNumber2, product, calculateProduct }}
    >
      {children}
    </NumberContext.Provider>
  );
};

// Custom hook for using context
export const useNumberContext = () => useContext(NumberContext);


import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';
import { NumberProvider } from './NumberContext';

const Comp = () => {
  return (
    <NumberProvider>
      <div>
        <h1>Multiplication App</h1>
        <Comp1 />
        <Comp2 />
        <Comp3 />
      </div>
    </NumberProvider>
  );
};

export default Comp;

import React from 'react';
import { useNumberContext } from './NumberContext';

const Comp1 = () => {
  const { number1, setNumber1 } = useNumberContext();

  return (
    <div>
      <h2>Component 1</h2>
      <label>
        Number 1:
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Comp1;


import React from 'react';
import { useNumberContext } from './NumberContext';

const Comp2 = () => {
  const { number2, setNumber2 } = useNumberContext();

  return (
    <div>
      <h2>Component 2</h2>
      <label>
        Number 2:
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Comp2;

import React, { useEffect } from 'react';
import { useNumberContext } from './NumberContext';

const Comp3 = () => {
  const { number1, number2, product, calculateProduct } = useNumberContext();

  useEffect(() => {
    calculateProduct();
  }, [number1, number2, calculateProduct]);

  return (
    <div>
      <h2>Component 3</h2>
      <p>Number 1: {number1}</p>
      <p>Number 2: {number2}</p>
      <p>Product: {product}</p>
    </div>
  );
};

export default Comp3;



/*===>QB-433
Write a reactJS program to perform the tasks as asked below.
1) Create one main file (parent file)Main.js and other 2 component files Comp1.js, Comp2.js. Pass
username from Main.js file to Comp2.js file. Display this user name in browser in Blue color.
(useContext)*/

import React, { createContext, useContext } from 'react';

const UsernameContext = createContext();

export const UsernameProvider = ({ children, username }) => {
  return (
    <UsernameContext.Provider value={username}>
      {children}
    </UsernameContext.Provider>
  );
};

export const useUsernameContext = () => useContext(UsernameContext);


import React from 'react';

const Comp1 = () => {
  return <div><h2>Comp1 Component</h2></div>;
};

export default Comp1;

import React from 'react';
import { useUsernameContext } from './UsernameContext';

const Comp2 = () => {
  const username = useUsernameContext();

  return (
    <div>
      <h2 style={{ color: 'blue' }}>Username: {username}</h2>
    </div>
  );
};

export default Comp2;


import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import { UsernameProvider } from './UsernameContext';

const Main = () => {
  const username = 'JohnDoe';

  return (
    <UsernameProvider username={username}>
      <div>
        <h1>Main Component</h1>
        <Comp1 />
        <Comp2 />
      </div>
    </UsernameProvider>
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




/*===>QB-434
Create a Sign-up form using React asking for username, age, email, password, and confirm password.
When the user clicks on the ‘submit’ button, it will display an alert box with a username, age, and
email details entered by the user.
*/
import React, { useState } from 'react';

const SignUpForm = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Display an alert with the entered details
    alert(`Username: ${username}\nAge: ${age}\nEmail: ${email}`);
  };

  return (
    <div>
      <h1>Sign-Up Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;


import React from 'react';
import SignUpForm from './SignUpForm';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <SignUpForm />
    </div>
  );
};

export default App;




/*===>QB-435
Create a React Form for email and password validation.*/
import React, { useState } from 'react';

const ValidationForm = () => {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validate password
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
      setEmailError('Invalid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 8 characters long.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      alert(`Email: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <div>
      <h1>Validation Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidationForm;


import React from 'react';
import ValidationForm from './ValidationForm';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <ValidationForm />
    </div>
  );
};

export default App;




/*===>QB-436
Create a React Form for select any of pizza size using radio button*/
import React, { useState } from 'react';

const PizzaOrder = () => {
  // State variable to keep track of selected pizza size
  const [pizzaSize, setPizzaSize] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    alert(`Selected Pizza Size: ${pizzaSize}`);
  };

  return (
    <div>
      <h1>Pizza Order Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="Small"
              checked={pizzaSize === 'Small'}
              onChange={(e) => setPizzaSize(e.target.value)}
            />
            Small
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Medium"
              checked={pizzaSize === 'Medium'}
              onChange={(e) => setPizzaSize(e.target.value)}
            />
            Medium
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Large"
              checked={pizzaSize === 'Large'}
              onChange={(e) => setPizzaSize(e.target.value)}
            />
            Large
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PizzaOrder;

import React from 'react';
import PizzaOrder from './PizzaOrder';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <PizzaOrder />
    </div>
  );
};

export default App;




/*===>QB-437
Create React Js app to perform the tasks as asked below.
-Add buttons "increment" and "decrement"
-By clicking on increment button the value should be incremented by 1 and by clicking on decrement
button value should be decremented by 1.
-Use useReducer hook to perform the above tasks.
*/
import React, { useReducer } from 'react';

// Reducer function to handle state changes
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  // Initialize the reducer with a state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;


import React from 'react';
import Counter from './Counter';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;




/*===>QB-438
Create React Js app to perform the tasks as asked below.
-Add button "Click"
-By clicking on button the value should be incremented by 5. Initial value is 20.
-Use useReducer hook to perform the above tasks.
*/
import React, { useReducer } from 'react';

// Reducer function to handle state changes
const incrementReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 5 };
    default:
      return state;
  }
};

const Increment = () => {
  // Initialize the reducer with a state
  const [state, dispatch] = useReducer(incrementReducer, { value: 20 });

  return (
    <div>
      <h1>Value: {state.value}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Click</button>
    </div>
  );
};

export default Increment;


import React from 'react';
import Increment from './Increment';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <Increment />
    </div>
  );
};

export default App;




/*===>QB-439
Create a react app to generate random joke using AXIOS to make API request.*/
import React, { useState } from 'react';
import axios from 'axios';

const Joke = () => {
  // State variables for joke and loading state
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to fetch a random joke
  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(`${response.data.setup} - ${response.data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch joke');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Random Joke Generator</h1>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? 'Loading...' : 'Get a Joke'}
      </button>
      <p>{joke}</p>
    </div>
  );
};

export default Joke;

import React from 'react';
import Joke from './Joke';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <Joke />
    </div>
  );
};

export default App;




/*===>QB-440
Create react app to craete exam form. Fields are as under.
Name -text,
Email -email
Password -password,
Gender-radio,
Exam date-datepicker,
Exam center-dropdown)
Use useState hook to save the state of the form. Also, add validation for the email and password fields.
Display submited values*/
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ExamForm = () => {
  // State variables for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    examDate: new Date(),
    examCenter: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  // Handle date change
  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, examDate: date }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    let valid = true;
    const errors = { email: '', password: '' };

    if (!/^[\w-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (valid) {
      alert(`Submitted Values:
      Name: ${formData.name}
      Email: ${formData.email}
      Password: ${formData.password}
      Gender: ${formData.gender}
      Exam Date: ${formData.examDate.toDateString()}
      Exam Center: ${formData.examCenter}`);
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <h1>Exam Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <div>
          <label>Exam Date:</label>
          <DatePicker
            selected={formData.examDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
            required
          />
        </div>
        <div>
          <label>Exam Center:</label>
          <select
            name="examCenter"
            value={formData.examCenter}
            onChange={handleChange}
            required
          >
            <option value="">Select Exam Center</option>
            <option value="Center1">Center 1</option>
            <option value="Center2">Center 2</option>
            <option value="Center3">Center 3</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExamForm;


import React from 'react';
import ExamForm from './ExamForm';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <ExamForm />
    </div>
  );
};

export default App;




/*===>QB-441
*Create a react app using function component to display image of flower using AXIOS to make API
request. Use API Url (https://flower.ceo/api/image/random). Key name in API which store image is
“sample”*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Flower = () => {
  // State for storing the flower image URL and loading state
  const [flowerImage, setFlowerImage] = useState('');
  const [loading, setLoading] = useState(true);

  // Function to fetch a random flower image
  const fetchFlowerImage = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://flower.ceo/api/image/random');
      setFlowerImage(response.data.sample);
    } catch (error) {
      console.error('Error fetching the flower image:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch the flower image when the component mounts
  useEffect(() => {
    fetchFlowerImage();
  }, []);

  return (
    <div>
      <h1>Random Flower Image</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={flowerImage} alt="Random Flower" style={{ width: '500px', height: 'auto' }} />
          <button onClick={fetchFlowerImage}>Get New Image</button>
        </div>
      )}
    </div>
  );
};

export default Flower;


import React from 'react';
import Flower from './Flower';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <Flower />
    </div>
  );
};

export default App;







/*===>QB-442
Create a Student Data Entry Form using React. Fields are Student Name (input Field), Gender (Radio
Button values are Boy, Girl), Subjects (Dropdown values are English, Gujarati), Comments (textarea).
When the user Click on the Submit button , it will display an alert and use useState hook.
*/
import React, { useState } from 'react';

const StudentForm = () => {
  // State for storing form data
  const [formData, setFormData] = useState({
    studentName: '',
    gender: '',
    subject: '',
    comments: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student Name: ${formData.studentName}
        Gender: ${formData.gender}
        Subject: ${formData.subject}
        Comments: ${formData.comments}`);
    }};
    return (
        <div>
          <h1>Student Data Entry Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Student Name:</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Gender:</label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Boy"
                  checked={formData.gender === 'Boy'}
                  onChange={handleChange}
                />
                Boy
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Girl"
                  checked={formData.gender === 'Girl'}
                  onChange={handleChange}
                />
                Girl
              </label>
            </div>
            <div>
              <label>Subject:</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select Subject</option>
                <option value="English">English</option>
                <option value="Gujarati">Gujarati</option>
              </select>
            </div>
            <div>
              <label>Comments:</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
  );

      
import React from 'react';
import StudentForm from './StudentForm';
import './App.css'; // Optional: Import CSS for additional styling

const App = () => {
  return (
    <div className="App">
      <StudentForm />
    </div>
  );
};

export default App;




/*===>QB-443
Build a survey form with radio buttons, and dropdowns. display selected results on the alert box on
user responses using React JS Hooks.( App.js file not required).
*/
import React, { useState } from 'react';

const SurveyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDropdown, setSelectedDropdown] = useState('');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedDropdown(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Selected Option: ${selectedOption}\nSelected Dropdown: ${selectedDropdown}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="Option 1"
              checked={selectedOption === 'Option 1'}
              onChange={handleRadioChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              value="Option 2"
              checked={selectedOption === 'Option 2'}
              onChange={handleRadioChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              value="Option 3"
              checked={selectedOption === 'Option 3'}
              onChange={handleRadioChange}
            />
            Option 3
          </label>
        </div>
        <div>
          <label>
            Choose an option:
            <select value={selectedDropdown} onChange={handleDropdownChange}>
              <option value="">Select...</option>
              <option value="Dropdown Option 1">Dropdown Option 1</option>
              <option value="Dropdown Option 2">Dropdown Option 2</option>
              <option value="Dropdown Option 3">Dropdown Option 3</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SurveyForm;


import React from 'react';
import SurveyForm from './SurveyForm'; // Ensure this path matches the location of your SurveyForm file

const App = () => {
  return (
    <div className="App">
      <h1>Survey Form</h1>
      <SurveyForm />
    </div>
  );
};

export default App;



/*===>QB-444
Create a React app with two components using functional component: Parent and Child. Use
useContext to pass two colors from the Parent component to the Child component. The Child
component should display the received color as its background(red) and other color(green) on its font
to display “Welcome to LJU”*/
// ColorContext.js
import React, { createContext, useContext } from 'react';

// Create a context with default values
const ColorContext = createContext({
  backgroundColor: 'red',
  textColor: 'green'
});

// Custom hook to use the ColorContext
export const useColorContext = () => useContext(ColorContext);

export default ColorContext;

// Parent.js
import React from 'react';
import ColorContext from './ColorContext';
import Child from './Child';

const Parent = () => {
  // Define colors
  const colors = {
    backgroundColor: 'red',
    textColor: 'green'
  };

  return (
    <ColorContext.Provider value={colors}>
      <div>
        <h1>Parent Component</h1>
        <Child />
      </div>
    </ColorContext.Provider>
  );
};

export default Parent;


// Child.js
import React from 'react';
import { useColorContext } from './ColorContext';

const Child = () => {
  const { backgroundColor, textColor } = useColorContext();

  return (
    <div style={{ backgroundColor, color: textColor, padding: '20px' }}>
      <h2>Welcome to LJU</h2>
    </div>
  );
};

export default Child;


// App.js
import React from 'react';
import Parent from './Parent';

const App = () => {
  return (
    <div className="App">
      <Parent />
    </div>
  );
};

export default App;




/*===>QB-445
Create a React app with three components: parent component P.js and two child components C1.js,
C2.js.
 Use useContext hook to pass two colors from the Parent component P.js to the Child component C2.js.
(Yellow color as font color and Blue color as background color)
In Child component C1.js import child component C2.js .
In C2.js display “Full stack Development” text in h1 heading with above mentioned background color
and font color using context*/

// ColorContext.js
import React, { createContext, useContext } from 'react';

// Create a context with default values
const ColorContext = createContext({
  fontColor: 'yellow',
  backgroundColor: 'blue'
});

// Custom hook to use the ColorContext
export const useColorContext = () => useContext(ColorContext);

export default ColorContext;

// P.js
import React from 'react';
import ColorContext from './ColorContext';
import C1 from './C1';

const Parent = () => {
  // Define colors
  const colors = {
    fontColor: 'yellow',
    backgroundColor: 'blue'
  };

  return (
    <ColorContext.Provider value={colors}>
      <div>
        <h1>Parent Component</h1>
        <C1 />
      </div>
    </ColorContext.Provider>
  );
};

export default Parent;


// C1.js
import React from 'react';
import C2 from './C2';

const C1 = () => {
  return (
    <div>
      <h2>Child1 Component</h2>
      <C2 />
    </div>
  );
};

export default C1;


// C2.js
import React from 'react';
import { useColorContext } from './ColorContext';

const C2 = () => {
  const { fontColor, backgroundColor } = useColorContext();

  return (
    <div style={{ backgroundColor }}>
      <h1 style={{ color: fontColor }}>Full stack Development</h1>
    </div>
  );
};

export default C2;


// App.js
import React from 'react';
import Parent from './P'; // Import the Parent component

const App = () => {
  return (
    <div className="App">
      <Parent />
    </div>
  );
};

export default App;




/*===>QB-446
Create a ReactJS program using function component having two input fields for num1 and num2 and
two buttons for addition and subtraction of the two numbers. Display the respective outputs on same
page using useState hook. Also display alert box as an effect on every time the addition button is
clicked using useEffect hook. 
*/
// Calculator.js
import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState({ addition: 0, subtraction: 0 });
  const [additionClicked, setAdditionClicked] = useState(false);

  const handleNum1Change = (e) => setNum1(e.target.value);
  const handleNum2Change = (e) => setNum2(e.target.value);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult((prev) => ({ ...prev, addition: sum }));
    setAdditionClicked(true);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(num1) - parseFloat(num2);
    setResult((prev) => ({ ...prev, subtraction: difference }));
  };

  useEffect(() => {
    if (additionClicked) {
      alert(`Addition Result: ${result.addition}`);
      setAdditionClicked(false); // Reset the flag after alert
    }
  }, [additionClicked, result.addition]);

  return (
    <div>
      <h1>Simple Calculator</h1>
      <div>
        <input
          type="number"
          value={num1}
          onChange={handleNum1Change}
          placeholder="Enter number 1"
        />
        <input
          type="number"
          value={num2}
          onChange={handleNum2Change}
          placeholder="Enter number 2"
        />
      </div>
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleSubtraction}>Subtract</button>
      <div>
        <h2>Results:</h2>
        <p>Addition: {result.addition}</p>
        <p>Subtraction: {result.subtraction}</p>
      </div>
    </div>
  );
};

export default Calculator;


// App.js
import React from 'react';
import Calculator from './Calculator';

const App = () => {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
};

export default App;



/*===>QB-447
Create react app which to perform following task using function component:
•Create one main file name F1.js & other 2 component files F2.js & F3.js.
•Main file contains form with following fields:
oFirst Name (Input type text)
oLast Name (Input type text)
oMessage (Textarea)
oCity (Dropdown)
oGender (Radio Button)
•Pass values of all fields from F1.js file to F3.js file. And display all submitted values in alert box using
useContext & useState hook.
No need to write App.js file.
*/
// FormContext.js
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: '',
    city: '',
    gender: ''
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};


// F1.js
import React, { useState } from 'react';
import { useFormContext, FormProvider } from './FormContext';
import F3 from './F3';

const F1 = () => {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted Values:
      First Name: ${formData.firstName}
      Last Name: ${formData.lastName}
      Message: ${formData.message}
      City: ${formData.city}
      Gender: ${formData.gender}`);
  };

  return (
    <FormProvider>
      <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>Last Name:
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>City:
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
              </select>
            </label>
          </div>
          <div>
            <label>Gender:
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                Female
              </label>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        <F3 />
      </div>
    </FormProvider>
  );
};

export default F1;


// F3.js
import React, { useEffect } from 'react';
import { useFormContext } from './FormContext';

const F3 = () => {
  const { formData } = useFormContext();

  useEffect(() => {
    if (formData.firstName) {
      alert(`Received Values:
        First Name: ${formData.firstName}
        Last Name: ${formData.lastName}
        Message: ${formData.message}
        City: ${formData.city}
        Gender: ${formData.gender}`);
    }
  }, [formData]);

  return null; // This component just shows an alert and does not render anything
};

export default F3;








