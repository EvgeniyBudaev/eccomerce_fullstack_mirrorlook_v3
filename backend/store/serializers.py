from rest_framework import serializers

from .models import Mirror, Console


class MirrorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mirror
        fields = '__all__'


class ConsoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Console
        fields = '__all__'
