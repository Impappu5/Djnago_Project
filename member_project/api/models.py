from django.db import models
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.
class Member(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    status=models.CharField(max_length=100)


    def __str__(self):
        return self.name
    
##############Create Signup Models
class User(models.Model):
    username = models.CharField(max_length=100)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=255)

    def __str__(self):
        return self.email


    # def __str__(self):
    #         return self.email
    
#########Contack Details 
class ContactDetails(models.Model):
     fname = models.CharField(max_length=100)
     lname = models.CharField(max_length=100)
     email =models.EmailField(unique=True)
     phone = models.CharField(max_length=50)
     feedback = models.CharField(max_length=500)

     def __str__(self):
          return self.phone
         
        

        
        