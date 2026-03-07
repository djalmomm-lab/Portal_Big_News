# Big News · Costa Esmeralda

> Portal de notícias, análises e cobertura esportiva da Costa Esmeralda (Itapema, Porto Belo, Bombinhas) — SC, Brasil.

---

## 📁 Estrutura do Repositório

```
/
├── index.html           → Home (inclui seção Esportes)
├── noticias.html        → Últimas notícias
├── esportes.html        → Cobertura esportiva completa
├── politica.html        → Política municipal
├── fact-checking.html   → Verificação de fatos
├── analises.html        → Análises aprofundadas
├── podcast.html         → Episódios do podcast
├── explica.html         → Guias educativos
├── offline.html         → Página exibida sem conexão (PWA)
├── manifest.json        → Configuração PWA
├── sw.js                → Service Worker (cache + offline)
├── favicon.ico          → Favicon multi-tamanho
├── favicon-16x16.png    → Favicon 16px
├── favicon-32x32.png    → Favicon 32px
├── favicon-48x48.png    → Favicon 48px
├── apple-touch-icon.png → Ícone iOS (180x180)
├── icon-192x192.png     → Ícone Android / PWA (192px)
├── icon-512x512.png     → Ícone splash screen (512px)
├── README.md            → Este arquivo
└── LICENSE              → Licença MIT do projeto
```

---

## 🎨 Identidade Visual

| Token | Hex | Uso |
|---|---|---|
| `--primary` | `#1a365d` | Azul navy — cor institucional principal |
| `--primary-dark` | `#0f2942` | Header, rodapé |
| `--primary-light` | `#2c5282` | Hover, gradientes |
| `--accent` | `#b8860b` | Ouro — destaques, badges, ícones |
| `--bg-paper` | `#fafaf9` | Fundo geral |
| `--success` | `#059669` | Verde — confirmações, esportes |
| `--error` | `#dc2626` | Vermelho — alertas, ao vivo |

**Fontes:** Merriweather (títulos/corpo) + Inter (UI/meta)

---

## 🗂️ Navegação

Ordem das abas baseada em interesse popular:

```
Home → Notícias → Esportes → Política → Fact-Checking → Análises → Podcast → Explica
```

---

## 🔗 Redes Sociais e Contato

Substitua os placeholders abaixo nos arquivos HTML, `sw.js` e `manifest.json`:

| Placeholder | Substituir por |
|---|---|
| `SEU_PERFIL` | Seu @ em cada rede social |
| `SEU_CANAL` | Seu canal no YouTube |
| `5547XXXXXXXXX` | Seu número com DDI+DDD (ex: 5547999999999) |
| `contato@bignewssc.com.br` | Seu e-mail real de contato |

---

## 📱 PWA (Progressive Web App)

O site funciona como PWA instalável em dispositivos móveis e desktop.

Para atualizar o cache após um novo deploy:

1. Edite `sw.js` e incremente `CACHE_VERSION` (ex: `bignews-v2.2.0`)
2. Faça commit — o navegador detectará o novo Service Worker automaticamente

---

## 🚀 Deploy no GitHub Pages

1. Crie um repositório no GitHub com o nome desejado
2. Faça upload de **todos** os arquivos para a branch `main`
3. Vá em **Settings → Pages → Source**: selecione `main` / `root`
4. O site estará disponível em `https://djalmomm-lab.github.io/Portal_Big_News/`

### Domínio próprio (bignewssc.com.br)

1. Em **Settings → Pages → Custom domain**: adicione `bignewssc.com.br`
2. No painel DNS do seu provedor, configure:

| Tipo | Nome | Valor |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | djalmomm-lab.github.io |

> ⚠️ Após configurar o domínio próprio, os prefixos `/Portal_Big_News/` nos links deverão ser removidos ou substituídos por `/`.

---

## ⚠️ Conteúdo Fictício

Todas as matérias, resultados esportivos, nomes de atletas, estatísticas e dados políticos são **fictícios**, criados apenas para estruturar o layout. Devem ser substituídos por conteúdo real antes do lançamento público.

---

## 🔧 Próximos Passos Recomendados

- [ ] Substituir todos os placeholders de redes sociais e contato
- [ ] Criar imagem `social-preview.jpg` (1200×630px) para compartilhamento
- [ ] Integrar CMS para publicação de matérias (Decap CMS, Sanity ou similar)
- [ ] Configurar plataforma de newsletter (Brevo, MailerLite ou similar)
- [ ] Adicionar analytics (Google Analytics, Plausible ou Umami)
- [ ] Criar páginas: `/sobre`, `/metodologia`, `/contato`, `/transparencia`
- [ ] Implementar busca interna com Pagefind ou Algolia
- [ ] Substituir conteúdo fictício por informações reais

---

## 👥 Sobre o Projeto

O **Big News** é um portal de jornalismo independente focado na região da Costa Esmeralda, com metodologia transparente, fact-checking e cobertura multiplataforma.

---

© 2026 Big News · Costa Esmeralda · Todos os direitos reservados.
