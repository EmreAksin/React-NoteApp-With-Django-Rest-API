# notes/serializers.py
from rest_framework import serializers
from .models import Note

# Note modelini kullanarak notların nasıl serileştirileceğini (JSON formatına dönüştürüleceğini) tanımlıyoruz.
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        # Tüm model alanlarını serileştirmek için '__all__' kullanıyoruz.
        fields = '__all__'
