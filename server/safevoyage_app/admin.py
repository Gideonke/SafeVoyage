from django.contrib import admin
from .models import CustomUser,Item,Review,TravelAgency

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Item)
admin.site.register(Review)
admin.site.register(TravelAgency)


