from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse
from rest_framework import viewsets
from rest_framework import permissions

from .serializers import RestaurantSerializer, ItemSerializer, ItemCategorySerializer
from .models import Restaurant, ItemCategory, Item


def index(request: HttpRequest) -> HttpResponse:
    restaurants = Restaurant.objects.all()
    context = {'restaurants': restaurants}
    return render(request=request, template_name='available_restaurants.html', context=context)

def show_tables(restaurant_id: int) -> HttpResponse:
    """Mostra todas as mesas de um restaurante.

    Filtra o restaurante pelo ID, mostrando as mesas, caso existam,
    e seus respectivos IDs.

    Parameters
    ----------
    restaurant_id : int
        O ID do restaurante.

    Returns
    -------
    HttpResponse
        A respota com base na requisição feita.
    """
    return redirect('tables', restaurant_id=restaurant_id)


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [permissions.AllowAny]


class ItemCategoryViewSet(viewsets.ModelViewSet):
    queryset = ItemCategory.objects.all()
    serializer_class = ItemCategorySerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        restaurant = self.request.query_params.get('restaurant', 0)
        try:
            restaurant = int(restaurant)
        except Exception as e:
            raise(e)

        if restaurant:
            self.queryset = self.queryset.filter(restaurant=restaurant)
        return self.queryset


class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        restaurant = self.request.query_params.get('restaurant', 0)
        try:
            restaurant = int(restaurant)
        except Exception as e:
            raise(e)

        if restaurant:
            self.queryset = self.queryset.filter(restaurant=restaurant)

        return self.queryset
