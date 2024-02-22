Project Name: Zoo Management System
Description
The Zoo Management System is a comprehensive web application designed to facilitate the efficient management and presentation of information related to animals and their keepers in a zoo or wildlife sanctuary setting. This system enables zoo staff to add, view, edit, and delete animal and keeper records through an intuitive user interface, ensuring up-to-date and accessible information.

Technologies Used
Frontend: React
Backend: Node.js, Express
Database: MongoDB 
State Management: React Context 
Styling: CSS

Features
Animal Management: Add, view, edit, and delete animals with details like species, habitat, diet, etc.

Keeper Management: Manage keeper information, including assignments to specific animals.

Responsive Design: A mobile-friendly design ensures accessibility across devices.

Project Structure

Animals.js, Keepers.js: React components for rendering animal and keeper data on the frontend.
AddAnimal.jsx, AddKeeper.jsx: Components for adding new animal and keeper records.
AnimalCard.jsx, KeeperList.jsx: Components for displaying individual animal cards and lists of keepers.
AnimalDetailModal.jsx, KeeperDetailsModal.jsx: Modal components for viewing detailed information about animals and keepers.

Setup and Installation

Clone the repository: git clone https://github.com/pswanagan/Swanagan_Pavielle_Zoo_Management_App_Frontend_Capstone

Install dependencies

Navigate to the project directory and install the required dependencies:  npm install

Configure the database

Ensure MongoDB is installed and running. Update db-connection.js with your database connection details.

Start the application

Run the development server: npm start 

Navigate to http://localhost:5173 to view the application.

Usage

Adding New Records: Use the "Add Animal" or "Add Keeper" forms to input new data into the system.

Viewing and Editing: Click on an animal or keeper card to view more details, edit information, or delete the record.