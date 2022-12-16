import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
  appId: "1523905",
  key: "d20c32a9db3f08a130e0",
  secret: "04961e763fe2f37fdbfd",
  cluster: "ap2",
  useTLS: true
});
export const clientPusher =
new ClientPusher('d20c32a9db3f08a130e0', {
    cluster: 'ap2',
    forceTLS: true 
    });
