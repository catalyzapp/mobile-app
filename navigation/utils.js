import { Alert } from 'react-native';
import { Facebook, SecureStore } from 'expo';

export async function logIn() {
  const cred = await Facebook.logInWithReadPermissionsAsync(
    '1559267484111610',
    {
      permissions: ['public_profile', 'email'],
      // behavior: 'native',
    },
  );
  if (cred.type === 'success') {
    const response = await fetch(
      `https://graph.facebook.com/me?fields=id,birthday,first_name,last_name,email,gender,picture&access_token=${cred.token}`,
    );

    let user = await response.json();

    // console.log(user);

    let storageValue = {
      fbId: user.id,
      firstName: user.first_name || user.name.split(' ')[0],
      lastName: user.last_name || user.name.split(' ')[1],
      gender: user.gender || '',
      picture: user.picture.data.url || '',
      email: user.email || '',
      token: cred.token,
    };

    // console.log(storageValue);

    setAuth(storageValue);

    return true;
  }

  return false;
}

export function setAuth(account) {
  SecureStore.setItemAsync('catalyzeAuthBih', JSON.stringify(account));
}

export async function getAuth() {
  let preparse = await SecureStore.getItemAsync('catalyzeAuthBih');
  if (preparse === undefined || preparse === null) {
    return false;
  }

  let account = JSON.parse(preparse);
  return account;
}

export function deleteAuth() {
  SecureStore.deleteItemAsync('catalyzeAuthBih');
}
