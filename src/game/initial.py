from models import *

soloist = Role('Солист')
guitarist = Role('Гитарист')


groups = [
    Group(
        'Группа 1',
        [Member('Иван Иванов', soloist), Member('Кирилл Кириллов', guitarist)]
    ),
    Group(
        'Группа 2',
        [Member('Иван Иванов', soloist), Member('Кирилл Кириллов', guitarist)]
    )
]