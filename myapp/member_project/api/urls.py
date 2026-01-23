from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import MemberViewSet
from .views import register_user
from .views import contact_views 
from .views import LoginAPI
# from .views import login_user 



router = DefaultRouter()
router.register(r'members',MemberViewSet)


urlpatterns = [
    path('api/',include(router.urls)),
    # path('register/',register_user),
    path('contact/',contact_views),
    # path('login/',LoginAPI)
     path('login/', LoginAPI.as_view()),       # ✅ FIX
    path('register/', register_user.as_view())
   

]




