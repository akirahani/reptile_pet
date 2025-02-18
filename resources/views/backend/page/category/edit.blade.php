@extends('backend.home')
@section('content')
<div class="col-lg-12">
    <h1>Sửa loại sản phẩm</h1>
    <div class="card">
        <div class="card-body">
            <hr>
            <form action="{{route('admin.category.update')}}" method="POST"  enctype="multipart/form-data" runat="server">
                @csrf
                <input type="text" value="{{$category->id}}" name ="id" hidden>
                    <div class="mb-3">
                        <label for="input-6">Tên</label>
                        <input name="name" type="text" value="{{$category->name}}"  class="inputit form-control form-control-rounded" id="input-6" required>
                    </div>

                    <div class="mb-3">
                        <label for="input-6">Slug</label>
                        <div class="btn-slug btn btn-success" style="width: 100px" >Get Link</div>
                        <input name="slug" type="text" value="{{$category->slug}}" class="form-control form-control-rounded" id="input-6" required>
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
</script>
@endsection