export {};

// Type assert
let username: any;
username = 'afelipelds';
username = 'felipe';
let userName: any;
userName = 'afelipelds 345'

/**type with < > */
let message: string = (<string>username).length > 5 ? `hello to world ${username}` : `Your Username It's too short`;
console.log('message ', message);
let obtainJustUSername = (<string>userName).substring(0,10);
console.log('obtainJustUSername ', obtainJustUSername); 

/**type with as */
let helloUSer: any;
helloUSer = 'Hello my dear Friend';

let newGreeting = (helloUSer as string).split(' ', 1);
console.log('newGreeting ', newGreeting);
