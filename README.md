# AgroSmart

**AgroSmart** is an AI-assisted crop recommendation system designed for Sri Lankan farmers.  
It allows users to upload soil images, select district-wise weather data, and get crop suggestions based on soil type and weather.

---

## Features

- Upload soil images to predict soil type using a **CNN-based model** (Flask backend).  
- Retrieve district-wise weather data (temperature, humidity, rainfall) from **Open-Meteo API**.  
- Crop recommendation using **vector search (RAG)** and similarity scoring.  
- Admin panel to create, update, and manage crops.  
- Fully typed frontend with **React, TypeScript**, and **Redux Toolkit Query**.  
- User authentication with **Clerk**.  
- Real-time notifications using **React-Toastify**.  

---

## Tech Stack

**Frontend:**

- React + Vite + TypeScript  
- Tailwind CSS for styling  
- Redux Toolkit + RTK Query for state & API  
- Zod for form validation  
- React-Toastify for notifications  

**Backend (Express + LLM/RAG):**

- Node.js + Express  
- MongoDB for crop storage and **vector embeddings**  
- Clerk for authentication  
- Open-Meteo API integration for weather data  
- **LangChain + OpenAI Embeddings** for semantic crop search and recommendations

## GitHub Repositories

- **Frontend:** [https://github.com/idlakshan/AgroSmart-Frontend-v2](https://github.com/idlakshan/AgroSmart-Frontend-v2)  
- **Backend:** [https://github.com/idlakshan/AgroSmart-Backend](https://github.com/idlakshan/AgroSmart-Backend)  
- **AI Model (Flask + CNN):** [https://github.com/idlakshan/AgroSmart-CNN-Model](https://github.com/idlakshan/AgroSmart-CNN-Model)  