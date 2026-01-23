from django.shortcuts import render
from rest_framework import viewsets
from .models import Member
# from .models import User
from .serializers import MemberSerializer
from rest_framework.decorators import api_view
from .serializers import ContactSerializer
from django.contrib.auth.models import User




from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer



###########Signup API #########
class register_user(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User registered successfully"}, status=201)
        return Response(serializer.errors, status=400)


class LoginAPI(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        user = User.objects.filter(email=email).first()

        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh)
            })

        return Response({'error': 'Invalid credentials'}, status=401)


# Create your views here.
###############Get value 1st day #########
class MemberViewSet(viewsets.ModelViewSet):
    queryset=Member.objects.all()
    serializer_class=MemberSerializer


################Contact Views#######
@api_view(['POST'])
def contact_views(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Feedback successfully"}, status=status.HTTP_200_OK)
    

    print(serializer.errors)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)



