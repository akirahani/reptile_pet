@extends('backend.home')
@section('content')
<div class="head-start-customer mb-3">
    <h1>Danh sách khách cần tư vấn</h1>
    <br>
    <div class="row ">
        <div class="mb-3 col-2">
            <input type="text" name="search-custom" id="input-6" class="form-control mb-3 ">
        </div>
        <div class="mb-3 col-2">
            <button class="btn btn-primary search-custom-button" type="button"><i class="bx bx-search-alt align-middle"></i></button>
        </div>
    </div>
</div>
    <?php $customer = DB::table('customer')->get(); ?>
    <div class="detail-main-customer">
        <table class="table ">
            <thead class="table-dark">
                <tr>
                    <th style="width:20%" scope="col">Tên</th>
                    <th style="width:20%" scope="col">Email</th>
                    <th scope="col" style="width:20%">Điện thoại</th>
                    <th scope="col" style="width:20%">Note</th>
                    <th scope="col" style="width:20%">Thời gian</th>
                </tr>
            </thead>
            <tbody class="catecustom">
                @foreach($customer as $val)
                <tr id="customer{{$val->id}}">
                    <td style="width:20%" scope="row">{{$val->name}}</td>  
                    <td style="width:20%" scope="row">{{$val->email}}</td>  
                    <td style="width:20%" scope="row">{{$val->phone}}</td>  
                    <td style="width:20%" scope="row">{{$val->note}}</td>  
                    <td style="width:20%" scope="row">{{$val->note}}</td>  
                </tr>
                @endforeach
          
            </tbody>
         
        </table>
     
        {{-- {{$customer->links()}} --}}
    </div>
 
</div>
<script>
    
    $('.search-custom-button').click(function(){
            let searchcustom = $('input[name="search-custom"]').val();
            $.ajax({
                type: "POST",
                url: "{!! URL::to('/admin/customer/search')!!}",
                data:{
                    _token: "{{ csrf_token() }}",
                    "search": searchcustom,
                },
                statusCode: {
                    200: function (data) {
                        $('tbody.catecustom').html(data.data);
                    }
                }
            });
        });
</script>
@endsection