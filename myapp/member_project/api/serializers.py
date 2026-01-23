from rest_framework import serializers
from .models import Member
from .models import User
from .models import ContactDetails


# from django.contrib.auth import get_user_model
# User = get_user_model()

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields='__all__'


######Register Serializer

class UserSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

   

   
        
        
   
#######  Contact Details ####
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactDetails
        fields = '__all__'
   
    