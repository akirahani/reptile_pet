@extends('backend.home')
@section('content')

<div class="head-start-news mb-3">
  <h1>Danh sách sản phẩm</h1>
  <hr>

  <div class="row ">
    <div class="mb-3 col-2">
        <a href="{{url('/admin/product/add')}}" class="btn btn-success mb-3 col-3"><i class="fas fa-plus"></i></a>
    </div>
    <div class="mb-3 col-2">
        <input type="text" name="search-pro" id="input-6" class="form-control mb-3 ">
    </div>
    <div class="mb-3 col-2">
        <select id="input-6" class="form-control mb-3 catepro" >
            <option value="0">Chọn loại sản phẩm</option>
            <?php foreach($arr_loai_sp as $key=> $val){
                echo '<option value="'.$key.'">'.$val.'</option>';
            }
            ?>
        </select>
    </div>
    <div class="mb-3 col-2">
        <button class="btn btn-primary search-pro-button" type="button"><i class="bx bx-search-alt align-middle"></i></button>
    </div>
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
      <tbody class="protable">
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


    $('.search-pro-button').click(function(){
        let searchp = $('input[name="search-pro"]').val();
        let catepro = $('.catepro').val();
        $.ajax({
            type: "POST",
            url: "{!! URL::to('/admin/product/search')!!}",
            data:{
                _token: "{{ csrf_token() }}",
                "search": searchp,
                "cate": catepro
            },
            // succes:function(res){
            //     console.log(res);
            // }
            statusCode: {
                200: function (data) {
                    $('tbody.protable').html(data.data);
                }
            }
        });
    });
</script>
@endsection
