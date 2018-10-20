from typing import List


class Role:
    name: str

    def __init__(self, name):
        self.name = name


class Member:
    name: str
    role: Role

    def __init__(self, name, role):
        self.name = name
        self.role = role


class Group:
    name: str
    members: List[Member]

    def __init__(self, name, members):
        self.name = name
        self.members = members


