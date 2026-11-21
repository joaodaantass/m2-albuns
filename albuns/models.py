from django.db import models

# Create your models here.

class Album(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.CharField(max_length=100)
    ano = models.CharField(max_length=4)
    avaliacao = models.FloatField() 

    def __str__(self):
        return self.titulo 

    