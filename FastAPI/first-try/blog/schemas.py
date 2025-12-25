from pydantic import BaseModel


class Blog(BaseModel):
    title: str
    body: str


# Say we don't want to show id
class ShowBlog(Blog):
    pass
    # class Config:
    #     orm_mode = True


class User(BaseModel):
    name: str
    email: str
    password: str


class ShowUser(BaseModel):
    name: str
    email: str
