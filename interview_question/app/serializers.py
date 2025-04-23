from rest_framework import serializers
from .models import QuestionModel


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionModel
        fields = ['id', 'topic', 'question_text', 'answer_text', 'pub_date']
        read_only_fields = ['id', 'pub_date']