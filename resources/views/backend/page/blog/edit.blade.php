@extends('backend.home')
@section('content')
<div class="col-lg-12">
    <h1>Sửa tin tức</h1>
    <div class="card">
        <div class="card-body">
            <hr>
            <form action="{{route('admin.blog.update')}}" method="POST"  enctype="multipart/form-data" runat="server">
                @csrf
                <input type="text" value="{{$blog->id}}" name ="id" hidden>
                    <div class="mb-3">
                        <label for="input-6">Tiêu đề</label>
                        <input name="title" type="text" value="{{$blog->title}}"  class="inputit form-control form-control-rounded" id="input-6" required>
                    </div>

                    <div class="mb-3">
                        <label for="input-6">Tiêu đề rút gọn</label>
                        <input name="subtit" type="text" value="{{$blog->subtit}}" class="form-control form-control-rounded" id="input-6" required>
                    </div>

                    <div class="mb-3">
                        <label for="input-6">Slug</label>
                        <div class="btn-slug btn btn-success" style="width: 100px" >Get Link</div>
                        <input name="slug" type="text" value="{{$blog->slug}}" class="form-control form-control-rounded" id="input-6" required>
                    </div>
                    <div class="mb-3">
                        <label for="input-7">Nội dung</label>
                        <textarea name="content" id="editor1" class="editor1" > {!!$blog->content!!}</textarea>
                    </div>
                    <div class="mb-3">
                        <label for="input-9">Ảnh tin tức</label>
                        <div class="img-main " style="border: 2px dashed #0087F7; border-radius: 5px;">
                            <img  class="img-display"/> 
                            <img name="image" src="/assets3/image/img_news/{{$blog->image}}" alt="" style="width:10%;">
                        </div>
                        <label for="partner-img" class="btn btn-info mt-2 "><i class="fas fa-upload"></i>Chọn ảnh
                            <input type='file'  id="partner-img" name="image" accept="image/*"    class=" mb-2"  multiple hidden  />
                       
                        </label> 
                    </div>
                    
                <div class="form-group mt-3">
                    <button type="submit" class="btn btn-success btn-round px-5"></i>
                        Cập nhật</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script>
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

    function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#blah').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  }
  $("#partner-img").change(function() {
    readURL(this);
  });
  $(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img  class="img-display" style=" width:10%; padding:10px">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#partner-img').change(function(){
        imagesPreview(this,'div.img-main');
    });
});
</script>
    @endsection