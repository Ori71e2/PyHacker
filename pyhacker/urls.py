"""pyhacker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView  

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', include('backend.urls')),
    url(r'^apps_test/', include('apps_test.urls')),
    url(r'^detect/', include('detect.urls')),
    url(r'^namp/', include('namp.urls')),
    url(r'^scan/', include('scan.urls')),
    url(r'^vul_binary/', include('vul_binary.urls')),
    url(r'^vul_cms/', include('vul_cms.urls')),
    url(r'^vul_framework/', include('vul_framework.urls')),
    url(r'^socks_proxy/', include('socks_proxy.urls')),
    url(r'^ip_proxy_poll/', include('ip_proxy_poll.urls')),
]
