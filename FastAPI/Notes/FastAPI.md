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

# 4 hour course related Doubts

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

## Q) What could be the potential reason for the following PUT method showing 500 Internal Server Error?

```# PUT in main.py for blog
@app.put("/blog/{id}", status_code=status.HTTP_204_NO_CONTENT) 
def update(id, request: schemas.Blog, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.id == id)
    if not blog.first():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Blog with id {id} not found"
        )
    blog.update(request, synchronize_session=False)
    db.commit()
    return "Updated"
```

## A) The **500 Internal Server Error** is caused by this line

```python
blog.update(request, synchronize_session=False)
```

---

## Why this fails (root cause)

`query.update()` **does not accept a Pydantic model**.
It expects a **dictionary of column → value mappings**.

You are passing:

- `request` → a **Pydantic object** (`schemas.Blog`)
- SQLAlchemy expects → `dict[str, Any]`

At runtime, SQLAlchemy tries to iterate over `request` as a mapping and crashes → **500 error**.

This is a **runtime type mismatch**, not a FastAPI issue.

---

## Correct fix (minimal and correct)

If you are using **Pydantic v2** (very likely in 2025):

```python
blog.update(request.model_dump(), synchronize_session=False)
```

If it were **Pydantic v1** (older tutorials):

```python
blog.update(request.dict(), synchronize_session=False)
```

---

## Secondary issue (not the 500, but still wrong)

You declared:

```python
status_code=status.HTTP_204_NO_CONTENT
```

But you return:

```python
return "Updated"
```

### Why this matters

- **204** means *no response body*
- Returning content violates HTTP semantics

This will not usually cause a 500, but it is incorrect.

### Fix (choose one)

**Option A — true 204**

```python
return None
```

**Option B — return message**

```python
@app.put("/blog/{id}", status_code=status.HTTP_200_OK)
return {"detail": "Updated"}
```

---

## Fully corrected version (recommended)

```python
@app.put("/blog/{id}", status_code=status.HTTP_204_NO_CONTENT)
def update(id: int, request: schemas.Blog, db: Session = Depends(get_db)):
    blog = db.query(models.Blog).filter(models.Blog.id == id)

    if not blog.first():
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Blog with id {id} not found",
        )

    blog.update(request.model_dump(), synchronize_session=False)
    db.commit()
```

---

## Key learning (important)

> **SQLAlchemy ORM never works directly with Pydantic objects.**
> Pydantic = validation layer
> SQLAlchemy = persistence layer
> You must explicitly bridge them using `.dict()` / `.model_dump()`.

This separation is intentional and fundamental.

---

If you want next:

- Why `query.update()` is often discouraged
- How to update via ORM object instead (safer pattern)
- How this changes when using SQLModel

## Q) 1. It was clearly observable that in all the post operations, we also do db.refresh() other than the db.commit() which is common across all operations. When is refresh needed?

Also, explain:
2. Why query.update() is often discouraged
3. How to update via ORM object instead (safer pattern)

## A) Below is a **logic-first explanation**, then concrete patterns. This is core ORM knowledge and **very evaluation-relevant**

---

## 1. Why `db.refresh()` is needed (and when it is not)

### Why `commit()` alone is not enough

Think in layers:

- **ORM object (Python memory)**
- **Database row (actual persisted state)**

`db.commit()`:

- Flushes pending changes
- Ends the transaction
- **Does NOT guarantee your Python object reflects the final DB state**

Many values are **generated by the database**, not by you:

- Auto-increment `id`
- Default timestamps (`created_at`)
- Triggers
- Computed columns

After `commit()`, those values exist **only in the database**, not yet in your Python object.

---

### What `db.refresh()` does

```python
db.refresh(blog)
```

- Issues a `SELECT` for that row
- Reloads DB-generated values into the ORM object
- Syncs Python state with database truth

---

### When `refresh()` IS required

You need `db.refresh()` **when you want to return or use DB-generated fields immediately**.

Typical POST flow:

```python
blog = models.Blog(**request.model_dump())
db.add(blog)
db.commit()
db.refresh(blog)   # ← critical
return blog
```

Without `refresh()`:

- `blog.id` may be `None`
- timestamps may be missing

---

### When `refresh()` is NOT required

