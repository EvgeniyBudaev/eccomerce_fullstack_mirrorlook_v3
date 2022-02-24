![yamdb_workflow](https://github.com/EvgeniyBudaev/eccomerce_fullstack_mirrorlook_v3/actions/workflows/main.yml/badge.svg)

# Яндекс.Практикум. Python backend. API YamDB

## Содержание
- [Описание_проекта](#Описание_проекта)
- [Технологии](#Технологии)
- [Workflow](#Workflow)
- [Настройка_сервера](#Настройка_сервера)
- [Запуск проекта](#Запуск_проекта)
- [Тесты](#Тесты)
- [Авторы](#Авторы)

### <a name="Описание_проекта">Описание</a>

Интернет-магазин зеркал Mirror Look

### <a name="Технологии">Технологии</a>

В проекте применяется
- **Django REST Framework**,
- **Python 3**,
- **PostgreSQL**,
- **Docker**,
- **Nginx**,
- **Gunicorn**,
- **Git**,
- **Simple JWT** - аутентификация реализована с помощью **JWT-токена**,
- **React**,
- **Redux**,
- **Next.js**,
- **TypeScript**,

### <a name="Workflow">Workflow состоит из четырёх шагов:</a>
- *Тестирование проекта (flake8 и pytest)*,
- *Сборка и публикация образа на DockerHub*,
- *Автоматический деплой на удаленный сервер*,
- *Отправка уведомления в телеграм-чат*.

### <a name="Настройка_сервера">Настройка_сервера</a>

- Обновление системы:

```python
 sudo apt update
 sudo apt upgrade -y  
```

- Установка пакетов:

```python
 sudo apt install python3-pip python3-venv git -y 
```

- Установка NGINX:

```python
 sudo apt install nginx -y
 sudo ufw allow 'Nginx Full'
 sudo ufw allow OpenSSH 
 sudo ufw enable 
 sudo ufw status 
```

### <a name="Запуск_проекта">Запуск проекта</a>

- Скопируйте файлы docker-compose.yaml и nginx/default.conf из проекта на сервер:

```python
 scp docker-compose.yml admin@62.84.119.86:/home/admin/docker-compose.yml
 scp -r nginx.conf admin@62.84.119.86:/home/admin
```

- Запуск NGINX:

```python
 sudo systemctl start nginx 
```

- Предстартовая подготовка и запуск nginx на сервере:

```python
 sudo nginx -t
```

- Перезапустить службу nginx на сервере:

```python
 sudo systemctl reload nginx
```

- Остановить службу nginx на сервере:

```python
 sudo systemctl stop nginx
```

- Установите docker и docker-compose на сервер:

```python
 sudo apt install docker.io
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

- Примените разрешения для исполняемого файла к двоичному файлу:

```python
  sudo chmod +x /usr/local/bin/docker-compose
```

- Протестируйте установку:

```python
  docker-compose --version
```

-  Отредактируйте файл nginx.conf и в строке server_name впишите свой IP

- Скопируйте файлы docker-compose.yaml и nginx.conf из проекта на сервер
  (на локальной машине в терминале по месту нахождения файла,
  нужно создать на сервере mkdir nginx):

```python
  scp docker-compose.yml <username>@<host>:/home/<username>/docker-compose.yml
  scp default.conf <username>@<host>:/home/<username>/nginx/default.conf
```

- После успешного деплоя зайдите на боевой сервер и выполните команды (только после первого деплоя):
  Собрать статические файлы в STATIC_ROOT:
```python
  docker-compose exec web python3 manage.py collectstatic --noinput
```

- Применить миграции и создать суперпользователя:

```python
  sudo docker-compose exec -T backend python manage.py makemigrations --noinput
  sudo docker-compose exec -T backend python manage.py migrate --noinput
  docker exec -it container_id python manage.py createsuperuser
```

- Заполнить базу начальными данными:

```python
  docker-compose exec web python manage.py loaddata fixtures.json
```

###
Теперь проект доступен по адресу http://62.84.119.86.

- Остановить приложение:

```python
  docker-compose down
```


Инструкция как пользоваться данным API доступна по адресу http://localhost/redoc/

### <a name="Тесты">Тесты</a>
```python
  pytest
```

### <a name="Авторы">Авторы</a>
```
 Евгений Будаев
```