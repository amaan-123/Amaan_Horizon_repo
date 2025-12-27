from typing import List

from sqlalchemy.orm import Session

from fastapi import APIRouter, Depends, status

from .. import database, oauth2, schemas
from ..repository import blog

router = APIRouter(prefix="/blog", tags=["Blogs"])

get_db = database.get_db


@router.get("/", response_model=List[schemas.ShowBlog])
def all(
    db: Session = Depends(get_db),
):
    return blog.get_all(db)
    # blogs = db.query(models.Blog).all()
    # return blogs


@router.post("/", status_code=status.HTTP_201_CREATED)
def create(
    request: schemas.Blog,
    db: Session = Depends(get_db),
    current_user: schemas.User = Depends(oauth2.get_current_user),
):
    return blog.create(request, db)


@router.get(
    "/{id}",
    status_code=status.HTTP_200_OK,
    response_model=schemas.ShowBlog,
    tags=["Blogs"],
)
def show(id: int, db: Session = Depends(get_db)):
    return blog.get_by_id(id, db)


@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def destroy(
    id: int,
    db: Session = Depends(get_db),
    current_user: schemas.User = Depends(oauth2.get_current_user),
):
    return blog.destroy(id, db)


@router.put("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def update(
    id,
    request: schemas.Blog,
    db: Session = Depends(get_db),
    current_user: schemas.User = Depends(oauth2.get_current_user),
):
    return blog.update(id, request, db)
