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




/*QB-356*/


/*QB-357*/


/*QB-358*/


/*QB-359*/


/*QB-360*/


/*QB-361*/



/*QB-362*/



/*QB-363*/



/*QB-364*/



/*QB-365*/



/*QB-366*/



/*QB-367*/



/*QB-368*/



/*QB-369*/



/*QB-370*/



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