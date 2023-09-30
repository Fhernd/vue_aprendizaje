const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors());

// Proyectos en Memoria
let projects = [
  {
    "id": 1,
    "title": "Project 1",
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tortor velit, tincidunt in neque ut, accumsan accumsan turpis. Proin vehicula est eu dapibus cursus. Donec tristique augue vel mattis fermentum. Cras lacinia augue ac luctus elementum. Curabitur et lorem eu lectus accumsan porttitor. Suspendisse ac faucibus felis. Pellentesque magna odio.",
    "complete": true
  },
  {
    "id": 2,
    "title": "Project 2",
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis nunc magna, in semper odio pretium sed. In hendrerit ex quam, sit amet vestibulum risus finibus quis. Duis facilisis turpis et mauris tincidunt, in interdum mauris ornare. Duis lobortis, tellus vel accumsan sollicitudin, dui erat finibus ex, sit amet congue.",
    "complete": false
  },
  {
    "id": 3,
    "title": "Project 3",
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum tristique massa a lobortis. Mauris nec arcu et magna semper hendrerit quis sed justo. In tristique risus id efficitur finibus. Aliquam id congue dolor. Praesent elementum metus et sollicitudin vulputate. Integer interdum massa id felis maximus, quis cursus sem congue.",
    "complete": true
  },
  {
    "id": 4,
    "title": "Project 4",
    "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nisl cursus risus scelerisque bibendum. Praesent eget mattis neque. Suspendisse nec nisi eget mi tristique volutpat. Nunc semper imperdiet hendrerit. Etiam in efficitur nisl. Pellentesque malesuada, sapien vitae consequat tristique, lorem elit malesuada tortor, id viverra tellus nibh at lectus.",
    "complete": false
  }
];

// CRUD API
app.get('/projects', (req, res) => res.json(projects));

app.post('/projects', (req, res) => {
  const newProject = req.body;
  
  // Find the next id:
  const ids = projects.map(project => project.id);
  const maxId = Math.max(...ids);
  newProject.id = maxId + 1;
  projects.push(newProject);
  res.status(201).json(newProject);
});

app.patch('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = projects.findIndex(project => project.id === id);

  if (index === -1) return res.status(404).send('No encontrado');

  req.body.id = id;

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

app.get('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const project = projects.find(project => project.id === id);

  if (!project) return res.status(404).send('No encontrado');

  res.json(project);
});

// Iniciar el Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
