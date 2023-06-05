from django.urls import path

# from users.views import ListUsers, LoggedInUsers

from app.users.views import ListUsers, LoggedInUsers, RetrieveUserView

urlpatterns = [
    path('', ListUsers.as_view(), name='list-users'),
    path('<int:id>/', RetrieveUserView.as_view(), name='user'),
    path('me/', LoggedInUsers.as_view(), name='logged in users'),

]
