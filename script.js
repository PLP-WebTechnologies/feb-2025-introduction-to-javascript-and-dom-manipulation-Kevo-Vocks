<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My HTML5 Webpage</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <h1 id="title">Welcome to My Webpage</h1>
        <button onclick="changeTitle()">Change Title</button>
    </header>
    
    <!-- Navigation Section -->
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    
    <!-- Main Content Section -->
    <main>
        <section id="home">
            <h2>Home</h2>
            <p id="info">This is the homepage where you can find general information.</p>
            <button onclick="changeText()">Change Text</button>
        </section>
        
        <section id="about">
            <h2>About</h2>
            <p>Learn more about our purpose and mission.</p>
        </section>

        <!-- Ordered List with Roman Numerals -->
        <section>
            <h2>Topics</h2>
            <ol type="I">
                <li>Introduction</li>
                <li>Features</li>
                <li>Benefits</li>
                <li>Conclusion</li>
            </ol>
        </section>

        <!-- External Image -->
        <section>
            <h2>Image from Pexels</h2>
            <img src="https://www.pexels.com/photo/nature-landscape-12345/" alt="Beautiful Nature" width="500">
        </section>

        <!-- Contacts Table -->
        <section>
            <h2>Contact List</h2>
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Mobile</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>John Doe</td>
                    <td>123 Street, NY</td>
                    <td>+123456789</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Jane Smith</td>
                    <td>456 Avenue, CA</td>
                    <td>+987654321</td>
                    <td>jane@example.com</td>
                </tr>
                <tr>
                    <td>Emily Clark</td>
                    <td>789 Road, TX</td>
                    <td>+112233445</td>
                    <td>emily@example.com</td>
                </tr>
                <tr>
                    <td>Mike Brown</td>
                    <td>321 Blvd, FL</td>
                    <td>+556677889</td>
                    <td>mike@example.com</td>
                </tr>
                <tr>
                    <td>Sarah White</td>
                    <td>654 Lane, WA</td>
                    <td>+998877665</td>
                    <td>sarah@example.com</td>
                </tr>
            </table>
        </section>

        <!-- Registration Form -->
        <section>
            <h2>Registration Form</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required><br>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required><br>
                
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required><br>
                
                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob" required><br>
                
                <label>Gender:</label>
                <input type="radio" name="gender" value="male" required> Male
                <input type="radio" name="gender" value="female" required> Female<br>
                
                <label for="country">Country:</label>
                <select id="country" name="country" required>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="canada">Canada</option>
                </select><br>
                
                <label>Interests:</label>
                <input type="checkbox" name="interests" value="coding"> Coding
                <input type="checkbox" name="interests" value="music"> Music
                <input type="checkbox" name="interests" value="sports"> Sports<br>
                
                <input type="submit" value="Register">
            </form>
        </section>

        <!-- Add/Remove Element Section -->
        <section>
            <h2>Dynamic Element</h2>
            <button onclick="addElement()">Add Element</button>
            <button onclick="removeElement()">Remove Element</button>
            <div id="dynamic-section"></div>
        </section>
    </main>
    
    <!-- Footer Section -->
    <footer>
        <p>Contact us at: example@email.com</p>
    </footer>

    <script>
        function changeTitle() {
            document.getElementById("title").textContent = "Title Changed!";
        }

        function changeText() {
            document.getElementById("info").textContent = "New text content has been added!";
        }

        function addElement() {
            let newElement = document.createElement("p");
            newElement.textContent = "This is a dynamically added paragraph.";
            document.getElementById("dynamic-section").appendChild(newElement);
        }

        function removeElement() {
            let section = document.getElementById("dynamic-section");
            if (section.lastChild) {
                section.removeChild(section.lastChild);
            }
        }
    </script>
</body>
</html>
