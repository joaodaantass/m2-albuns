import json 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Album

# Create your views here.

@csrf_exempt
def api_albuns(request):
    if request.method == "POST":
        try:
            dados = json.loads(request.body)
            titulo = dados["titulo"]
            autor = dados["autor"]
            ano = int(dados["ano"])
            avaliacao = float(dados["avaliacao"])
        except (json.JSONDecodeError, KeyError, ValueError, TypeError) as e:
            print("ERRO NA VALIDAÇÃO:", repr(e))
            return JsonResponse(
                {"erro": "Dados inválidos: preencha todos os campos corretamente."},
                status=400,
    )

        if avaliacao < 0 or avaliacao > 10:
            return JsonResponse(
                {"erro": "A nota deve estar entre 0 e 10."},
                status=400,)

        if ano < 1900 or ano > 2026:
            return JsonResponse(
                {"erro": "O ano deve estar entre 1900 e 2026."},
                status=400,)

        album = Album.objects.create(
            titulo=titulo,
            autor=autor,
            ano=ano,
            avaliacao=avaliacao,)
        
        return JsonResponse({"id": album.id}, status=201)

    albuns = list(Album.objects.values())
    return JsonResponse(albuns, safe=False) 

def resumo(request):
    albuns = Album.objects.all()
    total = len(albuns)

    if total == 0:
        return JsonResponse({"total": 0, "media_avaliacao": 0, "melhor": None})

    soma = 0
    melhor = albuns[0]
    for album in albuns:
        soma += album.avaliacao
        if album.avaliacao > melhor.avaliacao:
            melhor = album

    media = round(soma / total, 2)

    return JsonResponse({
        "total": total,
        "media_avaliacao": media,
        "melhor": melhor.titulo,
    })