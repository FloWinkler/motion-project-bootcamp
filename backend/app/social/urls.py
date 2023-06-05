from django.urls import path, include
from app.social.views.followers import ListFollowers, ListFollowing, FollowUnfollowUser
from app.social.views.posts import ListCreatePosts, RetrieveUpdateDestroyPost, ListPostsUser, \
    ListPostsFollowees, ListLikes, CreateLike

post_patterns = [
    path('', ListCreatePosts.as_view(), name='list-create-posts'),
    path('<int:post_id>/', RetrieveUpdateDestroyPost.as_view(), name='retrieve-update-destroy-post'),
    path('user/<int:user_id>/', ListPostsUser.as_view(), name='list-posts-user'),
    path("following/", ListPostsFollowees.as_view(), name="list-posts-followees"),
    path("likes/", ListLikes.as_view(), name="list-liked-posts"),
    path("toggle-like/<int:post_id>/", CreateLike.as_view(), name="toggle-like")

]

follow_patterns = [
    path('followers/', ListFollowers.as_view(), name='list-followers'),
    path('following/', ListFollowing.as_view(), name='list-following'),
    path('toggle-follow/<int:user_id>/', FollowUnfollowUser.as_view(), name='follow-unfollow-user'),
]

urlpatterns = [
    path('posts/', include(post_patterns)),
    path('followers/', include(follow_patterns)),
]
