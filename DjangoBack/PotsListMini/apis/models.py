from django.db import models

# Create your models here.
# 数据库操作

class Carton(models.Model):
    """卡件"""

    name = models.CharField()
    wire = models.CharField()
    type_cabinet = models.CharField()
    row = models.CharField()
    pin_plus = models.CharField()
    pin_minus = models.CharField()
    pin_common = models.CharField()
    pin_add = models.CharField()


class Accout(models.Model):
    """"账户"""

    accout = models.CharField(unique=True)
    password = models.CharField()


class Project(models.Model):
    """项目"""

    name = models.CharField(unique=True)
    user = models.ForeignKey("Accout", on_delete=models.CASCADE)
    type_cabinet = models.CharField()


class Form(models.Model):
    """表"""

    name_carton = models.ForeignKey("Carton", on_delete=models.SET_NULL)
    index_project = models.ForeignKey("Project", on_delete=models.CASCADE)
    index_cel = models.CharField()
    index_brc = models.CharField()
    index_sl = models.CharField()
    type_cabinet = models.CharField()