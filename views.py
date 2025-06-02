from rest_framework import generics
from .models import Meeting
from .serializers import MeetingSerializer

class MeetingListCreate(generics.ListCreateAPIView):
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer