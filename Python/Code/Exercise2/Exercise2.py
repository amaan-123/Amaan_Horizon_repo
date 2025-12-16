from __future__ import annotations
from typing import Dict, List, Optional
from datetime import date, datetime


class Book:
    """Represents a book in the library."""
    def __init__(self, book_id: str, title: str, author: str, published_year: int):
        if not book_id or not title:
            raise ValueError("book_id and title are required")
        if not isinstance(published_year, int):
            raise ValueError("published_year must be an int")
        self.__book_id = str(book_id)
        self.__title = title
        self.__author = author
        self.__published_year = published_year

    # @property creates a getter(read-only properties)
    # u can use .setter/.deleter
    @property
    def book_id(self) -> str:
        return self.__book_id

    @property
    def title(self) -> str:
        return self.__title

    @property
    def author(self) -> str:
        return self.__author

    @property
    def published_year(self) -> int:
        return self.__published_year

    def __repr__(self) -> str:
        return f"Book({self.book_id!r}, {self.title!r}, {self.author!r}, {self.published_year})"


class Member:
    """Represents a library member."""
    def __init__(self, member_id: str, name: str, membership_valid_date: date):
        if not member_id or not name:
            raise ValueError("member_id and name are required")
        if not isinstance(membership_valid_date, date):
            raise ValueError("membership_valid_date must be a datetime.date")
        self.__member_id = str(member_id)
        self.__name = name
        self.__membership_valid_date = membership_valid_date

    @property
    def member_id(self) -> str:
        return self.__member_id

    @property
    def name(self) -> str:
        return self.__name

    @name.setter
    def name(self, new_name: str) -> None:
        if not new_name:
            raise ValueError("name cannot be empty")
        self.__name = new_name

    @property
    def membership_valid_date(self) -> date:
        return self.__membership_valid_date

    @membership_valid_date.setter
    def membership_valid_date(self, new_date: date) -> None:
        if not isinstance(new_date, date):
            raise ValueError("membership_valid_date must be a datetime.date")
        self.__membership_valid_date = new_date

    def is_membership_active(self, on_date: Optional[date] = None) -> bool:
        on_date = on_date or date.today()
        return self.__membership_valid_date >= on_date

    def __repr__(self) -> str:
        return f"Member({self.member_id!r}, {self.name!r}, valid_until={self.membership_valid_date.isoformat()})"


class Library:
    """Manages collections of books and members and the required actions."""
    def __init__(self):
        self._books: Dict[str, Book] = {}
        self._members: Dict[str, Member] = {}

    # Book management
    def add_book(self, book: Book) -> Book:
        """Add a book to library; raises ValueError on duplicate id."""
        if book.book_id in self._books:
            raise ValueError(f"Book with id {book.book_id!r} already exists")
        self._books[book.book_id] = book
        return book

    def search_by_title(self, query: str) -> List[Book]:
        """Case-insensitive substring search in titles."""
        if not query:
            return []
        q = query.lower()
        return [b for b in self._books.values() if q in b.title.lower()]

    # Member management
    def register_member(self, member: Member) -> Member:
        """Register a new member; raise ValueError on duplicate id."""
        if member.member_id in self._members:
            raise ValueError(f"Member with id {member.member_id!r} already exists")
        self._members[member.member_id] = member
        return member

    def update_member_details(self, member_id: str, *, name: Optional[str] = None,
                              membership_valid_date: Optional[date] = None) -> Member:
        """Update allowed fields on a member; raises KeyError if not found."""
        if member_id not in self._members:
            raise KeyError(f"Member id {member_id!r} not found")
        mem = self._members[member_id]
        if name is not None:
            mem.name = name
        if membership_valid_date is not None:
            mem.membership_valid_date = membership_valid_date
        return mem

    def delete_member(self, member_id: str) -> bool:
        """Delete a member; return True if removed, False if not present."""
        return self._members.pop(member_id, None) is not None

    # Helpful getters for tests / UI
    def get_member(self, member_id: str) -> Optional[Member]:
        return self._members.get(member_id)

    def get_book(self, book_id: str) -> Optional[Book]:
        return self._books.get(book_id)

    def list_books(self) -> List[Book]:
        return list(self._books.values())

    def list_members(self) -> List[Member]:
        return list(self._members.values())


# Test code
lib = Library()

# Add books
lib.add_book(Book("B1", "Python Programming", "A. Author", 2021))
lib.add_book(Book("B2", "Advanced Python", "B. Writer", 2023))
lib.add_book(Book("B3", "Cooking for Beginners", "Chef X", 2019))

# Register members
lib.register_member(Member("M1", "Alice", date(2025, 12, 31)))
lib.register_member(Member("M2", "Bob", date(2024, 6, 30)))

# Search
print("Search 'python':", lib.search_by_title("python"))

# Update member (partial)
lib.update_member_details("M2", name="Robert")
print("Updated member M2:", lib.get_member("M2"))

# Delete member
removed = lib.delete_member("M1")
print("Removed M1:", removed)
print("Remaining members:", lib.list_members())


# class Vehicle:
#     def __init__(self, make: str, model: str, year: int):
#         self.make = make
#         self.model = model
#         self._year = year

#     def start_engine(self) -> str:
#         return f"The engine of the {self.year} {self.make} {self.model} is starting."

# class Car:
#     def __init__(self, vehicle: Vehicle, num_doors: int):
#         self.vehicle = vehicle
#         self.num_doors = num_doors
#         self.car_year = vehicle._year

# veh = Vehicle("Toyota", "Camry", 2020)
# # print(veh._Vehicle__year)