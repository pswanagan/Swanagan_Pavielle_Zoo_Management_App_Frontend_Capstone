import React from "react";
// Importing Link from react-router-dom to 
// navigate to different end points.
import { Link } from "react-router-dom";
 
const Home = () => {
    

    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/animallist">Animal List</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/addanimal">Add Animal</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/keeperlist">Keeper List</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="addkeeper">Add Keeper</Link>
                </li>
            </ul>
        </div>
    );
};
 
export default Home;