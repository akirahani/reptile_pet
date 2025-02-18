@extends('backend.home')
@section('content')
<div class="head-start-blog mb-3">
    <h1>Danh sách tin tức</h1>
    <hr>
    <a href="{{url('/admin/blog/add')}}" class="btn btn-success"><i class="fas fa-plus"></i></a>
</div>

    <div class="detail-main-blog">
        <table class="table ">
            <thead class="table-dark">
                <tr>
    
                    <th style="width:20%" scope="col">Tiêu đề</th>
                    <th style="width:10%" scope="col">Ảnh</th>
                    <th scope="col" style="width:20%">Tác vụ</th>
                </tr>
            </thead>
            <tbody>
                @foreach($blog as $val)
                <tr id="blog{{$val->id}}">
                    <td style="width:20%" scope="row">{{$val->title}}</td>  
         
                    <td style="width:20%" scope="row">
                        <img src="/assets3/image/img_news/{{$val->image}}" alt="" style="width:100%;">  
                    </td>
                    <td style="width:20%" scope="row">
                        <a href="{{url('/admin/blog/edit',$val->id)}}" class="btn btn-info"><i class="fas fa-edit"></i></a>
                        <a data-id="{{$val->id}}" class="btn btn-danger del"  ><i class="fas fa-trash"></i></a>
                    </td>
                </tr>
                @endforeach
          
            </tbody>
         
        </table>
     
        {{-- {{$blog->links()}} --}}
    </div>
 
</div>
<script>

        $('.del').click(function(){
            const id = $(this).data('id');
            var cfrm = confirm("Bạn có chắc chắn muốn xóa ?");
                if(cfrm == true){  
                    $.ajax({
                        type:"GET",
                        url: "/admin/blog/del/"+id,
                        data: {
                            'id': id
                        },
                        success:function(data){
                            $('#blog'+id).remove();
                        }

                    });
            }
        });
</script>
@endsection