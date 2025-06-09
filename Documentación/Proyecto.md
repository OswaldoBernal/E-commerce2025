## **Proyecto: E-Commerce con Arquitectura Orientada a Servicios**

## Oswaldo Javier Bernal Coronado

### **Objetivo General del Proyecto**

Diseñar e implementar una plataforma **e-commerce de playeras de Chivas con modelo B2C funcional y segura, utilizando arquitectura orientada a servicios (SOA)**, que incluya automatización de procesos de negocio, gestión de servicios, componentes distribuidos, y buenas prácticas de programación segura y control de acceso(Asistente con IA).

## **Fases del Proyecto**

### **1. Planeación y Análisis del Negocio**

- **1.1 Definición del problema y objetivos.**
- **1.2 Creación del modelo de negocio (canvas o BPMN).**
- **1.3 Análisis de casos de uso.**
- **1.4 Identificación de servicios (catálogo, carrito, usuario, pedidos, pagos).**
- **1.5 Identificación de procesos de negocio y modelado BPMN.**

### **2. Diseño de Arquitectura**

- **2.1 Selección del modelo SOA y su alineación con los procesos.**
- **2.2 Diseño de arquitectura distribuida (frontend-backend-database).**
- **2.3 Definición de ESB (o simulación de su rol con API Gateway).**
- **2.4 Mapeo BPM → BPEL (simulado mediante flujos Node.js o Workflows).**
- **2.5 Definición de SLA entre componentes.**

### **3. Implementación del Backend (Node.js + Express + JWT)**

- **3.1 Diseño de servicios RESTful.**
- **3.2 Implementación de control de acceso (JWT).**
- **3.3 Encriptación de contraseñas (bcrypt).**
- **3.4 Aplicación de reglas OWASP (inyección, XSS, CSRF).**
- **3.5 Conexión con MongoDB y diseño de modelos de datos.**
- **3.6 Implementación de lógica de negocio por capas.**

### **4. Implementación del Frontend (React.js)**

- **4.1 Arquitectura de componentes y rutas protegidas.**
- **4.2 Consumo de servicios API REST.**
- **4.3 Gestión de estado (Context API o Redux).**
- **4.4 Validación de formularios y sanitización.**
- **4.5 Aplicación de diseño responsivo.**

### **5. Seguridad y Cumplimiento**

- **5.1 Aplicación de los principios de la norma ISO 27001 (confidencialidad, integridad y disponibilidad).**
- **5.2 Configuración de autenticación/autorización.**
- **5.3 Monitoreo de logs y trazabilidad básica.**
- **5.4 Documentación de políticas de seguridad aplicadas.**

### **6. Pruebas e Integración**

- **6.1 Pruebas unitarias (Jest, Mocha).**
- **6.2 Pruebas de integración.**
- **6.3 Pruebas de seguridad con OWASP ZAP.**
- **6.4 Validación de servicios con Postman.**

### **7. Despliegue**

- **7.1 Empaquetado del sistema.**
- **7.2 Despliegue en la nube (Render, Vercel, Railway o Heroku).**
- **7.3 Configuración de entorno productivo seguro.**
- **7.4 Documentación técnica del despliegue.**

### **8. Documentación Final**

- **8.1 Manual técnico de instalación y uso.**
- **8.2 Diagrama de arquitectura.**
- **8.3 Anexos: BPMN, BPEL, código fuente, pruebas.**
- **8.4 Video explicativo del funcionamiento del proyecto.**
