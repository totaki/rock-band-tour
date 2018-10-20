from initial import groups
from kivy.app import App
from kivy.core.window import Window
from kivy.uix.widget import Widget
from kivy.uix.floatlayout import FloatLayout
from kivy.uix.boxlayout import BoxLayout
from kivy.factory import Factory
from kivy.storage.jsonstore import JsonStore
from kivy.uix.screenmanager import Screen
from kivy.uix.label import Label
from kivy.uix.button import Button
from kivy.properties import NumericProperty, ObjectProperty, StringProperty
from kivy.uix.gridlayout import GridLayout
from buttons import main_button
from kivy.metrics import dp
from kivy.graphics import Rectangle, Color, Line

_store = JsonStore('data.json')


class GroupLayout(BoxLayout):
    group_index = NumericProperty(0)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.add_widget(Label(text=groups[self.group_index].name))
        with self.canvas:
            Color(1, 0, 0, 1)
            self.line = Line(width=1)
            self.line.rectangle = (self.x, self.y, self.width, self.height)


class ChoiceGroupScreen(Screen):

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        main = BoxLayout(orientation='vertical')
        # Header
        main.add_widget(Label(text='Выберите группу', size_hint=(1, .2), bold=True, font_size=dp(24)))

        # Groups
        group_box = BoxLayout(orientation='horizontal')
        group_box.add_widget(GroupLayout(group_index=0))
        group_box.add_widget(GroupLayout(group_index=1))

        # Main control button
        main.add_widget(group_box)
        main.add_widget(main_button(
            text='START',
            size_hint=(.5, .3),
        ))
        self.add_widget(main)


class GameApp(App):

    def build(self):
        state = _store.get('sys:state')
        if state == 'choice_group':
            return ChoiceGroupScreen()


Factory.register('GroupLayout', cls=GroupLayout)

GameApp().run()
