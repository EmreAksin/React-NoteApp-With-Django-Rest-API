# notes/urls.py
from django.urls import path
from .views import NoteListCreateView

urlpatterns = [
    # 'notes/' URL'sine bir GET isteği geldiğinde, NoteListCreateView görünümünü kullanarak tüm notları listeleyeceğiz ve yeni notlar oluşturacağız.
    path('notes/', NoteListCreateView.as_view(), name='note-list-create'),
]
