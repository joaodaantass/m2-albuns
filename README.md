# Minha Coleção Trabalho M2

## Alunos

- João Vitor Dantas Ferreira - RGM: 11261104194
- João Eduardo da Silva Sobrinho - RGM: 11261103374
- Guilherme Augusto Gaspar Lopes - RGM: 11261102767
- Mateus Giorgio de Souza - RGM: 11261102814

## Variante

Álbuns (app `albuns`, model `Album`: titulo, autor, ano e avaliacao)

## Como rodar

### Backend (Django)

```
pip install django django-cors-headers
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

O backend roda em http://127.0.0.1:8000

### Frontend (React)

Em outro terminal:

```
cd frontend
npm install
npm run dev
```

Acesse http://localhost:5173

## Rotas

- `GET /api/albuns/` lista os álbuns
- `POST /api/albuns/` cadastra um álbum
- `GET /api/albuns/resumo/` mostra o resumo da coleção 