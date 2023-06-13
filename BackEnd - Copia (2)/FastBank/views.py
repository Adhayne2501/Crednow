from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def saldo_view(request):
    numero_conta = 123456789
    nome_proprietario = 'Adhayne Daphine'
    saldo = 1000.00 # TODO: Implementar a lógica para buscar o saldo do usuário no banco de dados
    return Response({'saldo': saldo, 'número da conta': numero_conta, 'nome do proprietário': nome_proprietario})
