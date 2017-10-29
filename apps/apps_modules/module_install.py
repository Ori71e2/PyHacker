# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
import imp
import os
# Create your views here.


def install(modules):
    '''
    modules = [requests, chardet, web.py, gevent, psutil]
    '''
    response = ''
    for each in modules:
        try:
            imp.find_module(each)
        except ImportError:
            if os.system('pip install ' + each)>>8 != 0:
                response += each + ' module install fail!' + '<br>'
    if response == '':
        response = "Install Success"
    else:
        response += "Install Failed"

    return HttpResponse(response)