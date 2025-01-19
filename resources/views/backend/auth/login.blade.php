<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
    <link rel="stylesheet" href="{{asset('backend/auth/login.css')}}">
</head>
<body>
    <section class="all-login">
        <div class="img-pet">
        </div>
        <div class="form-login">
            <form action="{{url('admin/login')}}" method="POST">
                @csrf
                <h1>Đăng nhập</h1>

                <input type="text" name="email" autocomplete="false" spellcheck="false" placeholder="Tên đăng nhập..." >

                <input type="password" name="password" autocomplete="false" spellcheck="false" placeholder="Mật khẩu...">

                <input type="submit" name="login" value="Đăng nhập">
            </form>
        </div>
    </section>
</body>
</html>

