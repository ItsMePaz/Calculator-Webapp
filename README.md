# Calculator

This is a Simple Calculator including only the fundamental operations in mathematics (Addition, Subtraction, Multiplication, and Division).

This project has been made by Michael Andrew T. Paz.

Visual Studio Code is used as the source-code editor

Vanilla HTML, CSS, and JavaScript is used to create this.

-- Algorithm used in the planning and creation of this project --

1. Allow the user to input the digits of the 1st terms of the equation
2. If the user then clicks the desired operation, the screen will remove the inputs to give way for the 2nd part of the equation
3. If the user then clicks the '=' button, the screen will display the result. Else, if the user clicks any of the operators, assuming they want to go further with the equation, the program will retain the solution from the first two terms then it will operate it to the next desired values and this process will keep on looping until the user finally clicks the '=' which will end the retained values and will display the final solution.

-- Detailed Steps in Creating the Project --

1. Created the structure with HTML
2. Styled the interface with CSS
3. Targeted the Elements and IDs in JavaScript file
4. Manipulated DOM with number operation/function buttons for inputs
5. Have JavaScript push each desired single-digit number into an array
6. Once the user clicks an operator, all those numbers gathered in the array are concatenated to form the entire value of the first term
7. Convert the concatenated string into a number using parseint
8. Also, once the user clicks an operator, the program will clear the screen array then it will push what has been removed into the firstTerm array. This is to avoid the first and second terms to be concatenated together.
9. Once the user inputs the second term, if the user chooses to click the equate button, the concatenated numbers will be stored in one array then the program will operated the 0 and 1 position inside that array.

--Future/Ongoing Fixes--

1. Allow the user to show the current result when clicking an operator in the second consecutive time
2. Apply reset button and function
3. to follow...
