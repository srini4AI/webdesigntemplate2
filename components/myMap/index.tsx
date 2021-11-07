import { useState } from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
type MyMapProps = {
    isMarkerShown: boolean;
}
export const MyMap = withScriptjs(withGoogleMap(({isMarkerShown}:MyMapProps) =>{
  const [myMapState, setMapState] = useState<any>({toggleState:{}, markers:[
    { lat: 34.1069233, lng: 74.6666682,address:"H.No. 88, AlluchaBaghShallproa,<br/> Near Airtel Tower,Srinagar,<br/> Jammu Kashmir - 190 009"},
    { lat: 32.7148852, lng: 74.7198769,address:"F-53/14, 1st Floor,<br/>Railway Road,<br/> Nanak Nagar,<br/>Jammu-180001"},
    { lat: 31.6336712, lng: 74.8000796,address:"House No. 15, 1st Floor<br/> Street No. 18,<br/> New Pawan Nagar Batala Road,<br/> Amritsar - 143 001 Punjab" },
    { lat: 30.7352102, lng: 76.6934882,address:"Flat No. 1304-C<br/> Phase 10, Mohali-160062<br/>Chandigarh, Punjab" },
    { lat: 28.6927189, lng: 76.811151,address:"801-803, 8th Floor<br/>Ashoka Estate, 24 Barakhamba Road<br/> New Delhi - 110 001<br/>TEL: 011 - 4989 9600<br/>FAX: 011 - 4989 9698" },
    { lat: 26.8854479, lng: 75.6504701,address:"16-K, Shree Ram Colony<br/>Ram Nagar Vistar<br/>Near Green Field School, Sodala<br/>Jaipur - 302 019, Rajasthan" },
    { lat: 26.8489293, lng: 80.802425, address:"SS-145, Sector E<br/>LDA Colony, Kanpur Road<br/>Lucknow - 226 012<br/>Uttar Pradesh" },
    { lat: 26.1432891, lng: 91.5627951, address:"1st Floor, Ramkrishna Mission Lane VIP,<br/> Near State Bank of India<br/>P.O.- Guwahati Airport<br/>Guwahati - 781 015<br/>TEL: 0361 - 2842988" },
    { lat: 23.0204978, lng: 72.4396545,address:"B-406, Raj Avenue<br/>Near Sahajand City, Bunglow<br/>New CG Road, Chandkheda<br/>Ahmedabad - 382 424<br/>TEL: 079 - 2909 8938" },
    { lat: 23.1996633, lng: 77.2658034, address:"" },
    { lat: 22.6763858, lng: 88.0495275, address:"Sarala Apartment, Flat 1-D<br/>7/2, Motijheel Avenue<br/>Kolkata - 700 074<br/> TEL: 033 - 2560 3025" },
    { lat: 21.1613484, lng: 78.932422 },
    { lat: 19.0825223, lng: 72.7410978, address:"307, Timmy Arcade<br/>778B, Makwana Road<br/>Off. MV Road, Andheri(E)<br/>Mumbai - 400 059<br>TEL: 022 - 2851 5864"},
    { lat:18.5248904, lng: 73.722879, address:"Flat No. 12, 3rd Floor<br/>Chinar Co-operative Society<br/>Behind Homeguard Office<br/>1707,\"B\" Shivaji Nagar<br/>Pune - 411 005, Maharashtra<br/>TEL: 020 - 3020 3600" },
    { lat: 17.2888139, lng: 74.1622353, },
    { lat: 15.3478379, lng: 73.4517934,address:"H. No. 1061, Gauthan, Priol<br/>Mardol Goa - 403 404<br/> Landmark: Next to Goodwill Entp" },
    { lat: 17.4126274, lng: 78.2679571,address:"8-1-305 & 306, Unit-2, 6th Floor, Anand Silicon Chip<br/>Shaikpet, Tolichowki<br/>Hyderabad - 500 008<br/>TEL: 040 - 6700 0800"},
    { lat: 16.5103177, lng: 80.5748433 },
    { lat:17.7389495, lng: 83.1225028,address:"H.No. 1-34-1, Adharsa Nagar<br/>Ushodaya, MVP Colony<br/>Vishakhapatnam - 530 017<br/>Andhra Pradesh"},
    { lat: 12.954517, lng: 77.3507357, address:"217, 13th Cross<br/>Sampige Road<br/>Malleshwaram<br/>Bangalore - 560003"},
    { lat: 12.3108046, lng:76.5656487},
    { lat: 13.0480438, lng: 79.928808,address:"Regency's AshianaAppt<br/>G3, Ground Floor<br/>No.15/7, Asargaana Street, Alandur<br/>Chennai - 600 016<br/>TEL: 044 - 2233 5870" },
    { lat: 11.8666858, lng: 75.3523532 },
    { lat:11.2561387, lng: 75.6707252 },
    { lat: 8.7217247, lng: 77.6721367,address:"GARDS Mobile Scanner yard,<br/>Behind Custom House,<br/>New Harbour Estate,OPP Green Gate,<br/>Tuticorin -628 004<br/>Tamilnadu" },
    { lat:9.9826809, lng: 76.1608451,address:"2C&E, Block I<br/>Lord Krishna Apartments<br/>OPP. Cochin International Airport<br/>Vappalassery PO, Nedumbassery<br/>Ernakulam - 683 572<br/>TEL: 0484 - 2610034"  },
    { lat: 8.5000475, lng: 76.7840779,address:"Western Traders<br/>Teluguchetty Complex, Karamana Post<br/>Thiruvananthapuram - 695 002<br/>Kerala" }]});

  const onToggleOpen = (index:any) =>{
    const toggleState = myMapState.toggleState;
    toggleState[index]= toggleState.hasOwnProperty(index) ? !toggleState[index]:true;
    setMapState({...myMapState,toggleState});
  }
  console.log('myMapState',myMapState.markers);
return (<GoogleMap
    defaultZoom={6}
    defaultCenter={{ lat: 24.7442634, lng: 79.7266501 }}
  >
    {isMarkerShown && myMapState.markers.map((marker:any, index:number) => 
        <Marker onClick={()=>onToggleOpen(index)} key={index} position={{ lat: marker.lat, lng: marker.lng }}>
           {myMapState.toggleState && myMapState.toggleState[index] &&<InfoBox
        onCloseClick={()=>onToggleOpen(index)}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}
      >
        <div style={{ backgroundColor: `#eee`, border:"2px solid gray", opacity: 0.75, padding: `12px`, borderRadius:'10px' }}>
          <div style={{ fontSize: `16px` }} dangerouslySetInnerHTML={{__html: marker?.address}}>
          </div>
        </div>
      </InfoBox>}
          </Marker>)}
  </GoogleMap>);
}))