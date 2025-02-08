<section class="blog">
    <h1>Kiến thức cần biết</h1>
    <div class="all-news">
        <div class="highlight-new">
            <picture>
                <source class="mobile" media="(max-width:1199px)" srcset="{{ asset('assets3/image/blog-left.png')}}">
                <source class="desktop" media="(min-width:1200px)" srcset="{{ asset('assets3/image/blog-left.png')}}">
                <img src="{{ asset('assets3/image/blog-left.png')}}" alt="highlight-new" />
            </picture>
            <h2>TOP 10 Dòng Sóc Bay Úc Đẹp Nhất Trên Thế Giới</h2>
            <p class="time-new">21/08/2023</p>
            <p>Làm mẹ luôn là điều thiêng liêng mà bất kỳ người phụ nữ nào cũng mong muốn. Thiên chức đó có khó khăn, có gian khổ.</p>
        </div>
        <div class="other-new">
            <ul>
                @php
                for($i =0; $i < 4; $i++){
                    echo'<li>
                        <div class="image-onew">
                            <picture>
                                <source class="mobile" media="(max-width:1199px)" srcset="assets3/image/blog-right.png">
                                <source class="desktop" media="(min-width:1200px)" srcset="assets3/image/blog-right.png">
                                <img src="assets3/image/blog-right.png" alt="other-news" />
                            </picture>
                        </div>
                        <div class="summary-new">
                            <h2>500 tên hay dành cho chó con dễ thương và phổ biến nhất</h2>
                            <p class="time-new">21/08/2023</p>
                            <p>DDVS thảo dược Yaocare women - lựa chọn an toàn cho mẹ bầu & mẹ sau sinh. Được chứng nhận an toàn bởi Viện kiểm nghiệm... Đọc tiếp</p>
                        </div>
                    </li>';
                }
                @endphp
            </ul>
        </div>
    </div>
</section>