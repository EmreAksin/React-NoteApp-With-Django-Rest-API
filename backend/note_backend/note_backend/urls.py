# film_listesi_projesi/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from notes.views import NoteListCreateView

# API endpointlerini otomatik olarak yönetmek için Django REST framework tarafından sağlanan bir router kullanıyoruz.
router = DefaultRouter()
router.register(r'notes', NoteListCreateView)

urlpatterns = [
    # API endpointlerimizi 'api/' altında bulunan URL'lere yönlendiriyoruz.
    path('api/', include(router.urls)),
]
