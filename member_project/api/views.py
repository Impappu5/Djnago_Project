from django.shortcuts import render
from rest_framework import viewsets
from .models import Member

# from .models import User
from .serializers import MemberSerializer
from rest_framework.decorators import api_view
from .serializers import ContactSerializer

# from django.contrib.auth.models import User
from .models import User


from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated


from rest_framework.permissions import AllowAny


###########Signup API #########
class RegisterUser(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "User registered successfully"},
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginAPI(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)

        if not user:
            return Response(
                {"error": "Invalid email or password"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            }
        )


class UserProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
        "id": user.id, 
        "username": user.username,
        "email": user.email})


class LogoutAPI(APIView):
    permission_classes = [IsAuthenticated]
    

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Logged out successfully"})
        except:
            return Response({"error": "Invalid token"}, status=400)


# Create your views here.
###############Get value 1st day #########
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer


################Contact Views#######
@api_view(["POST"])
def contact_views(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Feedback successfully"}, status=status.HTTP_200_OK)

    print(serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
