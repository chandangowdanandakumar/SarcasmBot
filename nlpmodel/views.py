from django.shortcuts import render
from django.http.response import HttpResponseNotFound, JsonResponse
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def SarcasmBotReply(request):
    return JsonResponse({'result':'Hello World'})
