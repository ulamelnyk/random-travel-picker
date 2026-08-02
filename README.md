# Random Travel Picker

A modern travel recommendation web application that helps users discover their next destination based on their preferences.

Users can filter destinations by continent, budget, and climate, then receive a randomly selected destination with useful travel information, including current weather, estimated travel costs, the best time to visit, and popular attractions.

## Features

* Random destination generator
* Filter destinations by continent, budget, and climate
* Average hotel price
* Estimated daily travel budget
* Best time to visit
* Top tourist attractions
* Destination and attraction photos
* Save favorite destinations
* Modern user interface with smooth animations

## Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Python
* Flask

### APIs & Storage

* REST APIs
* JSON
* Local Storage

## Project Structure
```text
random-travel-picker/
│
├── app.py
├── requirements.txt
├── README.md
├── data/
│   └── budgets.json
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
└── templates/
    └── index.html
```
## Getting Started

Clone the repository
```
git clone https://github.com/YOUR_USERNAME/random-travel-picker.git
```
Navigate to the project directory
```
cd random-travel-picker
```
Create a virtual environment
```
python -m venv venv
```
Activate the virtual environment

macOS / Linux
```
source venv/bin/activate
```
Windows
```
venv\Scripts\activate
```
Install dependencies
```
pip install -r requirements.txt
```
Run the application
```
python app.py
```
Open in your browser
```
http://127.0.0.1:5000
```
## Roadmap

Planned improvements include:

* Interactive map
* AI-powered destination recommendations
* User accounts
* Travel history
* Additional destinations and filters
* Mobile support
* Dark mode
