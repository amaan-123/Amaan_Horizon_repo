from pydantic import BaseModel


class Blog(BaseModel):
    title: str
    body: str


# Say we don't want to show id
class ShowBlog(Blog):
    class Config:
        orm_mode = True


class User(BaseModel):
    name: str
    email: str
    password: str
