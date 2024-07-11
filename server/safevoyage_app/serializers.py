from django.core import serializers
from rest_framework import serializers
from .models import CustomUser
# from .models import Rating
from .models import TravelAgency, Review


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=("id","first_name","last_name","email","password")
        extra_fields={"password":{"write_only":True}}
    def create(self,validated_data):
        password=validated_data.pop("password")
        user=self.Meta.model(**validated_data)
        user.set_password(password)
        user.save()
        return user

        
class UserLoginSerializer(serializers.Serializer):
    email=serializers.EmailField()
    password=serializers.CharField()
       



class TravelAgencySerializer(serializers.ModelSerializer):
    class Meta:
        model = TravelAgency
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    # user = serializers.StringRelatedField(read_only=True)
    # travel_agency = serializers.StringRelatedField()

    class Meta:
        model = Review
        fields = '__all__'
