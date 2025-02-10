```javascript
// pages/index.js
import {getServerSession} from "next-auth/next";

export default async function Home({session}) {
  const data = await fetchData();
  //Now data is available for client side
  return (
    <div>Hello, Next.js! {data}</div>
  );
}

//Fetch data from an api or database using server side function
async function fetchData(){
  const session = await getServerSession();
  //Do any server side request here
  return 'Data from server';
}
```