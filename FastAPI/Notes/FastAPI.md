# [FastAPI - A python framework | Full Course | Bitfumes](https://www.youtube.com/watch?v=7t2alSnE2-I)

## **Introduction to FastAPI**

FastAPI is a modern, high-performance Python web framework designed for building APIs quickly. It is built on top of **Starlette** and **Pydantic**, leveraging modern Python features like type hinting.

- **Key Features**:
  - **Automatic Documentation**: FastAPI automatically generates interactive API documentation using **Swagger UI** and **ReDoc**.
  - **Speed**: It is extremely fast and supports **asynchronous programming**, a feature often lacking in older frameworks like Django.
  - **Standards-Based**: It is fully based on **OpenAPI** and **JSON Schema** standards.
  - **Developer Productivity**: It offers excellent code editor autocomplete support in IDEs like VS Code and PyCharm.

---

## **Getting Started**

### **Installation and Setup**

FastAPI requires **Python 3.6 or higher**. It is recommended to use a virtual environment to manage dependencies.

- **Create a virtual environment**:

```bash
python -m venv fastapi_env
```

- **Activate the environment (Mac/Linux)**:

```bash
source fastapi_env/bin/activate
```

- **Install FastAPI and Uvicorn**:
FastAPI handles the framework logic, while **Uvicorn** serves as the ASGI server to run the application.

```bash
pip install fastapi uvicorn
```

### **Creating a Basic Application**

A minimal FastAPI application consists of four main steps: importing the library, creating an instance, defining a function, and applying a decorator.

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def index():
    return {"data": "Hello World"}
```

To run the server with auto-reload enabled:

```bash
uvicorn main:app --reload
```

---

## **Routing and Parameters**

### **Path Parameters**

Path parameters allow for **dynamic routing** by capturing values directly from the URL. **Type hinting** ensures that FastAPI performs automatic data validation and conversion.

```python
@app.get("/blog/{id}")
def show(id: int):
    return {"data": id}
```

- **Order Matters**: FastAPI processes routes sequentially. Specific static routes (like `/blog/unpublished`) must be defined **before** dynamic routes (like `/blog/{id}`) to avoid being captured as parameters.

### **Query Parameters**

Parameters not defined in the path are automatically treated as **query parameters**. These can have default values or be marked as **Optional** using Python's `typing` module.

```python
from typing import Optional

@app.get("/blog")
def index(limit: int = 10, published: bool = True, sort: Optional[str] = None):
    return {"data": f"{limit} blogs"}
```

---

## **Request Body and Pydantic Models**

When sending data from a client to an API, it is sent as a **request body**. FastAPI uses **Pydantic models** to define the structure of this data.

- **Pydantic Schemas**: These classes inherit from `BaseModel` and define the required fields and their types.

```python
from pydantic import BaseModel

class Blog(BaseModel):
    title: str
    body: str
    published: Optional[bool]
```

---

## **Database Integration with SQLAlchemy**

FastAPI can work with any database, but **SQLAlchemy** is commonly used as an **ORM (Object Relational Mapper)** to map Python objects to database tables.

### **Database Configuration**

Setting up the database involves creating an engine and a session factory.

```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./blog.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
```

### **Models vs. Schemas**

- **Models**: These (SQLAlchemy) define the actual **database table structure**.
- **Schemas**: These (Pydantic) define the **data validation** for requests and responses.

---

## **CRUD Operations**

### **Creating Data (POST)**

To store data, you use the database session to add and commit the new object. **Status codes** can be customized; for example, using `201 Created` for successful POST requests.

### **Reading Data (GET)**

You can fetch all records using `.all()` or a specific record using `.filter().first()`.

### **Handling Exceptions**

If a resource is not found, you should raise an `HTTPException` with a `404` status code to provide a clear error message.

```python
from fastapi import HTTPException, status

