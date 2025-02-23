@extends('backend.home')
@section('content')
<div class="head-start-category mb-3">
    <h1>Danh sách tin tức</h1>
    <hr>
    <div class="row ">
        <div class="mb-3 col-2">
            <a href="{{url('/admin/category/add')}}" class="btn btn-success"><i class="fas fa-plus"></i></a>
        </div>
        <div class="mb-3 col-2">
            <input type="text" name="search-cate" id="input-6" class="form-control mb-3 ">
        </div>
        <div class="mb-3 col-2">
            <button class="btn btn-primary search-cate-button" type="button"><i class="bx bx-search-alt align-middle"></i></button>
        </div>
    </div>
</div>

    <div class="detail-main-category">
        <table class="table ">
            <thead class="table-dark">
                <tr>
    
                    <th style="width:20%" scope="col">Tên</th>
                    <th style="width:10%" scope="col">Slug</th>
                    <th scope="col" style="width:20%">Tác vụ</th>
                </tr>
            </thead>
            <tbody class="catetable">
                @foreach($category as $val)
                <tr id="category{{$val->id}}">
                    <td style="width:20%" scope="row">{{$val->name}}</td>  
         
                    <td style="width:20%" scope="row">{{$val->slug}}</td>  

                    <td style="width:20%" scope="row">
                        <a href="{{url('/admin/category/edit',$val->id)}}" class="btn btn-info"><i class="fas fa-edit"></i></a>
                        <a data-id="{{$val->id}}" class="btn btn-danger del"  ><i class="fas fa-trash"></i></a>
                    </td>
                </tr>
                @endforeach
          
            </tbody>
         
        </table>
     
        {{-- {{$category->links()}} --}}
    </div>
 
</div>
<script>

        $('.del').click(function(){
            const id = $(this).data('id');
            var cfrm = confirm("Bạn có chắc chắn muốn xóa ?");
                if(cfrm == true){  
                    $.ajax({
                        type:"GET",
                        url: "/admin/category/del/"+id,
                        data: {
                            'id': id
                        },
                        success:function(data){
                            $('#category'+id).remove();
                        }

                    });
            }
        });

        $('.search-cate-button').click(function(){
            let searchcate = $('input[name="search-cate"]').val();
            $.ajax({
                type: "POST",
                url: "{!! URL::to('/admin/category/search')!!}",
                data:{
                    _token: "{{ csrf_token() }}",
                    "search": searchcate,
                },
                statusCode: {
                    200: function (data) {
                        $('tbody.catetable').html(data.data);
                    }
                }
            });
        });
</script>
@endsection