from django.db import migrations


DEFAULT_CATEGORIES = [
    "Electronics",
    "Clothing",
    "Books",
    "Home and Kitchen",
    "Sports",
    "Beauty",
    "Toys",
]


def seed_categories(apps, schema_editor):
    Category = apps.get_model("api", "Category")
    for category_name in DEFAULT_CATEGORIES:
        Category.objects.get_or_create(name=category_name)


def unseed_categories(apps, schema_editor):
    Category = apps.get_model("api", "Category")
    Category.objects.filter(name__in=DEFAULT_CATEGORIES).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(seed_categories, unseed_categories),
    ]
