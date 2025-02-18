<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>Bò sát</title>
    <link rel="shortcut icon" href="{{asset('assets3/image/logo.svg')}}">

    <link rel="stylesheet" href="{{ asset('assets3/css/font-awsome.css') }}">
    <link rel="stylesheet" href="{{ asset('assets3/css/menu.css') }}">
    <link rel="stylesheet" href="{{ asset('assets3/css/footer.css') }}">
    <link rel="stylesheet" href="{{ asset('assets3/css/style.css') }}">
    {{-- page --}}
    <link rel="stylesheet" href="{{ asset('assets3/css/page/blog.css') }}">
    <link rel="stylesheet" href="{{ asset('assets3/css/page/product.css') }}">
    <link rel="stylesheet" href="{{ asset('assets3/css/page/contact.css') }}">
    {{-- detail page --}}
    <link rel="stylesheet" href="{{ asset('assets3/css/detail/product.css') }}">
    <link rel="stylesheet" href="{{ asset('assets3/css/detail/blog.css') }}">

    <script src="{{ asset('assets3/js/jquery-2.1.1.min.js') }}"></script>
    {{-- <script src="{{ asset('backend/jquery.js') }}"></script> --}}
    
</head>

