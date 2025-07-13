# React use() + Suspense & ErrorBoundary Example
Цей проєкт демонструє використання нового хука use() у React 19 для роботи з асинхронними даними. Також реалізовано обробку завантаження через Suspense та помилок через ErrorBoundary.

## Стек технологій
- React 19 + TypeScript
- Vite (шаблон)
- React хуки: use, Suspense
- Error Boundary (react-error-boundary)
- Axios
- API-запити до JSONPlaceholder

## Структура
/components/MessageComponent.tsx — компонент, який отримує дані через use() з переданого Promise.
/components/Loading.tsx — компонент-заглушка для Suspense.
/components/ErrorBoundary.tsx — обгортка для обробки помилок.
/components/ErrorFallback.tsx — кастомний компонент відображення помилок.
/utils/api.ts — функція getMessage, яка повертає Promise із затримкою (імітація серверного запиту).
/types/Message.interface.ts — типізація об'єктів повідомлення.
/App.tsx — головний компонент:
- обгортає MessageComponent у Suspense і ErrorBoundary;
- показує статуси завантаження і помилок;
- виводить повідомлення зі списку.

## Що реалізовано
### 1. MessageComponent
Отримує Promise (getMessage) та використовує хук use() для витягнення результату.
Виводить повідомлення, отримані з API.
Не використовує try/catch, як рекомендується у React 19 — обробка помилок делегована ErrorBoundary.

### 2. Loading
Компонент для Suspense, показує текст Loading... під час очікування на відповідь.

### 3. ErrorBoundary + ErrorFallback
Використано бібліотеку react-error-boundary.
При помилці (наприклад, помилкова URL-адреса), виводиться повідомлення типу:
"Не вдалося завантажити дані. Можливо, проблема з мережею або сервером. Деталі: ..."

### 4. API-запит
URL: https://jsonplaceholder.typicode.com/comments.
Затримка 2 секунди (setTimeout) імітує справжній запит.
Дані: масив коментарів з полями id, name, email, body.

## Як запустити
### 1. Клонувати репозиторій:

```bash
git clone <адреса_репозиторію>
cd my-react-app
``` 

### 2. Встановити залежності:

```bash
npm install
```

### 3. Запустити проєкт локально:

``` bash
npm run dev
```

## Демо
Розгорнуто на Vercel: вставити посилання

## Примітки
- Проєкт ініціалізовано за допомогою Vite.
- Компоненти розділено відповідно до відповідальностей (UI, логіка, помилки).
- Використано сучасні можливості React 19 (use() з Suspense і ErrorBoundary).
- Дотримано вимог до чистоти та структури коду.
- README містить повну документацію.
- Проєкт розгорнуто на Vercel / Netlify.