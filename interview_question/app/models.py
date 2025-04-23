from django.db import models

class QuestionModel(models.Model):
    id = models.AutoField(primary_key=True)
    topic = models.CharField(max_length=100)
    question_text = models.CharField(max_length=2000)
    answer_text = models.CharField(max_length=2000)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.question_text
