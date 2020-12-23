from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from .forms import ContactsForm

class HomePageView(TemplateView):
    template_name = "homepage.html"

class PathFinder(TemplateView):
    template_name = "pathfinder.html"

class TrianglePlay(TemplateView):
    template_name = "triangles.html"

class TicTacToe(TemplateView):
    template_name = "tictaktoe.html"

def contact(request):

    myform = ContactsForm(request.POST)
    if myform.is_valid():
        myform.save()
        redirect('home')

    return render(request,'homepage.html',{'form':myform})
