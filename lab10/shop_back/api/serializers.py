from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import Product, Category


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = PrimaryKeyRelatedField(
        queryset=Category.objects.all(),
        source='category',
        write_only=True,
    )

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'description', 'count', 'is_active', 'category', 'category_id']
