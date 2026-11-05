# Random Travel Picker

A web application that helps users discover their next travel destination based on their preferences. Users can filter destinations by continent, budget, and climate, and receive a randomly selected destination with useful travel information.

## Features

- **Random Destination Generator** - Discover a random travel destination.
- **Destination Filters** - Filter destinations by continent, daily budget, and climate.
- **Destination Information** - View country, continent, climate, estimated daily budget, description, and best time to visit.
- **Popular Attractions** - Explore popular tourist attractions in each destination.
- **Favorites** - Save favorite destinations and remove them from the favorites list.
- **Local Storage** - Favorites remain saved after refreshing the page.
- **Responsive Design** - Modern interface with a clean layout and interactive elements.

## Technologies

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Python
- Flask

### Storage
- Browser Local Storage

## Project Structure

```text
random-travel-picker/
│
├── app.py
├── requirements.txt
├── README.md
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│
└── templates/
    └── index.html
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ulamelnyk/random-travel-picker.git
```

### 2. Navigate to the project directory

```bash
cd random-travel-picker
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

**macOS / Linux**

```bash
source venv/bin/activate
```

**Windows**

```bash
venv\Scripts\activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the application

```bash
python app.py
```

### 7. Open the application

Visit:

http://127.0.0.1:5000

## How It Works

The application uses Flask to serve the web page.

JavaScript handles destination filtering, random selection, displaying destination information, and managing favorites.

Favorites are stored in the browser using Local Storage.

Destination information is currently defined in the JavaScript file.
