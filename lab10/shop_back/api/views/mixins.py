"""
Level 4: Mixins
Using DRF's built-in mixin classes with GenericAPIView
"""
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin
)
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..models import Product, Category
from ..serializers import ProductSerializer, CategorySerializer


class ProductListAPIView(ListModelMixin, CreateModelMixin, GenericAPIView):
    """
    GET: List all products (via ListModelMixin)
    POST: Create a new product (via CreateModelMixin)
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProductDetailAPIView(RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericAPIView):
    """
    GET: Retrieve a specific product (via RetrieveModelMixin)
    PUT: Update a product (via UpdateModelMixin)
    DELETE: Delete a product (via DestroyModelMixin)
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CategoryListAPIView(ListModelMixin, CreateModelMixin, GenericAPIView):
    """
    GET: List all categories (via ListModelMixin)
    POST: Create a new category (via CreateModelMixin)
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CategoryDetailAPIView(RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericAPIView):
    """
    GET: Retrieve a specific category (via RetrieveModelMixin)
    PUT: Update a category (via UpdateModelMixin)
    DELETE: Delete a category (via DestroyModelMixin)
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CategoryProductsAPIView(APIView):
    """
    GET: List all products in a category
    Custom view - not easily replaceable with mixins due to filter logic
    """

    def get_category(self, category_id):
        """Helper method to get category or raise 404"""
        try:
            return Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            return None

    def get(self, request, category_id):
        category = self.get_category(category_id)
        if not category:
            return Response(
                {'detail': 'Category not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
