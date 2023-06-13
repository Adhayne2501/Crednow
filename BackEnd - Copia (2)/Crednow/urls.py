from django.urls import path
from . import views

urlpatterns = [

    path('clientes', view=views.CLienteDetailView.as_view()),
    path('clientes/<pk>/', view=views.ClienteDetailView.as_view()),
    path('cadastro/<pk>/', view=views.ClienteView.as_view()),
    path('transferencia/', view=views.TransferenciasView.as_view()),
    path('conta/', view=views.ContaView.as_view()),
    path('duvidas/', view=views.PerguntaView.as_view()),
    path('cartao/', view=views.CartaoView.as_view()),
    path('emprestimo/', view=views.EmprestimoView.as_view()),
    path('chatbot/', view=views.ChatBotView.as_view()),
    path('securitykey/', view=views.SecurityKeyView.as_view()),
    path('token/', view=views.MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
]