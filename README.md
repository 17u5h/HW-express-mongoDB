Учебный пет-проект

Стек технологий: Node.js, express, mongoDB

Сервер на Express.js + MongoDB на основе REST API 

REST API может:

- Отдавать список всех пользователей.
- Отдавать данные по пользователю на основе id.
- Изменять данные пользователя на основе id.
- Удалять данные пользователя на основе id.
- Отдавать список всех книг.
- Отдавать данные по книге на основе id.
- Изменять данные книги на основе id.
- Удалять данные книги на основе id.

Также REST API может:

- Возвращать ошибку 404, если сущность не найдена или был запрошен несуществующий роут.
- Возвращать ошибку 500, если что-то пошло не так при обработке запроса.
- При успешном ответе сервера возвращать JSON-сущности.

Формат данных пользователя:

- Имя, строка, не менее 2 символов.
- Фамилия, строка, не менее 2 символов.
- Username, строка, не менее 5 символов.

Формат данных книги:

- Заголовок, строка, не менее 2 символов.
- Автор, строка, не менее 2 символов.
- Год выпуска, число.
