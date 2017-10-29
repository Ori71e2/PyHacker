# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

import sys 
from module_install import install
# Create your views here.

def hello(request):
    modules = ['web.py']
    return install(modules)
#   return HttpResponse('Hello World')