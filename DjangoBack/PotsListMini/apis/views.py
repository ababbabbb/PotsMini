from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from apis import models

# Create your views here.

# 校验
def exist_account(value):
    if models.Accout.objects.get(accout=value).count != 0:
        return
    return ValidationError

class serializers_accout(serializers.Serializer):
    accout = serializers.CharField(label="账号", validators=[exist_account,])


def right_password(value):
    if models.Accout.objects.get(accout=value.query_params.get('userInfo_accout')).password == value.query_params.get('userInfo_password'):
        return
    return ValidationError

class serializers_password(serializers.Serializer):
    password = serializers.CharField(label="密码", validators=[right_password,])


# 接收
class view_login(APIView):
    """登录"""

    def get(self, request, *args, **kwargs):
        list_projects = []
        accout = request.query_params.get('userInfo_accout')
        ser_accout = serializers_accout(data=accout)
        if ser_accout.is_valid():
            ser_password = serializers_password(data=request)
            if ser_password.is_valid():
                user = models.Accout.objects.get(accout=accout)
                for project in user.Project_set.values("name"):
                    list_projects.append(project)
                return Response(
                    {
                        "status": True,
                        "projects": list_projects
                    }
                )

class view_register(APIView):
    """注册"""

    def post(self, request, *args, **kwargs):
        return Response({"status":True})


class view_form(APIView):
    """表格"""

    def get(self, request, *args, **kwargs):
        ...


# 功能
def abab():
    ...
