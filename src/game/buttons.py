from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.uix.widget import Widget
from kivy.properties import NumericProperty, ObjectProperty, StringProperty
from kivy.metrics import dp


def main_button(**kwargs):
    handler = kwargs.pop('handler', lambda a: True)
    size_hint = kwargs.pop('size_hint')
    size_hint_box = ((1 - size_hint[0]) / 2, 1)
    b = BoxLayout()
    b.add_widget(BoxLayout(size_hint=size_hint_box))
    btn = Button(
        background_normal='assets/images/ok-button.png',
        background_down='assets/images/ok-button.png',
        bold=True,
        size_hint=size_hint,
        **kwargs,
    )

    def press(*args, **kwargs):
        x, y = size_hint
        x -= 0.02
        btn.size_hint = (x, y)
        handler(args)

    def up(*args, **kwargs):
        btn.size_hint = size_hint

    btn.on_press = press
    btn.on_touch_up = up
    b.add_widget(btn)
    b.add_widget(BoxLayout(size_hint=size_hint_box))
    return b
