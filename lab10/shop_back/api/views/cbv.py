"""
Level 3: Class-Based Views (CBV)
Using APIView from DRF
"""
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ..models import Product, Category
from ..serializers import ProductSerializer, CategorySerializer


class ProductListAPIView(APIView):
    """
    GET: List all products
    POST: Create a new product
    """

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailAPIView(APIView):
    """
    GET: Retrieve a specific product
    PUT: Update a product
    DELETE: Delete a product
    """

    def get_object(self, product_id):
        """Helper method to get product or raise 404"""
        try:
            return Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return None

    def get(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response(
                {'detail': 'Product not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response(
                {'detail': 'Product not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response(
                {'detail': 'Product not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryListAPIView(APIView):
    """
    GET: List all categories
    POST: Create a new category
    """

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryDetailAPIView(APIView):
    """
    GET: Retrieve a specific category
    PUT: Update a category
    DELETE: Delete a category
    """

    def get_object(self, category_id):
        """Helper method to get category or raise 404"""
        try:
            return Category.objects.get(pk=category_id)
        except Category.DoesNotExist:
            return None

    def get(self, request, category_id):
        category = self.get_object(category_id)
        if not category:
            return Response(
                {'detail': 'Category not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, category_id):
        category = self.get_object(category_id)
        if not category:
            return Response(
                {'detail': 'Category not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, category_id):
        category = self.get_object(category_id)
        if not category:
            return Response(
                {'detail': 'Category not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class CategoryProductsAPIView(APIView):
    """
    GET: List all products in a category
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
