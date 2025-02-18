<div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu -->

            <ul class="metismenu list-unstyled" id="side-menu">
                  {{-- product --}}
                {{-- <li> --}}
                    {{-- <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="grid"></i>
                        <span data-key="t-apps">Quản lý</span>
                    </a>   --}}
                
                {{-- </li> --}}
                <ul class="sub-menu" aria-expanded="false">
                    <li>
                        <a href="{{url('admin/customer')}}"  data-key="t-alerts"><i data-feather="users"></i>Tư vấn</a>
                    </li>
                    <li>
                        <a href="{{url('admin/product')}}"  data-key="t-alerts"><i data-feather="users"></i>Sản phẩm</a>
                    </li>

                    <li>
                        <a href="{{url('admin/blog')}}">
                            <i data-feather="home"></i>
                            <span data-key="t-dashboard">Tin tức <i class="fa fa-weibo" aria-hidden="true"></i></span>
                        </a>
            
                    </li>
                    <li>
                        <a href="{{url('admin/category')}}">
                            <i data-feather="home"></i>
                            <span data-key="t-dashboard">Loại sản phẩm <i class="fa fa-weibo" aria-hidden="true"></i></span>
                        </a>
            
                    </li>
                </ul>
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
