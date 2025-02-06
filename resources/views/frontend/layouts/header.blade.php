<div class="header-main ">
    <header>
        <div class="bar-header">
            <div class="head-left">
                <img src="{{asset('assets3/image/menu.svg')}}" alt="menu" />
            </div>
            <div class="head-center">
                <picture>
                    <source class="mobile" media="(max-width:1199px)" srcset="{{asset('assets3/image/logo.svg')}}">
                    <source class="desktop" media="(min-width:1200px)" srcset="{{asset('assets3/image/logo.svg')}}">
                    <img src="{{asset('assets3/image/logo.svg')}}" alt="logo" />
                </picture>
            </div>
            <div class="head-search">
                <input type="input" name="search" placeholder="Tìm kiếm..." />
                <img class="btn-search" src="{{asset('assets3/image/search.svg')}}" alt="search" />
            </div>
            <div class="head-right">
                <ul>
                    <li>
                        <div><img src="{{asset('assets3/image/facebook.svg')}}" alt="facebook"></div>
                        <div class="fb-link">
                            <p>Facebook</p>
                            <p class="trademark">Hi.Gecko</p>
                        </div>
                    </li>
                    <div class="line-crack"></div>
                    <li>
                        <div><img src="{{asset('assets3/image/phone.svg')}}" alt="support"></div>
                        <div>
                            <p>Hỗ trợ</p>
                            <p>039.554.9090 | 086.277.8388</p>
                        </div>
                    </li>
                </ul>
            </div>
       
        </div>
        <nav class="nav-desk">
            <ul>                <li><a href="./">Trang chủ</a></li>
                <li><a href="{{url('./pet')}}">Sản phẩm</a></li>
                <li><a href="./loai-san-pham">kiến thức</a></li>
                <li><a href="./lien-he">Liên hệ</a></li>     
            </ul>
        </nav>
    </header>
    
    @include('frontend.layouts.mobile_menu')
</div>

