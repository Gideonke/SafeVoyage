from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import RegisterSerializer,UserLoginSerializer
from django.http import HttpResponse,Http404
from django.contrib.auth.hashers import check_password
from django.contrib.auth import login
from rest_framework.views import APIView,status,Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser
from rest_framework import viewsets
from .models import TravelAgency, Review
from .serializers import TravelAgencySerializer, ReviewSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

# Create your views here.
class UserRegistrationView(APIView):
    def post(self,request,format=None):
       serializer=RegisterSerializer(data=request.data)
       if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
       else:
           return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
    def post(self,request,format=None):
        serializer=UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            print(serializer.validated_data)
            email=serializer.validated_data.get("email")
            password=serializer.validated_data.get("password")
            print(email)
            print(password)
            try:
                user=CustomUser.objects.get(email=email)
            except CustomUser.DoesNotExist:
                user=None
                
            if user is not None:
                # print(check_password(password,user.password))

                if check_password(password,user.password):
                    refresh=RefreshToken.for_user(user)
                    access_token=refresh.access_token
                    login(request,user)
                    
                    return Response({"refresh_token":str(refresh),"access_token":str(access_token)},status=status.HTTP_201_CREATED)
                else:
                    print("false")
                    return Response({"message":"wrong password"},status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response({"message":"no user with that email address"},status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({"message":"Errors"},status=status.HTTP_400_BAD_REQUEST)


class TravelAgencyView(APIView):

    queryset = TravelAgency.objects.all()
    serializer_class = TravelAgencySerializer
    def post(self,request,format=None):
        serializer=TravelAgencySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
           return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class ReviewView(APIView):
    permission_classes = [IsAuthenticated]

    def post(request):
        if request.method == 'POST':
            data = JSONParser().parse(request)
            serializer = ReviewSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

  



       