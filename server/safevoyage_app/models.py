from django.contrib.auth.models import BaseUserManager
from django.contrib.auth.models import AbstractBaseUser
from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class CustomUserManager(BaseUserManager): 
    def create_user(self,email,password=None,**extra_fields):
        if not email:
            raise ValueError("Email required")
        email=self.normalize_email(email)
        user=self.model(email=email,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user()  
    def create_superUser(self,email,password=None,**extra_fields):
        extra_fields.setdefault("is_staff",True)
        if extra_fields.get("is_staff") is not True:
            raise ValueError("superuser must have is.staff set")
        if extra_fields.get("is_superuser")is not True:
            raise ValueError("staff must have is_staff set")
        return create_user(email,password,**extra_fields)
     
    




class CustomUser(AbstractBaseUser):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email=models.EmailField(max_length=50,unique=True)
    is_active=models.BooleanField(default=True)

    objects=CustomUserManager()
    
    USERNAME_FIELD="email"
    REQUIRED_FIELDS=["first_name" ,"last_name"]


from django.db import models
from django.contrib.auth.models import User

class Item(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)



class TravelAgency(models.Model):
    agency_name = models.CharField(max_length=255)
    description = models.TextField()
    address = models.CharField(max_length=255)
    email = models.EmailField()
    registrationNumber=models.IntegerField()
    country_of_registration=models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    travel_agency = models.ForeignKey(TravelAgency, on_delete=models.CASCADE, related_name='reviews')
    rating = models.IntegerField(null=True)
    comment = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Review by {self.user.username} for {self.travel_agency.name}'




        
