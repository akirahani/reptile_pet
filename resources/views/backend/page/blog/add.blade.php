
@extends('backend.home')
@section('content')
<div class="col-lg-12">
    <h1>Đăng tin tức</h1>
    <div class="card">
        <div class="card-body">
            <hr>
            <form action="{{url('/admin/blog/insert')}}" method="POST"  enctype="multipart/form-data" >
                @csrf
                <div class="row insert-customer">
                    <div class="mb-3">
                        <label for="input-6">Tiêu đề</label>
                        <input name="title" type="text" class="inputit form-control form-control-rounded" id="input-6" required>
                    </div>

                    <div class="mb-3">
                        <label for="input-6">Tiêu đề rút gọn</label>
                        <input name="subtit" type="text" class="form-control form-control-rounded" id="input-6" required>
                    </div>

                    <div class="mb-3">
                        <label for="input-6">Slug</label>
                        <div class="btn-slug btn btn-success" style="width: 100px" >Get Link</div>
                        <input name="slug" type="text" class="form-control form-control-rounded" id="input-6" required>
                    </div>


                    <div class="mb-3">
                        <label for="input-7">Nội dung</label>
                        <textarea name="content" id="content" class="editor form-control"> </textarea>
                    </div>
                 
                    <div class="mb-3">
                        <label for="input-9">Ảnh tin tức</label>
                        <div class="img-main " style="border: 2px dashed #0087F7; border-radius: 5px;">
                            <img class="img-display"/> 
                        </div>
                        <label for="partner-img" class="btn btn-info mt-2 "><i class="fas fa-upload"></i>Chọn ảnh
                            <input type='file' id="partner-img" name="image" accept="image/*"   required  class=" mb-2"  multiple hidden required/>
                        </label> 
                    </div>
                      
                </div>
         
                <div class="form-group mt-3">
                    <button type="submit" class="btn btn-success btn-round px-5"></i>
                        Thêm</button>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
// frame-ckfinder
    $('.btn-slug').css('display','none');  
    $('.inputit').keypress(function(evt){
        if($(this).val() != null){
            $('.btn-slug').css('display','block');
        }
    });

    $('.btn-slug').click(function(){
        let slug_final = $('.inputit').val();
        let final = toSlug(slug_final);
        $('input[name="slug"]').val(final);
        $(this).css('display','none');
    });


</script>

    @endsection