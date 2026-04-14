"""
Level 5: Generic Views
Using DRF's high-level generic view classes - minimal code required!
"""
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..models import Product, Category
from ..serializers import ProductSerializer, CategorySerializer


class ProductListAPIView(generics.ListCreateAPIView):
    """
    GET: List all products
    POST: Create a new product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve a specific product
    PUT: Update a product
    DELETE: Delete a product
    """
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


class CategoryListAPIView(generics.ListCreateAPIView):
    """
    GET: List all categories
    POST: Create a new category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve a specific category
    PUT: Update a category
    DELETE: Delete a category
    """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    """
    GET: List all products in a category
    Endpoint: /categories/<id>/products/
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
