const express = require('express');
const app = express();
app.use(express.json());

// Proyectos en Memoria
let projects = [ /* ... tus proyectos ... */ ];

// CRUD API
app.get('/projects', (req, res) => res.json(projects));

app.post('/projects', (req, res) => {
  const newProject = req.body;
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.put('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(project => project.id === id);

  if (index === -1) return res.status(404).send('No encontrado');

  projects[index] = req.body;
  res.json(projects[index]);
});

app.delete('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(project => project.id === id);

  if (index === -1) return res.status(404).send('No encontrado');

  const deleted = projects.splice(index, 1);
  res.json(deleted[0]);
});

// Iniciar el Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
