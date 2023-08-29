from django.db import models

# Create your models here.    
class Donor(models.Model):
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    blood_type = models.CharField(max_length=50)
    address = models.TextField(max_length=50)
    gender=models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.CharField(max_length=50)
