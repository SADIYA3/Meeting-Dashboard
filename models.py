from django.db import models

class Meeting(models.Model):
    agenda = models.CharField(max_length=255)
    status = models.CharField(max_length=20)
    date = models.DateField()
    start_time = models.TimeField()
    meeting_url = models.URLField()

    def __str__(self):
        return self.agenda