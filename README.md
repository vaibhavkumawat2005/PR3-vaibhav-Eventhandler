
<h1>Eventhandler</h1>
    <p>This project is a modern React-based user registration and management form. It allows users to create, edit, and delete user entries dynamically, with visual feedback for user interactions like hovering over rows.</p>
    <h2>Features</h2>
 <ul>
        <li>Create new user accounts with <code>username</code>, <code>email</code>, and <code>password</code> fields.</li>
        <li>Edit existing user details.</li>
        <li>Delete users from the list.</li>
        <li>Interactive hover effect on user rows for better UI experience.</li>
    </ul>
    <h2>Technologies Used</h2>
    <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML & CSS for styling</li>
    </ul>
<h2> Screenshot and Video of Project</h2>




https://github.com/user-attachments/assets/92a6ac0e-087b-4cb5-afc3-a8f17c46257a



![Screenshot 2024-12-29 132839](https://github.com/user-attachments/assets/80a8f5e6-55de-4c54-b074-2ca9560891b3)
![Screenshot 2024-12-29 132853](https://github.com/user-attachments/assets/6c46ec1b-37bc-4e26-b201-09eb453c0ded)
![Screenshot 2024-12-29 132905](https://github.com/user-attachments/assets/78515fd4-74a7-4ad3-8dd5-48e99a866c8f)



    
<h2>How to Run</h2>
    <ol>
        <li>Ensure you have Node.js and npm installed.</li>
        <li>Clone the repository:</li>
        <pre><code>git clone &lt;repository-url&gt;</code></pre>
        <li>Navigate to the project directory:</li>
        <pre><code>cd super-modern-form</code></pre>
        <li>Install dependencies:</li>
        <pre><code>npm install</code></pre>
        <li>Start the development server:</li>
        <pre><code>npm start</code></pre>
    </ol>
    <h2>Components</h2>
    <h3>1. Form Functionality</h3>
    <p>Allows users to input details and submit them to the user list. Supports editing and resetting the form upon submission.</p>
    <h3>2. User List</h3>
    <p>Displays all registered users in a table format with the following features:</p>
    <ul>
        <li>Edit button: Populates the form with the user's data for editing.</li>
        <li>Delete button: Removes the user from the list.</li>
        <li>Hover Effect: Highlights the row being hovered over for better interaction feedback.</li>
    </ul>
    <h2>Code Highlights</h2>
    <h3>State Management</h3>
    <p>Form data and user list are managed using React's <code>useState</code> hook. For example:</p>
    <pre><code>{`const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
});`}</code></pre>

 <h3>Dynamic Styles</h3>
    <p>Row hover effect implemented with inline styles:</p>
    <pre><code>{`<tr
    onMouseOver={() => handleRowMouseOver(idx)}
    onMouseOut={handleRowMouseOut}
    style={{
        backgroundColor: hoveredRow === idx ? "#f0f8ff" : "transparent",
        transition: "background-color 0.3s",
    }}
>`}</code></pre>

  <h2>License</h2>
    <p>This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.</p>


