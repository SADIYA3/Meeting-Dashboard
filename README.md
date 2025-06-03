Meetings Dashboard

A full-stack web application to manage and track meetings. This project replicates a provided UI design and supports full CRUD operations using a Django REST backend and a React + Tailwind frontend.

Features

- Responsive UI replicating the provided Figma/image.
- Meeting list with:
  - Agenda
  - Status (with color-coded badges)
  - Date
  - Start Time
  - Meeting URL
- CRUD Operations:
  - Create, Read, Update, Delete meetings
- Login authentication using Django.
- Protected dashboard (requires login to view/edit meetings).

---

 Live URLs

- **Frontend (netlify)**:https://app.netlify.com/projects/courageous-gecko-a6556a/overview
- **Backend (Render)**: https://meeting-dashboard-6noz.onrender.com

---

  Tech Stack
 Frontend

- React
- Tailwind CSS
- Axios

 Backend

- Django
- Django REST Framework
- Simple JWT for authentication
- PostgreSQL (or SQLite for development)

---

 Setup Instructions

 Backend (Django)

```bash
# Clone the repo
git clone https://github.com/SADIYA3/meetings-dashboard.git
cd backend/

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver
