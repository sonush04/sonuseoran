from django.db import models

# Create your models here.
class Contacts(models.Model):
    name = models.CharField(max_length=50,blank=True)
    mail = models.EmailField(max_length=150)
    msg = models.TextField()

    def __str__(self):
        return self.name
