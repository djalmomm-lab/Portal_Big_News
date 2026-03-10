// server.js - Arquivo principal do backend
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors()); // Permite requisições do frontend
app.use(express.json()); // Para ler JSON no body das requisições
app.use(express.urlencoded({ extended: true }));

// Banco de dados (simulado por enquanto)
let artigos = [
  {
    id: 1,
    titulo: "O que faz um vereador?",
    categoria: "legislativo",
    conteudo: "Conteúdo completo do artigo...",
    data: "2024-03-15",
    tempo_leitura: 8,
    imagem: "vereador.jpg"
  },
  {
    id: 2,
    titulo: "Como acompanhar projetos de lei?",
    categoria: "cidadania",
    conteudo: "Conteúdo completo do artigo...",
    data: "2024-03-10",
    tempo_leitura: 6,
    imagem: "projetos-lei.jpg"
  }
];

let glossario = [
  { termo: "PL", definicao: "Projeto de Lei" },
  { termo: "PEC", definicao: "Proposta de Emenda à Constituição" },
  { termo: "Quórum", definicao: "Número mínimo de membros presentes" }
];

// ========== ROTAS DA API ==========

// GET - Listar todos os artigos
app.get('/api/artigos', (req, res) => {
  const { categoria } = req.query;
  
  if (categoria) {
    const filtrados = artigos.filter(a => a.categoria === categoria);
    return res.json(filtrados);
  }
  
  res.json(artigos);
});

// GET - Buscar artigo por ID
app.get('/api/artigos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const artigo = artigos.find(a => a.id === id);
  
  if (!artigo) {
    return res.status(404).json({ erro: 'Artigo não encontrado' });
  }
  
  res.json(artigo);
});

// GET - Listar glossário
app.get('/api/glossario', (req, res) => {
  const { busca } = req.query;
  
  if (busca) {
    const resultados = glossario.filter(g => 
      g.termo.toLowerCase().includes(busca.toLowerCase()) ||
      g.definicao.toLowerCase().includes(busca.toLowerCase())
    );
    return res.json(resultados);
  }
  
  res.json(glossario);
});

// GET - Listar categorias
app.get('/api/categorias', (req, res) => {
  const categorias = [
    { id: 'legislativo', nome: 'Processo Legislativo', icone: 'gavel' },
    { id: 'camaras', nome: 'Câmaras Municipais', icone: 'building' },
    { id: 'cidadania', nome: 'Cidadania', icone: 'users' },
    { id: 'orcamento', nome: 'Orçamento Público', icone: 'chart-pie' }
  ];
  
  res.json(categorias);
});

// POST - Criar novo artigo (área administrativa)
app.post('/api/admin/artigos', (req, res) => {
  const { titulo, categoria, conteudo, tempo_leitura } = req.body;
  
  // Validação básica
  if (!titulo || !categoria || !conteudo) {
    return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
  }
  
  const novoArtigo = {
    id: artigos.length + 1,
    titulo,
    categoria,
    conteudo,
    tempo_leitura: tempo_leitura || 5,
    data: new Date().toISOString().split('T')[0],
    imagem: 'default.jpg'
  };
  
  artigos.push(novoArtigo);
  res.status(201).json(novoArtigo);
});

// PUT - Atualizar artigo
app.put('/api/admin/artigos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = artigos.findIndex(a => a.id === id);
  
  if (index === -1) {
    return res.status(404).json({ erro: 'Artigo não encontrado' });
  }
  
  artigos[index] = { ...artigos[index], ...req.body };
  res.json(artigos[index]);
});

// DELETE - Remover artigo
app.delete('/api/admin/artigos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  artigos = artigos.filter(a => a.id !== id);
  res.status(204).send();
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📚 API disponível em http://localhost:${PORT}/api`);
});
