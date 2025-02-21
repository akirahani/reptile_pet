@extends('backend.home')
@section('content')
<div class="row">
    <div class="col-12">
        <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0 font-size-18">Thêm sản phẩm</h4>
        </div>
    </div>
</div>

        <div class="card">
            <div class="card-body">
                <form action="{{url('/admin/product/insert')}}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                   
                            <div class="mb-3 col-6 col-6">
                                <label for = "input-6"> Tên sản phẩm </label>
                                <input name = "name" type="text" class ="inputit form-control form-control-rounded" id="input-6" required>
                            </div>

                            <div class="mb-3 col-6 col-6">
                                <label for ="input-9"> Tên loại</label>
                                <select id= "inputState" class ="form-select" name="category_id">
                                    @foreach($category as $val)
                                        <option selected ="" value="{{$val->id}}">{{$val->name}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="mb-3 col-6">
                                <label for = "input-6"> Giá </label>
                                <input name ="price" type="number" class ="form-control form-control-rounded" id="input-6" required>
                            </div>
                   
                            <div class="mb-3 col-6">
                                <label for = "input-6"> Link sản phẩm</label>
                                <div class="btn-slug btn btn-success" style="width: 100px" >Get Link</div>
                                <input name = "slug" type="text" class ="form-control form-control-rounded" id="input-6" >
                            </div>
                            <div class="mb-3 col-6">
                                <label for = "input-6"> Link Shopee</label>
                                <input name = "slug_shopee" type="text" class ="form-control form-control-rounded" id="input-6" >
                            </div>
                            <div class="mb-3 col-6">
                                <label for ="input-9"> Ảnh sản phẩm </label>
                                <div class ="img-main" style="border: 2px dashed #0087F7; border-radius:5px;">
                                    <img class="img-display">
                                </div>
                                <label for="partner-img" class="btn btn-info mt-2"> <i class="fas fa-upload"></i>Chọn ảnh
                                    <input type='file' id="partner-img" name="image[]" accept="image/*" required class="mb-2" multiple hidden required/>
                                </label>
                            </div>
                           
                            <div class="mb-3 col-6">
                                <label for ="input-9"> Mô tả</label>
                                <textarea name="description" id="editor" cols="30" rows="10"></textarea>
                            </div>
                           
                            

                        <div class ="form-group mt-3">
                            <button type="submit" class="btn btn-success btn-round px-5">Thêm</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- end card body -->
        </div>
        <!-- end card -->
    <script>
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
