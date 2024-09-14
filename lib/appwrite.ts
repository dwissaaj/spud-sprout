import { Client, ID , Account} from 'react-native-appwrite';


const client = new Client();

client
    .setEndpoint(`${process.env.EXPO_PUBLIC_APPWRITE_CLOUD}`) 
    .setProject(`${process.env.EXPO_PUBLIC_PROJECTID}`)
    .setPlatform(`${process.env.EXPO_PUBLIC_PLATFORM}`)
    

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
  .then(function (respon: any) {
      console.log(respon);
  }, function (error: Error) {
      console.log(error);
  });
}
