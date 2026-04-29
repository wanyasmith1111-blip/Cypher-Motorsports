# Cypher Motorsports Spec App

A simple GitHub-ready static web app for viewing detailed car specs, vehicle profiles, and modification lists.

## Features

- Searchable vehicle list
- Detailed vehicle spec page
- Owner, drivetrain, transmission, fuel, horsepower, torque, engine, and color fields
- Modification list grouped by category, brand, and part name
- Clean responsive layout for mobile and desktop
- Easy-to-edit sample data file

## Project Structure

```text
cypher-motorsports-spec-app/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── data/
│   └── vehicles.js
├── assets/
└── README.md
```

## How to Run Locally

Because this app uses JavaScript modules, run it with a local server instead of opening `index.html` directly.

### Option 1: VS Code Live Server

1. Open the folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

### Option 2: Python Server

From the project folder, run:

```bash
python3 -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## How to Edit Car Data

Edit the vehicles inside:

```text
data/vehicles.js
```

Each vehicle object controls what appears in the app.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload all project files.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. GitHub will provide your live website URL.

## Next Upgrade Ideas

- Add real vehicle images
- Add user login
- Connect to Supabase or Firebase
- Add marketplace listings
- Add event pages
- Add crews/clubs
- Add build timelines
