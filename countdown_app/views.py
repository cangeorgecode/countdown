from django.shortcuts import render

def index(request):
    return render(request, 'countdown_app/index.html', {})
