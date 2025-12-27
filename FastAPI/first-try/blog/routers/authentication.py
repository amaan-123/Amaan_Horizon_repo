from datetime import timedelta

from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from fastapi import APIRouter, Depends, HTTPException, status

from .. import database, models
from ..hashing import Hash
from ..schemas import Token
from ..token import ACCESS_TOKEN_EXPIRE_MINUTES, create_access_token

router = APIRouter(tags=["Autentication"])

get_db = database.get_db


@router.post("/login")
def login(
    request: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)
):
    user = db.query(models.User).filter(models.User.email == request.username).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with username {request.username} not found",
        )
    if not Hash.verify(request.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Password doesn't match",
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")
