from rest_framework import serializers
from .models import *

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import exceptions

# class NomeSerializer(serializers.ModelSerializer):
#     class Meta:
#        model = Usuario
#        fields = '__all__'
class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
       model = Cliente
       fields = '__all__'
class TransferenciasSerializer(serializers.ModelSerializer):
    class Meta:
       model = Transferencias
       fields = '__all__'
class ContaSerializer(serializers.ModelSerializer):
    class Meta:
       model = Conta
       fields = '__all__'
class PerguntaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pergunta
        fields = '__all__'
class CartaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cartao
        fields = 'nome', 'CPF', 'renda'
class EmprestimoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Emprestimo
        fields = 'nome', 'CPF', 'valor'


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        print("caiu no get token")
        print(user)
        token = super().get_token(user)

        token['user_name'] = 'user.username'
        token['email'] = user.email

        return token

    def validate(self, attrs):
        print("caiu no validate")
        userName = attrs.get("email")
        password = attrs.get("password")

        # print("attrs values: ", attrs)

        # if validateEmail(userName) is False:
        #     try:
        #         user = Users.objects.get(user_name=userName)
        #         if user.check_password(password):
        #             attrs['email'] = user.email
         
        #         """
        #          In my case, I used the Email address as the default Username 
        #          field in my custom User model. so that I get the user email 
        #          from the Users model and set it to the attrs field. You can 
        #          be modified as your setting and your requirement 
        #         """

        #     except Users.DoesNotExist:
        #         raise exceptions.AuthenticationFailed(
        #             'No such user with provided credentials'.title()) 
        print(f'Resposta')
        #como descobrir se o usuário e senha estão incorretos?
        data = super().validate(attrs)
        
        return data
    
class ChatBotSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatBot
        fields = ('pergunta', 'resposta')

class SecurityKeySerializer(serializers.ModelSerializer):
    class Meta:
        model = SecurityKey
        fields = '__all__'
    
