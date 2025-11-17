# Bitasmbl-Basic-Calculator-632667-Nodar_Mebunia

## Description
Create a simple web-based calculator that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. This project focuses on interactive UI, event handling, and state management.

## Tech Stack
- SvelteKit

## Requirements
- Perform basic arithmetic operations (add, subtract, multiply, divide)
- Provide a clear and intuitive layout for buttons and display
- Handle edge cases such as division by zero
- Update the display dynamically when buttons are clicked

## Installation
Follow these steps to set up the project locally (assumes the repository contains a SvelteKit project):

1. Clone the repository using the provided repo owner username:

   git clone https://github.com/he1snber8/Bitasmbl-Basic-Calculator-632667-Nodar_Mebunia.git

2. Change into the project directory:

   cd Bitasmbl-Basic-Calculator-632667-Nodar_Mebunia

3. Install dependencies (using npm):

   npm install

Note: This project targets SvelteKit and requires Node.js and npm to be installed on your system. No environment variables are required for a basic web-based calculator implementation.

## Usage
Start the development server and open the app in your browser:

1. Run the development server:

   npm run dev

2. Open the application in your browser. The local dev server typically serves at:

   http://localhost:5173

To build for production and preview the production build:

1. Build the app:

   npm run build

2. Preview the production build locally:

   npm run preview

## Implementation Steps
1. Initialize or confirm the SvelteKit project exists in the repository. Ensure package.json contains SvelteKit scripts (dev, build, preview).
2. Create the main calculator UI component (e.g., src/routes/+page.svelte) to serve as the calculator page.
3. Implement the layout: a display area at the top and a grid of buttons for digits (0-9), decimal point, operators (+, −, ×, ÷), clear (C), and equals (=). Ensure the layout is clear and intuitive.
4. Manage state using Svelte component state (reactive variables). At minimum maintain: current display value, stored operand, and selected operator.
5. Implement event handlers for button clicks:
   - Number buttons: append digit to the current input and update the display.
   - Decimal point: add a decimal if not already present in the current input.
   - Operator buttons: store the current input as the first operand and the selected operator, then prepare for the next input.
   - Equals: perform the computation using the stored operand, operator, and current input.
   - Clear: reset the calculator state and display.
6. Implement the computation logic for add, subtract, multiply, and divide in a single compute function. Use precise numeric handling appropriate for JavaScript numbers and update the display with the result.
7. Handle edge cases explicitly: detect division by zero in the compute function and update the display with a clear error indicator (for example, "Error") or an appropriate response, and prevent crashes or unhandled exceptions.
8. Ensure the display updates dynamically on every relevant state change by relying on Svelte reactivity (assigning to reactive variables or using $: reactive statements where appropriate).
9. Test interactions manually: click digits/operators, perform sequences of operations, test decimal inputs, and verify division-by-zero behavior produces the expected error handling.
10. Optionally refine UI styling within the Svelte component (CSS scoped to the component) to ensure button spacing, sizing, and visual hierarchy provide an intuitive user experience.

## API Endpoints (Optional)

This project is a frontend SvelteKit application for a basic calculator and does not require backend API routes. No API endpoints are provided.