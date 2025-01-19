<div class="header-main ">
    <header>
        <div class="bar-header">
            <div class="head-left">
                <img src="{{asset('assets3/image/menu.svg')}}" alt="menu" />
            </div>
            <div class="head-center">
                <picture>
                    <source class="mobile" media="(max-width:1199px)" srcset="{{asset('assets3/image/logo-mobile.svg')}}">
                    <source class="desktop" media="(min-width:1200px)" srcset="{{asset('assets3/image/logo1.svg')}}">
                    <img src="{{asset('assets3/image/logo1.svg')}}" alt="logo" />
                </picture>
            </div>
            <div class="head-search">

                <div class="nav-desk">
                    <ul>
                        <li><a href="./">Trang chủ</a></li>
                        <li><a href="{{url('./pet')}}">Thú cưng</a></li>
                        <li><a href="./loai-san-pham">Phụ kiện</a></li>
                        <li><a href="./chinh-sach">Dịch vụ</a></li>
                        <li><a href="./tin-tuc">Tin tức</a></li>
                        <li><a href="./lien-he">Liên hệ</a></li>        
                    </ul>
                </div>
               
            </div>
            <div class="head-right">

                <input type="input" name="search" placeholder="Tìm kiếm..." />
                <img class="btn-search" src="{{asset('assets3/image/search.svg')}}" alt="search" />
    
            </div>
        </div>
    </header>
    
    @include('frontend.layouts.mobile_menu')
</div>

