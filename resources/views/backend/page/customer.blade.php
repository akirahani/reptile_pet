@extends('backend.home')
@section('content')
<div class="head-start-customer mb-3">
    <h1>Danh sách khách cần tư vấn</h1>
    <hr>
</div>
    <?php $customer = DB::table('customer')->get(); ?>
    <div class="detail-main-customer">
        <table class="table ">
            <thead class="table-dark">
                <tr>
                    <th style="width:25%" scope="col">Tên</th>
                    <th style="width:25%" scope="col">Email</th>
                    <th scope="col" style="width:25%">Điện thoại</th>
                    <th scope="col" style="width:25%">Note</th>
                </tr>
            </thead>
            <tbody>
                @foreach($customer as $val)
                <tr id="customer{{$val->id}}">
                    <td style="width:25%" scope="row">{{$val->name}}</td>  
                    <td style="width:25%" scope="row">{{$val->email}}</td>  
                    <td style="width:25%" scope="row">{{$val->phone}}</td>  
                    <td style="width:25%" scope="row">{{$val->note}}</td>  
                </tr>
                @endforeach
          
            </tbody>
         
        </table>
     
        {{-- {{$customer->links()}} --}}
    </div>
 
</div>

@endsection