- UPDATE operations where:

  - You already know the values
  - You do not need to return the updated object
- DELETE operations
- Bulk operations (`query.update()`)

In your PUT returning **204 No Content**, `refresh()` is unnecessary.

---

### Rule of thumb (memorize this)

> **Use `refresh()` when the database generates values you need immediately.**

---

## 2. Why `query.update()` is often discouraged

`query.update()` is a **bulk SQL operation**, not an ORM-level update.

### What it actually does

```python
db.query(Blog).filter(Blog.id == id).update({...})
```

- Generates a direct `UPDATE table SET ...`
- **Bypasses ORM object loading**
- Bypasses:

  - ORM validation hooks
  - Python-side logic
  - Relationship handling
  - Events / listeners

---

### Problems with `query.update()`

#### 1. Skips ORM lifecycle

- No `before_update`
- No attribute validation
- No relationship synchronization

#### 2. Harder to reason about

- You don’t “see” the object
- Debugging becomes SQL-centric

#### 3. Easy to misuse with Pydantic

As you experienced:

```python
query.update(request)  # ❌ runtime crash
```

#### 4. Stale session risks

You must manually manage:

```python
synchronize_session=False
```

This is an **advanced escape hatch**, not beginner-safe.

---

### When `query.update()` *is* acceptable

- Bulk updates
- Admin scripts
- Performance-critical jobs
- When ORM hooks are irrelevant

**Not recommended for typical CRUD APIs.**

---

## 3. Safer update via ORM object (recommended pattern)

This is the **canonical FastAPI + SQLAlchemy update pattern**.

---

### Why this pattern is safer

- Uses ORM identity map
- Respects validation and relationships
- Easy to debug
- Matches mental model: *fetch → modify → save*

---

### Correct update pattern (step-by-step)

```python
@app.put("/blog/{id}", status_code=status.HTTP_204_NO_CONTENT)
def update(
    id: int,
    request: schemas.Blog,
    db: Session = Depends(get_db)
):
    blog = db.query(models.Blog).filter(models.Blog.id == id).first()

    if not blog:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Blog with id {id} not found"
        )

    for key, value in request.model_dump().items():
        setattr(blog, key, value)

    db.commit()
```

---

### Why this works cleanly

- `blog` is a **tracked ORM instance**
- `setattr` updates in-memory state
- SQLAlchemy detects changes automatically
- `commit()` flushes only changed fields

No `synchronize_session`, no bulk hacks, no surprises.

---

### Optional improvement (partial updates)

For PATCH-like behavior:

```python
data = request.model_dump(exclude_unset=True)
for key, value in data.items():
    setattr(blog, key, value)
```

---

## Comparison summary (important for interviews)

| Aspect         | `query.update()` | ORM object update |
| -------------- | ---------------- | ----------------- |
| Safety         | ❌ risky          | ✅ safe            |
| Debuggability  | ❌ harder         | ✅ easier          |
| ORM hooks      | ❌ skipped        | ✅ respected       |
| Learning value | ❌ low            | ✅ high            |
| CRUD APIs      | ❌ discouraged    | ✅ recommended     |

---

## Final mental model (lock this in)

1. **POST** → `add → commit → refresh`
2. **GET** → `query`
3. **PUT/PATCH** → `query → modify object → commit`
4. **DELETE** → `query → delete → commit`

If you follow this model, **500 errors drop dramatically** and your code remains evaluator-friendly.

---

If you want next:

- A 2-minute explanation script for FastAPI + SQLAlchemy lifecycle
- Common ORM mistakes evaluators watch for
- How this pattern changes with async SQLAlchemy

## Q) Right now these are my dependencies in requirements.txt

fastapi[standard]
sqlalchemy
passlib
argon2
`# bcrypt`

To generate JWT token, the package the tutorial follows is python-jose, but now the documentation shows PyJWT. What should I do?  

## A) ### Short, correct decision

**Use `python-jose` for now. Do NOT switch to PyJWT before your evaluation.**

This is a **time-vs-risk** decision, not a “what’s newer” decision.

---

## Why this is the right choice (reasoning first)

### 1. FastAPI ecosystem expectation (important)

FastAPI’s **official security docs and examples** have historically used **`python-jose`** for JWT.

