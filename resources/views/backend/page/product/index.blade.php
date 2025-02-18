@extends('backend.home')
@section('content')
{{-- <style>
    nav{
        width: 25px;
    }
</style> --}}
<div class="head-start-news mb-3">
  <h1>Danh sách sản phẩm</h1>
  <hr>
  <a href="{{url('/admin/product/add')}}" class="btn btn-success"><i class="fas fa-plus"></i></a>
</div>
<div class="detail-main-product">
  <table class="table ">
      <thead class="table-dark">
          <tr >
              <th  scope="col">Tên sản phẩm</th>
              <th  scope="col">Tên loại</th>
              <th  scope="col">Ảnh sản phẩm</th>
              <th  scope="row">Tác vụ</th>
          </tr>
      </thead>
      <tbody>
          @foreach($product as $val)
          
          <tr id="product{{$val->id}}">
              <td  scope="row" style="width: 25%">{{$val->name}}</td>
                  
              <td  scope="row" style="width: 25%">{{$arr_loai_sp[$val->category_id]}}</td>

              <td class="image-son" scope="row" style="width: 25%">
                <?php $arr_imgs = explode(",",$val->image);?>
                  <img src="{{asset('assets3/image/product/'.$arr_imgs[0].'')}}" alt="" style="width: 100%;" >
              </td>
              <td  scope="row" style="width: 25%">
                  <a href="{{url('/admin/product/edit',$val->id)}}" class="btn btn-info"><i class="fas fa-edit"></i></a>
                  <a data-id ="{{$val->id}}" class="btn btn-danger del"> <i class="fas fa-trash"></i></a>
              </td>
          </tr>
          {{-- {{ $product->links() }}; --}}
          @endforeach
          

      </tbody>
  </table>
</div>
<script>
    $('.del').click(function(){
          const id = $(this).data('id');
          let cfm = confirm('bạn có muốn xóa');
          if(cfm == true){
              $.ajax({
                  type: "GET",
                  url: "/admin/product/del/"+id,
                  data: {
                      'id':id
                  },
                  success:function(data){
                      $('#product'+id).remove();
                  }
              })
          }
    });
</script>
@endsection
