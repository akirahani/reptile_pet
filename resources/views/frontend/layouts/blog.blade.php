<section class="blog">
    <h1>Kiến thức cần biết</h1>
    <div class="all-news">
        <div class="highlight-new" id="{{$highlight->slug}}">
            <picture>
                <source class="mobile" media="(max-width:1199px)" srcset="{{ asset('assets3/image/blog-left.png')}}">
                <source class="desktop" media="(min-width:1200px)" srcset="{{ asset('assets3/image/blog-left.png')}}">
                <img src="{{ asset('assets3/image/blog-left.png')}}" alt="highlight-new" />
            </picture>
            <h2>{{$highlight->title}}</h2>
            <p class="time-new">{{date('d/m/Y',strtotime($highlight->created_at))}}</p>
            <p>{{$highlight->subtit}}</p>
        </div>
        <div class="other-new">
            <ul>
                @php
                foreach($other_blog_get as $val){
                    $arr_link_blog = explode(",",$val->image);
                    echo'<li>
                        <div class="image-onew" id="'.$val->slug.'">
                            <picture>
                                <source class="mobile" media="(max-width:1199px)" srcset="./assets3/image/img_news/'.$arr_link_blog[0].'">
                                <source class="desktop" media="(min-width:1200px)" srcset="./assets3/image/img_news/'.$arr_link_blog[0].'">
                                <img src="./assets3/image/img_news/'.$arr_link_blog[0].'" alt="other-news" />
                            </picture>
                        </div>
                        <div class="summary-new">
                            <h2>'.$val->title.'</h2>
                            <p class="time-new">'.date('d/m/Y',strtotime($val->created_at)).'</p>
                            <p>'.$highlight->subtit.'</p>
                        </div>
                    </li>';
                }
                @endphp
            </ul>
        </div>
    </div>
    <script>
        $('.image-onew').css('cursor','pointer');

        $('.image-onew').click(function(){
            $(this).css('cursor','pointer');
            let new_link = $(this).attr('id');
            $(location).attr('href', './kien-thuc/'+new_link);
        });
        $('.highlight-new').css('cursor','pointer');

        $('.highlight-new').click(function(){
            let new_link = $(this).attr('id');
            $(location).attr('href', './kien-thuc/'+new_link);
        });
    </script>
</section>