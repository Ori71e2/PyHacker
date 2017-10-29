# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
import imp
import os
# Create your views here.


def install():
    '''
    modles = [requests, chardet, web.py, gevent, psutil]
    response = ['str':'', ]
    for each in modules:
        try:
            imp.find_module(each)
        except ImportError:
            if os.system(each) == 0:
                response[str] += ',' + each
    '''
    return HttpResponse("Success!")