import './App.css';
import Main from './Main';

export const recentContacts = [
  {"contactId":"nHKnF54asnurEqdv",
  "email":"moaaz@vapulus.com",
  "firstName":"moaaz",
  "lastName":"yousef ",
  "mobileNumber":"117752107086",
  "image":"https://api.vapulus.com:81/profile/02a32ad2669e6fe298e607fe7cc0e1a0.jpg"
  ,"created_ts":"2017-05-08T12:36:11.000Z"},
  {"contactId":"rFZNBuIWoBMn3bES",
  "email":"ar.sharawi@hotmail.com",
  "firstName":"Abdelrahman",
  "lastName":"Elsharawy",
  "mobileNumber":"2001016666903",
  "image":"https://api.vapulus.com:81/profile/fe7ee8fc1959cc7214fa21c4840dff0a.jpg",
  "created_ts":"2017-05-03T13:53:01.000Z"},
  {"contactId":"HnPISGf7pOjmPp7W",
  "email":"moamen@ooopay.com",
  "firstName":"moamen",
  "lastName":"yousef",
  "mobileNumber":"117077352170",
  "image":"https://api.vapulus.com:81/profile/8f14e45fceea167a5a36dedd4bea2543.jpg",
  "created_ts":"2017-04-18T10:31:13.000Z"}
]
export const allContacts =[
  {"userId":null,"email":"abdelmonem.salem.as@gmail.com","userName":null,"mobileNumber":"01022024281","firstName":"Abd-elmonem","lastName":"salem"}
  ,{"userId":null,"email":"ahmed-fx_2011@hotmail.com","userName":null,"mobileNumber":"01022024281","firstName":"Ahmed","lastName":"Adel"}
  ,{"userId":null,"email":"smartech.net@gmail.com","userName":null,"mobileNumber":"01022024281","firstName":"Ahmed","lastName":"A-Rahman"}
  ,{"userId":null,"email":"farag@vizion.me","userName":null,"mobileNumber":"01022024281","firstName":"Bendo","lastName":"Farag"}
  ,{"userId":null,"email":"alfa_graphic@yahoo.com","userName":null,"mobileNumber":"01022024281","firstName":"Bari","lastName":"gamal"}
  ,{"userId":null,"email":"ahmedhesham110@gmail.com","userName":null,"mobileNumber":"01022024281","firstName":"Karim","lastName":"Hesham"}
  ,{"userId":null,"email":"ahmedcatl58@gmail.com","userName":null,"mobileNumber":"01022024281","firstName":"Makram","lastName":"ibrahim"}
  ,{"userId":null,"email":"art_ahmed_kasem@yahoo.com","userName":null,"mobileNumber":"01022024281","firstName":"Ziad","lastName":"Kassem"}
  ,{"userId":null,"email":"ahmedcs2012@gmail.com","userName":null,"mobileNumber":"01022024281","firstName":"Farah","lastName":"Mahmoud Kesha"}
  ,{"userId":null,"email":"ahmedam_am2010@yahoo.com","userName":null,"mobileNumber":"01022024281","firstName":"Salma","lastName":"Mohsen"}
]
function App() {
  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
