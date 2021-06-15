import firebase from 'react-native-firebase'
export async function getHomeData(){
    let result=await firebase.firestore().collection('home').get();
    console.log('resultresult')
   console.log(JSON.stringify(result))
}