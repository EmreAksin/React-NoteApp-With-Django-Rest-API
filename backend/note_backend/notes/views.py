from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer

# ModelViewSet, Note modelini kullanarak CRUD (oluştur, oku, güncelle, sil) işlemlerini kolayca yönetmemizi sağlar.
class NoteListCreateView(viewsets.ModelViewSet):
    # Tüm mevcut Not nesnelerini çekiyoruz.
    queryset = Note.objects.all()
    
    # Serializer sınıfını belirtiyoruz. Serializer, modeli JSON gibi dışa aktarmamıza ve içe aktarmamıza yardımcı olur.
    serializer_class = NoteSerializer
