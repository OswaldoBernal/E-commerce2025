cd backend
npm init -y

# Configuración del Frontend

## ✅ 2. **Instalar librerías necesarias**

```
npm install axios react-router-dom
```

Opcional si usas diseño con componentes:

```
npm i bootstrap@5.3.6
npm install bootstrap react-icons
```

## ✅ 3. **Estructura de carpetas y archivos**

```plaintext
frontend/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── api.js               # Configuración de conexión a backend
│   ├── assets/                  # Imágenes, logos, íconos
│   ├── components/              # Componentes reutilizables
│   │   ├── Navbar.js
│   │   ├── ClienteCard.js
│   │   └── ClienteForm.js
│   ├── context/
│   │   └── AuthContext.js       # Manejo de autenticación (opcional)
│   ├── pages/                   # Vistas principales
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   └── Clientes.js
│   ├── routes/
│   │   └── AppRoutes.js         # Rutas protegidas y navegación
│   ├── styles/
│   │   └── main.css
│   ├── App.js
│   ├── index.js
│   └── .env                     # Variables de entorno
```

## ✅ 4. **Archivo `.env`**

```
REACT_APP_API_URL=http://localhost:3000/api
```

## ✅ 5. **Configuración del API - `src/api/api.js`**

```js
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = token;
  return config;
});

export default API;
```

## ✅ 6. **Rutas - `src/routes/AppRoutes.js`**

```js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Clientes from "../pages/Clientes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
```