That means:

- Most tutorials
- Most Q&A answers
- Most evaluator mental models

…still align with `python-jose`.

Using it will make your code **instantly recognizable**.

---

### 2. PyJWT vs python-jose: what actually changed?

| Aspect            | python-jose                 | PyJWT              |
| ----------------- | --------------------------- | ------------------ |
| Purpose           | JWT + JWS + JWE             | JWT only           |
| Algorithms        | HS256, RS256, ES256, etc.   | Same               |
| FastAPI tutorials | Very common                 | Increasing         |
| Learning curve    | You already follow tutorial | New mental mapping |
| Evaluation risk   | Low                         | Medium             |

**There is no functional advantage for your use case (FastAPI auth)**.

---

### 3. Why docs mention PyJWT now

FastAPI docs **show PyJWT as an alternative**, not a replacement.

Reasons:

- PyJWT is lighter
- More general Python adoption
- Simpler API for minimal JWT use

But **FastAPI has NOT deprecated `python-jose`**.

---

## What you should do (clear steps)

### ✅ Keep `python-jose`

Add this to `requirements.txt`:

```txt
python-jose[cryptography]
```

Your full list becomes:

```txt
fastapi[standard]
sqlalchemy
passlib[argon2]
python-jose[cryptography]
```

Notes:

- Remove plain `passlib` → use `passlib[argon2]`
- Remove stray `argon2` line (it’s pulled by passlib extra)
- bcrypt can stay commented or removed

---

## Why NOT to switch right now

Switching to PyJWT means:

- Relearning encode/decode API
- Rewriting tutorial code
- Debugging subtle claim handling differences
- Zero evaluation upside

That’s **unnecessary risk 4 days before evaluation**.

---

## What to say if asked (strong evaluator answer)

> “I used python-jose because it’s well integrated with FastAPI tutorials and supports standard JWT algorithms. PyJWT is also valid, but I prioritized alignment with FastAPI examples for clarity.”

That answer is **technically correct and pragmatic**.

---

## After evaluation (recommended upgrade path)

Once the evaluation is over:

- Try PyJWT in a side branch
- Compare APIs
- Decide based on project needs

At that point, it’s an **optimization**, not a gamble.

---

## Final recommendation (lock this in)

- ❌ Do not switch libraries now
- ✅ Use `python-jose`
- ✅ Clean up `requirements.txt`
- ✅ Focus on correctness and explanation

If you want next:

- Minimal JWT utility file (create/verify token)
- Common JWT mistakes evaluators watch for
- How to wire JWT auth into Swagger properly

# General Doubts

## Q) Teach me Data Validation - Annotated[], Query(), Path(), as in the following code

```main.py
from typing import Annotated

from fastapi import FastAPI, Path, Query

app = FastAPI()

@app.get("/items/{item_id}")
async def read_items(
    item_id: Annotated[int, Path(description ="The ID of the item to get")],
    q: Annotated[str | None, Query(max_length = 5)] = None,
):
    results = {"item_id": item_id}
    if q:
        results.update({"q": q})
    return results
```

## A) ### Data validation in FastAPI — *why → how → what*

---

## Why data validation exists

An API sits at a **trust boundary**: everything coming from the client can be wrong, malicious, or simply malformed.
FastAPI enforces validation so that:

1. **Invalid data is rejected early** (before your business logic runs).
2. **Types are guaranteed** inside your function (no defensive `if isinstance` checks).
3. **API documentation is accurate and automatic** (Swagger/OpenAPI reflects real constraints).
4. **Errors are consistent** (HTTP 422 with structured details).

FastAPI achieves this by combining **Python type hints**, **Pydantic**, and **request metadata**.

---

## How FastAPI performs validation

FastAPI classifies incoming data by **where it comes from**:

| Source                          | Tool                   |
| ------------------------------- | ---------------------- |
| Path parameters (`/items/{id}`) | `Path()`               |
| Query parameters (`?q=abc`)     | `Query()`              |
| Request body (JSON)             | Pydantic models        |
| Headers / Cookies               | `Header()`, `Cookie()` |

The modern, preferred way to attach metadata to types is **`typing.Annotated`**.

---

## Core idea: `Annotated[T, Metadata]`

### Why `Annotated` exists

