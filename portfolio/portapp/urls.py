from django.contrib import admin
from django.urls import path
from portapp import views

urlpatterns = [

    path('pathfinder',views.PathFinder.as_view(),name='pathfinder'),
    path('trianglepaint',views.TrianglePlay.as_view(),name='triangle'),
    path('tictactoe',views.TicTacToe.as_view(),name='tictactoe'),
    path('', views.contact,name='home'),
]
