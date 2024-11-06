# CV Application

This project is a web-based CV application built using React. It allows users to fill out and preview a CV with general information, education details, and work experience. The app uses modular CSS for styling and is structured to be responsive and easy to modify.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styles](#styles)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/cv-application.git
   ```

2. Navigate to the project directory:
   ```bash
   cd cv-application
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

```
cv-application/
├── public/
├── src/
│   ├── components/
│   │   ├── GeneralInfo.js
│   │   ├── EducationInfo.js
│   │   ├── ExperienceInfo.js
│   │   └── ...
│   ├── styles/
│   │   ├── Components.css
│   │   └── ...
│   └── pages/
│       └── index.js
├── package.json
├── README.md
└── ...
```

- **`components/`**: Contains individual components like `GeneralInfo`, `EducationInfo`, and `ExperienceInfo`, which are modularized for ease of use.
- **`styles/`**: Holds the main CSS file `Components.css`, which applies consistent styling across all components.
- **`pages/`**: Entry point for rendering components in the main app layout.

## Components

### GeneralInfo
This component renders a form for entering general user information, such as name, email, and phone. Submissions are displayed to the right.

### EducationInfo
The `EducationInfo` component collects details about the user's educational background. It uses a similar form layout as `GeneralInfo`.

### ExperienceInfo
This component allows users to enter work experience details, including company name, position title, date range, and responsibilities.

## Styles

The main stylesheet (`Components.css`) manages the layout and styling of each component to ensure a consistent look and feel. Styles are organized for each component:

- **Container Styles**: Manages layout and responsiveness.
- **Form Section Styling**: Provides consistent spacing, padding, and color schemes.
- **Header Styling**: Enhances readability with headers that have underlines and adjustable spacing.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
