@extends('frontend.index')
@section('content')
<section class="all-contact">
    <div class="title-contact">
        <p>Trang chủ /</p>
        <b>Liên hệ</b>
    </div>
    <div class="box-contact">
        <div class="infomation">
            <h1>Thông tin liên hệ</h1>
            <ul>
                <li>
                    <img src="{{asset('assets3/image/place-ct.svg')}}" alt="Địa điểm">
                    <div>     
                        <p><span>Cơ sở 1:</span> Khu chung cư Himlam, Hùng Vương, Hồng Bàng, Hải Phòng </p>
                        <p><span>Cơ sở 2:</span> Tân Triều, Triều Khúc, Thanh Trì, Hà Nội</p>
                    </div>
                </li>
                <li>
                    <img src="{{asset('assets3/image/phone-ct.svg')}}" alt="Điện thoại">
                    <p>039.554.9090 - 086.277.8388</p>
                </li>
            </ul>
        </div>
        <div class="form-contact">
            <h1>Gửi thông tin</h1>
            <p>Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.</p>
            <form action="" method="">
                <div class="row-input">
                    <div class="form-input">
                        <p>Họ tên</p>
                        <input type="text" name="name" spellcheck="false" autocomplete="off">
                    </div>
                    <div class="form-input" id="email">
                        <p>Email</p>
                        <input type="text" name="email"  spellcheck="false" autocomplete="off">
                    </div>
                </div>
                <div class="form-input">
                    <p>Số điện thoại</p>
                    <input type="text" name="phone" spellcheck="false" autocomplete="off">
                </div>
                <div class="form-input">
                    <p>Nội dung</p>
                    <textarea name="note" class="content-form"  spellcheck="false" autocomplete="off"></textarea>
                </div>
                <input class="contact-btn"  type="button" value="Gửi tin nhắn">
            </form>
       </div>
    </div>
</section>
<script>

    $('.contact-btn').click(function(){
        let sdt = $('input[name="phone"]').val();
        let ten = $('input[name="name"]').val();
        let email = $('input[name="email"]').val();
        let note = $('textarea[name="note"]').val();
        let ip = $(this).attr('id');
        if(ten == ''){
            Swal.fire(
                "",
                "Vui lòng điền tên của bạn!",
                "error"
            );
        }
        else {
            if(email == ''){
                    Swal.fire(
                        "",
                        "Vui lòng điền email của bạn!",
                        "error"
                    );  
                }
            else{
                if(sdt == ''){
                    Swal.fire(
                        "",
                        "Vui lòng điền số điện thoại của bạn!",
                        "error"
                    );
                }
                else{
                    $(".lazy").css('display','block');
                    $.ajax({
                        type: "POST",
                        url: "{!! URL::to('/contact')!!}",
                        data: {
                            "_token": "{{ csrf_token() }}",
                            "phone" : sdt,
                            "name" : ten,
                            "email" :email,
                            "note":note,
                        },
                        success:function(data){
                            $(".lazy").hide();
                            Swal.fire(
                                'THÀNH CÔNG!',
                                'Cảm ơn bạn, chúng tôi sẽ liên hệ với bạn sớm nhất !',
                                'success'
                            );
                            $('input[name="name"]').val('');
                            $('input[name="phone"]').val('');
                            $('input[name="email"]').val('');
                            $('textarea').val('');
                        }
                    
                    })

                }
            }
        }
  
    });
  
</script>
@endsection