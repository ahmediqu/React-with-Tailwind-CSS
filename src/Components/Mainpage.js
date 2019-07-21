import React from "react";

import { withGoogleMap, GoogleMap } from 'react-google-maps';

import logo from "../logo.png";
import phone from "../phone.png";
import user from "../user.png";
function Mainpage(){
	const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 13 }
      >
      </GoogleMap>
   ));
return (
<div>
	<header>
		<div className="container custom-container my-2">
			<nav className="flex items-center  flex-wrap pt-5">
			<div class="flex items-center flex-shrink-0 text-white mr-6">
				<a className="navbar-brand">
					<img src={logo} />
				</a>
			</div>
				<a className="" href="#">
					<img src={user} alt="" className="user-image-mobile" />
				</a>
				<button  type="button" className="navbar-toggler-img" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				</button>
				<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">

					<div className="text-lg lg:flex-grow text-center menu desktop-menu">
							<a href="#" className="menu_a">মেনু</a> | <a href="#">এইটা কোথায়?</a> | <a href="#">রিওয়ার্ড প্রোগ্রাম</a>  | <a href="#about">ফিডব্যাক</a>
					</div>
				
				
    
					<div>
					<a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
					<img src={user} alt="" className="user-image" />
					</a>
					</div>
				


				
			</div>
			<div className="mobile_menu" id="navbarSupportedContent">
				<div className="col-12 text-center menu py-4"><a href="#" className="menu_a">মেনু</a> | <a href="#">এইটা কোথায়?</a> | <a href="#">রিওয়ার্ড প্রোগ্রাম</a>  | <a href="#about">ফিডব্যাক</a>
			</div>
		</div>
	</nav>
</div>
</header>
<hr className="custom-hr"/>
<section className="pickup py-5">
<div className="container mx-auto px-4">
<div class="flex">
		<div className="w-full">
			<h1 className="text-center pickup-text">পিকআপ সেন্টার</h1>
		</div>
	</div>
</div>
</section>
<hr className="custom-hr" />
<section className="pickup-content mb-5">
<div className="container mx-auto custom-container">
	<div className="flex">
		<div className="w-full">
			

		<div className="flex mt-4">
				<div className="w-full">
				<div className="max-w-md border overflow-hidden">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2 text-center">মিরপুর কমার্স কলেজ এক্সপ্রেস আউটলেট</div>
						<p className="text-gray-700 text-base text-center">
						কমার্স কলেজ রোড, কমার্স কলেজ এর বিপরীতে
						</p>
					</div>
					<div className="px-6 py-4 my-3">
					<p className="text-muted text-center">এখন খোলা রাত ৯:৩০ প্রজ্জন্থ খোলা থাকবে</p>
					<br />
							<a href="#" className="mt-2"><u>ম্যাপ এর লিংক </u></a>
							<a href="#" className="float-right" >
							<img src={phone}  className="phone-icon" alt="" /><u>01706908611</u></a>
							
							<div className="clearfix"></div>
							<br/>
							<p className="text-center"><a href="#" className="bg-blue-500  text-white font-bold py-2 px-4 rounded  text-center custom-btn">অর্ডার করুন</a></p>
					</div>
					</div>
				</div>
			</div>




			<div className="flex mt-4">
				<div className="w-full">
				<div className="max-w-md max-w-sm border overflow-hidden">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2 text-center">মিরপুর কমার্স কলেজ এক্সপ্রেস আউটলেট</div>
						<p className="text-gray-700 text-base text-center">
						কমার্স কলেজ রোড, কমার্স কলেজ এর বিপরীতে
						</p>
					</div>
					<div className="px-6 py-4 my-3">
					<p className="text-muted text-center">এখন খোলা রাত ৯:৩০ প্রজ্জন্থ খোলা থাকবে</p>
					<br />
							<a href="#" className="mt-2"><u>ম্যাপ এর লিংক </u></a>
							<a href="#" className="float-right" >
							<img src={phone}  className="phone-icon" alt="" /><u>01706908611</u></a>
							
							<div className="clearfix"></div>
							<br/>
							<p className="text-center"><a href="#" className="bg-blue-500  text-white font-bold py-2 px-4 rounded  text-center custom-btn">অর্ডার করুন</a></p>
					</div>
					</div>
				</div>
			</div>
			








		</div>
		
		<div className="w-1/2 custom-grid-hidden">
			<GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
		</div>
	</div>
</div>
</section>
</div>
)
}
export default Mainpage;