Python types (`int`, `str`, etc.) describe **what the data is**.
FastAPI also needs **constraints and documentation** about that data.

`Annotated` lets you keep both **together**.

```py
Annotated[int, Path(...)]
```

- `int` → the actual type
- `Path(...)` → validation + documentation rules

Without `Annotated`, you would mix concerns or rely on defaults.

---

## Path parameters — `Path()`

### Why `Path()` is special

Path parameters:

- Are **required** (by URL structure)
- Must match **exactly** what the path expects
- Are commonly used as identifiers

FastAPI enforces this strictly.

### Your example

```py
item_id: Annotated[int, Path(description="The ID of the item to get")]
```

**What happens:**

- FastAPI extracts `{item_id}` from the URL
- Converts it to `int`
- If conversion fails → `422 Unprocessable Entity`
- Adds description to Swagger

### Typical constraints you can add

```py
Path(
    gt=0,              # must be > 0
    le=1000,           # must be <= 1000
    description="Item ID"
)
```

Use `Path()` **only** for path variables.

---

## Query parameters — `Query()`

### Why query validation matters

Query params are:

- Optional by default
- User-controlled
- Often used for filtering, searching, pagination

Unchecked query values are a common bug source.

### Your example

```py
q: Annotated[str | None, Query(max_length=5)] = None
```

Breakdown:

- `str | None` → optional parameter
- `= None` → not required
- `max_length=5` → validation rule
- `Query()` → tells FastAPI this comes from the query string

### Behavior

| Request             | Result           |
| ------------------- | ---------------- |
| `/items/5`          | valid (`q=None`) |
| `/items/5?q=abc`    | valid            |
| `/items/5?q=abcdef` | **422 error**    |

FastAPI validates **before** calling your function.

---

## Why `Query()` instead of plain defaults

This works but is limited:

```py
q: str | None = None
```

This works and validates type, but you **cannot**:

- Add length constraints
- Add regex rules
- Add documentation
- Add examples

`Query()` exists to solve this.

---

## Putting it together — request lifecycle

For this request:

```
GET /items/10?q=abc
```

FastAPI does the following:

1. Extracts `item_id = "10"` from path
2. Converts to `int`
3. Extracts `q = "abc"` from query
4. Checks length ≤ 5
5. Calls your function with **trusted values**

Your function receives **already validated data**.

---

## What each line in your function means

```py
@app.get("/items/{item_id}")
```

Declares a route with a required path parameter.

```py
item_id: Annotated[int, Path(...)]
```

Validated path parameter with metadata.

```py
q: Annotated[str | None, Query(max_length=5)] = None
```

Optional query parameter with constraints.

```py
return results
```

FastAPI serializes the response to JSON automatically.

---

## Mental model to remember

- **Type hint** → data shape
- **Annotated** → attach rules to the type
- **Path / Query** → where data comes from
- **Validation happens before your function runs**

If validation fails, **your function is never executed**.

---

## One-line summary

> `Annotated` tells FastAPI *what the data is*, while `Path()` and `Query()` tell it *where the data comes from and how it must behave*.

If you want, next logical steps are:

- Required vs optional queries
- `Query(..., alias=...)`
- Regex and numeric constraints
- When to stop using `Query` and switch to Pydantic models

## Q) Give brief answer for

When to stop using Query and switch to Pydantic models

## A) **Short answer:**

Stop using `Query()` when request data becomes **structured, related, or reusable**. Switch to **Pydantic models**.

**Rules of thumb:**

Use **`Query()`** when:

- You have **1–3 simple, independent values**
- Parameters are **flat** (no nesting)
- Logic is trivial (filters, search text, pagination)
- The data is **endpoint-specific**

Use **Pydantic models** when:

- You have **many parameters** (readability suffers)
- Fields are **logically related** (belong to one concept)
- You need **cross-field validation**
- The same data shape is **reused across endpoints**
- The request body is **JSON**, not just query params
- Validation rules become **complex**

**Key signal to switch:**
If you think *“this feels like an object”*, it **is** a model.

**Example switch point:**

- `?q=&page=&size=&sort=&min_price=&max_price=` → **Pydantic model**

**Mental model:**
`Query()` = individual knobs
Pydantic model = a control panel
