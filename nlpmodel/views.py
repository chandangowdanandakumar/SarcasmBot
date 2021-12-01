from django.shortcuts import render
from django.http.response import HttpResponseNotFound, JsonResponse
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from nlp_2 import *
import joblib

@csrf_exempt
def SarcasmBotReply(request):
    model = joblib.load('./chatbotModel.sav')
    # botreply = model.userinput('Hi')
    # print('bot', botreply)
    return JsonResponse({'result':'Hello World'})
