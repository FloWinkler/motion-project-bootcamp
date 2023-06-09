from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from django.http import JsonResponse
from rest_framework.generics import ListCreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny

from app.registration.models import RegistrationProfile
from app.registration.serializers import RegitrationSerializer

User = get_user_model()


class RegistrationView(ListCreateAPIView):
    serializer_class = RegitrationSerializer
    queryset = RegistrationProfile.objects.all()
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data
        if User.objects.filter(email=data['email']).exists():
            return JsonResponse({'Error': 'Email already exists'})
        else:
            user = User.objects.create(**data)
            user.save()
            validation_code = RegistrationProfile.objects.filter(user_id=user.id)

            send_mail(
                'Registration Motion',
                f'{validation_code}',
                'Batch23Team1@gmail.com',
                [f'{data["email"]}'],
                fail_silently=False,
            )
            return JsonResponse({'Email was sent to ': f'{data["email"]}'}, status=201)


class RegistrationValidationView(UpdateAPIView):
    serializer_class = RegitrationSerializer
    permission_classes = [AllowAny]
    queryset = User.objects.all()

    def patch(self, request, *args, **kwargs):
        email_request = request.data['email']
        instance = RegistrationProfile.objects.get(user__email=email_request)
        user = User.objects.get(email=email_request)
        if instance.validation_code == request.data['code']:
            request.data['password'] = make_password(request.data['password'])
            serializer = self.get_serializer(user, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return JsonResponse({'Success': "User Added"}, status=201)
        else:
            return JsonResponse({'Error': "invalid information"}, status=401)
