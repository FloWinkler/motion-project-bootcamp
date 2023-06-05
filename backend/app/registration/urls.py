from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView, TokenObtainPairView

from app.registration.views import RegistrationView, RegistrationValidationView

app_name = 'registration'

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='retrieve-refreshed-token'),
    path('token/verify/', TokenVerifyView.as_view(), name='verify-token'),

    path("registration/", RegistrationView.as_view()),
    path("registration/validation/", RegistrationValidationView.as_view()),
]
