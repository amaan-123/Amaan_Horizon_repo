from typing import List

from pydantic import BaseModel


# Say we don't want to show id
class Blog(BaseModel):
    title: str
    body: str


class User(BaseModel):
    name: str
    email: str
    password: str


# Say we don't want to show id, hashed password
class ShowUser(BaseModel):
    name: str
    email: str
    blog: List[Blog]


class ShowBlog(Blog):
    creator: ShowUser
    # class Config:
    #     orm_mode = True
