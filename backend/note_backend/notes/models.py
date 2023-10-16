from django.db import models

# Not adlı Django modeli oluşturuyoruz.
class Note(models.Model):
    # Notun başlığını temsil eden bir karakter alanıdır.
    title = models.CharField(max_length=100)
    
    # Notun içeriğini temsil eden bir metin alanıdır.
    text = models.TextField()
    
    # Notun oluşturulma tarihini otomatik olarak kaydeden bir tarih alanıdır.
    created_at = models.DateTimeField(auto_now_add=True)

    # Modeli temsil eden metni belirtiyoruz (not başlığı).
    def __str__(self):
        return self.title