if not blog:
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Blog not found")
```

---

## **Advanced Data Handling**

### **Response Models**

**Response models** allow you to control exactly which fields are returned in the API response. This is useful for hiding sensitive data like passwords.

- **ORM Mode**: To allow Pydantic to read data from ORM objects (like SQLAlchemy models), you must set `orm_mode = True` in the schema's configuration class.

```python
class ShowBlog(BaseModel):
    title: str
    body: str
    class Config():
        orm_mode = True
```

### **Relationships**

Relationships in SQLAlchemy allow you to link tables, such as connecting a blog post to a specific user. This requires defining a **ForeignKey** and using the `relationship` function to enable back-population.

---

## **Structuring Larger Applications**

As an application grows, it should be refactored into multiple files using **APIRouter**.

- **Routers**: Group related routes (e.g., users, blogs) into separate modules.
- **Repositories**: Extract database logic into separate files to keep the router files clean and focused on routing.
- **Tags and Prefixes**: Use `tags` for better documentation organization and `prefix` to avoid repeating base paths in every route.

---

## **Security and Authentication**

FastAPI provides built-in support for **OAuth2 with JWT (JSON Web Tokens)**.

- **Password Hashing**: Use the `passlib` library with the **Bcrypt** algorithm to hash passwords before storing them.
- **JWT Tokens**: Tokens are generated upon successful login and must be sent in the `Authorization` header as a **Bearer token** for protected routes.
- **Dependencies**: Use FastAPI's **dependency injection** system to protect routes by requiring a valid token before the path operation function executes.

---

## **Deployment**

The application can be deployed to platforms like **Deta** (now Deta Space).

- **Preparation**: Ensure a `requirements.txt` file is present.
- **CLI**: Use the Deta CLI to create a new "micro" and deploy the code with the `deta new` and `deta deploy` commands.

**Think of FastAPI as a high-speed assembly line:** Pydantic acts as the quality control inspector at every station, ensuring every part (data) matches the blueprint (schema) before it moves further down the line or is packaged for the customer.

# Doubts

## Q) This chat is to learn FastAPI. I am learning from the following tutorial which is good but 4 years old(2021): "<https://www.youtube.com/watch?v=7t2alSnE2-I>". So far, I have created the virtual environment and ran the following command: `pip install "fastapi[standard]"`. What has changed since then, that I should know of, as there are subtle differences like the FastAPI documentation not mentioning that I need to explicitly install uvicorn as the teacher in the tutorial on youtube shows.?

## A) Here’s a **modern (2025) overview of what’s changed or clarified since the 2021 FastAPI tutorial you’re following**, especially around installation and running the app

---

## **1. Why you still need Uvicorn explicitly**

### **Why (core concept)**

FastAPI is **only the web framework** — it does not itself serve HTTP requests. To actually **run** your API, you need an **ASGI server**. Uvicorn is the most common choice today. The FastAPI framework delegates the serving of HTTP to that ASGI server. ([Real Python][1])

### **What has changed**

- Older tutorials often installed FastAPI and **assumed Uvicorn is present** or taught it separately.
- Current docs clarify that **FastAPI itself doesn’t include a web server by default** — you *must* install an ASGI server like Uvicorn. ([Real Python][1])
- When you install via:

  ```bash
  pip install "fastapi[standard]"
  ```

  this **includes Uvicorn[standard]** and a few common extras (e.g., `python-multipart`, validators). ([fastapi.tiangolo.com][2])
  So your approach is correct — *explicitly installing Uvicorn is okay*, but not always required if `fastapi[standard]` already brings it in.

---

## **2. FastAPI installation “extras” explained**

### **Why (logic)**

Python packages can define optional extras — sets of related dependencies you want for typical development but not strictly core functionality.

### **What you should know**

- `fastapi` alone = only core framework.
- `fastapi[standard]` = FastAPI + Uvicorn + commonly useful tools. ([fastapi.tiangolo.com][2])
- There used to be (and still is) `fastapi[all]` historically — this brings *even more* optional dependencies — but docs now recommend `standard` for typical use. ([fastapi.tiangolo.com][3])

So in 2021 the tutorial may have shown:

```bash
pip install fastapi
pip install uvicorn[standard]
```

Now many guides show the consolidated:

```bash
pip install "fastapi[standard]"
```

Both approaches are valid; the latter bundles more for convenience.

---

## **3. Running and dev commands have slightly changed**

### **Why (clarity of UX)**

FastAPI added **official CLI commands** (`fastapi dev`, `fastapi run`) to improve developer experience beyond just using Uvicorn directly. ([Real Python][1])

### **Today**

- **Development (auto-reload):**

  ```bash
  fastapi dev main.py
  ```

  This wraps Uvicorn with auto-reload built in. ([Real Python][1])

- **Production (no reload):**

  ```bash
  fastapi run main.py
  ```

  This also runs Uvicorn with optimized defaults. ([Real Python][1])

Older tutorials almost always use:

```bash
uvicorn main:app --reload
```

which still works and gives you explicit control of flags.

---

## **4. Python version and dependencies**

### **Why (compatibility)**

FastAPI depends on modern Python features like type hints and async/await. Python 3.8+ is required. ([fastapi.tiangolo.com][4])

### **Current context**

- You should use at least **Python 3.10** or newer for the best support, type-checking features, and compatibility with recent dependency versions.
- Pydantic (used for models) is now at **v2**, which has changes versus older minor versions — this slightly affects how models and validation behave (esp. import paths and behaviors).
  (Not in your current focus, but worth knowing as you expand into models.)

---

## **5. Deployment recommendations are more mature**

### **Why (ecosystem maturity)**

As FastAPI is now widely used in production, docs and ecosystem tooling have improved:

- More formal **deployment instructions** using Uvicorn/Gunicorn combos.
- Clarification of when to use a process manager or containerization.
- More emphasis on environment variables and security practices. ([fastapi.tiangolo.com][5])

Your tutorial from 2021 may not cover these modern best practices.

---

## **6. Summary of the key practical differences**

| Topic                  | 2021 Tutorial                       | 2025 Reality                                             |
| ---------------------- | ----------------------------------- | -------------------------------------------------------- |
| **Installation**       | `fastapi` then `uvicorn` separately | `pip install "fastapi[standard]"` includes Uvicorn       |
| **ASGI server**        | Often assumed                       | Explicit installation recommended or bundled in standard |
| **Running the app**    | `uvicorn main:app`                  | You can use `fastapi dev` / `fastapi run` or Uvicorn     |
| **Python requirement** | Python 3.7+                         | Python 3.8+, realistically 3.10+                         |
| **Ecosystem maturity** | Early adoption                      | More deployment tooling & clearer docs                   |
| **Optional extras**    | `fastapi[all]`                      | `fastapi[standard]` for typical cases                    |

---

## **Next steps for you**

1. Confirm Python version (`python --version`).
2. In your venv, install:

   ```bash
   pip install "fastapi[standard]"
   ```

3. Run with:

   ```bash
   fastapi dev main.py
   ```

   or

   ```bash
   uvicorn main:app --reload
   ```

4. Explore `/docs` for the OpenAPI UI.

---

If you also want a concise list of recommended modern packages and a minimal starter `requirements.txt`, I can provide that next.

[1]: https://realpython.com/get-started-with-fastapi/?utm_source=chatgpt.com "Get Started With FastAPI"
[2]: https://fastapi.tiangolo.com/deployment/manually/?utm_source=chatgpt.com "Run a Server Manually"
[3]: https://fastapi.tiangolo.com/release-notes/?utm_source=chatgpt.com "Release Notes - FastAPI - Tiangolo.com"
[4]: https://fastapi.tiangolo.com/tutorial/?utm_source=chatgpt.com "Tutorial - User Guide"
[5]: https://fastapi.tiangolo.com/deployment/?utm_source=chatgpt.com "Deployment"
