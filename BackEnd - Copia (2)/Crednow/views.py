from decimal import Decimal
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Cliente
from .serializers import *
from rest_framework import status
from .models import Conta
from .models import Transferencias
from .models import Pergunta
from .models import ChatBot
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework import viewsets
from django.http import JsonResponse
from rest_framework.decorators import APIView
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from .serializers import MyTokenObtainPairSerializer
from .serializers import ChatBot;
from rest_framework.permissions import AllowAny

# from utilities.dataValidation import validateEmail

class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = [AllowAny]
    serializer_class = MyTokenObtainPairSerializer

# def realizar_login(request):
#     nome = request.data.get('nome')
#     senha = request.data.get('senha')

#     if nome and senha:
#         try:
#             usuario = Usuario.objects.get(nome=nome)
#             if usuario.senha_errada_contador >= 3:
#                 return Response({'error': 'Acesso bloqueado. Tente novamente mais tarde'})
#             user = authenticate(nome=nome, senha=senha)
#             if user is not None:
#                 login(request, user)
#                 usuario.senha_errada_contador = 0
#                 usuario.save()
#                 return Response({'message': 'Login bem-sucedido'})
#             else:
#                 usuario.senha_errada_contador += 1
#                 usuario.save()
#                 return Response({'error': 'Credenciais inválidas'})
#         except ObjectDoesNotExist:
#             return Response({'error': 'Usuário não encontrado'})
#     else:
#         return Response({'error': 'Credenciais não fornecidas'})
    
class TransferenciasView(ListCreateAPIView):
    queryset = Transferencias.objects.all()
    serializer_class = TransferenciasSerializer

    def get(self, request, *args, **kwargs):
        # print(self.request)
        return super().get(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        dados = request.data
        saldo_Origem = Conta.objects.get(pk=dados['conta_origem_id'])
        print(saldo_Origem)
        saldo_destino = Conta.objects.get(pk=dados['conta_destino_id'])
        print(saldo_destino)
        # conta_origem_id = request.data.get('conta_origem_id')
        # conta_destino_id = request.data.get('conta_destino_id')
        # valor_transferencia = request.data.get('valor_transferencia')                                                                                                                                                        
        if saldo_Origem.saldo < Decimal(dados['valor_transferencia']):
            return Response({'erro': 'Saldo insuficiente'}, status=status.HTTP_400_BAD_REQUEST)
        
        saldo_Origem.saldo -= Decimal(dados['valor_transferencia'])
        saldo_destino.saldo += Decimal(dados['valor_transferencia'])

        saldo_Origem.save()
        saldo_destino.save()
        
        return super().post(request, *args, **kwargs)
        # return Response({'mensagem': 'Tranferência realizada com sucesso'}, status=status.HTTP_200_OK)

class ClienteView(ListCreateAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    def perfil(request):
        perfi = {
            'nome': '',
            'cpf': '',
            'foto': '',
            'senha': ''
        }

        return JsonResponse(perfi)
class ClienteDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class ContaView(ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer

    # def list(self, request, *args, **kwargs):
    #     token = request.Meta.get('HTTP_AUTHORIZATION').split('')[1]
    #     print(token)
    #     dados = AccessToken(token)
    #     usuario = dados['user_id']
    #     print(usuario)
    #     teste = Conta.objects.filter(pk=usuario)
                                                                                                                                                                                                                                                                                                                                                                                                               
    #     # criar = Conta.objects.create(saldo = dados['saldo'], agencia = dados['agencia'], conta=dados['conta'], cliente = dados['cliente'])
    #     return super().list(request, *args, **kwargs)
    
    # def create(self, request, *args, **kwargs):
    #     return super().create(request, *args, **kwargs)


class CLienteDetailView(APIView):
    # permission_classes = [IsAuthenticated]
    def get(self, request):
        try:
            print(self.request.data)
            cliente = Cliente.objects.get(CPF=True)
        except Cliente.DoesNotExist:
            return Response(status=404)

        return Response({
            'nome': cliente.nome,
            'CPF': cliente.CPF,
            'foto': cliente.foto,
        })
    
    
class PerguntaView(ListCreateAPIView):
    queryset = Pergunta.objects.all()
    serializer_class = PerguntaSerializer

    def perguntas(request):
        perguntas = Pergunta.objects.all()
        return JsonResponse(list(perguntas), safe=False)

def aprovar_cartao(request):
        if request.method == 'POST':
            nome = request.data.get('nome')
            CPF = request.data.get('CPF')
            renda = request.data.get('renda')

            if int(renda) >= 2000:
                return True
            else:
                return False
            
class CartaoView(ListCreateAPIView):
    queryset = Cartao.objects.all()
    serializer_class = CartaoSerializer

    def solicitacao_cartao(request):
        if request.method == 'POST':
            nome = request.POST.get('nome')
            CPF = request.POST.get('CPF')
            renda = request.POST.get('limite')

            return JsonResponse({'message': 'Solicitação de Cartão de Crédito enviada com sucesso!'})
        
        else:
            return JsonResponse({'error': 'Método não permitido'}, status=405)
    
    def create(self, request, *args, **kwargs):
        avaliar_score = aprovar_cartao(request)
        if avaliar_score:
            return super().create(request, *args, **kwargs)
        else:
            return Response({'error': 'Sua renda mensal é insuficiente'}, status=400)

def aprovar_emprestimo(request):
        if request.method == 'POST':
            nome = request.data.get('nome')
            CPF = request.data.get('CPF')
            valor = request.data.get('valor')

            if int(valor) >= 2000:
                return True
            else:
                return False

class EmprestimoView(ListCreateAPIView):
    queryset = Emprestimo.objects.all()
    serializer_class = EmprestimoSerializer

    def solicitacao_emprestimo(request):
    
        if request.method == 'POST':
            nome = request.POST.get('nome')
            CPF = request.POST.get('CPF')
            valor = request.POST.get('valor')
    
            return JsonResponse({'message': 'Solicitação de Empréstimo enviada com sucesso!'})
        else:
            return JsonResponse({'error': 'Método não permitido'}, status=405)
        
    def create(self, request, *args, **kwargs):
            avaliar_score = aprovar_emprestimo(request)
            if avaliar_score:
                return super().create(request, *args, **kwargs)
            else:
                return Response({'error': 'Sua renda mensal é insuficiente'}, status=400)
            
class ChatBotView(ListCreateAPIView):
    queryset = ChatBot.objects.all()
    serializer_class = ChatBotSerializer

    def chat_bot(request):
        if request.method == 'POST':
            pergunta = request.data.get('pergunta')

            try:
                chatbot = ChatBot.objects.get(pergunta=pergunta)
                serializer = ChatBotSerializer(chatbot)
                return Response(serializer.data)
            except ChatBot.DoesNotExist:
                return Response({'pergunta': 'Desculpe, não tenho uma resposta para essa pergunta.'})
                
class SecurityKeyView(ListCreateAPIView):
    queryset = SecurityKey.objects.all()
    serializer_class = SecurityKeySerializer

    def security_key(request):
        if request.method == 'POST':
            serializer = SecurityKeySerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response({'success': True})
            else:
                return Response(serializer.errors, status=400)