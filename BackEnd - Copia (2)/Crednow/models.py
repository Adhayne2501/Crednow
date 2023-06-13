from django.db import models
from django.contrib.auth.models import User

from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _


class ClienteManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """
    def create_user(self, CPF, password, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        user = self.model(CPF=CPF, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, CPF, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(CPF, password, **extra_fields)
    

class Cliente(AbstractUser):
    username = None
    # email = models.EmailField(_("email address"), unique=True)
    nome = models.CharField(max_length=100)
    CPF = models.CharField(max_length=11, unique=True)
    foto = models.ImageField(blank=True, null=True)
    
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = "CPF"
    REQUIRED_FIELDS = ['nome','foto']


    objects = ClienteManager()

    def __str__(self):
        return self.CPF
# class Usuario(models.Model):
#     nome = models.CharField(max_length=100)
#     senha = models.CharField(max_length=100)

# class Cliente(models.Model):
#     nome = models.CharField(max_length=100)
#     CPF = models.CharField(max_length=11, unique=True)
#     senha = models.CharField(max_length=100)
#     foto = models.ImageField()

class Conta(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    saldo = models.DecimalField(max_digits=10, decimal_places=2)
    agencia = models.IntegerField()
    conta = models.IntegerField()
    
class Transferencias(models.Model):
    conta_origem_id = models.CharField(max_length=10)
    conta_destino_id = models.CharField(max_length=10)
    valor_transferencia = models.CharField(max_length=10)
    data = models.DateField(auto_now=True)
    descricao = models.CharField(max_length=100)

class Pergunta(models.Model):
    titulo = models.CharField(max_length=100)
    resposta = models.TextField()
    
class Cartao(models.Model):
    nome = models.CharField(max_length=100)
    CPF = models.CharField(max_length=11, unique=True)
    renda = models.CharField(max_length=100)

class Emprestimo(models.Model):
    nome = models.CharField(max_length=100)
    CPF = models.CharField(max_length=11, unique=True)
    valor = models.CharField(max_length=100)

class ChatBot(models.Model):
    pergunta = models.CharField(max_length=255)
    resposta = models.CharField(max_length=255)

    def __str__(self):
        return self.resposta
    
class SecurityKey(models.Model):
    key = models.CharField(max_length=100)
